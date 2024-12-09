import { assets } from '../assets/assets'

const OurPolicy = () => {
  return (
    <div className='flex flex-col sm:flex-row justify-around gap-12 sm:gap-2 text-center py-20 text-xs sm:text-sm md:text-base text-gray-700'>
        <div>
            <img src={assets.exchange_icon} className='w-12 m-auto mb-5' alt=''/>
            <p className='font-semibold'>Easy Exchange Policy</p>
            <p className='text-gray-400'>no hastle exchange policy</p>
        </div>
        <div>
            <img src={assets.quality_icon} className='w-12 m-auto mb-5' alt=''/>
            <p className='font-semibold'>Quality</p>
            <p className='text-gray-400'>In house Factory</p>
        </div>
        <div>
            <img src={assets.support_img} className='w-12 m-auto mb-5' alt=''/>
            <p className='font-semibold'>Customer support</p>
            <p className='text-gray-400'>we provide customer support from 7:00 to 20:00</p>
        </div>
      
    </div>
  )
}

export default OurPolicy
