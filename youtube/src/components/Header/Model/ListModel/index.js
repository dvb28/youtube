import { useState } from "react";
import { Check } from "~/assets/icons";

export default function ListModel({item, value}) {

  const [isValue, setIsValue] = useState(value);

  return (
    <ul className="py-2">
        {item.children.data.map((item, index) => (
            <li onClick={e => setIsValue(item)}
                key={index} className='flex items-center h-10 pl-4 pr-[32px] hover:bg-[rgba(0,0,0,0.05)] cursor-pointer'>
                {item === isValue 
                    ? <Check width={24} height={24} marginRight={16}/>
                    : <span className='ml-[40px]'></span>
                }
                <p className='text-[14px]'>{item}</p>
            </li>
        ))}
    </ul>
  )
}
