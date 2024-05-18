import React from 'react'
import Layout from './layout'
import Marq from '@/components/Marq'
import { Hero } from '@/components'

function Sholawat() {
  return (
    <Layout>
      <Marq />
      <div className='w-full h-screen dark:bg-secondary'>
        <Hero/>
      </div>
    </Layout>
  )
}

export default Sholawat