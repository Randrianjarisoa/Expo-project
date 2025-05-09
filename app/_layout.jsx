import { Stack } from 'expo-router'
import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { StyleSheet, useColorScheme } from 'react-native'
import { Colors } from '../constants/Colors'

const RootLayout = () => {
  const colorScheme = useColorScheme()
  const theme = Colors[colorScheme] ?? Colors.light
  return (
    <>
      <StatusBar value="auto" />
      <Stack screenOptions={{
        headerStyle: { backgroundColor: theme.navBackground },
        headerTintColor: theme.title,
      }}>
        <Stack.Screen name='index' options={{ title: 'Folio', headerTitleAlign: 'center' }} />
        <Stack.Screen name='about' options={{ title: 'About' }} />
        <Stack.Screen name='contact' options={{ title: 'Contact', headerShown: false }} />
      </Stack>
    </>
  )
}

export default RootLayout

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
})