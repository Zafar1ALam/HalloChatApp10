import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Image, Text, View } from 'react-native'
import STYLES from '../STYLES';
const Splash = ({ navigation }) => {
    const [stateIsVisible, setStateIsVisible] = useState(true)
    useEffect(() => {
        {
            if (!stateIsVisible) {
                navigation.navigate("WelcomeToHello")
            }
            else {
                setTimeout(() => {
                    setStateIsVisible(false)
                }
                    , 4000);
            }
        }

    }, [stateIsVisible])
    return (
        <View style={STYLES.container}>
            <View style={{
                flex: 0.2,// backgroundColor: 'red'
            }}>
                <Image
                    style={{
                        // resizeMode: 'cover',
                        position: 'absolute', top: '-120%',
                        left: '-70%'
                    }}
                    source={require('../utilities/image/dimhallo.png')} />
            </View>
            <View style={{
                flex: 0.6,
                justifyContent: 'center', alignItems: 'center',
                // backgroundColor: 'green'
            }}>

                <Image source={
                    require('../utilities/image/splashhallo.png')} />
            </View>
            <View style={{
                flex: 0.2,// backgroundColor: 'red'
            }}>
                <Image
                    style={{
                        // resizeMode: 'cover',
                        position: 'absolute', bottom: '-130%',
                        right: '-60%'
                    }}
                    source={require('../utilities/image/dimhallo.png')} />
            </View>
        </View>
    );
};



export default Splash;