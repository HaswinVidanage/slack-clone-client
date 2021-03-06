import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './routes';


import registerServiceWorker from './registerServiceWorker';
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import gql from "graphql-tag";


const client = new ApolloClient({
  uri: "http://localhost:8080/graphql/"
});

// const client = new ApolloClient({
//   uri: "http://localhost:8080/graphiql/"
// });



const App = () => (
  <ApolloProvider client={client}>
    <Routes/>
  </ApolloProvider>
);

ReactDOM.render(<App/>, document.getElementById('root'));
registerServiceWorker();
