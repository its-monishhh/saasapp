import { Button } from '@/components/ui/button'
import CompanionCard from '@/components/ui/CompanionCard'
import CompanionsList from '@/components/ui/CompanionsList'
import CTA from '@/components/ui/CTA'
import { recentSessions } from '@/constants'
import React from 'react'

const Page = () => {
  return (
    <main>
      <h1 className="text-2xl underline">Popular Companions</h1>
      <section className='home-section'>
        <CompanionCard 
        id='123'
        name="Neura the Brainy Explorer"
        topic="Neural network of the Brain"
        subject="science"
        duration={45}
        color="#f7f83f"
        />

        <CompanionCard 
        id='456'
        name="Countsy the number wizard"
        topic="Derivatives and Integrals"
        subject="math"
        duration={30}
        color="#f7f83f"
        />

        <CompanionCard 
        id='789'
        name="Verba the Vocabulary Builder"
        topic="Language"
        subject="English Literature"
        duration={30}
        color="#f7f83f"/>

      </section>
      <section className='home-section'>
        <CompanionsList
        title="Recently completed sessions"
        companions={recentSessions}
        classNames="w-2/3 max-lg:w-full"
         />
        <CTA />
      </section>

    </main>
  )
}

export default Page