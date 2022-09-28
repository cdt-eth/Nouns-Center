import React from "react";
import Header from "../components/Header";
import Title from "../components/Title";
import PageHeader from "../components/Layout/PageHeader";
import PageContent from "../components/Layout/PageContent";
import Subheader from "../components/Subheader";
import { BiNews, BiWrench, BiUser } from "react-icons/bi";
import Markdown from "markdown-to-jsx";

const Press = () => {
  interface OpenInNewTabProps {
    children: React.ReactNode;
  }

  // overrides an <a> tag that doesn't have target="_blank" and adds it
  const OpenInNewTab = ({ children, ...props }: OpenInNewTabProps) => (
    <a {...props}>{children}</a>
  );

  const features = [
    {
      name: "A Journalist...",
      description:
        '<p>seeking a comment from the Nouns\' community or a particular project, please email <a className="text-blue-base hover:text-black dark:text-nouns-bg-blue dark:hover:text-blue-700 transition duration-100 underline text-nouns tracking-wider" href="mailto:mike@nounspresscorps.wtf" target="_blank">Mike@nounspresscorps.wtf</a>.<br/><br/> <span className="italic">Please include: if you are on a deadline or not. We are also openly setting off-the-record and on-background virtual networking coffees if you would like one.</span></p>',
      icon: BiNews,
    },
    {
      name: "A Noun Project Builder...",
      description:
        'seeking support to promote your project via the Nouns Press Corps please email <a className="text-blue-base hover:text-black dark:text-nouns-bg-blue dark:hover:text-blue-700 transition duration-100 underline text-nouns tracking-wider" href="mailto:bagu@nounspresscorps.wtf" target="_blank">Bagu@nounspresscorps.wtf</a>.',
      icon: BiWrench,
    },
    {
      name: "Want To Join Us?",
      description:
        'Reach out, we\'re a team of four and still growing we could use the help! <a className="text-blue-base hover:text-black dark:text-nouns-bg-blue dark:hover:text-blue-700 transition duration-100 underline text-nouns tracking-wider" href="mailto:hi@nounspresscorps.wtf" target="_blank">hi@nounspresscorps.wtf</a>. ',
      icon: BiUser,
    },
  ];
  return (
    <>
      <PageHeader>
        <Header title="Press | Nouns Center" />
        <Title title="Press" />

        <Subheader
          title="Nouns Press Corps"
          body="The Nouns Press Corps (“NPC”), a two person pod of professional communicators focusing on amplifying all the good works tied to Nouns. Our goal is to advocate for Nouns and Nounish projects in traditional print and online press."
        />
      </PageHeader>
      <PageContent>
        <dl className="space-y-10 lg:grid lg:grid-cols-3 lg:gap-8 lg:space-y-0">
          {features.map((feature) => (
            <div key={feature.name}>
              <dt>
                <div className="flex h-12 w-12 items-center justify-center rounded-md bg-indigo-500 text-white">
                  <feature.icon className="h-6 w-6" aria-hidden="true" />
                </div>
                <p className="mt-5 text-nouns tracking-wider text-lg font-medium leading-6 text-gray-900">
                  {feature.name}
                </p>
              </dt>

              <Markdown
                options={{
                  overrides: {
                    a: {
                      component: OpenInNewTab,
                      props: {
                        target: "_blank",
                        rel: "noreferrer",
                      },
                    },
                  },
                }}
              >
                {feature.description}
              </Markdown>
            </div>
          ))}
        </dl>

        <hr className="my-12" />

        <div>
          <p className="mt-5 text-nouns tracking-wider text-2xl font-medium leading-6 text-gray-900">
            Nouns Press Corps Team:
          </p>

          <div className="sm:flex gap-20">
            <div>
              <p className="mt-5 text-nouns tracking-wider text-lg font-medium leading-6 text-gray-900">
                {" "}
                Michael Rekola
              </p>
              <p>
                - <a className="text-blue-base hover:text-black dark:text-nouns-bg-blue dark:hover:text-blue-700 transition duration-100 underline text-nouns tracking-wider" href="mailto:mike@nounspresscorps.wtf" target="_blank" rel="noreferrer">mike@nounspresscorps.wtf</a>

              </p>
              <p>- Team Lead | Doxxed</p>
            </div>

            <div>
              <p className="mt-5 text-nouns tracking-wider text-lg font-medium leading-6 text-gray-900">
                {" "}
                Bagu Haunto
              </p>
              <p>
                - <a className="text-blue-base hover:text-black dark:text-nouns-bg-blue dark:hover:text-blue-700 transition duration-100 underline text-nouns tracking-wider" href="mailto:bagu@nounspresscorps.wtf" target="_blank" rel="noreferrer">Bagu@nounspresscorps.wtf</a>

              </p>
              <p>- Team Member</p>
            </div>
          </div>
        </div>
      </PageContent>
    </>
  );
};

export default Press;
