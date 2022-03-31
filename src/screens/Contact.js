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

const Contact = ({ navigation }) => {
    const [contactFlatlist, setContactFlatlist] = useState([
        {
            id: 1,
            name: "Jessica",
            phone: "+92 300 0000000",
            image: ""
        },
        {
            id: 2,
            name: "Jessica",
            phone: "+92 300 0000000",
            image: ""
        },
        {
            id: 3,
            name: "Jessica",
            phone: "+92 300 0000000",
            image: ""
        },
        {
            id: 4,
            name: "Jessica",
            phone: "+92 300 0000000",
            image: ""
        },
        {
            id: 5,
            name: "Jessica",
            phone: "+92 300 0000000",
            image: ""
        }, {
            id: 6,
            name: "Jessica",
            phone: "+92 300 0000000",
            image: ""
        },
        {
            id: 7,
            name: "Jessica",
            phone: "+92 300 0000000",
            image: ""
        },
        {
            id: 8,
            name: "Jessica",
            phone: "+92 300 0000000",
            image: ""
        },
        {
            id: 9,
            name: "Jessica",
            phone: "+92 300 0000000",
            image: ""
        },
        {
            id: 10,
            name: "Jessica",
            phone: "+92 300 0000000",
            image: ""
        }, {
            id: 11,
            name: "Jessica",
            phone: "+92 300 0000000",
            image: ""
        },
    ])
    return (
        // <ScrollView>
        <View style={STYLES.container}>
            <View style={{
                flex: 0.08,
                backgroundColor: COLORS.orangeF59823,
                flexDirection: "row", justifyContent: 'space-evenly',
                alignItems: 'center',// paddingVertical: '5%',
                borderBottomEndRadius: 24,
                borderBottomLeftRadius: 24,
                paddingHorizontal: '2%',
                height: "100%"
            }}>
                <Text style={STYLES.fontSize22_FFFFFF_Arial_bold}>Contact </Text>
                <Searchbar
                    iconColor={COLORS.orangeF59823}
                    style={{
                        width: '70%', justifyContent: "center",
                        borderRadius: 20, height: '82%',
                        flex: 1,
                        //marginBottom: '5%'
                        //  backgroundColor: 'red'
                    }}
                    placeholder="Search"
                    inputStyle={[STYLES.fontSize20_brown411F1F_20_Arial_bold,
                    { marginLeft: -10 }]}
                //  onChangeText={onChangeSearch}
                //  value={searchQuery}
                />

            </View>

            <View style={{
                flex: 0.92,// backgroundColor: 'red',
                paddingHorizontal: '5%'
            }}>
                <Text style={[STYLES.fontSize22_black000000_Arial_bold,
                { marginTop: '3%' }]}>All Contacts</Text>
                <FlatList
                    showsVerticalScrollIndicator={false}
                    style={{
                        marginTop: '2%'
                    }}
                    data={contactFlatlist}
                    renderItem={({ item }) => {
                        return (

                            <View style={{
                                height: 70,
                                //  marginHorizontal: "5%",
                                flexDirection: 'row',
                                alignItems: 'center',
                                //borderBottomWidth: 1,
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
                                        {item.phone}</Text>
                                </View>


                            </View>

                        )
                    }}
                    keyExtractor={(item) => item.id}

                />
            </View>
        </View>
        // </ScrollView>
    );
};

Contact.propTypes = {

};

export default Contact;