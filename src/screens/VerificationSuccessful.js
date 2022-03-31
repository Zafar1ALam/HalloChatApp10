import React, { useRef, useState } from 'react';
import PropTypes from 'prop-types';
import { Image, ScrollView, Text, View } from 'react-native'
import STYLES from '../STYLES';
import PhoneInput from 'react-native-phone-number-input';
import { Checkbox, TouchableRipple } from 'react-native-paper';
import { StyleSheet } from "react-native";
import COLORS from '../utilities/color/Color';
import Button1 from '../comp/Button1';
import { SvgXml } from 'react-native-svg';
import Svgs from '../utilities/svgs/Svgs';


const VerificationSuccessful = ({ navigation }) => {
    return (
        <View style={STYLES.container}>
            <View style={{
                flex: 0.1, //backgroundColor: 'red'
            }}>
                <Image style={{
                    //resizeMode: 'contain',
                    flex: 1,
                    position: 'absolute', top: '-270%',
                    left: '-60%'
                }}
                    source={require('../utilities/image/dimhallo.png')} />
            </View>
            <View style={{
                flex: 0.3, //backgroundColor: 'green',
                justifyContent: "center",
                alignItems: 'center'
            }}>
                <Image
                    style={{ flex: 1, width: '50%', resizeMode: 'contain' }}
                    source={

                        require('../utilities/image/splashhallo.png')} />
            </View>
            <View style={{
                flex: 0.3, //backgroundColor: 'blue',
                alignItems: "center", justifyContent: 'center'
                //paddingTop: '5%'
            }}>
                <View style={{
                    //  backgroundColor: 'green',
                    marginBottom: "15%", width: '100%',
                    alignItems: 'center'
                }}>
                    <SvgXml xml={Svgs.tickCircle} />
                    <Text
                        //style={{ marginTop: '5%' }}
                        style={[{
                            marginTop: '5%', width: '100%',
                            alignSelf: 'center', textAlign: 'center'
                        },
                        STYLES.fontSize28_darkcharcoal333333_Playball_Regular]}>Verification Sucessful</Text>
                </View>
            </View>
            <View style={{
                flex: 0.3, //backgroundColor: 'pink',
                //  alignItems: "center",
                paddingHorizontal: '10%',
                justifyContent: 'flex-end'
            }}>
                <View style={{ marginBottom: '5%' }}>
                    <Button1 text="CONTINUE"
                        onPress={() => navigation.navigate("CompleteProfile")} />
                </View>
            </View>

        </View>
    );
};

VerificationSuccessful.propTypes = {

};

export default VerificationSuccessful;