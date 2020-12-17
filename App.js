import React, { useState, useEffect } from 'react';
import { SafeAreaView, StyleSheet, View, Text, StatusBar, Button } from 'react-native';
import Form from './src/components/Form';
import Footer from './src/components/Footer';
import Result from './src/components/Result';
import Colors from './src/utils/colors';

export default function App() {
  const [usd, setUsd] = useState(null);
  const [money, setMoney] = useState(null);
  const [currency, setCurrency] = useState(null);
  const [total, setTotal] = useState(null);
  const [errorMsg, setErrorMsg] = useState('');

  useEffect(() => {
    if(usd && money && currency ) calculate();
    else reset();
    
  }, [usd,money,currency]);

  const calculate = () => {
    reset();
    if (!currency) {
      setErrorMsg("Seleccione un tipo de moneda");
    } else if (!usd) {
      setErrorMsg("Ingrese el dolar como está en prex");
    } else if (!money) {
      setErrorMsg("Ingrese la cantidad de dinero a cargar en pesos");
    } else {
      const porcen = parseFloat((2.5 * money) / 100);
      const husf = parseFloat(usd / 2);
      const adding = parseFloat(husf + porcen);
      const iva = parseFloat((21 * adding) / 100);
      const total = parseFloat(money) + parseFloat(iva) + parseFloat(adding);

      setTotal({
        total: total.toFixed(3).replace(".", ","),
      })

    }
  }

  const reset = () => {
    setErrorMsg("");
    setTotal(null);
  }

  return (
    <>
      <StatusBar barStyle="light-content" />
      <SafeAreaView style={styles.safeAreaView}>
        <View style={styles.background} />
        <Text style={styles.title}>Calculadora para PREX</Text>
        <Form setUsd={setUsd} setMoney={setMoney} setCurrency={setCurrency} />
      </SafeAreaView>

      <Result errorMsg={errorMsg} money={money} usd={usd} currency={currency} total={total}/>

      <Footer calculate={calculate} />

    </>
  );
}

const styles = StyleSheet.create({
  safeAreaView: {
    height: 260,
    alignItems: "center",
  },
  background: {
    backgroundColor: Colors.PRIMARY_COLOR,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    height: 200,
    width: "100%",
    position: "absolute",
    zIndex: -1,
  },
  title: {
    fontSize: 21,
    color: "white",
    marginTop: 9,
  }
});