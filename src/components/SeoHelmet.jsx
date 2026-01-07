import React from 'react';
import { Helmet } from 'react-helmet';

const SeoHelmet = ({ title, description, keywords, ogImage, ogUrl }) => (
  <Helmet>
    {title && <title>{title}</title>}
    {description && <meta name="description" content={description} />}
    {keywords && <meta name="keywords" content={keywords} />}
    {/* Open Graph */}
    {ogImage && <meta property="og:image" content={ogImage} />}
    {ogUrl && <meta property="og:url" content={ogUrl} />}
    {title && <meta property="og:title" content={title} />}
    {description && <meta property="og:description" content={description} />}
    <meta property="og:type" content="website" />
    <meta name="twitter:card" content="summary_large_image" />
  </Helmet>
);

export default SeoHelmet;
