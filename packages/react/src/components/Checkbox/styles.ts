import { styled } from "../../styles";
import * as Checkbox from "@radix-ui/react-checkbox";

export const CheckboxContainer = styled(Checkbox.Root, {
  all: "usent",
  width: "$6",
  height: "$6",
  backgroundColor: "$gray900",
  borderRadius: "$xs",
  lineHeight: 0,
  cursor: "pointer",
  overflow: "hidden",
  boxSizing: "border-box",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",

  border: "2px solid $gray900",

  "&[data-state='checked']": {
    backgroundColor: "$ignite300",
  },

  "&:focus": {
    border: "2px solid $ignite300",
  },
});

export const CheckboxIndicator = styled(Checkbox.Indicator, {
  color: "$white",
  width: "$4",
  height: "$4",
});
