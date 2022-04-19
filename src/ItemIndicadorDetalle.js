import React, { useState, useEffect } from 'react';

import {Dimensions, View, SafeAreaView, StyleSheet, Text, ActivityIndicator, FlatList, TouchableOpacity, Alert } from 'react-native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import DefaulStyle from './styles/Default'
import { ScrollView } from 'react-native-gesture-handler';

import Api from '../api/List'
import HeaderBack from './components/HeaderBack';
import moment from 'moment';

import {LineChart} from "react-native-chart-kit";

const ItemIndicadorDetalle = ({ navigation, route }) => {
    const screenWidth = Dimensions.get("window").width;

    const [nombre, setNombre] = useState(route.params?.item.nombre);
    const [tipo, setTipo] = useState(route.params?.item.codigo);
    const [valor, setvalor] = useState(route.params?.item.valor);
    const [fecha, setFecha] = useState(route.params?.item.fecha);
    const [UN, setUN] = useState(route.params?.item.unidad_medida);

    const [dataSource, setDataSources] = useState(null)
    const [Load, setLoad] = useState(true)
    const chartConfig = {
        backgroundGradientFrom: "#1E2923",
        backgroundGradientFromOpacity: 0,
        backgroundGradientTo: "#08130D",
        backgroundGradientToOpacity: 0.5,
        color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
        strokeWidth: 2, // optional, default 3
        barPercentage: 0.5,
        useShadowColorFromDataset: false // optional
      };

    return (
        <SafeAreaView style={DefaulStyle.container}>
            <HeaderBack navigation={navigation} nombre={nombre} />

            <View style={DefaulStyle.body}>
                <View style={DefaulStyle.ValorContainer}>
                    <Text style={DefaulStyle.TextValorBig}>
                        $ {valor}
                    </Text>
                </View>

                <View style={DefaulStyle.BoxnewDetalle}>
                    <View style={DefaulStyle.BoxSub}>
                        <View style={{ width: wp('50%') }}>

                            <Text style={DefaulStyle.TextBoxDetalle}>
                                Nombre :
                          </Text>
                        </View>
                        <View style={{ width: wp('50%') }}>

                            <Text style={DefaulStyle.TextBoxDetalle}>
                                {nombre}
                            </Text>
                        </View>
                    </View>

                    <View style={DefaulStyle.BoxSub}>
                        <View style={{ width: wp('50%') }}>

                            <Text style={DefaulStyle.TextBoxDetalle}>
                                Fecha :
                          </Text>
                        </View>
                        <View style={{ width: wp('50%') }}>

                            <Text style={DefaulStyle.TextBoxDetalle}>
                                {moment(new Date(fecha)).format('YYYY-MM-DD')}
                            </Text>
                        </View>
                    </View>

                    <View style={DefaulStyle.BoxSub}>
                        <View style={{ width: wp('50%') }}>
                            <Text style={DefaulStyle.TextBoxDetalle}>
                                Unidad de Medida :
                          </Text>
                        </View>
                        <View style={{ width: wp('50%') }}>
                            <Text style={DefaulStyle.TextBoxDetalle}>
                                {UN}
                            </Text>
                        </View>
                    </View>

                </View>



                <View style={DefaulStyle.BoxnewDetalle}>
                <LineChart
    data={{
      labels: ["January", "February", "March", "April", "May", "June"],
      datasets: [
        {
          data: [
            Math.random() * 100,
            Math.random() * 100,
            Math.random() * 100,
            Math.random() * 100,
            Math.random() * 100,
            Math.random() * 100
          ]
        }
      ]
    }}
    width={wp('88%')} // from react-native
    height={220}
    yAxisLabel="$"
    yAxisSuffix="k"
    yAxisInterval={1} // optional, defaults to 1
    chartConfig={{
      backgroundColor: "#009DE9",
      backgroundGradientFrom: "#23D2B5",
      backgroundGradientTo: "#009DE9",
      decimalPlaces: 2, // optional, defaults to 2dp
      color: (opacity = 0) => `rgba(255, 255, 255)`,
      labelColor: (opacity = 0) => `rgba(255, 255, 255)`,
      style: {
        borderRadius: 10
      },
      propsForDots: {
        r: "6",
        strokeWidth: "2",
        stroke: "#E74A50"
      }
    }}
    bezier
    style={{
      marginVertical: 8,
      borderRadius: 16
    }}
  />
                </View>

            </View>

        </SafeAreaView>
    )
}

export default ItemIndicadorDetalle
