import Head from 'next/head'
import { NextUIProvider } from '@nextui-org/react';

import Image from 'next/image'
import { Inter } from 'next/font/google'
import MapContainer from '../components/MapContainer'
import DataChart from '../components/DataChart'
import Main from '../components/Main'
import Levels from '../components/Levels'
import{ Agencies } from '../components/Agencies'
import Footer from '../components/Footer'


export default function Home() {

  return (
    <NextUIProvider>
      <Head>
        <title>Emergency Management System</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <br />
      <Main/>
      <br/>
      <Levels/>
      <br />
      <br />
      <br />
      <DataChart/>
      <Agencies/>
      <Footer/>
     
    </NextUIProvider>
  )

}
