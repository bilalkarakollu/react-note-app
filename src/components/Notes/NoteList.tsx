import { SimpleGrid, Box } from "@chakra-ui/react";
import { useAppSelector } from "../../store/hooks";
import Note from "./Note";

interface SearchProps {
  search: string;
}
const NoteList = (props: SearchProps) => {
  const { search } = props;
  const { notes } = useAppSelector((state) => state.notes);

  return (
    <SimpleGrid columns={[1,1,1,3]} spacing={10} p={4}>
      {notes
        .filter((note) =>
          note.title.toLowerCase().includes(search.toLowerCase())
        )
        .map((note) => (
          <Note key={note.id} note={note} />
        ))}
    </SimpleGrid>
  );
};

export default NoteList;
