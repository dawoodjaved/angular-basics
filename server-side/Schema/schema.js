const {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLNonNull,
  GraphQLString,
  GraphQLFloat,

  GraphQLList,
  GraphQLID,
} = require("graphql");

//data
const items = [
  {
    id: "1",
    itemName: "item1",
    itemType: "type1",
    itemCompany: "company1",
    itemPrice: 100.3,
    itemImageUrl: "https://hello/yes/one",
    userId: "1",
  },
  {
    id: "2",
    itemName: "item2",
    itemType: "type2",
    itemCompany: "company2",
    itemPrice: 200.3,
    itemImageUrl: "https://hello/yes/onefdfds",
    userId: "2",
  },
  {
    id: "3",
    itemName: "item3",
    itemType: "type3",
    itemCompany: "company3",
    itemPrice: 300.3,
    itemImageUrl: "https://hello/yes/onefdfdsfer",
    userId: "2",
  },
];

const users = [
  {
    id: "1",
    firstName: "user1",
    lastName: "dummy1",
    email: "user1@gmail.com",
    password: "12345",
  },
  {
    id: "2",
    firstName: "user2",
    lastName: "dummy2",
    email: "user2@gmail.com",
    password: "678910",
  },
  {
    id: "3",
    firstName: "user3",
    lastName: "dummy3",
    email: "user3@gmail.com",
    password: "112233",
  },
];

const ItemType = new GraphQLObjectType({
  name: "items",
  fields: () => ({
    id: { type: GraphQLNonNull(GraphQLID) },
    itemName: { type: GraphQLNonNull(GraphQLString) },
    itemType: { type: GraphQLNonNull(GraphQLString) },
    itemCompany: { type: GraphQLNonNull(GraphQLString) },
    itemPrice: { type: GraphQLNonNull(GraphQLFloat) },
    itemImageUrl: { type: GraphQLNonNull(GraphQLString) },
    userId: { type: GraphQLNonNull(GraphQLID) },
    createdBy: {
      type: UserType,
      resolve: (parents, args) => {
        return users.find((user) => user.id === parents.userId);
      },
    },
  }),
});

const UserType = new GraphQLObjectType({
  name: "users",
  fields: () => ({
    id: { type: GraphQLNonNull(GraphQLID) },
    firstName: { type: GraphQLNonNull(GraphQLString) },
    lastName: { type: GraphQLNonNull(GraphQLString) },
    email: { type: GraphQLNonNull(GraphQLString) },
    password: { type: GraphQLNonNull(GraphQLString) },
    items: {
      type: GraphQLList(ItemType),
      resolve: (parents, args) => {
        return items.filter((item) => item.userId === parents.id);
      },
    },
  }),
});

const RootQuery = new GraphQLObjectType({
  name: "root",
  fields: () => ({
    items: {
      type: new GraphQLList(ItemType),
      resolve: (parents, args) => {
        return items;
      },
    },
    item: {
      type: ItemType,
      args: {
        id: { type: GraphQLID },
      },
      resolve: (parents, args) => {
        return items.find((item) => item.id === args.id);
      },
    },
    users: {
      type: new GraphQLList(UserType),
      resolve: (parents, args) => {
        return users;
      },
    },
    user: {
      type: UserType,
      args: {
        id: { type: GraphQLID },
      },
      resolve: (parents, args) => {
        return users.find((user) => user.id === args.id);
      },
    },
  }),
});

const schema = new GraphQLSchema({
  query: RootQuery,
});

module.exports = { schema };
