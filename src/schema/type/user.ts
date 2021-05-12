const User = `#graphql
  type User {
    id: Int!
    name: String!
    age: Int!
    height(unit: LENGTH_UNIT): Int!
  }
`;

export default User;
