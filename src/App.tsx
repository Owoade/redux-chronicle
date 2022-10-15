import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { Box, Button, Text } from '@chakra-ui/react';
import { useAppDispatch, useAppSelector } from "./redux/hooks";
import { useSelector, useDispatch } from 'react-redux';
import { getTheme } from './redux/store';
import { switchTheme } from './redux/slices';



function App() {
  const items = [ "Maggi", "Pizza", "Ice cream", "Macros", "Sea Food", "Spaghetti", "Indomie" ]
  const {mode} = useSelector( getTheme );
  const dispatch = useAppDispatch()
  return (
    <Box bgColor="brand.bgColor">
      <Button bgColor={"brand.bgColor"} onClick={ ()=> dispatch(switchTheme())}>Toggle theme</Button>
      <Text color={"brand.color"}> Hello there</Text>
    </Box>
   
  );
}



export default App;
