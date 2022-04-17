import React, { useEffect, useState } from 'react';
import { View, Text, SafeAreaView, TouchableOpacity, Button } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import DefaulStyle from '../styles/Default'
import Icon from 'react-native-vector-icons/FontAwesome';
import { DrawerActions } from '@react-navigation/native';


const Header = (props) => {
    return (
        <View style={DefaulStyle.header}>

            <TouchableOpacity onPress={() =>
            //   props.navigation.dispatch(DrawerActions.openDrawer())
            { }
            }

                style={{ width: wp('15%'), alignItems: 'center' }} >
                <Icon
                    name='bars'
                    type='font-awesome'
                    color='#517fa4'
                    style={{ fontSize: wp('7%') }}
                />

            </TouchableOpacity>


            <View style={DefaulStyle.HeadeTextContainer}>
                <Text style={[DefaulStyle.headerText]}>
                    Indicadores
            </Text>
            </View>


            <View style={DefaulStyle.headerButtonsContainer}>
                <TouchableOpacity
                onPress={props.update}
                >

                    <Icon
                        name='refresh'
                        type='font-awesome'
                        color='#009DE9'
                        style={{ fontSize: wp('7%') }}
                    />
                </TouchableOpacity>

            </View>

        </View>

    )
}

export default Header
