import { useLocalSearchParams } from "expo-router";
import { FlatList, ScrollView, StyleSheet, Text, View } from "react-native";
import AnalysisPanel from "../../components/AnalysisPanel";
import EventCard from "../../components/EventCard";
import { stories } from "../../data/dummyData";

export default function StoryDetailScreen() {
  // Get the story ID from the route
  const { id } = useLocalSearchParams();

  // Find the matching story from dummy data
  const story = stories.find((s) => s.id === id);

  if (!story) {
    return (
      <View style={styles.container}>
        <Text>Story not found.</Text>
      </View>
    );
  }

  return (
    <ScrollView style={styles.container}>
      {/* Overview */}
      <Text style={styles.title}>{story.title}</Text>
      <Text style={styles.overview}>{story.overview}</Text>

      {/* Chronology */}
      <Text style={styles.sectionTitle}>Chronology of Events</Text>
      <FlatList
        data={story.chronology}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <EventCard date={item.date} event={item.event} link={item.link} />
        )}
      />

      {/* Analysis */}
      <Text style={styles.sectionTitle}>Analysis</Text>
      <AnalysisPanel
        stakeholders={story.analysis.stakeholders}
        faqs={story.analysis.faqs}
        future={story.analysis.future}
      />
    </ScrollView>
  );
}

// 💅 Styles
const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, backgroundColor: "#fff" },
  title: { fontSize: 22, fontWeight: "bold", marginBottom: 10 },
  overview: { fontSize: 16, marginBottom: 20, lineHeight: 22 },
  sectionTitle: { fontSize: 18, fontWeight: "600", marginTop: 20, marginBottom: 10 },
});
