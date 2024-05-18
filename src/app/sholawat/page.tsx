import React from 'react'
import Layout from './layout'
import Marq from '@/components/Marq'
import { Hero } from '@/components'
import Card from '@/components/sholawat/Card'

function Sholawat() {
  return (
    <Layout>
      <Marq />
      <div className='flex flex-col justify-center items-center w-full min-h-screen dark:bg-secondary anim'>
        <Hero/>
        <div className='w-full h-auto flex items-center justify-center py-28'>
          <Card/>
        </div>
      </div>
    </Layout>
  )
}

export default Sholawat