import { useState } from "react";
import NewNote from "./NewNote";
import Search from "./Search";
import { Flex } from "@chakra-ui/react";
import NoteList from "./NoteList";

const Notes = () => {
  const [search, setSearch] = useState("");

  return (
    <>
      <Flex
        fontSize={30}
        fontWeight={500}
        justifyContent="center"
        alignItems="center"
        py={2}
        color={"#c9c9c9"}
      >
        Note App
      </Flex>
      <Flex justifyContent="space-between" alignItems="center" p={4} py={2} mb={2}>
        <Search search={search} setSearch={setSearch} />
        <NewNote />
      </Flex>
      <NoteList search={search} />
    </>
  );
};

export default Notes;
