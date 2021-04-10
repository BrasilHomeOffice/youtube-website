import { gql } from '@apollo/client';
import create from 'zustand';

export const useAuth = create(set => ({
  loading: true,
  errorMessage: '',
  loggedIn: false,
  accessToken: '',
  userName: '',
  userThumbnail: '',
  setLoading: (loading) => set(state => ({ loading: !!loading })),
}));

export const MUTATION_FACEBOOK_LOGIN = gql`
  mutation FacebookLogin($accessToken: String!, $userID: String!) {
    facebookLogin(accessToken: $accessToken, userID: $userID) {
      accessToken
    }
  }
`;
