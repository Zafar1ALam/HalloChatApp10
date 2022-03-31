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
const Chat = ({ navigation }) => {
    const [chatFlatlist, setChatFlatlist] = useState([
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
        {
            id: 3,
            name: "Jessica",
            time: "2 hours",
            image: ""
        },
        {
            id: 4,
            name: "Jessica",
            time: "2 hours",
            image: ""
        },
        {
            id: 5,
            name: "Jessica",
            time: "2 hours",
            image: ""
        }, {
            id: 6,
            name: "Jessica",
            time: "2 hours",
            image: ""
        },
        {
            id: 7,
            name: "Jessica",
            time: "2 hours",
            image: ""
        },
        {
            id: 8,
            name: "Jessica",
            time: "2 hours",
            image: ""
        },
        {
            id: 9,
            name: "Jessica",
            time: "2 hours",
            image: ""
        },
        {
            id: 10,
            name: "Jessica",
            time: "2 hours",
            image: ""
        }, {
            id: 11,
            name: "Jessica",
            time: "2 hours",
            image: ""
        },
    ])

    return (
        //    <ScrollView>
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
                <Text style={STYLES.fontSize20_FFFFFF_Arial_bold}>CHAT </Text>
                <Searchbar
                    iconColor={COLORS.orangeF59823}
                    style={{
                        width: '70%', borderRadius: 20, height: '80%',
                        //  backgroundColor: 'red'
                    }}
                    placeholder="Search"
                    inputStyle={[STYLES.fontSize20_brown411F1F_20_Arial_bold,
                    { marginLeft: -10 }]}
                //  onChangeText={onChangeSearch}
                //  value={searchQuery}
                />
                <SvgXml xml={`<svg xmlns="http://www.w3.org/2000/svg" width="21.711" height="21.711" viewBox="0 0 21.711 21.711">
  <g id="Icon_feather-settings" data-name="Icon feather-settings" transform="translate(-0.5 -0.5)">
    <g id="Group_9679" data-name="Group 9679">
      <path id="Path_2143" data-name="Path 2143" d="M18.876,16.188A2.688,2.688,0,1,1,16.188,13.5,2.688,2.688,0,0,1,18.876,16.188Z" transform="translate(-4.833 -4.833)" fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
    </g>
    <g id="Group_9680" data-name="Group 9680">
      <path id="Path_2144" data-name="Path 2144" d="M17.985,14.043a1.478,1.478,0,0,0,.3,1.631l.054.054A1.793,1.793,0,1,1,15.8,18.263l-.054-.054a1.49,1.49,0,0,0-2.527,1.057v.152a1.792,1.792,0,1,1-3.584,0v-.081a1.478,1.478,0,0,0-.968-1.353,1.478,1.478,0,0,0-1.631.3l-.054.054A1.793,1.793,0,1,1,4.448,15.8l.054-.054a1.49,1.49,0,0,0-1.057-2.527H3.292a1.792,1.792,0,1,1,0-3.584h.081a1.478,1.478,0,0,0,1.353-.968,1.478,1.478,0,0,0-.3-1.631l-.054-.054A1.793,1.793,0,1,1,6.911,4.448l.054.054A1.478,1.478,0,0,0,8.6,4.8h.072a1.478,1.478,0,0,0,.9-1.353V3.292a1.792,1.792,0,1,1,3.584,0v.081A1.49,1.49,0,0,0,15.674,4.43l.054-.054a1.793,1.793,0,1,1,2.536,2.536l-.054.054a1.478,1.478,0,0,0-.3,1.631v.072a1.478,1.478,0,0,0,1.353.9h.152a1.792,1.792,0,1,1,0,3.584h-.081s-1.121.354-1.353.9Z" fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
    </g>
  </g>
</svg>

`} />
            </View>
            <View style={{
                flex: 0.92, //backgroundColor: 'green'
            }}>
                <FlatList
                    showsVerticalScrollIndicator={false}
                    // style={{
                    //     marginTop: '7%', marginRight: '-3%'
                    // }}
                    data={chatFlatlist}
                    renderItem={({ item }) => {
                        return (

                            <View style={{
                                height: 70,
                                marginHorizontal: "5%",
                                flexDirection: 'row',
                                alignItems: 'center',
                                borderBottomWidth: 1,
                                borderBottomColor: COLORS.grey707070_24
                            }}>
                                <View style={{ //backgroundColor: "red"
                                }}>
                                    <Image
                                        style={{
                                            //resizeMode: 'contain',
                                            borderWidth: 3,
                                            borderRadius: 50,
                                            borderColor: COLORS.orangeF59823
                                        }}

                                        source={require('../utilities/image/humanBeing.png')} />
                                    <SvgXml xml={Svgs.greenDot} style={{
                                        bottom: '10%', right: '6%',
                                        position: 'absolute'
                                    }} />
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
                                        <SvgXml xml={Svgs.pinkDot} />
                                    </View>

                                    <Text
                                        style={STYLES.fontSize13_black000000_27_Montserrat_Regular}
                                    >
                                        Typing...</Text>
                                </View>
                                <Text style={[{
                                    alignSelf: "flex-start",
                                    marginTop: "5%"
                                }, STYLES.fontSize12_black000000_55_Nunito_Bold]}>{item.time}</Text>

                            </View>

                        )
                    }}
                    keyExtractor={(item) => item.id}

                />
                <FAB

                    color={COLORS.whiteFFFFFF}
                    style={styles.fab}
                    small={false}
                    icon="plus"
                    onPress={() => console.log('Pressed')}
                />

            </View>

        </View>
        //</ScrollView >
    );
};

Chat.propTypes = {

};

export default Chat;


const styles = StyleSheet.create({
    fab: {
        backgroundColor: COLORS.orangeF59823,
        position: 'absolute',
        margin: 16,
        // right: 0,
        // bottom: 0,
        bottom: '0%',
        right: '0%'
    },
})