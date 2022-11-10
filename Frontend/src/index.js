import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ChakraProvider } from "@chakra-ui/react"
import { BrowserRouter } from "react-router-dom"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
      <ChakraProvider>

    <App />
     </ChakraProvider>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();




// npm i @chakra-ui/icons


// npm i react-hover-image
// import HoverImage from "react-hover-image";

//  <HoverImage src={yourFile} hoverSrc={yourFileHover} />

// npm i @chakra-ui/react @emotion/react @emotion/styled framer-motion

// npm i react-icons
//npm i @chakra-ui/icons

// npm i react-search-autocomplete

// npm i react-custom-scrollbars-2
