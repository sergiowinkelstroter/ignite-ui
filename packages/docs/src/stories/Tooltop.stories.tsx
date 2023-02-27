import { Tooltip, TooltipProps, Button } from "@ignite-ui/react";
import { StoryObj, Meta } from "@storybook/react";

export default {
  title: "Data Display/Tooltip",
  component: Tooltip,

  args: {
    children: <Button variant="secondary">26</Button>,
  },
} as Meta<TooltipProps>;

export const Primary: StoryObj<TooltipProps> = {
  args: {
    content: "26 de Outubro - Disponível",
  },
};
