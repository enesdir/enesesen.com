import { About } from '@components/About'
import PageTitle from '@components/PageTitle'

const AboutPage = () => (
  <About>
    <h1 style={{ display: 'none' }}>Enes ESEN</h1>

    <PageTitle title="Hello Milky Way 🌌" />
    <About.Intro />

    <PageTitle title="Tech Stack" />
    <About.TechStack />
  </About>
)

export default AboutPage
