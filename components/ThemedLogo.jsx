import { Image, StyleSheet, useColorScheme } from 'react-native'
import LightLogo from '../assets/img/dedo-mijoro.png'
import DarkLogo from '../assets/img/dedo.png'
const ThemedLogo = ({ ...props }) => {
  const colorScheme = useColorScheme()
  const logo = colorScheme === 'dark' ? DarkLogo : LightLogo
  return (
    <Image source={logo} style={props.style} />
  )
}

export default ThemedLogo

const styles = StyleSheet.create({})