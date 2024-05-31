'use client'
import { type FC, type PropsWithChildren, useEffect } from 'react'
import { usePathname } from 'next/navigation'
import { AppShell, Burger } from '@mantine/core'
import { useDisclosure, useMediaQuery } from '@mantine/hooks'

import { Sidebar } from './resources/components'

const DAppLayout: FC<PropsWithChildren> = ({ children }) => {
    const [mobileOpened, { toggle: toggleMobile, close: closeMobile }] = useDisclosure(false)
    const [desktopOpened, { toggle: toggleDesktop }] = useDisclosure(true)
    const smMediaQuery = useMediaQuery('(max-width: 1200px)')
    const pathName = usePathname()
    useEffect(() => {
        closeMobile()
    }, [closeMobile, pathName])

    return (
        <AppShell
            transitionDuration={500}
            transitionTimingFunction='ease'
            header={{ height: 60 }}
            navbar={{
                width: { base: 250, lg: 300 },
                breakpoint: 'lg',
                collapsed: { mobile: !mobileOpened, desktop: !desktopOpened },
            }}
        >
            <AppShell.Header>
                <div className='size-full flex items-center justify-between px-3'>
                    <span>مدیک شاپ</span>
                    {/* Medic Shop */}
                    <Burger className='mr-4' onClick={toggleDesktop} visibleFrom='lg' size='sm' />
                    <Burger opened={mobileOpened} onClick={toggleMobile} hiddenFrom='lg' size='sm' />
                </div>
            </AppShell.Header>
            <AppShell.Navbar w={{ base: 250, lg: 300 }} className='border-0'>
                <div className={`size-full ${smMediaQuery ? ' p-2' : ' pr-2 py-2'}`}>
                    <Sidebar />
                </div>
            </AppShell.Navbar>
            <AppShell.Main>
                <div className=' p-2'>
                    <div className='p-2 rounded-md overflow-auto'>{children}</div>
                </div>
            </AppShell.Main>
        </AppShell>
    )
}

export default DAppLayout
