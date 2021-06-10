import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import VideoStream from '../components/videoStream';
import { globalStyles } from '../styles/global';

export default function Live() {
    return(
        <View style={globalStyles.container}>
            <View style={globalStyles.content}>
                <Text style={{ ...globalStyles.title, paddingBottom: 23 }}>Profitez du live !</Text>
                <View style={styles.video}>
                    <VideoStream />
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    video: {

    }
})