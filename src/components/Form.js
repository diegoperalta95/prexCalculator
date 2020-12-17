import React from 'react';
import { TextInput, StyleSheet, View, LogBox, Text } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import Colors from '../utils/colors';

LogBox.ignoreLogs(['Picker has been extracted']);

export default function Form(props) {
    const { setUsd, setMoney, setCurrency } = props;

    return (
        <View style={styles.viewForm}>
            <View style={styles.viewCurrency}>
                <Text style={styles.letters}> Seleccione la divisa</Text>
                <RNPickerSelect
                    style={pickerSelectStyles}
                    selectedValue={'USD'}
                    placeholder={{
                        label: "Selecciona una moneda", value: null
                    }}
                    onValueChange={(value) => setCurrency(value)}
                    useNativeAndroidPickerStyle={false}
                    items={[
                        { label: 'USD', value: 'USD' },
                        { label: 'UYU', value: 'UYU' },
                    ]}
                    
                />
            </View>
            <View style={styles.viewInputs}>
                <TextInput
                    placeholder="Dolar en Prex" keyboardType="numeric" style={styles.inputs} onChange={e => setUsd(e.nativeEvent.text)} />
                <TextInput
                    placeholder="Cantidad a cargar" keyboardType="numeric" style={styles.inputs} onChange={e => setMoney(e.nativeEvent.text)} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    viewForm: {
        position: "absolute",
        bottom: 0,
        width: "85%",
        paddingHorizontal: 50,
        backgroundColor: Colors.SECONDARY_COLOR,
        borderRadius: 30,
        height: 200,
        justifyContent: "center"
    },
    viewInputs: {
        alignItems: "center"
    },
    inputs: {
        height: 50,
        backgroundColor: "white",
        borderRadius: 5,
        borderColor: Colors.PRIMARY_COLOR,
        borderWidth: 1,
        width: '80%',
        paddingHorizontal: 15,

    },
    letters: {
        color: "white",
    },
    viewCurrency: {
        margin: "auto",
        justifyContent: "center",
        alignItems: "center"
    }
});

const pickerSelectStyles = StyleSheet.create({
    inputAndroid: {
        justifyContent: 'center',
        height: 50,
        backgroundColor: "white",
        borderRadius: 5,
        borderColor: Colors.PRIMARY_COLOR,
        borderWidth: 1,
        width: '100%',
        paddingHorizontal: 15,
        color: "black",
        textAlign: "center",
    },
    inputIOS: {
        justifyContent: 'center',
        height: 50,
        backgroundColor: "white",
        borderRadius: 5,
        borderColor: Colors.PRIMARY_COLOR,
        borderWidth: 1,
        width: '100%',
        paddingHorizontal: 15,
        color: "black",
        textAlign: "center",
    }
})