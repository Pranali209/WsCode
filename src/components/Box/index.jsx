import React from 'react'
import icon from '../../assets/icon.png'
function Box() {
    const data =[
        { img: icon , heading : "Learn From Industry Experts" ,
        desc : "Lorem ipsum dolor sit amet consectetur. Vitae suspendisse pellentesque ame ."
    },
    { img: icon , heading : "Structured & Latest Curriculum" ,
        desc : "Lorem ipsum dolor sit amet consectetur. Vitae suspendisse pellentesque ame."
    },
    { img: icon , heading : "Highly-Engaging Live Classes" ,
        desc : "Lorem ipsum dolor sit amet consectetur. Vitae suspendisse pellentesque ame porttitor  felis."
    },
    { img: icon , heading : "Work on Real Projects" ,
        desc : "Lorem ipsum dolor sit amet consectetur. Vitae suspendisse pellentesque ame porttitor facilisis dignissim felis."
    },
    { img: icon , heading : "100% Job Assistance From Industry Experts" ,
        desc : "Lorem ipsum dolor sit amet consectetur."
    },
    { img: icon , heading : "Get Certification" ,
        desc : "Lorem ipsum dolor sit amet consectetur. Vitae suspendisse pellentesque "
    }
    ]
  return (
    <div className='flex flex-wrap justify-around px-20 max-md:flex-col max-md:px-6'>
      
       {
        data.map((data)=>{
            return(
                <div className='w-[27%] max-md:w-full h-[200px] m-3 p-5 border-2 bg-white rounded-md'>
                     <img src={data.img} alt="icon"/>
                     <h2 className='text-xl mt-2'>{data.heading}</h2>
                     <p className='text-sm mt-2'>{data.desc}</p>
                </div>
            )
        })
       }
    </div>
  )
}

export default Box