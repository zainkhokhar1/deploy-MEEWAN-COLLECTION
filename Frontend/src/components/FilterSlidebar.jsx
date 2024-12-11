
import React, { useEffect, useState } from 'react'
import { RxCross2 } from "react-icons/rx";
import products from '../dummydata.js';
import { useFilter } from './ContextApi.jsx';
const FilterSlidebar = () => {
  const [range, setRange] = useState(0);
  const [filterOpen, setFilterOpen] = useFilter();
  const [selectedSizes, setSelectedSizes] = useState([]);

  // using useEffect to check for if this slider is opened or not and do the accordingly functionality
  useEffect(() => {
    if (filterOpen) {
      document.body.style.overflow = "hidden";
    }
    else {
      document.body.style.overflow = "auto";
    }
    // dispatching the event acttached when this component is open
    return () => document.body.style.overflow = "auto";
  }, [filterOpen])
  const sizes = [
    "XX-Small",
    "X-Small",
    "Small",
    "Medium",
    "Large",
    "X-Large",
    "XX-Large",
    "34",
    "36",
    "38",
    "40",
    "42",
    "44",
    "46",
    "48"
  ];
  const handleCheckboxChange = (size) => {
    setSelectedSizes((prevSelected) =>
      prevSelected.includes(size)
        ? prevSelected.filter((s) => s !== size) // Remove size if unchecked
        : [...prevSelected, size] // Add size if checked
    );
  };

  const priceRange = (e) => {
    setRange(e.target.value);
  }
  return (
    <>
      <div className={`absolute min-h-screen md:w-5/12 lg:w-3/12 lg:duration-1000 bg-white z-[999] w-11/12 duration-700 top-0 overflow-y-auto ${filterOpen === true ? 'left-0' : '-left-[900px] md:-left-[1500px] lg:-left-[2300px] xl:-left-[2700px]'}`}>
        <div className=' w-full relative h-[40rem]'>
          <div className=' sticky w-full top-0 bg-white z-30 mb-6 text-base font-semibold flex timeline-center justify-between py-4 px-3 border-transparent border border-b-slate-200'>
            <span>FILTER</span>
            <RxCross2 className='text-2xl text-slate-600 hover:rotate-180 duration-500 cursor-pointer' onClick={() => { localStorage.removeItem('filterSlider'); setFilterOpen(false); }} />
          </div>
          <div className=' overflow-y-auto overflow-x-hidden'>
            <div className=''>
              <h3 className="title w-fit h-fit px-5">
                <div className='font-semibold text-lg relative '>
                  Availability
                  <div className=' w-2/3 h-[2px] left-0 bg-black'></div>
                </div>
              </h3>
              <div className='mt-4 space-y-1 border border-transparent px-5 border-b-slate-200 pb-3'>
                <div className='text-base'>
                  <input type="checkbox" id='inStock' />
                  <label htmlFor="inStock" className='pl-2'>In Stock &nbsp;({products.length})</label>
                </div>

                <div className='text-base '>
                  <input type="checkbox" id='outOfstock' />
                  <label htmlFor="outOfstock" className='pl-2'>Out Of Stock &nbsp;(0)</label>
                </div>
              </div>
              <div className='pt-4 border-transparent border-b-slate-300 border'>
                <h3 className="title w-fit h-fit px-5">
                  <div className='font-semibold text-lg relative '>
                    Price
                    <div className=' w-14 h-[2px] left-0 bg-black'></div>
                  </div>
                </h3>
                <div className='my-7 px-3'>
                  <input onChange={priceRange} type="range" min={0} max="20900" value={range} className="range range-accent" />
                  <div className=''>
                    <span className='pr-2 text-base text-slate-600 pb-10'>
                      price:
                    </span>
                    <span className='font-semibold text-sm mt-2'>
                      Rs. {range} - Rs. 20,900.00
                    </span>
                  </div>
                  <button className='border-2 border-black rounded-full px-8 mt-4 ml-2 py-2'>
                    FILTER
                  </button>
                </div>
              </div>
              <div>
                <div>
                  <h3 className="title w-fit h-fit px-5">
                    <div className='font-semibold text-lg relative py-1'>
                      Size
                      <div className=' w-14 h-[2px] left-0 bg-black'></div>
                    </div>
                  </h3>
                  <div className='overflow-y-auto h-44 md:h-60 lg:h-[40rem] space-y-2 pl-4'>
                    {sizes.map((size, index) => (
                      <label key={index} className="flex items-center space-x-2">
                        <input
                          type="checkbox"
                          value={size}
                          onChange={() => handleCheckboxChange(size)}
                          className="form-checkbox h-5 w-5 text-blue-600"
                        />
                        <span className="text-sm font-medium">{size}</span>
                      </label>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {
        <div className={`fixed top-0 right-0 left-0 ${filterOpen ? "opacity-100" : "opacity-0 hidden"} duration-700 min-h-screen min-w-90% z-[700] bg-black opacity-50`} onClick={() => {
          localStorage.setItem('filterSlider', false);
          setFilterOpen(false)
        }
        }></div>
      }
    </>
  )
}

export default FilterSlidebar;