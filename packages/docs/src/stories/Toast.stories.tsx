import { Toast, ToastProps, Button } from "@ignite-ui/react";
import { StoryObj, Meta } from "@storybook/react";

export default {
  title: "Data Display/Toast",
  component: Toast,

  args: {
    button: <Button>Open</Button>,
    open: true,
  },
} as Meta<ToastProps>;

export const Primary: StoryObj<ToastProps> = {
  args: {
    title: "Agendamento realizado",
    description: "Quarta-feira, 23 de Outubro às 16h",
  },
};
