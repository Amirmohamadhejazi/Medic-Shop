import GridViewIcon from '@mui/icons-material/GridView'
import InventoryOutlinedIcon from '@mui/icons-material/InventoryOutlined'

import { type TCriticalAny } from '@core/types/critical-any'
type TDataSideBar = {
    label: string
    icon: TCriticalAny
    href: string
    subLinks?: {
        label: string
        href: string
    }[]
}[]

const NAV_LINK_LISTS: TDataSideBar = [
    {
        label: 'داشبورد',
        href: '/dashboard',
        icon: <GridViewIcon />,
    },
    {
        label: 'محصولات فروشگاه',
        href: '/product',
        icon: <InventoryOutlinedIcon />,
    },
    // {
    //     label: 'x',
    //     icon: <InventoryOutlinedIcon />,
    //     href: '/',
    //     subLinks: [
    //         {
    //             label: 'x',
    //             href: '/xxx',
    //         },
    //         {
    //             label: 'x ',
    //             href: '/xxx',
    //         },
    //         {
    //             label: 'x',
    //             href: '/xxx',
    //         },
    //         {
    //             label: 'x',
    //             href: '#xxx',
    //         },
    //     ],
    // },
]

export default NAV_LINK_LISTS
