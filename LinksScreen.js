import React from 'react';
import { StyleSheet, Text, View, Modal, TouchableHighlight, Alert, StatusBar, Image, ImageBackground, Dimensions, KeyboardAvoidingView, Picker, TextInput, FlatList, TouchableOpacity, Linking } from "react-native";
import { Container, Content, Header, Form, Input, Item, Label, List, ListItem, Card, CardItem, Body, Button, Textarea } from 'native-base'

import { fire } from '../fire'
import ReactImageFallback from "react-image-fallback";



import { SearchBar, withTheme } from 'react-native-elements';

import { SwipeableFlatList } from 'react-native-swipeable-flat-list';


var k = [
  { name: 'saaa' }
]
var l = [];
var UserEmail = "";
//let itemsRef = fire.database().ref('/users/samgivian2015/tasks/');
let itemsRef = "";

export default class LinksScreen extends React.Component {
  // static propTypes = { url: React.PropTypes.string };
 

  constructor(props) {
    super(props);

    // alert(UserEmail);


    this.state = {
      listViewData: k,
      newContact: "",
      items: [],
      search: '',
    }

  }
  updateSearch = (search) => {
    this.setState({ search });


    itemsRef = fire.database().ref('/data/');
    itemsRef.on("value", dataSnapshot => {
      var tasks = [];
      dataSnapshot.forEach(child => {
        if (search == "") {
          tasks.push({
            productname: child.val().productname,
            description: child.val().description,
            link: child.val().link,

            category: child.val().category,
            username: child.val().username,
          });
        }

        else if (child.val().productname.toLowerCase().includes(search.toLowerCase()) || child.val().category.toLowerCase().includes(search.toLowerCase())) {
          tasks.push({
            productname: child.val().productname,
            description: child.val().description,
            link: child.val().link,

            category: child.val().category,
            username: child.val().username,
          });
        }
      });


      this.setState({
        items: tasks
      });
    });


  };


  componentDidMount() {

    itemsRef = fire.database().ref('/data/');
    itemsRef.on("value", dataSnapshot => {
      var tasks = [];
      dataSnapshot.forEach(child => {
        tasks.push({
          productname: child.val().productname,
          description: child.val().description,
          link: child.val().link,

          category: child.val().category,
          username: child.val().username,
        });
      });

      this.setState({
        items: tasks
      });
    });

  }

  render() {
    const { search } = this.state;
    return (
      <View style={styles.container}>
        <View style={{ width: '100%', height: 60, backgroundColor: '#32936f', top: 5, justifyContent: 'center' }}>
          <Text style={{ color: 'white', fontSize: 20, textAlign: "center", fontWeight: 'bold' }}> Search for an item</Text>
        </View>
        <SearchBar
          style={{ marginTop: 15, color: 'red', top: 20 }}
          placeholder="Type Here..."
          onChangeText={this.updateSearch}
          value={search}
          placeholderTextColor="white"

          underlineColorAndroid="#26A96C"
          searchIcon={{ color: 'white' }}
          cancelIcon={{ color: 'white' }}
          clearIcon={{ color: 'white' }}
          inputContainerStyle={{ backgroundColor: '#32936f' }}
          inputStyle={{ color: 'white' }}
          containerStyle={{ backgroundColor: 'white' }}
        />


        <FlatList
          data={this.state.items}
          style={styles.container}
          contentContainerStyle={{ justifyContent: 'center', alignItems: 'center' }}

          renderItem={({ item }) =>
            <View style={{
              borderRadius: 10, maxWidth: '85%',
              minWidth: '85%', backgroundColor: 'white', justifyContent: 'center', paddingBottom: 15, marginTop: 10, padding: 15,

            }}>
              <View style={{ flex: 1, flexDirection: 'row' }}>
                <View style={{ maxWidth: '50%', minWidth: '50%' }}>
                  <Text style={styles.item}>Product name:{item.productname}</Text>
                  <Text style={styles.item}>Suggeting user:{item.username}</Text>
                  <Text style={styles.item}>Category:{item.category}</Text>

                </View>
                <View style={{ maxWidth: '50%', minWidth: '50%' }}>
                  <Image
                    resizeMode="contain"
                    source={{ uri: item.link }}
                    style={styles.canvas}
                  />
                </View>
            
              </View>




              <Text style={styles.item}>Description:{item.description}</Text>
              <TouchableOpacity  onPress={ ()=> Linking.openURL(item.link) } >
                <Text style={styles.item, { top: 5, color: '#84bc9c', fontWeight: '700', fontSize: 16 }} >Source:{item.link}</Text>
              </TouchableOpacity>

            </View>


          }
        />


      </View>

    );
  }
}



LinksScreen.navigationOptions = {
  header: null,


};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#26A96C'

  },
  item: {
    color: '#32936f',
    fontWeight: '700',
    fontSize: 16
  },
  canvas: {
    position: 'absolute',
    width: 120,
    height: 120,
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    flex: 1,
    alignItems: 'center',



  },
});