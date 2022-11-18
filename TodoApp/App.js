import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import DateHead from "./components/DateHead";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import AddTodo from "./components/AddTodo";
import Empty from "./components/Empty";
import TodoList from "./components/TodoList";
import todosStorage from "./storages/todosStorage";

export default function App() {
  const today = new Date();

  const [todos, setTodos] = useState([
    { id: 1, text: "작업환경 설정", done: true },
    { id: 2, text: "리액트 네이티브 기초 공부", done: false },
    { id: 3, text: "투두리스트 만들어보기", done: false },
  ]);

  // AsyncStorage에서 불러오기
  useEffect(() => {
    todosStorage.get().then(setTodos).catch(console.error);
  }, []); // useEffect의 두 번째 배열이 비어있으면 -> 컴포넌트가 마운트될 때 딱 한 번만 함수가 호출됨

  // AsyncStorage에 저장하기
  // 1번째 인자: 주시하고 싶은 값이 바뀌었을 때 호출하고 싶은 함수
  // 2번째 인자: 주시하고 싶은 값을 배열 안에 넣는다.
  useEffect(() => {
    todosStorage.set(todos).catch(console.error);
  }, [todos]);

  const onInsert = (text) => {
    // 새로 등록할 항목의 id 구하기
    const nextId =
      todos.length > 0 ? Math.max(...todos.map((todo) => todo.id)) + 1 : 1;

    const todo = {
      id: nextId,
      text, // text: text 와 동일한 코드 (단축된 속성명, Shorthand property names)
      done: false,
    };

    setTodos(todos.concat(todo));
  };

  const onToggle = (id) => {
    const nextTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, done: !todo.done } : todo
    );
    setTodos(nextTodos);
  };

  const onRemove = (id) => {
    const nextTodos = todos.filter((todo) => todo.id !== id);
    setTodos(nextTodos);
  };

  return (
    <SafeAreaProvider>
      <SafeAreaView edges={["bottom"]} style={styles.block}>
        <KeyboardAvoidingView
          behavior={Platform.select({ ios: "padding" })}
          style={styles.avoid}
        >
          <DateHead date={today} />
          {todos.length === 0 ? (
            <Empty />
          ) : (
            <TodoList todos={todos} onToggle={onToggle} onRemove={onRemove} />
          )}
          <AddTodo onInsert={onInsert} />
        </KeyboardAvoidingView>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  block: {
    flex: 1,
  },
  avoid: {
    flex: 1,
  },
});
