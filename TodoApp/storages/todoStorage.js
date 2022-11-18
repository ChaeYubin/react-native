import AsyncStorage from "@react-native-async-storage/async-storage";

// 키 값은 상수로 선언, 추후에 쉽게 바꿀 수 있도록
const key = "todos";

const todoStorage = {
  async get() {
    try {
      const rawTodos = AsyncStorage.getItem(key);

      if (!rawTodos) {
        // 저장된 데이터가 없으면 사용하지 않음
        throw new Error("No saved todos");
      }

      const savedTodos = JSON.parse(rawTodos);
      return savedTodos;
    } catch (e) {
      throw new Error("Failed to load todos");
    }
  },
  async set() {
    try {
      await AsyncStorage.setItem(key, JSON.stringify(data));
    } catch (e) {
      throw new Error("Failed to save todos");
    }
  },
};

export default todoStorage;
