import React, { useState } from "react";
import Layout from "./layout";
import Navbar from "./Navbar";
import dots from "../assets/dots.svg";
import logo from "../assets/logo.svg";
import options from "./options";


const Home = () => {
  const [options, setOptions] = useState(false);
  return (
    <div className="flex">
         <a href='/' className="absolute top-[30px] left-[30px] shrink-0 z-50">
            <img src={logo} alt='Logo' />
        </a>
        <div className='flex flex-col gap-1 h-6 w-6 absolute top-[10px] left-8'>
          <div className='border border-gray-900'/>
          <div className='border border-gray-900'/>
          <div className='border border-gray-900'/>
        </div>
      <Navbar />
      
      <div className="bg-white flex flex-col w-full">
        <div className="flex justify-end border-b px-6 py-3">
          <div className="flex items-center">
            <h2 className="w-[38px] h-[38px] bg-[#32D583] rounded shrink-0 text-white font-bold text-2xl leading-10">
              S
            </h2>
            <div className="flex flex-col items-start justify-between">
              <h2 className="text-sm text-[#101828] font-semibold">Sigflow</h2>
              <p className="text-[#828282] text-sm ">Adeoluwa Siyanbade</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row gap-3 justify-between  px-6 py-3">
          <h2 className="font-semibold text-xl text-[#101828]">
            Transformation
          </h2>
          <div className="flex flex-col gap-2">
            <div className="flex gap-2 justify-between">
              <button className="bg-[#32D583] border border-[#32D583] text-white font-bold text-sm rounded-lg h-8 px-[14px] py-2 flex justify-center items-center gap-2">
                Create a new Transformation
              </button>
              <button className="bg-[#32D583] border border-[#32D583] text-white font-bold text-sm rounded-lg h-8 px-[14px] py-2 flex justify-center items-center gap-2">
                Filter
              </button>
            </div>
            <div className="flex items-center border border-[#E6E7EC] rounded-lg bg-white self-stretch gap-2 h-9 py-[10px] px-[14px]">
              <input
                type="search"
                placeholder="Search transformation"
                className="w-full focus:outline-none placeholder:text-xs placeholder:text-[#667085] placeholder:leading-6 placeholder:font-medium"
              />
              <button className="bg-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                >
                  <path
                    d="M17.5 17.5L12.5001 12.5M14.1667 8.33333C14.1667 11.555 11.555 14.1667 8.33333 14.1667C5.11167 14.1667 2.5 11.555 2.5 8.33333C2.5 5.11167 5.11167 2.5 8.33333 2.5C11.555 2.5 14.1667 5.11167 14.1667 8.33333Z"
                    stroke="#32D583"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
        <div className="border mx-6 rounded flex flex-col gap-40">
          <table className="text-left relative">
            <tr className="border-b">
              <th className="py-3 pl-5 ">Name</th>
              <th>Creation Date</th>
              <th>Status</th>
              <th></th>
            </tr>
            <tr className="">
              <td className="py-3 pl-5">Gotham Asylum</td>
              <td>10th August, 2023</td>
              <td className="inline-flex justify-center items-center rounded bg-[#ECFDF3] px-[10px] py-[1px] text-[10px] font-medium text-[#32D583]">Paused</td>
              <td>
                <img
                  src={dots}
                  className=" hover:bg-gray-100 rounded-full cursor-pointer"
                />
              </td>
              <div className="absolute right-0 options p-2 flex flex-col justify-center gap-2 w-[179px] h-[97px]">
                <a href="" className="flex gap-3 items-center text-[11px] text-[#34373F]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="14"
                    height="13"
                    viewBox="0 0 14 13"
                    fill="none"
                  >
                    <path
                      d="M1.8109 6.88631C1.73713 6.7695 1.70025 6.7111 1.6796 6.62102C1.66409 6.55335 1.66409 6.44665 1.6796 6.37898C1.70025 6.2889 1.73713 6.2305 1.8109 6.1137C2.42049 5.14846 4.23501 2.70833 7.00022 2.70833C9.76543 2.70833 11.5799 5.14846 12.1895 6.1137C12.2633 6.2305 12.3002 6.2889 12.3208 6.37898C12.3363 6.44665 12.3363 6.55335 12.3208 6.62102C12.3002 6.7111 12.2633 6.7695 12.1895 6.88631C11.5799 7.85155 9.76543 10.2917 7.00022 10.2917C4.23501 10.2917 2.4205 7.85155 1.8109 6.88631Z"
                      stroke="#828282"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M7.00022 8.125C7.89768 8.125 8.62522 7.39746 8.62522 6.5C8.62522 5.60254 7.89768 4.875 7.00022 4.875C6.10276 4.875 5.37522 5.60254 5.37522 6.5C5.37522 7.39746 6.10276 8.125 7.00022 8.125Z"
                      stroke="#828282"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                  View Transformation
                </a>
                <a href="" className="flex gap-3 items-center text-[11px] text-[#34373F]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="14"
                    height="13"
                    viewBox="0 0 14 13"
                    fill="none"
                  >
                    <path
                      d="M2.66668 4.33149C2.57784 4.3292 2.51333 4.32405 2.45533 4.31252C2.02558 4.22704 1.68964 3.8911 1.60416 3.46135C1.58334 3.3567 1.58334 3.23085 1.58334 2.97917C1.58334 2.72748 1.58334 2.60163 1.60416 2.49699C1.68964 2.06724 2.02558 1.7313 2.45533 1.64582C2.55998 1.625 2.68582 1.625 2.93751 1.625H11.0625C11.3142 1.625 11.44 1.625 11.5447 1.64582C11.9744 1.7313 12.3104 2.06724 12.3959 2.49699C12.4167 2.60163 12.4167 2.72748 12.4167 2.97917C12.4167 3.23085 12.4167 3.3567 12.3959 3.46135C12.3104 3.8911 11.9744 4.22704 11.5447 4.31252C11.4867 4.32405 11.4222 4.3292 11.3333 4.33149M5.91668 7.04167H8.08334M2.66668 4.33333H11.3333V8.775C11.3333 9.68509 11.3333 10.1401 11.1562 10.4877C11.0004 10.7935 10.7518 11.0421 10.4461 11.1979C10.0985 11.375 9.64343 11.375 8.73334 11.375H5.26668C4.35659 11.375 3.90155 11.375 3.55394 11.1979C3.24818 11.0421 2.99959 10.7935 2.84379 10.4877C2.66668 10.1401 2.66668 9.68509 2.66668 8.775V4.33333Z"
                      stroke="#828282"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                  Archive Transformation
                </a>
                <a href="" className="flex gap-3 items-center text-[#AF202D] text-[11px]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="14"
                    height="13"
                    viewBox="0 0 14 13"
                    fill="none"
                  >
                    <path
                      d="M9.16667 3.25V2.81667C9.16667 2.20995 9.16667 1.90658 9.04859 1.67485C8.94473 1.471 8.779 1.30527 8.57516 1.20141C8.34342 1.08334 8.04006 1.08334 7.43333 1.08334H6.56667C5.95994 1.08334 5.65658 1.08334 5.42484 1.20141C5.221 1.30527 5.05527 1.471 4.95141 1.67485C4.83333 1.90658 4.83333 2.20995 4.83333 2.81667V3.25M5.91667 6.22917V8.9375M8.08333 6.22917V8.9375M2.125 3.25H11.875M10.7917 3.25V9.31667C10.7917 10.2268 10.7917 10.6818 10.6146 11.0294C10.4588 11.3352 10.2102 11.5838 9.9044 11.7396C9.5568 11.9167 9.10175 11.9167 8.19167 11.9167H5.80833C4.89825 11.9167 4.44321 11.9167 4.0956 11.7396C3.78984 11.5838 3.54124 11.3352 3.38545 11.0294C3.20833 10.6818 3.20833 10.2268 3.20833 9.31667V3.25"
                      stroke="#AF202D"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                  Delete
                </a>
              </div>
            </tr>
            <tr className="">
              <td className="py-3 pl-5">Gotham Asylum</td>
              <td>10th August, 2023</td>
              <td className="inline-flex justify-center items-center rounded bg-[#E0E0E0] px-[10px] py-[1px] text-[10px] font-medium text-white">Archived</td>
              <td>
                <img
                  src={dots}
                  className=" hover:bg-gray-100 rounded-full cursor-pointer"
                />
              </td>
            </tr>
            <tr className="">
              <td className="py-3 pl-5">Gotham Asylum</td>
              <td>10th August, 2023</td>
              <td className="inline-flex justify-center items-center rounded bg-[#ECFDF3] px-[10px] py-[1px] text-[10px] font-medium text-[#32D583]">Paused</td>
              <td>
                <img
                  src={dots}
                  className=" hover:bg-gray-100 rounded-full cursor-pointer"
                />
              </td>
            </tr>
            <tr className=" py-2">
              <td className="py-3 pl-5">Gotham Asylum</td>
              <td>10th August, 2023</td>
              <td  className="inline-flex justify-center items-center rounded bg-[#E0E0E0] px-[10px] py-[1px] text-[10px] font-medium text-white">Archived</td>
              <td>
                <img
                  src={dots}
                  className=" hover:bg-gray-100 rounded-full cursor-pointer"
                />
              </td>
            </tr>
          </table>
          <div className="flex gap-2 px-6 py-2">
            <button className="bg-[#32D583] text-white text-sm leading-6 font-medium rounded-[4.8px] w-9 h-[30px] flex justify-center items-center py-[6px] px-3">
              5
            </button>
            <button className="bg-[#F5F5F5] text-[#828282] text-sm leading-6 font-medium rounded-[4.8px] w-9 h-[30px] flex justify-center items-center py-[6px] px-3">
              10
            </button>
            <button className="bg-[#F5F5F5] text-[#828282] text-sm leading-6 font-medium rounded-[4.8px] w-9 h-[30px] flex justify-center items-center py-[6px] px-3">
              15
            </button>
          </div>
        </div>
        <options />
      </div>
    </div>
  );
};

export default Home;
