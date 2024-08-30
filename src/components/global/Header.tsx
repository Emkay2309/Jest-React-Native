import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import React, { Component } from 'react';

export class Header extends Component {

    constructor(props : any){
        super(props);
        this.state = {
            counter : 0,

            detail : {
                name : '',
                score : 0,
            }
        }
    }

    handleDisplay = ()=> {
        console.log('display btn clicked')
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.imageContainer}>
                    <Image
                        source={require('../../assets/images/logo.png')}
                        style={styles.image}
                        resizeMode="contain"
                    />
                </View>
                <View>
                    <Text style={styles.text}>Header</Text>
                </View>

                <TouchableOpacity onPress={this.handleDisplay} style={styles.btn}>
                    <Text>Display</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

export default Header;

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column', // This will align the image and text in a row
        alignItems: 'center', // This will vertically center the image and text
    },
    imageContainer: {
        height: 40, // Set a fixed height for the image container
        width: 40,  // Set a fixed width for the image container
        marginRight: 10, // Adds some space between the image and text
    },
    image: {
        height: '100%',
        width: '100%',
    },
    text: {
        fontSize: 30,
        color: 'white',
    },
    btn : {
        backgroundColor: 'lightpink',
        height : 30,
        width : 70,
        borderRadius : 5,
        alignItems : 'center',
        justifyContent : 'center'
    }
});
