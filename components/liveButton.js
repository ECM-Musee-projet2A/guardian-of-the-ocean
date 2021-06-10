import React, { useRef } from 'react';
import { StyleSheet, TouchableWithoutFeedback, Animated } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function LiveButton({ navigation, isFocused }) {

    const buttonSize =  useRef(new Animated.Value(1)).current;

    const pressHandler = () => {
        Animated.sequence([
            Animated.timing(buttonSize, {
                toValue: 0.85,
                duration: 100,
                useNativeDriver: false
            }),
            Animated.timing(buttonSize, {
                toValue: 1,
                useNativeDriver: false
            })
        ]).start();
    } 


        return(
            <TouchableWithoutFeedback
                onPress={() => {
                    pressHandler();
                    navigation.navigate('Live');
                    }}>
                <Animated.View style={
                    [
                        styles.button, 
                        {
                            transform: [{scale: buttonSize}], 
                            backgroundColor: isFocused === true ? '#00A6FF' : '#ECECEC',
                            shadowColor: isFocused === true ? '#00A6FF' : '#ECECEC'
                        }
                    ]
                }>
                    <Icon name='play-circle' size={36} color="#fff" />
                </Animated.View>
            </TouchableWithoutFeedback>
        )
}

const styles = StyleSheet.create({
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        width: 84,
        height: 84,
        borderRadius: 42,
        shadowRadius: 5,
        shadowOffset: { height: 10},
        shadowOpacity: 0.3,
        borderWidth: 3,
        elevation: 8,
        borderColor: '#FFF'
    }
})