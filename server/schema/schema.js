// import graphql
const graphql = require("graphql");

// import graphql types
const { GraphQLObjectType, GraphQLString } = graphql;

// create type of object User
const UserType= new GraphQLObjectType({
    name: "User",
    fields: () => ({
        id: {type: GraphQLString },
        name: {type: GraphQLString }
    })
})