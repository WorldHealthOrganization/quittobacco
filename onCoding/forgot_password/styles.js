/* eslint-disable prettier/prettier */
import {StyleSheet} from 'react-native';
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
} from 'react-native-responsive-dimensions';

export default StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    height: '100%',
    width: '100%',
  },
  view: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  view1: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    marginTop: responsiveHeight(3),
  },
  scrollview:
  {
    height: responsiveHeight(30),
  },
  text: {
    color: '#B6C0CB',
    fontSize: 15,
    textAlign: 'center',
    marginTop: responsiveHeight(1.5),
    marginRight: responsiveWidth(7),
    marginLeft: responsiveWidth(7),
    fontFamily: 'SFCompactDisplay-Regular',
  },
  text2: {
    color: '#B6C0CB',
    fontSize: responsiveFontSize(2),
    textAlign: 'left',
    marginTop: responsiveHeight(3.5),
    marginRight: responsiveWidth(5),
    marginLeft: responsiveWidth(7),
    fontFamily: 'SFCompactDisplay-Regular',
  },
  phonenumber: {
    height: responsiveHeight(5),
    width: responsiveWidth(75),
    marginLeft: responsiveWidth(10),
    marginTop: responsiveHeight(1),
    borderColor: 'gray',
    borderBottomWidth: responsiveWidth(0.25),
  },
  buttonContainer: {
    height: responsiveHeight(6.5),
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: responsiveHeight(13),
    marginLeft: responsiveHeight(7.5),
    width: responsiveWidth(70),
    borderRadius: 30,
  },
  loginButton: {
    backgroundColor: '#0072BB',
  },
  loginText: {
    color: '#FFFFFF',
    fontFamily: 'SFCompactDisplay-Medium',
    fontSize: responsiveFontSize(2),
  },
  newuser: {
    color: '#949494',
    fontFamily: 'SFCompactDisplay-Medium',
    fontSize: responsiveFontSize(2),
  },
  signup: {
    color: '#0072BB',
    fontFamily: 'SFCompactDisplay-Medium',
    fontSize: responsiveFontSize(2),
    marginLeft: responsiveWidth(3),
    
  },
  back_arrow: {
    width:responsiveWidth(3),
    height: responsiveHeight(3),
    marginTop: responsiveHeight(3),
    marginLeft:responsiveWidth(5),
  },
  pwd: {
    fontSize: responsiveFontSize(3.5),
    color: '#FFFFFF',
    marginTop: responsiveHeight(8),
    marginLeft: responsiveWidth(2),
    textAlign:'center',
    fontFamily: 'SFCompactDisplay-Medium',

  },
  textBackground3: {
    flex: 0.25,
    flexDirection: 'row',
    height: responsiveHeight(5),
    width:responsiveWidth(1),
    // alignItems: 'center',
    // justifyContent: 'center',
    // alignContent: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 15,
    marginStart: responsiveWidth(1),
   
    marginEnd: responsiveWidth(5),
  },
  textBackground4: {
    height: responsiveHeight(7),
    // width: responsiveWidth(100),
    marginTop: 0,
    marginLeft: responsiveWidth(0),
    // paddingStart: 20,
    // marginStart: responsiveWidth(0),
    // marginEnd: 20,
    flex: 1,
    backgroundColor: '#FFFFFF',
    fontFamily: 'SFCompactDisplay-Medium',
    fontSize: responsiveFontSize(2),
    borderRadius: 15,
  },
  view4: {
    borderBottomWidth: responsiveWidth(0.45),
    marginTop: responsiveHeight(0),
    borderBottomColor: '#B6C0CB',
    width: '88%',
    marginLeft:responsiveWidth(7),
  },
  arrow: {
    width: responsiveWidth(2),
    height: responsiveHeight(4),
    marginLeft: responsiveWidth(3),
    justifyContent:'center',alignSelf:'center',
    resizeMode: 'contain',
  },
  box2: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    justifyContent: 'center',
    alignContent: 'center',
    alignSelf: 'center',
  },
});
