import '../styles/globals.scss'
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  HttpLink,
  ApolloLink,
  concat,
} from "@apollo/client";
import { SnackbarProvider } from 'notistack';
import { useAuth } from '../lib/auth/auth';

const httpLink = new HttpLink({
  uri: 'https://api-vlog.local.brasilhomeoffice.com/',
});

const authMiddleware = new ApolloLink((operation, forward) => {
  // add the authorization to the headers
  const accessToken = useAuth.getState().accessToken;

  if (accessToken) {
    operation.setContext({
      headers: {
        authorization: accessToken,
      },
    });
  }

  return forward(operation);
});

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: concat(authMiddleware, httpLink),
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
