import Navbar from '../components/navbar'
import Canvas from '../components/canvas'
import Inspector from '../components/inspector'


function About({message, content}) {
  return(
    <>
      <Navbar selected="about"/>
      <Canvas>{content}</Canvas>
      <Inspector></Inspector>
    </>
  )
}

export async function getStaticProps(context) {
  return {
    props: {
      message: `Next.js is awesome`,
      content: 'About content'
    },
  }
}

export default About
