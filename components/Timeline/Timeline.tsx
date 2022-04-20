import React from "react";
import { v4 as uuidv4 } from "uuid";
import { VerticalTimeline } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import Event from "./Event";
import events from "../../api/timeline.json";

const Timeline = () => {
  return (
    <VerticalTimeline>
      {events.map((event, idx) => (
        <Event
          date={event.date}
          title={event.title}
          body={event.body}
          img={event.img}
          link={event.link}
          buttonText={event.buttonText}
          key={uuidv4()}
          idx={idx}
        />
      ))}
    </VerticalTimeline>
  );
};

export default Timeline;
