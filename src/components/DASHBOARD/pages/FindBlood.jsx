import React, { useState, useEffect } from "react";

const FindBlood = () => {
  const [blood, setBlood] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:3002/api/donate");
        const data = await response.json();
        console.log(data);
        setBlood(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  if (!blood) {
    return <>loading...</>;
  }
  return (
    <div>
      <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table class="w-full text-sm text-left text-gray-500">
          <thead class="text-xs text-gray-700 uppercase bg-red-200 ">
            <tr>
              <th scope="col" class="px-6 py-3">
                Donor Name
              </th>
              <th scope="col" class="px-6 py-3">
                Age
              </th>
              <th scope="col" class="px-6 py-3">
                Blood Group
              </th>
              <th scope="col" class="px-6 py-3">
                Gender
              </th>
              <th scope="col" class="px-6 py-3">
                Contact
              </th>
            </tr>
          </thead>
          <tbody>
            {blood.map((n) => (
              <tr class="bg-white border-b">
                <th
                  scope="row"
                  class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
                >
                 {n.name} 
                </th>
                <td class="px-6 py-4">{n.age}</td>
                <td class="px-6 py-4">{n.group}</td>
                <td class="px-6 py-4">{n.gender}</td>
                <td class="px-6 py-4">
                  <a
                    href={`tel:${n.phone}`}
                    class="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                  >
                    {n?.phone}
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default FindBlood;
