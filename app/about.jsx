import { Link } from 'expo-router'
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const About = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}> About page </Text>
      <Link href="/" style={styles.link}> back to home </Link>
    </View>
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