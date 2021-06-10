import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';

export default function CardData({ data }) {
    return(
        <View style={ styles.container }>
            <View style={ styles.card }>
                <View style={ styles.text }>
                    <Text style={{ ...styles.title, textTransform: data.variable !== "pH" ? 'capitalize' : 'none'}}>{ data.variable }:</Text>
                    <Text>Dernier relevé il y a: { data.lastRefresh }</Text>
                </View>
                <View style={ styles.valueContainer }>
                    <Text style={ styles.value }>{ data.latestValue } { data.unit }</Text>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row', 
        height: 100,
        alignItems: 'center',
        margin: 10,
    },

    card: {
        flexDirection: 'row'
    },

    text: {
        marginLeft: 10
    },

    title: {
        fontFamily: 'sansation-bold',
        fontSize: 24,
        color: "#00A6FF",
    },

    valueContainer: {
        flex: 1,
        alignItems: 'flex-end',
    },

    value: {
        fontFamily: 'sansation-bold',
        fontSize: 24,
        color: "#00A6FF",
        marginRight: 15
    }
})