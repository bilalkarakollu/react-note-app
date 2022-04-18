import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  FormLabel,
  FormControl,
  Input,
  useDisclosure,
  Textarea,
  Box,
  Flex,
  FormErrorMessage,
} from "@chakra-ui/react";
import { AddIcon } from "@chakra-ui/icons";
import { addNote } from "../../store/slices/noteSlice";
import { useFormik } from "formik";
import validationSchema from "./validations";
import {useAppDispatch} from "../../store/hooks";

function NewNote() {
    const dispatch = useAppDispatch();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const initialRef = React.useRef<HTMLButtonElement | any>();
  const [color, setColor] = useState("red.400");
  const colors = [
    "red.400",
    "orange.400",
    "gray.400",
    "yellow.400",
    "green.400",
    "teal.400",
    "blue.400",
    "cyan.400",
    "purple.400",
    "pink.400",
  ];

  const { handleSubmit, handleChange, handleBlur, values, errors, touched } =
    useFormik({
      initialValues: {
        title: "",
        content: "",
      },
      onSubmit: (values) => {
        const newNote = {
            ...values,
            id: uuidv4(),
            color: color,
        };
        dispatch(addNote(newNote));
        onClose();
      },
      validationSchema,
    });

  return (
    <>
      <Button onClick={onOpen}>
        <AddIcon />
      </Button>

      <Modal
        closeOnOverlayClick={false}
        initialFocusRef={initialRef}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Create your account</ModalHeader>
          <ModalCloseButton />
          <form onSubmit={handleSubmit}>
            <ModalBody pb={6}>
              <FormControl isInvalid={errors.title ? true : false}>
                <FormLabel>Title</FormLabel>
                <Input
                  value={values.title}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  name="title"
                  ref={initialRef}
                  placeholder="Title"
                />
                {errors.title && touched.title && (
                  <FormErrorMessage>{errors.title}</FormErrorMessage>
                )}
              </FormControl>
              <FormControl isInvalid={errors.content ? true : false} mt={4}>
                <FormLabel>Text</FormLabel>
                <Textarea
                  value={values.content}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  name="content"
                  placeholder="Text"
                />
                {errors.content && touched.content && (
                  <FormErrorMessage>{errors.content}</FormErrorMessage>
                )}
              </FormControl>
              <FormControl mt={4}>
                <FormLabel>Color</FormLabel>
                <Flex justifyContent={"space-around"} flexWrap={"wrap"}>
                  {colors.map((element, index) => (
                    <Box
                      key={index}
                      cursor={"pointer"}
                      bg={element}
                      border={"1px solid"}
                      borderColor={color === element ? "black" : "inherit"}
                      borderRadius={5}
                      onClick={() => setColor(element)}
                      p={4}
                      m={0.5}
                    />
                  ))}
                </Flex>
              </FormControl>
            </ModalBody>
            <ModalFooter>
              <Button type={"submit"} colorScheme="blue" mr={3}>
                Save
              </Button>
              <Button type="button" onClick={onClose}>
                Cancel
              </Button>
            </ModalFooter>
          </form>
        </ModalContent>
      </Modal>
    </>
  );
}

export default NewNote;
