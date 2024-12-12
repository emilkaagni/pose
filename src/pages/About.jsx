import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsletterBox from '../components/NewsletterBox'
const About = () => {
  return (
    <div>
      <div className='text-2xl text-center pt-8 border-t'>
        <Title text1={'ABOUT'}text2={'Us'}/>
      </div>
      <div className='my-10 flex flex-col md:flex-row gap-16'>
        <img className='w-full md:max-w-[450px]' src={assets.about_img} alt="" />
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
          <p>At Pose, we bring authentic Nepali fashion to life through our own production facility right here in Kathmandu, Nepal. As both manufacturers and retailers, we take pride in creating high-quality daily wear.</p>
          <p>Our in-house factory, staffed with skilled local artisans, allows us to maintain exceptional quality control while keeping prices affordable. By overseeing every step of production, we ensure each garment meets our high standards while offering you the best prices without compromising on quality.</p>
          <b className='text-gray-800'>Our Mission</b>
          <p>To preserve and promote Made In Nepal wear by creating accessible, high-quality garments that blends craftsmanship with contemporary style. We strive to make Nepali wear available to all through ethical manufacturing and fair pricing, while supporting local artisans and sustainable production practices.</p>
        </div>
      </div>
      <div className='text-xl py-4'>
        <Title text1={'Why'} text2={'Choose Us'}/>
      </div>
      <div className='flex flex-col md:flex-row text-sm mg-20'>
        <div className='border px-10 md:px-16 py-8 sm:py-8 flex flex-col gap-5'>
          <b>Quality assurance</b>
          <p className='text-gray-600'> Our unique factory-to-store model sets us apart. With our own production facility, we guarantee superior quality while offering the best prices in the market. </p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-8 flex flex-col gap-5'>
          <b>Customer service</b>
          <p className='text-gray-600'> Our dedicated team is here to assist you throufh out your way of shopping. feel free to contact us in case you have any question. </p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-8 flex flex-col gap-5'>
          <b>Attention to details</b>
          <p className='text-gray-600'>Each garment is crafted by skilled local artisans under strict quality control. We don't just sell Nepali wear – we create it with pride and passion right here in Nepal. </p>
        </div>
      </div>

      <NewsletterBox/>
      
    </div>
  )
}

export default About
