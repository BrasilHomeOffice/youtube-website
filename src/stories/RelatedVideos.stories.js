import React from 'react';

import RelatedVideos from '../components/RelatedVideos/RelatedVideos';
// import * as HeaderStories from './Header.stories';

export default {
  title: 'Example/RelatedVideos',
  component: RelatedVideos,
};


function ytUrl(id) {
  return `https://img.youtube.com/vi/${id}/1.jpg`;
}


const Template = (args) => (
  <div style={{ maxWidth: '600px' }}>
    <RelatedVideos {...args} />
  </div>
);

export const FourVideos = Template.bind({});
FourVideos.args = {
  videos: [
    {
      title: "First youtube video here",
      description: "",
      image: ytUrl('67XTa8QeZ7o'),
    },
    {
      title: "First youtube video here",
      description: "",
      image: ytUrl('67XTa8QeZ7o'),
    },
    {
      title: "First youtube video here",
      description: "",
      image: ytUrl('67XTa8QeZ7o'),
    },
    {
      title: "First youtube video here",
      description: "",
      image: ytUrl('67XTa8QeZ7o'),
    },
  ]
};
