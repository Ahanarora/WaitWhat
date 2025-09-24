import * as Linking from "expo-linking";
import { StyleSheet, Text } from "react-native";
import { Card } from "react-native-paper";

type EventCardProps = {
  date: string;
  event: string;
  link: string;
};

export default function EventCard({ date, event, link }: EventCardProps) {
  return (
    <Card style={styles.card} onPress={() => Linking.openURL(link)}>
      <Card.Content>
        <Text style={styles.date}>{date}</Text>
        <Text style={styles.event}>{event}</Text>
        <Text style={styles.link}>Tap to read more →</Text>
      </Card.Content>
    </Card>
  );
}

const styles = StyleSheet.create({
  card: { marginBottom: 10, backgroundColor: "#f9f9f9" },
  date: { fontSize: 14, fontWeight: "bold", marginBottom: 4 },
  event: { fontSize: 16, marginBottom: 4 },
  link: { fontSize: 12, color: "blue" },
});
