const app = require("../src/app");
const request = require("supertest");
const models = require("../src/db/config/models/index");

describe("user register test", () => {
    afterEach(async () => {
        await models.User.destroy({
            where: {}
        })
    })
    
    
    
    afterAll(() => {
        models.squelize.close();
    })
    

    it('should successfully create an account', (done) => {
       request(app)
                .post("/users")
                .set('Accept', 'application/json')
                .send({
                    username: "john",
                    password:"tesT1234",
                    email:"test@gmail.com"
                }).expect(200).end(function(err, res) {
                    if (err) {
                        console.log(res.text);
                        return done(err);
                    }
                    done();
                  }); 
    });

})