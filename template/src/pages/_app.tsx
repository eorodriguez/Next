import '../styles/globals.css'
import type { AppProps, AppType } from 'next/app'
import { type Session } from "next-auth";
import { SessionProvider } from "next-auth/react";

//export default function App({ Component, pageProps }: AppProps) {
//  return <Component {...pageProps} />
//}

const MyApp: AppType<{ session: Session | null }> = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {
  return (
    <SessionProvider session={session}>
      <Component {...pageProps} />
    </SessionProvider>
  );
};

export default MyApp;