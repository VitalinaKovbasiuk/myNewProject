import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TextInput,
  TouchableOpacity,
  Platform,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  Image,
} from "react-native";
import { useState } from "react";

const initialState = {
  login: "",
  email: "",
  password: "",
};

export default function RegistrationScreen() {
  const [state, setState] = useState({ ...initialState });
  const [isKeyboardShown, setIsKeyboardShown] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [isFocused, setIsFocused] = useState(null);
  const [password, setPassword] = useState("");
  const [login, setLogin] = useState("");
    const [email, setEmail] = useState("");

  const hideKeyboard = () => {
    setIsKeyboardShown(false);
    Keyboard.dismiss();
  };

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const onLoginChange = (value) => {
    setState((prevState) => ({ ...prevState, login: value }));
  };
  const onEmailChange = (value) => {
    setState((prevState) => ({ ...prevState, email: value }));
  };
  const onPasswordChange = (value) => {
    setState((prevState) => ({ ...prevState, password: value }));
  };

  const onSubmit = () => {
    hideKeyboard();
    setState(initialState);
  };

  return (
    <TouchableWithoutFeedback
      onPress={() => Keyboard.dismiss()}
      style={{ flex: 1 }}
    >
      <View style={styles.container}>
        <ImageBackground
          style={styles.image}
          source={require("../assets/images/PhotoBG.png")}
        >
          <View style={styles.backForm}>
            <KeyboardAvoidingView
              behavior={Platform.OS === "ios" ? "padding" : "height"}
            >
              <View style={styles.form}>
                <Image style={styles.defaultImgBox} />
                <TouchableOpacity>
                  <Image
                    style={styles.addImg}
                    source={require("../assets/images/add.png")}
                  />
                </TouchableOpacity>
                <Text style={styles.register}>Реєстрація</Text>
                <View>
                  <TextInput
                    style={{
                      ...styles.input,
                      borderColor:
                        isFocused === "Логін" ? "#FF6C00" : "#E8E8E8",
                    }}
                    value={login}
                    placeholder="Логін"
                    placeholderTextColor="#BDBDBD"
                    onChangeText={setLogin}
                    onFocus={() => setIsFocused("login")}
                    onBlur={() => setIsFocused(null)}
                    selectionColor={"#1B4371"}
                  />
                </View>
                <View>
                  <TextInput
                     style={{
                    ...styles.input,
                    borderColor: isFocused === "Електронна адреса" ? "#FF6C00" : "#E8E8E8",
                  }}
                    value={email}
                    placeholder="Електронна адреса"
                    placeholderTextColor="#BDBDBD"
                    onChangeText={setEmail}
                    onFocus={() => setIsFocused("email")}
                  onBlur={() => setIsFocused(null)}
                  selectionColor={"#1B4371"}
                  />
                </View>
                <View>
                  <TextInput
                    style={{
                      ...styles.input,
                      borderColor:
                        isFocused === "Пароль" ? "#FF6C00" : "#E8E8E8",
                    }}
                    placeholder="Пароль"
                    placeholderTextColor="#BDBDBD"
                    secureTextEntry={!showPassword}
                    onChangeText={setPassword}
                    value={password}
                    onFocus={() => setIsFocused("Пароль")}
                    onBlur={() => setIsFocused(null)}
                    selectionColor={"#1B4371"}
                  />
                  <TouchableOpacity
                    onPress={toggleShowPassword}
                    style={styles.showBtn}
                    activeOpacity={0.5}
                  >
                    <Text style={styles.loginText}>
                      {showPassword ? "Показати" : "Сховати"}
                    </Text>
                  </TouchableOpacity>
                </View>
                <TouchableOpacity
                  style={styles.button}
                  activeOpacity={0.8}
                  onPress={onSubmit}
                  s
                >
                  <Text style={styles.buttonText}>Зареєструватися</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.link}
                  activeOpacity={0.6}
                  onPress={onSubmit}
                >
                  <Text style={styles.linkText}>
                    Уже є обліковий запис? Увійти
                  </Text>
                </TouchableOpacity>
              </View>
            </KeyboardAvoidingView>
          </View>
        </ImageBackground>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "flex-end",
  },
  defaultImgBox: {
    position: "absolute",
    top: 0,
    left: "50%",
    transform: [{ translateX: -50 }, { translateY: -50 }],
    marginBottom: 32,
    width: 100,
    height: 100,
    backgroundColor: "#F6F6F6",
    resizeMode: "contain",
    borderRadius: 16,
  },
  addImg: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: [{ translateX: 35 }, { translateY: -85 }],
    width: 25,
    height: 25,
    borderRadius: 20,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  register: {
    fontWeight: 500,
    fontSize: 30,
    lineHeight: 35,
    textAlign: "center",
    letterSpacing: 0.01,
    marginBottom: 33,
  },
  form: {
    position: "relative",
    paddingTop: 92,
    marginHorizontal: 16,
    marginBottom: 70,
  },
  input: {
    borderWidth: 1,
    borderColor: "#E8E8E8",
    height: 50,
    borderRadius: 8,
    backgroundColor: "#F6F6F6",
    paddingLeft: 16,
    marginBottom: 16,
    
    marginTop: 16,
    color: "#212121",
    
  },
  button: {
    height: 51,
    backgroundColor: "#FF6C00",
    borderRadius: 100,
    marginTop: 43,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 16,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 400,
    lineHeight: 19,
    color: "#fff",
  },
  link: {
    backgroundColor: "transparent",
  },
  linkText: {
    color: "#1B4371",
    textAlign: "center",
    fontSize: 16,
  },
  backForm: {
    borderTopStartRadius: 25,
    borderTopEndRadius: 25,
    backgroundColor: "#fff",
  },
  showBtn: {
    position: "absolute",
    right: 32,
    top: 30,
  },
  loginText: {
    fontSize: 14,
    lineHeight: 18.75,
    textAlign: "center",
    color: "#1B4371",
  },
});
