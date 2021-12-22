import React from 'react'

import { Helmet } from 'react-helmet'

import styles from './home.module.css'

const Home = () => {
  return (
    <div className={styles['container']}>
      <Helmet>
        <title>Regional Quality Specialist</title>
        <meta property="og:title" content="Regional Quality Specialist" />
      </Helmet>
    </div>
  )
}

export default Home
