import React, { Component } from 'react';
import { Text, Image, StyleSheet, width, KeyboardAvoidingView, ScrollView, TouchableOpacity, } from 'react-native';
import { Input, SocialIcon, Icon } from 'react-native-elements';
import { } from '@expo/vector-icons';

class LoginScreen extends Component {

    static navigationOptions = {
        headerShown: false
    };

    render() {
        return (
            <KeyboardAvoidingView
                style={styles.container}
                keyboardVerticalOffset={Platform.OS === 'ios' ? 64 : 84}>
                <ScrollView>

                    <Image style={styles.image} source={require('../../assets/images/login_card.jpeg')} />
                    <Text style={styles.txtBfrLogin}>Start your shopping</Text>
                    <Text style={styles.txtBfrLogin}>with RiHas</Text>
                    <Input
                        style={{ fontFamily: 'AbhayaLibre-Regular' }}
                        placeholder="Enter mobile number"
                        leftIcon={
                            <Image
                                style={{ width: 47, height: 30 }}
                                source={require('../../assets/images/indian-flag.jpeg')} />
                        }
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
                    <TouchableOpacity activeOpacity={0.6}
                    style={styles.nextBtn}
                    onPress={()=>this.props.navigation.navigate('OtpVerification')}
                    >
                        <Icon
                            name='keyboard-arrow-right'
                            size={40}
                            color="#ffff" />
                    </TouchableOpacity>
                    <SocialIcon style={styles.socialBtn, { marginTop: 30, marginLeft: 30, marginRight: 30 }}
                        title='Continue with Google'
                        button
                        type='google'
                    />
                    <SocialIcon style={styles.socialBtn}
                        title='Continue with Facebook'
                        button
                        type='facebook'
                    />
                </ScrollView>
            </KeyboardAvoidingView>
        );
    }
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    },
    image: {
        width: width,
        height: 380
    },
    txtBfrLogin: {
        fontSize: 24,
        marginHorizontal: 20,
        fontFamily: 'AbhayaLibre-Regular'

    },
    socialBtn: {
        width: 300,
        height: 52,
        marginLeft: 30,

    },
    nextBtn: {
        backgroundColor: '#3A456B', 
        borderRadius: 150, 
        width: 60, 
        height: 60, 
        alignItems: 'center', 
        justifyContent: 'center',
        alignSelf: 'flex-end',
        marginRight: 30
    }
});

export default LoginScreen;