const { expect } = require("chai");
const {
  db,
  models: { Work },
} = require("../index");
const seed = require("../../../script/seed");

describe("Work model", () => {
  let works;
  beforeEach(async () => {
    works = (await seed()).works;

  });
  describe("seed data", () => {
    it("there are 5 work experiences", async () => {
      expect(works.length).to.equal(5);
    });
    it("Drone Forward is a company name", () => {
      expect(works[0].name).to.equal("Drone Forward");
    });
    it("There are four companies have logos", () => {
      const result = works.filter((ele) => ele.img !== "");
      expect(result.length).to.equal(4);
    });
  });
}); 
