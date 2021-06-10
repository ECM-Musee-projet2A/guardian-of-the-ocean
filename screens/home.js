import React from 'react';
import { StyleSheet, SafeAreaView, View, Text, FlatList, Image, Pressable, TouchableOpacity, TouchableHighlight } from 'react-native';
import { globalStyles } from '../styles/global';
import Card from '../components/card';
import { statuesInfo } from '../shared/statuesInfo';

export default function Home({ navigation }) {

    return(
        <View style={globalStyles.container}>
            <SafeAreaView style={globalStyles.content}>

                {/* HEADER */}
                <View style={styles.header}>
                    <Text style={styles.title}>Accueil</Text>
                    <Image 
                        source={require('../assets/fish_home_screen.png')} 
                        style={{ height: '100%'}}
                    />
                </View>

                {/* TOUCHABLE IMAGE */}
                <View style={styles.mainImageContainer}>
                    <Image source={require('../assets/images/main.jpg')} style={styles.mainImage}/>
                </View>

                {/* INFO FLATLIST */}
                <FlatList 
                    data={statuesInfo}
                    removeClippedSubviews={false}
                    renderItem={({ item }) => (
                                <TouchableOpacity onPress={() => navigation.navigate('View details', item )}>
                                    <Card item={item}/>
                                </TouchableOpacity>
                            )
                    }
                    keyExtractor={item => item.name}
                    showsVerticalScrollIndicator={false}
                />
            </SafeAreaView>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        height: '20%', 
        flexDirection: 'row', 
        justifyContent: 'space-between'
    },

    title: {
        ...globalStyles.title,
        width: '60%', 
        height: '50%'
    },

    mainImageContainer: { 
        alignItems: 'center', 
        marginRight: 10,
        marginLeft: 10,
        marginBottom: 20
    },

    mainImage: {
        height: 200,
        width: '100%',
        borderRadius: 10,
    }
})