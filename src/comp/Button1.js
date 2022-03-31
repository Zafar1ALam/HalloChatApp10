import React from 'react';
import PropTypes from 'prop-types';
import { TouchableRipple } from 'react-native-paper';
import { Text } from 'react-native';
import STYLES from '../STYLES';
import COLORS from '../utilities/color/Color';

const Button1 = props => {
    return (
        <TouchableRipple style={{
            paddingVertical: '5%',
            borderRadius: 25,
            justifyContent: 'center',
            alignItems: 'center',

            backgroundColor: COLORS.orangeF59823
        }} onPress={props.onPress}>
            <Text style={STYLES.fontSize16_FFFFFF_Arial_Regular}>{props.text}</Text>
        </TouchableRipple>
    );
};

Button1.propTypes = {

};

export default Button1;