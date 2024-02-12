import React, { useEffect, useState } from 'react'
import { Image, Pressable, StyleSheet, Text, View } from 'react-native'
import * as Haptics from 'expo-haptics'
import { ScoreView } from './ScoreView'
import { ProgressBar } from './ProgressBar'
import { Toast } from './Toast'

export const QuizView = ({ data }) => {
  const [isSelected, setIsSelected] = useState('')
  const [isCorrect, setIsCorrect] = useState(null)
  const [index, setIndex] = useState(0)
  const [score, setScore] = useState(0)
  const [showError, setShowError] = useState(false)

  const handleSubmit = () => {
    if (!isSelected) {
      setShowError(true)
      return
    }
    if (isSelected === data[index].answer) {
      setIsCorrect(true)
    } else {
      setIsCorrect(false)
    }
  }

  const nextQuestion = () => {
    if (index === data.length) {
      // show result

      return
    }

    if (isCorrect) {
      setScore(previousState => previousState + 1)
    }

    setIsSelected('')
    setIsCorrect(null)
    setIndex(previousState => previousState + 1)
  }

  useEffect(() => {
    if (isSelected) {
      setShowError(false)
    }
  }, [isSelected])

  return (
    <View style={styles.viewContainer}>
      {index === data.length
        ? (
          <ScoreView score={score} /> 
        ) : (
          <>
          <Text 
            style={{ 
              color: '#626C7F', 
              fontSize: 14, 
              fontStyle: 'italic', 
              fontFamily: 'Rubik_400Regular_Italic'
            }}
          >
            Question {index + 1} of {data.length}
          </Text>
          <Text 
            style={{ 
              color: '#313E51', 
              fontSize: 20, 
              fontFamily: 'Rubik_500Medium', 
              fontWeight: 500, 
              marginTop: 12
            }}
          >
            {data[index].question}
          </Text>
          <View style={{ marginTop: 24 }}>
            <ProgressBar current={index + 1} max={data.length} />
          </View>
          <View style={styles.optionContainer}>
            {data[index].options.map((option, i) => (
              <Pressable 
                style={[
                  styles.option,
                  isSelected === option ? { borderColor: '#A729F5' } : { borderColor: '#FFF' },
                  isSelected === option && isCorrect ? { borderColor: '#26D782' } : null,
                  isSelected === option && isCorrect === false ? { borderColor: '#EE5454' } : null
                  ]}
                onPress={() => {
                  Haptics.selectionAsync()
                  setIsSelected(option)
                }}
                key={option}
                disabled={isCorrect !== null}
              >
                <View 
                  style={[
                    styles.letterContainer,
                    isSelected === option ? { backgroundColor: '#A729F5' } : { backgroundColor: '#F4F6FA' },
                    isSelected === option && isCorrect ? { backgroundColor: '#26D782' } : null,
                    isSelected === option && isCorrect === false ? { backgroundColor: '#EE5454' } : null
                  ]}
                >
                  <Text 
                    style={[
                      { fontSize: 18, fontWeight: '500', fontFamily: 'Rubik_500Medium' },
                      isSelected === option
                        ? { color: '#FFF' } 
                        : { color: '#626C7F'}]}>
                    {/* A, B, C, D */}
                    {['A','B','C','D'].at(i)}
                  </Text>
                </View>
                <Text 
                  style={{ 
                    flex: 1, 
                    flexWrap: 'wrap', 
                    color: '#313E51', 
                    fontSize: 18, 
                    fontWeight: '500',
                    fontFamily: 'Rubik_500Medium'
                   }}
                >
                  {option}
                </Text>
                {/* Show icon-correrct and/or icon-incorrect */}
                <View>
                  {(isSelected === option && isCorrect) || (data[index].answer === option && isCorrect !== null) ? (
                    <Image source={require('../assets/icon-correct.png')} />
                  ) : (
                    null
                  )}
                  {isSelected === option && isCorrect === false ? (
                    <Image source={require('../assets/icon-incorrect.png')} />
                  ) : (
                    null
                  )}
                </View>
              </Pressable>
            ))}
            {/* Submit/Next Button */}
            <Pressable 
              style={({ pressed }) => (
                [ 
                  styles.button,
                  pressed ? { opacity: 0.5 } : null
                ]
              )}
              onPress={() => isCorrect === null ? handleSubmit() : nextQuestion()}
              // disabled={!isSelected}
            >
              <Text style={{ color: '#FFF', fontSize: 18, fontWeight: '500', fontFamily: 'Rubik_500Medium' }}>
                {isCorrect === null ? 'Submit Answer' : 'Next Question'}
              </Text>
            </Pressable>
            {/* Error Message */}
            {showError && <View style={{ marginHorizontal: 'auto'}}><Toast /></View>}
          </View>
        </>
      )}
    </View>
  )
}

const styles = StyleSheet.create({
  viewContainer: {
    paddingHorizontal: 24,
    paddingTop: 32,
  },
  optionContainer: {
    flex: 0,
    rowGap: 12,
    marginTop: 40
  },
  option: {
    padding: 9,
    borderRadius: 12,
    flex: 0,
    flexDirection: 'row',
    alignItems: 'center',
    columnGap: 16,
    backgroundColor: '#FFF',
    borderWidth: 3,
  },
  letterContainer: {
    width: 40,
    height: 40,
    borderRadius: 5,
    flex: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    padding: 12,
    backgroundColor: '#A729F5',
    borderRadius: 12,
    flex: 0,
    alignItems: 'center',
    justifyContent: 'center',
    height: 56,
    // marginVertical: 32
  }
})