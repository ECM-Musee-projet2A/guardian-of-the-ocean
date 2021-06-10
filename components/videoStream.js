/* eslint-disable prettier/prettier */
import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { NodePlayerView } from 'react-native-nodemediaclient';

export default function VideoStream() {
  const isLiveOn = false;

  if (isLiveOn) {
    return (
      <View style={styles.videoPLayer}>
        <NodePlayerView
          style={{
            height: '100%',
            width: '100%',
          }}
          inputUrl={'rtmp://121.199.11.39:1935/webcam/cam'}
          scaleMode={'ScaleAspectFit'}
          bufferTime={300}
          maxBufferTime={1000}
          autoplay={true}
        />
      </View>
    );
  } else {
    return(
      <View style={styles.textContainer}>
        <Text style={styles.text}>
          Désolé, il n'y a pas de live en ce moment...
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  videoPlayer: {
    width: '90%',
    height: '20%',
    justifyContent: 'center',
    alignItems: 'center'
  },

  textContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },

  text: {
    fontFamily: 'sansation',
    fontSize: 32,
  },
});
