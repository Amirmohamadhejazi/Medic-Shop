import { XLoading } from '@atoms/XLoading'

import { type ILoadingBoundaryProps } from './resources'

const LoadingBoundary = ({ text = 'در حال دریافت اطلاعات' }: ILoadingBoundaryProps) => {
    return (
        <div className={'flex items-center bg-white rounded-md p-6 justify-center gap-2 w-full h-full'}>
            <XLoading />
            <span className='font-medium text-sm'>{text}</span>
        </div>
    )
}

export default LoadingBoundary
