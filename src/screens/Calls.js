import React, { useRef, useState } from 'react';
import PropTypes from 'prop-types';
import { Image, ScrollView, Text, View, FlatList, Modal, TouchableOpacity } from 'react-native'
import STYLES from '../STYLES';
import PhoneInput from 'react-native-phone-number-input';
import { Checkbox, TouchableRipple } from 'react-native-paper';
import { StyleSheet } from "react-native";
import COLORS from '../utilities/color/Color';
import Button1 from '../comp/Button1';
import { Searchbar, FAB } from 'react-native-paper';
import Entypo from 'react-native-vector-icons/Entypo';
import { SvgXml } from 'react-native-svg';
import Svgs from '../utilities/svgs/Svgs';
const Calls = ({ navigation }) => {
    const [isModalVisible, setModalVisible] = useState(false);

    const toggleModal = () => {
        { console.log('bb') }
        setModalVisible(!isModalVisible);
    };
    const [callFlatlist, setCallFlatlist] = useState([
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
    const [modalCallFlatlist, setModalCallFlatlist] = useState([
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
        //  <ScrollView>
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
                <Text style={[STYLES.fontSize15_FFFFFF_Arial_bold,
                { width: '20%' }]}>CALL HISTORY </Text>
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

            </View>
            <View style={{
                flex: 0.92, //backgroundColor: 'green'
            }}>
                <FlatList
                    showsVerticalScrollIndicator={false}
                    // style={{
                    //     marginTop: '7%', marginRight: '-3%'
                    // }}
                    data={callFlatlist}
                    renderItem={({ item }) => {
                        return (

                            <View style={{
                                height: 70,
                                marginHorizontal: "5%",
                                flexDirection: 'row',
                                alignItems: 'center',
                                // borderBottomWidth: 1,
                                // borderBottomColor: COLORS.grey707070_24
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

                                    </View>

                                    <Text
                                        style={STYLES.fontSize13_black000000_27_Montserrat_Regular}
                                    >
                                        {item.time}</Text>
                                </View>
                                <SvgXml xml={Svgs.phone} />

                            </View>

                        )
                    }}
                    keyExtractor={(item) => item.id}

                />

                {/* Fab */}
                <FAB
                    color={COLORS.whiteFFFFFF}
                    style={styles.fab}
                    small={false}
                    icon="plus"
                    onPress={toggleModal}
                />


                <Modal visible={isModalVisible} transparent={true}>

                    <View style={{
                        flex: 1, justifyContent: 'center',
                        backgroundColor: COLORS.grey494949_28,
                        paddingHorizontal: '7%',
                    }}>
                        <View style={{
                            flex: 0.7,
                            // width: '100%',
                            // alignSelf: 'center',
                            paddingHorizontal: "5%",
                            //alignItems: 'center',
                            backgroundColor: 'white',
                            paddingVertical: '3%'
                            , borderRadius: 20,
                        }}>
                            <View style={{
                                flexDirection: 'row', flex: 0.1,
                                //backgroundColor: 'green',
                                alignItems: "center", justifyContent: 'space-between'
                                // width: '100%'
                            }}>
                                <Text style={STYLES.fontSize20_black000000_SF_UI_Display_Regular}>Call History</Text>
                                <TouchableOpacity onPress={toggleModal}>
                                    <Entypo name="cross" size={30} style={{

                                    }} />
                                </TouchableOpacity>
                            </View>


                            <View style={{
                                flex: 0.9, //width: '80%',
                                // backgroundColor: 'yellow'
                            }}>

                                <FlatList
                                    showsVerticalScrollIndicator={false}
                                    data={modalCallFlatlist}
                                    renderItem={({ item }) => {
                                        console.log(item.userName)
                                        console.log(item.id)
                                        return (
                                            <View style={{
                                                //backgroundColor: 'green',
                                                //  flex: 1,
                                                //paddingHorizontal: '4%',
                                                // backgroundColor: 'blue',
                                                flexDirection: 'row', height: 70,
                                                //width: '100%',
                                                // borderColor: 'grey',// borderWidth: 1,
                                                alignItems: 'center'
                                            }} >

                                                <Image
                                                    style={{
                                                        borderColor: COLORS.orangeF59823,
                                                        borderWidth: 3, borderRadius: 510
                                                    }}
                                                    source={require('../utilities/image/humanBeing.png')} />
                                                <View style={{
                                                    flex: 1, //

                                                    //                                                    backgroundColor: 'red',
                                                    marginHorizontal: '10%',
                                                    height: "100%",
                                                    justifyContent: 'space-evenly'
                                                }}>
                                                    <Text style={
                                                        STYLES.fontSize18_black000000_Nunito_Bold
                                                    }>{item.name}</Text>
                                                    <Text style={STYLES.fontSize12_black000000_55_Nunito_Bold}>{item.time}</Text>
                                                </View>

                                                {item.usercallvideo == "call" ?
                                                    <SvgXml xml={Svgs.phone} />
                                                    : <SvgXml xml={Svgs.vedio}
                                                    />}


                                            </View>
                                        )
                                    }}
                                    keyExtractor={(item) => item.id}


                                />

                            </View>

                        </View>
                    </View>
                </Modal>




            </View>

        </View>
        //  </ScrollView >
    );
};

Calls.propTypes = {

};

export default Calls;


const styles = StyleSheet.create({
    fab: {
        backgroundColor: COLORS.orangeF59823,
        position: 'absolute',
        margin: 16,
        right: 0,
        bottom: 0,
    },
})