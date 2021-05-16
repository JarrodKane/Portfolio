import React from "react";

import { Headings } from "../../components/atoms/headings";

export default {
  title: "Design System/Atoms/Headings",
  component: Headings,
  argTypes: {
    backgroundColor: { control: "color" },
  },
};

const Template = (args) => <Headings {...args} />;

export const H1 = Template.bind({});
H1.args = {
  type: "h1",
};

export const H2 = Template.bind({});
H2.args = {
  type: "h2",
};

export const H3 = Template.bind({});
H3.args = {
  type: "h3",
};
