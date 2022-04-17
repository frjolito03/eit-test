import React, { useState, useEffect } from 'react';
import { Alert, StyleSheet, View, Text, Dimensions, SafeAreaView, TouchableOpacity } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import DefaulStyle from '../styles/Default'
import Icon from 'react-native-vector-icons/FontAwesome';
import moment from 'moment';

export default function ListItem({ item ,navigation,index}) {



  useEffect(() => {

    console.log('mi item essadsad :', item)




  }, [])


  





  return (
    <>
      <View style={DefaulStyle.BoxItem}
        key={index}
      >

        <TouchableOpacity style={{
          justifyContent: 'center',
          alignItems: 'center',
          width: wp('73%'),
          height: hp('7.6%'),
        }}
    
        >
          <View style={{
            flexDirection: 'row',
            justifyContent: 'space-evenly',
            alignItems: 'center',
            width: wp('60%'),
          }}
          >
            <View style={{ width: wp('60%'),alignItems:'center' }}>
              <Text style={{ color: 'blue', fontWeight: '600', fontSize: hp('2.3%') }}>
                {/* {item.fecha} */}
                {moment(new Date(item.fecha)).format('YYYY-MM-DD')}
              </Text>
            </View>

            <View style={{ width: wp('40%'), alignItems: 'flex-end' }}>

              <Text style={{ color: 'black', fontWeight: '400', fontSize: hp('2.1%') }}>
                  $ {item.valor}

              </Text>
            </View>



          </View>



         
        </TouchableOpacity>


      </View>


    </>
  )
}
