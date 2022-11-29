const request = require("supertest")("https://restful-booker.herokuapp.com");
const expect = require("chai").expect;
const {BOOKING_DATA} = require("../data/bookingData");

describe("POST /booking", function() {
    it("Creates a new booking in the API", async function() {
        const response = await request
            .post("/booking")
            .send(BOOKING_DATA);
        
        expect(response.status).to.eql(200);
        expect(response.body).to.have.property("bookingid");
        expect(response.body.booking).to.eql(BOOKING_DATA);
    }
    );


}
);