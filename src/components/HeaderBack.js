import React, { useState, useEffect } from 'react';

import { Alert, StyleSheet, View, Text, Dimensions, SafeAreaView, TouchableOpacity } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import DefaulStyle from '../styles/Default'
import Icon from 'react-native-vector-icons/FontAwesome';

export default function HeaderBack({navigation,route,item,nombre}) {

    return (
        <View style={DefaulStyle.header}>
        <TouchableOpacity style={{marginLeft:10,flexDirection:'row',alignItems:'center',width:wp('20%')}} transparent onPress={() =>navigation.goBack() }>
        {/* <Ionicons name="md-arrow-back" size={hp('3.5%')} color="black" />   */}
        <Icon
              name='chevron-left'
              type='font-awesome'
              color='#009DE9'
            style={{fontSize:15}}
            />
            <Text style={DefaulStyle.TextBackHeader}>Indicares</Text>
         </TouchableOpacity>
         <View style={{flexWrap:'nowrap',width:wp('65%'),alignItems:'flex-start'}}>
             <Text style={{
                 fontSize:wp('4.2%'),
                 color:'#424242',
                 fontWeight:'700',
                 fontStyle:'normal',
                 flexWrap:'nowrap',
                textAlign:'center'
             }}
             >
              { nombre}
             </Text>
         </View>
        </View>
    )
}
