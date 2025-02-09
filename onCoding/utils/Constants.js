/* eslint-disable prettier/prettier */
import BuildConfig from 'react-native-build-config';

const common = {
  //Base Url
  baseUrl: BuildConfig.API_URL,
   //Path
  auth: 'auth/',
  users: 'users/',
  password: 'password/',
  otp: 'otp/',
  members: 'members/',
  socialmedia: 'social-media/',
  userinformations: 'user-informations/',
  quitPlan: 'user-quit-plan/',
  
  cravings: 'cravings/',
  health: 'health/',
  motivations: 'motivations/',
  user_motivations: 'user-motivations/',
  wish_lists: 'wish-lists/',
  missions: 'missions/',
  diaries: 'diaries/',
  contents: 'contents/',
  settings: 'settings/',
  achievements: 'achievements/',
  notifications: 'notifications/',

};
{console.log(BuildConfig.API_URL)}

const variables = {
  //API

  //Login SignUp
  login: common.baseUrl + common.auth + 'login',

  //SignUp
   register: common.baseUrl + common.users + 'store',

  //OTP
  verifyOtp: common.baseUrl + common.users + common.otp + 'verify',
  resendOtp: common.baseUrl + common.users + common.otp + 'resend',

  //Password
  forgotPassword: common.baseUrl + common.users + common.password + 'forgot',
  changePassword: common.baseUrl + common.users + common.password + 'update',

  //Members
  registerMember: common.baseUrl + common.members + 'store',
  updateMember  : common.baseUrl + common.members ,
  deleteMember  : common.baseUrl + common.members ,
  indexMember   : common.baseUrl + common.members + 'index',

  //SocialMedia
  registerSocialMedia: common.baseUrl + common.auth + 'social-media-users',
  loginSocialMedia:    common.baseUrl + common.socialmedia + 'login',

  //User Information
  userInformation: common.baseUrl + common.userinformations + 'update',
  userInfoupdate: common.baseUrl + common.userinformations + 'update',
  userQuitPlan: common.baseUrl + common.quitPlan + 'store',
  userQuitPlanIndex: common.baseUrl + common.quitPlan + 'index',
  userInfoshow: common.baseUrl + common.userinformations + 'show',


  //Cravings
  video_craving: common.baseUrl + 'carving-videos',
  graph_craving: common.baseUrl + common.cravings + 'graph',
  store_craving: common.baseUrl + common.cravings + 'store',
  trigger_craving: common.baseUrl + common.cravings + 'trigger',
  list_craving: common.baseUrl + common.cravings + 'list',
 
  //health
  improvements: common.baseUrl + common.health + 'improvements',
  health_improve: common.baseUrl + 'health-improvements',
  
  //Motivations
  add_motivation: common.baseUrl + common.user_motivations + 'store',
  update_motivation: common.baseUrl + common.motivations ,
  list_motivation: common.baseUrl + common.user_motivations + 'index',
  delete_motivation  : common.baseUrl + common.user_motivations ,
  select_motivation: common.baseUrl + common.user_motivations,

  //Wishlists

  add_wishlist: common.baseUrl + common.wish_lists + 'store',
  update_wishlist: common.baseUrl + common.wish_lists,
  index_wishlist: common.baseUrl + common.wish_lists + 'index',

  //Missions
  index_mission: common.baseUrl + common.missions + 'index',
  store_mission: common.baseUrl + common.missions + 'store',

  //Diaries
  index_diary: common.baseUrl + common.diaries + 'index',
  show_diary: common.baseUrl + common.diaries + 'show',
  store_diary: common.baseUrl + common.diaries + 'store',
  delete_diary: common.baseUrl + common.diaries,


  //contents
  difficult_situations: common.baseUrl + common.contents + 'difficult-situations',
  welcome: common.baseUrl + common.contents + 'welcome',
  disclaimer: common.baseUrl + common.contents + 'disclaimer',
  nicotine_replacement: common.baseUrl + common.contents + 'nicotine-replacement',
  terms_conditions: common.baseUrl + common.contents + 'terms-conditions',
  references: common.baseUrl + common.contents + 'references',
  privacy_policy: common.baseUrl + common.contents + 'privacy-policy',
  about_us: common.baseUrl + common.contents + 'about-us',
  tobacco_infection: common.baseUrl + 'tobacco-infections',

  //BaseUrl
  baseLink: BuildConfig.BASE_URL+'uploads/files/',
  baseVideoLink: BuildConfig.BASE_URL+'uploads/video/',
  baseImageLink: BuildConfig.BASE_URL+'uploads/userimages/',

  //Dashboard
  dashboard: common.baseUrl + 'dashboard',
  //professions
  professions: common.baseUrl + 'professions',
//savings
  savings: common.baseUrl + 'savings',
//educations
  educations: common.baseUrl + 'educations',
//countries
countries: common.baseUrl + 'countries',
//frequent-smokes
  frequent_smokes: common.baseUrl + 'frequent-smokes',
//feelings
  feelings: common.baseUrl + 'feelings',
//doings
  doings: common.baseUrl + 'doings',
  //currencies
  currencies: common.baseUrl + 'currencies',
//with-whom
  with_whom: common.baseUrl + 'with-whom',
//tobaccos
  tobaccos: common.baseUrl + 'tobaccos',
//quit-reasons
  quit_reasons: common. baseUrl + 'quit-reasons',
//use-reasons
  use_reasons: common.baseUrl + 'use-reasons',
//first-smoke-timings
  first_smoke_timings: common.baseUrl + 'first-smoke-timings',
//feedback
  feedback: common.baseUrl + 'feedback',
  //tobacco-product
  products: common.baseUrl + 'tobacco-products',
  //quit-benefits
  benefits: common.baseUrl + 'quit-benefits',
  //reset data
  reset_data: common.baseUrl + common.settings + 'reset',
  //Achievements
  Achievements: common.baseUrl + common.achievements + 'show',
  store_achievements: common.baseUrl + common.achievements + 'store',


  //Notifications
  view_notifications:  common.baseUrl + common.notifications + 'show',
  update_notifications: common.baseUrl + common.notifications + 'update',
  List_notifications: common.baseUrl + common.notifications + 'index',
  seen_notifications: common.baseUrl + common.notifications,


  //Logout
  logout: common.baseUrl + common.auth+'logout'

};

export default variables;
