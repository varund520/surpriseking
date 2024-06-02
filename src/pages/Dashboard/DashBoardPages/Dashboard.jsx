import React from 'react';
import { CiCalendar, CiClock2 } from 'react-icons/ci';
import Sidebar from './Sidebar';


const pdata = [
  {
    name: 'Python',
    student: 13,
    fees: 10,
    repeat: 5
  },
  {
    name: 'Javascript',
    student: 15,
    fees: 12,
    repeat: 8
  },
  {
    name: 'PHP',
    student: 5,
    fees: 10,
    repeat: 3
  },
  {
    name: 'Java',
    student: 10,
    fees: 5,
    repeat: 11
  },
  {
    name: 'C#',
    student: 9,
    fees: 4,
    repeat: 4
  },
  {
    name: 'C++',
    student: 10,
    fees: 8,
    repeat: 3
  },
];

const piedata = [
  { name: "Group A", value: 400, fill: "#0088FE" },
  { name: "Group B", value: 300, fill: "#00C49F" },
  { name: "Group C", value: 300, fill: "#FFBB28" },
  { name: "Group D", value: 200, fill: "#FF8042" }
];

const renderColorfulLegendText = (value, entry) => {
  return (
    <span style={{ color: "#596579", fontWeight: 500, padding: "10px", marginRight: "100px", }}>
      {value}
    </span>
  );
};


const Dashboard = () => {
  return (
    <div className='mx-[3.2rem] my-10'>
      <div className='flex gap-[4rem]'>
        <Sidebar />

        <div className='flex-[0.77]'>
          <h3 className='text-[24px] font-medium mb-4'>Dashboard</h3>

          <div className='grid grid-cols-4 gap-[16px] child:space-y-[15px] child:border child:border-[#F5F5F5] child:rounded-[10px] child:px-[13px] child:py-[8px] child:bg-white'>

            <div className='child:flex child:justify-between child:items-center'>
              <div>
                <span className='bg-[#FFFDEF] p-[5px] translate-y-4 rounded-full'>
                  <img src="https://truelysell.dreamstechnologies.com/html/template/assets/img/icons/dash-icon-01.svg" alt="" />
                </span>
                <span className='text-[14px] text-gray-600'>Total Orders</span>
              </div>

              <div>
                <div className='flex items-center gap-1'>
                  <img src="https://truelysell.dreamstechnologies.com/html/template/assets/img/icons/up-icon.svg" alt="" />
                  <span className='text-[12px] text-[#6DCC76]'>+16.24%</span>
                </div>
                <span className='text-[24px] font-semibold'>27</span>
              </div>
            </div>

            <div className='child:flex child:justify-between child:items-center'>
              <div>
                <span className='bg-[#F4F7FF] p-[5px] translate-y-4 rounded-full'>
                  <img src="https://truelysell.dreamstechnologies.com/html/template/assets/img/icons/wallet-icon-01.svg" alt="" />
                </span>
                <span className='text-[14px] text-gray-600'>Total Orders</span>
              </div>

              <div>
                <div className='flex items-center gap-1'>
                  <img src="https://truelysell.dreamstechnologies.com/html/template/assets/img/icons/down-icon.svg" alt="" />
                  <span className='text-[12px] text-[#FF0000]'>+16.24%</span>
                </div>
                <span className='text-[24px] font-semibold'>27</span>
              </div>
            </div>

            <div className='child:flex child:justify-between child:items-center'>
              <div>
                <span className='bg-[#F4F7FF] p-[5px] translate-y-4 rounded-full'>
                  <img src="https://truelysell.dreamstechnologies.com/html/template/assets/img/icons/wallet-add.svg" alt="" />
                </span>
                <span className='text-[14px] text-gray-600'>Total Orders</span>
              </div>

              <div>
                <div className='flex items-center gap-1'>
                  <img src="https://truelysell.dreamstechnologies.com/html/template/assets/img/icons/up-icon.svg" alt="" />
                  <span className='text-[12px] text-[#6DCC76]'>+16.24%</span>
                </div>
                <span className='text-[24px] font-semibold'>27</span>
              </div>
            </div>

            <div className='child:flex child:justify-between child:items-center'>
              <div>
                <span className='bg-[#FFF5F5] p-[5px] translate-y-4 rounded-full'>
                  <img src="https://truelysell.dreamstechnologies.com/html/template/assets/img/icons/wallet-amt.svg" alt="" />
                </span>
                <span className='text-[14px] text-gray-600'>Total Orders</span>
              </div>

              <div>
                <div className='flex items-center gap-1'>
                  <img src="https://truelysell.dreamstechnologies.com/html/template/assets/img/icons/up-icon.svg" alt="" />
                  <span className='text-[12px] text-[#6DCC76]'>+16.24%</span>
                </div>
                <span className='text-[24px] font-semibold'>27</span>
              </div>
            </div>

          </div>

          <div className='flex gap-[16px] mt-8'>

            <div className='flex-[0.7]'>
              <h3 className='text-[18px] font-medium'>Recent Booking</h3>

              <div className='border-2 border-[#F5F5F5] rounded-[8px] p-[10px] bg-white mt-4 flex flex-col gap-4 child:border-b child:pb-5 remove_last_border'>

                {[0, 1, 2, 3].map((item) =>
                  <div key={item} className='flex items-center justify-between'>

                    <div className='flex items-center gap-4'>
                      <img src="https://truelysell.dreamstechnologies.com/html/template/assets/img/services/service-06.jpg" alt="" className='h-[48px] w-[48px] rounded-[8px] object-cover' />
                      <div>
                        <span className='text-[15px] font-medium'>Computer Repair</span>
                        <div className='flex items-center gap-2 mt-1'>
                          <CiCalendar className='text-[13px]' />
                          <span className='text-[12px] text-[#74788d]'>22 Sep 2023</span>
                        </div>
                      </div>
                    </div>

                    <div className='flex items-center gap-4'>
                      <img src="https://truelysell.dreamstechnologies.com/html/template/assets/img/profiles/avatar-02.jpg" alt="" className='h-[40px] w-[40px] object-cover rounded-full' />
                      <div className='flex flex-col gap-1'>
                        <span className='text-[15px] font-medium'>John Smith</span>
                        <span className='text-[12px] text-[#74788d]'>john@example.com</span>
                      </div>
                    </div>

                    <button className='btn px-[10px] py-[5px] text-[#F82424] bg-[#FFF5F5] font-medium'>Cancel</button>
                  </div>
                )}

              </div>

            </div>


            <div className='flex-[0.3]'>
              <h3 className='text-[18px] font-medium'>Recent Transaction</h3>

              <div className='flex flex-col gap-4 child:pb-5 child:border-b border-2 remove_last_border border-[#F5F5F5] rounded-[8px] p-[10px] bg-white mt-4'>
                {[0, 1, 2, 3].map((item) =>
                  <div key={item} className='flex items-center gap-6'>
                    <span className='bg-[#F7F7FF] p-[7px] rounded-full'>
                      <img src="https://truelysell.dreamstechnologies.com/html/template/assets/img/icons/trans-icon-01.svg" alt="" />
                    </span>

                    <div>
                      <span className='text-[14px] font-medium'>Service Booking</span>

                      <div className='mt-2 flex items-center gap-4 child:flex child:items-center child:gap-1 child:text-[13px] child:text-[#74788D]'>
                        <div>
                          <CiCalendar />
                          <span>22 Sep 2023</span>
                        </div>

                        <div>
                          <CiClock2 />
                          <span>10:12 AM</span>
                        </div>
                      </div>

                    </div>
                  </div>
                )}
              </div>

            </div>

          </div>

          {/* <div className='child:flex child:items-center child:justify-between child:bg-blue-500 child:p-[1.2rem] child:rounded-[0.6rem] child:shadow-lg child:shadow-gray-600 flex items-center text-white child:max-w-[32rem] child:w-full gap-[4rem]'>
            <div className=''>
              <div className=''>
                <h2 className='text-3xl font-medium mb-1'>2</h2>
                <span className='text-[1.6rem]'>Total Bookings</span>
              </div>
              <RiStackLine className='text-[2.4rem]' />
            </div>
            <div className=''>
              <div className=''>
                <h2 className='text-3xl font-medium mb-1'>2</h2>
                <span className='text-[1.6rem]'>Total Bookings</span>
              </div>
              <RiStackLine className='text-[2.4rem]' />
            </div>
            <div className=''>
              <div className=''>
                <h2 className='text-3xl font-medium mb-1'>2</h2>
                <span className='text-[1.6rem]'>Total Bookings</span>
              </div>
              <RiStackLine className='text-[2.4rem]' />
            </div>
          </div> */}

          {/* <div className='mt-[3rem]'>
            <ResponsiveContainer width="100%" aspect={3}>
              <BarChart width={730} height={250} data={pdata}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="fees" fill="#9A55FF" />
                <Bar dataKey="repeat" fill="#FE8096" />
                <Bar dataKey="student" fill="#54CAED" />
              </BarChart>
            </ResponsiveContainer>
          </div> */}

          {/* <div>
            <ResponsiveContainer width="100%" aspect={3}>
              <PieChart width={730} height={250}>
                <Legend
                  height={36}
                  iconType="circle"
                  layout="vertical"
                  verticalAlign="middle"
                  iconSize={10}
                  padding={5}
                  formatter={renderColorfulLegendText}
                />
                <Pie data={piedata} dataKey="value" nameKey="name" cx="20%" cy="50%" innerRadius={60} outerRadius={130} fill="#54CAED" />
              </PieChart>
            </ResponsiveContainer>
          </div> */}

        </div>
      </div>
    </div>
  )
}

export default Dashboard