import React, { useRef, useState } from 'react';
import PropTypes from 'prop-types';
import { Image, ScrollView, Text, View } from 'react-native'
import STYLES from '../STYLES';
import PhoneInput from 'react-native-phone-number-input';
import { Checkbox, TouchableRipple } from 'react-native-paper';
import { StyleSheet } from "react-native";
import COLORS from '../utilities/color/Color';
import Button1 from '../comp/Button1';
const WelcomeToHello = ({ navigation }) => {
    const [value, setValue] = useState('');
    const [countryCode, setCountryCode] = useState('');
    const [formattedValue, setFormattedValue] = useState('');
    const [valid, setValid] = useState(false);
    const [disabled, setDisabled] = useState(false);
    const [showMessage, setShowMessage] = useState(false);
    const phoneInput = useRef < PhoneInput > (null);

    const [checked, setChecked] = React.useState(false);
    return (
        <ScrollView>
            <View style={[STYLES.ph_5_pv_5_container,
                //{ paddingHorizontal: '10%' }
            ]}>

                <View style={{
                    //width: "100%",
                    flex: 0.30,// backgroundColor: 'red',
                    marginTop: '10%',
                    justifyContent: 'flex-end', alignItems: 'center'
                }}>
                    <Image
                        style={{
                            flex: 1,
                            resizeMode: 'contain',
                            width: '50%'
                            // justifyContent: 'flex-start'
                        }}
                        source={
                            require('../utilities/image/splashhallo.png')} />
                </View>
                <View style={{
                    flex: 0.20,
                    alignItems: 'center',
                    //  backgroundColor: 'green'
                }}>
                    <Text style={STYLES.fontSize31_darkcharcoal333333_Playball_Regular}>Welcome to Hallo</Text>
                    <Text style={[STYLES.fontSize18_BLACK1D2226_60_RobotoRegular,
                    ]}>Please Enter Your Number to Signup</Text>
                </View>
                <View style={{
                    flex: 0.30,
                    //  paddingHorizontal: '25%'
                    alignItems: 'center',
                    //     backgroundColor: 'blue',

                }}>
                    <View style={{
                        alignItems: 'center',
                        flex: 0.3,
                        //  alignSelf: 'stretch'
                    }}>
                        <PhoneInput placeholder="Phone No"
                            containerStyle={style.containerstylephoneinput}
                            codeTextStyle={STYLES.fontSize16_grey1A1A1A_56_RobotoRegular}
                            textInputStyle={[style.textinputstylephoneno,
                            STYLES.fontSize16_grey1A1A1A_56_RobotoRegular
                            ]}
                            textContainerStyle={style.textcontainerstylephoneno}
                            // ref={phoneInput}
                            defaultValue={value}
                            defaultCode="IN"
                            layout="second"
                            onChangeText={(text) => {
                                setValue(text);
                                console.log(value)

                            }}
                            onChangeFormattedText={(text) => {
                                setFormattedValue(text);
                                console.log(formattedValue)
                                setCountryCode(phoneInput.current?.getCountryCode() || '');
                                console.log(phoneInput.current?.getCountryCode() || '')
                            }}
                            countryPickerProps={{ withAlphaFilter: true }}
                            disabled={disabled}
                            withDarkTheme
                            withShadow
                            autoFocus
                        />

                        <View style={{
                            marginTop: "7%",
                            flexDirection: 'row',
                            width: '85%',
                            //   flex: 1,
                            justifyContent: 'center',
                            // backgroundColor: 'red',
                            //justifyContent: 'center',
                            alignItems: 'center',
                        }}>
                            <Checkbox

                                color={COLORS.orangeF59823}
                                status={checked ? 'checked' : 'unchecked'}
                                onPress={() => {
                                    setChecked(!checked);
                                }}
                            />
                            <Text style={[STYLES.fontSize14_707070_Segoe_UI_Regular,
                            {
                                marginLeft: '5%',
                                height: '100%',
                                width: '90%',
                                //   backgroundColor: 'green',// width: '80%',
                            }]}>By continuing you will receive a verification code to your phone number by SMS. Message and data rates may apply. </Text>
                        </View>
                    </View>
                </View>
                <View style={{
                    justifyContent: 'flex-end',
                    flex: 0.30,// backgroundColor: 'pink'
                    paddingHorizontal: '5%'
                }}>
                    <View style={{ marginBottom: '5%' }}>
                        <Button1 text="LOGIN" onPress={() => navigation.navigate("VerificationCode")} />
                    </View>

                </View>
            </View>
        </ScrollView >

    );
};

WelcomeToHello.propTypes = {

};

export default WelcomeToHello;



const style = StyleSheet.create({
    containerstylephoneinput: {
        //width: '89%',
        borderColor: COLORS.grey1A1A1A, borderWidth: 1,
        // backgroundColor: 'red',
        height: "100%",
        paddingLeft: 0,
        borderRadius: 10,
    },
    textinputstylephoneno: {
        height: '100%',
    },
    textcontainerstylephoneno: {
        width: "100%", height: "100%", justifyContent: 'center',
        paddingTop: '1%', borderRadius: 10, marginLeft: 0,
        paddingBottom: '1%'
    },
})