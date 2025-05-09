import { Link } from 'expo-router'
import React from 'react'
import { StyleSheet, useColorScheme } from 'react-native'
import ThemedText from '../components/ThemedText'
import ThemedView from '../components/ThemedView'
import { Colors } from '../constants/Colors'

const About = () => {
  const colorScheme = useColorScheme()
  const theme = Colors[colorScheme] ?? Colors.light
  return (
    <ThemedView style={styles.container}>
      <ThemedText style={styles.title}> About page </ThemedText>
      <Link href="/" style={styles.link}>
        <ThemedText>Back to home</ThemedText>
      </Link>
    </ThemedView>
  )
}

export default About

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold'
  },
  link: {
    marginVertical: 10,
    borderBottomWidth: 1,
  }
})