
import React, { useEffect, useState } from 'react';
import { RiArrowDownSLine } from "react-icons/ri";
import SingleProduct from '../components/SingleProduct';
import products from '../dummydata';
import { FaFacebookF } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { FaYoutube } from 'react-icons/fa6';
import SecondSingleProduct from '../components/SecondSingleProduct';
import ThirdSingleProduct from '../components/ThirdSingleProduct';
import usePreviousPath from '../components/usePreviousPath';
import { useFilter, useSideBar, useSort } from '../components/ContextApi';
import { MdKeyboardArrowDown } from "react-icons/md";

const Men = () => {
  const [filterOpen, setFilterOpen] = useFilter();
  const [sort, setSort] = useSort();
  const [isOpen, setIsOpen] = useSideBar();
  const prevPath = usePreviousPath();
  const [mens, setMens] = useState([]);
  const [option, setOption] = useState(1);
  const [filter, setFilter] = useState('');

  const handleFilter = (e) => {
    setFilter(e.target.value);
  }

  const handleSort = () => {
    localStorage.setItem('Sort', true);
    setSort(true);
  }

  useEffect(() => {
    if (filter === "Alphabetically, A-Z") {
      let newProducts = [...mens].sort((a, b) => {
        return b.title.toLowerCase() < a.title.toLowerCase() ? 1 : -1
      });
      setMens(newProducts);
    }
    else if (filter === "Alphabetically, Z-A") {
      let newProducts = [...mens].sort((a, b) => {
        return b.title.toLowerCase() < a.title.toLowerCase() ? -1 : 1
      });
      setMens(newProducts);
    }
    else if (filter === "Price, low to high") {
      let newProducts = [...mens].sort((a, b) => {
        return b.salePrice < a.salePrice ? 1 : -1
      });
      setMens(newProducts);
    }
    else if (filter === "Price, high to low") {
      let newProducts = [...mens].sort((a, b) => {
        return b.salePrice < a.salePrice ? -1 : 1
      });
      setMens(newProducts);
    }
    else if(filter === "Featured"){
      let filteredProducts = products.filter((product) => {
        return product.category === "Men" || product.category.includes('Men')
      });
      setMens(filteredProducts);
    }
    else {
      //skip the others for now
    }
  }, [filter]);

  useEffect(() => {
    setIsOpen(false);
    let filteredProducts = products.filter((product) => {
      return product.category === "Men" || product.category.includes('Men')
    });

    setMens(filteredProducts);
  }, []);
  return (
    <div className=''>
      <div className='bg-[#757575] h-9 w-full text-xl text-white flex items-center justify-center mb-9'>
        Men
      </div>
      <div className='flex justify-between gap-9 xl:px-20 xsm:gap-20 sm:gap-0 items-center px-2 w-full'>
        <div onClick={() => { setFilterOpen(!filterOpen); localStorage.setItem('filterSlider', true) }} className='flex items-center cursor-pointer font-semibold  md:justify-start justify-center pl-3 gap-1 text-slate-500 w-1/3'>
          <svg fill='currentColor' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="16" height="16"><path d="M324.4 64C339.6 64 352 76.37 352 91.63C352 98.32 349.6 104.8 345.2 109.8L240 230V423.6C240 437.1 229.1 448 215.6 448C210.3 448 205.2 446.3 200.9 443.1L124.7 385.6C116.7 379.5 112 370.1 112 360V230L6.836 109.8C2.429 104.8 0 98.32 0 91.63C0 76.37 12.37 64 27.63 64H324.4zM144 224V360L208 408.3V223.1C208 220.1 209.4 216.4 211.1 213.5L314.7 95.1H37.26L140 213.5C142.6 216.4 143.1 220.1 143.1 223.1L144 224zM496 400C504.8 400 512 407.2 512 416C512 424.8 504.8 432 496 432H336C327.2 432 320 424.8 320 416C320 407.2 327.2 400 336 400H496zM320 256C320 247.2 327.2 240 336 240H496C504.8 240 512 247.2 512 256C512 264.8 504.8 272 496 272H336C327.2 272 320 264.8 320 256zM496 80C504.8 80 512 87.16 512 96C512 104.8 504.8 112 496 112H400C391.2 112 384 104.8 384 96C384 87.16 391.2 80 400 80H496z"></path></svg>
          <span className='-mt-1'>
            Filter
          </span>
        </div>
        <div className='flex gap-3 items-center md:justify-center w-1/3'>
          <div className='border flex flex-col justify-center space-y-[3px] py-1 border-slate-500 w-8 h-7' onClick={() => setOption(2)}>
            <div className={`min-h-[5px] ${option === 2 ? "bg-slate-800" : "bg-[#878787]"} w-10/12 mx-auto pl-1 pr-1`}></div>
            <div className={`min-h-[5px] ${option === 2 ? "bg-slate-800" : "bg-[#878787]"} w-10/12 mx-auto pl-1 pr-1`}></div>
            <div className={`min-h-[5px] ${option === 2 ? "bg-slate-800" : "bg-[#878787]"} w-10/12 mx-auto pl-1 pr-1`}></div>
          </div>
          <div className='border border-slate-500 md:hidden w-8 h-7 p-[2px]' onClick={() => setOption(3)}>
            <div className={`w-full h-full ${option === 3 ? "bg-slate-800" : "bg-[#878787]"}`}></div>
          </div>
          <div className='border border-slate-400 w-8 h-7 flex gap-1 p-[2px]' onClick={() => setOption(1)}>
            <div className={`w-1/2 h-full ${option === 1 ? "bg-slate-800" : "bg-[#878787]"}`}></div>
            <div className={`w-1/2 h-full ${option === 1 ? "bg-slate-800" : "bg-[#878787]"}`}></div>
          </div>
          <div className='border border-slate-400 w-8 h-7 hidden md:flex gap-1 p-[2px]' onClick={() => setOption(4)}>
            <div className={`w-1/2 h-full ${option === 4 ? "bg-slate-800" : "bg-[#878787]"}`}></div>
            <div className={`w-1/2 h-full ${option === 4 ? "bg-slate-800" : "bg-[#878787]"}`}></div>
            <div className={`w-1/2 h-full ${option === 4 ? "bg-slate-800" : "bg-[#878787]"}`}></div>
          </div>
          <div className='border border-slate-400  w-fit h-7 hidden md:flex gap-1 p-[2px]' onClick={() => setOption(5)}>
            <div className={`min-w-[6px] h-full ${option === 5 ? "bg-slate-800" : "bg-[#878787]"}`}></div>
            <div className={`min-w-[6px] h-full ${option === 5 ? "bg-slate-800" : "bg-[#878787]"}`}></div>
            <div className={`min-w-[6px] h-full ${option === 5 ? "bg-slate-800" : "bg-[#878787]"}`}></div>
            <div className={`min-w-[6px] h-full ${option === 5 ? "bg-slate-800" : "bg-[#878787]"}`}></div>
          </div>
          <div className='border border-slate-400 w-fit xl:flex xl:gap-1 h-7 hidden p-[2px]' onClick={() => setOption(6)}>
            <div className={`min-w-[6px] h-full ${option === 6 ? "bg-slate-800" : "bg-[#878787]"}`}></div>
            <div className={`min-w-[6px] h-full ${option === 6 ? "bg-slate-800" : "bg-[#878787]"}`}></div>
            <div className={`min-w-[6px] h-full ${option === 6 ? "bg-slate-800" : "bg-[#878787]"}`}></div>
            <div className={`min-w-[6px] h-full ${option === 6 ? "bg-slate-800" : "bg-[#878787]"}`}></div>
            <div className={`min-w-[6px] h-full ${option === 6 ? "bg-slate-800" : "bg-[#878787]"}`}></div>
          </div>
          <div className='border border-slate-400 w-fit xl:flex xl:gap-1 h-7 hidden p-[2px]' onClick={() => setOption(7)}>
            <div className={`min-w-[6px] h-full ${option === 7 ? "bg-slate-800" : "bg-[#878787]"}`}></div>
            <div className={`min-w-[6px] h-full ${option === 7 ? "bg-slate-800" : "bg-[#878787]"}`}></div>
            <div className={`min-w-[6px] h-full ${option === 7 ? "bg-slate-800" : "bg-[#878787]"}`}></div>
            <div className={`min-w-[6px] h-full ${option === 7 ? "bg-slate-800" : "bg-[#878787]"}`}></div>
            <div className={`min-w-[6px] h-full ${option === 7 ? "bg-slate-800" : "bg-[#878787]"}`}></div>
          </div>
        </div>
        <div onClick={handleSort} className='flex md:justify-center justify-end items-end w-1/3 gap-3 text-slate-500 md:hidden'>
          <span>Sort</span>
          <RiArrowDownSLine />
        </div>
        <div className='w-1/3 flex items-center justify-end px-1'>
          <select className='hidden text-slate-500 w-fit mx-2 px-7 bg-slate-50 font-semibold md:flex md:items-center md:justify-between py-1 border border-slate-400 rounded-full selection:outline-none focus:outline-none' onChange={handleFilter}>
            <option className={`bg-white selection:bg-white`} value="Featured" >Featured</option>
            <option className={`bg-white `} value="Best Selling" selected>Best Selling</option>
            <option className={`bg-white `} value="Alphabetically, A-Z" >Alphabetically, A-Z</option>
            <option className={`bg-white `} value="Alphabetically, Z-A" >Alphabetically, Z-A</option>
            <option className={`bg-white `} value="Price, low to high" >Price, low to high</option>
            <option className={`bg-white `} value="Price, high to low" >Price, high to low</option>
            <option className={`bg-white `} value="Date, old to new" >Date, old to new</option>
            <option className={`bg-white `} value="Date, new to old" >Date, new to old</option>
          </select>
        </div>
      </div>
      {
        option === 1 ? <div className='grid grid-cols-2 px-2 my-20 xsm:gap-1 md:gap-4 xl:mx-20 lg:mx-5 lg:gap-7'>
          {
            mens.length > 0 ?
              mens.map((men) => {
                return <div key={men.id} className='flex items-center justify-center'> <SingleProduct type={1} wish={false} className="col-span-1" singleProduct={men} />
                </div>
              })
              : ""
          }
        </div> : option === 2 ? <div className='border border-slate-300 border-b-transparent mx-4 my-20 lg:mx-5 xl:mx-20'>
          {
            mens.length > 0 ? mens.map((men) => <SecondSingleProduct wish={false} key={men.id} singleProduct={men} />) : ""
          }
        </div> : option === 3 ? <div className='grid grid-cols-1 px-3 my-20 mr-4 lg:mx-5 xl:px-20'>
          {
            mens.length > 0 ? mens.map((men) => <ThirdSingleProduct wish={false} key={men.id} singleProduct={men} />) : ""
          }
        </div> : option === 4 ? <div className='grid grid-cols-3 px-3 my-20 gap-3 lg:mx-5 lg:gap-5 xl:px-20'>
          {
            mens.length > 0 ? mens.map((men) => <SingleProduct type={2} wish={false} key={men.id} singleProduct={men} />) : ""

          }
        </div> : option === 5 ? <div className='grid grid-cols-4 px-3 my-20 gap-4 lg:mx-4 xl:px-20'>
          {
            mens.length > 0 ? mens.map((men) => <SingleProduct type={3} wish={false} key={men.id} singleProduct={men} />) : ""
          }
        </div> : option === 6 ? <div className='grid grid-cols-5 px-3 my-20 gap-4 lg:mx-4 xl:px-20'>
          {
            mens.length > 0 ? mens.map((men) => <SingleProduct type={4} wish={false} key={men.id} singleProduct={men} />) : ""
          }
        </div> : option === 7 ? <div className='grid grid-cols-6 px-3 my-20 gap-4 lg:mx-4 xl:px-20'>
          {
            mens.length > 0 ? mens.map((men) => <SingleProduct type={5} wish={false} key={men.id} singleProduct={men} />) : ""
          }
        </div> : ""
      }
      <div tabIndex={0} className="collapse collapse-plus bg-[#e6e6e6] rounded-none duration-300 mb-7">
        <input type="checkbox" className="peer" />
        <div className="collapse-title font-bold">Get in touch</div>
        <div className="collapse-content">
          <div className="flex gap-3 opacity-60">
            <FaFacebookF className="text-xl" />
            <FaInstagram className="text-xl" />
            <FaYoutube className="text-xl" />
          </div>
        </div>
      </div>
      <div className="text-sm px-10 text-center text-slate-500 line-clamp-2 pb-5">
        Copyright © 2024 <span className="text-sky-500">Meewan</span> all rights Reserved.
      </div>
    </div>
  )
}

export default Men;

//kids done
// summer done
// winter done
// women done
// all done
// wishlist done

