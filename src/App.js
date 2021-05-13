import React from 'react';
import styled from "styled-components/native";
import StackNavigation from './navigations/Stack';
import Home from "./screens/Home";
import List from './screens/List';
import {NavigationContainer} from "@react-navigation/native";
import TabNavigation from "./navigations/Tab"; 

const App = () => {
    return (
        <NavigationContainer>
           <TabNavigation /> 
        </NavigationContainer>
    );
};

export default App;