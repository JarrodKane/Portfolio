import React from "react";

import { Icon } from "../../components/atoms/icon";

export default {
  title: "Design System/Atoms/Icon",
  component: Icon,
  argTypes: {
    backgroundColor: { control: "color" },
  },
};

const Template = (args) => <Icon {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  size: "medium",
  label: "Button",
};

export const Secondary = Template.bind({});
Secondary.args = {
  size: "medium",
  label: "Button",
};

export const Large = Template.bind({});
Large.args = {
  size: "large",
  label: "Button",
};

export const Small = Template.bind({});
Small.args = {
  size: "small",
  label: "Button",
};
