'use client'
import { useQuery } from '@tanstack/react-query'

import { EmptyBoundary } from '@partials/boundaries/EmptyBoundary'
import { DFetchingContainer } from '@partials/containers/DFetchingContainer'

const NewProductOrganism = () => {
    const { isFetching, isError, isSuccess, data } = useQuery({
        queryKey: ['new-products'],
        queryFn: () =>
            fetch('https://6651de3f20f4f4c44278f8b0.mockapi.io/api/v1/new-product').then((res) => res.json()),
    })

    return (
        <div className='flex flex-col'>
            <span>محصولات جدید</span>
            <DFetchingContainer
                isError={isError}
                isFetching={isFetching}
                isSuccess={isSuccess}
                emptyBoundary={data?.length === 0 && <EmptyBoundary />}
            >
                <span>1</span>
            </DFetchingContainer>
        </div>
    )
}

export default NewProductOrganism
