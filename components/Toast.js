import { Image, StyleSheet, Text, View } from "react-native"

export const Toast = () => {
  return (
    <View style={styles.toast}>
      <Image source={require('../assets/icon-incorrect.png')} />
      <Text
        style={{
          color: '#EE5454',
          fontSize: 24,
          fontFamily: 'Rubik_400Normal',
          fontStyle: 'normal',
          fontWeight: '400'
        }}
      >
        Please select an answer
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  toast: {
    flex: 0,
    flexDirection: 'row',
    alignItems: 'center',
    columnGap: 8
  }
})