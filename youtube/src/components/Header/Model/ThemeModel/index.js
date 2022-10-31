import { Check } from '~/assets/icons';

export default function ThemeModel({item}) {

    const theme = 'light';

    return (
        <div className='py-2'>
            <h6 className='text-[12px] text-[#606060] pl-4 pr-[36px] h-[40.5px] flex leading-[18px] items-center'>Tùy chọn cài đặt chỉ áp dụng cho trình duyệt này</h6>
            <ul>
                {item.children.data.map((item, index) => (
                    <li key={index} className='flex items-center h-10 pl-4 pr-[32px]'>
                        {item.value === theme 
                            ? <Check width={24} height={24} marginRight={16}/>
                            : <span className='ml-[40px]'></span>
                        }
                        <p className='text-[14px]'>{item.title}</p>
                    </li>
                ))}
            </ul>
        </div>
    )
}
