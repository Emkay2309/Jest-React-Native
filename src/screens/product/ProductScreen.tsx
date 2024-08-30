import { Text, StyleSheet, View, Button } from 'react-native';
import React, { Component } from 'react';
import { goBack, navigate } from '../../utils/NavigationUtil';
import ErrorBoundary from '../error/ErrorBoundary'


// Define the type for the props
interface ProductScreenProps {
  route: {
    params: {
      message: string;
    };
  };
}

export default class ProductScreen extends Component<ProductScreenProps> {
  handleBack = () => {
    goBack();
  };

  handleNav = () => {
    navigate('DetailScreen');
  }

  render() {
    const { message } = this.props.route.params;
    return (

        <View style={styles.container}>
          <Button title="Back" color="lightpink" onPress={this.handleBack} />
          <Text>Product Screen</Text>
          <Text>{message}</Text>
          <Text>check</Text>

          <Button title="Detail" color="lightpink" onPress={this.handleNav} />
        </View>

    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

});

