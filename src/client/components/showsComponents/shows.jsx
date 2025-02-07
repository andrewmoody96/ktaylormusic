import { useEffect, useState } from "react";
import { addressCheck, eventLinkFormatter } from "./formatters";
import Event from "./event";
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import localizedFormat from "dayjs/plugin/localizedFormat";
import isSameOrAfter from "dayjs/plugin/isSameOrAfter";
dayjs.extend(localizedFormat);
dayjs.extend(utc);
dayjs.extend(isSameOrAfter);

let dateToFormat = "";
let eventLocation = "";
let ogURL = null;
let name = "";
let date = null;
let time = null;
let location = null;
let url = null;

// Event Renderer - renders based on presence of event URL
const eventLoader = (url) => {
  if (url === "null") {
    return (
      <Event className="w-[75vw]" description={[date, name, time, location]} />
    );
  } else {
    return (
      <Event
        className="w-[75vw]"
        description={[date, name, time, location, url]}
      />
    );
  }
};

export default function Shows() {
  const [events, setEvents] = useState([]);
  const [isUpcoming, setIsUpcoming] = useState(true);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const res = await fetch("/api/shows");
        const jsonData = await res.json();
        if (!jsonData) {
          console.error("load failed");
          setIsUpcoming(false);
        } else {
          if (jsonData.message === "No upcoming events found.") {
            setIsUpcoming(false);
            console.log("No events found");
          } else {
            console.log("Events found");

            let eventObj = jsonData.events;
            const events = Object.keys(eventObj).map((key) => eventObj[key]);
            let upcoming = [];
            let getNow = dayjs.utc().toISOString();
            let now = getNow.slice(".");

            events.forEach((event) => {
              let end = dayjs(event.end.dateTime).toISOString();
              let compare = dayjs(now).isAfter(end);

              if (compare === false) {
                upcoming.push(event);
                setEvents(upcoming);
                setIsUpcoming(true);
              } else {
                setIsUpcoming(false);
              }
            });
          }
        }
      } catch (error) {
        console.error(error);
      }
    };
    fetchEvents();
  }, []);

  return (
    <>
      {!isUpcoming ? (
        <div className="text-center text-[0.8rem] tablet:text-[1rem] m-2 mb-20 w-fit desktop:w-[35vw] desktop:self-start flex flex-col justify-center items-center">
          <span
            id="shows"
            className="headingFredericka text-[1.5rem] tablet:text-[2rem] m-2 underline"
          >
            Upcoming Shows
          </span>
          <div className="flex flex-col justify-center items-center desktop:w-[45vw]">
            <div className="w-[98vw] desktop:w-[45vw] justify-center text-center">
              <h2 className="flex flex-col w-auto font-moda text-xl text-center visible p-2">
                No upcoming events.
              </h2>
            </div>
          </div>
        </div>
      ) : (
        <div className="text-center text-[0.8rem] tablet:text-[1rem] m-2 mb-20 w-fit desktop:w-[35vw] desktop:self-start flex flex-col justify-center items-center">
          <span
            id="shows"
            className="headingFredericka text-[1.5rem] tablet:text-[2rem] m-2 underline"
          >
            Upcoming Shows
          </span>
          {/* only display in col view if events.length < 1? */}
          {events.map((event) => (
            <div key={event.id}>
              <div className="flex justify-center w-auto">
                <div id="hiddenJS" className="hidden">
                  {(dateToFormat = `${event.start.dateTime}`)}
                  {(name = event.summary)}
                  {(date = dayjs(dateToFormat).format("M/D"))}
                  {(time = dayjs(dateToFormat).format("LT"))}
                  {(eventLocation = `${event.location}`)}
                  {(location = `${addressCheck(eventLocation)}`)};
                  {/* LINK RENDERING */}
                  {(ogURL = event.description)}
                  {(url = `${eventLinkFormatter(ogURL)}`)}
                </div>
              </div>
              {eventLoader(url)}
            </div>
          ))}
        </div>
      )}
    </>
  );
}
