import React, { useRef, useState } from 'react';
import PropTypes from 'prop-types';
import { Image, ScrollView, Text, View, FlatList } from 'react-native'
import STYLES from '../STYLES';
import PhoneInput from 'react-native-phone-number-input';
import { Checkbox, TouchableRipple } from 'react-native-paper';
import { StyleSheet } from "react-native";
import COLORS from '../utilities/color/Color';
import Button1 from '../comp/Button1';
import { Searchbar, FAB } from 'react-native-paper';
import { SvgXml } from 'react-native-svg';
import Svgs from '../utilities/svgs/Svgs';

const ChatProfile = ({ navigation }) => {
    const [callFlatlist, setCallFlatlist] = useState([
        {
            id: 1,
            name: "Jessica",
            time: "2 hours",
            image: ""
        },
        {
            id: 2,
            name: "Jessica",
            time: "2 hours",
            image: ""
        },
    ])
    return (
        <View style={STYLES.ph_5_pv_5_container}>
            <View style={{
                flex: 0.40, //backgroundColor: 'red',
                alignItems: "center", justifyContent: 'space-between'
            }}>
                <View style={{
                    //alignItems: "stretch",
                    width: '100%', //backgroundColor: 'green'
                }}>
                    <SvgXml xml={Svgs.leftArrow} />
                </View>
                <Image
                    //
                    source={require('../utilities/image/profileImageHumanBeing.png')} />
                <Text style={STYLES.fontSize28_orangeF59823_Nunito_Bold}>Marlena</Text>
                <Text style={STYLES.fontSize16_orangeF59823_Nunito_SemiBold}>Art, Director, 21</Text>
                <View style={{
                    flexDirection: 'row',
                    width: "32%",
                    marginTop: '5%',
                    //flex: 0.7,
                    //backgroundColor: "red", 
                    justifyContent: "space-between"
                }}>
                    <SvgXml xml={Svgs.phone} />
                    <SvgXml xml={Svgs.vedio} />
                </View>

            </View>
            <View style={{
                flex: 0.6, //backgroundColor: 'green',
                // alignItems: 'center'
            }}>
                <View style={{
                    marginTop: '10%',
                    width: '100%', alignItems: 'center',
                    //   backgroundColor: "pink"
                }}>
                    <Text style={STYLES.fontSize14_black000000_SF_UI_Display_Light}>
                        Hey Fly 9!</Text>
                    <Text style={[{
                        width: '90%',
                        //   backgroundColor: 'red', 
                        textAlign: "center"
                    }, STYLES.fontSize14_black000000_SF_UI_Display_Light]}>
                        I was tossing and turning all night! I haven’t slept a wink in 3 days! What’s keeping you up? Nothing, really.</Text>
                </View>

                <Text style={[STYLES.fontSize20_black000000_Arial_bold,
                { marginTop: '5%' }]}>Call History</Text>


                <FlatList
                    showsVerticalScrollIndicator={false}
                    style={{
                        marginTop: '7%'
                    }}
                    data={callFlatlist}
                    renderItem={({ item }) => {
                        return (

                            <View style={{
                                height: 70,
                                //  marginHorizontal: "5%",
                                flexDirection: 'row',
                                alignItems: 'center',
                                // borderBottomWidth: 1,
                                //borderBottomColor: COLORS.grey707070_24
                            }}>
                                <View style={{ //backgroundColor: "red"
                                }}>
                                    <Image
                                        style={{
                                            //width: "100%", height: "100%",
                                            // resizeMode: 'contain',
                                            borderWidth: 3,
                                            borderRadius: 50,
                                            borderColor: COLORS.orangeF59823
                                        }}

                                        source={require('../utilities/image/humanBeing.png')} />

                                </View>
                                <View style={{
                                    flex: 1, marginLeft: '5%',
                                    justifyContent: "space-between",
                                    // backgroundColor: "red",
                                    height: '70%'
                                }}>
                                    <View style={{ flexDirection: 'row', alignItems: "center", }}>
                                        <Text style={[{ marginRight: '7%' },
                                        STYLES.fontSize18_black000000_Nunito_Bold]}>{item.name}</Text>

                                    </View>

                                    <Text
                                        style={STYLES.fontSize13_black000000_27_Montserrat_Regular}
                                    >
                                        {item.time}</Text>
                                </View>
                                <SvgXml xml={Svgs.phone} />

                            </View>

                        )
                    }}
                    keyExtractor={(item) => item.id}

                />
            </View>
        </View >
    );
};

ChatProfile.propTypes = {

};

export default ChatProfile;