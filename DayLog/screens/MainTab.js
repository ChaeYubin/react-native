import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import FeedsScreen from "./FeedsScreen";
import SearchScreen from "./SearchScreen";
import CalendarScreen from "./CalendarScreen";
import Icon from "react-native-vector-icons/MaterialIcons";
import SearchHeader from "./../components/SearchHeader";

const Tab = createBottomTabNavigator();

function MainTab() {
  return (
    <Tab.Navigator
      tabBarOptions={{ showLabel: false, activeTintColor: "#009688" }}
    >
      <Tab.Screen
        name="Feeds"
        component={FeedsScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Icon name="view-stream" size={size} color={color} />
          ),
          title: "피드",
        }}
      />
      <Tab.Screen
        name="Calendar"
        component={CalendarScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Icon name="event" size={size} color={color} />
          ),
          title: "달력",
        }}
      />
      <Tab.Screen
        name="Search"
        component={SearchScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Icon name="search" size={size} color={color} />
          ),
          headerTitle: () => <SearchHeader />,
        }}
      />
    </Tab.Navigator>
  );
}

export default MainTab;
