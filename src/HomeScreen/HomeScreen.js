import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  View,
  Image,
  ImageBackground,
  DrawerLayoutAndroid,
  TouchableHighlight,
} from 'react-native';

import net from 'react-native-tcp'
import nodejs from 'nodejs-mobile-react-native';

import { Col, Row, Grid } from 'react-native-easy-grid';
import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, Right, Footer, FooterTab, Title} from 'native-base';


export default class HomeScreen extends Component<{}> {
  static navigationOptions = {
   header: null,
  }

// Connect via a RN-tunnel to node-project that controls samsung smart tv.
  componentWillMount()
  {
    nodejs.start("samsung_control.js");

  }

  constructor(props) {
     super(props)
     this.state = { count: 0 }
     console.log('Rendering getSensorValue...');
    this._doSendRequest();
   }




   _doSendRequest = () => {
    var client = net.createConnection({port: 1234, host:'192.250.230.110'});
    console.log('Connected...');

    client.on('error', function(error) {
      console.log(error)
    });

    client.on('data', function(data) {
      doHandleEvent(data)
    });
  }



   onPress = () => {
   this.props.navigation.navigate('ButtonScreen', {})
   }

   onPressHome = () => {
   this.props.navigation.navigate('Home', {})
   }

   onPressSettings = () => {
   this.props.navigation.navigate('Settings', {})
   }

  render() {

     nodejs.channel.addListener(
      "message",
      (msg) => {
        console.log("From node: " + msg);
      },
      this
    );
    
    return (
      <Container>

        <Header>
            <Body>
            <Title>Home</Title>
            </Body>
        </Header>

        <Content>
          <Grid>
            <Col>
              <TouchableHighlight onPress={() => nodejs.channel.send('mute')}>
                <Row>
                    <Card>
                      <CardItem header>
                          <Text style ={styles.headerText}>
                            Touchbutton 1
                          </Text>
                      </CardItem>
                        <CardItem>
                        <ImageBackground style={styles.cardImage} source={require('./../img/stol.png')}/>
                        </CardItem>
                        <CardItem footer>
                          <Text> Mute Television</Text>
                        </CardItem>
                    </Card>
                </Row>
              </TouchableHighlight>

              <TouchableHighlight onPress={this.onPress}>
                <Row>
                    <Card>
                      <CardItem header>
                          <Text style ={styles.headerText}>
                            On recline
                          </Text>
                      </CardItem>
                        <CardItem>
                        <ImageBackground style={styles.cardImage} source={require('./../img/stol.png')}/>
                        </CardItem>
                        <CardItem footer>
                          <Text> Play Music </Text>
                        </CardItem>
                    </Card>
                </Row>
              </TouchableHighlight>
            </Col>

            <Col>
              <TouchableHighlight  onPress={this.onPress}>
                <Row>
                    <Card>
                      <CardItem header>
                          <Text style ={styles.headerText}>
                            Touchbuton 2
                          </Text>
                      </CardItem>
                        <CardItem>
                        <ImageBackground style={styles.cardImage} source={require('./../img/stol.png')}/>
                        </CardItem>
                        <CardItem footer>
                          <Text> Turn off Television </Text>
                        </CardItem>
                    </Card>
                </Row>
              </TouchableHighlight>

              <TouchableHighlight onPress={this.onPress}>
                <Row>
                    <Card>
                      <CardItem header>
                          <Text style ={styles.headerText}>
                            While occupied
                          </Text>
                      </CardItem>
                        <CardItem>
                        <ImageBackground style={styles.cardImage} source={require('./../img/stol.png')}/>
                        </CardItem>
                        <CardItem footer>
                          <Text> Set Scene: Relaxation </Text>
                        </CardItem>
                    </Card>
                </Row>
              </TouchableHighlight>
            </Col>
          </Grid>
        </Content>

            <Footer>
                <FooterTab>
                  <Button vertical onPress = {this.onPressHome}>
                    <Icon name="home" />
                    <Text>Home</Text>
                  </Button>
                  <Button vertical active onPress = {this.onPressSettings}>
                    <Icon active name="settings" />
                    <Text>Settings</Text>
                  </Button>
                </FooterTab>
            </Footer>


        </Container>
    );
  }
}

// HELPER FUNCTIONS


function doHandleEvent(data) {
 
  var response = null;
 
  try{
    response = JSON.parse(data.toString());
  } catch(e) {
      data = null;
  } 

  if ((data != null) && (response != null)) {
    console.log(response.result.event.targetName);
 
    var resultArray = (response.result.event.targetName.split('/'));
 
    if(sensID.touch1 === resultArray[3]) {
      try{
        if (response.result.event.eventType == 'touch') {
        nodejs.channel.send('mute');
      }
      
      } catch(e) {
        console.log(e);
      }
 
    
    } else if(sensID.prox === resultArray[3]) {
      
 
      try{
        console.log('SITTING LOGGING...');
      } catch(e){
        console.log('timespentsitting error');
      }
 
 
    } else if(sensID.temp === resultArray[3]) {
      console.log('Temp sensor high.');
    } else if(sensID.touch2 === resultArray[3]) {
      try{
        if (response.result.event.eventType == 'touch') {
        nodejs.channel.send('power');
        console.log('TOUCH SENSOR 2');
      }
      
      } catch(e) {
        console.log(e);
      }
    }
  }
  }


const sensID = {
  prox: 'b7ktt1l7rihma4b9eb5g',
  temp: 'b7ktt057rihma4b9drk0',
  touch1: 'b7ktt0t7rihma4b9e1ag',
  touch2: 'b7ktt1l7rihma4b9e9g0',
};



// STYLES

const styles = StyleSheet.create({
  cardImage: {
    height: 120,
    width: null,
    flex: 1,
    alignItems: 'center',
  },
  headerText:{
    textAlign: 'center',
  }
})
