
import React, { useEffect, useState } from 'react';
import { RxCross2 } from "react-icons/rx";
import { useSort, useSortBy } from './ContextApi';
const SortSlider = () => {
    const [sortBy, setSortBy] = useSortBy();
    const [sort, setSort] = useSort();

    // useEffect to check the sort slider is opened or not
    useEffect(() => {
        if (sort) { document.body.style.overflow = 'hidden'; }
        else {
            document.body.style.overflow = 'auto';
        }
        return () => { document.body.style.overflow = 'auto'; };
    }, [sort,sortBy]);
    return (
        <>
            <div className={`bg-white top-[7rem] z-[999] min-h-[28rem] ${sort ? " opacity-100 scale-100 translate-y-0" : "opacity-0 scale-0 translate-y-48 pointer-events-none"} duration-500 w-full absolute z-30`}>
                <div>
                    <div className='flex justify-between items-center px-5 py-4 border border-transparent border-b-slate-300'>
                        <span className='text-sm font-semibold'>SORT BY:</span>
                        <RxCross2 onClick={() => { setSort(false); localStorage.removeItem('Sort') }} className='text-2xl text-slate-600' />
                    </div>
                    <div className='pt-6'>
                        <div onClick={() => setSortBy('Featured')} className={`pl-4 text-base text-slate-600 py-[9px] ${sortBy == 'Featured' ? "text-[#56cfe1] font-semibold bg-sky-50" : " "}`}>Featured</div>

                        <div onClick={() => setSortBy('Best Selling')} className={`pl-4 text-base text-slate-600 py-[9px] ${sortBy == 'Best Selling' ? "text-[#56cfe1] font-semibold bg-sky-50" : " "}`}>Best Selling</div>

                        <div onClick={() => setSortBy('Alphabetically, A-Z')} className={`pl-4 text-base text-slate-600 py-[9px] ${sortBy == 'Alphabetically, A-Z' ? "text-[#56cfe1] font-semibold bg-sky-50" : " "}`}>Alphabetically, A-Z</div>

                        <div onClick={() => setSortBy('Alphabetically, Z-A')} className={`pl-4 text-base text-slate-600 py-[9px] ${sortBy == 'Alphabetically, Z-A' ? "text-[#56cfe1] font-semibold bg-sky-50" : " "}`}>Alphabetically, Z-A</div>

                        <div onClick={() => setSortBy('Price, low to high')} className={`pl-4 text-base text-slate-600 py-[9px] ${sortBy == 'Price, low to high' ? "text-[#56cfe1] font-semibold bg-sky-50" : " "}`}>Price, low to high</div>

                        <div onClick={() => setSortBy('Price, high to low')} className={`pl-4 text-base text-slate-600 py-[9px] ${sortBy == 'Price, high to low' ? "text-[#56cfe1] font-semibold bg-sky-50" : " "}`}>Price, high to low</div>

                        <div onClick={() => setSortBy('Date, new to old')} className={`pl-4 text-base text-slate-600 py-[9px] ${sortBy == 'Date, new to old' ? "text-[#56cfe1] font-semibold bg-sky-50" : " "}`}>Date, new to old</div>

                        <div onClick={() => setSortBy('Date, old to new')} className={`pl-4 text-base text-slate-600 py-[9px] ${sortBy == 'Date, old to new' ? "text-[#56cfe1] font-semibold bg-sky-50" : " "}`}>Date, old to new</div>
                    </div>
                </div>
            </div>
            {
                sort && <div className='fixed top-0 left-0 right-0 min-h-screen min-w-screen z-[700] bg-black opacity-50' onClick={() => setSort(false)}></div>
            }
        </>
    )
}

export default SortSlider;