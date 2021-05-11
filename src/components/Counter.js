import React,{useState} from 'react';
import styled from "styled-components/native";
import Button from "./Button ";

const StyledText = styled.Text`
    font-size: 24px;
    margin: 10px;
`;

const Counter = () => 
{
    const [count,setCount] = useState(0);

    return (
        <>
          <StyledText>count: {count}</StyledText>  
          <Button title="+"
          onPress={()=> {
              setCount(prev => prev+1);
              setCount(prev => prev+1);
              console.log(count);
          }} />
          <Button title="-"
          onPress={()=> {
              setCount(count-1);
          }} />
        </>
    );
};

export default Counter;