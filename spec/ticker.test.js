/*Must continue test spec*/

var tickerPlugin = require('../ticker.js');

describe("A test suite for ticker.js", function() {
  it("expects the tickerPlugin object to export the name 'Bitfinex',", function() {
    expect(tickerPlugin.NAME).toBe('Bitfinex');
  });

  it("expects the tickerPlugin object to export an array of supported modules with one value called ticker,", function() {
    var expected = ['ticker'];
    expect(tickerPlugin.SUPPORTED_MODULES).toEqual(expected);
  });

});
