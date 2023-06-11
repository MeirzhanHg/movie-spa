import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";

import Layout from "../components/layout/Layout";

import { store } from "../store/store";
import ReduxToast from "./ReduxToast";

import { Provider } from "react-redux";
import HeadProvider from "./HeadProvider/HeadProvider";
import AuthProvider from "./AuthProvider/AuthProvider";

const queryClient = new QueryClient({
   defaultOptions: {
      queries: {
         refetchOnWindowFocus: false,
      },
   },
});

const MainProvider = ({ children, Component }) => {
   return (
      <HeadProvider>
         <Provider store={store}>
            <QueryClientProvider client={queryClient}>
               <ReduxToast />
               <AuthProvider Component={Component}>
                  <Layout>{children}</Layout>
                  <ReactQueryDevtools initialIsOpen={false} />
               </AuthProvider>
            </QueryClientProvider>
         </Provider>
      </HeadProvider>
   );
};

export default MainProvider;
