import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { theme } from './chakra';
import { ChakraProvider } from '@chakra-ui/react';
import { Provider, useSelector } from 'react-redux';
import { getTheme, store } from "./redux/store"

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <AppWrapper />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

function AppWrapper(){
  const {mode} = useSelector( getTheme )
  console.log(mode)
  return (
    <ChakraProvider theme={theme(mode)}>
        <App />
    </ChakraProvider>
  )
}
