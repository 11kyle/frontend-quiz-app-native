import { Button, Text, View, StyleSheet, Pressable, Switch, Image, SafeAreaView } from "react-native";
import { Navbar } from "../components/Navbar";

export const HomeScreen = ({navigation}) => {
  return (
    <SafeAreaView style={{ backgroundColor: '#F4F6FA', flex: 1 }}>
      <Navbar />
      <View
        style={styles.container}
      >
        <Text style={{ fontSize: 40, color: '#313E51' }}>
          <Text
            style={{
              fontWeight: '300',
              fontFamily: 'Rubik_300Light',
            }}
          >
            Welcome to the {'\n'}
          </Text>
          <Text
            style={{
              fontWeight: '500',
              fontFamily: 'Rubik_500Medium',
            }}
          >
            Frontend Quiz!
          </Text>
        </Text>
        <Text
          style={{
            fontSize: 14,
            fontWeight: '400',
            marginTop: 16,
            fontFamily: 'Rubik_400Regular_Italic',
            fontStyle: 'italic',
            color: '#626C7F'
          }}
        >
          Pick a subject to get started.
        </Text>
        {/* Menu */}
        <View
          style={styles.menu}
        >
          <Pressable 
            style={styles.button}
            onPress={() => navigation.navigate('HTML')}
          >
            <View 
              style={[
                styles.iconContainer,
                {backgroundColor: '#FFF1E9'}
              ]}
            >
              <Image source={require('../assets/icon-html-16-regular.png')} />
            </View>
            <Text 
              style={{
                fontSize: 18,
                fontWeight: 500,
                fontFamily: 'Rubik_500Medium',
                color: '#313E51'
              }}
            >
              HTML
            </Text>
          </Pressable>
          <Pressable
            style={styles.button}
            onPress={() => navigation.navigate('CSS')}
          >
            <View 
              style={[
                styles.iconContainer,
                {backgroundColor: '#E0FDEF'}
              ]}
            >
              <Image source={require('../assets/icon-css-16-regular.png')} />
            </View>
            <Text
              style={{
                fontSize: 18,
                fontWeight: 500,
                fontFamily: 'Rubik_500Medium',
                color: '#313E51'
              }}
            >
              CSS
            </Text>
          </Pressable>
          <Pressable
            style={styles.button}
            onPress={() => navigation.navigate('JavaScript')}
          >
            <View 
              style={[
                styles.iconContainer,
                {backgroundColor: '#EBF0FF'}
              ]}
            >
              <Image source={require('../assets/icon-javascript-16-regular.png')} />
            </View>
            <Text
              style={{
                fontSize: 18,
                fontWeight: 500,
                fontFamily: 'Rubik_500Medium',
                color: '#313E51'
              }}
            >
              JavaScript
            </Text>
          </Pressable>
          <Pressable
            style={styles.button}
            onPress={() => navigation.navigate('Accessibility')}
          >
            <View 
              style={[
                styles.iconContainer,
                {backgroundColor: '#F6E7FF'}
              ]}
            >
              <Image source={require('../assets/icon-accessibility-16-regular.png')} />
            </View>
            <Text
              style={{
                fontSize: 18,
                fontWeight: 500,
                fontFamily: 'Rubik_500Medium',
                color: '#313E51'
              }}
            >
              Accessibility
            </Text>
          </Pressable>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 24,
    paddingTop: 32,
    backgroundColor: '#F4F6FA'
  },
  menu: {
    flex: 0,
    rowGap: 12,
    marginTop: 40,
  },
  button: {
    flex: 0,
    flexDirection: 'row',
    alignItems: 'center',
    columnGap: 16,
    padding: 12,
    borderRadius: 12,
    backgroundColor: 'white',
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