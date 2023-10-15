import React, { useState } from "react";
import Navbar from "./Navbar";
import logo from "../assets/logo.svg";
import Options from "./options";


const Home = () => {



  return (
    <div className="flex">
      <a
        href="/"
        className="absolute top-5 left-8 md:top-[30px] md:left-[47px] shrink-0 z-50"
      >
        <img src={logo} alt="Logo" />
      </a>

      <Navbar />

      <div className="bg-white flex flex-col w-full flex-1">
        <div className="flex justify-end border-b px-6 py-3">
          <div className="flex items-center gap-1">
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
            <tr className="h-11">
              <td className="pl-5">Gotham Asylum</td>
              <td>10th August, 2023</td>
              <td>
                <p className="text-[#32D583] inline-flex rounded bg-[#ECFDF3] px-[10px] py-[1px] text-[10px] font-medium ">
                  Paused
                </p>
              </td>
              <td>
                <Options />
              </td>
            </tr>
            <tr className="h-11">
              <td className="pl-5">Gotham Asylum</td>
              <td>10th August, 2023</td>
              <td>
                <p className="inline-flex justify-center items-center rounded bg-[#E0E0E0] px-[10px] py-[1px] text-[10px] font-medium text-white">
                  Archived
                </p>
              </td>
              <td>
                <Options />
              </td>
            </tr>
            <tr className="">
              <td className="py-3 pl-5">Gotham Asylum</td>
              <td>10th August, 2023</td>
              <td>
                <p className="inline-flex justify-center items-center rounded bg-[#ECFDF3] px-[10px] py-[1px] text-[10px] font-medium text-[#32D583]">
                  Paused
                </p>
              </td>
              <td>
                <Options />
              </td>
            </tr>
            <tr className=" py-2">
              <td className="py-3 pl-5">Gotham Asylum</td>
              <td>10th August, 2023</td>
              <td>
                <p className="inline-flex justify-center items-center rounded bg-[#E0E0E0] px-[10px] py-[1px] text-[10px] font-medium text-white">
                  Archived
                </p>
              </td>
              <td>
                <Options />
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
      </div>
    </div>
  );
};

export default Home;
