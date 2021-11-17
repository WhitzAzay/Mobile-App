import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Button,
  TouchableOpacity, 
  ImageBackground
} from "react-native";

export default function Login({navigation}) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (

    <ImageBackground style={styles.container} source={require('../assets/background.jpg') }>
      
      <Image style={styles.image} source={require("../assets/logo.png")} />

      <StatusBar style="auto" />
      <View style={{backgroundColor: "rgba(255,255,255,0.5)", paddingHorizontal: 50, borderRadius: 20, paddingVertical: 40}}>
          <View style={styles.inputView}>
            <TextInput
              style={styles.TextInput}
              placeholder="Email."
              placeholderTextColor="#003f5c"
              onChangeText={(email) => setEmail(email)}
              underlineColorAndroid ='transparent'
            />
          </View>

          <View style={styles.inputView}>
            <TextInput
              style={styles.TextInput}
              placeholder="Password."
              placeholderTextColor="#003f5c"
              secureTextEntry={true}
              onChangeText={(password) => setPassword(password)}
              underlineColorAndroid ='transparent'
            />
          </View>

      <TouchableOpacity>
        <Text style={{color: '#000000'}}>forgot password?</Text>
        
        <Text style={styles.forgot_button}></Text>
      </TouchableOpacity>

        </View>
      <TouchableOpacity onPress={() => {
        navigation.navigate("FinalList")
      }}   
      style={styles.loginBtn} >
        <Text style={styles.loginText}>LOGIN</Text>
      </TouchableOpacity>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
      alignItems: "center",
    justifyContent: "center",
  },

  image: {
    marginBottom: 40,
    height:80,
    width:140
  },

  inputView: {
    backgroundColor: "AFE1AF",
    borderRadius: 30,
    width: "70%",
    height: 45,
    marginBottom: 20,

    alignItems: "center",
  },

  TextInput: {
    height: 50,
    flex: 1,
    padding: 10,
    marginLeft: 20,
  },


  forgot_button: {
    height: 30,
    marginBottom: 30,
    
  },

  loginBtn: {
    width: "80%",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    backgroundColor: "#023020",
  },

  loginText:{
    color: '#fff',
  },
}     

);