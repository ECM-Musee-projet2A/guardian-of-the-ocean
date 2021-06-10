import React, { useEffect } from 'react';
import { StyleSheet, Text, View, ImageBackground, TouchableWithoutFeedback, Animated, FlatList} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function Welcome({ onClick }) {

    const backgroundImage = require('../assets/images/poseidon.jpg')

    const opacity =  new Animated.Value(1)

    useEffect(() => {
        fadeOut();
    }, [])

    const fadeIn = () => {   
        opacity.setValue(0)              
        Animated.timing(
          opacity,           
          {
            toValue: 1,                   
            duration: 1000, 
            useNativeDriver: false             
          }
        ).start(() => fadeOut());                        
     }
   
     const fadeOut = () => {
        opacity.setValue(1)
       Animated.timing(                  
          opacity,            
          {
            toValue: 0,                   
            duration: 1000,  
            useNativeDriver: false            
          }
       ).start(() => fadeIn()); 
    }

    return(
        <View style={styles.container}>
            <TouchableWithoutFeedback onPress={() => setTimeout(() => onClick(false), 500)}>
                <ImageBackground source={backgroundImage} style={styles.image}>
                    <View style={styles.content}>
                        <View>
                            <Text style={styles.text}>Bienvenue !</Text>
                        </View>
                        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                            <Text style={{ color: 'white', fontFamily: 'sansation', fontSize: 20, }}>Prêts à plonger?</Text>
                            <FlatList 
                                data={[
                                    { key: 1, text: "Découvrez le musée et le projet" },
                                    { key: 2, text: "Profitez du live sous-marin" },
                                    { key: 3, text: "Visualisez en temps réel les données environnementales sous-marines"}
                                ]}
                                renderItem={({ item }) => (
                                            <View style={styles.textListView} >
                                                <Icon name="arrow-right" size={16} color="white" />
                                                <Text style={styles.textList}>{ item.text }</Text>
                                            </View>
                                        )
                                }
                                keyExtractor={ item => item.key}
                            />
                        </View>
                        <Animated.View style={{opacity: opacity}}>
                            <Text style={styles.bottomText}>Touchez l'écran pour continuer</Text>
                        </Animated.View>
                    </View>
                </ImageBackground>
            </TouchableWithoutFeedback>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    content: {
        flex: 1,
        justifyContent: 'space-around'
    }, 
    image: {
        flex: 1,
        resizeMode: 'cover',
    },
    text: {
        color: "white",
        fontFamily: 'sansation-bold',
        fontSize: 42,
        textAlign: "center",
    },
    textListView: { 
        flexDirection: 'row', 
        alignItems: 'center',
        padding: 10,
        marginTop: 10, 
        borderRadius: 20, 
        backgroundColor: '#00A6FFB9'
    },
    textList: {
        color: 'white',
        fontFamily: 'sansation',
        fontSize: 16,
        marginLeft: 10,
    },
    bottomText: {
        color: 'white',
        fontFamily: 'sansation',
        fontSize: 20,
        textAlign: "center",
    }
})