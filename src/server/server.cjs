const express = require("express");
require("dotenv").config({ path: "../../.env" });
const app = express();
const router = express.Router();
const path = require("path");
const PORT = process.env.PORT || 3001;
const cors = require("cors");
const corsOptions = {
  origin: `http://localhost:${PORT}`,
};

app.use(cors(corsOptions));
const { google } = require("googleapis");
const GCAL_ID = process.env.REACT_APP_GCAL_ID;

const GoogleServiceAccountKeys = JSON.parse(
  Buffer.from(process.env.GOOGLE_KEYS, "base64").toString()
);

const jwt = new google.auth.JWT(
  GoogleServiceAccountKeys.client_email,
  null,
  GoogleServiceAccountKeys.private_key,
  [
    "https://www.googleapis.com/auth/calendar.events.readonly",
    "https://www.googleapis.com/auth/calendar.readonly",
  ]
);

const calendar = google.calendar({
  version: "v3",
  project: process.env.GOOGLE_PROJECT_NUMBER,
  auth: jwt,
});

app.use(express.static(path.join(__dirname, "../../dist")));

// Root Route
app.get("/", (req, res) => {
  console.log("YAY");
  res.sendFile(path.join(__dirname, "../../dist"));
});

// GCal API Route
app.get("/api/shows", (req, res) => {
  {
    async function main() {
      const auth = new google.auth.GoogleAuth({
        // Scopes can be specified either as an array or as a single, space-delimited string.
        credentials: GoogleServiceAccountKeys,
        scopes: [
          "https://www.googleapis.com/auth/calendar.events.readonly",
          "https://www.googleapis.com/auth/calendar.readonly",
        ],
      });

      // Acquire an auth client, and bind it to all future calls
      const authClient = await auth.getClient();
      google.options({ auth: authClient });

      await calendar.events.list(
        {
          calendarId: GCAL_ID,
          timeMin: new Date().toISOString(),
          maxResults: 6,
          singleEvents: true,
          orderBy: "startTime",
        },
        (error, result) => {
          if (error) {
            console.error(error);
            res.send(JSON.stringify({ error: error }));
          } else {
            if (result.data.items.length) {
              res.send(JSON.stringify({ events: result.data.items }));
              console.log("\u001b[32m" + "Events sent to frontend.");
            } else {
              res.send(
                JSON.stringify({ message: "No upcoming events found." })
              );
              console.warn("No upcoming events found.");
            }
          }
        }
      );
    }

    main().catch((e) => {
      console.error(e);
      throw e;
    });
  }
});

// 404 Route
app.get("/*", function (req, res) {
  console.error(`404 - Not Found`);
  res.sendFile(path.join(__dirname, "../../dist/index.html"), function (err) {
    if (err) {
      res.status(500).send(err);
    }
  });
});

app.listen(process.env.PORT, () => {
  console.log(`Server listening at http://localhost:${PORT}`);
});
