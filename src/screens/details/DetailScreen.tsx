import { Text, StyleSheet, View, Button } from 'react-native'
import React, { Component } from 'react'
import {resetAndNavigate} from '../../utils/NavigationUtil'
interface detailsProps {
  message: String
}

interface detailsState {
  isError: boolean
}


export default class DetailScreen extends Component<detailsProps, detailsState> {

  constructor(props: detailsProps) {
    super(props)
    this.state = {
      isError: false
    }
  }

  HandleNav = () => {
    resetAndNavigate('HomeScreen');
  }
  render() {

    return (
      <View>
        <Text>DetailScreen</Text>
        <Button title='go to home' onPress={this.HandleNav} />
      </View>
    )
  }
}

const styles = StyleSheet.create({})