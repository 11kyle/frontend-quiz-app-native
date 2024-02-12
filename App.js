import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { 
  useFonts, 
  Rubik_300Light, 
  Rubik_400Regular_Italic, 
  Rubik_400Regular, 
  Rubik_500Medium 
} from '@expo-google-fonts/rubik'
import { HomeScreen } from './screens/HomeScreen';
import { HTMLScreen} from './screens/HTMLScreen'
import { CSSScreen } from './screens/CSSScreen'
import { JavaScriptScreen } from './screens/JavaScriptScreen'
import { AccessibilityScreen } from './screens/AccessibilityScreen'

const Stack = createNativeStackNavigator()

export default function App() {
  const [fontsLoaded, fontError] = useFonts({ 
    Rubik_300Light,
    Rubik_400Regular_Italic,
    Rubik_400Regular,
    Rubik_500Medium
  })
  
  if (!fontsLoaded && !fontError) {
    return null
  }

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name='Home'
          component={HomeScreen}
          options={{
            headerShown: false,
            animation: 'none',
          }}
        />
        <Stack.Screen
          name='HTML'
          component={HTMLScreen}
          options={{
            headerShown: false,
            animation: 'none',
          }}
        />
        <Stack.Screen
          name='CSS'
          component={CSSScreen}
          options={{
            headerShown: false,
            animation: 'none',
          }}
        />
        <Stack.Screen
          name='JavaScript'
          component={JavaScriptScreen}
          options={{
            headerShown: false,
            animation: 'none',
          }}
        />
        <Stack.Screen
          name='Accessibility'
          component={AccessibilityScreen}
          options={{
            headerShown: false,
            animation: 'none',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
