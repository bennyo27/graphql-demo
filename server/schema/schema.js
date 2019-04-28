// import graphql
const graphql = require("graphql");
// import lodash to use array?
const _ = require("lodash");

// import graphql types
const {
    GraphQLObjectType,
    GraphQLString,
    GraphQLSchema,
    GraphQLID,
    GraphQLInt
} = graphql;

// dummy data users
var users = [
    { name: 'User One', id: '1' },
    { name: 'User Two', id: '2' },
    { name: 'User Three', id: '3' },
];

// dummy data reviews
var reviews = [
    {name: "Review One", review: 5, id: "1"},
    {name: "Review Two", review: 1, id: "2"},
    {name: "Review Three", review: 4, id: "3"},
]

// create type of object User
const UserType= new GraphQLObjectType({
    name: "User",
    fields: () => ({
        id: {type: GraphQLID },
        name: {type: GraphQLString }
    })
});

// create type of object review
const ReviewType = new GraphQLObjectType({
    name: "Review",
    fields: () => ({
        id: {type: GraphQLID},
        name: {type: GraphQLString},
        review: {type: GraphQLInt}
    })
})

// create root query
const RootQuery = new GraphQLObjectType({
    name: "RootQueryType",
    fields: {
        user: {
            type: UserType,
            args: {id: {type: GraphQLID}},
            resolve(parent, args) {
                // code to get data from db / other source
                return _.find(users, {id: args.id})
            }
        },
        review: {
            type: ReviewType,
            args: {id: {type: GraphQLID}},
            resolve(parent, args) {
                // code to get data from db / other sources
                return _.find(reviews, {id: args.id})
            }
        }
    }
});

module.exports = new GraphQLSchema({
    query: RootQuery
})