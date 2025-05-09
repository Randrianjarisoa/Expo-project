import { Link } from 'expo-router'
import React from 'react'
import { StyleSheet } from 'react-native'
import Dedo from '../assets/img/dedo.png'
import Spacer from '../components/Spacer'
import ThemedLogo from '../components/ThemedLogo'
import ThemedText from '../components/ThemedText'
import ThemedView from '../components/ThemedView'
//themed  component 

const Home = () => {
  return (
    <ThemedView style={styles.container}>
      <ThemedLogo source={Dedo} style={styles.img} />

      <ThemedText style={styles.title} title={true}> Dieudonné </ThemedText>

      <Spacer height={10} />
      <ThemedText > Dev FullStack Mobile </ThemedText>

      <Link href="/about" style={styles.link}>
        <ThemedText> About page </ThemedText>
      </Link>
      <Link href="/contact" style={styles.link}>
        <ThemedText> Contact page </ThemedText>
      </Link>

    </ThemedView>
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
    width: 70,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5
  },
  link: {
    marginVertical: 10,
    borderBottomWidth: 1,
  }
})