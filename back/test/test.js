var assert = require('assert');
describe('Array', function() {
  describe('#indexOf()', function() {
    it('should return -1 when the value is not present', function() {
      assert.equal([1, 2, 3].indexOf(4), -1);
    });
  });
});

const { expect, should } = require("chai");
var chai = require("chai");
var assert = chai.assert;
const supertest = require("supertest");
const api = supertest("http://localhost:3000");


describe("Tests API", function () {
  let events;

  describe("Get", function () {
    it("L'appel fonctionne", function (done) {
      api.get("/events").end((err, res) => {
        events = res.body;
        assert.equal(res.status, 200);
        done();
      });
    });
  });

});
