import MainProvider from "../app/providers/MainProvider";
import "../app/assets/styles/globals.scss";

const MyApp = ({ Component, pageProps }) => {
   return (
      <MainProvider Component={Component}>
         <Component {...pageProps} />
      </MainProvider>
   );
};

export default MyApp;
