import React from "react";
import { CheckIcon } from "@radix-ui/react-icons";
import * as CheckboxPrimitive from "@radix-ui/react-checkbox";

export const CheckboxDemo = () => (
  <div className="flex h-screen justify-center items-center">
    <CheckboxPrimitive.Root
      className="border border-blue-500"
      defaultChecked
      id="c1"
    >
      ここに入力！！
      <CheckboxPrimitive.Indicator>
        <CheckIcon />
      </CheckboxPrimitive.Indicator>
    </CheckboxPrimitive.Root>
    <label style={{ paddingLeft: 15 }} htmlFor="c1">
      Accept terms and conditions.
    </label>
  </div>
);

export default CheckboxDemo;
