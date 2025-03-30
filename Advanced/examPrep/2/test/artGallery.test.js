import { artGallery } from "../artGallery.js";
import { expect } from "chai";

describe("artGallery", function () {
  describe("addArtwork", function () {
    it("happy path", function () {
      expect(
        artGallery.addArtwork("Starry Night", "30 x 40", "Van Gogh")
      ).to.equal(
        "Artwork added successfully: 'Starry Night' by Van Gogh with dimensions 30 x 40."
      );
    });
    it("throw error invalid information", function () {
      expect(() => artGallery.addArtwork(123, "30 x 40", "Van Gogh")).to.throw(
        "Invalid Information"
      );
    });
    it("throw Invalid Dimentions", function () {
      expect(() =>
        artGallery.addArtwork("Starry Night", "30x40", "Van Gogh")
      ).to.throw("Invalid Dimensions!");
    });
    it("throw Artist not allowed", function () {
      expect(() =>
        artGallery.addArtwork("Starry Night", "30 x 40", "baba ti")
      ).to.throw("This artist is not allowed in the gallery!");
    });
  });
  describe("calculateCosts", function () {
    it("should throw Invalid Information!", function () {
      expect(() => artGallery.calculateCosts(-1, 2, true)).to.throw(
        "Invalid Information!"
      );
      expect(() => artGallery.calculateCosts(1, 2, "pepi")).to.throw(
        "Invalid Information!"
      );
      expect(() => artGallery.calculateCosts(1, 2, "true")).to.throw(
        "Invalid Information!"
      );
    });
    it("happy - should calc and apply discount if true", function () {
      expect(artGallery.calculateCosts(50, 50, true)).to.equal(
        "Exhibition and insurance costs are 90$, reduced by 10% with the help of a donation from your sponsor."
      );
    });
    it("happy - should calc without discount", function () {
      expect(artGallery.calculateCosts(50, 50, false)).to.equal(
        "Exhibition and insurance costs are 100$."
      );
    });
  });
  describe("organizeExhibits", function () {
    it("invalid input", function () {
      expect(() => artGallery.organizeExhibits(1, -1)).to.throw(
        "Invalid Information!"
      );
      expect(() => artGallery.organizeExhibits("", 1)).to.throw(
        "Invalid Information!"
      );
      expect(() => artGallery.organizeExhibits("sdas", 1)).to.throw(
        "Invalid Information!"
      );
      expect(() => artGallery.organizeExhibits([1], 1)).to.throw(
        "Invalid Information!"
      );
    });
    it("incorrect divide result", function () {
      expect(artGallery.organizeExhibits(9, 5)).to.equal(
        "There are only 1 artworks in each display space, you can add more artworks."
      );
      expect(artGallery.organizeExhibits(10, 5)).to.equal(
        "There are only 2 artworks in each display space, you can add more artworks."
      );
      expect(artGallery.organizeExhibits(49, 10)).to.equal(
        "There are only 4 artworks in each display space, you can add more artworks."
      );
    });
    it("correct divide 5 or more", function () {
      expect(artGallery.organizeExhibits(50, 10)).to.equal(
        "You have 10 display spaces with 5 artworks in each space."
      );
    });
  });
});
