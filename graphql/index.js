const GraphQLSchema = require('graphql').GraphQLSchema;
// const GraphQLObjectType = require('graphql').GraphQLObjectType;
const queryType = require('./queries/birth').queryType;
// const mutation = require('./mutations/index');
 
exports.birthRecordSchema = new GraphQLSchema({
  query: queryType,
//   mutation: new GraphQLObjectType({
//     name: 'Mutation',
//     fields: mutation
//   })
})