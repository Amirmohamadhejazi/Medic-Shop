import { type FC } from 'react'
import { NavLink } from '@mantine/core'

import { type TCriticalAny } from '@core/types/critical-any'

const DNavLink: FC<TCriticalAny> = ({ className = '', classNames, ...rest }) => {
    return (
        <NavLink
            className={`hover:bg-light-blue-100 ${className}`}
            noWrap
            classNames={{
                ...classNames,
                section: `ml-0 duration-300 ${classNames?.section}`,
                children: `border-r border-light-blue-500 !py-0 pl-0 pr-2 !rounded-none whitespace-nowrap ${classNames?.children}`,
                root: `py-3 px-4 rounded-lg justify-start gap-x-2 w-full hover:bg-light-blue-200 ${classNames?.root}`,
                body: `text-right font-medium ${classNames?.body}`,
            }}
            {...rest}
        />
    )
}

export default DNavLink
