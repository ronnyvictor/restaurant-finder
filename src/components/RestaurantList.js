import { React, useEffect, useState } from 'react'
import { Text, View, ScrollView } from 'react-native'
import RestaurantCard from './RestaurantCard'

function RestaurantList() {
	const [restaurants, setRestaurants] = useState()
	useEffect(() => {
		// fetch data from API
		fetch('https://bocacode-intranet-api.web.app/restaurants')
			.then((response) => response.json())
			.then((data) => setRestaurants(data))
			.catch(alert)
	}, [])
	return (
		<View>
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

export default RestaurantList
