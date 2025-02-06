const express = require("express");
const router = express.Router();
const { google } = require("googleapis");
const GPROJECT_NUMBER = process.env.GPROJECT_NUMBER;

// Calendar:
const CAL_SCOPES = "https://www.googleapis.com/auth/calendar.readonly";
// const GCAL_KEY = process.env.GCAL_KEY.split(String.raw`\n`).join("\n");
const GCAL_KEY = process.env.GCAL_KEY
const GCAL_EMAIL = process.env.GCAL_EMAIL;
const GCAL_ID = process.env.GCAL_ID;

// AUTH
const jwt = new google.auth.JWT(GCAL_EMAIL, null, GCAL_KEY, CAL_SCOPES);

const calendar = google.calendar({
  version: "v3",
  project: GPROJECT_NUMBER,
  auth: jwt,
});

// ROUTES
router.get("/shows", (req, res) => {
  calendar.events.list(
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
          res.send(JSON.stringify({ message: "No upcoming events found." }));
        }
      }
    }
  );
});

module.exports = router;
