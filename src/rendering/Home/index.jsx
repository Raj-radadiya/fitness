import React from 'react'
import Herobanner from './Herobanner'
import CTASection from './Cta'
import ServicesSection from './service'
import TrainerSection from './TrainerSection'
import PricingSection from './Pricing'
import TestimonialSection from './Testimonial'
import ScheduleSection from './Schedule'
import FAQSection from './Faq'
import GallerySection from './Gellary'
import ContactSection from './Location'

export default function Home() {
  return (
    <div>
        <Herobanner/>
        <CTASection/>
        <ServicesSection/>
        <TrainerSection/>
        <PricingSection/>
        <TestimonialSection/>
        <ScheduleSection/>
        <FAQSection/>
        <GallerySection/>
        <ContactSection/>
    </div>
  )
}
