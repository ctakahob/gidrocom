import '@/styles/globals.css'
import CssBaseline from '@mui/material/CssBaseline';
import Header from "@/components/header";
import Footer from "@/components/footer";

export default function App({Component, pageProps}) {
  return (
    <>
      <CssBaseline/>
      <Header/>
      <Component {...pageProps} />
      <Footer/>
    </>)
}
