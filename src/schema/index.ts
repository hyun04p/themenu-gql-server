import { buildSchema } from 'graphql';

import allTypes from './type';
import query from './query';
import allEnums from './enum';

const schema = buildSchema(`
${query}
${allTypes}
${allEnums}
`);

export default schema;
