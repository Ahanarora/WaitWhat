import { StyleSheet, Text, View } from "react-native";

export default function ThemeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>📚 Themes Tab Working!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 20,
  },
});
