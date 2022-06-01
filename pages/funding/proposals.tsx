/* eslint-disable @next/next/no-img-element */
import React from "react";
import Header from "../../components/Header";
import PageContent from "../../components/Layout/PageContent";
import PageHeader from "../../components/Layout/PageHeader";
import Title from "../../components/Title";
import { CheckIcon, ThumbUpIcon, UserIcon } from "@heroicons/react/solid";
import { ExternalLinkIcon } from "@heroicons/react/solid";
import Button from "../../components/common/Button";
import Subheader from "../../components/Subheader";
import Link from "../../components/Link";
import Status from "../../components/common/Status";

const timeline = [
  {
    id: 1,
    content: "Applied to",
    target: "Front End Developer",
    href: "#",
    date: "Sep 20",
    datetime: "2020-09-20",
    icon: UserIcon,
    iconBackground: "bg-gray-400",
  },
  {
    id: 2,
    content: "Advanced to phone screening by",
    target: "Bethany Blake",
    href: "#",
    date: "Sep 22",
    datetime: "2020-09-22",
    icon: ThumbUpIcon,
    iconBackground: "bg-blue-500",
  },
  {
    id: 3,
    content: "Completed phone screening with",
    target: "Martha Gardner",
    href: "#",
    date: "Sep 28",
    datetime: "2020-09-28",
    icon: CheckIcon,
    iconBackground: "bg-green-500",
  },
  {
    id: 4,
    content: "Advanced to interview by",
    target: "Bethany Blake",
    href: "#",
    date: "Sep 30",
    datetime: "2020-09-30",
    icon: ThumbUpIcon,
    iconBackground: "bg-blue-500",
  },
  {
    id: 5,
    content: "Completed interview with",
    target: "Katherine Snyder",
    href: "#",
    date: "Oct 4",
    datetime: "2020-10-04",
    icon: CheckIcon,
    iconBackground: "bg-green-500",
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
                    text={"View Proposals"}
                    link="https://nouns.wtf/vote"
                  />
                  <Button
                    text={"Create Discourse"}
                    link="https://discourse.nouns.wtf/"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="my-8">
            <Subheader title="Overview" />
            <p>
              This guide will walk you through the steps creating a Nouns DAO
              proposal. If you&apos;re unsure if a proposal is the correct path
              for your idea to take to receive funding, please refer back to{" "}
              <Link text="this guide" url="/funding" leavesPage={false} /> to
              make sure you&apos;re in the correct place. If you&apos;re idea is
              still in a nascent stage or the details haven&apos;t been fleshed
              out, you can get feedback in the{" "}
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
          </div>

          <div className="my-8">
            <Subheader title="How To write a prop" />
            <p>What, How, Who, How Much, How Long.</p>
            <br />
            <p>
              Nunc volutpat ultricies ex, vel semper odio faucibus a. Integer et
              nisl nibh. Cras eu quam vitae libero pellentesque rhoncus. Nam
              porttitor, augue rutrum gravida ullamcorper, arcu urna gravida
              mauris, non pretium justo libero sit amet augue. Morbi a arcu
              elit. Ut eget mauris eget sem dignissim consequat et quis elit.
              Class aptent taciti sociosqu ad litora torquent per conubia
              nostra, per inceptos himenaeos. Ut faucibus massa id commodo
              iaculis. Suspendisse potenti. Curabitur mattis et magna sed
              ultricies. Nulla facilisi. Donec sit amet eleifend arcu, in
              maximus nibh.
            </p>
          </div>

          <div className="my-8">
            <Subheader title="Post on Discourse" />
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
              change anything, but you can specifcy in the comments what was
              wrong.
            </p>

            <img
              className="border-2 mt-3 rounded-xl p-2 bg-white shadow-md"
              src="/funding/discourse.png"
              alt="discourse"
            />
          </div>

          <div className="my-8">
            <Subheader title="Sponsorship" />
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
              <Link text="Nouns' Subdaos" url="/subdaos" leavesPage={true} /> to
              sponsor your proposal.
            </p>

            {/* <div className="grid grid-cols-2 gap-0.5 lg:mt-8">
              <div className="text-nouns cursor-pointer hover:bg-opacity-50 transition tracking-wider text-gray-500 text-2xl col-span-1 flex justify-center py-8 px-8 bg-gray-200 rounded-tl-xl">
                Nouncil
              </div>
              <div className="text-nouns cursor-pointer hover:bg-opacity-50 transition tracking-wider text-gray-500 text-2xl col-span-1 flex justify-center py-8 px-8 bg-gray-200 rounded-tr-xl">
                Nouners
              </div>
              <div className="text-nouns cursor-pointer hover:bg-opacity-50 transition tracking-wider text-gray-500 text-2xl col-span-1 flex justify-center py-8 px-8 bg-gray-200 rounded-bl-xl">
                SubDAOs
              </div>
              <div className="text-nouns cursor-pointer hover:bg-opacity-50 transition tracking-wider text-gray-500 text-2xl col-span-1 flex justify-center py-8 px-8 bg-gray-200 rounded-br-xl">
                Delegatees
              </div>
            </div> */}
          </div>

          <div className="my-8">
            <Subheader title="Getting Feedback" />
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
          </div>

          {/* <div className="flow-root mb-12">
            <ul role="list" className="-mb-8">
              {timeline.map((event, eventIdx) => (
                <li key={event.id}>
                  <div className="relative pb-8">
                    {eventIdx !== timeline.length - 1 ? (
                      <span
                        className="absolute top-4 left-4 -ml-px h-full w-0.5 bg-gray-200"
                        aria-hidden="true"
                      />
                    ) : null}
                    <div className="relative flex space-x-3">
                      <div>
                        <span
                          className={classNames(
                            event.iconBackground,
                            "h-8 w-8 rounded-full flex items-center justify-center ring-8 ring-white"
                          )}
                        >
                          <event.icon
                            className="h-5 w-5 text-white"
                            aria-hidden="true"
                          />
                        </span>
                      </div>
                      <div className="min-w-0 flex-1 pt-1.5 flex justify-between space-x-4">
                        <div>
                          <p className="text-sm text-gray-500">
                            {event.content}{" "}
                            <a
                              href={event.href}
                              className="font-medium text-gray-900"
                            >
                              {event.target}
                            </a>
                          </p>
                        </div>
                        <div className="text-right text-sm whitespace-nowrap text-gray-500">
                          <time dateTime={event.datetime}>{event.date}</time>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div> */}

          <div className="my-8">
            <Subheader title="Voting Timeline" />
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
              {`"{ insert queued button text here}"`} button. Anyone can do this
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
          </div>
        </div>
      </PageContent>
    </>
  );
};

export default proposals;
