import { Text, TextProps } from "@ignite-ui/react";
import { StoryObj, Meta } from "@storybook/react";

export default {
  title: "Typography/Text",
  component: Text,

  args: {
    children:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae quisquam tempora labore aperiam consequatur doloribus quod aut accusamus reprehenderit dolorum, est, deleniti debitis laboriosam odio molestiae ex assumenda, eos dolorem?",
  },
} as Meta<TextProps>;

export const Primary: StoryObj<TextProps> = {};

export const CustomTag: StoryObj<TextProps> = {
  args: {
    children: "Strong tag",
    as: "strong",
  },
};
