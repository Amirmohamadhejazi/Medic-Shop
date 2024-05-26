import { type NavLinkProps } from '@mantine/core'

interface INavLinkProps extends NavLinkProps {
    isShowSmallNavLink: boolean
    classNames: {
        section: string
        children: string
        root: string
        body: string
    }
}

export default INavLinkProps
