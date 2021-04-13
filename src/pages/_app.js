import '../styles/globals.scss'
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
} from "@apollo/client";
import { SnackbarProvider } from 'notistack';

const client = new ApolloClient({
  uri: "https://api-vlog.local.brasilhomeoffice.com/",
  cache: new InMemoryCache()
});

function MyApp({ Component, pageProps }) {
  return (
    <ApolloProvider client={client}>
      <SnackbarProvider
        maxSnack={3}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        autoHideDuration={4000}
      >
        <Component {...pageProps} />
      </SnackbarProvider>
    </ApolloProvider>
  );
}

export default MyApp
