import React from 'react';
import ContentLoader from 'react-content-loader';

export const CategorySkeleton = (props) => (
  <ContentLoader
    speed={2}
    width={130}
    height={50}
    viewBox="0 0 130 50"
    backgroundColor="#f4f4f4"
    foregroundColor="#ffd79e"
    {...props}>
    <rect x="0" y="0" rx="30" ry="30" width="130" height="50" />
  </ContentLoader>
);
