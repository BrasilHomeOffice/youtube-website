import { gql } from '@apollo/client';
import create from 'zustand';

export const useAuth = create(set => ({
  loading: true,
  errorMessage: '',
  loggedIn: false,
  accessToken: '',
  user: {
    id: null,
    name: '',
    email: '',
    gender: '',
    city: '',
    country: '',
    birthday: '',
    thumbnail: '',
  },
  setLoading: (loading) => set(state => ({ loading: !!loading })),
  setUser: (accessToken, user) => set(state => ({ ...state, accessToken, user, loading: false, })),
}));

export const MUTATION_FACEBOOK_LOGIN = gql`
  mutation FacebookLogin($accessToken: String!, $userID: String!) {
    facebookLogin(accessToken: $accessToken, userID: $userID) {
      accessToken
      user {
        id
        name
        email
        gender
        city
        country
        birthday
        thumbnail
      }
    }
  }
`;
