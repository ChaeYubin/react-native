import React from "react";
import { FlatList, View, Text, StyleSheet } from "react-native";

function TodoList({ todos }) {
  return (
    <FlatList
      style={styles.list}
      data={todos}
      renderItem={({ item }) => (
        <View>
          <Text>{item.text}</Text>
        </View>
      )}
    >
      keyExtractor={(item) => item.id.toString()}
    </FlatList> // keyExtractor: 각항목의 고유 값을 추출해주는 함수(Props)
  );
}

const styles = StyleSheet.create({
  list: {
    flex: 1,
  },
});

export default TodoList;
