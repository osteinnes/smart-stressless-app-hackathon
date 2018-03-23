import React, { Component } from 'react';
import { Container, Header,Button,Thumbnail, Content, List, ListItem, Text, Icon, Left, Body, Title,  Footer, FooterTab, Right, Switch } from 'native-base';
import {
  StackNavigator,
} from 'react-navigation';

export default class ButtonPages extends Component {
  static navigationOptions = {
   header: null,
  }
  onPress = () => {
  this.props.navigation.navigate('Home', {})
  }

  onPressHome = () => {
  this.props.navigation.navigate('Home', {})
  }

  onPressSettings = () => {
  this.props.navigation.navigate('Settings', {})
  }

  onPressList = () => {
    this.props.navigation.navigate('Functions', {})
  }


  render() {
    return (
      <Container>
        <Content>
        <Header>
         <Left>
           <Button transparent onPress={this.onPress}>
             <Icon name='arrow-back' />
           </Button>
         </Left>
         <Body>
           <Title>Assignment</Title>
         </Body>
         <Right>
         </Right>
       </Header>


            <List>
             <ListItem avatar  onPress = {this.onPressList}>
               <Left>
                 <Thumbnail source={require('./../img/iftt.png')} />
               </Left>
               <Body>
                 <Text>IFTTT</Text>
               </Body>
               <Right>
               </Right>
             </ListItem>

             <ListItem avatar  onPress = {this.onPressList}>
               <Left>
                 <Thumbnail source={require('./../img/iftt.png')} />
               </Left>
               <Body>
                 <Text>IFTTT</Text>
               </Body>
               <Right>
               </Right>
             </ListItem>

             <ListItem avatar  onPress = {this.onPressList}>
               <Left>
                 <Thumbnail source={require('./../img/iftt.png')} />
               </Left>
               <Body>
                 <Text>IFTTT</Text>
               </Body>
               <Right>
               </Right>
             </ListItem>

             <ListItem avatar  onPress = {this.onPressList}>
               <Left>
                 <Thumbnail source={require('./../img/iftt.png')} />
               </Left>
               <Body>
                 <Text>IFTTT</Text>
               </Body>
               <Right>
               </Right>
             </ListItem>
           </List>


        <ListItem avatar  onPress = {this.onPressList}>
          <Left>
            <Thumbnail source={require('./../img/iftt.png')} />
          </Left>
          <Body>
            <Text>IFTTT</Text>
          </Body>
          <Right>
          </Right>
        </ListItem>

        <ListItem avatar  onPress = {this.onPressList}>
          <Left>
            <Thumbnail source={require('./../img/iftt.png')} />
          </Left>
          <Body>
            <Text>IFTTT</Text>
          </Body>
          <Right>
          </Right>
        </ListItem>
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
