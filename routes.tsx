import { createStackNavigator } from "@react-navigation/stack"
import { RegistrationPage } from "./src/components/registration/RegistrationPage";
import { NavigationContainer } from "@react-navigation/native";
import { ForgotPassword } from "./src/components/forgot-password/ForgotPassword";
import { Success } from "./src/components/success/Success";

export const AppRoutes = () => {
    const stack = createStackNavigator();

    return (
        <NavigationContainer>
            <stack.Navigator screenOptions={{headerShown: false}}>
                <stack.Screen name='registration' component={RegistrationPage} />
                <stack.Screen name='forgotPassword' component={ForgotPassword}/>
                <stack.Screen name='success' component={Success}/>
            </stack.Navigator>
        </NavigationContainer>
    )
}