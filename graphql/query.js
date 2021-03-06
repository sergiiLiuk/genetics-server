const GraphQLObjectType = require('graphql').GraphQLObjectType;
const GraphQLList = require('graphql').GraphQLList;
const BirthRecordModel = require('../models/birth');
const MarriageRecordModel = require('../models/marriage');
const DeathRecordModel = require('../models/death');
const birthRecordType = require('./types/birth').birthRecordType;
const deathRecordType = require('./types/death').deathRecordType;
const marriageRecordType = require('./types/marriage').marriageRecordType;

// Query
exports.queryType = new GraphQLObjectType({
  name: 'Query',
  fields: ()=> {
    return {
      birthRecords: {
        type: new GraphQLList(birthRecordType),
        resolve: () => {
          const birthRecords = BirthRecordModel.find().exec()
          if (!birthRecords) {
            throw new Error('Error')
          }
          return birthRecords
        }
      },
      deathRecords: {
        type: new GraphQLList(deathRecordType),
        resolve: () => {
          const deathRecords = DeathRecordModel.find().exec()
          if (!deathRecords) {
            throw new Error('Error')
          }
          return deathRecords
        }
      },
      marriageRecords: {
        type: new GraphQLList(marriageRecordType),
        resolve: () => {
          const marriageRecords = MarriageRecordModel.find().exec()
          if (!marriageRecords) {
            throw new Error('Error')
          }
          return marriageRecords
        }
      }
    }
  }
});

// module.exports =  new GraphQLSchema({
//     query: new GraphQLObjectType({
//         name: "Query",
//         fields: {
//             birthRecord: {
//                 type: GraphQLList(BirthRecordType),
//                 resolve: (root, args, context, info) => {
//                     return BirthRecordModel.find().exec();
//                 }
//             },
//             // person: {
//             //     type: PersonType,
//             //     args: {
//             //         id: { type: GraphQLNonNull(GraphQLID) }
//             //     },
//             //     resolve: (root, args, context, info) => {
//             //         return PersonModel.findById(args.id).exec()
//             //     }
//             // }
//         }
//     }),
//         // mutation: new GraphQLObjectType({
//     //     name: "Mutation",
//     //     fields: {
//     //         person: {
//     //             type: PersonType,
//     //             args: {
//     //                 firstName: { type: GraphQLNonNull(GraphQLString) },
//     //                 secondName: { type: GraphQLNonNull(GraphQLString) },
//     //                 lastName: { type: GraphQLNonNull(GraphQLString) },   
//     //                 sex: { type: GraphQLNonNull(GraphQLString) },
//     //                 locality: { type: GraphQLNonNull(GraphQLString) },
//     //                 birthday: { type: GraphQLNonNull(GraphQLString) },
//     //                 actNumber: { type: GraphQLNonNull(GraphQLString) },
//     //                 photo: { type: GraphQLNonNull(GraphQLString) },
//     //                 note: { type: GraphQLNonNull(GraphQLString) },
//     //                 fatherName: { type: GraphQLNonNull(GraphQLString) },
//     //                 motherName: { type: GraphQLNonNull(GraphQLString) },
//     //                 motherLastname: { type: GraphQLNonNull(GraphQLString) },
//     //                 recordedBy: { type: GraphQLNonNull(GraphQLString) }
//     //             },
//     //             resolve: (root, args, context, info) =>{
//     //                 var person = new PersonModel(args)
//     //                 return person.save()
//     //             }
//     //         }
//     //     }
//     // })
// })
