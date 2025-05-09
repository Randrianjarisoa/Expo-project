import { Link } from "expo-router";
import { StyleSheet } from "react-native";
import ThemedText from "../components/ThemedText";
import ThemedView from "../components/ThemedView";

const contact = () => {
  return (
    <ThemedView style={styles.container}>
      <ThemedText style={styles.title}> Contact page </ThemedText>
      <Link href="/" style={styles.link}>
        <ThemedText>Back to home</ThemedText>
      </Link>
    </ThemedView>
  );
};

export default contact;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
  },
  link: {
    marginVertical: 10,
    borderBottomWidth: 1,
  },
});
