import { StyleSheet, Text, View } from "react-native";

export default function StoryScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>📄 Stories Tab Working!</Text>
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
