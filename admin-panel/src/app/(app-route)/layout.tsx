import { type FC, type PropsWithChildren } from 'react'

import { AppLayout } from '@partials/layouts/AppLayout'

const layout: FC<PropsWithChildren> = ({ children }) => {
    return <AppLayout>{children}</AppLayout>
}

export default layout
