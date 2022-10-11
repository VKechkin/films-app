import React from "react";

import {
  Button,
  Drawer,
  DrawerBody,
  DrawerOverlay,
  DrawerContent,
  useDisclosure,
} from "@chakra-ui/react";

import useAppNavigation from "@hooks/useAppNavigation";

import ActionButton from "@primitive/ActionButton";

import { IProps } from "@interfaces";

import "./style.scss";

const Menu: React.FC<IProps> = () => {
  const { goMain, goFavourites, goRating } = useAppNavigation();

  const { isOpen, onOpen, onClose } = useDisclosure();

  const navigationItemsСonfiguration = [
    {
      label: "Главная",
      callback: goMain,
    },
    {
      label: "Избранное",
      callback: goFavourites,
    },
    {
      label: "Оценённые",
      callback: goRating,
    },
  ];

  return (
    <div className="menu-wrapper">
      <Button
        colorScheme="teal"
        size="lg"
        fontSize="15px"
        p="30px 50px"
        onClick={onOpen}
      >
        Меню
      </Button>
      <Drawer placement="left" onClose={onClose} isOpen={isOpen} size="sm">
        <DrawerOverlay />
        <DrawerContent p="150px 100px 0 50px">
          <DrawerBody
            display="flex"
            flexDirection="column"
            alignItems="start"
            gap="10px"
            fontSize="25px"
          >
            {navigationItemsСonfiguration.map((config) => {
              const { label, callback } = config;
              return (
                <ActionButton onClick={() => callback()} key={`key-${label}`}>
                  {label}
                </ActionButton>
              );
            })}
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </div>
  );
};

export { Menu };
