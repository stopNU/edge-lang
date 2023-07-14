import { AppProps } from "next/app";

type PageProps = {
  messages: IntlMessages;
  now: number;
};

type Props = Omit<AppProps<PageProps>, "pageProps"> & {
  pageProps: PageProps;
};

export default function App({ Component, pageProps }: Props) {
  return <Component {...pageProps} />;
}
