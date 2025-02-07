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
// const calendar = google.calendar("v3");
const GCAL_ID = process.env.REACT_APP_GCAL_ID;
const gcsCredentials = {
  type: "service_account",
  project_id: "ktaylormusic-site",
  private_key_id: process.env.GOOGLE_PRIVATE_KEY_ID,
  private_key: process.env.GOOGLE_PRIVATE_KEY.split(String.raw`\n`).join("\n"),
  client_email: process.env.GOOGLE_CLIENT_EMAIL,
  client_id: process.env.GOOGLE_CLIENT_ID,
  auth_uri: "https://accounts.google.com/o/oauth2/auth",
  token_uri: "https://oauth2.googleapis.com/token",
  auth_provider_x509_cert_url: process.env.GOOGLE_AUTH_PROVIDER_X509,
  client_x509_cert_url: process.env.GOOGLE_CLIENT_X509,
};

const jwt = new google.auth.JWT(
  process.env.GOOGLE_CLIENT_EMAIL,
  null,
  process.env.GOOGLE_PRIVATE_KEY,
  [
    "https://www.googleapis.com/auth/calendar.events.readonly",
    "https://www.googleapis.com/auth/calendar.readonly",
  ]
);

const calendar = google.calendar({
  version: "v3",
  project: process.hasUncaughtExceptionCaptureCallback.GOOGLE_PROJECT_NUMBER,
  auth: jwt,
});

app.get("/api/shows", (req, res) => {
  {
    async function main() {
      const auth = new google.auth.GoogleAuth({
        // Scopes can be specified either as an array or as a single, space-delimited string.
        credentials: gcsCredentials,
        scopes: [
          "https://www.googleapis.com/auth/calendar.events.readonly",
          "https://www.googleapis.com/auth/calendar.readonly",
        ],
      });

      // Acquire an auth client, and bind it to all future calls
      const authClient = await auth.getClient();
      console.log("Made it.");
      google.options({ auth: authClient });

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
            console.log("Error though...");

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

// Root Route
app.use(express.static(path.join(__dirname, "../../dist")));

// 404 Route
// BUILD 404 PAGE

ViteExpress.listen(app, PORT, () => {
  console.log(`Server listening at http://localhost:${PORT}`);
});
