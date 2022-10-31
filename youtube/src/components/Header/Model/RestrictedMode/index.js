import SwitchBtn from '~/components/SwitchBtn';

export default function RestrictedMode({item, value}) {
  return (
    <div>
      <ul className="py-2 my-2 mx-4">
        <li className="pb-4 text-[14px] leading-[20px]">Chế độ này giúp ẩn các video có thể chứa nội dung dành cho người trưởng thành. Tuy nhiên, không có bộ lọc nào là chính xác 100%.</li>
        <li className="pb-4 text-[14px] leading-[20px]">Tùy chọn cài đặt này chỉ áp dụng cho trình duyệt này.</li>
        <li className="flex items-center">
            <span className="uppercase text-[14px] font-medium tracking-[.5px] text-[#606060]">Kích hoạt Chế độ hạn chế</span>
            <span className='mb-[9px] ml-[15px]'>
                <SwitchBtn/>
            </span>
        </li>
      </ul>
    </div>
  )
}
