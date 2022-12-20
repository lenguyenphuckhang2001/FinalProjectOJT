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
      <meta name='viewport' content='width=device-width, initial-scale=1' />
      <meta name='theme-color' content='#000000' />
      <meta name='description' content='ST United – United to grow up' />
      <meta charset='utf-8' />
    </Helmet>
  );
};

export default MetaData;
