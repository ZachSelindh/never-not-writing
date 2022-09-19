import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
    // Todo: add back end link
    uri: "",
    cache: new InMemoryCache(),
});

export default client;