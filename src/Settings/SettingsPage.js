import React, { Component } from 'react';
import { Container, Header,Button, Content, List, ListItem, Text, Icon, Left, Body, Title, Right, Switch,Footer, FooterTab } from 'native-base';
import {
  StackNavigator,
} from 'react-navigation';

export default class SettingsPage extends Component {
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
           <Title>Settings</Title>
         </Body>
         <Right>
         </Right>
       </Header>
        <Content>
          <List>
            <ListItem icon>
              <Left>
                <Icon name="pulse" />
              </Left>
              <Body>
                <Text>LifeGuard</Text>
              </Body>
              <Right>
                <Switch value={false} />
              </Right>
            </ListItem>
            <ListItem icon>
              <Left>
                <Icon name="wifi" />
              </Left>
              <Body>
                <Text>Wi-Fi</Text>
              </Body>
              <Right>
                <Text></Text>
                <Icon name="arrow-forward" />
              </Right>
            </ListItem>
            <ListItem icon>
              <Left>
                <Icon name="bluetooth" />
              </Left>
              <Body>
                <Text>Bluetooth</Text>
              </Body>
              <Right>
                <Text>On</Text>
                <Icon name="arrow-forward" />
              </Right>
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
