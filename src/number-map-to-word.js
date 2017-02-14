function numberMapToWord(collection) {
  //在这里写入代码
  return collection.map(function (c) {
    const a = parseInt(c / 26);
    const b = c % 26;
    if (a === 0) {
      return String.fromCharCode(b + 96)
    } else {
      return String.fromCharCode(a + 96, b + 96)
    }
  });
}

module.exports = numberMapToWord;