import { StyleSheet, StatusBar, Platform } from 'react-native';

export const globalStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
    },

    signInContainer: {
        flex: 1, 
        backgroundColor: '#ECECEC', 
        alignItems: 'center', 
        justifyContent: 'flex-start',
        // marginTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0
    },

    content: {
        flex: 1,
        backgroundColor:'#ECECEC',
        // marginTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    },
    
    detailsContent: {
        flex: 1,
        backgroundColor:'#ECECEC',
    },

    title: {
        margin: 24,
        fontFamily: 'sansation',
        fontSize: 32,
        color: '#0070FF',
        borderBottomWidth: 1,
        borderBottomColor: '#0070FF'
    },

})