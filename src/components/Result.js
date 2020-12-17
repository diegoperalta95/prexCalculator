import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export default function Result(props) {
    const { money, currency, total, usd, errorMsg } = props;

    return (
        <View style={styles.resultContent}>
            {total && (
                <View style={styles.resultBox}>
                    <Text style={styles.title}>Desglose:</Text>
                    <FormatData title={"Total a cargar: "} value={money + ' ' + currency} />
                    <FormatData title={"Total: "} value={total.total + ' ' + currency} />
                </View>
            )}
            <View>
                <Text style={styles.error}>{errorMsg}</Text>
            </View>
        </View>
    )
};

function FormatData(props) {
    const { title, value } = props;

    return (
        <View style={styles.value}>
            <Text>{title}</Text>
            <Text>{value}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    resultContent: {
        marginTop: 0,
    },
    error: {
        textAlign: "center",
        color: "red",
        fontSize: 20,
        fontWeight: "bold",
    },
    resultBox: {
        padding: 80,
    },
    title: {
        fontSize: 22,
        fontWeight: "bold",
        marginBottom: 20,
        textAlign: "center"
    },
    value: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: 10,
    }
})
