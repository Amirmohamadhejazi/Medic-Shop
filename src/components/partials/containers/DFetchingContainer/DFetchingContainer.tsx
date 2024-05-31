import { ErrorBoundary } from '@partials/boundaries/ErrorBoundary'
import { LoadingBoundary } from '@partials/boundaries/LoadingBoundary'

import { type IFetchingContainerProps } from './resources'

const DFetchingContainer = ({ children, isError, isSuccess, isFetching, emptyBoundary }: IFetchingContainerProps) => {
    if (isFetching) return <LoadingBoundary />
    if (isError) return <ErrorBoundary />
    if (isSuccess && emptyBoundary) return <>{emptyBoundary}</>
    if (isSuccess) return <>{children}</>
}

export default DFetchingContainer
