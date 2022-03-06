import Navbar from '../components/navbar'
import Canvas from '../components/canvas'
import Inspector from '../components/inspector'


function Reality({message, content}) {
  return(
    <>
      <Navbar />
      <Canvas>{content}</Canvas>
      <Inspector></Inspector>
    </>
  )
}

export async function getStaticProps(context) {
  return {
    props: {
      message: `Next.js is awesome`,
      content: 'Reality content'
    },
  }
}

export default Reality
