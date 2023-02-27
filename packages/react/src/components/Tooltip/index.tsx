import { ReactNode } from "react";
import { Text } from "../Text";
import {
  TooltipContainer,
  TooltipContent,
  TooltipPortal,
  TooltipRoot,
  TooltipTrigger,
} from "./styles";
import { FilePlus } from "phosphor-react";

export interface TooltipProps {
  content: string;
  children: ReactNode;
}

export const Tooltip = ({ content, children }: TooltipProps) => {
  return (
    <TooltipContainer>
      <TooltipRoot>
        <TooltipPortal>
          <TooltipContent sideOffset={5}>
            <Text size="md">{content}</Text>
          </TooltipContent>
        </TooltipPortal>
        <TooltipTrigger>{children}</TooltipTrigger>
      </TooltipRoot>
    </TooltipContainer>
  );
};
