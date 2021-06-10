import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, View, Text, FlatList, TouchableOpacity } from 'react-native';
import { globalStyles } from '../styles/global';
import CardData from '../components/cardData';

export default function Data({ navigation }) {
    const [pH, setPH] = useState({})
    const [temperature, setTemperature] = useState({})
    const [turbidity, setTurbidity] = useState({})

    const fakeDataForDemo = [
        { variable: 'pH', values: [], latestValue: 8.07, unit: "", lastRefresh: "1 minute", 
        description: "Le pH est l'abréviation de “potentiel hydrogène” et mesure l’activité chimique des ions hydronium " 
        + "naturellement présents en solution aqueuse. Lors d’une mesure, on obtient une valeur entre 0 et 14 : 0 correspond à un "
        + "milieu très acide et 14 à un milieu très basique. L’acidification des océans fait référence à cet indicateur : le CO2 "
        + "présent dans l’air se dissout dans les masses d’eau terrestres, et, de par une réaction chimique, tend à rendre plus acide "
        + "le pH. Pour preuve, le pH maritime est passé de 8,25 à 8,14 entre 1751 et 2004. Cela pose de très forts problèmes au niveau "
        + "de la biodiversité marine qui doit s’adapter à ces nouvelles conditions de vie."},
        { variable: 'température', values: [], latestValue: 19.8, unit: "°C", lastRefresh: "1 minute", 
        description: "Cet indicateur est compréhensible par tous et est utile pour deux aspects : il permet aux utilisateurs "
        + "de connaître la température de l’eau dans laquelle ils vont plonger, et permet aux scientifiques de connaître précisément "
        + "l’évolution de la température (± 0,1 °C). Conscients du problème de réchauffement des mers du globe, l’implantation d’un tel "
        + "capteur aux abords d’une grande ville comme Marseille s’inscrit dans une démarche de monitoring du réchauffement climatique."},
        { variable: 'turbidité', values: [], latestValue: 50.9, unit: "UTN", lastRefresh: "1 minute", 
        description: "Indicateur clé de la qualité de l’eau, la turbidité évalue la quantité de particules en suspension dans "
        + "un fluide. Dans le cas de la mer, une turbidité anormalement grande peut indiquer la présence de matière polluante "
        + "en milieu marin. Pour remarque, une grande quantité de particules en suspension dans l’eau de mer implique une grande "
        + "absorption des rayons du Soleil : le processus de photosynthèse actif chez les plantes aquatiques s’en trouve alors limité. "
        + "Dans le même propos, l’absorption des rayons lumineux signifie un réchauffement de l’eau. Il faut savoir que les océans "
        + "sont considérés comme le thermostat de la planète. Si le thermostat est plus chaud, la planète est plus chaude aussi. "
        + "La turbidité peut être visible à l'œil nu : on peut voir que l’eau est trouble, sa couleur change. C’est d’ailleurs une "
        + "des caractéristiques utilisées pour la mesurer. Elle s’exprime en UTN (Unité de Turbidité Néphélométrique)."}
    ]

    return(
        <SafeAreaView style={globalStyles.container}>
            <View style={globalStyles.content}>
                <Text style={{ ...globalStyles.title, paddingBottom: 23 }}>Données</Text>
                <FlatList 
                    data={fakeDataForDemo}
                    renderItem={({ item }) => (
                                <TouchableOpacity onPress={() => navigation.navigate('View Data details', item )}>
                                    <CardData data={item}/>
                                </TouchableOpacity>
                            )
                    }
                    keyExtractor={item => item.variable}
                    showsVerticalScrollIndicator={false}
                />
                <Text style={styles.disclaimer}>
                    AVERTISSEMENT: les données présentées ci-dessus ne proviennent pas des relévés de mesures de notre
                    système embarqué, elles ne font qu'illustrer une des fonctionnalités de l'application en cours de 
                    développement.
                </Text>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    disclaimer: {
        textAlign: 'justify',
        marginLeft: 10,
        marginRight: 10,
        marginBottom: 10,
        fontSize: 18,
        fontStyle: 'italic',
        color: 'red',
    }
})