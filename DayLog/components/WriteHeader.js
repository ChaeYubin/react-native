import { useNavigation } from "@react-navigation/native";
import { React } from "react";
import { Pressable, StyleSheet, View } from "react-native";
import { Icon } from "react-native-vector-icons/MaterialIcons";
import TransparentCircleButton from "./TransparentCircleButton";

function WriteHeader({ onSave }) {
  const navigation = useNavigation();
  const onGoBack = () => {
    navigation.pop();
  };

  // name: 아이콘 이름, color: 아이콘 색상, hasMarginRight: 우측 여백 유무, onPress: 버튼 눌렀을 때 호출할 함수
  return (
    <View style={styles.block}>
      <View style={styles.iconButtonWrapper}>
        <TransparentCircleButton
          name="arrow-back"
          color="#424242"
          onPress={onGoBack}
        />
      </View>
      <View style={styles.buttons}>
        <TransparentCircleButton
          name="delete-forever"
          color="#ef5350"
          hasMarginRight
        />
        <TransparentCircleButton
          name="check"
          color="#009688"
          onPress={onSave}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  block: {
    height: 48,
    paddingHorizontal: 8,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  buttons: {
    flexDirection: "row",
    alignItems: "center",
  },
});

export default WriteHeader;
