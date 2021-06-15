import React from 'react';
import { TouchableOpacity, StyleSheet, View, Text } from 'react-native';


const TouchableBtn = (props) => {
    return (
        <TouchableOpacity
            activeOpacity={0.8}
            style={styles.btnTuch}
            onPress={props.onPress}
        >
            <View>
                <Text style={{ color: '#ffff', fontFamily: 'AbhayaLibre-Medium', fontSize: 22 }}>{props.name}</Text>
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    btnTuch: {
        backgroundColor: '#3A456B',
        width: 300,
        height: 52,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: 32,
        top: 520

    }
});

export default TouchableBtn;