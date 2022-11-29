const request = require("supertest")("https://restful-booker.herokuapp.com");
const expect = require("chai").expect;
const {ADMIN_DATA} = require("../data/adminData");

describe("POST /auth", function() {
    it("Creates a new auth token to use for access to the PUT and DELETE /booking", async function() {
        const response = await request
            .post("/auth")
            .send(ADMIN_DATA);
        
        expect(response.status).to.eql(200);
        expect(response.body).to.have.property("token");
    }
    );


}
);