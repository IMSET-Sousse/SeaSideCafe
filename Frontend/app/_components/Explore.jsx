import React from 'react'
import Card from './Card'
import Title from './Title'
import Layout from './Layout'

const Explore = () => {
  return (
    <Layout>
      <div className='flex flex-col items-center justify-center gap-4'>
          <Title title="Explore Our Alowishus" desc="A drink from the 'My Alowishus' bottled brews range or grab one of our delecious."/>
          <div className='grid sm:grid-cols-1 md:grid-cols-3 gap-8 my-4'>
              <Card 
                  imgSrc="/coffee/icon1.png"
                  title="Our Catering"
                  description="Try our latest blend today. Have sweet coffee with us. try something different with coffee"
                 
                  />
              <Card 
                  imgSrc="/coffee/icon2.png"
                  title="Our Catering"
                  description="Try our latest blend today. Have sweet coffee with us.its feels so amazing to see you with our coffee."
                  />
              <Card 
                  imgSrc="/coffee/icon3.png"
                  title="Our Catering"
                  description="Try our latest blend today. Have sweet coffee with us. I hope our coffee you gives you wings."
                  />
          </div>
      </div>
    </Layout>
  )
}

export default Explore
