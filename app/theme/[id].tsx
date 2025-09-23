// expo-router hook to read the route params (like the theme id)
import { useLocalSearchParams } from "expo-router";
// React Native components
import { FlatList, Linking, StyleSheet, Text, View } from "react-native";
// UI card from react-native-paper
import { Card } from "react-native-paper";
// our dummy data for themes
import { themes } from "../../data/dummyData";

// 👇 This is the ONLY component in this file.
// Name must be unique and exported as default.
export default function ThemeDetailScreen() {
  // grab the "id" from the URL (e.g. /theme/1 → id = "1")
  const { id } = useLocalSearchParams();

  // find the theme object that matches the id
  const theme = themes.find((t) => t.id === id);

  // fallback if theme not found
  if (!theme) {
    return (
      <View style={styles.container}>
        <Text>Theme not found.</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      {/* Title + tags at the top */}
      <Text style={styles.title}>{theme.title}</Text>
      <Text style={styles.tags}>Tags: {theme.tags.join(", ")}</Text>

      {/* Section header */}
      <Text style={styles.sectionTitle}>Timeline of Events</Text>

      {/* FlatList to render each event in the timeline */}
      <FlatList
        data={theme.timeline} // array of events
        keyExtractor={(item, index) => index.toString()} // unique key per event
        renderItem={({ item }) => (
          <Card
            style={styles.card}
            // when you tap the card, open external article in browser
            onPress={() => Linking.openURL(item.link)}
          >
            <Card.Content>
              <Text style={styles.date}>{item.date}</Text>
              <Text style={styles.event}>{item.event}</Text>
              <Text style={styles.link}>Tap to read more →</Text>
            </Card.Content>
          </Card>
        )}
      />
    </View>
  );
}

// 💅 Styles for layout and text
const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, backgroundColor: "#fff" },
  title: { fontSize: 22, fontWeight: "bold", marginBottom: 8 },
  tags: { fontSize: 14, color: "#666", marginBottom: 16 },
  sectionTitle: { fontSize: 18, fontWeight: "600", marginBottom: 8 },
  card: { marginBottom: 10, backgroundColor: "#f9f9f9" },
  date: { fontSize: 14, fontWeight: "bold", marginBottom: 4 },
  event: { fontSize: 16, marginBottom: 4 },
  link: { fontSize: 12, color: "blue" },
});
