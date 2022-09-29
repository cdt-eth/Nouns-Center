/* eslint-disable @next/next/no-img-element */

import React from 'react';
import { NotionRenderer } from 'react-notion';

import guides from '../../api/devResources.json';
import PageContent from '../../components/Layout/PageContent';

export const getStaticProps = async context => {
  const id = context.params.id;
  console.log('id', id);

  const p = guides.filter(p => p.name.replace(/\s+/g, '-').toLowerCase() === id);

  let data = [];
  let error = '';

  try {
    const res = await fetch(`https://notion-api.splitbee.io/v1/page/${p[0].notionId}`);
    if (res.status !== 200)
      throw String(`Invalid server response: ${res.status} ${res.statusText}`);
    data = await res.json();

    if (!data) throw String('No data was found!');
    data = JSON.parse(JSON.stringify(data));
  } catch (e) {
    error = e.toString();
  }

  return {
    props: {
      guideData: p[0],
      docsData: data,
    },
  };
};

export const getStaticPaths = async () => {
  const paths = guides.map(project => ({
    params: { id: project.name.replace(/\s+/g, '-').toLowerCase() },
  }));

  return {
    paths,
    fallback: false,
  };
};

const ProjectDetails = ({ guideData, docsData }) => {
  const { name, imageUrl, bio, url, notion, notionId, btnText } = guideData;

  return (
    <PageContent>
      {notionId ? (
        <div className="introNouns devNotion">
          <NotionRenderer blockMap={docsData} />
        </div>
      ) : (
        <div>
          <p>{name}</p>
          <p>{imageUrl}</p>
          <p>{bio}</p>
          <p>{notion}</p>
          <p>{notionId}</p>
          <p>{url}</p>
          <p>{btnText}</p>
        </div>
      )}
    </PageContent>
  );
};

export default ProjectDetails;
