import type { Metadata } from 'next'

import { RootProvider } from '@partials/providers/RootProvider'

import { type TWrapperWithChildrenType } from '@core/types/common/wrapper-with-children'

import '../styles/globals.css'

export const metadata: Metadata = {
    title: 'dashboard',
    description: 'dashboard Admin Panel',
}

const RootLayout = ({ children }: TWrapperWithChildrenType) => {
    return (
        <html lang='fa' dir='rtl'>
            <body className='font-iran-yekan' dir='rtl'>
                <RootProvider>{children}</RootProvider>
            </body>
        </html>
    )
}

export default RootLayout
