import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./screens/HomeScreen";
import DetailScreen from "./screens/DetailScreen";
import { View, Text, TouchableOpacity } from "react-native";

const Stack = createNativeStackNavigator(); // 네이티브 스택 내비게이터 생성

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            title: "홈",
            // Header 블록에 대한 스타일
            headerStyle: {
              backgroundColor: "#29b6f6",
            },
            // Header의 텍스트, 버튼들 색상
            headerTintColor: "#ffffff",
            // 타이틀 텍스트의 스타일
            headerTitleStyle: {
              fontWeight: "bold",
              fontSize: 20,
            },
          }}
        />
        <Stack.Screen
          name="Detail"
          component={DetailScreen}
          options={{
            headerLeft: ({ onPress }) => (
              <TouchableOpacity onPress={onPress}>
                <Text>Left</Text>
              </TouchableOpacity>
            ),
            headerTitle: ({ children }) => (
              <View>
                <Text>{children}</Text>
              </View>
            ),
            headerRight: ({ onPress }) => (
              <TouchableOpacity onPress={onPress}>
                <Text>Right</Text>
              </TouchableOpacity>
            ),
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
