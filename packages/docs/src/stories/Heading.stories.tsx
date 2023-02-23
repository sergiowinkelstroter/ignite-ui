import { Heading, HeadingProps } from "@ignite-ui/react";
import { StoryObj, Meta } from "@storybook/react";

export default {
  title: "Typography/Heading",
  component: Heading,

  args: {
    children: "Custom Title",
  },
} as Meta<HeadingProps>;

export const Primary: StoryObj<HeadingProps> = {};

export const CustomTag: StoryObj<HeadingProps> = {
  args: {
    children: "H1 Tag",
    as: "h1",
  },
  parameters: {
    docs: {
      description: {
        story:
          "Por padrao o heading sempre sera um `h2`, mas podemos alterar isso com a proprieddade `as`.",
      },
    },
  },
};
