/* eslint-disable prettier/prettier */
import {StyleSheet} from 'react-native';
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
} from 'react-native-responsive-dimensions';
import { blockMargin } from '../ui/common/responsive';
export default StyleSheet.create({
    container: {
        backgroundColor: '#FFFFFF',
        alignItems: 'center',
        height: '100%',
        width: '100%',
      },
      view: {
        width: '100%',
        height:'100%',
        backgroundColor: 'white',
      },
      view1: {
        flexDirection:'column',
        backgroundColor: 'white',
      
        width: '90%',
      },
      view2:
      {
        //  flex:0.7,
         backgroundColor: '#0072BB',
         width: responsiveWidth(100),
      },
      view3:
      {
         flex:0.7,
         backgroundColor: '#0072BB',
         marginTop: responsiveHeight(35),
         height: '100%',
         width: responsiveWidth(80),

        //  marginLeft: responsiveWidth(30),
      },
      scrollview:
      {
        backgroundColor: '#FFFFFF',
      },
      text_prg:{
        color: '#FFFFFF',
        fontFamily: 'SFCompactDisplay-Medium',
        fontSize: responsiveFontSize(2.5),
        marginTop: responsiveHeight(1),
        marginLeft: responsiveWidth(30),
      },
      share_img2: {
        width: 25,
        height: 25,
        tintColor:'#fff',
        marginLeft: responsiveWidth(28),
        marginTop: responsiveHeight(1),
        resizeMode:'contain'
    },
    arrow:{
      width: responsiveWidth(3),
      height: responsiveHeight(4),
      marginLeft: responsiveWidth(4),
      marginTop: responsiveHeight(1),
      resizeMode:'contain'
    },
    fab:{
    height: responsiveHeight(8),
    width: responsiveWidth(16),
    borderRadius:100 / 2,
    borderStyle:'dotted',
    position: 'absolute',
    bottom: responsiveHeight(10),
    // right: responsiveWidth(5),
    marginLeft: responsiveWidth(40),
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:'#0072BB',
    borderWidth: 2,
    borderColor: '#CBE2F1',
  },
  text_fab:{
    fontSize:responsiveFontSize(4),
    color:'white',
    marginTop: responsiveHeight(0),
  },
  square:{
    height: responsiveHeight(25),
    width: responsiveWidth(76),
    borderRadius:100/2,
    borderStyle:'dashed',
    position: 'absolute',
    bottom: responsiveHeight(6),
    // right: responsiveWidth(5),
    alignSelf:'center',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:'#0072BB',
    borderWidth: 2,
    borderColor: '#CBE2F1',
  },
  square2:{
    height: responsiveHeight(25),
    width: responsiveWidth(76),
    borderRadius:100/2,
    borderStyle:'dashed',
    position: 'absolute',
    // bottom: responsiveHeight(0),
    marginTop: responsiveHeight(2),
    // right: responsiveWidth(5),
    alignSelf:'center',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:'#0072BB',
    borderWidth: 2,
    borderColor: '#CBE2F1',
  },
  text: {
    marginTop: responsiveHeight(10),
    alignSelf: 'center',
    textAlign: 'center',
    color: '#CBE2F1',
    fontFamily: 'SFCompactDisplay-Medium',
    fontSize: responsiveFontSize(2.5),
    width: responsiveWidth(100),
  },
  text2:{
    color: '#202020',
    fontSize: 16,
    marginTop: blockMargin * 2,
    fontFamily: 'SFCompactDisplay-Regular',
   
  
},
buttonContainer: {
  height: responsiveHeight(6.5),
  justifyContent: 'center',
  alignItems: 'center',
  marginTop: responsiveHeight(5),
  width: responsiveWidth(70),
  borderRadius: 30,
},
confirmbutton: {
  backgroundColor: '#0072BB',
},
confirmtext: {
  color: '#FFFFFF',
  fontFamily: 'SFCompactDisplay-Medium',
  fontSize: responsiveFontSize(2),
},
img: {
  height: responsiveHeight(25),
  width: responsiveWidth(76),
  justifyContent: 'center',
  alignItems: 'center',
  position: 'absolute',
  borderRadius:100/2,
},
    });
