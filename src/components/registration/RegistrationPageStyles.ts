import { Dimensions, StyleSheet } from "react-native";



const width = Dimensions.get('window').width;


export const registrationPageStyles = StyleSheet.create({

    parent: {
        padding: 10,
        width: '100%',
        height: '100%',
    },

    imgWrapper: {
        marginTop: 80,
        alignItems: "center",
    },
    
    bgSvg: {
        position: 'relative'
    },

    boxSvg: {
        position: 'absolute',
        top: 100,
        left: 120
    },

    burgerSvg: {
        position: 'absolute',
        right: 20,
        top: 210
    },

    tickSvg: {
        position: 'absolute',
        top: 20,
        right: 40
    },

    content: {
        marginTop: 60,
        alignItems: 'center',
    },

    contentHeader: {
        color: '#1F2937',
        fontSize: 24,
        marginBottom: 20,
        fontWeight: 'bold'
    },

    createBtn: {
        marginTop: 40,
        padding: 16,
        borderRadius: 12,
        backgroundColor: '#32B768',
        alignItems: 'center',
        marginHorizontal: 50
    },

    accountText: {
        color: '#FFFFFF',
        fontWeight: 'bold'
    },

    loginBtn: {
        marginTop: 20,
        padding: 16,
        borderRadius: 12,
        backgroundColor: '#10B981',
        alignItems: 'center',
        marginHorizontal: 50,
        opacity: 0.7
    },

    tAndC: {
        marginTop: 30,
        textAlign: 'center',
        marginHorizontal: 10
    },

    modalScroll: {
        alignItems: 'center'
    },

    underLine: {
        borderBottomWidth: 5,
        borderBottomEndRadius: 10,
        marginHorizontal: 7,
        borderBottomColor: '#32B768'
    },

    nameWrapper: {
        width: width,
        marginTop: 25,
        paddingHorizontal: 25
    },

    nameInput: {
        marginTop: 10,
        borderWidth: 2,
        borderColor: '#BEC5D1',
        height: 40,
        padding: 10,
        borderRadius: 12
    },

    forgotPassword: {
        textAlign:'right',
        marginRight: 25,
        paddingTop: 5,
        color: '#32B768'
    },

    container: {
        height: '100%',
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.5)'
    },

    modalBottom: {
        paddingTop: 25,
        borderTopRightRadius: 30,
        borderTopLeftRadius: 30,
        backgroundColor: '#FFFFFF',
      }

})