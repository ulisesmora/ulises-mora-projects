
import { NextUIProvider, createTheme } from '@nextui-org/react';
import type { AppProps } from 'next/app'

import  '../styles/globals.css'


export default function App({ Component, pageProps }: AppProps) {

  const darkTheme = createTheme({
    type: 'dark',

  })
  
  return (
  <NextUIProvider theme={darkTheme}>
  <Component {...pageProps} />
  </NextUIProvider>

)}
