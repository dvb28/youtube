import { MenuIcon, Logo ,BellIcon, RendererIcon, UpLoadVideoIcon, StreamingIcon,SettingIcon} from '~/assets/icons';
import {F8Logo, F8Image} from '~/assets/images';
import ButtonAnimation from '../ButtonAnimation';
import Tooltip from '../Tooltip';
import { useState} from 'react';
import Dropdown from '../Dropdown';
import Search from './Search';
import UserMenuModel from './Model/UserMenuModel';

export default function Header() {

    const [isShow, setIsShow] = useState(false);

    return (
        <div className='header px-4 flex justify-between items-center'>
            <div className='flex items-center'>
                <div className='p-2'>
                    <ButtonAnimation>
                        <MenuIcon width={24} height={24}/>
                    </ButtonAnimation>
                </div>
                <a href='#home'>
                    <div className='flex w-[129px]'>
                        <div className='py-[18px] pr-[14px] pl-4 flex'><Logo width={90} height={20}/></div>
                        <span className='text-[#606060] text-[10px] mt-[10.5px] ml-[-10px]'>VN</span>
                    </div>
                </a>
            </div>
            <Search/>
            <div className='flex min-w-[225px] justify-end items-center'>
                <div className='mr-2'>
                    <Dropdown
                        dropdownStyle={{width: 180, height: 96.8, top: 40, right: 0}} 
                        parent={
                            <div>
                                <ButtonAnimation>
                                    <div 
                                        className='w-10 h-10 flex items-center justify-center has-tooltip'
                                        onClick={e => setIsShow(true)}
                                    >
                                        <Tooltip title='Tạo'>
                                            <RendererIcon width={24} height={24} isOn={isShow}/>
                                        </Tooltip>
                                    </div>
                                </ButtonAnimation>
                            </div>
                        }
                    >
                        <div className='py-[8px]'>
                            <ButtonAnimation className='pr-[36px] pl-[16px] flex items-center h-[40px] w-full hover:bg-[rgba(0,0,0,0.05)]'>
                                <UpLoadVideoIcon width={24} height={24} marginRight={16}/>
                                <div className='text-[14px]'>Tải video lên</div>
                            </ButtonAnimation>
                            <ButtonAnimation className='pr-[36px] pl-[16px] flex items-center h-[40px] w-full hover:bg-[rgba(0,0,0,0.05)]'>
                                <StreamingIcon width={24} height={24} marginRight={16}/>
                                <div className='text-[14px]'>Phát trực tiếp</div>
                            </ButtonAnimation>
                        </div>
                    </Dropdown>
                </div>
                <div className='mr-2'>
                    <Dropdown
                        dropdownStyle={{width: 480, height: 642, top: 40, right: 0}} 
                        title={
                            <div className='border-b-[1px] min-h-[48.5px] border-b-[rgba(0,0,0,0.1)] flex justify-between items-center'>
                                <h2 className='text-[16px] ml-4'>Thông báo</h2>
                                <div className='mr-4'>
                                    <ButtonAnimation>
                                        <SettingIcon width={24} height={24}/>
                                    </ButtonAnimation>
                                </div>
                            </div>
                        }
                        parent={
                            <div>
                                <ButtonAnimation>
                                    <div 
                                        className='w-10 h-10 flex items-center relative z-50 justify-center'
                                        onClick={e => setIsShow(true)}
                                    >
                                        <Tooltip title='Thông báo'>
                                            <BellIcon width={24} height={24} isOn={isShow}/>
                                        </Tooltip>
                                    </div>
                                </ButtonAnimation>
                            </div>
                        }
                    >
                        {[1,1,1,1,1,1,1,1,1].map((item, index) => (
                            <div key={index} className='py-4 pr-4 hover:bg-[rgba(0,0,0,0.05)]'>
                                <a href="#notify" className='flex mr-6'>
                                    <div className='w-[4px] h-[4px] rounded-[2px] bg-[#065fd4] mx-[6px] mt-[22px]'></div>
                                    <div className='w-[48px] h-[48px] mr-[16px]'>
                                        <img src={F8Logo} alt="" className='rounded-[50%]' />
                                    </div>
                                    <div className='flex-[1_1_0%]'>
                                        <div className='text-[14px] leading-5 mb-2'>F8 Official đang phát trực tiếp: [DevLofi] Work with Me - Phát Trực Tiếp</div>
                                        <div className='text-[#606060] text-[12px] leading-[18px]'>7 ngày trước</div>
                                    </div>
                                    <div className='w-[86px] h-[48px] mx-[16px] relative overflow-hidden block'>
                                        <div className='absolute transform translate-y-[-50%] top-[50%] left-0 w-full'>
                                            <img src={F8Image} alt=""/>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        ))}
                    </Dropdown>
                </div>
                <div>
                    <UserMenuModel/>
                </div>
            </div>
        </div>
    )
}
