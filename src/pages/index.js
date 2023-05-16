import Header from '@/components/Header/Header'
import Fifth from '@/components/fifth-block/Fifth'
import First from '@/components/first-block/First'
import Footer from '@/components/footer/Footer'
import Second from '@/components/second-block/Second'
import Third from '@/components/third-block/Third'
import Fourth from '@/components/fourth-block/Fourth'
import Sixth from '@/components/sixth-block/Sixth'
import Gallery from '@/components/gallery-block/Gallery'
import Head from 'next/head'
import PurchaseFirst from '@/components/PurchaseFirstPage/PurchaseFirst'
import Catalog from '@/components/CatalogPage/Catalog'
import PurchaseSecond from '@/components/PurchaseSecondPage/PurchaseSecond'


export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header/>
      {/* <Catalog/> */}
      {/* <PurchaseFirst />
      <PurchaseSecond/> */}
      <First/>
      <Second/>
      <Third/>
      <Fourth/>
      <Fifth />
      <Gallery/>
      <Sixth/>
      <Footer/>
    </>
  )
}
