'use client'
import { useQuery } from '@tanstack/react-query'

import { EmptyBoundary } from '@partials/boundaries/EmptyBoundary'
import { DFetchingContainer } from '@partials/containers/DFetchingContainer'

const ProductOrganism = () => {
    const { isFetching, isError, isSuccess, data } = useQuery({
        queryKey: ['products'],
        queryFn: () => fetch('https://6651de3f20f4f4c44278f8b0.mockapi.io/api/v1/product').then((res) => res.json()),
    })

    return (
        <div className='flex flex-col gap-y-3'>
            <span>محصولات پزشکی</span>
            {/* <div className='flex flex-col w-96 p-4 bg-white  rounded-lg  shadow-md'>
                <img
                    src='https://amirmohamadhejazi.github.io/MeymedReact/assets/hospitalbed-2c35321a.jpg'
                    alt='baner'
                    className='w-full object-cover'
                />
                <span>1</span>
                <span>1</span>
                <span>1</span>
                <span>1 </span>
            </div> */}
            {/* <div className='flex justify-end gap-5 flex-wrap *:w-96 *:p-12 *:bg-white  *:rounded-lg  *:shadow-md'>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div> </div>
            </div> */}
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

export default ProductOrganism
