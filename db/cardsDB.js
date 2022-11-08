import { MongoClient } from "mongodb";
import dotenv from "dotenv";
dotenv.config({ path: "./config/config.env" });
require("dotenv").config();
const DB_USER = process.env.MY_DB_USERNAME;
const DB_PASSWORD = process.env.MY_DB_PASSWORD;
function MyMongoDB() {
  const myDB = {};
  const url = `mongodb+srv://${DB_USER}:${DB_PASSWORD}@cluster0.g3bcu3h.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;
  const DB_name = "businessCardDB";
  const collections = "cards";

  myDB.createCard = async (user, card) => {
    const client = new MongoClient(url);
    client.connect();
    try {
      client.connect();
      const database = client.db(DB_name);
      const cardsCol = database.collection(collections);
      const query = { username: user };
      const cardname = card.cardname;
      const cardcontent = card.cardcontent;
      const cardUser = await cardsCol.findOne(query);
      // if user doesn't have a card
      if (!cardUser) {
        cardsCol.insertOne({
          username: user,
          cards: {},
        });
      }
      cardsCol.updateOne(
        query,
        {
          $set: { [`cards.${cardname}`]: cardcontent },
        },
        { upsert: true }
      );
      const ecardUser = await cardsCol.findOne(query);
      console.log(ecardUser);
      if (ecardUser) {
        return true;
      } else {
        return false;
      }
    } finally {
      client.close();
    }
  };

  myDB.fetchingCards = async (user) => {
    const client = new MongoClient(url);
    client.connect();
    try {
      client.connect();
      const database = client.db(DB_name);
      const cardsCol = database.collection(collections);
      const query = { username: user };
      const cardUser = await cardsCol.findOne(query);
      if (cardUser) {
        return cardUser.cards;
      }
      return {};
    } finally {
      client.close();
    }
  };

  myDB.deleteCard = async (id) => {
    const client = new MongoClient(url);
    client.connect();
    try {
      const database = client.db(DB_name);
      const cardsCol = database.collection(collections);
      const query = { username: "jason" };
      const cardUser = await cardsCol.findOne(query);
      console.log(cardUser);
      console.log("middle id", id);
      const key = id.slice(1);
      console.log("key ==", key);
      cardsCol.updateOne(
        query,
        {
          $unset: { [`cards.${key}`]: 1 },
        },
        { upsert: true }
      );
      const ncardUser = await cardsCol.findOne(query);
      console.log(ncardUser);
    } finally {
      client.close();
    }
  };

  myDB.updateCard = async (currentUser, id, card) => {
    const client = new MongoClient(url);
    client.connect();
    try {
      client.connect();
      const database = client.db(DB_name);
      const cardsCol = database.collection(collections);
      const query = { username: currentUser };
      const cardUser = await cardsCol.findOne(query);
      console.log("old card", cardUser);
      const key = id.slice(1);
      console.log("key ==", key);
      console.log("CARD", card);

      cardsCol.updateOne(
        query,
        {
          $set: { [`cards.${key}`]: card.cardcontent },
        },
        { upsert: true }
      );

      const ncardUser = await cardsCol.findOne(query);
      console.log("new card", ncardUser);
      return true;
    } finally {
      client.close();
    }
  };

  return myDB;
}

export default MyMongoDB();
