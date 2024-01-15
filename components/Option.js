import React, { useState } from 'react'

// props needed isSelected, isCorrect, 
export const Option = () => {
  const [isSelected, setIsSelected] = useState(false)

  return (
    <Pressable 
      style={isSelected ? [styles.option, styles.optionSelected] : styles.option}
    >
      <View style={styles.letterContainer}>
        <Text style={{ color: '#626C7F', fontSize: 18, fontWeight: '500' }}>A</Text>
      </View>
      <Text style={{ color: '#313E51', fontSize: 18, fontWeight: '500' }}>4.5 : 1</Text>
    </Pressable>
  )
}

const styles = StyleSheet.create({
  option: {
    padding: 12,
    borderRadius: 12,
    flex: 0,
    flexDirection: 'row',
    alignItems: 'center',
    columnGap: 16,
    backgroundColor: '#FFF'
  },
  optionSelected: {
    borderWidth: 3,
    borderColor: '#A729F5',
  },
  letterContainer: {
    width: 40,
    height: 40,
    borderRadius: 5,
    backgroundColor: '#F4F6FA',
    flex: 0,
    justifyContent: 'center',
    alignItems: 'center',
  }
})
