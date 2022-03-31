import React, { useRef, useState } from 'react';
import PropTypes from 'prop-types';
import { Image, ScrollView, Text, View, TextInput, } from 'react-native'
import STYLES from '../STYLES';
import PhoneInput from 'react-native-phone-number-input';
import { Checkbox, TouchableRipple } from 'react-native-paper';
import { StyleSheet } from "react-native";
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import COLORS from '../utilities/color/Color';
import Button1 from '../comp/Button1';
import { SvgXml } from 'react-native-svg';
import Svgs from '../utilities/svgs/Svgs';

const TextArea1 = props => {
    return (
        <TextInput
            multiline={true}
            numberOfLines={6}
            placeholder={props.placeholder} style={[{
                borderColor: COLORS.grey1A1A1A, borderWidth: 1, //width: '90%',
                borderRadius: 6,
                paddingLeft: '5%',
                textAlignVertical: 'top',
                backgroundColor: COLORS.whiteFFFFFF,
                //height: 60
            }, , STYLES.fontSize16_grey1A1A1A_56_RobotoRegular]} />
    );
};

TextArea1.propTypes = {

};

export default TextArea1;