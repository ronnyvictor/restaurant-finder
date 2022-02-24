import React, { useContext } from 'react'
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { RestaurantContext } from '../../App'
import styles from '../../styles'

export default function RestaurantCard({ restaurant }) {
	const { setSelectedRestaurant } = useContext(RestaurantContext)
	const navigation = useNavigation()
	const handlePress = () => {
    setSelectedRestaurant(restaurant)
		navigation.navigate('Details')
	}
	return (
		<TouchableOpacity onPress={handlePress}>
			<View style={styles.card}>
				<Image source={{ uri: restaurant.photoUrl }} style={styles.cardImage} />
				<Text style={styles.cardTitle}>{restaurant.name}</Text>
			</View>
		</TouchableOpacity>
	)
}