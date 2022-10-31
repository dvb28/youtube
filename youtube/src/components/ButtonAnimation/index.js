import { Fragment, useState} from 'react';
import { Transition } from '@headlessui/react';


export default function ButtonAnimation({tooltip, children}) {

    let [isShowing, setIsShowing] = useState(true)
    let resetIsShowing = () => {
        setTimeout(() => {
            setIsShowing(true);
        }, 500)
    }

    return (
        <div>
            <div className='flex items-center justify-center'>
                <Transition
                    as={Fragment}
                    show={!isShowing}
                    enter="transform transition duration-[200ms]"
                    enterFrom="opacity-0 rotate-[-120deg] scale-50"
                    enterTo="opacity-100 rotate-0 scale-100"
                    leave="transform duration-200 transition ease"
                    leaveFrom="opacity-100 rotate-0 scale-100"
                    leaveTo="opacity-0 scale-95"
                >
                    <div className='absolute w-10 h-10 z-0 rounded-[50%] border-[1px] border-[#b1b1b1] bg-[#f8f8f8]'></div>
                </Transition>
                <div
                    className='has-tooltip'
                    onClick={e => {
                        setIsShowing(false);
                        resetIsShowing();
                    }}
                >
                    <div className='relative z-50 cursor-pointer has-tooltip'>
                        <div className='flex hover:bg-[rgba(0,0,0,0.1)] hover:rounded-[24px]'>{children}</div>
                        {tooltip && 
                            <div className='tooltip top-[62px]'>
                                <div className='m-2 text-[12px] w-[80px] p-2 bg-[#616161] text-white rounded-[2px] opacity-90'>{tooltip}</div>
                            </div>
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}
