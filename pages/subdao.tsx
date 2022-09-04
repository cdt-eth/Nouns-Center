/* eslint-disable @next/next/no-img-element */
import React from "react";
import Header from "../components/Header";
import Title from "../components/Title";
import Subheader from "../components/Subheader";
import PageHeader from "../components/Layout/PageHeader";
import PageContent from "../components/Layout/PageContent";
import Button from "../components/common/Button";
import subdaos from "../api/subdaos.json";
import ReactMarkdown from "react-markdown";
import Markdown from "markdown-to-jsx";

const Subdao = () => {
  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }
  interface OpenInNewTabProps {
    children: React.ReactNode;
  }

  // overrides an <a> tag that doesn't have target="_blank" and adds it
  const OpenInNewTab = ({ children, ...props }: OpenInNewTabProps) => (
    <a {...props}>{children}</a>
  );

  interface SubdaoProps {
    name: "string";
    overview: "string";
    join: "string";
    links: [platform: "string", link: "string", img: "string"];
  }

  return (
    <>
      <PageHeader>
        <Header title="Subdao | Nouns Center" />
        <Title title="Subdao" />

        <Subheader title="Nounish Subdaos" />
      </PageHeader>

      <PageContent>
        <div className="subdaos">
          {subdaos.map((s: any) => (
            <div key={s.description} className="pb-8">
              <p className="font-bold text-2xl tracking-wider underline text-nouns">
                {s.name}
              </p>
              <div className="rounded-xl py-4">
                <img className="" src={s.img} alt={s.img} />
              </div>
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
                {s.overview}
              </Markdown>
              <br />
              <div className="pb-4">
                <p className="font-bold">How To Join:</p>
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
                  {s.join}
                </Markdown>
              </div>

              <div className="pb-4">
                <p className="font-bold">Useful Links:</p>
                {s.links.map((link) => (
                  <div key={link.link}>
                    <a href={link.link} target="_blank" rel="noreferrer">
                      {link.platform}{" "}
                    </a>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </PageContent>
    </>
  );
};

export default Subdao;
