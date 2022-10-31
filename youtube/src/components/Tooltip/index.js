
export default function Tooltip({title, tooltipStyle ,children}) {
  return (
    <div className='has-tooltip flex justify-center'>
        {children}
        <div className='tooltip top-[54px]' style={{...tooltipStyle}}>
            <div className='text-[12px] p-2 m-2 bg-[#616161] text-white rounded-[2px] opacity-90'>{title}</div>
        </div>
    </div>
  )
}
