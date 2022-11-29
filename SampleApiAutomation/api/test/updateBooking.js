const request = require("supertest")("https://restful-booker.herokuapp.com");
const expect = require("chai").expect;
const {BOOKING_DATA} = require("../data/bookingData");
const AUTH = "Basic YWRtaW46cGFzc3dvcmQxMjM=";

describe("PATCH /booking/:id", function() {
    it("Updates a current booking with a partial payload", async function() {
        const query = "1"
        const response = await request
        .patch(`/booking/${query}`)
        .set({ Authorization: AUTH})
        .send({
            "firstname" : "James",
            "lastname" : "Brown"
        });
        
        expect(response.status).to.eql(200);
        expect(response.body.firstname).to.eql("James");
        expect(response.body.lastname).to.eql("Brown");
        expect(response.body.totalprice).to.eql(BOOKING_DATA.totalprice);
        expect(response.body.depositpaid).to.eql(BOOKING_DATA.depositpaid);
        expect(response.body.bookingdates.checkin).to.eql(BOOKING_DATA.bookingdates.checkin);
        expect(response.body.bookingdates.checkout).to.eql(BOOKING_DATA.bookingdates.checkout);
        
    }
    );
}
);