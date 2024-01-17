import { useState } from "react"
import { StyleSheet, View, Image, Switch, Text } from "react-native"

const images = {
  html: require('../assets/icon-html-16-regular.png'),
  css: require('../assets/icon-css-16-regular.png'),
  javascript: require('../assets/icon-javascript-16-regular.png'),
  accessibility: require('../assets/icon-accessibility-16-regular.png')
}

const colors = {
  html: '#FFF1E9',
  css: '#E0FDEF',
  javascript: '#EBF0FF',
  accessibility: '#F6E7FF',
}

export const Navbar = ({ title }) => {
  const [isEnabled, setIsEnabled] = useState(false)

  const toggleSwitch = () => setIsEnabled(previousState => !previousState)

  return (
    <View style={styles.navbarContainer}>
      {title && (
        <View style={styles.titleContainer}>
          <View 
            style={[
              styles.iconContainer,
              { backgroundColor: `${colors[title.toLowerCase()]}` }
            ]}
          >
            <Image source={images[title.toLowerCase()]} />
          </View>
          <Text
            style={{
              color: '#313E51',
              fontSize: 18,
              fontWeight: '500',
              fontFamily: 'Rubik_500Medium'
            }}
          >
            {title}
          </Text>
        </View>
      )}
      <View 
        style={{
          flex: 0, 
          flexDirection: 'row', 
          alignItems: 'center', 
          columnGap: 8,
          marginLeft: 'auto'
        }}
      >
        <Image source={require('../assets/icon-sun-dark-16-regular.png')} />
        <Switch
          trackColor={{ false: '#A729F5', true: '#A729F5' }}
          thumbColor={isEnabled ? '#FFF' : '#FFF'}
          ios_backgroundColor='#A729F5'
          onValueChange={toggleSwitch}
          value={isEnabled} 
        />
        <Image source={require('../assets/icon-moon-dark-16-regular.png')} />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  navbarContainer: {
    paddingHorizontal: 24,
    paddingVertical: 16,
    height: 72,
    flex: 0,
    flexDirection: 'row',
    alignItems: 'center',
  },
  titleContainer: {
    flex: 0,
    flexDirection: 'row',
    alignItems: 'center',
    columnGap: 16
  },
  iconContainer: {
    width: 40,
    height: 40,
    borderRadius: 5,
    flex: 0,
    justifyContent: 'center',
    alignItems: 'center'
  }
})
