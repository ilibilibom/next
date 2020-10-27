import { ApolloClient } from "apollo-client";
import { InMemoryCache } from "apollo-cache-inmemory";
import withApollo from "next-with-apollo";
import { createHttpLink } from "apollo-link-http";
import fetch from "isomorphic-unfetch";
import { graphUrl } from "../routes/routes";

const link = createHttpLink({
  fetch,
  uri: graphUrl,
});

export default withApollo(
  ({ initialState }) =>
    new ApolloClient({
      link: link,
      cache: new InMemoryCache()
        .restore(initialState || {}),
    })
);
