import '../styles/globals.scss'
import type { AppProps } from 'next/app'
import Layout from '../components/Layout'
import { useEffect } from 'react'
import TagManager, { TagManagerArgs } from "react-gtm-module";

function MyApp({ Component, pageProps }: AppProps) {

  const gtmId = process.env.GTM_ID || "";

  const tagManagerArgs: TagManagerArgs = {
    gtmId: gtmId
  }

  useEffect(() => {

    if (gtmId !== "")
      TagManager.initialize(tagManagerArgs)
  })

  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
