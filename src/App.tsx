import { Container, Box } from "@chakra-ui/react";
import Notes from "./components/Notes";


const App = () => {
  return (
    <Container maxW={"container.lg"}>
      <Box bg={'white'} minH={'100vh'}>
        <Notes/>
      </Box>
    </Container>
  );
};

export default App;
