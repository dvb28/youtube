import {AvatarImg} from '~/assets/images';
import { AddAcountIcon, Check, LogOutIcon } from '~/assets/icons';

export default function ChangeAccount({item}) {

    const userAccount = item.children.data.userAccount;

  return (
    <>
        <div>
            <ul className='py-2'>
                <li className='mx-4 py-3 border-b border-b-[rgba(0,0,0,0.1)] block'>
                    <p className='text-[12px] leading-[18px] mt-[1px]'>{userAccount.userName}</p>
                    <p className='text-[12px] leading-[18px] mt-[-0.5px] text-[#606060]'>{userAccount.userEmail}</p>
                </li>
                <li className='flex items-center min-h-[64px] px-4 justify-between hover:bg-[rgba(0,0,0,0.05)] cursor-pointer'>
                    <span className='flex items-center'>
                        <span className='overflow-hidden w-[60px]'>
                            <img src={AvatarImg} className='w-[50px] rounded-[50%] border-[#065fd4] border-[2px] h-[50px]' alt='' />
                        </span>
                        <span>
                            <p className='text-[14px] font-normal'>{userAccount.userName}</p>
                            <p className='text-[12px] text-[#606060]'>{userAccount.subcriber}</p>
                        </span>
                    </span>
                    <Check width={24} height={24}/>
                </li>
                <li className='pl-4 pr-8 text-[14px] h-10 flex items-center hover:bg-[rgba(0,0,0,0.05)] cursor-pointer'>
                    Xem tất cả kênh
                </li>
            </ul>
            {item.children.data.otherAccount
                ? (
                    <div className='border-t-[4px] border-t-[rgba(0,0,0,0.1)] py-2'>
                        <h6 className='font-medium text-[12px] py-2 px-4'>Các tài khoản khác</h6>
                        <ul>
                            <li>
                                <span className='flex items-center'>
                                    <a href="#link" className='py-2 px-4 text-[12px]'>20200910@eaut.edu.vn</a>
                                </span>
                                <span className='flex items-center min-h-[56px] px-4 justify-between hover:bg-[rgba(0,0,0,0.05)] cursor-pointer'>
                                    <span className='flex items-center'>
                                        <span className='overflow-hidden w-[48px]'>
                                            <img src={AvatarImg} className='w-[36px] rounded-[50%] h-[36px]' alt='' />
                                        </span>
                                        <span>
                                            <p className='text-[14px] font-normal'>Đào {userAccount.userName}</p>
                                            <p className='text-[12px] text-[#606060]'>Không có kênh</p>
                                        </span>
                                    </span>
                                </span>
                            </li>
                        </ul>
                    </div>
                ) : ''}
        </div>
        <div className='py-2 border-t border-t-[rgba(0,0,0,0.05)]'>
            <button className='flex pl-4 pr-[36px] h-10 items-center text-[14px] hover:bg-[rgba(0,0,0,0.05)] w-full'>
                <span className='ml-1 mr-[20px]'>
                    <AddAcountIcon width={24} height={24}/>
                </span>
                <p>Thêm tài khoản</p>
            </button>
            <button className='flex pl-4 pr-[36px] h-10 items-center text-[14px] hover:bg-[rgba(0,0,0,0.05)] w-full'>
                <span className='ml-1 mr-[20px]'>
                    <LogOutIcon width={24} height={24}/>
                </span>
                <p>Đăng xuất</p>
            </button>
        </div>
    </>
  )
}
