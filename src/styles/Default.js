import {StyleSheet,Platform, StatusBar} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';


export default StyleSheet.create({

    container: {
        alignItems: 'center',
        flex: 1,
        backgroundColor: '#F2F6F9'
    },
    Boxnew:{
        borderColor:'#23D2B5',
        borderWidth:0.5,
        backgroundColor:'#FFFFFF',
        width:wp('90%'),
        alignItems:'center',
        borderRadius:4,
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 1,
        },
        shadowOpacity: 0.08,
        shadowRadius: 6.00,
        
        elevation: 10,
        marginBottom:hp('3%'),
        height:hp('80%')
      
      },

      BoxItem:{

        width: wp('90%'),
        flexDirection: 'row',
        alignItems: 'center',
        alignContent: 'center',
        
     
        backgroundColor:'#FFFFFF',
        width:wp('90%'),
        borderRadius:4,
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 1,
        },
        shadowOpacity: 0.08,
        shadowRadius: 6.00,
      
        elevation: 10,

      
      },

      BoxnewDetalle:{
        borderColor:'#23D2B5',
        borderWidth:0.5,
        backgroundColor:'#FFFFFF',
        width:wp('90%'),
        alignItems:'center',
        borderRadius:4,
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 1,
        },
        shadowOpacity: 0.08,
        shadowRadius: 6.00,
        
        elevation: 10,
        marginBottom:hp('3%'),
      
      },
      BoxSub:{
        width:wp('90%'),
        flexDirection:'row',
        justifyContent:'space-around',
        height:hp('6.5%'),
        alignItems:'center',
        
      },
      fadingContainer: {
     
        backgroundColor: 'white',
      },
      ItemSeparator: {
        width: wp('90%'),
        height: 0.8,
        backgroundColor: '#EEEEEE'
    },

    body:{
      flex:1,
      width:wp('100%'),
      alignItems:'center',
      marginTop:hp('2%')
    },

    TextHeaderBox:{
      color:'#009DE9',
      fontSize:wp('3.5%'),
      fontWeight:'600',
      textAlign:'center',
      alignItems:'center'
    
    },
    TextBoxDetalle:{
      color:'black',
      fontSize:wp('3.5%'),
      fontWeight:'600',
      textAlign:'center',
      alignItems:'center'
    
    },

    ButtonSimbologia:{
      height:hp('3.5%'),
      width:wp('20%'),
      borderColor:'#009DE9',
      borderWidth:1,
      borderRadius:4,
      alignItems:'center',
      justifyContent:'center'
      },
      TextButtonSimbologia:{
        color:'#009DE9',
        fontSize:wp('3%'),
      fontWeight:'400',
    
  
    },

    TextItem:{
      color:'#424242',
      fontWeight:'400',
      fontSize:hp('2%'),
      fontStyle:'normal'
    },
    header:{
      backgroundColor:'#FFFFFF',
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 12,
      },
      shadowOpacity: 0.18,
      shadowRadius: 16.00,
      
      elevation: 24,
      marginBottom:5,
      height:hp('9%'),
      justifyContent:'space-between',
      flexDirection:'row',
      borderBottomColor:'transparent',
      width:wp('100%'),
      alignItems:'center'
    },
    TextBackHeader:{
      color:'#009DE9',
      fontSize:wp('3.5%'),
      fontStyle:'normal',
      lineHeight:wp('5%'),
      fontWeight:'700',
      flexWrap:'nowrap',
      marginLeft:6
    },
    HeadeTextContainer:{
      width:wp('50%'),
     
    },
    headerText:{
      color:'#424242',
      fontStyle:'normal',
      fontWeight:'500',
      fontSize:wp('4.5%')
    },

    headerButtonsContainer:{
      width:wp('20%'),
      flexDirection:'row',
      alignItems:'center',
      justifyContent:'space-around'
    },
    ValorContainer:{
      width:wp('90%'),
      alignItems:'center',
      justifyContent:'center',
      marginBottom:hp('2%')
    },
    TextValorBig:{
      fontSize:hp('7.5%'),
      color:'#009DE9',
      fontWeight:'600',
    },
    FormContainer:{
      flexDirection:'row',
      justifyContent:'space-around',
      alignItems:'center'
    },
  
    chart: {
      marginBottom: 30,
      padding: 10,
      paddingTop: 20,
      borderRadius: 20,
      width: 375,
      backgroundColor: 'lightblue'
    }
})