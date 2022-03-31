import React from 'react';
import PropTypes from 'prop-types';

import { StyleSheet, Dimensions } from "react-native";
import COLORS from './utilities/color/Color'


const STYLES = StyleSheet.create({
    container: {
        height: Dimensions.get('window').height,
        width: Dimensions.get('window').width,
        flex: 1,
        //  paddingHorizontal: '14%',
        //   backgroundColor: 'yellow',
        //   paddingVertical: '3%',
        backgroundColor: COLORS.whiteFFFFFF,
        //  backgroundColor: 'red',
        // alignItems: 'center'

    },
    ph_5_pv_5_container: {
        height: Dimensions.get('window').height,
        width: Dimensions.get('window').width,
        flex: 1,
        paddingHorizontal: '5%',
        paddingVertical: '5%',
        backgroundColor: COLORS.whiteFFFFFF,
    },
    ph_10_pv_5_container: {
        height: Dimensions.get('window').height,
        width: Dimensions.get('window').width,
        flex: 1,
        paddingHorizontal: '10%',
        paddingVertical: '5%',
        backgroundColor: COLORS.whiteFFFFFF,
    },
    fontSize36_darkcharcoal333333_Playball_Regular: {
        fontSize: 36,
        color: COLORS.darkcharcoal333333,
        fontFamily: 'Playball-Regular',
    },//
    fontSize31_darkcharcoal333333_Playball_Regular: {
        fontSize: 31,
        color: COLORS.darkcharcoal333333,
        fontFamily: 'Playball-Regular',
    },
    fontSize28_darkcharcoal333333_Playball_Regular: {
        fontSize: 28,
        color: COLORS.darkcharcoal333333,
        fontFamily: 'Playball-Regular',
    },
    fontSize28_orangeF59823_Nunito_Bold: {
        fontSize: 28,
        color: COLORS.orangeF59823,
        fontFamily: 'Nunito-Bold',
    },
    fontSize22_FFFFFF_Arial_bold: {
        fontSize: 22,
        color: COLORS.whiteFFFFFF,
        fontFamily: 'Arial',
        fontWeight: 'bold'
    },//
    fontSize22_black000000_Arial_bold: {
        fontSize: 22,
        color: COLORS.black000000,
        fontFamily: 'Arial',
        fontWeight: 'bold'
    },//
    fontSize20_FFFFFF_Arial_bold: {
        fontSize: 20,
        color: COLORS.whiteFFFFFF,
        fontFamily: 'Arial',
        fontWeight: 'bold'
    },
    fontSize20_black000000_Arial_bold: {
        fontSize: 20,
        color: COLORS.black000000,
        fontFamily: 'Arial',
        fontWeight: 'bold'
    },//
    fontSize20_brown411F1F_20_Arial_bold: {
        fontSize: 20,
        color: COLORS.brown411F1F_20,
        fontFamily: 'Arial',
        fontWeight: 'bold'
    },//
    fontSize20_black000000_SF_UI_Display_Regular: {
        fontSize: 20,
        color: COLORS.black000000,
        //fontFamily: 'Roboto-Regular',
        //SF UI Display Regular nhi mil rha
    },//
    // BLACK1D2226_60

    fontSize18_black000000_Nunito_Bold: {
        fontSize: 18,
        color: COLORS.black000000,
        fontFamily: 'Nunito-Bold',
    },//
    fontSize18_BLACK1D2226_60_RobotoRegular: {
        fontSize: 18,
        color: COLORS.BLACK1D2226_60,
        fontFamily: 'Roboto-Regular',
    },
    fontSize16_orangeF59823_Nunito_SemiBold: {
        fontSize: 16,
        color: COLORS.orangeF59823,
        fontFamily: 'Nunito-SemiBold',
    }
    ,//
    fontSize16_grey1A1A1A_56_RobotoRegular: {
        fontSize: 16,
        color: COLORS.grey1A1A1A_56,
        fontFamily: 'Roboto-Regular',
    },//
    fontSize16_FFFFFF_Arial_Regular: {
        fontSize: 16,
        color: COLORS.whiteFFFFFF,
        fontFamily: 'Arial',
        fontWeight: '100'
    },
    fontSize15_FFFFFF_Arial_bold: {
        fontSize: 15,
        color: COLORS.whiteFFFFFF,
        fontFamily: 'Arial',
        fontWeight: 'bold'
    },//
    fontSize14_707070_Segoe_UI_Regular: {
        fontSize: 16,
        color: COLORS.grey707070,
        // fontFamily: 'Arial',
        //Segoe UI Reguler nhi mil rha

    },
    fontSize14_black000000_SF_UI_Display_Light: {
        fontSize: 14,
        color: COLORS.black000000,
        //fontFamily: 'Roboto-Regular',
        //SF UI Display Light nhi mil rha
    },//
    fontSize14_greyC4C4C4_Nunito_Bold: {
        fontSize: 14,
        color: COLORS.greyC4C4C4,
        fontFamily: 'Nunito-Bold',
    },
    fontSize14_black000000_Nunito_Bold: {
        fontSize: 14,
        color: COLORS.black000000,
        fontFamily: 'Nunito-Bold',
    },
    fontSize13_black000000_27_Montserrat_Regular: {
        fontSize: 13,
        color: COLORS.black000000_27,
        fontFamily: 'Montserrat-Regular',
    },
    fontSize12_black000000_55_Nunito_Bold: {
        fontSize: 14,
        color: COLORS.black000000_55,
        fontFamily: 'Nunito-Bold',
    },

});

export default STYLES;