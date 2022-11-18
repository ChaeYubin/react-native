import React from "react";
import { FlatList, View, Text, StyleSheet } from "react-native";
import TodoItem from "./TodoItem";

function TodoList({ todos, onToggle }) {
  return (
    <FlatList
      ItemSeparatorComponent={() => <View style={styles.separator} />}
      style={styles.list}
      data={todos}
      renderItem={({ item }) => (
        <View>
          <TodoItem
            id={item.id}
            text={item.text}
            done={item.done}
            onToggle={onToggle}
          />
        </View>
      )}
    >
      keyExtractor={(item) => item.id.toString()}
    </FlatList> // keyExtractor: 각 항목의 고유 값을 추출해주는 함수(Props)
  );
}

const styles = StyleSheet.create({
  list: {
    flex: 1,
  },
  separator: {
    backgroundColor: "#e0e0e0",
    height: 1,
  },
});

export default TodoList;
