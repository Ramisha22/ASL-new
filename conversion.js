import * as React from 'react';
import { TouchableOpacity, Button,TextInput,View, Text,Image,StyleSheet,ImageBackground, Touchable} from 'react-native';


export default ConversionScreen = ({ navigation,route}) =>{
    return (
      <View>     
        <ImageBackground  resizeMode="cover" source={require('./madimages/screen1/ellipse.jpeg')} style={styles.c_imageBackground} >
            <Text style={styles.c_text}>Convert</Text>    
            <Text style={styles.c_text2 } >Text Into Sign Language</Text>     
            <TextInput multiline={true} placeholder="Enter text here" style={styles.c_box}>
            </TextInput>
            <TouchableOpacity style={styles.c_btn}>
                <Text style={{color: 'rgb(255,255,255)',textAlign:'center',fontSize:18,marginTop:10}}>Convert</Text>
            </TouchableOpacity>
        </ImageBackground>
      </View>
    );
  }

  const styles = StyleSheet.create({
    c_text: {
    color: 'rgb(255,255,255)',
    fontFamily: 'Inter',
    fontStyle: 'normal',
    fontSize:28,
    opacity:1,
    marginTop:30,
    fontWeight:'bold',
    },
    c_text2: {
        color: 'rgb(255,255,255)',
        fontFamily: 'Inter',
        fontStyle: 'normal',
        fontSize:18,
        opacity:1,
        marginTop:2,
        fontWeight:'bold',
    },
    c_box: {
        backgroundColor: 'rgb(142,147,147)',
        margin:20,
        width:'95%',
        height: 200,
        marginLeft:10,
        borderRadius:15,
    },
    c_imageBackground: {
        width:'100%',
        height:'85%',
        opacity:1,
        marginTop:50,
       
    },
    c_btn:{
        borderRadius:15,
        width:'80%',
        marginLeft:40,
        height:'30%',
        textAlign:'center',
        backgroundColor: '#007748',

    },
  })
