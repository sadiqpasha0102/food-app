import { Dimensions, StyleSheet } from "react-native";

const height = Dimensions.get('window').height;

export const ForgotPasswordStyles = StyleSheet.create({
    parent: {
        marginTop: 80,
        padding: 20,
        height: height,
        // backgroundColor: 'red'
    },

    forgotText: {
        color: '#374151',
        fontSize: 20,
        fontWeight: 'bold'
    },

    enterText: {
        color: '#9CA3AF',
        fontSize: 16,
        marginTop: 10
    },

    emailWrapper: {
        marginTop: 60
    },

    emailAddressText: {
        fontSize: 16,
        fontWeight: 'bold'
    },

    emailInput: {
        height: 50,
        marginTop: 10,
        borderWidth: 2,
        borderRadius: 10,
        borderColor: '#BEC5D1',
        padding: 10
    },

    rememberText: {
        marginTop: 10
    },

    submitBtn: {
        marginBottom: 60,
        // flex: 1,
        padding: 16,
        borderRadius: 12,
        backgroundColor: '#10B981',
        alignItems: 'center',
        marginHorizontal: 50,
        opacity: 0.7,
        // flex: 1,
        paddingVertical: "auto"
    }
})