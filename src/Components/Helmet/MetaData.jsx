import React from 'react';
import { Helmet } from 'react-helmet-async';
const MetaData = ({ title, description }) => {
  return (
    <Helmet>
      <title>{title}</title>
      <link rel='canonical' href='https://final-project-flyteam-dp04-gw.vercel.app/' />
      <meta name='description' content={description} />
      <link rel='canonical' href='https://final-project-flyteam-dp04-gw.vercel.app/' />
      <meta property='og:type' content='website' />
      <meta property='og:site_name' content='ST United' />
      <meta property='og:locale' content='vi' />
    </Helmet>
  );
};

export default MetaData;
