import ReactDOM from "react-dom/client";
import { ChakraProvider } from "@chakra-ui/react";
import App from "./App";
import { ToastContainer } from 'react-toastify';
import { Provider } from "react-redux";
import { store } from "./store";
import "./index.css";
import 'react-toastify/dist/ReactToastify.css';

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <Provider store={store}>
    <ChakraProvider>
    <ToastContainer />
      <App />
    </ChakraProvider>
  </Provider>
);
