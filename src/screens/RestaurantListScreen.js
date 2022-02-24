import React, { useEffect, useState } from 'react'
import { Text, View, ScrollView } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import RestaurantCard from '../components/RestaurantCard'

import { Button } from 'react-native-elements'

export default function RestaurantList() {
	const [restaurants, setRestaurants] = useState()
	useEffect(() => {
		// fetch data from API
		fetch('https://bocacode-intranet-api.web.app/restaurants')
			.then((response) => response.json())
			.then((data) => setRestaurants(data))
			.catch(alert)
	}, [])

	const navigation = useNavigation()

	const goToNewRestaurant = () => {
		navigation.navigate('Add New Restaurant')
	}
	return (
		<View>
			<Button
				title='Add New Restaurant'
				onPress={goToNewRestaurant}
				buttonStyle={{
					backgroundColor: '#666',

				}}
				containerStyle={{
					width: 200,
					alignSelf: 'center',
					marginHorizontal: '50%',
					marginVertical: 10,
					borderRadius: '100%'
				}}
			/>
			{!restaurants ? (
				<Text>Loading...</Text>
			) : (
				<ScrollView>
					{restaurants.map((restaurant) => {
						return (
							<RestaurantCard restaurant={restaurant} key={restaurant.id} />
						)
					})}
				</ScrollView>
			)}
		</View>
	)
}
