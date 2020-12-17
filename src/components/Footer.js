import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import colors from '../utils/colors'

export default function Footer(props) {
    const {calculate} = props;

    return (
        <View style={styles.viewFooter}>
            <TouchableOpacity style={styles.touchableButton} onPress={calculate}>
                <Text style={styles.textButton}> Calcular </Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    viewFooter: {
        position: "absolute",
        bottom: 0,
        width: "100%",
        backgroundColor: colors.PRIMARY_COLOR,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        height: 50,
        alignItems: "center",
        justifyContent: "center",
    },
    textButton: {
        color: "white",
        fontWeight: "bold",
        fontSize: 20
    },
    touchableButton: {
        backgroundColor: colors.SECONDARY_COLOR,
        padding: 6,
        width: "50%",
        alignItems: "center",
        borderRadius: 60
    }

})
