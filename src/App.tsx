import { Container, Box } from "@chakra-ui/react";
import Notes from "./components/Notes";


const App = () => {
  return (
    <Container maxW={"container.lg"} height={'100vh'} pt={5} alignItems={'center'}>
      <Box bg={'white'} minH={'95vh'} borderRadius={10}>
        <Notes/>
      </Box>
    </Container>
  );
};

export default App;
