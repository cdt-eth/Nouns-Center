import React from "react";
import Header from "../components/Header";
import IdeaCard from "../components/ideas/IdeaCard";
import Title from "../components/Title";
import { v4 as uuidv4 } from "uuid";
import PageHeader from "../components/Layout/PageHeader";
import PageContent from "../components/Layout/PageContent";

const ideas = () => {
  const ideasGroup = [
    {
      title: "Very Cool & Good Idea 1",
      body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce convallis libero quis posuere molestie. Vivamus luctus consectetur odio vel convallis. Donec sollicitudin vitae erat quis pharetra. ",
      submittedBy: "cdt.eth",
      date: "05/24/2022",
      votes: 83,
    },
    {
      title: "Very Cool & Good Idea 2",
      body: " Mauris quis odio non neque tempor placerat. Cras at dignissim nunc. Nunc scelerisque accumsan convallis. Duis laoreet, ipsum non maximus ultricies, est tortor faucibus arcu, ut luctus felis elit quis eros.",
      submittedBy: "evets.eth",
      date: "05/14/2022",
      votes: 76,
    },
    {
      title: "Very Cool & Good Idea 3",
      body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras aliquet purus massa, quis tristique quam imperdiet sagittis. Sed in lobortis orci. Duis consequat in mauris a tincidunt.",
      submittedBy: "0xwag.eth",
      date: "04/22/2022",
      votes: 71,
    },
    {
      title: "Very Cool & Good Idea 4",
      body: "Nullam vitae euismod dolor. Nullam ultricies mauris eu ullamcorper porttitor. Nullam non lorem facilisis, gravida ex pulvinar, iaculis libero.",
      submittedBy: "12bnoun.eth",
      date: "04/04/2022",
      votes: 68,
    },
    {
      title: "Very Cool & Good Idea 5",
      body: "Donec ultrices egestas dolor ut ultricies. Sed arcu ligula, lobortis quis magna a, elementum volutpat dolor. Donec quis sapien lorem. Nunc convallis arcu non sodales scelerisque. Donec ultrices egestas dolor ut ultricies. Sed arcu ligula, lobortis quis magna a, elementum volutpat dolor. Donec quis sapien lorem. Nunc convallis arcu non sodales scelerisque. Donec ultrices egestas dolor ut ultricies. Sed arcu ligula, lobortis quis magna a, elementum volutpat dolor. Donec quis sapien lorem. Nunc convallis arcu non sodales scelerisque. ",
      submittedBy: "messhup.eth",
      date: "03/17/2022",
      votes: 52,
    },
    {
      title: "Very Cool & Good Idea 6",
      body: "In nec lobortis lectus. Vivamus dapibus, tortor vitae porttitor consectetur, ipsum nulla convallis ligula, ut bibendum lacus magna a mi.",
      submittedBy: "ck.eth",
      date: "01/31/2022",
      votes: 20,
    },
  ];

  return (
    <>
      <PageHeader>
        <Header title="Ideas | Nouns Center" />
        <Title title="Ideas" />
      </PageHeader>

      <PageContent>
        <div>
          <div>
            {/* <h3 className="text-2xl pt-2 pb-4 text-nouns sm:text-center leading-6 font-medium text-black dark:xs:text-white dark:sm:text-black">
              The Idea Garden
            </h3> */}

            <div className="grid sm:grid-cols-1 gap-x-6">
              {ideasGroup.map((idea) => (
                <IdeaCard
                  key={uuidv4()}
                  title={idea.title}
                  body={idea.body}
                  submittedBy={idea.submittedBy}
                  date={idea.date}
                  votes={idea.votes}
                />
              ))}
            </div>
          </div>
        </div>
      </PageContent>
    </>
  );
};

export default ideas;
