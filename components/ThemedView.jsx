import { useColorScheme, View } from 'react-native'
import { Colors } from '../constants/Colors'

const ThemedView = (style, ...props) => {
  const colorSCheme = useColorScheme()
  const theme = Colors[colorSCheme] ?? Colors.light
  return (
    <View style={[
      { backgroundColor: theme.background }, style
    ]}{...props} />
  )
}

export default ThemedView
