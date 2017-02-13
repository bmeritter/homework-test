require('should');
const collectAllEven = require('../src/collect-all-even');

describe('collect_all_even', function () {

  const collection_a = [1, 2, 3, 4, 5];
  const collection_b = [2, 4];

  it('选出给定区间中所有的偶数', function () {

    const result = collectAllEven(collection_a);
    result.should.eql(collection_b);
  });
});