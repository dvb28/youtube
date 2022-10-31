import { MicrophoneIcon, SearchIcon } from '~/assets/icons';
import KeyBoardImage from '~/assets/images/keyboard.png';
import ButtonAnimation from '~/components/ButtonAnimation';
import Tooltip from '~/components/Tooltip';
import { Combobox } from '@headlessui/react';
import { useState } from 'react';


const list = [
    {name: 'Giang' },
    {name: 'Bảo' },
    {name: 'Hoạt' },
    {name: 'Tiến' },
    {name: 'Đức' },
    {name: 'Học' },
]

  export default function Search() {
      const [searchText, setSearchText] = useState();
      const historyList = JSON.parse(sessionStorage.getItem('searchHistory')) || [];
      const [query, setQuery] = useState('');

      const handleSetSearchHistory = (item) => {
        const prevHis = historyList;
        let isDuplicate = false;
        for(let i = 0; i < prevHis.length; i++) {
            if(prevHis[i].name === item) {
                isDuplicate = true;
                break;
            }
        }
        if(isDuplicate !== true) {
            prevHis.unshift({name: item});
            sessionStorage.setItem('searchHistory', JSON.stringify(prevHis));
        }
      }

    const searchResult =
      query === ''
        ? historyList
        : list.filter((person) =>
            person.name
              .toLowerCase()
              .replace(/\s+/g, '')
              .includes(query.toLowerCase().replace(/\s+/g, ''))
          )
    return (
        <div className='search-form flex-0-1-728px'>
            <div className='flex justify-between'>
                <div className='search-input ml-10 px-[4px] flex flex-[1_1_0%]'>
                    <form className="h-10 flex flex-[1_1_0%]" action="">
                        <Combobox value={searchText}>
                            <div className='search-wrapper rounded-tl-[40px] rounded-bl-[40px] relative flex-[1_1_0%] ml-8 pr-[4px] pl-[16px] py-[2px] flex items-center shadow-[inset_0px_1px_2px_#eee] border border-solid border-[#ccc]'>
                                <div className='search-icon absolute left-0 pr-3 pl-4 hidden'>
                                    <SearchIcon width={20} height={20}/>
                                </div>
                                <Combobox.Input
                                    as='input'
                                    onFocus={e => {
                                        e.target.value !== '' && setQuery(e.target.value);
                                        historyList.length !== 0 && document.querySelector('.comboboxButton').click();
                                    }}
                                    onChange={(e) => {
                                        const value = e.target.value;
                                        setQuery(value);
                                        setSearchText(value)
                                    }} 
                                    className='search-input outline-0 border-0 w-full text-base placeholder:text-[#808080]' placeholder='Tìm kiếm' type="text"    
                                />
                                <Combobox.Options className="absolute top-[42px] rounded-[12px] left-[-1px] m-h-[492px] right-[-0.4px] overflow-auto bg-white pb-[5px] pt-4 text-base shadow-[0_2px_4px_rgba(0,0,0,0.2)] border border-[#ccc] border-t-0 focus:outline-none sm:text-sm">
                                    {searchResult.length === 0 && query !== '' ? (
                                        <div className="relative cursor-default select-none py-2 px-4 text-gray-700">
                                            Nothing found.
                                        </div>
                                    ) : (
                                        searchResult.map((person, index) => (
                                        <Combobox.Option
                                            key={index}
                                            className={() => `relative cursor-default select-none text-[16px] leading-8 pr-6 pl-[16px]`}
                                            value={person}
                                        >
                                            {({selected}) => (
                                            <>
                                                <span className={`block truncate ${selected ? 'font-medium' : 'font-normal'}`}
                                                >
                                                    <div className='flex items-center'>
                                                        <span className='mr-[14px]'><SearchIcon width={20} height={20}/></span>
                                                        <span className='font-medium'>{person.name}</span>
                                                    </div>
                                                </span>
                                                {selected 
                                                    ?   (
                                                            <span
                                                                className={`absolute inset-y-0 left-0 flex items-center pl-3`}
                                                            >
                                                                <div className="h-5 w-5" aria-hidden="true" />
                                                            </span>
                                                        ) 
                                                    : null}
                                                
                                            </>
                                            )}
                                        </Combobox.Option>
                                        ))
                                    )}
                                    <div className='text-right'>
                                        <span className='text-[12px] italic opacity-100 text-[#777] mr-[14px]'>Báo cáo đề xuất tìm kiếm không phù hợp</span>
                                    </div>
                                </Combobox.Options>
                                <div className='px-[4px] mt-[3px] mr-[1.5px] flex cursor-pointer'>
                                    <a href="#h" className='text-[16px] align-middle w-[18.8px] h-[11px]'>
                                        <img className='opacity-60 hover:opacity-80 ' src={KeyBoardImage} alt="" />
                                    </a>
                                </div>
                            </div>
                            <Combobox.Button className="comboboxButton"/>
                            <button
                                className='bg-[#f8f8f8] h-10 has-tooltip rounded-tr-[40px] rounded-br-[40px] w-[63px] flex justify-center items-center border rounded-r-sm rounded-l-none border-l-0 border-[#d3d3d3] px-4px hover:border-[#c6c6c6] hover:bg-[#f0f0f0] hover:shadow-[0_1px_0_rgba(0,0,0,0.1)]'
                                onClick={e => handleSetSearchHistory(searchText)} 
                            >
                                <Tooltip title='Tìm kiếm'>
                                    <SearchIcon width={24} height={24}/>
                                </Tooltip>
                            </button>
                        </Combobox>
                    </form>
                </div>

                <div className='search-microphone w-10 h-10 bg-[#f9f9f9] rounded-full ml-[4px]'>
                    <ButtonAnimation>
                        <button className='p-2'>
                            <Tooltip title='Tìm kiếm bằng giọng nói'>
                                <MicrophoneIcon width={24} height={24}/>
                            </Tooltip>
                        </button>
                    </ButtonAnimation>
                </div>
            </div>
        </div>
    )
}
