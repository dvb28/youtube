import { Menu, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { CloseIcon } from "~/assets/icons";
import ButtonAnimation from "../ButtonAnimation";

export default function DragDropdown({parent, dropdownStyle, title, children}) {

    console.log(title)

    const mousedown = (e) => {
        let elementTarget = e.target;
        
        if(e.target.getAttribute('class').includes('dragdropdown-title')) {
            elementTarget = e.target.offsetParent;
        }

        let prevX = e.clientX;
        let prevY = e.clientY;

        const mousemove = (e) => {
            let newX = prevX - e.clientX;
            let newY = prevY - e.clientY;

            const rect = elementTarget.getBoundingClientRect();

            elementTarget.style.left = rect.left - newX + "px";
            elementTarget.style.top = rect.top - newY + "px";

            prevX = e.clientX;
            prevY = e.clientY;

        }

        const removeEvent = (e) => {
            window.removeEventListener('mouseup', removeEvent);
            window.removeEventListener('mousemove', mousemove);
            window.removeEventListener('mousedown', mousedown);
        }

        window.addEventListener('mousemove', mousemove);
        window.addEventListener('mouseup', removeEvent);
        window.addEventListener('mouseout', removeEvent);
    }
    return (
        <Menu as="div" className='relative w-full flex text-left'>
        <Menu.Button
            className='w-full'
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
        >
            <Menu.Items
                style={{...dropdownStyle}}
                onMouseDown={e => window.addEventListener('mousedown', mousedown)}
                className='fixed select-none cursor-move flex rounded-[12px] shadow-[0_4px_32px_0_rgba(0,0,0,0.1)] flex-col z-50 top-[40px] right-0 origin-top-right bg-white ring-opacity-5'
            >
                <div className="flex items-center">
                    <span className="h-[56px] flex items-center justify-center dragdropdown-title w-[320px] text-[22px]">{title}</span>
                    <ButtonAnimation>
                        <span className="p-2">
                            <CloseIcon width={24} height={24}/>
                        </span>
                    </ButtonAnimation>
                </div>
                <div className="border">
                    <input className="" type="text" />
                </div>
                <div className='overflow-y-auto dropdown'>
                    <span className="block">{children}</span>
                </div>
            </Menu.Items>
        </Transition>
        </Menu>
    )
}


