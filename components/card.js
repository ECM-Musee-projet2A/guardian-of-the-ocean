import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';

export default function Card({ item }) {
    return(
        <View style={styles.container}>
            <View style={styles.imageContainer}>
                <Image source={item.image} style={styles.imagePreview}/>
            </View>
            <View style={styles.text}>
                <Text style={styles.title}>{item.name}</Text>
                <Text>Hauteur: {item.height}</Text>
                <Text>Artiste: {item.artist}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row', 
        height: 100,
        alignItems: 'center',
    },

    imageContainer: {
        marginLeft: 10
    },

    imagePreview: {
        height: 80,
        width: 80,
        borderRadius: 10
    },

    text: {
        marginLeft: 10
    },

    title: {
        fontFamily: 'sansation-bold',
        fontSize: 18,
        color: "#00A6FF"
    }
})