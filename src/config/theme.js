import { extendTheme } from "native-base";

const theme = extendTheme({

    components: {
        Button: {
            variants: {
                rounded: ({ colorScheme }) => {
                    return {
                        bg: `${colorScheme}.300`,
                        rounded: 'full'
                    }
                }
            }

        }
    }
})

export default theme