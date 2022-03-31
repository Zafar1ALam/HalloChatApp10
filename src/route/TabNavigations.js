import React, { useState } from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { SvgXml } from 'react-native-svg';
import { Dimensions, Text, View } from 'react-native';
import STYLES from '../STYLES';
import COLORS from '../utilities/color/Color';

import RecoverSMS from '../screens/RecoverSMS';
import Profile from '../screens/Profile';
import Chat from '../screens/Chat';
import Calls from '../screens/Calls';
const Tab = createBottomTabNavigator();
const TabNavigations = props => {
    return (
        <View style={{
            height: Dimensions.get('window').height,
            width: Dimensions.get('window').width,
            backgroundColor: COLORS.whiteFFFFFF,
            flex: 1,
        }}>
            {/* <NavigationContainer> */}
            <Tab.Navigator
                //    initialRouteName='HomeHomeSearch'
                screenOptions={{
                    headerShown: false,
                    tabBarStyle: {
                        //  height: 60,
                        //backgroundColor: 'red',
                        // paddingVertical: 25
                        // paddingBottom: 10,
                        // paddingHorizontal: '3%',
                        // paddingTop: 10,
                        // //    borderColor: COLORS.cylindricalFA4248,
                        // borderTopWidth: 2,
                        // borderTopColor: COLORS.cylindricalFA4248,
                        // borderRightWidth: 2,
                        // borderRightColor: COLORS.cylindricalFA4248,
                        // borderLeftWidth: 2,
                        // borderLeftColor: COLORS.cylindricalFA4248,
                        // marginTop: 20

                    },

                }}>
                <Tab.Screen name="Chat" component={Chat}


                    options={{
                        tabBarLabel: ({ focused }) => (
                            focused ?
                                <Text style={STYLES.fontSize14_black000000_Nunito_Bold}>Chat</Text> :
                                <Text style={STYLES.fontSize14_greyC4C4C4_Nunito_Bold}>Chat</Text>
                        ),
                        tabBarIcon: ({ color, focused }) => {
                            if (focused) {


                                return (
                                    <SvgXml xml={`<svg xmlns="http://www.w3.org/2000/svg" width="29.25" height="29.25" viewBox="0 0 29.25 29.25">
                                        <g id="Icon_ionic-ios-chatbubbles" data-name="Icon ionic-ios-chatbubbles" transform="translate(-3.375 -3.375)">
                                          <path id="Path_2148" data-name="Path 2148" d="M30.3,22.542a1.7,1.7,0,0,1,.232-.858,2.368,2.368,0,0,1,.148-.218,11.393,11.393,0,0,0,1.941-6.349A11.961,11.961,0,0,0,20.412,3.375,12.129,12.129,0,0,0,8.438,12.72a11.3,11.3,0,0,0-.26,2.4A11.927,11.927,0,0,0,20.2,27.014a14.48,14.48,0,0,0,3.319-.541c.795-.218,1.582-.506,1.786-.584a1.859,1.859,0,0,1,.654-.12,1.828,1.828,0,0,1,.71.141l3.987,1.413a.951.951,0,0,0,.274.07.56.56,0,0,0,.563-.562.9.9,0,0,0-.035-.19Z" fill="#f59823"/>
                                          <path id="Path_2149" data-name="Path 2149" d="M22.395,27.6c-.253.07-.577.148-.928.225a12.977,12.977,0,0,1-2.391.316A11.927,11.927,0,0,1,7.052,16.249a13.293,13.293,0,0,1,.105-1.5c.042-.3.091-.6.162-.9.07-.316.155-.633.246-.942L7,13.4A10.464,10.464,0,0,0,3.375,21.27a10.347,10.347,0,0,0,1.744,5.766c.162.246.253.436.225.563s-.837,4.359-.837,4.359a.564.564,0,0,0,.19.541.573.573,0,0,0,.359.127.5.5,0,0,0,.2-.042L9.2,31.029a1.1,1.1,0,0,1,.844.014,11.834,11.834,0,0,0,4.268.844,11.043,11.043,0,0,0,8.445-3.874s.225-.309.485-.675C22.985,27.429,22.69,27.52,22.395,27.6Z" fill="#f59823"/>
                                        </g>
                                      </svg>
                                      
                                                                           
                                      
                      `} />
                                )
                            }
                            else {

                                return (
                                    <SvgXml xml={`<svg xmlns="http://www.w3.org/2000/svg" width="29.25" height="29.25" viewBox="0 0 29.25 29.25">
                                        <g id="Icon_ionic-ios-chatbubbles" data-name="Icon ionic-ios-chatbubbles" transform="translate(-3.375 -3.375)">
                                          <path id="Path_2148" data-name="Path 2148" d="M30.3,22.542a1.7,1.7,0,0,1,.232-.858,2.368,2.368,0,0,1,.148-.218,11.393,11.393,0,0,0,1.941-6.349A11.961,11.961,0,0,0,20.412,3.375,12.129,12.129,0,0,0,8.438,12.72a11.3,11.3,0,0,0-.26,2.4A11.927,11.927,0,0,0,20.2,27.014a14.48,14.48,0,0,0,3.319-.541c.795-.218,1.582-.506,1.786-.584a1.859,1.859,0,0,1,.654-.12,1.828,1.828,0,0,1,.71.141l3.987,1.413a.951.951,0,0,0,.274.07.56.56,0,0,0,.563-.562.9.9,0,0,0-.035-.19Z" fill="#c4c4c4"/>
                                          <path id="Path_2149" data-name="Path 2149" d="M22.395,27.6c-.253.07-.577.148-.928.225a12.977,12.977,0,0,1-2.391.316A11.927,11.927,0,0,1,7.052,16.249a13.293,13.293,0,0,1,.105-1.5c.042-.3.091-.6.162-.9.07-.316.155-.633.246-.942L7,13.4A10.464,10.464,0,0,0,3.375,21.27a10.347,10.347,0,0,0,1.744,5.766c.162.246.253.436.225.563s-.837,4.359-.837,4.359a.564.564,0,0,0,.19.541.573.573,0,0,0,.359.127.5.5,0,0,0,.2-.042L9.2,31.029a1.1,1.1,0,0,1,.844.014,11.834,11.834,0,0,0,4.268.844,11.043,11.043,0,0,0,8.445-3.874s.225-.309.485-.675C22.985,27.429,22.69,27.52,22.395,27.6Z" fill="#c4c4c4"/>
                                        </g>
                                      </svg>
                                      
                      
                                      
                      `} />


                                )
                            }
                        }
                    }}
                />

                <Tab.Screen name="Calls" component={Calls}
                    options={{
                        tabBarLabel: ({ focused }) => (
                            focused ?
                                <Text style={STYLES.fontSize14_black000000_Nunito_Bold}>Calls</Text> :
                                <Text style={STYLES.fontSize14_greyC4C4C4_Nunito_Bold}>Calls</Text>
                        ),
                        tabBarIcon: ({ color, focused }) => {
                            //console.log(focused)
                            if (focused) {

                                return (
                                    <SvgXml xml={`<svg xmlns="http://www.w3.org/2000/svg" width="19.627" height="19.625" viewBox="0 0 19.627 19.625">
                                        <path id="Icon_ionic-ios-call" data-name="Icon ionic-ios-call" d="M23.55,19.869a16.485,16.485,0,0,0-3.444-2.3c-1.032-.5-1.41-.485-2.141.041-.608.439-1,.848-1.7.695a10.149,10.149,0,0,1-3.418-2.529,10.076,10.076,0,0,1-2.529-3.418c-.148-.705.261-1.093.695-1.7.526-.731.542-1.109.041-2.141a16.159,16.159,0,0,0-2.3-3.444C8,4.317,7.828,4.48,7.415,4.628a7.588,7.588,0,0,0-1.221.649A3.684,3.684,0,0,0,4.727,6.825c-.291.628-.628,1.8,1.088,4.854a27.084,27.084,0,0,0,4.762,6.351h0l.005.005.005.005h0A27.189,27.189,0,0,0,16.938,22.8c3.055,1.717,4.225,1.379,4.854,1.088a3.621,3.621,0,0,0,1.548-1.466,7.588,7.588,0,0,0,.649-1.221C24.137,20.789,24.306,20.62,23.55,19.869Z" transform="translate(-4.49 -4.503)" fill="#f59823"/>
                                      </svg>
                                      
                                  
                              
                                  
                  `} />
                                )
                            }
                            else

                                return (
                                    <SvgXml xml={`<svg xmlns="http://www.w3.org/2000/svg" width="19.627" height="19.625" viewBox="0 0 19.627 19.625">
                                        <path id="Icon_ionic-ios-call" data-name="Icon ionic-ios-call" d="M23.55,19.869a16.485,16.485,0,0,0-3.444-2.3c-1.032-.5-1.41-.485-2.141.041-.608.439-1,.848-1.7.695a10.149,10.149,0,0,1-3.418-2.529,10.076,10.076,0,0,1-2.529-3.418c-.148-.705.261-1.093.695-1.7.526-.731.542-1.109.041-2.141a16.159,16.159,0,0,0-2.3-3.444C8,4.317,7.828,4.48,7.415,4.628a7.588,7.588,0,0,0-1.221.649A3.684,3.684,0,0,0,4.727,6.825c-.291.628-.628,1.8,1.088,4.854a27.084,27.084,0,0,0,4.762,6.351h0l.005.005.005.005h0A27.189,27.189,0,0,0,16.938,22.8c3.055,1.717,4.225,1.379,4.854,1.088a3.621,3.621,0,0,0,1.548-1.466,7.588,7.588,0,0,0,.649-1.221C24.137,20.789,24.306,20.62,23.55,19.869Z" transform="translate(-4.49 -4.503)"  fill="#000000" opacity="0.23"/>
                                      </svg>
                                      
                                      
                                      
                                  
                          
                                      
                      `} />
                                )
                        }


                    }} />

                <Tab.Screen name="RecoverSMS" component={RecoverSMS}
                    options={{
                        tabBarLabel: ({ focused }) => (
                            focused ?
                                <Text style={STYLES.fontSize14_black000000_Nunito_Bold}>Recover SMS</Text> :
                                <Text style={STYLES.fontSize14_greyC4C4C4_Nunito_Bold}>Recover SMS</Text>
                        ),
                        tabBarIcon: ({ color, focused }) => {
                            //console.log(focused)
                            if (focused) {

                                return (
                                    <SvgXml xml={`<svg xmlns="http://www.w3.org/2000/svg" width="24.474" height="23.276" viewBox="0 0 24.474 23.276">
                                    <g id="Group_10953" data-name="Group 10953" transform="translate(-115 -702.331)">
                                      <path id="Icon_awesome-percent" data-name="Icon awesome-percent" d="M1.387,2.774A1.387,1.387,0,1,0,0,1.387,1.386,1.386,0,0,0,1.387,2.774Zm0-1.981a.594.594,0,1,1-.594.594A.595.595,0,0,1,1.387.793ZM4.161,3.567A1.387,1.387,0,1,0,5.548,4.954,1.386,1.386,0,0,0,4.161,3.567Zm0,1.981a.594.594,0,1,1,.594-.594A.595.595,0,0,1,4.161,5.548ZM4.858,0H5.25a.3.3,0,0,1,.244.468L.959,6.212a.3.3,0,0,1-.243.126H.3a.3.3,0,0,1-.244-.468L4.616.129A.3.3,0,0,1,4.858,0Z" transform="translate(124.508 712.414)" fill="#fa4248"/>
                                      <path id="Icon_metro-star-empty" data-name="Icon metro-star-empty" d="M27.045,11.574l-8.456-1.229L14.808,2.683l-3.781,7.662L2.571,11.574l6.119,5.964L7.245,25.959l7.563-3.976,7.563,3.976-1.444-8.421,6.119-5.964ZM14.808,20.093,9.467,22.9l1.02-5.947L6.166,12.742l5.971-.868,2.67-5.411,2.671,5.411,5.971.868-4.321,4.212,1.02,5.947-5.341-2.808Z" transform="translate(112.43 699.648)" fill="#fa4248"/>
                                    </g>
                                  </svg>
                                  
                              
                                  
                  `} />
                                )
                            }
                            else

                                return (
                                    <SvgXml xml={`<svg xmlns="http://www.w3.org/2000/svg" width="29.25" height="29.25" viewBox="0 0 29.25 29.25">
                                        <g id="Icon_ionic-ios-chatbubbles" data-name="Icon ionic-ios-chatbubbles" transform="translate(-3.375 -3.375)">
                                          <path id="Path_2148" data-name="Path 2148" d="M30.3,22.542a1.7,1.7,0,0,1,.232-.858,2.368,2.368,0,0,1,.148-.218,11.393,11.393,0,0,0,1.941-6.349A11.961,11.961,0,0,0,20.412,3.375,12.129,12.129,0,0,0,8.438,12.72a11.3,11.3,0,0,0-.26,2.4A11.927,11.927,0,0,0,20.2,27.014a14.48,14.48,0,0,0,3.319-.541c.795-.218,1.582-.506,1.786-.584a1.859,1.859,0,0,1,.654-.12,1.828,1.828,0,0,1,.71.141l3.987,1.413a.951.951,0,0,0,.274.07.56.56,0,0,0,.563-.562.9.9,0,0,0-.035-.19Z" fill="#c4c4c4"/>
                                          <path id="Path_2149" data-name="Path 2149" d="M22.395,27.6c-.253.07-.577.148-.928.225a12.977,12.977,0,0,1-2.391.316A11.927,11.927,0,0,1,7.052,16.249a13.293,13.293,0,0,1,.105-1.5c.042-.3.091-.6.162-.9.07-.316.155-.633.246-.942L7,13.4A10.464,10.464,0,0,0,3.375,21.27a10.347,10.347,0,0,0,1.744,5.766c.162.246.253.436.225.563s-.837,4.359-.837,4.359a.564.564,0,0,0,.19.541.573.573,0,0,0,.359.127.5.5,0,0,0,.2-.042L9.2,31.029a1.1,1.1,0,0,1,.844.014,11.834,11.834,0,0,0,4.268.844,11.043,11.043,0,0,0,8.445-3.874s.225-.309.485-.675C22.985,27.429,22.69,27.52,22.395,27.6Z" fill="#c4c4c4"/>
                                        </g>
                                      </svg>
                                      
                                      
                          
                                      
                      `} />
                                )
                        }


                    }} />

                <Tab.Screen name="Profile" component={Profile}

                    options={{
                        tabBarLabel: ({ focused }) => (
                            focused ?
                                <Text style={STYLES.fontSize14_black000000_Nunito_Bold}>Profile</Text> :
                                <Text style={STYLES.fontSize14_greyC4C4C4_Nunito_Bold}>Profile</Text>
                        ),
                        tabBarIcon: ({ color, focused }) => {
                            if (focused) {

                                return (
                                    <SvgXml xml={`<svg xmlns="http://www.w3.org/2000/svg" width="25.5" height="25.5" viewBox="0 0 25.5 25.5">
                                        <path id="Icon_awesome-user-alt" data-name="Icon awesome-user-alt" d="M12.75,14.344A7.172,7.172,0,1,0,5.578,7.172,7.174,7.174,0,0,0,12.75,14.344Zm6.375,1.594H16.381a8.67,8.67,0,0,1-7.262,0H6.375A6.375,6.375,0,0,0,0,22.313v.8A2.391,2.391,0,0,0,2.391,25.5H23.109A2.391,2.391,0,0,0,25.5,23.109v-.8A6.375,6.375,0,0,0,19.125,15.938Z" fill="#f59823"/>
                                      </svg>
                                      
                                             
                                           
`} />
                                )
                            }

                            else
                                return (
                                    <SvgXml xml={`<svg xmlns="http://www.w3.org/2000/svg" width="29.25" height="29.25" viewBox="0 0 29.25 29.25">
                                        <g id="Icon_ionic-ios-chatbubbles" data-name="Icon ionic-ios-chatbubbles" transform="translate(-3.375 -3.375)">
                                          <path id="Path_2148" data-name="Path 2148" d="M30.3,22.542a1.7,1.7,0,0,1,.232-.858,2.368,2.368,0,0,1,.148-.218,11.393,11.393,0,0,0,1.941-6.349A11.961,11.961,0,0,0,20.412,3.375,12.129,12.129,0,0,0,8.438,12.72a11.3,11.3,0,0,0-.26,2.4A11.927,11.927,0,0,0,20.2,27.014a14.48,14.48,0,0,0,3.319-.541c.795-.218,1.582-.506,1.786-.584a1.859,1.859,0,0,1,.654-.12,1.828,1.828,0,0,1,.71.141l3.987,1.413a.951.951,0,0,0,.274.07.56.56,0,0,0,.563-.562.9.9,0,0,0-.035-.19Z" fill="#c4c4c4"/>
                                          <path id="Path_2149" data-name="Path 2149" d="M22.395,27.6c-.253.07-.577.148-.928.225a12.977,12.977,0,0,1-2.391.316A11.927,11.927,0,0,1,7.052,16.249a13.293,13.293,0,0,1,.105-1.5c.042-.3.091-.6.162-.9.07-.316.155-.633.246-.942L7,13.4A10.464,10.464,0,0,0,3.375,21.27a10.347,10.347,0,0,0,1.744,5.766c.162.246.253.436.225.563s-.837,4.359-.837,4.359a.564.564,0,0,0,.19.541.573.573,0,0,0,.359.127.5.5,0,0,0,.2-.042L9.2,31.029a1.1,1.1,0,0,1,.844.014,11.834,11.834,0,0,0,4.268.844,11.043,11.043,0,0,0,8.445-3.874s.225-.309.485-.675C22.985,27.429,22.69,27.52,22.395,27.6Z" fill="#c4c4c4"/>
                                        </g>
                                      </svg>
                                      
                                  
                                           
`} />
                                )
                        }
                    }}
                />



            </Tab.Navigator>
            {/* </NavigationContainer> */}
        </View>
    );
};

TabNavigations.propTypes = {

};

export default TabNavigations;