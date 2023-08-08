import { View, Text } from "native-base"
import { Pressable, SafeAreaView } from "react-native"
import { ForgotPasswordStyles as Styles } from "./ForgotPasswordStyles"
import { TextInput } from "react-native-gesture-handler"
import { useState } from "react"

const validateGmail = (gmail) => {
    const gmailExpression = /[a-z0-9]+@gmail.com/
    if(gmailExpression.test(gmail)) {
        return true;
    }
    return false;
}

export const ForgotPassword = ({navigation}) => {

    const [emailId, setEmailId] = useState('');
    const [isValid, setIsValid] = useState(undefined);
    return (
        <SafeAreaView>
            <View style={Styles.parent}>
                <View>
                    <Text style={Styles.forgotText}>Forgot Password</Text>
                    <Text style={Styles.enterText}>Enter your registered email below</Text>
                </View>
                <View style={Styles.emailWrapper}>
                    <Text style={Styles.emailAddressText}>Email address</Text>
                    <TextInput
                        value={emailId}
                        onChangeText={(val) => {
                            setEmailId(val)
                            const data = validateGmail(val)
                            if(data) {
                                setIsValid(true)
                            }
                            else{
                                setIsValid(false)
                            }
                        }}
                        placeholder="Eg namaemail@gmail.com"
                        style={Styles.emailInput}
                    />
                    {
                        !isValid && emailId.length >=1 ?
                        (<>
                        <Text style={{color: 'red'}}> please enter a valid email </Text>
                        </>) :
                        (<></>)
                    }
                    <Text style={Styles.rememberText}>Remember the password?
                        <Text onPress={() => navigation.navigate({name:'registration', params: { data: true }})} style={{color: '#32B768'}}>  Sign in</Text>
                    </Text>
                </View>
                <View style={{height: '60%', justifyContent: 'flex-end'}}>
                <Pressable disabled = {!isValid} style={[Styles.submitBtn, !isValid && {opacity: 0.3}]} onPress={() => navigation.navigate('success')}>
                    <Text>Submit</Text>
                </Pressable>
                </View>
            </View>
        </SafeAreaView>
    )
}