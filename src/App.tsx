import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter } from "react-router-dom";

import { AuthRoutes } from "./pages/Routes/Auth.routes";

import { theme } from "./global/styles/style"

function App() {
  return (
    <ChakraProvider theme={theme}>
      <BrowserRouter>
        <AuthRoutes/>
      </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;