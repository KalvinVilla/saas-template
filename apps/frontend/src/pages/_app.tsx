import '../globals.css'

import type { AppProps } from 'next/app'
import { appWithTranslation } from 'next-i18next'
import { Metadata } from 'next';
import { Header } from '@hm/ui';
import nextI18NextConfig from '../../next-i18next.config.js'


const MyApp = ({ Component, pageProps }: AppProps) => (
  <>
  <Header title='Temp' />
  <Component {...pageProps} />
  </>
)

export default appWithTranslation(MyApp , nextI18NextConfig)