global.TextEncoder = require("util").TextEncoder;
global.TextDecoder = require("util").TextDecoder;
const server = require("../server/server.js");
const request = require("supertest");
const mongoose = require("mongoose");
const User = require("../server/models/UserModel.js");

// const Cookies = require('expect-cookies');

const URI =
  "mongodb+srv://bklynpeter:334070aa@codesmith.saamf.mongodb.net/eevee?retryWrites=true&w=majority";

// @TODO: figure out how to test cookies, figure out how to properly close async operations

// TEST USERS
describe("/users POST", () => {
  beforeAll(() => {
    mongoose.connect(URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
  });

  afterAll(async () => {
    await mongoose.disconnect();
  });
  // signup test
  xit("responds with a status 200 and exact user info for user that signed up", async () => {
    const newUser = { username: "jolteon1", password: "1234" };
    await request(server)
      .post("/api/users/signup")
      .send(newUser)
      .set("Accept", "application/json")
      .expect((res) => {
        expect(res.body.username).toEqual(newUser.username);
        expect(res.body.password).toEqual(newUser.password);
      })
      .expect(200);
  });

  // login test
  xit("responds with a status 200 and exact user info for user that logged in", async () => {
    const user = { username: "umbreon", password: "espeon" };
    await request(server)
      .post("/api/users/login")
      .send(user)
      .set("Accept", "application/json")
      // .expect(Cookies.set({'username': user.username}))
      .expect((res) => {
        expect(res.body.password).toEqual(user.password);
        expect(res.body.username).toEqual(user.username);
      })
      .expect(200);
  });

  // signup error test - duplicate user *userController might not need .verifyUser
  xit("responds with 500 error status on signup due to duplicate user info", async () => {
    const duplicateUser = { username: "umbreon", password: "espeon" };
    await request(server)
      .post("/api/users/signup")
      .send(duplicateUser)
      .set("Accept", "application/json")
      .expect(500);
  });
});

// check for setting cookies - move to above 'describe' once ready to test
// xit('sets cookies once signed up', () => async {
//   const anotherNewUser = { username: 'eevee', password: '567'};
//   await request(server)
//     .post('/api/users/signup')
//     .send(anotherNewUser)
//     .expect(Cookies.set({'username': anotherNewUser.username}))
// });

// update profile - move to above 'describe' once ready to test
//   describe('UPDATE /api/users/:id', () => {
//     xit('responds with status 200', async () => {
//       const id = (await User.findOne({ username: 'umbreon' }))._id;
//       return request(server)
//         .patch(`/api/users/${id}`)
//         .set({ name: 'jolteon', bio: 'electric' })
//         .expect(200);
//     });
//   })
// })

// TEST MESSAGES
describe("/api/messages", () => {
  beforeAll(() => {
    mongoose.connect(URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
  });

  afterAll(async () => {
    await mongoose.connection.close();
  });

  // GET messages
  xit("responds with 200 status and application/json content type", async () => {
    await request(server)
      .get("/api/messages")
      // .expect('Content-Type', 'application/json; charset=utf-8')
      .expect(200);
  });

  // POST message
  xit("responds with 200 status for message send success", async () => {
    const newMsg = {
      username: "umbreon",
      password: "espeon",
      message: "My test message!",
    };
    console.log(newMsg);
    await request(server)
      .post("/api/messages")
      .send(newMsg)
      .set("Accept", "application/json")
      .expect(200);
  });
});
