import { styled } from "../../styles";
import * as Toast from "@radix-ui/react-toast";

export const ToastContainer = styled(Toast.Provider, {});

export const ToastViewport = styled(Toast.Viewport, {
  position: "fixed",
  bottom: 0,
  right: 0,
});

export const ToastRoot = styled(Toast.Root, {
  backgroundColor: "$gray800",
  boxSizing: "border-box",
  display: "flex",
  alignItems: "flex-start",
  padding: "$3 $5",
  width: "$80",
  border: "1px solid $gray600",
  borderRadius: "$sm",
  position: "relative",

  "&[data-state='open']": {
    animation: "slideIn 150ms cubic-bezier(0.16, 1, 0.3, 1)",
  },

  "&[data-state='closed']": {
    animation: "hide 100ms ease-in",
  },

  "&[data-state='move']": {
    transform: "translateX(var(--radix-toast-swipe-move-x))",
  },

  "&[data-state='cancel']": {
    transform: "translateX(0)",
    transition: "transform 200ms ease-out",
  },
  "&[data-state='end']": {
    animation: "swipeOut 100ms ease-out",
  },
});

export const ToastTitle = styled(Toast.Title, {});

export const Button = styled("button", {
  background: "none",
  border: 0,
});

export const ToastDescription = styled(Toast.Description, {});

export const ToastClose = styled(Toast.Close, {
  all: "unset",
  position: "absolute",
  top: "$4",
  right: "$4",
  color: "$gray200",

  cursor: "pointer",
});
