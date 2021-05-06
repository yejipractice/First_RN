import React from 'react';
import {StyleSheet, View} from "react-native";
import Button from "./components/Button";

const App = () => {
    return (
        <View style={styles.container}>
           <Button title="Hanbit" />
           <Button title="React Native" /> 
        </View>
    );
};

const styles =StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: "#fff",
        alignItems:"center",
        justifyContent:"center",
    },
});

export default App;