import React from "react";
import InvestItem from "./RecentDonation";
import { InvestDB } from "./utils/InvestmentsDB";

function LeftPart({user}) {
  console.log(user.displayName)
  return (
    <div className=" col-span-2 min-h-[90vh] border-r border-gray-200 items-start justify-start flex flex-col w-full ">
      {/* top section*/}
      <div className="w-full items-start justify-start flex flex-col px-12 pt-12 pb-6">
        <h1 className="font-bold text-xl xl:text-2xl pb-1 "> Welcome Back {user.displayName.split(' ')[0]} ! </h1>
        <p className="text-md text-gray-800">
          Find all your Bloodkart credentials here
        </p>
        <div className="items-start justify-start flex flex-col px-6 pt-8 pb-4 bg-[#89F8B7] mt-6 w-full ">
          <h1 className="text-3xl"> {user.displayName}</h1>
          <h1 className=" text-3xl xl:text-4xl font-bold py-2 ">
            Bloodkart.com
          </h1>
        </div>
        <div className="bg-black py-4 px-8 w-full items-start justify-between flex shadow-2xl shadow-emerald-200 ">
          <span className="flex flex-col items-start justify-start text-white">
            <h1> Card Number </h1>
            <h3> **** **** **** 3711 </h3>
          </span>
          <span className="flex flex-col items-start justify-start text-white">
            <h1> CVC </h1>
            <h3>786 </h3>
          </span>
        </div>
      </div>
      {/* bottom section*/}
      <div className="w-full items-start justify-start flex flex-col px-12 py-6">
        <h1 className="font-bold text-xl xl:text-2xl pb-2 ">
          Recent Donations
        </h1>
        <div className="w-full space-y-5 overflow-y-auto max-h-[350px] py-6 scrollbar-hide">
          {InvestDB.map((item) => (
            <InvestItem item={item} key={item.id} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default LeftPart;
