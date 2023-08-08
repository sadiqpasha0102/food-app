import { View, Text, Pressable, Actionsheet, useDisclose } from "native-base"
import { registrationPageStyles as Styles } from "./RegistrationPageStyles"
import { Dimensions, SafeAreaView, ScrollView, Modal, TouchableOpacity } from "react-native"
import Svg, { Path } from "react-native-svg"
import React, { useEffect, useState } from "react"
import { TextInput } from "react-native-gesture-handler"

const validateData = (details: any) => {
    if (details.name.length && details.emailId.length && details.password.length) {
        return true
    }
    return false
}

export const RegistrationPage = ({ navigation, route }) => {
    const [currentActive, setCurrentActive] = useState(true);
    const [details, setDetails] = useState({
        name: '',
        emailId: '',
        password: ''
    });
    const [modalVisible, setModalVisible] = useState(false);
    const [formStatus, setFormStatus] = useState(false);

    useEffect(() => {
        const isFormFilled = validateData(details)
        setFormStatus(isFormFilled)
    }, [details])

    useEffect(() => {
        if(route.params?.data) {
            setModalVisible(true);
            setCurrentActive(false)
        }
    }, [route.params?.data])

    return (
        <SafeAreaView>
            <View style={Styles.parent}>
                <View style={Styles.imgWrapper}>
                    <BgSvgIcon style={Styles.bgSvg} />
                    <BoxSvgIcon style={Styles.boxSvg} />
                    <BurgerSvg style={Styles.burgerSvg} />
                    <TickSvg style={Styles.tickSvg} />
                </View>
                <View style={Styles.content}>
                    <Text style={Styles.contentHeader}>Welcome</Text>
                    <Text>Before enjoying Foodmedia services</Text>
                    <Text>Please register first</Text>
                </View>
                <Pressable onPress={() => {setCurrentActive(true), setModalVisible(true)}} style={Styles.createBtn}>
                    <Text style={Styles.accountText}>Create Account</Text>
                </Pressable>
                <Modal animationType={"fade"}
                    transparent={true}
                    visible={modalVisible}
                    onRequestClose={() => {
                        setModalVisible(false);
                    }}
                >
                    <TouchableOpacity
                        activeOpacity={1}
                        style={Styles.container}
                        onPressOut={() => setModalVisible(false)}
                        >
                    </TouchableOpacity>
                    <View style={Styles.modalBottom}>
                        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{marginLeft: 20, width: '100%'}}>
                            <View>
                                <Pressable onPress={() => setCurrentActive(true)}>
                                    <Text>Create Account</Text>
                                    {currentActive ? (
                                        <View style={Styles.underLine}></View>
                                    ) :
                                        (
                                            <></>
                                        )
                                    }
                                </Pressable>
                            </View>
                            <View style={{ marginLeft: 20 }}>
                                <Pressable onPress={() => {setCurrentActive(false)}}>
                                    <Text>Login</Text>
                                    {!currentActive ? (
                                        <View style={Styles.underLine}></View>
                                    ) :
                                        (
                                            <></>
                                        )
                                    }
                                </Pressable>
                            </View>
                        </ScrollView>
                        <View style={{paddingBottom: 60}}>
                            {
                                currentActive ?
                                    (<View style={Styles.nameWrapper}>
                                        <Text>Full Name</Text>
                                        <TextInput
                                            style={Styles.nameInput}
                                            value={details.name}
                                            onChangeText={(val) => {
                                                setDetails(prevState => ({
                                                    ...prevState,
                                                    name: val
                                                }))
                                            }}
                                            placeholder="Enter name"
                                        />
                                    </View>) :
                                    (<></>)
                            }


                            <View style={Styles.nameWrapper}>
                                <Text>Email address</Text>
                                <TextInput
                                    style={Styles.nameInput}
                                    value={details.emailId}
                                    onChangeText={(val) => {
                                        setDetails(prevState => ({
                                            ...prevState,
                                            emailId: val
                                        }))
                                    }}
                                    placeholder="Enter emailId"
                                />
                            </View>

                            <View style={Styles.nameWrapper}>
                                <Text>Password</Text>
                                <TextInput
                                    secureTextEntry
                                    style={Styles.nameInput}
                                    value={details.password}
                                    onChangeText={(val) => {
                                        setDetails(prevState => ({
                                            ...prevState,
                                            password: val
                                        }))
                                    }}
                                    placeholder="Enter password"
                                />
                            </View>
                            {
                                !currentActive ?
                                    (<Pressable onPress={() => {navigation.navigate('forgotPassword', { emailId: details.emailId }), setModalVisible(false)}}>
                                        <Text style={Styles.forgotPassword}>Forget Password?</Text>
                                    </Pressable>) :
                                    (<></>)
                            }
                            <Pressable disabled={currentActive ?!formStatus : (details.emailId.length && details.password.length ? false : true)} onPress={() => {setModalVisible(false), navigation.navigate('success')}}
                             style={[Styles.createBtn, (currentActive ?!formStatus : (details.emailId.length && details.password.length ? false : true)) && { opacity: 0.3 }]}>
                                <Text style={Styles.accountText}>{currentActive ? 'Registration' : 'Login'}</Text>
                            </Pressable>
                        </View>
                    </View>
                </Modal>
                <Pressable onPress={() => {setCurrentActive(false), setModalVisible(true)}} style={Styles.loginBtn}>
                    <Text style={Styles.accountText}>Login</Text>
                </Pressable>
                <View style={Styles.tAndC}>
                    <Text style={{ textAlign: 'center' }}>By logging in or registering, you have agreed to the Terms and Conditions and Privacy Policy.</Text>
                </View>
            </View>
        </SafeAreaView>
    )
}

const BgSvgIcon = (props: any) => {
    return (
        <View>
            <Svg
                xmlns="http://www.w3.org/2000/svg"
                width={340}
                height={300}
                viewBox="0 0 265 212"
                fill="none"
                {...props}
            >
                <Path
                    d="M22.628 192.341S-3.278 175.34.348 137.576c4.014-41.817 20.49-46.388 32.959-52.527C47.459 78.08 59.57 76.876 75.8 42.432 97.228-3.04 135.785.044 150.38.044c49.556 0 48.962 49.137 72.886 73.595 22.524 23.018 71.744 72.917 15.996 117.118-29.028 23.011-170.216 30.331-216.633 1.584z"
                    fill="#B3FFD1"
                />
            </Svg>

        </View>
    )
}

const BoxSvgIcon = (props: any) => {
    return (
        <Svg
            xmlns="http://www.w3.org/2000/svg"
            width={141}
            height={216}
            viewBox="0 0 141 156"
            fill="none"
            {...props}
        >
            <Path
                d="M135.385 155.768h-129a5.505 5.505 0 01-5.507-5.507V47.333h140.014V150.26a5.505 5.505 0 01-5.507 5.507z"
                fill="#32B768"
            />
            <Path
                d="M114.324 18.845H27.446L.878 47.333h140.014l-26.568-28.488z"
                fill="#0E7F3D"
            />
            <Path
                d="M114.324 18.846H27.445V4.732A4.143 4.143 0 0131.59.588h78.592a4.143 4.143 0 014.143 4.144v14.114z"
                fill="#32B768"
            />
            <Path
                d="M25 101.155c3.534 0 6.399-3.95 6.399-8.82 0-4.872-2.865-8.821-6.398-8.821-3.534 0-6.399 3.949-6.399 8.82 0 4.872 2.865 8.821 6.399 8.821z"
                fill="#0E7F3D"
            />
            <Path
                d="M25 132.576c-.99 0-1.79-.8-1.79-1.79V96.692h3.573v34.102c0 .982-.8 1.782-1.783 1.782zM45.208 132.576c-.99 0-1.79-.8-1.79-1.79V96.692h3.573v34.102c0 .982-.8 1.782-1.783 1.782z"
                fill="#0E7F3D"
            />
            <Path
                d="M51.606 85.198v9.354a6.06 6.06 0 01-6.055 6.055h-.686a6.056 6.056 0 01-6.055-6.055v-9.354a1.142 1.142 0 011.135-1.143 1.15 1.15 0 011.142 1.143v7.084c0 .762.625 1.386 1.387 1.386h.228c.762 0 1.386-.624 1.386-1.386v-7.084a1.15 1.15 0 011.143-1.143 1.142 1.142 0 011.135 1.143v7.13c0 .769.624 1.394 1.394 1.394h.198c.77 0 1.386-.625 1.386-1.394v-7.13a1.15 1.15 0 011.143-1.143c.54 0 .99.382 1.112.884 0 .077.007.168.007.26z"
                fill="#0E7F3D"
            />
        </Svg>
    )
}

const BurgerSvg = (props: any) => {
    return (
        <Svg
            xmlns="http://www.w3.org/2000/svg"
            width={159}
            height={84}
            viewBox="0 0 159 84"
            fill="none"
            {...props}
        >
            <Path
                d="M118.11 78.22l-15.363 5.751L76.217 82l-6.23-1.608-1.608-.41 6.71-3.413 36.181 1.394 6.71.251.13.008z"
                fill="#E06738"
            />
            <Path
                d="M158.282 70.467l-22.508-1.295-17.138 3.595-7.374 5.203-.152.114-8.371 5.895-26.34-5.3-6.413 1.728-13.314 3.58-17.283-4.144-29.95 2.3.13-14.685-9.43-12.872h14.739c4.463-2.407 10.968-3.07 10.968-3.07l9.018 4.555 82.248.45 14.792-4.67 26.378 18.616z"
                fill="#FDF0B9"
            />
            <Path
                d="M119.58 38.193H30.606c-.792 4.86 0 18.685 0 18.685 0 7.77 19.919 14.06 44.49 14.06 24.573 0 44.491-6.299 44.491-14.06.61-11.014-.007-18.685-.007-18.685z"
                fill="#EDB82C"
            />
            <Path
                d="M118.476 35.931c4.219-.22 7.67 4.228 6.245 6.932-1.424 2.704-6.68 4.737-8.416 5.248-3.946 1.165-1.089 7.244-8.546 5.446-3.855-.93-4.982 1.676-7.122 3.77-2.133 2.095-7.83.633-13.17-1.675s-9.97 4.189-15.127 3.564c-5.157-.624-9.788-3.145-13.17-1.889-3.382 1.257-5.34 0-9.437-3.983-4.098-3.984-8.189 1.47-11.928 0-3.74-1.47-2.316-5.028-6.406-6.916-4.098-1.89-8.189-2.583-8.189-4.929 0-5.301 8.12-6.626 8.12-6.626l87.146 1.058z"
                fill="#E06738"
            />
            <Path
                d="M119.58 29.876c0 16.3-19.918 19.85-44.49 19.85-24.573 0-44.491-3.55-44.491-19.85S50.517.36 75.089.36c24.573 0 44.491 13.216 44.491 29.516z"
                fill="#EDB82C"
            />
            <Path
                d="M52.947 9.638c.761 0 1.379-.31 1.379-.693 0-.382-.617-.693-1.379-.693-.761 0-1.379.31-1.379.693 0 .383.618.693 1.38.693zM61.691 14.978c.762 0 1.379-.31 1.379-.693 0-.383-.617-.693-1.379-.693-.761 0-1.378.31-1.378.693 0 .383.617.693 1.378.693zM67.434 9.638c.762 0 1.38-.31 1.38-.693 0-.382-.618-.693-1.38-.693-.76 0-1.378.31-1.378.693 0 .383.617.693 1.379.693zM77.108 4.68c.761 0 1.379-.31 1.379-.693 0-.383-.617-.693-1.379-.693-.761 0-1.379.31-1.379.693 0 .383.618.693 1.38.693zM84.634 11.688c.761 0 1.378-.31 1.378-.694 0-.382-.617-.693-1.378-.693-.762 0-1.38.31-1.38.693 0 .383.618.694 1.38.694zM99.502 11.688c.761 0 1.379-.31 1.379-.694 0-.382-.618-.693-1.38-.693-.76 0-1.378.31-1.378.693 0 .383.617.694 1.379.694zM46.534 21.323c.761 0 1.378-.31 1.378-.694 0-.382-.617-.693-1.378-.693-.762 0-1.38.31-1.38.694 0 .382.618.693 1.38.693zM62.88 27.82c.76 0 1.378-.31 1.378-.693 0-.383-.617-.693-1.378-.693-.762 0-1.38.31-1.38.693 0 .383.618.693 1.38.693zM75.722 18.642c.761 0 1.378-.31 1.378-.693 0-.383-.617-.693-1.378-.693-.762 0-1.379.31-1.379.693 0 .383.617.693 1.379.693zM84.634 25.74c.761 0 1.378-.31 1.378-.693 0-.383-.617-.693-1.378-.693-.762 0-1.38.31-1.38.693 0 .383.618.693 1.38.693zM98.367 22.953c.761 0 1.379-.31 1.379-.693 0-.383-.618-.694-1.38-.694-.76 0-1.378.31-1.378.694 0 .382.617.693 1.379.693z"
                fill="#fff"
            />
            <Path
                d="M25.655 68.548l13.726-7.038 16.415 7.19s6.528-.731 9.544-1.013c3.016-.282 7.282-.716 9.003.213 1.73.93 4.593 3.016 6.756 2.91 2.163-.107 10.04-4.037 13.208-2.91 3.169 1.127 13.36.503 16.803 0l-17.092 5.957H39.442l-13.787-5.31z"
                fill="#FDF0B9"
            />
            <Path
                d="M158.282 70.468l-20.878 8.157-19.294-.403-.129-.008-6.711-.251 7.373-5.195 17.138-3.595 22.501 1.295z"
                fill="#E06738"
            />
            <Path
                d="M111.674 64.534a.382.382 0 01-.122-.746c.091-.03 9.011-2.895 15.935-2.628a.377.377 0 01.365.396c-.007.213-.198.358-.396.366-6.794-.267-15.584 2.559-15.676 2.59-.03.022-.068.022-.106.022zM35.977 63.102a.436.436 0 01-.19-.046c-6.59-3.717-13.384-3.9-13.452-3.9a.377.377 0 01-.374-.388c.008-.213.19-.35.389-.373.068 0 7.053.19 13.81 3.999a.378.378 0 01-.183.708zM18.762 69.92c-.03 0-.053 0-.084-.008l-9.186-2.095a.383.383 0 01.168-.746l9.186 2.094a.383.383 0 01.29.457.396.396 0 01-.374.298z"
                fill="#000"
            />
        </Svg>
    )
}

const TickSvg = (props: any) => {
    return (
        <Svg
            xmlns="http://www.w3.org/2000/svg"
            width={100}
            height={100}
            viewBox="0 0 84 84"
            fill="none"
            {...props}
        >
            <Path d="M41.8541 83.1974C64.7597 83.1974 83.3283 64.6287 83.3283 41.7231C83.3283 18.8175 64.7597 0.248856 41.8541 0.248856C18.9485 0.248856 0.379822 18.8175 0.379822 41.7231C0.379822 64.6287 18.9485 83.1974 41.8541 83.1974Z" fill="#32B768" />
            <Path d="M35.8597 58.5708L20.1916 46.0257C18.554 44.7079 18.036 42.3619 19.1329 40.5719C20.4582 38.4011 23.3298 37.9517 25.2493 39.4903L39.493 50.8929L57.827 28.3848C59.2666 26.6177 61.8716 26.3511 63.6387 27.7907C65.4058 29.2303 65.6724 31.8353 64.2328 33.6024L44.6496 57.6339C42.4712 60.3074 38.5485 60.7264 35.8597 58.5708Z" fill="white" />
        </Svg>
    )
}
