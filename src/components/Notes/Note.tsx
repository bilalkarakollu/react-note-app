import { Box, Flex } from "@chakra-ui/react";
import { Note as INote } from "../../types/note";
import { CloseIcon } from "@chakra-ui/icons";
import { useAppDispatch } from "../../store/hooks";
import { removeNote } from  '../../store/slices/noteSlice';
interface NoteProps {
  note: INote;
}

const Note = (props: NoteProps) => {
    const dispatch = useAppDispatch();
  const { note } = props;
  return (
    <Box bg={note.color} p={2} minH={200} color={"white"} borderRadius={20}>
      <Flex
        justifyContent="space-between"
        alignItems="center"
        p={2}
        borderBottom={"1px solid #e8e8e8"}
      >
        <Box fontSize={25} fontWeight={500}>
          {note.title}
        </Box>
        <Box cursor={'pointer'} onClick={() => dispatch(removeNote(note.id))}>
          <CloseIcon/>
        </Box>
      </Flex>
      <Box p={2}>{note.content}</Box>
    </Box>
  );
};

export default Note;
