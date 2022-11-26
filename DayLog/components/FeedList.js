import React from "react";
import { FlatList, StyleSheet, View } from "react-native";
import FeedListItem from "./FeedListItem";

function FeedList({ logs, onScrolledToBottom }) {
  const onScroll = (e) => {
    // 함수가 없으면 아무 동작도 하지 않음 (캘린더 화면, 검색 화면)
    if (!onScrolledToBottom) {
      return;
    }

    const { contentSize, layoutMeasurement, contentOffset } = e.nativeEvent;
    const distanceFromBottom =
      contentSize.height - layoutMeasurement.height - contentOffset.y;

    if (
      contentSize.height > layoutMeasurement.height &&
      distanceFromBottom < 72
    ) {
      onScrolledToBottom(true);
    } else {
      onScrolledToBottom(false);
    }
  };

  return (
    <FlatList
      data={logs}
      style={styles.block}
      renderItem={({ item }) => <FeedListItem log={item} />}
      keyExtractor={(log) => log.id}
      ItemSeparatorComponent={() => <View style={styles.separator} />}
      onScroll={onScroll}
    />
  );
}

const styles = StyleSheet.create({
  block: { flex: 1 },
  separator: {
    backgroundColor: "#e0e0e0",
    height: 1,
    width: "100%",
  },
});

export default FeedList;
