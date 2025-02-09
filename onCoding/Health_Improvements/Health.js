/* eslint-disable prettier/prettier */
import React, {Component} from 'react';
import styles from '../Health_Improvements/styles';
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
} from 'react-native-responsive-dimensions';
import ImgToBase64 from 'react-native-image-base64';
import { AnimatedCircularProgress } from 'react-native-circular-progress';
import ProgressCircle from 'react-native-progress-circle'


import {
  View,
  Image,
  Text,
  TouchableOpacity,
  KeyboardAvoidingView,
  ScrollView,
  TextInput,
  Platform,
  Share, ActivityIndicator, SafeAreaView
} from 'react-native';

import axios from 'react-native-axios';
import ApiName from '../utils/Constants';
import AsyncStorage from '@react-native-async-storage/async-storage';;
import { Header } from 'react-navigation-stack';
import Toast from 'react-native-simple-toast';

import { scalable, deviceWidth, deviceHeight, itemRadius, itemRadiusHalf, blockMarginHalf, blockMargin, blockPadding, blockPaddingHalf } from '../ui/common/responsive'


export default class Health extends Component {


    constructor(props) {
        super(props);
        this.state = {
            isHidden: false,
          //userInfo
           user_id:'',
           name :'',
           mobile_no:'',
           email_id :'',
           profile_image:'',
           fcm:'',
           token:'',
             //healthImprovementChart
      OxygenLevels: 0,
      Lungs: 0,
      CarbonMonoxideLevel: 0,
         
    //ShareMyhealthImproveLink
    uniqueShareMyhealthImproveLink:'https://tobacco.page.link/Sohr',
        };
      }

      
   
      componentWillUnmount() {
        // Remove the event listener before removing the screen from the stack
        //AppState.removeEventListener('change', this._handleAppStateChange);
        this.focusListener.remove();
        //BackHandler.removeEventListener('hardwareBackPress', this.handleBackButton);
        clearTimeout(this.t);
      
      }
    
      
      componentDidMount = () => {
        //AppState.addEventListener('change', this._handleAppStateChange);
        const { navigation } = this.props;
       // BackHandler.addEventListener('hardwareBackPress', this.handleBackButton);
        this.focusListener = navigation.addListener('didFocus', () => {
    
          this.getUser()
            this.setState({ count: 0 });
        });
         
    }
  
    
  getUser = async () => {
  
    const user_id = await AsyncStorage.getItem('UserId');
    const name = await AsyncStorage.getItem('UserName');
    const mobile_no = await AsyncStorage.getItem('UserMobileNo');
    const email_id = await AsyncStorage.getItem('UserEmailId');
    const profile_image = await AsyncStorage.getItem('UserProfileImage');
    const fcm = await AsyncStorage.getItem('UserFCM');
    const token = await AsyncStorage.getItem('Login_JwtToken');
  
    if (token !== '') {
      this.setState({
    
        token: token,
      });
   
     // this.getHealthImprovement() 
    }
  };
  
  
  getHealthImprovement = async () => {
    const {token} = this.state
    this.setState({isHidden: true})
     
      axios
        .post(
          ApiName.health_improve, {},
          {
            headers: {
              'Authorization': token,
            },
          },
        )
        .then((response) => {
      
          this.setState({isHidden: false})
          if (response.data.status == 200) {
            
            this.setState({isHidden: false})
            this.setState({
               //healthImprovementChart
               OxygenLevels: response.data.data.oxygen_level ,
               Lungs: response.data.data.lungs ,
               CarbonMonoxideLevel: response.data.data.carbon_monoxide_level ,
           
          })}
        
        })
        .catch((error) => {
          this.setState({isHidden: false})
          Toast.show('There was some error. Please try again')
         
        });
    }
    
      shareApp = async ({type}) => {
     
        const { OxygenLevels,Lungs,CarbonMonoxideLevel,uniqueShareMyhealthImproveLink } = this.state
        
        if(type == 2){ 
            Share.share(
              {
                subject: 'Quit Tobacco My Health Improvement Link',
                message:
                  'My Health Improvements without using tobacco :- \n Lungs capacity increases by 30% after a few weeks without tobacco usage!' +
                 
                  '\n Click to download the app \n' +
                  uniqueShareMyhealthImproveLink,
                title: 'Quit Tobacco My Health Improvement Link',
              },
              {
                dialogTitle: 'Quit Tobacco My Health Improvement Link' ,// Android
                subject: 'Quit Tobacco My Health Improvement Link' ,// iOS
              }).then(success => console.log("success"), reason => console.log("DeepLink Reason"))
      
      
          }
        
      };
  
render () {

    const {isHidden,Lungs,CarbonMonoxideLevel,OxygenLevels} = this.state

    return (
      <SafeAreaView style={styles.container}>
       
        <View style={styles.view}>
      
        <View style={{
            flexDirection: 'row', width: '100%', height: '12%',
            backgroundColor: '#0072BB', alignItems: 'center', justifyContent: 'center'
          }}>
            <View style={{ width: '12%', height: responsiveHeight(10), justifyContent: 'center', alignContent: 'center', alignSelf: 'center', }}>

              <TouchableOpacity style={{

                alignItems: 'center',
              }} onPress={() => this.props.navigation.goBack()}>

                <Image style={{
                  width: responsiveWidth(3),
                  height: responsiveHeight(4),

                  resizeMode: 'contain'
                }} source={require('../../images/back_arrow.png')} />

              </TouchableOpacity>

            </View>
            <View style={{ width: '76%', height: responsiveHeight(12), alignItems: 'center', justifyContent: 'center' }}>
              <Text style={{
                color: '#FFFFFF',
                fontFamily: 'SFCompactDisplay-Medium',
                fontSize: scalable(18),
                justifyContent: 'center',
                textAlign: 'center',

              }}>Health Improvements</Text>
            </View>
            <View style={{ width: '12%', height: responsiveHeight(12), alignItems: 'center', justifyContent: 'center', marginRight: blockMarginHalf }}>

              <TouchableOpacity style={{

                alignItems: 'center',
              }} onPress={() => this.shareApp({ type: 2 })}>

                <Image style={{
                  width: 20,
                  height: 20,
                  tintColor: '#fff',
                  resizeMode: 'contain'
                }} source={require('../../images/share.png')} />

              </TouchableOpacity>
            </View>
          </View>

       
  
        <ScrollView style={{   height: '88%', width: '100%',flexDirection: 'column', backgroundColor: '#FFFFFF' }}
              keyboardShouldPersistTaps={'handled'}>

   <View style={{
         backgroundColor: '#FFFFFF',
         width: '100%',
         height:'100%',marginBottom: blockMargin * 2    ,justifyContent:'center',alignItems:'center'
          }}>
       <Image style={{ height: responsiveHeight(20),
     
      marginTop: responsiveHeight(0.60),
      resizeMode: 'contain',}} source={require('../../images/No_Smoking.png')} ></Image>
       <Text style={styles.text1}>Watch your health improve within minutes{'\n'}of your quitting tobacco</Text>
<View style={{marginTop: responsiveHeight(4), alignItems: 'center',
         backgroundColor: '#FFFFFF',
         width: responsiveWidth(100),
        }}>
 <Image style={{ height: responsiveHeight(20),
     
     marginTop: responsiveHeight(0.60),
     resizeMode: 'contain',}} source={require('../../images/Lungs_health.png')} ></Image>
{/* <ProgressCircle
            percent={Lungs}
            radius={50}
            borderWidth={15}
            color="#FFCB5C"
            shadowColor="#F7F7F7"
            bgColor="#FFFFFF"
        >
            <Text style={{ fontSize: responsiveFontSize(2) }}>{Lungs+'%'}</Text>
        </ProgressCircle> */}



        </View>
        <View style={styles.viewtext}>
            <Text style={styles.pulse}>LUNGS</Text>
            <Text style={styles.text1}>Within 20 minutes, your heart rate{'\n'}and blood pressure drop</Text>
        </View>

        <View style={{marginTop: responsiveHeight(4), alignItems: 'center',
         backgroundColor: '#FFFFFF',
         width: responsiveWidth(100),
        }}>


<Image style={{ height: responsiveHeight(20),
     
     marginTop: responsiveHeight(0.60),
     resizeMode: 'contain',}} source={require('../../images/CarbonMonoxide.png')} ></Image>
{/* <ProgressCircle
            percent={CarbonMonoxideLevel}
            radius={50}
            borderWidth={15}
            color="#FF8517"
            shadowColor="#F7F7F7"
            bgColor="#FFFFFF"
        >
            <Text style={{ fontSize: responsiveFontSize(2) }}>{CarbonMonoxideLevel+'%'}</Text>
        </ProgressCircle> */}
        </View>
        <View style={styles.viewtext}>
            <Text style={styles.pulse}>CARBON MONOXIDE LEVEL</Text>
            <Text style={styles.text1}>Within 12 hours, the carbon monoxide{'\n'}level in your blood drop to normal</Text>
        </View>

        <View style={{marginTop: responsiveHeight(4), alignItems: 'center',
         backgroundColor: '#FFFFFF',
         width: responsiveWidth(100),
       }}>

         
 <Image style={{ height: responsiveHeight(20),
     
     marginTop: responsiveHeight(0.60),
     resizeMode: 'contain',}} source={require('../../images/Oxygen.png')} ></Image>

{/* <ProgressCircle
            percent={OxygenLevels}
            radius={50}
            borderWidth={15}
            color="#0072BB"
            shadowColor="#F7F7F7"
            bgColor="#FFFFFF"
        >
            <Text style={{ fontSize: responsiveFontSize(2) }}>{OxygenLevels+'%'}</Text>
        </ProgressCircle> */}
        </View>
        <View style={styles.viewtext}>
            <Text style={styles.pulse}>OXYGEN LEVEL</Text>
            <Text style={styles.text1}>Within 2-12 weeks – your blood circulation{'\n'}and lung function improve</Text>
        </View>
       </View>
   </ScrollView>
   {isHidden ? (
                  <View
                    style={{
                      width: '100%',
                      height: '100%',
                      position: 'absolute',
                      justifyContent: 'center',
                      alignContent: 'center',
                      alignSelf: 'center',
                    }}>
                    <ActivityIndicator
                      size={40}
                      color="#0072bb"
                      animating={true}
                      backgroundColor={'transparent'}
                    />
                  </View>
                ) : null}

            </View>
          
            </SafeAreaView>
    );
}
}
