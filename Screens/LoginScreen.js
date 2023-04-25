import React, { useState } from 'react'
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Platform,
  KeyboardAvoidingView,
  Keyboard,
  TouchableWithoutFeedback,
  ImageBackground,
  Button,
} from 'react-native'

const initialState = {
  email: '',
  password: '',
}
export const LoginScreen = () => {
  const [isKeyboardShown, setIsKeyboardShown] = useState(false)

  const [state, setState] = useState({ ...initialState })

  const hideKeyboard = () => {
    setIsKeyboardShown(false)
    Keyboard.dismiss()
  }

  const onEmailChange = (value) => {
    setState((prevState) => ({ ...prevState, email: value }))
  }
  const onPasswordChange = (value) => {
    setState((prevState) => ({ ...prevState, password: value }))
  }

  const onInputFocus = () => {
    setIsKeyboardShown(true)
  }

  const onSubmit = () => {
    hideKeyboard()
    setState(initialState)
  }

  const { email, password } = state

  return (
    <TouchableWithoutFeedback onPress={hideKeyboard} style={{ flex: 1 }}>
      <View style={styles.container}>
        <ImageBackground
          source={require('../assets/images/PhotoBG.png')}
          style={styles.image}
        >
          <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            style={{ flex: 1, justifyContent: 'flex-end' }}
          >
            <View
              style={{
                ...styles.form,
              }}
            >
              <View style={styles.title}>
                <Text style={styles.titleText}>Увійти</Text>
              </View>

              <TextInput
                style={styles.input}
                onChangeText={onEmailChange}
                value={email}
                onFocus={onInputFocus}
                placeholder="Електронна адреса"
                placeholderTextColor="#BDBDBD"
              />

              <TextInput
                style={{ ...styles.input, marginBottom: 20 }}
                onChangeText={onPasswordChange}
                value={password}
                onFocus={onInputFocus}
                secureTextEntry={true}
                placeholder="Пароль"
                placeholderTextColor="#BDBDBD"
              />

              <TouchableOpacity
                style={styles.button}
                activeOpacity={0.6}
                onPress={onSubmit}
              >
                <Text style={styles.buttonTitle}>Увійти</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.link}
                activeOpacity={0.6}
                onPress={onSubmit}
              >
                <Text style={styles.linkText}>
                  Немає облікового запису? Зареєструватися
                </Text>
              </TouchableOpacity>
            </View>
          </KeyboardAvoidingView>
        </ImageBackground>
      </View>
    </TouchableWithoutFeedback>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  image: {
    flex: 1,
    resizeMode: 'cover',
  },

  form: {
    backgroundColor: '#fff',
    borderTopLeftRadius: 25,
    borderTopEndRadius: 25,
    paddingHorizontal: 16,
    paddingBottom: 45,
    paddingTop: 92,
  },

  title: {
    alignItems: 'center',
    marginBottom: 32,
  },
  titleText: {
    fontSize: 30,
  },

  input: {
    borderWidth: 1,
    padding: 16,
    borderRadius: 8,
    marginBottom: 16,
    fontSize: 16,
    backgroundColor: 'F6F6F6',
    borderColor: '#E8E8E8',
  },

  button: {
    backgroundColor: '#FF6C00',
    padding: 12,
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 16,
  },
  buttonTitle: {
    color: '#ffffff',
    fontSize: 16,
  },

  link: {
    backgroundColor: 'transparent',
  },

  linkText: {
    color: '#1B4371',
    textAlign: 'center',
    fontSize: 16,
  },
})