import React from 'react';
import { StyleSheet, SafeAreaView, View, Text, TouchableOpacity, Image, } from 'react-native';
import { globalStyles } from '../styles/global';

export default function LogIn({ route, navigation }) {

    const { onClick } = route.params

    return(
        <SafeAreaView style={globalStyles.signInContainer}>
            <View  style={styles.header}>
                <Image source={require('../assets/logo_msm_no_background.png')} style={styles.logo}/>
            </View>
            <View style={styles.buttonsContainer}>
                {/* <View style={{ alignSelf: 'flex-start', marginBottom: 10}}>
                    <Text style={styles.title}>Musée</Text>
                    <Text style={styles.title}>Subaquatique</Text>
                </View> */}
                <View style={{}}>
                    <TouchableOpacity onPress={() => onClick(true)}>
                        <View style={styles.button}>
                            <Image source={require('../assets/google_icon.png')} style={styles.icon}/>
                            <Text style={styles.text}>Continuer avec Google</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => onClick(true)}>
                        <View style={styles.button}>
                            <Image source={require('../assets/facebook_icon.png')} style={styles.icon}/>
                            <Text style={styles.text}>Continuer avec Facebook</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => onClick(true)}>
                        <View style={styles.button}>
                            <Image source={require('../assets/twitter_icon.png')} style={styles.icon}/>
                            <Text style={styles.text}>Continuer avec Twitter</Text>
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={{ flexDirection: 'row', margin: 18}}>
                    <View style={{ ...styles.horizontalLine, marginRight: 10 }}></View>
                    <View>
                        <Text style={{ fontSize: 16}}>OU</Text>
                    </View>
                    <View style={{ ...styles.horizontalLine, marginLeft: 10 }}></View>
                </View>
                <View>
                    <TouchableOpacity onPress={() => onClick(true)}>
                        <View style={{ ...styles.button, height: 48, justifyContent: 'center'}}>
                            <Text style={styles.text}>Continuer avec l'adresse mail</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.signUpContainer}>
                <Text>Pas de compte?</Text>
                <TouchableOpacity onPress={() => navigation.navigate('Sign Up')}>
                    <View>
                        <Text style={{ color: '#00A6FF'}}>S'inscrire</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    header: {
        justifyContent: 'center',
        alignItems: 'flex-end',
        alignSelf: 'stretch',
        height: '15%'
    },

    logo: {
        width: 150,
        height: 73,
        margin: 10
    },

    title: {
        fontSize: 24
    },

    buttonsContainer: {
        alignItems: 'center', 
        justifyContent: 'center',
        marginTop: 48
    },

    button: {
        flexDirection: 'row',
        backgroundColor: 'white',
        borderRadius: 10,
        alignItems: 'center',
        marginTop: 15,
        marginBottom: 15, 
        width: 280
    },

    icon: {
        width: 36,
        height: 36,
        margin: 10
    },

    text: {
        fontSize: 16,
        margin: 10
    },

    horizontalLine: { 
        borderBottomWidth: 1, 
        borderBottomColor: 'black', 
        width: '35%',
        marginBottom: 10,
    },

    signUpContainer: {
        alignItems: 'center',
        marginTop: 36,
    }
})