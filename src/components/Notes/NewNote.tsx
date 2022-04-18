import React, { useEffect, useState } from "react";
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
} from "@chakra-ui/react";
import { AddIcon } from "@chakra-ui/icons";

function NewNote() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const initialRef = React.useRef<HTMLButtonElement | any>();
  const [color, setColor] = useState('red.400')
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const colors = ['red.400', 'orange.400', 'gray.400', 'yellow.400', 'green.400', 'teal.400', 'blue.400', 'cyan.400', 'purple.400', 'pink.400'];

  const onSubmit = () => {
      if(color && title && content){

      }else{
          alert('Form is not empty');
      }
  }
  
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
          <ModalBody pb={6}>
            <FormControl>
              <FormLabel>Title</FormLabel>
              <Input value={title} onChange={(e) => setTitle(e.target.value)} name="title" ref={initialRef} placeholder="Title" />
            </FormControl>
            <FormControl mt={4}>
              <FormLabel>Text</FormLabel>
              <Textarea value={content} onChange={(e) => setContent(e.target.value)} name="content" placeholder="Text" />
            </FormControl>
            <FormControl mt={4}>
              <FormLabel>Color</FormLabel>
              <Flex justifyContent={"space-around"} flexWrap={"wrap"}>
                
                {colors.map((element,index) => <Box
                  key={index}
                  cursor={"pointer"}
                  bg={element}
                  border={'1px solid'}
                  borderColor={color === element ? 'black' : 'inherit'}
                  borderRadius={5}
                  onClick={() => setColor(element)}
                  p={4}
                  m={0.5}
                />)}
    
              </Flex>
            </FormControl>
          </ModalBody>
          <ModalFooter>
            <Button onClick={onSubmit} colorScheme="blue" mr={3}>
              Save
            </Button>
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export default NewNote;
