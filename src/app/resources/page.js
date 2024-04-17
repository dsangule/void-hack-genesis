import Navbar from '@/components/Navbar'
import React from 'react'

function Resources() {
  return (
    <div className='bg-[#FFFFFF]'>
        <Navbar />
        <div className='bg-[#D9D9D9] pt-2 pd-2 pr-6 pl-6 m-10' style={{
          
          borderRadius: "15px",
          textAlign: 'justify'

          }}>
            <div className='bg-[#ffffff] p-3 mt-3' style={{
              borderRadius: "15px",
              
            }} >
              <div className='bg-[#d9d9d9] mb-5 w-fit p-3' style={{
                borderRadius: "10px",
                fontWeight: "bold",
                fontSize: '20px'
              }}>
                Case
              </div>
              <div className='bg-[#d9d9d9]  p-6 ' style={{
                borderRadius: "15px"
              }}>
                Jawaharlal Nehru University has issued show-cause notices to 12 hostel presidents of JNU for leading a protest over the water crisis in the hostels near the vice-chancellor's residence on September 19, in which around 500 students participated.
                TOI got access to the show-cause notice received by Aishe Ghosh, a PhD scholar at the Centre for Inner Asian Studies, School of International Studies.
                </div>
            </div>
            <div style={{
            marginTop:"20px",
            paddingBottom: "20px",
            paddingLeft:"1%",
            textAlign: 'justify',
            fontWeight: "bold",
            fontSize: '15px'

            }}>
            Learn More.
            </div>
      </div>
      
    </div>

  )
}

export default Resources