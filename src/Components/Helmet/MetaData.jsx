import React from 'react';
import { Helmet } from 'react-helmet-async';
const MetaData = ({ title, description }) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name='description' content={description} />
      <meta property='og:type' content='website' />
      <meta property='og:site_name' content='ST United' />
      <meta property='og:locale' content='vi' />
    </Helmet>
  );
};

export default MetaData;
