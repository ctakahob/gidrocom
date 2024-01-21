import '@/styles/globals.css';
import Header from "@/components/header";
import Footer from "@/components/footer";
import {CssBaseline, ThemeProvider} from "@mui/material";
import {useTheme} from "@mui/material/styles";
import PerfectScrollbar from 'react-perfect-scrollbar';
import 'react-perfect-scrollbar/dist/css/styles.css';

export default function App({Component, pageProps}) {
  const theme = useTheme();

  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline/>
        <Header/>
        <PerfectScrollbar style={{height: '100vh', overflowX: 'hidden'}}>
          <Component {...pageProps} />
        </PerfectScrollbar>
        <Footer/>
      </ThemeProvider>
    </>
  );
}
