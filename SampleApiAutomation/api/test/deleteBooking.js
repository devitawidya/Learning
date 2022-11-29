const request = require("supertest")("https://restful-booker.herokuapp.com");
const expect = require("chai").expect;
const AUTH = "Basic YWRtaW46cGFzc3dvcmQxMjM=";

describe("DELETE /booking/:id", function() {
    it("Delete a booking  that exist within the API", async function() {
        const query = "742" //example
        const response = await request
        .delete(`/booking/${query}`)
        .set({ Authorization: AUTH})
        
        expect(response.status).to.eql(201);
    }
    );
}
);