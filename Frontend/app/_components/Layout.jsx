import React from 'react'

const Layout = ({children}) => {
  return (
    <section className='container mx-auto py-8 px-4'>
      {children}
    </section>
  )
}

export default Layout
