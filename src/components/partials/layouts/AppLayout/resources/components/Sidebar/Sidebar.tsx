import Link from 'next/link'
import { usePathname } from 'next/navigation'
import KeyboardArrowLeftOutlinedIcon from '@mui/icons-material/KeyboardArrowLeftOutlined'

import { XNavLink } from '@atoms/XNavLink'

import { checkActiveNavLink, NAV_LINK_LISTS } from './resources'

const Sidebar = () => {
    const pathName = usePathname()

    return (
        <div className='size-full  bg-white border-[0.3px] border-gray-200 shadow-md rounded-md overflow-auto'>
            <aside className='h-full overflow-auto'>
                <div className='flex px-2 mt-2 flex-col items-start justify-start sticky top-0 gap-y-2'>
                    {NAV_LINK_LISTS.map((link, index) => {
                        if (link.subLinks) {
                            const isSubRouteActive = link.subLinks?.some((singleItem) =>
                                checkActiveNavLink(pathName, singleItem.href)
                            )
                            return (
                                <XNavLink
                                    active={isSubRouteActive}
                                    defaultOpened={isSubRouteActive}
                                    rightSection={<KeyboardArrowLeftOutlinedIcon />}
                                    key={index}
                                    leftSection={link.icon}
                                    label={link.label}
                                >
                                    {link.subLinks.map((subLink, index) => (
                                        <XNavLink
                                            component={Link}
                                            active={checkActiveNavLink(pathName, subLink?.href || '')}
                                            key={index}
                                            disabled={subLink.href === '#'}
                                            href={subLink?.href || ''}
                                            label={subLink.label}
                                            // rightSection={
                                            //     subLink.href === '#' && (
                                            //         <Badge color='gray' className='font-regular'>
                                            //             بزودی
                                            //         </Badge>
                                            //     )
                                            // }
                                        />
                                    ))}
                                </XNavLink>
                            )
                        }
                        return (
                            <XNavLink
                                leftSection={link.icon}
                                component={Link}
                                active={checkActiveNavLink(pathName, link.href)}
                                key={index}
                                href={link.href}
                                label={link.label}
                                disabled={link.href === '#'}
                                // rightSection={link.href === '#' && <Badge color='gray'>بزودی</Badge>}
                            />
                        )
                    })}
                </div>
            </aside>
        </div>
    )
}

export default Sidebar
