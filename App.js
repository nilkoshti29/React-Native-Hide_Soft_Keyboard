import React, { Component } from 'react';

import { StyleSheet, View, Platform, Keyboard, TextInput, TouchableOpacity, Text } from 'react-native';

export default class Mynewproject extends Component <{}> {

  Hide_Soft_Keyboard=()=>{

    Keyboard.dismiss();

  }
 
  render()
  {
    return(
      <View style = { styles.MainContainer }>

          <TouchableOpacity 
            onPress={this.Hide_Soft_Keyboard} 
            activeOpacity={0.7} 
            style={styles.button} >
          
            <Text style={styles.TextStyle}> Click Here To Hide Soft Keyboard </Text>

          </TouchableOpacity>


          <TextInput
                  
            placeholder="Enter Your Name"
              
            underlineColorAndroid='transparent'
     
            style={styles.textInput}
                  
            />

      
      </View>  
    )
  }
}
 
const styles = StyleSheet.create(
{
  MainContainer:
  {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: (Platform.OS === 'ios') ? 20 : 0
  },
  
  textInput:{
 
    textAlign: 'center',
    height: 40,
    borderRadius: 12 ,
    width: '90%',
    backgroundColor : "#FFF",
    borderWidth: 2,
    borderColor: '#FF1744',
     
  },
  button: {
    
    width: '90%',
    backgroundColor: '#4CAF50',
    borderRadius:7,
    marginBottom: 20,
    padding: 10
  },
     
  TextStyle:{
    color:'#fff',
    textAlign:'center',
  }
});