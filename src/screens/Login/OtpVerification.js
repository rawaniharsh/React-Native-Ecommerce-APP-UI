import React, { Component } from 'react';
import { View, Text, ImageBackground, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { Input, Icon } from 'react-native-elements';

class OtpVerificationScreen extends Component {

    static navigationOptions = {
        title: 'Otp Verification',
        headerStyle: {
            backgroundColor: '#fff',
        },
        headderIconColor: '#3A456B',
        headerTintColor: '#3A456B',
        headerTitleStyle: {
            fontFamily: 'AbhayaLibre-Medium',
        },
        headerTransparent: true

    };

    render() {
        return (
            <ImageBackground source={require('../../assets/images/bg_light_grey.jpeg')}
                blurRadius={80} style={{ backgroundColor: "#fff", flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <View style={{ top: 20 }}>
                    <Text style={styles.txtBfrLogin}>Enter your 4-digit code</Text>
                    <Input
                        style={{ fontFamily: 'AbhayaLibre-Regular' }}
                        placeholder="- - - - "
                        inputContainerStyle={
                            {
                                width: 300,
                                height: 40,
                                margin: 10,
                            }
                        }
                        autoCapitalize="none"
                        autoCorrect={false}
                        keyboardType="phone-pad"
                    />
                    <TouchableOpacity>
                        <Text style={styles.resendCode}>Resend Code</Text>
                        </TouchableOpacity>
                    <TouchableOpacity activeOpacity={0.6}
                        style={styles.nextBtn}
                        onPress={() => this.props.navigation.navigate('OtpVerification')}
                    >
                        <Icon
                            name='keyboard-arrow-right'
                            size={40}
                            color="#ffff" />
                    </TouchableOpacity>
                </View>

            </ImageBackground>
        );
    }
}

const styles = StyleSheet.create({

    txtBfrLogin: {
        fontSize: 24,
        marginHorizontal: 20,
        fontFamily: 'AbhayaLibre-Regular'

    },
    nextBtn: {
        backgroundColor: '#3A456B',
        borderRadius: 150,
        width: 60,
        height: 60,
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'flex-end',
        marginRight: 20,
        marginTop: -40
    },
    resendCode: {
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'flex-start',
        marginLeft: 20,
        fontFamily: 'AbhayaLibre-Medium',
        color: '#3A456B',
        marginTop: 20,
        fontSize: 16
    }
})
export default OtpVerificationScreen;