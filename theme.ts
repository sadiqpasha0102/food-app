import { extendTheme } from "native-base";

export const customTheme = extendTheme({

    fontConfig: {
        Nunito: {
            100: {
                normal: "Nunito-100",
            },
            200: {
                normal: "Nunito-200",
            },
            300: {
                normal: "Nunito-300",
            },
            // 400: {
            //     normal: "Nunito-400",
            // },
            500: {
                normal: "Nunito",
            },
            600: {
                normal: "Nunito-600",
            },
            700: {
                normal: "Nunito-700",
            },
            800: {
                normal: "Nunito-800",
            },
        },
    },
    fonts: {
        default: 'Nunito'
    },
    components: {
        Text: {
            baseStyle: {
                fontFamily: 'default',
            },
        },
    },
});