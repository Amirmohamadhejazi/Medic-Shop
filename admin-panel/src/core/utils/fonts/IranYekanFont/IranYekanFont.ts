import localFont from 'next/font/local'

export const IranYekanFont = localFont({
    src: [
        {
            path: '../../../../../public/fonts/iranyekanwebthinfanum.woff',
            weight: '100',
            style: 'normal',
        },
        {
            path: '../../../../../public/fonts/iranyekanwebthinfanum.woff',
            weight: '200',
            style: 'normal',
        },
        {
            path: '../../../../../public/fonts/iranyekanweblightfanum.woff',
            weight: '300',
            style: 'normal',
        },
        {
            path: '../../../../../public/fonts/iranyekanwebregularfanum.woff',
            weight: '400',
            style: 'normal',
        },
        {
            path: '../../../../../public/fonts/iranyekanwebmediumfanum.woff',
            weight: '500',
            style: 'normal',
        },
        {
            path: '../../../../../public/fonts/iranyekanwebboldfanum.woff',
            weight: '600',
            style: 'normal',
        },
        {
            path: '../../../../../public/fonts/iranyekanwebextraboldfanum.woff',
            weight: '700',
            style: 'normal',
        },
        {
            path: '../../../../../public/fonts/iranyekanwebblackfanum.woff',
            weight: '800',
            style: 'normal',
        },
        {
            path: '../../../../../public/fonts/iranyekanwebextrablackfanum.woff',
            weight: '900',
            style: 'normal',
        },
    ],
    display: 'block',
    variable: '--font-iran-yekan',
})
