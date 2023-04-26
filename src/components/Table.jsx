import React from 'react'
import donate from '../assets/Donate.png'
const Table = () => {
  return (
 <div className='grid md:grid-cols-2 max-w-screen bg-[#131F42]' id="Eligibility">
    <div>
    <img className='w-full justify-center items-center' src={donate} alt="" />
</div>
<section className="antialiased text-gray-600 h-screen px-4 bg-[#131F42]">
    <div className="flex flex-col justify-center h-full">
    <h1 className='font-bold text-3xl text-[#FFFFFF] py-8 text-center'>LEARN ABOUT DONATIONS</h1>
        <div className="w-full max-w-2xl mx-auto bg-metal shadow-lg rounded-xl border border-gray-200">
                
            <div className='bg-[#F45050] rounded-tr-xl rounded-tl-xl '><header className=" px-5 py-4 border-b border-gray-100">
                <h2 className="font-semibold text-center text-[#FFFFFF] text-2xl">COMPATIBLE BLOOD TYPE DONORS</h2>
            </header></div>
            <div className="p-3 bg-white">
                <div className="overflow-x-auto">
                    <table className="table-auto w-full md:w-full ">
                        <thead className="text-xs font-semibold uppercase text-gray-400 bg-gray-50">
                            <tr>
                                <th className="p-2 whitespace-nowrap">
                                    <div className="font-semibold text-left">Blood Type</div>
                                </th>
                                <th className="p-2 whitespace-nowrap">
                                    <div className="font-semibold text-left">Donate to</div>
                                </th>
                                <th className="p-2 whitespace-nowrap">
                                    <div className="font-semibold text-left">Recceive From</div>
                                </th>
                               
                            </tr>
                        </thead>
                        <tbody className="text-sm divide-y divide-gray-100">
                            <tr>
                                <td className="p-2 whitespace-nowrap">
                                    <div className="flex items-center">
                    
                                        <div className="font-medium text-gray-800">A+</div>
                                    </div>
                                </td>
                                <td className="p-2 whitespace-nowrap">
                                    <div className="text-left">A+ AB+</div>
                                </td>
                                <td className="p-2 whitespace-nowrap">
                                    <div className="text-left font-medium text-green-500">A+ A- O+ O-</div>
                                </td>
                             </tr>

                             <tr>
                                <td className="p-2 whitespace-nowrap">
                                    <div className="flex items-center">
                    
                                        <div className="font-medium text-gray-800">O+</div>
                                    </div>
                                </td>
                                <td className="p-2 whitespace-nowrap">
                                    <div className="text-left">O+ A+ B+ AB+</div>
                                </td>
                                <td className="p-2 whitespace-nowrap">
                                    <div className="text-left font-medium text-green-500">O+ O-</div>
                                </td>
                             </tr>

                             <tr>
                                <td className="p-2 whitespace-nowrap">
                                    <div className="flex items-center">
                    
                                        <div className="font-medium text-gray-800">B+</div>
                                    </div>
                                </td>
                                <td className="p-2 whitespace-nowrap">
                                    <div className="text-left">B+ AB+</div>
                                </td>
                                <td className="p-2 whitespace-nowrap">
                                    <div className="text-left font-medium text-green-500">B+ B- O+ O-</div>
                                </td>
                             </tr>

                             <tr>
                                <td className="p-2 whitespace-nowrap">
                                    <div className="flex items-center">
                    
                                        <div className="font-medium text-gray-800">AB+</div>
                                    </div>
                                </td>
                                <td className="p-2 whitespace-nowrap">
                                    <div className="text-left">AB+</div>
                                </td>
                                <td className="p-2 whitespace-nowrap">
                                    <div className="text-left font-medium text-green-500">EVERYONE</div>
                                </td>
                             </tr>

                             <tr>
                                <td className="p-2 whitespace-nowrap">
                                    <div className="flex items-center">
                    
                                        <div className="font-medium text-gray-800">A-</div>
                                    </div>
                                </td>
                                <td className="p-2 whitespace-nowrap">
                                    <div className="text-left">A+ A- AB+ AB-</div>
                                </td>
                                <td className="p-2 whitespace-nowrap">
                                    <div className="text-left font-medium text-green-500">A- O-</div>
                                </td>
                             </tr>

                             <tr>
                                <td className="p-2 whitespace-nowrap">
                                    <div className="flex items-center">
                    
                                        <div className="font-medium text-gray-800">O-</div>
                                    </div>
                                </td>
                                <td className="p-2 whitespace-nowrap">
                                    <div className="text-left">EVERYONE</div>
                                </td>
                                <td className="p-2 whitespace-nowrap">
                                    <div className="text-left font-medium text-green-500">O-</div>
                                </td>
                             </tr>

                             <tr>
                                <td className="p-2 whitespace-nowrap">
                                    <div className="flex items-center">
                    
                                        <div className="font-medium text-gray-800">B-</div>
                                    </div>
                                </td>
                                <td className="p-2 whitespace-nowrap">
                                    <div className="text-left">B+ B- AB+ AB-</div>
                                </td>
                                <td className="p-2 whitespace-nowrap">
                                    <div className="text-left font-medium text-green-500">B- O-</div>
                                </td>
                             </tr>

                             <tr>
                                <td className="p-2 whitespace-nowrap">
                                    <div className="flex items-center">
                    
                                        <div className="font-medium text-gray-800">AB-</div>
                                    </div>
                                </td>
                                <td className="p-2 whitespace-nowrap">
                                    <div className="text-left">AB+ AB-</div>
                                </td>
                                <td className="p-2 whitespace-nowrap">
                                    <div className="text-left font-medium text-green-500">AB- A- B- O-</div>
                                </td>
                             </tr>

                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
</section>

</div>  
  )
}

export default Table
