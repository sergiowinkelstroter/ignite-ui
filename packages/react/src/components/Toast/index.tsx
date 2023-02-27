import {
  ToastClose,
  ToastContainer,
  ToastDescription,
  ToastRoot,
  ToastTitle,
  ToastViewport,
  Button,
} from "./styles";
import { Heading } from "../Heading";
import { Text } from "../Text";
import { X } from "phosphor-react";
import { ReactNode } from "react";

export interface ToastProps {
  open: boolean;
  button: ReactNode;
  title: string;
  description: string;
}

export const Toast = ({ open, title, description, button }: ToastProps) => {
  return (
    <ToastContainer swipeDirection="right">
      <Button>{button}</Button>
      <ToastRoot open={open}>
        <div>
          <ToastTitle>
            <Heading size="sm">{title}</Heading>
          </ToastTitle>
          <ToastDescription>
            <Text size="sm">{description}</Text>
          </ToastDescription>
        </div>
        <ToastClose>
          <X />
        </ToastClose>
      </ToastRoot>
      <ToastViewport />
    </ToastContainer>
  );
};
