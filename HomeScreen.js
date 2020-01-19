import * as WebBrowser from 'expo-web-browser';
import React, { Component } from "react";
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  KeyboardAvoidingView,
} from 'react-native';
import { Container, Header, Content, Card, CardItem, Body } from 'native-base';
import { fire } from '../fire';
import { MonoText } from '../components/StyledText';

export default class HomeScreen  extends Component {
  render() {
  return (
    <KeyboardAvoidingView style={styles.container} behavior="padding" enabled>



      <Image
        style={{ width: '100%', height: '50%' }}
        source={require('../screens/mainbackground.jpg')}
      />
 
      <Text style={{ padding: 5, color: 'white', fontSize: 28, fontWeight: 'bold',top:10 }}> INTRODUCTION</Text>

      <Card style={{  marginTop: 15, fontSize: 24,width:'75%',height:'32%',borderRadius:35,}}>
        <CardItem>

          <Body style={{   fontWeight: '600', textAlign: 'center',justifyContent:'center',alignItems: "center",flex:1}}>
          <Text style={{ color: '#26A96C', fontSize: 46, fontWeight: 'bold' }}> pECO</Text>
            <Text style={{color:'#26A96C',fontSize:24,top:15,fontWeight:'700'}}>
                Our Mission
            </Text>
            <Text style={{color:'#26A96C',fontSize:16,fontWeight:'500',textAlign:'center',top:16}}>
                A Community To Share Eco Friendly Products
            </Text>
          </Body>
        </CardItem>
      </Card>

    </KeyboardAvoidingView>
  );
}
}

HomeScreen.navigationOptions = {
  header: null,
};







const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#26A96C',

    alignItems: 'center',
  },

  stretch: {
    top: 50,
    width: '100%',
    height: 210,

  }
});

