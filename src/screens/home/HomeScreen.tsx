import React, { Component } from 'react';
import { Button, Text } from 'react-native';
import CustomSafeAreaScrollView from '../../components/global/CustomSafeAreaViewScroll';
import { navigate } from '../../utils/NavigationUtil';
import {styles} from './style'


interface State {
  message: string;
}

export default class HomeScreen extends Component<{}, State> {
  constructor(props: {}) {
    super(props);
    this.state = {
      message: 'Hello from HomeScreen!',
    };
  }

  handleNav = () => {
    navigate('ProductScreen' , { message: this.state.message });
  };

  render() {
    return (
      <CustomSafeAreaScrollView style={styles.container}>
        <Text style={styles.text}>Home Screen</Text>        
        <Button title='Go to Product' color='lightpink' onPress={this.handleNav} />


        
      </CustomSafeAreaScrollView>
    );
  }
}


