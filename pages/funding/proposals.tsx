/* eslint-disable @next/next/no-img-element */
import React from "react";
import Header from "../../components/Header";
import PageContent from "../../components/Layout/PageContent";
import PageHeader from "../../components/Layout/PageHeader";
import Title from "../../components/Title";
import Button from "../../components/common/Button";
import Subheader from "../../components/Subheader";
import Link from "../../components/Link";
import Status from "../../components/common/Status";
import TextContent from "../../components/Layout/TextContent";

const props = [
  {
    title: "DAO Residency",
    href: "https://nouns.wtf/vote/17",
    description:
      "Fund a designer, engineer, and community lead in residency to help push forward new projects.",
    date: "Nov 28, 2021",
    imageUrl:
      "https://pbs.twimg.com/media/FJcno3EWUAUNAhj?format=jpg&name=large",
    author: {
      name: "Brian",
      href: "https://twitter.com/pbrianandj",
      imageUrl:
        "https://pbs.twimg.com/profile_images/1439973770643443714/GW7Vf9qj_400x400.png",
    },
  },

  {
    title: "Nouns Marketplace",
    href: "https://nouns.wtf/vote/46",
    description: "Create a marketplace for Nouns and their extension projects.",
    date: "April 2, 2022",
    imageUrl: "https://jacob.energy/img/hyper.png",
    author: {
      name: "Jacob",
      href: "https://twitter.com/js_horne",
      imageUrl:
        "https://pbs.twimg.com/profile_images/1534610987755642881/sPGI-poF_400x400.jpg",
    },
  },
  {
    title: "Children's Book",
    href: "https://nouns.wtf/vote/83",
    description:
      "Create an illustrated book that will open a path to the traditional publishing world for Nouns.",
    date: "May 26, 2022",
    imageUrl:
      "https://cdn.discordapp.com/attachments/979401162358931596/979401735648997496/unknown.png",
    author: {
      name: "Brandon Mighty",
      href: "https://twitter.com/brandonmighty",
      imageUrl:
        "https://pbs.twimg.com/profile_images/1511768684276109316/vBfvqz3y_400x400.jpg",
    },
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
const proposals = () => {
  return (
    <>
      <PageHeader>
        <Header title="Proposals | Nouns Center" />
        <Title title="Funding: Proposals" />

        <Subheader
          title="For Projects needing 10-1,000Ξ"
          body="Resources allocated for the long-term growth of the Nouns project. Larger in scope and undergo more scruntiny."
        />
      </PageHeader>

      <PageContent>
        <div>
          <div className="relative bg-[#EBEBEB] rounded-xl">
            <div className="bg-[#3467EB] md:absolute md:left-0 md:h-full md:w-1/2 sm:flex sm:items-center rounded-l-xl">
              <img
                src="/funding/props.gif"
                className="fit-content"
                alt="timeline"
              />
            </div>

            <div className="relative max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8 lg:py-6">
              <div className="md:ml-auto md:w-1/2 md:pl-10">
                <p className="mt-2 text-black text-3xl font-extrabold text-nouns tracking-wider sm:text-4xl">
                  Build on Nouns
                </p>
                <p className="mt-3 text-lg text-gray-500">
                  View past proposals to get an idea of what&apos;s been funded
                  and feel free to open a Discourse post with your idea.
                </p>

                <div className="mt-8 flex gap-4">
                  <Button
                    text={"Post An Idea"}
                    link="https://discourse.nouns.wtf/"
                  />
                  <Button
                    text={"Past Proposals"}
                    link="https://nouns.wtf/vote"
                  />
                </div>
              </div>
            </div>
          </div>

          <TextContent title="Overview">
            <p>
              This guide will walk you through the steps creating a Nouns DAO
              proposal. If you&apos;re unsure if opening a proposal is the
              correct path to take for your ideato receive funding, please refer
              back to{" "}
              <Link text="this guide" url="/funding" leavesPage={false} /> to
              make sure you&apos;re in the correct place. If your idea is still
              in a nascent stage or the details haven&apos;t been fleshed out,
              you can get feedback in the{" "}
              <Link
                text="#proposal-ideas"
                url="https://discord.com/channels/849745721544146955/875751366340005908"
                leavesPage={true}
              />{" "}
              channel in the{" "}
              <Link
                text="Nouns Discord"
                url="https://discord.com/invite/nouns"
                leavesPage={true}
              />
              .
            </p>
          </TextContent>

          <TextContent title="Sponsorship">
            <p>
              Only Noun owners (Nouners) can submit official proposals to the
              DAO for funding. If you don&apos;t own a Noun yourself then
              you&apos;ll have to get a sponsor to open the proposal for you.
              You can connect with a Nouner sponsor either by waiting on
              feedback on your Discourse post or networking in the Discord. You
              can also try to get groups like{" "}
              <Link
                text="The Nouncil"
                url="https://nouncil.wtf"
                leavesPage={true}
              />{" "}
              or any of the{" "}
              <Link text="Nouns' Subdaos" url="/subdaos" leavesPage={false} />{" "}
              to sponsor your proposal.
            </p>
          </TextContent>

          <TextContent title="How to write a prop">
            <p>Your proposal should effectively communicate:</p>
            <ul className="list-disc list-inside pb-4">
              <li className="ml-6">What is the project</li>
              <li className="ml-6">How will it proliferate Nouns</li>
              <li className="ml-6">How much funding you&apos;ll need</li>
              <li className="ml-6">How the funds break down</li>
              <li className="ml-6">What are the success metrics</li>
            </ul>

            <p>
              It would be wise to keep this information at the very beginning,
              potentially in a <b>&quot;TLDR section&quot;</b>. It is common for
              proposals to become very long as people write out all the
              implementation details so, for the sake of the reviewers, having
              this <em>baseline info</em> easily available is appreciated. Think
              &quot;if they don&apos;t read the full proposal, what do they{" "}
              <b>need</b> to know?&quot; Below you can see three well-rounded
              proposals that were successfully funded. Each of them clearly
              communicated their idea with a simple overview, a timeline with
              milestones, and a cost breakdown.
            </p>

            <div>
              <div className="relative sm:py-6">
                <div className="relative max-w-7xl mx-auto">
                  <div className="xs:mt-6 sm:mt-0 max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none">
                    {props.map((prop) => (
                      <div
                        key={prop.title}
                        className="flex flex-col rounded-lg shadow-lg overflow-hidden"
                      >
                        <div className="flex-shrink-0">
                          <a href={prop.href} target="_blank" rel="noreferrer">
                            <img
                              className="h-48 w-full object-cover"
                              src={prop.imageUrl}
                              alt=""
                            />
                          </a>
                        </div>
                        <div className="flex-1 bg-white p-6 flex flex-col justify-between">
                          <div className="flex-1">
                            <a
                              href={prop.href}
                              target="_blank"
                              rel="noreferrer"
                              className="block mt-2"
                            >
                              <p className="text-xl text-nouns tracking-wide text-gray-900">
                                {prop.title}
                              </p>
                              <p className="mt-3 text-base text-gray-500">
                                {prop.description}
                              </p>
                            </a>
                          </div>
                          <div className="mt-6 flex items-center">
                            <div className="flex-shrink-0">
                              <a
                                href={prop.author.href}
                                target="_blank"
                                rel="noreferrer"
                              >
                                <span className="sr-only">
                                  {prop.author.name}
                                </span>
                                <img
                                  className="h-10 w-10 rounded-full"
                                  src={prop.author.imageUrl}
                                  alt={prop.title}
                                />
                              </a>
                            </div>
                            <div className="ml-3">
                              <p className="text-sm font-medium text-gray-900">
                                <a
                                  href={prop.author.href}
                                  target="_blank"
                                  rel="noreferrer"
                                >
                                  {prop.author.name}
                                </a>
                              </p>
                              <div className="flex space-x-1 text-sm text-gray-500">
                                {prop.date}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </TextContent>

          <TextContent title="Post on Discourse">
            <p>
              Once you have all the details nailed down you can post your
              proposal on{" "}
              <Link
                text={"Discourse"}
                url={"https://discourse.nouns.wtf/"}
                leavesPage={true}
              />
              , a forum for Nouns proposal ideas. At the top click the{" "}
              <b>&quot;+ New Topic&quot;</b> button and post your idea. Be sure
              to prefix the title with <b>&quot;Proposal: &quot;</b> so that it
              stands out as a proposal request when others are sifting through
              the entire list. Then, copy/paste your content (copy &amp; images)
              below. Feel free to save your progress and come back later. One
              note, Discourse doesn&apos;t give editing privileges to new
              accounts until they&apos;ve been active for a while so if you
              submit your post and made a mistake you won&apos;t be able to
              change anything, but you can specify in the comments what was
              wrong.
            </p>

            <img
              className="border-2 mt-3 rounded-xl p-2 bg-white shadow-md"
              src="/funding/discourse.png"
              alt="discourse"
            />
          </TextContent>

          <TextContent title="Getting Feedback">
            <p>
              This is the refinement period. All proposals undergo budget &amp;
              impact scrutiny so don&apos;t be surprised if yours receives some.
              It&apos;s the &quot;refining fire&quot; that prepares your
              proposal for the voting period. If your proposal is defeated for
              something obvious or avoidable but you weren&apos;t made aware of
              it beforehand that would&apos;ve been a shame. So take feedback
              seriously, be prepared to push back as well, and ultimately know
              that criticism isn&apos;t a bad thing. If you&apos;re open, take
              the feedback and modify the proposal before going on-chain with
              it. The aim is to make sure the proposal proliferates Nouns
              effectively based off the proposed execution and funds requested.
            </p>
          </TextContent>

          <TextContent title="Voting Timeline">
            <p>
              Once your proposal is submitted it will undergo the{" "}
              <em>&quot;Voting Week&quot;</em> which will be a minimum of 7
              days. When the proposal goes up its status becomes{" "}
              <Status status="pending" bgColor="bg-[#4965f0]" />. This is a
              2-day window where the proposal is public but not able to be voted
              on. Usually more discussion around the prop happens during this
              time. After those couple days, its status changes to{" "}
              <Status status="active" bgColor="bg-[#4965f0]" /> and Noun holders
              can vote on it for the next 3 days. Barring cancellation or a
              veto, the proposal will either have{" "}
              <Status status="succeeded" bgColor="bg-[#43b369]" /> or been{" "}
              <Status status="defeated" bgColor="bg-[#e40536]" />. If it
              succeeds, it will then have to be manually queued by connecting
              your wallet to{" "}
              <Link
                text="nouns.wtf/vote"
                url="https://nouns.wtf/vote"
                leavesPage={true}
              />
              , finding the prop, and clicking the{" "}
              <b>&quot;Queue Proposal ⌐◨-◨&quot;</b> button. Anyone can do this
              and it will cost some gas. Then the status will be changed to{" "}
              <Status status="queued" bgColor="bg-black" /> and after 2 final
              days it will be{" "}
              <Status status="executed" bgColor="bg-[#43b369]" /> and you can
              consider the this peroid over, payment will have begun, and the
              building can begin.
            </p>
            <img
              className="pt-6 "
              src="/funding/governance.jpeg"
              alt="timeline"
            />
          </TextContent>
        </div>
      </PageContent>
    </>
  );
};

export default proposals;
