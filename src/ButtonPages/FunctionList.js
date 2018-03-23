import React, { Component } from 'react';
import { Container, Header,Button, Content, List, ListItem, Text, Icon, Left, Body, Title,  Footer, FooterTab, Right, Switch } from 'native-base';
import {
  StackNavigator,
} from 'react-navigation';

export default class FunctionList extends Component {
  static navigationOptions = {
   header: null,
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
    return (
      <Container>
        <Header>
         <Left>
           <Button transparent onPress={this.onPress}>
             <Icon name='arrow-back' />
           </Button>
         </Left>
         <Body>
           <Title>Functions</Title>
         </Body>
         <Right>
          </Right>
          </Header>
        <Content>
          <List>
            <ListItem itemHeader first>
              <Text>Presets</Text>
            </ListItem>
            <ListItem>
              <Text>Turn on Television</Text>
            </ListItem>
            <ListItem>
              <Text>Turn off Television</Text>
            </ListItem>
            <ListItem>
              <Text>Dim Lights</Text>
            </ListItem>
            <ListItem>
              <Text>Turn on lights</Text>
            </ListItem>
            <ListItem>
              <Text>Turn off lights</Text>
            </ListItem>
            <ListItem>
              <Text>Turn off lights</Text>
            </ListItem>
            <ListItem>
              <Text>Turn off lights</Text>
            </ListItem>
            <ListItem>
              <Text>Turn on music </Text>
            </ListItem>
            <ListItem>
              <Text>Turn off music</Text>
            </ListItem>
            <ListItem>
              <Text>Next track</Text>
            </ListItem>
            <ListItem last>
              <Text>Previous track</Text>
            </ListItem>
            <ListItem itemheader first>
              <Text>Custom functions</Text>
            </ListItem>
            <ListItem last>
              <Text>Turn on jacuzzi</Text>
            </ListItem>
          </List>
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
