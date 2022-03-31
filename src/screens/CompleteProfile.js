import React, { useRef, useState } from 'react';
import PropTypes from 'prop-types';
import { Image, ScrollView, Text, View } from 'react-native'
import STYLES from '../STYLES';
import PhoneInput from 'react-native-phone-number-input';
import { Checkbox, TextInput, TouchableRipple } from 'react-native-paper';
import { StyleSheet } from "react-native";
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import COLORS from '../utilities/color/Color';
import Button1 from '../comp/Button1';
import { SvgXml } from 'react-native-svg';
import Svgs from '../utilities/svgs/Svgs';
import TextInput1 from '../comp/TextInput1';
import TextArea1 from '../comp/TextArea1';

const CompleteProfile = ({ navigation }) => {
    const [value, setValue] = useState('');
    const [countryCode, setCountryCode] = useState('');
    const [formattedValue, setFormattedValue] = useState('');
    const [valid, setValid] = useState(false);
    const [disabled, setDisabled] = useState(false);
    const [showMessage, setShowMessage] = useState(false);
    const phoneInput = useRef < PhoneInput > (null);
    return (
        <ScrollView>
            <View style={STYLES.ph_10_pv_5_container}>
                <View style={{
                    flex: 0.25, //backgroundColor: 'red',
                    alignItems: 'center'
                }}>
                    <Text style={STYLES.fontSize20_black000000_SF_UI_Display_Regular}>Complete Profile</Text>

                    <View style={{
                        // backgroundColor: 'red',
                        marginTop: '7%',
                        alignItems: 'center',
                        // flex: 1,
                        justifyContent: 'center'
                    }}>
                        <SvgXml xml={`<svg xmlns="http://www.w3.org/2000/svg" width="87.336" height="87.336" viewBox="0 0 87.336 87.336">
  <path id="Icon_awesome-user-circle" data-name="Icon awesome-user-circle" d="M43.668.563A43.668,43.668,0,1,0,87.336,44.231,43.661,43.661,0,0,0,43.668.563Zm0,16.9a15.5,15.5,0,1,1-15.5,15.5A15.5,15.5,0,0,1,43.668,17.466Zm0,60.572a33.742,33.742,0,0,1-25.8-12.009A19.632,19.632,0,0,1,35.216,55.5a4.309,4.309,0,0,1,1.25.194,23.313,23.313,0,0,0,7.2,1.215,23.225,23.225,0,0,0,7.2-1.215,4.308,4.308,0,0,1,1.25-.194A19.632,19.632,0,0,1,69.464,66.03,33.742,33.742,0,0,1,43.668,78.038Z" transform="translate(0 -0.563)" fill="#f59823" opacity="0.41"/>
</svg>
`} >

                        </SvgXml>
                        <FontAwesome5 name={"camera"} size={30} //onPress={toggleModal}
                            style={{ position: 'absolute', }}
                        />


                    </View>
                </View>
                <View style={{
                    flex: 0.5, //backgroundColor: 'green',
                    justifyContent: 'space-between'
                }}>
                    <TextInput1 placeholder="Name"
                    />
                    <TextInput1 placeholder="Email"
                    />
                    <PhoneInput placeholder="Phone No"
                        containerStyle={style.containerstylephoneinput}
                        codeTextStyle={STYLES.fontSize16_grey1A1A1A_56_RobotoRegular}
                        textInputStyle={[style.textinputstylephoneno,
                        STYLES.fontSize16_grey1A1A1A_56_RobotoRegular
                        ]}
                        textContainerStyle={[style.textcontainerstylephoneno,

                        ]}
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

                    <TextArea1 placeholder="Bio" />
                </View>

                <View style={{
                    flex: 0.25,// backgroundColor: 'orange'
                    justifyContent: 'flex-end'
                }}>
                    <View style={{ marginBottom: '5%' }}>
                        <Button1 text="CONTINUE"
                            onPress={() => navigation.navigate("TabNavigations")}
                        />
                    </View>
                </View>
            </View>
        </ScrollView>

    );
};

CompleteProfile.propTypes = {

};

export default CompleteProfile;


const style = StyleSheet.create({
    containerstylephoneinput: {
        //width: '89%',
        borderColor: COLORS.grey1A1A1A, borderWidth: 1,
        // backgroundColor: 'red',
        height: 60,
        paddingLeft: 0,
        borderRadius: 10,
    },
    textinputstylephoneno: {
        height: '100%'
        ,
    },
    textcontainerstylephoneno: {
        width: "100%", height: "100%", justifyContent: 'center',
        paddingTop: '1%', borderRadius: 10, marginLeft: 0,
        paddingBottom: '1%'
    },
})