import React, { useRef } from "react";

import { Button } from "@chakra-ui/react";

import { IPropsButton } from "@interfaces";

const CardButton: React.FC<IPropsButton> = ({
  onClick,
  children,
  ...restProps
}) => {
  const rootRef = useRef<HTMLButtonElement>(null);

  return (
    <Button
      colorScheme="teal"
      variant="outline"
      size="xs"
      h="30px"
      w="100px"
      ref={rootRef}
      onClick={onClick}
      {...restProps}
    >
      {children}
    </Button>
  );
};

export default CardButton;
