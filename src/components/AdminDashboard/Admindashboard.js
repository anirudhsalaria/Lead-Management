import React, { useEffect, useState } from 'react'
import Header from '../Header'


const Admindashboard = () => {

  const [data, setData] = useState([]);

  const fetchData = async () => {
    try {
      const url = 'https://lead-management-36cec-default-rtdb.firebaseio.com/UserData.json';

      const response = await fetch(url);
      if (response.ok) {
        const responseData = await response.json();
        console.log(responseData)
        const dataArray = Object.values(responseData || {});
        setData(dataArray);
      } else {
        console.error('Request failed with status', response.status);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  useEffect(() => {
    fetchData();
    // console.log(data);
  }, []);



  return (
    <div>
      <Header />
      <div className='container border'>
        <div className='text-red font-semibold mt-4'>Students Registered</div>
        <div className='p-4'>
          {data.map((plan) => (
            <div key={plan.Email} className=' container grid grid-flow-col  gap-2 justify-between p-4 rounded-lg shadow-xl'>
              <div className='col-span-1 text-center'>{plan.Name}</div>
              <div className='col-span-2 text-center'>{plan.Email}</div>
              <div className='col-span-1 text-center'>Assign Counsellor</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Admindashboard