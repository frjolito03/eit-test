import React, { useState, useEffect } from 'react';
import { View, SafeAreaView, StyleSheet, Text,RefreshControl, ActivityIndicator, FlatList, TouchableOpacity, Alert } from 'react-native'
import Api from '../api/List'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

import ListItem from '../src/components/ListItem'
import DefaulStyle from '../src/styles/Default'
import { ScrollView } from 'react-native-gesture-handler';
import Header from './components/Header'


export default function Home({ navigation, route }) {
    const [dataSource, setDataSources] = useState(null)
    const [itemsCentrales, setitemsCentrales] = useState([])

    const [Load, setLoad] = useState(true)


    useEffect(() => {
        if(!dataSource){
        LoadData()
        }
    }, [dataSource])




    const LoadData = async () => {
        let array = []
        const response = await Api.get().then(async (response) => {
            await setDataSources(response.data)
            await setitemsCentrales([
                response.data.bitcoin,
                response.data.dolar,
                response.data.dolar_intercambio,
                response.data.imacec,
                response.data.ipc,
                response.data.ivp,
                response.data.libra_cobre,
                response.data.tasa_desempleo,
                response.data.tpm,
                response.data.uf,
                response.data.utm,
                response.data.libra_cobre,
            ]
            )
        }).catch(err => console.log(err))

        await setLoad(false)

        console.log('el array q necesito es:', itemsCentrales)

    }

    const renderItem = ({item}) => {
        return(

        <ListItem item = {item} navigation={navigation}/>
       
        )
    }

    return (
        <SafeAreaView style={DefaulStyle.container}>

            <Header navigation={navigation} update={LoadData} />

            <View style={DefaulStyle.body}>

                <View style={[DefaulStyle.Boxnew, { marginTop: 10 }]}>
                    <View style={DefaulStyle.BoxSub}>

                        <View style={{ width: wp('20%') }}>
                            <Text style={DefaulStyle.TextHeaderBox}>
                                AUTOR :
                          </Text>

                        </View>
                        <View style={{ width: wp('30%'), alignItems: 'flex-end' }}>
                            <Text style={DefaulStyle.TextHeaderBox}>
                                {dataSource ? dataSource.autor : ''}
                            </Text>

                        </View>

                    </View>
                    <View style={DefaulStyle.ItemSeparator}></View>

                    <View style={DefaulStyle.BoxSub}>

                        <Text style={DefaulStyle.TextHeaderBox}>
                            Indicadores ({itemsCentrales ? itemsCentrales.length : ''})
                        </Text>

                        <Text style={{
                            color: '#009DE9',
                            fontSize: wp('3.5%'),
                            fontWeight: '400',

                        }}
                        >
                          Versìon  {dataSource ? dataSource.version : ''}
                        </Text>

                    </View>
                    <View style={DefaulStyle.ItemSeparator}></View>

                    {(dataSource) ?

                                <FlatList
                                data={itemsCentrales}
                                renderItem={renderItem}
                                keyExtractor={(item) => item.id}
                                ItemSeparatorComponent={(props) => {
                                   // here you can access the trailingItem with props.trailingItem
                                  return ( <View style={DefaulStyle.ItemSeparator}></View>
                                    );
                                }}
                                onEndReachedThreshold={0.8}
                                refreshControl={
                                    <RefreshControl
                                      refreshing={Load}
                                      onRefresh={() => LoadData()}
                                      tintColor="red"
                                    />
                                  }
                                />


                  
                        :
                        <ActivityIndicator size={'large'} color="#23D2B5" />

                    }
                </View>
            </View>

        </SafeAreaView>
    )
}

const styles = StyleSheet.create({

})