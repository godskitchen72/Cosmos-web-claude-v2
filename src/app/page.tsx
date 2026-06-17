import StarsCanvas from '@/components/ui/StarsCanvas'
import Navigation from '@/components/layout/Navigation'
import Footer from '@/components/layout/Footer'
import HeroSection from '@/components/sections/HeroSection'
import TrustSection from '@/components/sections/TrustSection'
import FeatureGrid from '@/components/sections/FeatureGrid'
import WhoWeServe from '@/components/sections/WhoWeServe'
import CTASection from '@/components/sections/CTASection'

export default function HomePage() {
  return (
    <main style={{ position: 'relative', minHeight: '100vh' }}>
      <StarsCanvas />
      <Navigation />
      <HeroSection />
      <TrustSection />
      <FeatureGrid />
      <WhoWeServe />
      <CTASection />
      <Footer />
    </main>
  )
}
