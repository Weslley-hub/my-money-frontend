import "@fontsource/inter/600.css";
import "@fontsource/inter/500.css";
import "@fontsource/inter/400.css";

import "@fontsource/poppins/600.css";

import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter } from "react-router-dom";

import { theme } from "./global/styles/theme";
import { AppRoutes } from "./routes/App.routes";
import { AuthRoutes } from "./pages/Routes/Auth.routes";

function App() {
  return (
    <ChakraProvider theme={theme}>
      <BrowserRouter>
        <AuthRoutes />
      </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;
