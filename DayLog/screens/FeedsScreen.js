import React, { useContext, useState } from "react";
import { StyleSheet, View } from "react-native";
import LogContext from "../contexts/LogContext";
import FloatingWriteButton from "./../components/FloatingWriteButton";
import FeedList from "./../components/FeedList";

function FeedsScreen() {
  const { logs } = useContext(LogContext);
  console.log(JSON.stringify(logs, null, 2));

  const [hidden, setHidden] = useState(false);

  const onScrolledToBottom = (isBottom) => {
    if (hidden !== isBottom) {
      setHidden(isBottom);
    }
  };

  return (
    <View style={styles.block}>
      <FeedList logs={logs} onScrolledToBottom={onScrolledToBottom} />
      <FloatingWriteButton hidden={hidden} />
    </View>
  );
}

const styles = StyleSheet.create({
  block: { flex: 1 },
});

export default FeedsScreen;
