import React, { ReactNode } from 'react'
import Header from '$components/Layout/Header'
import Main from '$components/Layout/Main'
import Footer from '$components/Layout/Footer'
import Whatsapp from '$components/Whatsapp'

// import styles from './layout.module.css'
// ?
interface Props {
  children: JSX.Element[] | JSX.Element
}

const Layout = ({ children }: Props) => (
  <>
    <Header />
    <Main>{children}</Main>
    <Whatsapp/>
    <Footer />
  </>
)

export default Layout
