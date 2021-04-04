const GraphQLObjectType = require('graphql').GraphQLObjectType;
const GraphQLNonNull = require('graphql').GraphQLNonNull;
const GraphQLID = require('graphql').GraphQLID;
const GraphQLString = require('graphql').GraphQLString;

exports.marriageRecordType = new GraphQLObjectType({
    name: 'MarriageRecord',
    fields: () => ({
        id: { type: GraphQLID },
        husbandFirstName: {type: GraphQLString},
        husbandSecondName: {type: GraphQLString},
        husbandLastName: {type: GraphQLString},
        wifeFirstName: {type: GraphQLString},
        wifeSecondName: {type: GraphQLString},
        wifeLastName: {type: GraphQLString},
        actNumber: {type: GraphQLString},   
        locality: {type: GraphQLString},
        marriageDate: {type: GraphQLString},
        photo: {type: GraphQLString},
        note: {type: GraphQLString},
        husbandFatherName: {type: GraphQLString},
        husbandMotherName: {type: GraphQLString},
        husbandMotherLastname: {type: GraphQLString},
        wifeFatherName: {type: GraphQLString},
        wifeMotherName: {type: GraphQLString},
        wifeMotherLastname: {type: GraphQLString},
        parish: {type: GraphQLString}   
    })
  });

 