import 'next';
import { NormalizedCacheObject, ApolloClient } from 'apollo-boost';

declare module 'next' {
  export interface NextPageContext {
    apolloClient: ApolloClient<NormalizedCacheObject>;
  }
}
