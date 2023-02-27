import * as Tooltip from "@radix-ui/react-tooltip";
import { styled } from "../../styles";

export const TooltipContainer = styled(Tooltip.Provider, {});

export const TooltipRoot = styled(Tooltip.Root, {});

export const TooltipTrigger = styled(Tooltip.Trigger, {
  all: "unset",
});

export const TooltipPortal = styled(Tooltip.Portal, {});

export const TooltipContent = styled(Tooltip.Content, {
  padding: "$2 $5",

  backgroundColor: "$gray900",
  borderRadius: "$sm",
});
