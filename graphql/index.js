const GraphQLSchema = require('graphql').GraphQLSchema;
// const GraphQLObjectType = require('graphql').GraphQLObjectType;
const query = require('./query').queryType;
// const mutation = require('./mutations/index');
 
exports.querySchema = new GraphQLSchema({
  query: query,
//   mutation: new GraphQLObjectType({
//     name: 'Mutation',
//     fields: mutation
//   })
})

 