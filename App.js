
import React, { useState } from "react";
import {
  Text,
  View,
  Button,
  TouchableOpacity,
  Image,
  ScrollView,
  StyleSheet,
  TextInput,
  StatusBar,
  Switch,
  ImageBackground,
}
  from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Ionicon from 'react-native-vector-icons/Ionicons';
import ConversionScreen from './conversion';
import Drawerscreen from './drawer';
import Feedback from './feedback';
import LearnASL from './learning';

function Buttons({ navigation, route }) {


  return (

    <View>
      <View
        style={{
          alignSelf: 'center',
          backgroundColor: 'rgba(52, 58, 64, 1)',
          height: 700,
          width: 450,
        }}>
        <Text
          style={{
            fontSize: 25,
            fontWeight: 'bold',
            color: 'white',
            alignSelf: 'center',
            marginTop: 15,
          }}>
          Welcome to ASL Expert
        </Text>

        <View style={{ marginTop: 40, alignSelf: 'center', width: 350 }}>
          <Image
            source={require('./madimages/screen2/vector.png')}
            style={{ height: 300 }}
          />
        </View>

        <TouchableOpacity
          style={{
            alignSelf: 'center',
            borderRadius: 20,
            borderColor: 'rgba(0, 119, 72, 1)',
            width: 370,
            height: 50,
            backgroundColor: 'rgba(36, 114, 79, 1)',
            marginTop: 60,
            justifyContent: 'center',
          }}
          onPress={() => navigation.navigate('learning')}>
          <Text
            style={{
              fontSize: 18,
              fontWeight: 'bold',
              color: 'white',
              padding: 0,
              textAlign: 'center',
            }}>
            Login
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={{
            alignSelf: 'center',
            borderRadius: 20,
            borderColor: 'rgba(0, 119, 72, 1)',
            width: 370,
            height: 50,
            backgroundColor: 'rgba(36, 114, 79, 1)',
            marginTop: 20,
            justifyContent: 'center',
          }}
          onPress={() => navigation.navigate('signup')}>
          <Text
            style={{
              fontSize: 18,
              fontWeight: 'bold',
              color: 'white',
              padding: 0,
              textAlign: 'center',
            }}>
            Sign Up
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}


function Login({ navigation, route }) {
  return (

    <View>
      <View
        style={{
          alignSelf: 'center',
          backgroundColor: 'rgba(52, 58, 64, 1)',
          height: 700,
          width: 450,
        }}>
        <View
          style={{
            marginTop: 50,
            alignSelf: 'center',
            width: 300,
            height: 150,
          }}>
          <Image
            source={require('./madimages/screen1/logo.png')}
            style={{ alignSelf: 'center' }}
          />
        </View>

        <View style={styles.view1}>
          <Ionicon name="mail-outline" style={{ color: 'rgba(36, 114, 79, 1)' }} size={28} />
          <TextInput placeholderTextColor={'grey'} style={{ color: 'white' }}
            placeholder="Email"
          ></TextInput>
        </View>
        <View style={styles.view1}>
          <Ionicon name="key" style={{ color: 'rgba(36, 114, 79, 1)' }} size={28} />
          <TextInput placeholderTextColor={'grey'}
            placeholder="Password"
          ></TextInput>
        </View>

        <View>
          <TouchableOpacity
            style={{
              width: 480,
              height: 50,
              marginTop: 5,
              justifyContent: 'center',
            }}
            onPress={() => navigation.navigate('ForgotPassword')}>
            <Text
              style={{
                fontSize: 13,
                fontWeight: 'Regular',
                color: 'rgba(64, 154, 114, 1)',
                padding: 0,
                textAlign: 'center',
                marginLeft: 200,
              }}>
              Forgot Password?
            </Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity onPress={() => navigation.navigate('conversion')}
          style={{
            alignSelf: 'center',
            borderRadius: 20,
            borderColor: 'rgba(0, 119, 72, 1)',
            width: 370,
            height: 50,
            backgroundColor: 'rgba(36, 114, 79, 1)',
            marginTop: 70,
            justifyContent: 'center',
          }}>
          <Text
            style={{
              fontSize: 18,
              fontWeight: 'bold',
              color: 'white',
              padding: 0,
              textAlign: 'center',
            }}>
            Login
          </Text>
        </TouchableOpacity>

        <View style={{ marginLeft: 120, marginTop: 6, flexDirection: 'row' }}>
          <Text style={{ fontSize: 13, fontWeight: 'Regular', color: 'white' }}>
            Don't have an account?{' '}
          </Text>

          <TouchableOpacity onPress={() => navigation.navigate('signup')}>
            <Text
              style={{
                fontSize: 13,
                fontWeight: 'Regular',
                color: 'rgba(64, 154, 114, 1)',
                padding: 0,
              }}>
              Sign Up
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}


function NotificationsScreen() {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  const [isEnabled1, setIsEnabled1] = useState(false);
  const toggleSwitch1 = () => setIsEnabled1(previousState => !previousState);
  const [isEnabled2, setIsEnabled2] = useState(false);
  const toggleSwitch2 = () => setIsEnabled2(previousState => !previousState);
  const [isEnabled3, setIsEnabled3] = useState(false);
  const toggleSwitch3 = () => setIsEnabled3(previousState => !previousState);

  return (
    <View>
      <View style={{ width: '100%', height: 527, backgroundColor: '#3E454D', borderRadius: 50 }}>
        <Text style={styles.textN}>Notifications</Text>

        <View style={{ marginTop: 30 }}>
          <View style={styles.view}>

            <Text style={{ marginLeft: 9, marginTop: 14, fontSize: 15, color: 'rgb(255,255,255)', }}>Allow Notifications</Text>
            <Switch style={{ marginTop: -17 }}
              trackColor={{ false: "979797", true: "2D6A4F" }}
              thumbColor={isEnabled ? "F5F5F5" : "F5F5F5"}
              onValueChange={toggleSwitch}
              value={isEnabled}
            />
          </View>
          <View style={styles.view}>
            <Text style={{ marginLeft: 9, marginTop: 14, fontSize: 15, color: 'rgb(255,255,255)', }}
            >Motivational Quotes</Text>
            <Switch style={{ marginTop: -17 }}
              trackColor={{ false: "979797", true: "2D6A4F" }}
              thumbColor={isEnabled1 ? "F5F5F5" : "F5F5F5"}
              onValueChange={toggleSwitch1}
              value={isEnabled1}
            />
          </View>
          <View style={styles.view}>
            <Text style={{ marginLeft: 9, marginTop: 14, fontSize: 15, color: 'rgb(255,255,255)', }}
            >Quizzes Update</Text>
            <Switch style={{ marginTop: -17 }}
              trackColor={{ false: "979797", true: "2D6A4F" }}
              thumbColor={isEnabled2 ? "F5F5F5" : "F5F5F5"}
              onValueChange={toggleSwitch2}
              value={isEnabled2}
            />
          </View>
          <View style={styles.view}>
            <Text style={{ marginLeft: 9, marginTop: 14, fontSize: 15, color: 'rgb(255,255,255)', }}
            >Activity Update</Text>
            <Switch style={{ marginTop: -17 }}
              trackColor={{ false: "979797", true: "2D6A4F" }}
              thumbColor={isEnabled3 ? "F5F5F5" : "F5F5F5"}
              onValueChange={toggleSwitch3}
              value={isEnabled3}
            />
          </View>
        </View>



      </View>

    </View>
  );
}


function Forgotpass({ navigation, route }) {
  return (
    <View
      style={{
        backgroundColor: 'rgba(52, 58, 64, 1)',
        height: 700,
        width: 450,
      }}>
      <View
        style={{
          backgroundColor: 'rgba(70, 75, 80, 1)',
          height: 510,
          width: 420,
          marginTop: 10,
          borderRadius: 60,
        }}>
        <View style={{ marginTop: 10, alignSelf: 'center', width: 450 }}>
          <Image
            source={require('./madimages/screen3FP/forgotpassword.png')}
            style={{ height: 200, width: 200, alignSelf: 'center' }}
          />
        </View>

        <Text
          style={{
            fontSize: 20,
            fontWeight: 'bold',
            color: 'white',
            alignSelf: 'center',
            marginTop: 13,
          }}>
          Forgot Password
        </Text>
        <Text></Text>
        <Text
          style={{
            fontSize: 13,
            fontWeight: 'regular',
            color: 'white',
            padding: 0,
            textAlign: 'center',
          }}>
          Please enter your email to request a password reset.
        </Text>
        <TextInput
          placeholder="Email" placeholderTextColor={'grey'}
          style={{
            color: 'white',
            alignSelf: 'center',
            borderRadius: 20,
            borderColor: 'rgba(0, 119, 72, 1)',
            width: 380,
            height: 50,
            backgroundColor: 'rgba(255, 255, 255, 0.1)',
            marginTop: 30,
            justifyContent: 'center',
            fontSize: 17,
            paddingLeft: 10,
          }}></TextInput>

        <TouchableOpacity
          style={{
            alignSelf: 'center',
            borderRadius: 20,
            borderColor: 'rgba(0, 119, 72, 1)',
            width: 370,
            height: 50,
            backgroundColor: 'rgba(36, 114, 79, 1)',
            marginTop: 30,
            justifyContent: 'center',
          }}
          onPress={() => navigation.navigate('Login')}>
          <Text
            style={{
              fontSize: 18,
              fontWeight: 'bold',
              color: 'white',
              padding: 0,
              textAlign: 'center',
            }}>
            Send Code
          </Text>
        </TouchableOpacity>
      </View>

      <Image
        source={require('./madimages/screen1/circles.png')}
        style={{ height: 370, width: 290, marginLeft: -150, }}
      />

    </View>
  );
}

function SignUp(navigation, route) {
  return (
    <View>
      <Text style={styles.text}>Get Started!</Text>
      <Text style={styles.text2} >Create an account to continue.</Text>
      <View style={styles.view1}>
        <Ionicon name="at" style={{ color: 'rgba(36, 114, 79, 1)' }} size={28} />
        <TextInput placeholderTextColor={'grey'} placeholder="Username"></TextInput>
      </View>
      <View style={styles.view1}>
        <Ionicon name="mail-outline" style={{ color: 'rgba(36, 114, 79, 1)' }} size={28} />
        <TextInput placeholderTextColor={'grey'} placeholder="Email"></TextInput>
      </View>
      <View style={styles.view1}>
        <Ionicon name="key" style={{ color: 'rgba(36, 114, 79, 1)' }} size={28} />
        <TextInput placeholderTextColor={'grey'} placeholder="Password"></TextInput>
      </View>
      <View style={styles.view1}>
        <Ionicon name="key" style={{ color: 'rgba(36, 114, 79, 1)' }} size={28} />
        <TextInput placeholderTextColor={'grey'} placeholder="Confirm Password"></TextInput>
      </View>
      <View style={styles.view1}>
        <Ionicon name="calendar" style={{ color: 'rgba(36, 114, 79, 1)' }} size={28} />
        <TextInput placeholderTextColor={'grey'} placeholder="Date of Birth"></TextInput>
      </View>

      <TouchableOpacity
        style={{
          alignSelf: 'center',
          borderRadius: 20,
          borderColor: 'rgba(0, 119, 72, 1)',
          width: 370,
          height: 50,
          backgroundColor: 'rgba(36, 114, 79, 1)',
          marginTop: 20,
          justifyContent: 'center',
        }}
      >
        <Text
          style={{
            fontSize: 18,
            fontWeight: 'bold',
            color: 'white',
            padding: 0,
            textAlign: 'center',
          }}>
          Sign Up
        </Text>
      </TouchableOpacity>



    </View>
  );
}

export default function App() {
  const Stack = createNativeStackNavigator();

  return (


    <NavigationContainer theme={MyTheme} styles={styles.container}>

      <StatusBar barStyle="light-content" backgroundColor='rgba(52, 58, 64, 1)' />


      <Stack.Navigator initialRouteName="MainScreen" screenOptions={{
        headerStyle: {
          backgroundColor: 'rgba(52, 58, 64, 1)'
        },

        headerShadowVisible: false,
        title: null

      }}>
        <Stack.Screen
          options={{
            title: '',
            headerStyle: {
              backgroundColor: 'rgb(52, 58, 64)',
            }
          }}
          name="Home" component={NotificationsScreen} />
        <Stack.Screen
          options={{
            title: '',
            headerStyle: {
              backgroundColor: 'rgb(52, 58, 64)',
            }
          }}
          name="signup" component={SignUp} />
        <Stack.Screen name="MainScreen" component={Buttons}></Stack.Screen>

        <Stack.Screen name="Login" component={Login}>

        </Stack.Screen>

        <Stack.Screen name="conversion" component={ConversionScreen}>

        </Stack.Screen>

        <Stack.Screen name='drawer' component={Drawerscreen}>

        </Stack.Screen>

        <Stack.Screen name='feedback' component={Feedback}>

        </Stack.Screen>
        <Stack.Screen name='learning' component={LearnASL}>

</Stack.Screen>

        <Stack.Screen name="ForgotPassword" component={Forgotpass}>

        </Stack.Screen>

      </Stack.Navigator>
    </NavigationContainer>
  );
}


const styles = StyleSheet.create({
  container: {
    backgroundColor: 'rgb(52,58,64)'
  },
  textN: {
    color: 'rgb(255,255,255)',

    fontStyle: 'normal',
    fontSize: 25,
    fontWeight: 'bold',
    opacity: 1,
    marginTop: 30,
    textAlign: 'center',
  },
  view: {
    backgroundColor: '#8E8E93',
    height: 50,
    textAlign: 'center',
    width: '90%',
    margin: 20,
    marginLeft: 20,
    borderRadius: 25,

  },
  img: {
    margin: 70
  },
  text: {
    color: 'rgb(255,255,255)',
    fontFamily: 'Inter',
    fontStyle: 'normal',
    fontSize: 25,
    fontWeight: 'bold',
    marginLeft: 10,
  },
  text2: {
    color: 'rgb(255,255,255)',
    fontFamily: 'Inter',
    fontStyle: 'normal',
    fontSize: 15,
    opacity: 1,
    marginTop: 7,
    marginLeft: 10,


  },
  view1: {
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    flexDirection: 'row',
    alignItems: 'center',
    height: 50,
    width: '86%',
    marginLeft: 30,
    marginTop: 30,
    borderRadius: 21,
    padding: 6,
    color: 'white'
  },
  btn: {
    borderRadius: 15,
    width: '90%',
    margin: 24,
    height: '10%',
    textAlign: 'center',
    backgroundColor: '#007748',

  },
  imageBackground: {
    width: '100%',
    height: '50%',
    opacity: 1,

  },
  c_text: {
    color: 'rgb(255,255,255)',

    fontStyle: 'normal',
    fontSize: 28,
    opacity: 1,
    marginTop: 30,
    fontWeight: 'bold',
  },
  c_text2: {
    color: 'rgb(255,255,255)',

    fontStyle: 'normal',
    fontSize: 18,
    opacity: 1,
    marginTop: 2,
    fontWeight: 'bold',
  },
  c_box: {
    backgroundColor: 'rgb(142,147,147)',
    margin: 20,
    width: '95%',
    height: 200,
    marginLeft: 10,
    borderRadius: 15,
  },
  c_imageBackground: {
    width: '100%',
    height: '85%',
    opacity: 1,
    marginTop: 50,

  },
  c_btn: {
    borderRadius: 15,
    width: '80%',
    marginLeft: 40,
    height: '30%',
    textAlign: 'center',
    backgroundColor: '#007748',

  },

});
const MyTheme = {
  dark: false,
  colors: {
    primary: 'rgb(255, 45, 85)',
    background: 'rgb(52, 58, 64)',
    card: 'rgb(255, 255, 255)',
    text: 'rgb(255, 255,255)',
    border: 'rgb(199, 199, 204)',
    notification: 'rgb(255, 69, 58)',
  },

};