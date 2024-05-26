import React from 'react'
import Common from './Common'

const About = () => {
  const img = 'https://img.freepik.com/premium-vector/fail-start-up-business-depressed-businessman-company-owner-standing-beside-crash-launching-space-rocket-metaphor-new-business-failure_178156-815.jpg?w=2000'

  return (
    <>
      <Common name='Welcome to About Page' imgsrc={img} visit='/contact' btnname='Contact Now'> </Common>
    </>
  )
}

export default About