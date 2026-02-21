import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import {Provider} from "react-redux";
import {store} from "./store";
import {ChakraProvider} from "@chakra-ui/react";
import {system} from "./theme/theme.ts";

createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
      <ChakraProvider value={system} >
          <App />
      </ChakraProvider>
  </Provider>
)
