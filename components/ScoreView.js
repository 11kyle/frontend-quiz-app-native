import { Pressable, StyleSheet, Text, View } from "react-native"
import { useNavigation } from "@react-navigation/native"

export const ScoreView = ({ score }) => {
  const navigation = useNavigation()

  return (
    <View>
      <Text 
        style={{
          color: '#313E51',
          fontSize: 40
        }}
      >
        <Text 
          style={{
            fontWeight: '300',
            fontFamily: 'Rubik_300Light'
          }}
        >
          Quiz completed {'\n'}
        </Text>
        <Text 
          style={{ 
            fontWeight: '500',
            fontFamily: 'Rubik_500Medium'
          }}
        >
          You scored...
        </Text>
      </Text>
      <View style={styles.scoreContainer}>
        {/* <Text>Quiz Title Here</Text> */}
        <Text 
          style={{
            color: '#313E51',
            fontSize: 88,
            fontWeight: '500',
            fontFamily: 'Rubik_500Medium'
          }}
        >
          {score}
        </Text>
        <Text 
          style={{
            color: '#626C7F',
            fontSize: 18,
            marginTop: 16,
            fontFamily: 'Rubik_400Regular'
          }}
        >
          out of 10
        </Text>
      </View>
      <Pressable 
        style={({ pressed }) => (
          [ 
            styles.button,
            pressed ? styles.buttonPressed : null
          ]
        )}
        onPress={() => navigation.navigate('Home')}
      >
        <Text 
          style={{ 
            color: '#FFF', 
            fontSize: 18, 
            fontWeight: '500',
            fontFamily: 'Rubik_500Medium'
          }}
        >
          Play Again
        </Text>
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
  scoreContainer: {
    backgroundColor: '#FFF',
    padding: 32,
    marginTop: 40,
    borderRadius: 12,
    flex: 0,
    alignItems: 'center'
  },
  button: {
    padding: 12,
    marginTop: 12,
    backgroundColor: '#A729F5',
    borderRadius: 12,
    flex: 0,
    alignItems: 'center',
    justifyContent: 'center',
    height: 56
  },
  buttonPressed: {
    opacity: 0.5,
  },
})