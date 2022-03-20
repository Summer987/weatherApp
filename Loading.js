import React from 'react'

import { StyleSheet, Text, View } from 'react-native';

const Loading = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Получение погоды...</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-end',
        paddingHorizontal: 30,
        paddingVertical: 100,
        backgroundColor: '#FDF6AA'
    },
    text: {
        color: '#2C2C2C',
        fontSize: 30
    }
}
)

export default Loading;