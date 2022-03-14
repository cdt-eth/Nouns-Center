import React from "react";
import { VerticalTimeline } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import Event from "./Event";
import events from "../api/timeline.json";

const Timeline = () => {
  return (
    <VerticalTimeline>
      {events.map((event) => (
        <Event
          date={event.date}
          title={event.title}
          body={event.body}
          img={event.img}
          link={event.link}
          buttonText={event.buttonText}
        />
      ))}
    </VerticalTimeline>
  );
};

export default Timeline;
