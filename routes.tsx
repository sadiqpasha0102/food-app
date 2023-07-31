import { createStackNavigator } from "@react-navigation/stack"
import { RegistrationPage } from "./src/components/RegistrationPage";
import { NavigationContainer } from "@react-navigation/native";

export const AppRoutes = () => {
    const stack = createStackNavigator();

    return (
        <NavigationContainer>
            <stack.Navigator screenOptions={{headerShown: false}}>
                <stack.Screen name='registration' component={RegistrationPage} />
            </stack.Navigator>
        </NavigationContainer>
    )
}