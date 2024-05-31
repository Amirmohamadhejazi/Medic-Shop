import { IconAlertOctagon } from '@tabler/icons-react'

import { type IErrorBoundaryProps } from './resources'

const ErrorBoundary = ({ text = 'دریافت اطلاعات با مشکل روبرو شد' }: IErrorBoundaryProps) => {
    return (
        <div className={'flex items-center bg-white rounded-md p-6 justify-center gap-2 w-full h-full'}>
            <IconAlertOctagon size='32' className='text-error' />
            <span className='font-medium text-sm'>{text}</span>
        </div>
    )
}

export default ErrorBoundary
