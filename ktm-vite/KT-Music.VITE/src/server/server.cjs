const express = require("express");
const ViteExpress = require("vite-express");
require("dotenv").config({ path: "../../.env" });
const app = express();
const path = require("path");
const PORT = process.env.PORT || 3001;
const cors = require("cors");
const corsOptions = {
  origin: `http://localhost:${PORT}`,
};

app.use(cors(corsOptions));
const { google } = require("googleapis");
const calendar = google.calendar("v3");
const GCAL_ID = process.env.REACT_APP_GCAL_ID;

app.get("/api/shows", (req, res) => {
  {
    async function main() {
      const auth = new google.auth.GoogleAuth({
        // Scopes can be specified either as an array or as a single, space-delimited string.
        scopes: [
          "https://www.googleapis.com/auth/calendar.events.readonly",
          "https://www.googleapis.com/auth/calendar.readonly",
        ],
      });

      // Acquire an auth client, and bind it to all future calls
      const authClient = await auth.getClient();
      google.options({ auth: authClient });

      // Do the magic
      const response = await calendar.events.list(
        {
          calendarId: GCAL_ID,
          timeMin: new Date().toISOString(),
          maxResults: 6,
          singleEvents: true,
          orderBy: "startTime",
        },
        (error, result) => {
          if (error) {
            res.send(JSON.stringify({ error: error }));
          } else {
            if (result.data.items.length) {
              res.send(JSON.stringify({ events: result.data.items }));
            } else {
              res.send(
                JSON.stringify({ message: "No upcoming events found." })
              );
            }
          }
        }
      );
      // let eventData = response.data.items;
      // let events = [];

      // eventData.forEach((event) => {
      //   // let eObj = {
      //   //   title: event.summary,
      //   //   start: event.start,
      //   //   end: event.end,
      //   //   id: event.id,
      //   //   description: event.description,
      //   // };
      //   events.push(event);
      // });
      // // Send data.
      // res.send(events);
      console.log("Events sent to frontend.");
    }

    main().catch((e) => {
      console.error(e);
      throw e;
    });
  }
  // calendar.events.list(
  //   {
  //     calendarId: GCAL_ID,
  //     timeMin: new Date().toISOString(),
  //     maxResults: 6,
  //     singleEvents: true,
  //     orderBy: "startTime",
  //   },
  //   (error, result) => {
  //     if (error) {
  //       res.send(JSON.stringify({ error: error }));
  //     } else {
  //       if (result.data.items.length) {
  //         res.send(JSON.stringify({ events: result.data.items }));
  //       } else {
  //         res.send(JSON.stringify({ message: "No upcoming events found." }));
  //       }
  //     }
  //   }
  // );
});

// Root Route
app.use(express.static(path.join(__dirname, "../../dist")));

// 404 Route
// app.get("/*", (req, res) => {
//   res.send("404 NOT FOUND")
// })

ViteExpress.listen(app, PORT, () => {
  console.log(`Server listening at http://localhost:${PORT}`);
});
