/* eslint-disable @next/next/no-img-element */
import React from "react";
import { VerticalTimelineElement } from "react-vertical-timeline-component";
import { getRandomNounPic } from "../../utils";

interface EventProps {
  date: string;
  title: string;
  body: any | string;
  img?: string;
  link?: string;
  buttonText?: string;
  idx?: number;
}

const Event = ({
  date,
  title,
  body,
  img,
  link,
  buttonText,
  idx,
}: EventProps) => {
  return (
    <VerticalTimelineElement
      contentStyle={{ background: "#ebebeb", color: "#151c3b" }}
      contentArrowStyle={{ borderRight: "7px solid  #ebebeb" }}
      className="vertical-timeline-element--work timelineEvent"
      date={date}
      iconStyle={{ background: "rgb(33, 150, 243)", color: "#ebebeb" }}
      icon={
        <img className="rounded-full" src={getRandomNounPic(idx)} alt="noun" />
      }
    >
      <h3 className="vertical-timeline-element-title text-nouns capitalize ">
        {title}
      </h3>

      <p>{body}</p>

      {img !== "" && (
        <div className="rounded-lg overflow-hidden my-2">
          <img src={`/timeline/${img}`} alt={img} />
        </div>
      )}

      {link !== "" && (
        <div className="pt-4 pb-2">
          <a
            className="bg-nouns-cool-text hover:bg-opacity-80 transition rounded-md px-3 py-2 text-xs text-white"
            href={link}
            target="_blank"
            rel="noreferrer"
          >
            {buttonText}
          </a>
        </div>
      )}
    </VerticalTimelineElement>
  );
};

export default Event;
