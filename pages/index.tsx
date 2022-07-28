import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import SubTitle from '../components/sub-title'
import AboutUs from '../sections/about-us'
import Annual from '../sections/annual'
import CommentBox from '../sections/comment'
import Exploration from '../sections/exploration'
import FeatureBox from '../sections/feature-box'
import Feedback from '../sections/feedback'
import Footer from '../sections/footer'
import Header from '../sections/header'
import WhyChooseUs from '../sections/why-choose-us'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>DLiTi Landscape</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin='anonymous' />
      </Head>

      <Header/>

      <main>
        <div className='first-box'>
        </div>
        <div className='container mx-auto md:pb-20 px-4'>
          <div className='md:py-20 py-10'>
            <SubTitle text='We are DLiTi Landscape' />
            <div className="letter-a font-semibold mb-2">
              <div>We energize the lives of</div>
              <div className='text-primary'>170 million people every day</div>
            </div>
            <div className='text-gray-600 mb-6 text-sm md:text-base' style={{ maxWidth: 584 }}>
              We are working actively to reduce climate emissions, put a price on carbon, and benefits societis around the world.
            </div>
            <div className='py-4 text-center md:text-left'>
              <Link href="/get-free-quote">
                <a className='border-primary border uppercase px-8 md:px-10 py-3 md:py-4 bg-gray-100 rounded-lg font-bold hover:bg-slate-800 transition duration-500 text-primary shadow-lg'>Get free quote</a>
              </Link>
            </div>
          </div>
        </div>
        <div>
          <div className='container mx-auto'>
            <div className='md:grid grid-cols-3'>
              <FeatureBox icon='fab fa-gitter' index={0} name='Decking' description='Safety is always paramount, of course, especially when it comes to keeping the little ones' />
              <FeatureBox icon='fas fa-hashtag' index={1} name='Fencine' description='Our qualified tradesmen will ensure your fence will not only do its job but look good, too' />
              <FeatureBox icon='fas fa-torii-gate' index={2} name='Gate' description='Our decks, stairs and pergolas will transform any yard into a lavish and stylish area' />
            </div>
          </div>
        </div>
        <AboutUs />
        <WhyChooseUs />
        <Exploration />
        <CommentBox />
        <Annual />
        <Feedback />
      </main>
      <Footer />
    </div>
  )
}

export default Home
