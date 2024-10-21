import { extendTheme } from '@chakra-ui/react';
// import type { StyleFunctionProps } from '@chakra-ui/react';

const theme = extendTheme({

    colors: {
        primary:'#05d9f5' ,
        secondary: {
            100: '#edf2f7',
            200: '#e2e8f0',
            300: '#cbd5e0',
            400: '#a0aec0',
            500: '#718096',
            600: '#4a5568',
            700: '#2d3748',
            800: '#1a202c',
            900: '#171923',
        },
        warning: {
            100: '#fff3c4',
            200: '#ffecb3',
            300: '#ffe49f',
            400: '#ffdd8b',
            500: '#ffd576',
            600: '#ffce61',
            700: '#ffc74c',
            800: '#ffc036',
            900: '#ffba1f',
        },
        danger: {
            100: '#ffefef',
            200: '#ffdede',
            300: '#ffcccc',
            400: '#ffbbbb',
            500: '#ffaaaa',
            600: '#ff9999',
            700: '#ff8888',
            800: '#ff7777',
            900: '#ff6666',
        },
    },
    components: {
        Button: {
            baseStyle: {
                fontWeight: 'bold',
            },
            variants: {
                'delete': {
                    bg: 'red.500',
                    color: 'white',

                },
                'edit': {   
                    bg: 'blue.100',
                    color: 'white',
                },
                'submit': {
                    bg: 'green.500',
                    color: 'white',

                },
                'base': {
                    bg: 'blue.700',
                    color  : 'white',
                }
            },
            defaultProps: {
                variant: 'base', 
            },
        },
    },
});

export default theme;