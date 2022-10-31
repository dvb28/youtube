import Dropdown from '~/components/Dropdown';
import AvatarImg from '~/assets/images/cropped-800-800-1274528.jpg';
import { LeftArrow } from '~/assets/icons';
import ButtonAnimation from '~/components/ButtonAnimation';

export default function Model({dropdownStyle, title, setDefaultMenu, model}) {
  return (
    <Dropdown
        showing={true}
        setDefaultMenu={setDefaultMenu}
        dropdownStyle={{...dropdownStyle}}
        parent={
            <div className='py-[1px] px-[6px]'>
                <div className='show-menu__btn w-8 h-8 mx-2'>
                    <img src={AvatarImg} className='rounded-full' alt="" />
                </div>
            </div>
        }
    >
        <div>
            <div className='flex items-center min-h-[48.5px] border-b border-b-[rgba(0,0,0,0.1)]'>
                <div className='mx-1'>
                    <ButtonAnimation>
                        <div className='w-10 h-10 flex items-center justify-center has-tooltip'
                            onClick={e => setDefaultMenu && setDefaultMenu(true)}
                        >
                            <LeftArrow width={24} height={24}/>
                        </div>
                    </ButtonAnimation>
                </div>
                <div className='text-[16px] leading-[22px]'>{title}</div>
            </div>
        </div>
        <div>{model}</div>
    </Dropdown>
  )
}
