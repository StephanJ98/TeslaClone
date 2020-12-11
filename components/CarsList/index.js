import React from 'react'
import { View, Text, FlatList, Dimensions } from 'react-native'
import cars from './cars'
import CarItem from '../Caritem'
import styles from '../Caritem/styles'

export default function CarsList() {
    return (
        <View style={styles.container}>
            <FlatList
                data={cars}
                renderItem={({ item }) => <CarItem car={item} />}
                keyExtractor={(item) => item.name}
                showsVerticalScrollIndicator={false}
                snapToAlignment={'start'}
                decelerationRate={'fast'}
                snapToInterval={Dimensions.get('window').height}
            />
        </View>
    )
}
