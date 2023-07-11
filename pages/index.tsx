import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import { Button, Link, Navbar, Text } from '@nextui-org/react'
import ProjectCards from '@/components/Screens/ProjectCards'
import HomeScreen from '@/components/Screens/HomeScreen'
import { useState } from 'react'
import { useRouter } from 'next/router'
import NavbarCom from '@/components/singleComponents/NavbarCom'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
 
  
  return (
    <>
      <Head>
        <title>Ulises Mora Projects</title>
        <meta name="description" content="ulises mora projects" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={'PageContainer'}>
     <NavbarCom/>
      <HomeScreen/>
      <ProjectCards/>
      </main>
    </>
  )
}
