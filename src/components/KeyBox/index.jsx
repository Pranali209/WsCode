import React from 'react'
import keys from'../../assets/keys.png'
function KeysBox() {
    const data =[
        { img: keys , heading : "Assignments & Modules tests" ,
        desc : "Lorem ipsum dolor sit amet ."
    },
    { img: keys , heading : "Industry-recognized Certification" ,
        desc : "Lorem ipsum dolor sit amet consectetur. "
    },
    { img: keys , heading : "Live classes & recorded lectures" ,
        desc : "Lorem ipsum dolor sit amet consectetur."
    },
    { img: keys, heading :"Downloadable Content"  ,
     desc : "Lorem ipsum dolor sit amet consectetur."
    },
    { img: keys , heading : "Downloadable Content" ,
        desc : "Lorem ipsum dolor sit amet consectetur."
    },
    { img: keys , heading : "Downloadable Content ",  
        desc : "Lorem ipsum dolor sit amet consectetur. pellentesque "
    }
    ]
  return (
     <div className='flex  flex-wrap px-16 max-md:flex-col max-md:px-6'>
         {
            data.map((item, index) => {
                return (
                    <div key={index} className="flex my-3 w-[28%] max-md:w-full 
                    mx-4 items-center justify-center p-4 bg-white shadow-sm rounded-md">
                        <div>
                           <img src={item.img} alt="keys" className="w-20 h-20" />   
                        </div>
                       <div className='mx-1'>
                       <h2 className="text-lg font-bold text-gray-800 mt-2">{item.heading}</h2>
                       <p>{item.desc}</p>
                       </div>
                            
                    </div>
                )
         }
         )
         }
     </div>
  )
}

export default KeysBox