const checkActiveNavLink = (pathName: string, href: string) => {
    if (href !== '/') {
        return pathName.includes(href)
    }

    return pathName === href
}

export default checkActiveNavLink
