const GraphQLObjectType = require('graphql').GraphQLObjectType;
const GraphQLNonNull = require('graphql').GraphQLNonNull;
const GraphQLID = require('graphql').GraphQLID;
const GraphQLString = require('graphql').GraphQLString;

exports.deathRecordType = new GraphQLObjectType({
    name: 'DeathRecord',
    fields: () => ({
        id: { type: GraphQLID },
        firstName: {type: GraphQLString},
        secondName: {type: GraphQLString}, 
        lastName: {type: GraphQLString},   
        actNumber: {type: GraphQLString},   
        sex: {type: GraphQLString},
        locality: {type: GraphQLString},
        birthday: {type: GraphQLString},
        photo: {type: GraphQLString},
        note: {type: GraphQLString},
        fatherName: {type: GraphQLString},
        motherName: {type: GraphQLString},
        motherLastname: {type: GraphQLString},     
        parish: {type: GraphQLString},    
    })
  });

 