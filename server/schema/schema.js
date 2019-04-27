// import graphql
const graphql = require("graphql");

// import graphql types
const { GraphQLObjectType, GraphQLString, GraphQLSchema } = graphql;

// create type of object User
const UserType= new GraphQLObjectType({
    name: "User",
    fields: () => ({
        id: {type: GraphQLString },
        name: {type: GraphQLString }
    })
});

// create root query
const RootQuery = new GraphQLObjectType({
    name: "RootQueryType",
    fields: {
        user: {
            type: UserType,
            args: {id: {type: GraphQLString}},
            resolve(parent, args) {
                // code to get data from db / other source
            }
        }
    }
});

module.exports = new GraphQLSchema({
    query: RootQuery
})