import React from 'react';
import { StyleSheet, Text, View, Modal, TouchableHighlight, Alert, StatusBar, Image, ImageBackground, Dimensions, KeyboardAvoidingView, Picker, TextInput as NativeTextInput } from "react-native";
import { Container, Content, Header, Form, Input, Item, Label, List, ListItem, Card, CardItem, Body, Button, Textarea } from 'native-base'

import { fire } from '../fire'


export default class SettingsScreen extends React.Component {
  additem = (dataproduct) => {
    fire.database().ref('/data/').push({ productname: this.state.productname, username: this.state.username, description: this.state.description, link: this.state.link, category: this.state.category }).then(() => {
      alert('Item has been added');
      // var key = fire.database().ref('//users/samgivian2015/tasks').push().key
      //  fire.database().ref('//users/samgivian2015/tasks').child(key).set({ time: d })

      //   fire.database().ref('/data/').push({ name: data, DateCreated: this.state.selectedDate });
    })
  }
  /**
   * Go ahead and delete ExpoConfigView and replace it with your content;
   * we just wanted to give you a quick view of your config.
   */

  constructor(props) {
    super(props);
    this.state = {
      productname: "",
      username: "",
      description: "",
      link: "",
      category: ""

    };

  }
  render() {
    return (
      /*     <KeyboardAvoidingView style={styles.container} behavior="padding" enabled >*/
      <KeyboardAvoidingView behavior="padding" style={styles.container}>
        <Content>

          <View style={{ width: '100%', height: 60, backgroundColor: '#32936f', top: 5, justifyContent: 'center' }}>
            <Text style={{ color: 'white', fontSize: 20, textAlign: "center", fontWeight: 'bold' }}> Suggest a product</Text>
          </View>

          <Item style={{ padding: 5, marginTop: 15, width: '95%', justifyContent: 'center' }}>
            <Input
              style={{ color: '#32936f', backgroundColor: 'white' }}
              onChangeText={(data) => this.setState({ productname: data })}
              placeholder="Product"
            />

          </Item>
          <Item style={{ padding: 5, marginTop: 15, width: '95%', justifyContent: 'center' }}>
            <Input
              style={{ color: '#32936f', backgroundColor: 'white' }}
              onChangeText={(data) => this.setState({ username: data })}
              placeholder="Youe name"
            />
          </Item>
          <Item style={{ justifyContent: 'center', width: '95%', marginTop: 15 }}>
            <Textarea rowSpan={2}
              style={{ color: '#32936f', backgroundColor: 'white', width: '95%' }}
              onChangeText={(data) => this.setState({ description: data })}
              placeholder="Description"
            />
          </Item>


          <Item style={{ padding: 5, marginTop: 15, width: '95%', justifyContent: 'center' }}>
            <Input
              editable={true} selectTextOnFocus={true}
              style={{ color: '#32936f', backgroundColor: 'white' }}
              onChangeText={(data) => this.setState({ link: data })}
              placeholder="Link to the store or image"
            />
          </Item>
     
         
          <Text style={{ fontSize: 18, color: 'white', textAlign: 'center', top: 10, bottom: 10 }}> Select Category</Text>
          <Picker
            selectedValue={this.state.category}
            style={{ color: 'white', marginTop: 25, backgroundColor: '#32936f' }}
            onValueChange={(itemValue, itemIndex) =>
              this.setState({ category: itemValue })
            }>
            <Picker.Item label="Clothes" value="clothes" />
            <Picker.Item label="Food" value="food" />
            <Picker.Item label="HomeGoods" value="homegoods" />
            <Picker.Item label="Gifts" value="gifts" />
            <Picker.Item label="Travel" value="travel" />
          </Picker>



          <Button bordered block light style={{ marginTop: 20, color: 'white' }} onPress={() => this.additem(this.productname)}>
            <Text style={{ fontSize: 16, color: 'white' }}> Add item</Text>
          </Button>
        </Content>
      </KeyboardAvoidingView>
    );
  }
}

SettingsScreen.navigationOptions = {

  header: null,

};
const styles = StyleSheet.create({
  container: {
    flex: 1,

    backgroundColor: '#26A96C',
  },
});
/*     <Picker
            selectedValue={this.state.language}
            style={{ height: 50, width: 100 }}
            onValueChange={(itemValue, itemIndex) =>
              this.setState({ language: itemValue })
            }>
            <Picker.Item label="Java" value="java" />
            <Picker.Item label="JavaScript" value="js" />
          </Picker>


           <Picker selectedValue={this.state.category} onValueChange={this.updateUser} style={{ color: 'white', marginTop: 25, backgroundColor: '#32936f' }}>
            <Picker.Item label="Clothes" value="clothes" />
            <Picker.Item label="Food" value="food" />
            <Picker.Item label="HomeGoods" value="homegoods" />
            <Picker.Item label="Gifts" value="gifts" />
            <Picker.Item label="Travel" value="travel" />
          </Picker>
       */