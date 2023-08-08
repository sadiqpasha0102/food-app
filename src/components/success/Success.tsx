import { SafeAreaView, View, Text } from "react-native"
import Svg, { Path } from "react-native-svg"
import { SuccessStyles as Styles } from "./SuccessStyles"






export const Success = ({navigation}) => {
    return (
        <SafeAreaView>
            <View style={Styles.parent}>
                <TickSvg />
                <Text style={{ marginTop: 25, fontSize: 30, fontWeight: 'bold' }}>Success</Text>
                <View style={Styles.bodyText}>
                    <Text style={{fontSize: 20}}>Please check your email to create </Text>
                    <Text style={{fontSize: 20}}>a new password</Text>
                </View>
                <Text style={Styles.footerText}>Can't get email? <Text style={{color: '#32B768'}} onPress={() => navigation.goBack()}> Resubmit</Text></Text>
            </View>
        </SafeAreaView>
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