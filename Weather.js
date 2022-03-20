import React from 'react'
import propTypes from 'prop-types'
import { StyleSheet, Text, View } from 'react-native';



const Weather = ({temp}) => {

    return (
        <View style={styles.container}>
            <Text>{temp}</Text>
        </View>
    )
}

Weather.prototype = {
    temp: propTypes.number.isRequired,

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default Weather;

