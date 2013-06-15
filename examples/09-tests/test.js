describe("dcApp", function () {
  beforeEach(function () {
    module("dcApp");
  });

  describe("reverse filter", function () {
    var reverseFilter;

    beforeEach(function () {
      inject(function ($filter) {
        reverseFilter = $filter("reverse");
      });
    });

    it("should reverse string", function () {
      expect(reverseFilter("String")).toBe("gnirtS");
    });
  });
});
