const request = require("supertest")("https://restful-booker.herokuapp.com");
const expect = require("chai").expect;
const {BOOKING_DATA} = require("../data/bookingData");

describe("GET /booking and /booking/:id", function() {
    it("Returns the ids of all the bookings that exist within the API", async function() {
        const response = await request.get("/booking");
        
        expect(response.status).to.eql(200);
        expect(response.body.length).to.eql(4);

        done();
    }
    );

    it("Returns a specific booking based upon the booking id provided", async function() {
        const query = "12311" //because bookingId = 1 is not available
        const response = await request.get(`/booking/${query}`)
        
        //to show property firstname if it is not expected
        let responseName = response.body.firstname
        console.log("Firstname with bookingId " + query + " is " + responseName)

        expect(response.status).to.eql(200);
        expect(response.body).to.deep.equal(BOOKING_DATA);

        done();
    }
    );
}
);