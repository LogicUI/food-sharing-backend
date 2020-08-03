const app = require("../src/app");
const request = require("supertest");
const models = require("../src/db/config/models/index");

describe("user register test", () => {
  afterEach(async () => {
    await models.User.destroy({
      where: {},
    });
  });

  it("should successfully create an account when the right parameters", (done) => {
    request(app)
      .post("/users")
      .send({
        username: "john",
        password: "tesT1234",
        email: "test@gmail.com",
      })
      .expect(200)
      .end(function (err, res) {
        if (err) {
          return done(err);
        }

        done();
      });
  });

  describe("testing of register validator", () => {
    it("should return an error with a response of 400 if an invalid email is passed in ", (done) => {
      request(app)
        .post("/users")
        .send({
          username: "john",
          password: "tesT1234",
          email: "test",
        })
        .expect(400)
        .end(function (err, res) {
          if (err) {
            return done(err);
          }
          expect(res.body.error).toBe('"email" must be a valid email');
          done();
        });
    });

    it("should return an error with a response of 400 if password doesnt contain at least an uppercase", (done) => {
      request(app)
        .post("/users")
        .send({
          username: "john",
          password: "test1234",
          email: "test",
        })
        .expect(400)
        .end(function (err, res) {
          if (err) {
            return done(err);
          }
          expect(res.body.error).toBe(
            '"password" must contains at least one lowercase character, one uppercase character'
          );
          done();
        });
    });

    it("should return an error with response 400 if password does not contain at least 8 characters", (done) => {
      request(app)
        .post("/users")
        .send({
          username: "john",
          password: "test",
          email: "test@gmail.com",
        })
        .expect(400)
        .end(function (err, res) {
          if (err) {
            return done(err);
          }
          expect(res.body.error).toBe(
            '"password" length must be at least 8 characters long'
          );
          done();
        });
    });

    it("should return an error with response 400 if request body does not contain username", (done) => {
      request(app)
        .post("/users")
        .send({
          username: "",
          password: "tesT1234",
          email: "test@gmail.com",
        })
        .expect(400)
        .end(function (err, res) {
          if (err) {
            return done(err);
          }
          expect(res.body.error).toBe('"username" is not allowed to be empty');
          done();
        });
    });

    it("should return an error with response 400 if request body does not container password", () => {
      request(app)
        .post("/users")
        .send({
          username: "test",
          password: "",
          email: "test@gmail.com",
        })
        .expect(400)
        .end(function (err, res) {
          if (err) {
            return done(err);
          }
          expect(res.body.error).toBe('"password" is not allowed to be empty');
        });
    });
    it("should return an error with response 400 if request body does not container password", () => {
      request(app)
        .post("/users")
        .send({
          username: "test",
          password: "",
          email: "test@gmail.com",
        })
        .expect(400)
        .end(function (err, res) {
          if (err) {
            return done(err);
          }
          expect(res.body.error).toBe('"password" is not allowed to be empty');
        });
    });

    it("should return an error with response 400 if request body does not contain a email", () => {
      request(app)
        .post("/users")
        .send({
          username: "test",
          password: "testT1234",
          email: "",
        })
        .expect(400)
        .end(function (err, res) {
          if (err) {
            return done(err);
          }
          expect(res.body.error).toBe('"email" is not allowed to be empty');
        });
    });
  });
});
