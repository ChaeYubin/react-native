import React from "react";
import { View, Button } from "react-native";

function HomeScreen({ navigation }) {
  return (
    <View>
      <Button
        title="Detail 1 열기"
        onPress={() => navigation.push("Detail", { id: 1 })} // {id: 1} -> route 파라미터 넘겨주기
      />
      <Button
        title="Detail 2 열기"
        onPress={() => navigation.push("Detail", { id: 2 })}
      />
      <Button
        title="Detail 3 열기"
        onPress={() => navigation.push("Detail", { id: 3 })}
      />
    </View>
  );
}

export default HomeScreen;
