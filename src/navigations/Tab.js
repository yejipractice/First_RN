import React from 'react';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {Meet, Mail,Settings} from "../screens/TabScreens";
import {MaterialCommunityIcons} from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

const TabNavigation = () => {

    const TabIcon = ({name, size, color}) => {
        return <MaterialCommunityIcons name={name} size={size} color={color} />;
    };

    return (
        <Tab.Navigator initialRouteName="Settings"
        tabBarOptions={{
            labelPosition: "beside-icon", 
            showLabel: false, 
            style: {
                backgroundColor: "#54b7f9",
                borderTopColor: "#ffffff",
                borderTopWidth: 2,
            },
            activeTintColor: "#ffffff",
            inactiveTintColor: "#0b92e9",
        }}   
        >
            <Tab.Screen 
             name="Mail" 
             component={Mail} 
             options={{
                tabBarLabel: "Inbox",
                tabBarIcon: props => 
                TabIcon({
                    ...props,
                    name: props.focused? "email" : "email-outline",
                }),
                }}
                />
            <Tab.Screen 
            name="Meet" 
            component={Meet}
            options={{
                tabBarIcon: props =>
                TabIcon({
                    ...props,
                    name: props.focused? "video" : "video-outline",
                }),
            }} />
            <Tab.Screen 
            name="Settings" 
            component={Settings} 
            options={{
                tabBarIcon: props => 
                TabIcon({
                    ...props,
                    name: props.focused? "alert-circle" : "alert-circle-outline",
                }),
            }}/>
        </Tab.Navigator>
    );
};


export default TabNavigation;