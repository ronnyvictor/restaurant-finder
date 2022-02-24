import React, { useEffect, useState } from 'react'
import { View, Text } from 'react-native'
import { Input, Button } from 'react-native-elements'
import { useNavigation } from '@react-navigation/native'

export default function AddNewRestaurantScreen() {
	const [restaurantName, setRestaurantName] = useState()
	const [restaurantAddress, setRestaurantAddress] = useState()
	const [photo, setPhoto] = useState()
	const [rating, setRating] = useState()
	const [btnDisabled, setBtnDisabled] = useState(true)

	const newRestaurant = {
		address: restaurantAddress,
		name: restaurantName,
		numRatings: rating,
		photoUrl: photo,
		rating: 3.75,
	}

	useEffect(() => {
		if (
			newRestaurant.address &&
			newRestaurant.name &&
			newRestaurant.numRatings != undefined
		) {
			setBtnDisabled(false)
		}
	}, [])

	const sendNewRestaurantInfo = () => {
			fetch('https://bocacode-intranet-api.web.app/restaurants', {
				method: 'POST',
				headers: {
					Accept: 'application/json',
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(newRestaurant),
			})
				.then(alert('New Restaurant Added'))
				.then(() => navigation.navigate('Home'))
				.catch((err) => console.error(err))
	}

	// console.log(newRestaurant)
	const navigation = useNavigation()
	return (
		<>
			<View>
				<Text>This is sad</Text>
				<Input
					placeholder='Restaurant Name'
					spellCheck
					onChangeText={(text) => setRestaurantName(text)}
				/>
				<Input
					placeholder='Address'
					onChangeText={(text) => setRestaurantAddress(text)}
				/>
				<Input
					placeholder='Photo'
					keyboardType='url'
					onChangeText={(text) => setPhoto(text)}
				/>
				<Input
					placeholder='Rating'
					keyboardType='numeric'
					maxLength={1}
					onChangeText={(text) => setRating(text)}
				/>
				<Button
					title='Create New Restaurant'
					onPress={sendNewRestaurantInfo}
					disabled={btnDisabled}
				/>
			</View>
		</>
	)
}
