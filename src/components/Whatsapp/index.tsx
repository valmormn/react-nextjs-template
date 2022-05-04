import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'

import styles from './whatsapp.module.css'
// import whatsAppBadge from '~/assets/img/WhatsApp.svg'
import WhatsAppBadge from './whatsApp.svg'

// Whatsapp badge for contact
// https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg

const myLoader = ({ src, width, quality }:any) => {
  return `https://example.com/${src}?w=${width}&q=${quality || 75}`
}
// loader={myLoader}


const Whatsapp: NextPage = () => {
  return (
    <div id="Whatsapp" className={[styles.container, styles.float].join(" ") }>
      <WhatsAppBadge className={styles.myFloat}/>
    </div>
  )
}

export default Whatsapp
