import { useEffect, useState } from 'react';
import Navbar from '../components/Navbar'
import Loading from '../components/Loading'
import '../styles/globals.css'
import { motion, AnimatePresence } from 'framer-motion';

function MyApp({ Component, pageProps, router }) {
  const [pageLoading, setPageLoading] = useState(false);
  
  useEffect(() => {
    const handleStart = () => { setPageLoading(true); };
    const handleComplete = () => { setPageLoading(false); };

    router.events.on('routeChangeStart', handleStart);
    router.events.on('routeChangeComplete', handleComplete);
    router.events.on('routeChangeError', handleComplete);
  }, [router])

  return (
    <AnimatePresence key={router.route}>
      {pageLoading ? <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
        <Loading />
      </motion.div> : (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
          <Navbar />
          <Component {...pageProps} />
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default MyApp
