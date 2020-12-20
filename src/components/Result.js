import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export default function Result(props) {
    const { money, currency, total, usd, errorMsg, percen } = props;

    return (
        <View style={styles.resultContent}>
            {total && (
                <View style={styles.resultBox}>
                    <Text style={styles.title}>Desglose:</Text>
                    <FormatData title={"Total a cargar: "} value={money + ' ' + currency} />
                    <FormatData title={"Total que prex cargara: "} value={total.total + ' ' + currency} />
                    <Text style={[styles.littleText,styles.centerText]}>Cartilla de uso (2.5% + 0.5USD) + IVA: {percen}</Text>
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
    },
    littleText: {
        fontSize: 12,
    },
    centerText: {
        textAlign: "center",
    }
})
