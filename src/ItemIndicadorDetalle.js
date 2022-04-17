import React, { useState, useEffect } from 'react';

import { View, SafeAreaView, StyleSheet, Text, ActivityIndicator, FlatList, TouchableOpacity, Alert } from 'react-native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import DefaulStyle from './styles/Default'
import { ScrollView } from 'react-native-gesture-handler';

import Api from '../api/List'
import HeaderBack from './components/HeaderBack';
import moment from 'moment';
import LineGraph from '@chartiful/react-native-line-graph';

const ItemIndicadorDetalle = ({ navigation, route }) => {

    const [nombre, setNombre] = useState(route.params?.item.nombre);
    const [tipo, setTipo] = useState(route.params?.item.codigo);
    const [valor, setvalor] = useState(route.params?.item.valor);
    const [fecha, setFecha] = useState(route.params?.item.fecha);
    const [UN, setUN] = useState(route.params?.item.unidad_medida);

    const [dataSource, setDataSources] = useState(null)
    const [Load, setLoad] = useState(true)
    const config = {
        startAtZero: false,
        hasXAxisBackgroundLines: false,
        xAxisLabelStyle: {
            prefix: '$',
            offset: 0
        }
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
                    <LineGraph
                        data={[10, 15, 7, 20, 14, 12, 10, 20]}
                        width={375}
                        height={300}
                        isBezier
                        hasShadow
                        baseConfig={config}
                        style={DefaulStyle.chart}
                    />
                </View>

            </View>

        </SafeAreaView>
    )
}

export default ItemIndicadorDetalle
