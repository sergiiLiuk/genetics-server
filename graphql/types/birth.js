const GraphQLObjectType = require('graphql').GraphQLObjectType;
const GraphQLNonNull = require('graphql').GraphQLNonNull;
const GraphQLID = require('graphql').GraphQLID;
const GraphQLString = require('graphql').GraphQLString;

exports.birthRecordType = new GraphQLObjectType({
    name: 'BirthRecord',
    fields: () => ({
        id: { type: GraphQLID },
        firstName: {type: GraphQLString},
        secondName: {type: GraphQLString}, 
        lastName: {type: GraphQLString},   
        actNumber: {type: GraphQLString},   
        sex: {type: GraphQLString},
        birthPlace: {type: GraphQLString},
        birthday: {type: GraphQLString},
        photo: {type: GraphQLString},
        note: {type: GraphQLString},
        fatherName: {type: GraphQLString},
        motherName: {type: GraphQLString},
        motherLastname: {type: GraphQLString},     
        recordedBy: {type: GraphQLString},    
    })
  });

 