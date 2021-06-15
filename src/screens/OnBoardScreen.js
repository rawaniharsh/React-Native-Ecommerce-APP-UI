import React, { Component } from 'react';
import { View, Text, TouchableOpacity, ImageBackground, StyleSheet } from 'react-native';
import * as Font from 'expo-font';
import TouchableBtn from '../components/common/TouchableButton';

class OnBoardScreen extends Component {

  static navigationOptions = {
    headerShown: false,
};

    state = {
        fontsLoaded: false,
      };

      async loadFonts() {
        await Font.loadAsync({
          // Load a font `Montserrat` from a static resource
          AbhayaLibre: require('../assets/fonts/AbhayaLibre-Bold.ttf'),
    
          // Any string can be used as the fontFamily name. Here we use an object to provide more control
          'AbhayaLibre-Medium': {
            uri: require('../assets/fonts/AbhayaLibre-Medium.ttf'),
            display: Font.FontDisplay.FALLBACK,
          },
          'AbhayaLibre-ExtraBold': {
            uri: require('../assets/fonts/AbhayaLibre-ExtraBold.ttf'),
            display: Font.FontDisplay.FALLBACK,
          },
          'AbhayaLibre-Regular': {
            uri: require('../assets/fonts/AbhayaLibre-Regular.ttf'),
            display: Font.FontDisplay.FALLBACK,
          },
          'AbhayaLibre-SemiBold': {
            uri: require('../assets/fonts/AbhayaLibre-SemiBold.ttf'),
            display: Font.FontDisplay.FALLBACK,
          },
        });
        this.setState({ fontsLoaded: true });
      }
    
      componentDidMount() {
        this.loadFonts();
      }

    render() {
        if (this.state.fontsLoaded) {
        return (
            <ImageBackground
                style={{ flex: 1 }}
                source={require('../assets/images/bg_onboard.png')}>
                <View style={styles.titleContainer}>
                    <Text style={styles.heading}>Welcome</Text>
                    <Text style={styles.heading}>to our store</Text>
                    <Text style={styles.headingDesc}>India’s fastest ecommerce app</Text>
                </View>
              <TouchableBtn onPress={()=>this.props.navigation.navigate('Login')} name='Get started' />
            </ImageBackground>
        );
        } else {
            return null;
          }
    }
};

const styles = StyleSheet.create({
    heading: {
        fontSize: 48,
        fontFamily: 'AbhayaLibre-Medium',
        color: '#fff',
    },
    headingDesc:{
        fontSize: 16,
        fontFamily: 'AbhayaLibre-Medium',
        color: '#fff',
    },
    titleContainer: {
        alignItems: 'center',
        top: 460
    }
});

export default OnBoardScreen;