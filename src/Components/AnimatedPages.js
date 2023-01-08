import React from 'react'
import { motion } from 'framer-motion'

const animations ={
    initial:{width:100},
    animate:{width:'100%'},
    exit:{x: window.innerWidth, transition:{duration:0.4}},
}

export const AnimatedPages = ({children}) => {
  return (
    <motion.div variants={animations} initial="initial" animate="animate" exit="exit">
      {children}
    </motion.div>
  )
}
