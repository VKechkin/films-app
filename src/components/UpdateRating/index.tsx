import React from "react";

import {
  Box,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  Text,
  Stack,
} from "@chakra-ui/react";
import Rating from "@mui/material/Rating";

import { IPropsUpdateRating } from "@interfaces";

const UpdateRating: React.FC<IPropsUpdateRating> = ({
  onClose,
  isOpen,
  score,
}) => {
  const { actors, operator, script } = score;

  const generalAssessment = ((actors + operator + script) / 3).toFixed(2);

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      closeOnEsc={true}
      isCentered={true}
    >
      <ModalOverlay />
      <ModalContent alignItems="start">
        <ModalHeader>Ваша оценка {generalAssessment}</ModalHeader>
        <ModalBody display="flex" flexDirection="column">
          <Stack spacing={2}>
            <Box>
              <Text fontSize="md">Сценарий</Text>
              <Rating name="size-large" defaultValue={script} size="large" />
            </Box>
            <Box>
              <Text fontSize="md">Актерское мастерство</Text>
              <Rating name="size-large" defaultValue={actors} size="large" />
            </Box>
            <Box>
              <Text fontSize="md">Операторская работа</Text>
              <Rating name="size-large" defaultValue={operator} size="large" />
            </Box>
          </Stack>
        </ModalBody>

        <ModalFooter>
          <Button
            size="xs"
            colorScheme="teal"
            onClick={onClose}
            variant="outline"
          >
            Оценить
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export { UpdateRating };
