import React from "react";

import { Box, Image, Heading, Button, useDisclosure } from "@chakra-ui/react";

import { UpdateRating } from "@components/UpdateRating";

import { IPropsCard } from "@interfaces";

import "./style.scss";

const Card: React.FC<IPropsCard> = ({ film, onChangeFavorites }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const { id, description, name, src, score, favourites } = film;

  return (
    <>
      <Box
        border="1px"
        borderColor="#2d797b"
        h="330px"
        width="300px"
        display="flex"
        flexDirection="column"
        mb="30px"
      >
        <Image h="180px" objectFit="cover" src={src} alt="картинка фильма" />
        <Box p="10px">
          <Heading as="h4" size="md" noOfLines={1}>
            {name}
          </Heading>
          <div className="description">{description}</div>
          <Box display="flex" justifyContent="space-between">
            <Button
              colorScheme="teal"
              variant="outline"
              size="xs"
              h="30px"
              w="100px"
              onClick={() => onOpen()}
            >
              Оценить
            </Button>
            {favourites ? (
              <Button
                colorScheme="teal"
                variant="outline"
                size="xs"
                h="30px"
                w="100px"
                onClick={() => onChangeFavorites(id)}
              >
                Убрать
              </Button>
            ) : (
              <Button
                colorScheme="teal"
                variant="outline"
                size="xs"
                h="30px"
                w="100px"
                onClick={() => onChangeFavorites(id)}
              >
                В избранное
              </Button>
            )}
          </Box>
        </Box>
      </Box>
      <UpdateRating onClose={onClose} isOpen={isOpen} score={score} />
    </>
  );
};

export { Card };
