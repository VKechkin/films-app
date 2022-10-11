import React, { useRef } from "react";

import { Button } from "@chakra-ui/react";

import { IPropsButton } from "@interfaces";

const ActionButton: React.FC<IPropsButton> = ({
  onClick,
  children,
  ...restProps
}) => {
  const rootRef = useRef<HTMLButtonElement>(null);

  return (
    <Button
      border="none"
      bgColor="inherit"
      ref={rootRef}
      onClick={onClick}
      {...restProps}
    >
      {children}
    </Button>
  );
};

export default ActionButton;
