import { Container, Box } from "@chakra-ui/react";
import Notes from "./components/Notes";


const App = () => {
  return (
    <Container maxW={"container.lg"} minHeight={'100vh'} pt={5} alignItems={'center'}>
      <Box bg={'white'} minH={'95vh'} borderRadius={10} mb={[25,25,25,5]}>
        <Notes/>
      </Box>
    </Container>
  );
};

export default App;
