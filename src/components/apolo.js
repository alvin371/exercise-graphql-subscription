import React from 'react'
import {
    ApolloClient,
    InMemoryCache,
    ApolloProvider,
    useQuery,
    gql
} from "@apollo/client";

const client = new ApolloClient({
    uri: 'https://sterling-glider-97.hasura.app/v1/graphql',
    cache: new InMemoryCache(),
    headers: {
        'x-hasura-admin-secret': 'Dlx9qzxvdW6mXt51BmimJHOE4UHyBY3V66WMOCaEVOFl5TzQ5jNIzWLvpy8qnuV2'
    }
});

function apolo() {
    return (
        <div>

        </div>
    )
}

export default apolo
