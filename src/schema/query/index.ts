const query = `#graphql
  type Query {
    test: String
    user(id: Int!): User
  }
`;

export default query;
