import React, { useState, useEffect } from 'react';

import { View, SafeAreaView, StyleSheet, Text,RefreshControl, ActivityIndicator, FlatList, TouchableOpacity, Alert } from 'react-native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import DefaulStyle from '../src/styles/Default'
import { ScrollView } from 'react-native-gesture-handler';

import Api from '../api/List'
import HeaderBack from './components/HeaderBack';
import ListItemHistorial from './components/ListItemHistorial'

export default function ListaHistorialDetalles({ navigation, route }) {

    const [dataSource, setDataSources] = useState(null)
    const [itemsCentrales, setitemsCentrales] = useState([])
    const [Load, setLoad] = useState(true)
    const [nombre, setNombre] = useState(route.params?.item.nombre);
    const [tipo, setTipo] = useState(route.params?.item.codigo);

    useEffect(() => {
        console.log(tipo)
        if (!dataSource) {
            LoadData(tipo)
        }
    }, [dataSource])

    const LoadData = async (tipo) => {
        console.log('mi tipo es:',tipo)
        const response = await Api.get(`/${tipo}`).then(async (response) => {
            console.log('mis item por fecha son:',response.data)
            await setDataSources(response.data)
            await setitemsCentrales(response.data.serie)
        }).catch(err => console.log(err))

        await setLoad(false)

        console.log('el array q necesito es:', itemsCentrales)

    }
    const renderItem = ({item}) => {
        return(

        <ListItemHistorial item = {item} navigation={navigation} route={route}/>
       
        )
    }

    return (
        <SafeAreaView style={DefaulStyle.container}>
            <HeaderBack navigation={navigation} nombre={nombre} route={route} />

                    
            {(dataSource) ?


                <>
                    {(itemsCentrales.length > 0) ?

                       
                        <FlatList
                        data={itemsCentrales}
                        renderItem={renderItem}
                        keyExtractor={(item) => item.id}
                        ItemSeparatorComponent={(props) => {
                           // here you can access the trailingItem with props.trailingItem
                          return ( <View style={DefaulStyle.ItemSeparator}></View>
                            );
                        }}
                                refreshControl={
                                    <RefreshControl
                                      refreshing={Load}
                                      onRefresh={() => ''}
                                      tintColor="red"
                                    />
                                  }
                        
                        />
                        :



                        <View style={{
                            alignItems:'center' ,
                            justifyContent:'center',
                            height:hp('15%')
                          }}>
                              <Text 
                              style={{fontSize:wp('3.6%')}}>
                                Sin Data disponible...
                              </Text>
                          </View>
                    }

                </>

                :
                <ActivityIndicator size={'large'} color="#23D2B5" />

            }


        </SafeAreaView>
    )
}
