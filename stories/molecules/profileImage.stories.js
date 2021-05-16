import React from "react";

import ProfileImage from "../../components/molecules/profileImage";

export default {
  title: "Design System/Molecules/ProfileImage",
  component: ProfileImage,
  argTypes: {
    backgroundColor: { control: "color" },
  },
};

const Template = (args) => <ProfileImage {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  imageFile: "../assets/github.svg",
  primary: true,
  size: "medium",
};

// export const Secondary = Template.bind({});
// Secondary.args = {
//   size: "medium",
// };

// export const Large = Template.bind({});
// Large.args = {
//   size: "large",
// };

// export const Small = Template.bind({});
// Small.args = {
//   size: "small",
// };
