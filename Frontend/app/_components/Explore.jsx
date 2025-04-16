import React from 'react'
import Card from './Card'
import Title from './Title'
import Layout from './Layout'

const Explore = () => {
  return (
    <Layout>
      <div className='flex flex-col items-center justify-center gap-4'>
          <Title 
            title="Explore Our Seaside Cafe" 
            desc="Discover a taste of the coast with our specialty brews, refreshing drinks, and delicious bites." 
          />
          <div className='grid sm:grid-cols-1 md:grid-cols-3 gap-8 my-4'>
              <Card 
                  imgSrc="/coffee/icon1.png"
                  title="Our Catering"
                  description="Savor our latest blend, crafted for a sweet and smooth seaside coffee experience."
              />
              <Card 
                  imgSrc="/coffee/icon2.png"
                  title="Our Catering"
                  description="Indulge in rich, aromatic coffee moments that feel like a fresh ocean breeze."
              />
              <Card 
                  imgSrc="/coffee/icon3.png"
                  title="Our Catering"
                  description="Let our coffee lift your spirits — a perfect pick-me-up with coastal charm."
              />
          </div>
      </div>
    </Layout>
  )
}

export default Explore
