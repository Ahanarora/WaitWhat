import { useLocalSearchParams } from "expo-router";
import { FlatList, ScrollView, StyleSheet, Text, View } from "react-native";
import AnalysisPanel from "../../components/AnalysisPanel";
import EventCard from "../../components/EventCard";
import { themes } from "../../data/dummyData";

export default function ThemeDetailScreen() {
  // Get the theme ID from the route
  const { id } = useLocalSearchParams();

  // Find the matching theme from dummy data
  const theme = themes.find((t) => t.id === id);

  if (!theme) {
    return (
      <View style={styles.container}>
        <Text>Theme not found.</Text>
      </View>
    );
  }

  return (
    <ScrollView style={styles.container}>
      {/* Overview */}
      <Text style={styles.title}>{theme.title}</Text>
      <Text style={styles.overview}>{theme.overview}</Text>

      {/* Chronology */}
      <Text style={styles.sectionTitle}>Chronology of Events</Text>
      <FlatList
        data={theme.chronology}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <EventCard date={item.date} event={item.event} link={item.link} />
        )}
      />

      {/* Analysis */}
      <Text style={styles.sectionTitle}>Analysis</Text>
      <AnalysisPanel
        stakeholders={theme.analysis.stakeholders}
        faqs={theme.analysis.faqs}
        future={theme.analysis.future}
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
