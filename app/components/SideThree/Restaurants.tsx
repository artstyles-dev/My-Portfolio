import React from 'react'
import Image from 'next/image'

const Restaurants = () => {
  return (
    <div className='flex justify-center items-center'>
      <div className='glassPopup flex flex-col items-center shadow-lg rounded-xl p-6 max-w-md'>
        <div className='w-full overflow-hidden rounded-2xl shadow-md mb-4'>
            <a href='https://myrestaurant-styles.vercel.app/' target='_blank' >
          <Image
            src="https://res.cloudinary.com/dzjiwk7yy/image/upload/v1760115975/%E0%B8%A0%E0%B8%B2%E0%B8%9E%E0%B8%96%E0%B9%88%E0%B8%B2%E0%B8%A2%E0%B8%AB%E0%B8%99%E0%B9%89%E0%B8%B2%E0%B8%88%E0%B8%AD_2568-10-10_%E0%B9%80%E0%B8%A7%E0%B8%A5%E0%B8%B2_15.58.38_skuwpn.jpg"
            alt="web-ecom"
            width={1280}
            height={720}
            className="object-cover w-full h-64 hover:opacity-70 transition-opacity duration-300"
          />
          </a>
        </div>
        <div className=' p-4'>
            <h1 className='text-2xl text-amber-300 font-bold'>
          Restaurant Menu Web
        </h1>
        <p className='hidden xl:block'>
            ดึงข้อมูลจาก API และแสดงรายการอาหารแบบ responsive ด้วย Next.js + Tailwind
        </p>
        </div>
        
      </div>
    </div>
  )
}

export default Restaurants