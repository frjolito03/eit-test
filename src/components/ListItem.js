import React, { useState, useEffect } from 'react';
import { Alert, StyleSheet, View, Text, Dimensions, SafeAreaView, TouchableOpacity } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import DefaulStyle from '../styles/Default'
import Icon from 'react-native-vector-icons/FontAwesome';

export default function ListItem({ item , navigation ,route}) {

console.log(navigation)

  return (
    <>
      <View style={{
        width: wp('80%'),
        flexDirection: 'row',
        alignItems: 'center',
        alignContent: 'center',
      }}
        key={item.codigo}
      >

        <TouchableOpacity style={{
          justifyContent: 'center',
          alignItems: 'center',
          width: wp('73%'),
          height: hp('7.6%'),
        }}
        onPress={() => {
          /* 1. Navigate to the Details route with params */
          navigation.navigate('ListaDetallesHistorial', {
            item:item,
          });
        }}
        >
          <View style={{
            flexDirection: 'row',
            justifyContent: 'space-evenly',
            alignItems: 'center',
            width: wp('60%'),
          }}
          >
            <View style={{ width: wp('40%') }}>
              <Text style={{ color: 'black', fontWeight: '600', fontSize: hp('2.3%') }}>
                {item.nombre.substring(0, 16)}
              </Text>
            </View>

            <View style={{ width: wp('30%'), alignItems: 'flex-end' }}>

              <Text style={{ color: 'blue', fontWeight: '400', fontSize: hp('1.8%') }}>
              </Text>
            </View>



          </View>


          <View style={{ width: wp('66%'), alignItems: 'flex-start', justifyContent: 'center' }}>
            <Text style={{ color: 'blue', fontWeight: '600', fontSize: hp('1.7%') }}>
              {item.unidad_medida}
            </Text>
          </View>

         
        </TouchableOpacity>

        <TouchableOpacity style={{
           justifyContent: 'space-between',
            width: wp('12%'),
             alignItems: 'center',
             flexDirection:'row',
              }}
              onPress={() => {
                /* 1. Navigate to the Details route with params */
                navigation.navigate('ItemIndicadorDetalle', {
                  item:item,
                });
              }}
              >
            <Icon
              name='info-circle'
              type='font-awesome'
              color='#517fa4'
            style={{fontSize:30}}
            />

            <Icon
              name='chevron-right'
              type='font-awesome'
              color='#517fa4'
            style={{fontSize:15}}
            />
            
          </TouchableOpacity>

      </View>


    </>
  )
}
