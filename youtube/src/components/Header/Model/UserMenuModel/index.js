import React, { useState } from 'react';
import { RightIcon } from '~/assets/icons';
import { AvatarImg } from '~/assets/images';
import APP_CONFIGS from '~/assets/js/appConfig';
import MENU_ITEMS from '~/assets/js/menuItems';
import Dropdown from '~/components/Dropdown';
import Model from '~/components/Header/Model';

export default function UserMenuModel() {

    const handleSetDefaultMenuDropDown = (showing) => {
        setMenuDropdown(defaultMenuDropdown(showing))
    }

    const showSubModel = (item) => {
        const isParent = item.children || null;
        if(!!isParent) {
            const dropdownStyle = isParent.data && isParent.data.otherAccount
                ? {...item.children.config, height: 470.4}
                : {...item.children.config}
            let model = (item.id === 8 && {item, value: APP_CONFIGS.language}) ||
                        (item.id === 10 && {item, value: APP_CONFIGS.localtion}) || ({item});
            setMenuDropdown(
                <Model
                    dropdownStyle={dropdownStyle}
                    setDefaultMenu={handleSetDefaultMenuDropDown}
                    model={item.children.model(model)}
                    item={item}
                    title={item.children.title}
                />
            )
        }
    }

    const renderItem = (id) => {
        return (
            <ul className='menu-list py-2'>
            {MENU_ITEMS(APP_CONFIGS).filter(item => item.listId === id).map((item, index) => {
                const isParent = !!item.children;
                const configClass = `flex justify-between pl-4 ${isParent ? 'pr-4' : 'pr-8'} h-10 items-center hover:bg-[#F2F2F2] cursor-pointer`;
                const ItemHTML = (
                    <li
                        key={index}
                        className={configClass}
                        onClick={e => showSubModel(item)}
                    >
                        <div className='flex items-center'>
                            <span className='mr-4'>{item.icon}</span>
                            <span className='text-[14px] mt-[1px]'>{item.title}</span>
                        </div>
                        {isParent && <div><RightIcon width={24} height={24}/></div>}
                    </li>
                )
                return (
                    ItemHTML
                )})}
            </ul>
        )
    }

    const defaultMenuDropdown = (showing = false) => {
        return (
            <Dropdown
                showing={showing}
                dropdownStyle={{width: 300, height: 727, top: 0, left: -300, right: 'unset'}}
                parent={
                    <div className='py-[1px] px-[6px]'>
                        <div className='show-menu__btn w-8 h-8 mx-2'>
                            <img src={AvatarImg} className='rounded-full' alt="" />
                        </div>
                    </div>
                }
            >
                <div className='p-[16px_16px_15.5px_16px] flex border-b border-b-[rgba(0,0,0,0.1)]' >
                    <div className='w-[40px] h-[40px] mr-4'>
                        <img className='rounded-[50%]' src={AvatarImg} alt=""/>
                    </div>
                    <div>
                        <div className='leading-[22px] text-[16px] font-medium'>Việt Bảo</div>
                        <div className='text-[14px] mt-[7px]'>
                            <a className='text-[#065fd4]' href="#profile">Quản lý Tài khoản Google của bạn</a>
                        </div>
                    </div>
                </div>
                <div className='user-menu__list overflow-hidden'>
                    {[1,2,3,4,5].map((item) => {
                        return <div key={item}>{renderItem(item)}</div>;
                    })}
                </div>
            </Dropdown>
        )
    }

    const [menuDropdown, setMenuDropdown] = useState(defaultMenuDropdown());
    
    return (
        <>{menuDropdown}</>
    )
}
