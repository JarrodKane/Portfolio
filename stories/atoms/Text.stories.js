import React from "react";

import { Text } from "../../components/atoms/text";

export default {
  title: "Design System/Atoms/Text",
  component: Text,
  argTypes: {
    backgroundColor: { control: "color" },
  },
};

const Template = (args) => <Text {...args} />;

export const Small = Template.bind({});
Small.args = {
  size: "small",
};

export const Medium = Template.bind({});
Medium.args = {
  size: "medium",
};

export const large = Template.bind({});
large.args = {
  size: "large",
};
