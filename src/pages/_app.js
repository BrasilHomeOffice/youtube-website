import '../styles/globals.scss'
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
} from "@apollo/client";

const client = new ApolloClient({
  uri: "https://api-vlog.local.brasilhomeoffice.com/",
  cache: new InMemoryCache()
});

function MyApp({ Component, pageProps }) {
  // return <Component {...pageProps} />
  return (
    <ApolloProvider client={client}>
      <Component {...pageProps} />
    </ApolloProvider>
  );
}

export default MyApp
