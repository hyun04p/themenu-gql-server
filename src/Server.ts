import express from 'express';
import { graphqlHTTP } from 'express-graphql';
import rootResolver from './resolver';
import schema from './schema';

const app = express();
const PORT = process.argv[2] === undefined ? 4000 : process.argv[2];

const now = new Date().getTime();
app.get('/', (req, res) => {
  res.json({
    timestampe: now,
    message: 'gql server good?',
  });
});

app.use(
  '/graphql',
  graphqlHTTP({
    schema: schema,
    rootValue: rootResolver,
    graphiql: true,
  })
);

app.listen(PORT, () => {
  console.log(`Listening to Port: ${PORT}`);
});
