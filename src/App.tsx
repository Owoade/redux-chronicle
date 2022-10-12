import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { Box, Text } from '@chakra-ui/react';
import { ICartitem, removeItem } from './redux/slices';
import { useAppDispatch, useAppSelector } from "./redux/hooks";
import { addItem } from "./redux/slices";
import {  getItems } from "./redux/slices"
import { useSelector, useDispatch } from 'react-redux';
import { selectItems } from './redux/store';

function App() {
  const items = [ "Maggi", "Pizza", "Ice cream", "Macros", "Sea Food", "Spaghetti", "Indomie" ]
  const cart_items = useSelector( selectItems )
  return (
    <>
      <div className="App">
      {
        items.map( item => <Item name={item} key={item} /> )
      }
    </div>
    <Box>
      {
        cart_items.items.map( item => <CartItem quantity={item.quantity}  name={ item.name }  />)
      }
    </Box>
    </>
   
  );
}

function Item({ name }:{ name: string }){
  const dispatch = useAppDispatch()
  const [ quantity, setQuantity ] = useState(1);
  const handleClick = function(e: React.MouseEvent<HTMLButtonElement, MouseEvent>){
    e.preventDefault();

    dispatch(addItem({ name, quantity } as ICartitem))
    
  }
  return (
    <Box textAlign={"left"} my={3}>
      <Text my={3}>{name}</Text>
      <Box>
        <span style={{margin: ".5em", cursor: "pointer"}} onClick={()=> setQuantity( quantity => Math.max(quantity - 1, 1) )}>-</span>
        {quantity}
        <span  style={{margin: ".5em", cursor: "pointer"}} onClick={()=> setQuantity( quantity => quantity + 1 )} >+</span>
      </Box>
      <button onClick={handleClick}>Add to cart</button>
    </Box>
  )
}


function CartItem({name, quantity}:ICartitem){
  const dispatch = useAppDispatch()
  return(
    <Box>
      <Text>{name}</Text>
      <Text>{quantity}</Text>
      <button onClick={()=> dispatch( removeItem(name) )}>remove</button>
    </Box>
  ) 
}

export default App;
