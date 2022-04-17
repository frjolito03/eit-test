import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../src/Home';
import ListaHistorialDestalleScrenn from '../src/ListaHistorialDetalles'
import HeaderBackScreen from '../src/components/HeaderBack'
import ItemIndicadorDetalleScreen from '../src/ItemIndicadorDetalle'
import ListItemScreen from '../src/components/ListItem'
const Stack = createNativeStackNavigator();



const Home = ({ navigation,route })=> {

  return (
    <>
    <HomeScreen navigation={navigation} route={route}/>
    </>
  );
}

const ListaHistorialDetalle = ({ navigation,route })=> {

  return (
    <>
    <ListaHistorialDestalleScrenn navigation={navigation} route={route}/>
    </>
  );
}
const ItemIndicadorDetalle = ({ navigation,route })=> {

  return (
    <>
    <ItemIndicadorDetalleScreen navigation={navigation} route={route}/>
    </>
  );
}

const headerBack = ({ navigation,route })=> {

  return (
    <>
    <HeaderBackScreen navigation={navigation} route={route}/>
    </>
  );
}


const ListItem = ({ navigation,route })=> {

  return (
    <>
    <ListItemScreen navigation={navigation} route={route}/>
    </>
  );
}


const MainStack = () => {
    return (
        <NavigationContainer>
        <Stack.Navigator 
         screenOptions={{
          headerShown: false
          }}
          initialRouteName="Indicadores"
           >
          <Stack.Screen name="Indicadores" component={Home} />
          <Stack.Screen name="ListaDetallesHistorial" component={ListaHistorialDetalle} />
          <Stack.Screen name="headerBack" component={headerBack} />
          <Stack.Screen name="ItemIndicadorDetalle" component={ItemIndicadorDetalle} />
          <Stack.Screen name="ListItem" component={ListItem} />

        </Stack.Navigator>
      </NavigationContainer>
    )
}

export default MainStack



