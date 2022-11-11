import React from "react";
import { View, Text, StyleSheet } from "react-native";

function Empty() {
  return (
    <View style={styles.block}>
      <Text style={styles.description}>야호! 할일이 없습니다.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  block: {
    flex: 1, // 자신이 차지할 수 있는 영역을 모두 차지
    // alignItems, justifyContent: center -> 내용 정중앙에 위치
    alignItems: "center",
    justifyContent: "center",
  },
  description: {
    fontSize: 24,
    color: "#9e9e9e",
  },
});

export default Empty;
