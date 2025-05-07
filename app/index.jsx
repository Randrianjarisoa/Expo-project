import { Link } from 'expo-router'
import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import Dedo from '../assets/img/dedo.png'

const Home = () => {
  return (
    <View style={styles.container}>
      <Image source={Dedo} style={styles.img} />
      <Text style={styles.title}>Dieudonné  </Text>
      <Text style={{ marginTop: 10, marginBottom: 30, fontSize: 35 }}> Dev FullStack Mobile </Text>
      <Link href="/about" style={styles.link}> About page </Link>
      <Link href="/contact" style={styles.link}> Contact page </Link>

    </View>
  )
}

export default Home

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
  img: {
    marginVertical: 20,
    height: 100,
    width: 70
  },
  link: {
    marginVertical: 10,
    borderBottomWidth: 1,
  }
})