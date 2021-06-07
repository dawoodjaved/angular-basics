const { User } = require("../models/UserModel");
const { Item } = require("../models/ItemsModel");
const {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLNonNull,
  GraphQLString,
  GraphQLFloat,

  GraphQLList,
  GraphQLID,
} = require("graphql");

//Queries
const ItemType = new GraphQLObjectType({
  name: "items",
  fields: () => ({
    id: { type: new GraphQLNonNull(GraphQLID) },
    itemName: { type: new GraphQLNonNull(GraphQLString) },
    itemType: { type: new GraphQLNonNull(GraphQLString) },
    itemCompany: { type: new GraphQLNonNull(GraphQLString) },
    itemPrice: { type: new GraphQLNonNull(GraphQLFloat) },
    itemImageUrl: { type: new GraphQLNonNull(GraphQLString) },
    userId: { type: new GraphQLNonNull(GraphQLID) },
    createdBy: {
      type: UserType,
      resolve: (parents, args) => {
        return User.findById(parents.userId);
      },
    },
  }),
});

const UserType = new GraphQLObjectType({
  name: "users",
  fields: () => ({
    id: { type: new GraphQLNonNull(GraphQLID) },
    firstName: { type: new GraphQLNonNull(GraphQLString) },
    lastName: { type: new GraphQLNonNull(GraphQLString) },
    email: { type: new GraphQLNonNull(GraphQLString) },
    password: { type: new GraphQLNonNull(GraphQLString) },
    items: {
      type: GraphQLList(ItemType),
      resolve: (parents, args) => {
        return Item.find({}, { userId: parents.id });
      },
    },
  }),
});

const RootQuery = new GraphQLObjectType({
  name: "root",
  fields: () => ({
    items: {
      type: new GraphQLList(ItemType),
      resolve: (parents, args) => Item.find({}),
    },
    item: {
      type: ItemType,
      args: {
        id: { type: GraphQLID },
      },
      resolve: (parents, args) => {
        return Item.findById(args.id);
      },
    },
    users: {
      type: new GraphQLList(UserType),
      resolve: (parents, args) => User.find({}),
    },
    user: {
      type: UserType,
      args: {
        id: { type: GraphQLID },
      },
      resolve: (parents, args) => {
        return User.findById(args.id);
      },
    },
  }),
});

//Mutations
const mutations = new GraphQLObjectType({
  name: "mutations",
  fields: () => ({
    addUser: {
      type: UserType,
      args: {
        firstName: { type: GraphQLNonNull(GraphQLString) },
        lastName: { type: GraphQLNonNull(GraphQLString) },
        email: { type: GraphQLNonNull(GraphQLString) },
        password: { type: GraphQLNonNull(GraphQLString) },
      },
      resolve: (parents, args) => {
        const user = new User({
          firstName: args.firstName,
          lastName: args.lastName,
          email: args.email,
          password: args.password,
        });
        return user.save();
      },
    },
    updateUser: {
      type: UserType,
      args: {
        id: { type: GraphQLNonNull(GraphQLID) },
        firstName: { type: GraphQLNonNull(GraphQLString) },
        lastName: { type: GraphQLNonNull(GraphQLString) },
        email: { type: GraphQLNonNull(GraphQLString) },
        password: { type: GraphQLNonNull(GraphQLString) },
      },
      resolve: (parents, args) => {
        const newUser = {
          firstName: args.firstName,
          lastName: args.lastName,
          email: args.email,
          password: args.password,
        };

        return User.findByIdAndUpdate(args.id, newUser);
      },
    },
    deleteUser: {
      type: UserType,
      args: {
        id: { type: new GraphQLNonNull(GraphQLID) },
      },
      resolve: (parents, args) => {
        return User.findByIdAndRemove(args.id);
      },
    },
    addItem: {
      type: ItemType,
      args: {
        itemName: { type: new GraphQLNonNull(GraphQLString) },
        itemType: { type: new GraphQLNonNull(GraphQLString) },
        itemCompany: { type: new GraphQLNonNull(GraphQLString) },
        itemPrice: { type: new GraphQLNonNull(GraphQLFloat) },
        itemImageUrl: { type: new GraphQLNonNull(GraphQLString) },
        userId: { type: new GraphQLNonNull(GraphQLID) },
      },
      resolve: (parents, args) => {
        const item = new Item({
          itemName: args.itemName,
          itemType: args.itemType,
          itemCompany: args.itemCompany,
          itemPrice: args.itemPrice,
          itemImageUrl: args.itemImageUrl,
          userId: args.userId,
        });
        return item.save();
      },
    },

    updateItem: {
      type: ItemType,
      args: {
        id: { type: GraphQLNonNull(GraphQLID) },
        itemName: { type: new GraphQLNonNull(GraphQLString) },
        itemType: { type: new GraphQLNonNull(GraphQLString) },
        itemCompany: { type: new GraphQLNonNull(GraphQLString) },
        itemPrice: { type: new GraphQLNonNull(GraphQLFloat) },
        itemImageUrl: { type: new GraphQLNonNull(GraphQLString) },
        userId: { type: new GraphQLNonNull(GraphQLID) },
      },
      resolve: (parents, args) => {
        const newItem = {
          itemName: args.itemName,
          itemType: args.itemType,
          itemCompany: args.itemCompany,
          itemPrice: args.itemPrice,
          itemImageUrl: args.itemImageUrl,
          userId: args.userId,
        };

        return Item.findByIdAndUpdate(args.id, newItem);
      },
    },
    deleteItem: {
      type: ItemType,
      args: {
        id: { type: new GraphQLNonNull(GraphQLID) },
      },
      resolve: (parents, args) => {
        return Item.findByIdAndRemove(args.id);
      },
    },
  }),
});

const schema = new GraphQLSchema({
  query: RootQuery,
  mutation: mutations,
});

module.exports = { schema };
