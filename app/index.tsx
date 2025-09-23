import React, { useState } from "react";
import { FlatList, StyleSheet, View } from "react-native";
import { Button, Card, Text } from "react-native-paper";
// expo-router Link lets us navigate between screens
import { Link } from "expo-router";
// our dummy data
import { stories, themes } from "../data/dummyData";

export default function HomeScreen() {
  // state to toggle between "stories" and "themes"
  const [active, setActive] = useState<"stories" | "themes">("stories");

  // pick the right dataset depending on the toggle
  const data = active === "stories" ? stories : themes;

  return (
    <View style={styles.container}>
      {/* Toggle buttons */}
      <View style={styles.toggle}>
        <Button
          mode={active === "stories" ? "contained" : "outlined"}
          onPress={() => setActive("stories")}
        >
          Stories
        </Button>
        <Button
          mode={active === "themes" ? "contained" : "outlined"}
          onPress={() => setActive("themes")}
        >
          Themes
        </Button>
      </View>

      {/* Feed of cards */}
      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          // 👇 This makes the whole card clickable
          <Link href={`/${active === "stories" ? "story" : "theme"}/${item.id}`}>
  <Card style={styles.card}>
    <Card.Cover source={{ uri: item.image }} />
    <Card.Content>
      <Text variant="titleMedium">{item.title}</Text>
      <Text variant="bodySmall">{item.tags.join(", ")}</Text>
    </Card.Content>
  </Card>
</Link> )}
      />
    </View>
  );
}

// 💅 Styles
const styles = StyleSheet.create({
  container: { flex: 1, padding: 10, backgroundColor: "#fff" },
  toggle: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginBottom: 10,
  },
  card: { marginBottom: 10 },
});
