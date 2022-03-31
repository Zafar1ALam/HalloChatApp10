import React, { useRef, useState } from 'react';
import PropTypes from 'prop-types';
import { Image, ScrollView, Text, View } from 'react-native'
import STYLES from '../STYLES';
import PhoneInput from 'react-native-phone-number-input';
import { Checkbox, TouchableRipple } from 'react-native-paper';
import { StyleSheet } from "react-native";
import COLORS from '../utilities/color/Color';
import Button1 from '../comp/Button1';
import {
    CodeField,
    Cursor,
    useBlurOnFulfill,
    useClearByFocusCell,
} from 'react-native-confirmation-code-field';



const CELL_COUNT = 4;
const VerificationCode = ({ navigation }) => {
    const [value, setValue] = useState('');
    const ref = useBlurOnFulfill({ value, cellCount: CELL_COUNT });
    const [prop, getCellOnLayoutHandler] = useClearByFocusCell({
        value,
        setValue,
    });
    return (
        <ScrollView>
            <View style={[STYLES.ph_5_pv_5_container,
            { paddingHorizontal: "10%" }]}>

                <View style={{
                    flex: 0.25,// backgroundColor: 'red',
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
                    flex: 0.55,
                    alignItems: 'center',
                    //  backgroundColor: 'green'
                }}>
                    <Text style={STYLES.fontSize36_darkcharcoal333333_Playball_Regular}>Verification Code</Text>
                    <Text style={[STYLES.fontSize18_BLACK1D2226_60_RobotoRegular,
                    { textAlign: 'center' }]}>We have sent you a code on your phone Number</Text>
                    <Text style={[STYLES.fontSize18_BLACK1D2226_60_RobotoRegular,
                    { textAlign: 'center', marginTop: '4%' }]}>Enter Code Below</Text>

                    <CodeField
                        ref={ref}
                        {...prop}
                        // Use `caretHidden={false}` when users can't paste a text value, because context menu doesn't appear
                        value={value}
                        onChangeText={setValue}
                        cellCount={CELL_COUNT}
                        rootStyle={styles.codeFieldRoot}
                        keyboardType="number-pad"
                        textContentType="oneTimeCode"
                        renderCell={({ index, symbol, isFocused }) => (
                            value == '' ?

                                <Text
                                    key={index}
                                    style={[styles.cell, isFocused && styles.focusCell]}
                                    onLayout={getCellOnLayoutHandler(index)}>{console.log(index)}
                                    {console.log('a')}
                                    {console.log(symbol)}
                                    {console.log(isFocused)}
                                    {symbol || (isFocused ? <Cursor /> : null)}

                                </Text>
                                : <Text
                                    key={index}
                                    style={[styles.cell, isFocused && styles.focusCell]}
                                    onLayout={getCellOnLayoutHandler(index)}>{console.log(index)}
                                    {console.log(symbol)}
                                    {console.log(isFocused)}
                                    {symbol || (isFocused ? <Cursor /> : null)}

                                </Text>

                        )}
                    />
                </View>

                <View style={{
                    justifyContent: 'flex-end',
                    flex: 0.20,// backgroundColor: 'pink'
                }}>
                    <View style={{ marginBottom: '5%' }}>
                        <Button1 text="VERIFY"
                            onPress={() => navigation.navigate("VerificationSuccessful")} />
                    </View>

                </View>
            </View>
        </ScrollView >

    );
};

VerificationCode.propTypes = {

};

export default VerificationCode;


const styles = StyleSheet.create({
    //   root: {flex: 1, padding: 20,backgroundColor:'green'},

    codeFieldRoot: {
        width: '90%', alignSelf: 'center',
        // backgroundColor: 'red'
    },
    cell: {
        width: 45,

        height: 50,
        lineHeight: 48,
        fontSize: 20,
        borderWidth: 2,
        borderRadius: 5,
        borderColor: '#00000030',
        textAlign: 'center',
        marginTop: '6%',
        //backgroundColor:'orange'
    },
    focusCell: {
        borderColor: '#000',
    },
});
