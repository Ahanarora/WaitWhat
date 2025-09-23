import { useLocalSearchParams } from "expo-router";
import { StyleSheet, Text, View } from "react-native";
import { stories } from "../../data/dummyData";

export default function StoryDetail() {
  const { id } = useLocalSearchParams();
  const story = stories.find((s) => s.id === id);

  if (!story) {
    return (
      <View style={styles.container}>
        <Text>Story not found.</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{story.title}</Text>
      <Text style={styles.tags}>Tags: {story.tags.join(", ")}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, backgroundColor: "#fff" },
  title: { fontSize: 22, fontWeight: "bold", marginBottom: 8 },
  tags: { fontSize: 14, color: "#666" },
});
