import { StyleSheet, View } from "react-native"

export const ProgressBar = ({ current, max }) => {
  const progress = (current/max * 100)
  return (
    <View style={styles.container}>
      <View 
        style={[
          styles.progress,
          { width: `${progress}%` }
        ]}
      >
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    height: 8,
    borderRadius: 999,
    backgroundColor: '#FFF',
    flex: 0,
    justifyContent: 'center',
  },
  progress: {
    height: 8,
    borderRadius: 999,
    backgroundColor: '#A729F5'
  }
})