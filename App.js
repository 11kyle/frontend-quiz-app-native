import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { Switch, Image, View, Text } from 'react-native';
import { useFonts, Rubik_300Light, Rubik_400Regular_Italic, Rubik_400Regular, Rubik_500Medium } from '@expo-google-fonts/rubik'
import { HomeScreen } from './components/HomeScreen';
import { useState } from 'react';
import { HTMLScreen} from './components/HTMLScreen'
import { CSSScreen } from './components/CSSScreen'
import { JavaScriptScreen } from './components/JavaScriptScreen'
import { AccessibilityScreen } from './components/AccessibilityScreen'

const Stack = createNativeStackNavigator()

export default function App() {
  const [fontsLoaded, fontError] = useFonts({ 
    Rubik_300Light,
    Rubik_400Regular_Italic,
    Rubik_400Regular,
    Rubik_500Medium
  })
  const [isEnabled, setIsEnabled] = useState(false)

  const toggleSwitch = () => setIsEnabled(previousState => !previousState)
  
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
            title: '',
            headerRight: () => (
              <View 
                style={{
                  flex: 0, 
                  flexDirection: 'row', 
                  alignItems: 'center', 
                  columnGap: 8
                }}
              >
                <Image source={require('./assets/icon-sun-dark-16-regular.png')} />
                <Switch
                  trackColor={{ false: '#A729F5', true: '#A729F5' }}
                  thumbColor={isEnabled ? '#FFF' : '#FFF'}
                  ios_backgroundColor='#A729F5'
                  onValueChange={toggleSwitch}
                  value={isEnabled} 
                />
                <Image source={require('./assets/icon-moon-dark-16-regular.png')} />
              </View>
            )
          }}
        />
        <Stack.Screen
          name='HTML'
          component={HTMLScreen}
          // options={{
            // headerTitle: () => (
            //   <View
            //     style={{ flex: 0, flexDirection: 'row', alignItems: 'center', columnGap: 16 }}
            //   >
            //     <View
                
            //     style={{ width: 40, height: 40, backgroundColor: '#FFF1E9', flex: 0, alignItems: 'center', justifyContent: 'center', borderRadius: 5 }}>
            //       <Image source={require('./assets/icon-html-16-regular.png')} />
            //     </View>
            //     <Text
            //       style={{ color: '#313E51', fontSize: 18, fontWeight: '500' }}
            //     >
            //       HTML
            //     </Text>
            //   </View>
            // ),
            // headerRight: () => (
            //   <View 
            //     style={{
            //       flex: 0, 
            //       flexDirection: 'row', 
            //       alignItems: 'center', 
            //       columnGap: 8
            //     }}
            //   >
            //     <Image source={require('./assets/icon-sun-dark-16-regular.png')} />
            //     <Switch
            //       trackColor={{ false: '#A729F5', true: '#A729F5' }}
            //       thumbColor={isEnabled ? '#FFF' : '#FFF'}
            //       ios_backgroundColor='#A729F5'
            //       onValueChange={toggleSwitch}
            //       value={isEnabled} 
            //     />
            //     <Image source={require('./assets/icon-moon-dark-16-regular.png')} />
            //   </View>
            // )
          // }}
        />
        <Stack.Screen
          name='CSS'
          component={CSSScreen}
        />
        <Stack.Screen
          name='JavaScript'
          component={JavaScriptScreen}
        />
        <Stack.Screen
          name='Accessibility'
          component={AccessibilityScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
