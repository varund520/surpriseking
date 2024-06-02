import React, { useState } from 'react';
import { TiArrowSortedDown } from 'react-icons/ti';

const CustomSelect = ({ options, onSelect }) => {
    const [selectedOption, setSelectedOption] = useState('');
    const [openSelect, setOpenSelect] = useState(false);

    const handleChange = (value) => {
        setSelectedOption(value);
        setOpenSelect(!openSelect)
    };

    return (
        <div className="relative bg-white w-full rounded-[6px]">
            <div className="w-max text-[14px] pl-[8px] pr-[30px] py-[7px] rounded-[6px] cursor-pointer" onClick={() => setOpenSelect(!openSelect)}>{selectedOption || 'Select Options'}</div>

            <div className={`${openSelect ? 'flex' : 'hidden'} custom_select child-hover:bg-gray-100 child:cursor-pointer absolute top-[40px] child:border-gray-300 child:border-b w-full bg-white flex-col child:p-[10px] child:text-[14px]`}>
                {options.map((item, index) =>
                    <span key={index} onClick={() => handleChange(item?.value)}>{item?.label}</span>
                )}
            </div>
            <span className="absolute top-4 right-2"><TiArrowSortedDown className={`text-[14px] ${openSelect ? 'rotate-180' : 'rotate-0'}`} /> </span>
        </div>
    );
};

export default CustomSelect;
