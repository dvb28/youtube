import { Fragment } from 'react';
import { Menu, Transition } from '@headlessui/react'

export default function Dropdown({parent, showing, dropdownStyle, title, setDefaultMenu, children}) {

    return (
        <Menu as="div" className='relative w-full flex text-left'>
            <Menu.Button
                className='w-full'
                onLoad={e => showing && e.target.click()}
            >
                {parent}
            </Menu.Button>
            <Transition 
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
                afterLeave={e => setDefaultMenu && setDefaultMenu()}
            >
                <Menu.Items
                    style={{...dropdownStyle}}
                    className='absolute flex rounded-[12px] shadow-[0_4px_32px_0_rgba(0,0,0,0.1)] flex-col z-50 top-[40px] right-0 origin-top-right bg-white ring-opacity-5'
                    onLoad={e => e.currentTarget.focus()}
                >
                    {title}
                    <div className='overflow-y-auto dropdown'>
                        <div>{children}</div>
                    </div>
                </Menu.Items>
            </Transition>
        </Menu>
    )
}
