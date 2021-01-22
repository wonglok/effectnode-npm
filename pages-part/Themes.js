'use strict';

var azureOrange = require('react95/dist/themes/azureOrange.js');
var bee = require('react95/dist/themes/bee.js');
var blackAndWhite = require('react95/dist/themes/blackAndWhite.js');
var brick = require('react95/dist/themes/brick.js');
var candy = require('react95/dist/themes/candy.js');
var coldGray = require('react95/dist/themes/coldGray.js');
var counterStrike = require('react95/dist/themes/counterStrike.js');
var eggplant = require('react95/dist/themes/eggplant.js');
var highContrast = require('react95/dist/themes/highContrast.js');
var lilac = require('react95/dist/themes/lilac.js');
var lilacRoseDark = require('react95/dist/themes/lilacRoseDark.js');
var maple = require('react95/dist/themes/maple.js');
var marine = require('react95/dist/themes/marine.js');
var matrix = require('react95/dist/themes/matrix.js');
var millenium = require('react95/dist/themes/millenium.js');
var modernDark = require('react95/dist/themes/modernDark.js');
var molecule = require('react95/dist/themes/molecule.js');
var ninjaTurtles = require('react95/dist/themes/ninjaTurtles.js');
var olive = require('react95/dist/themes/olive.js');
var original = require('react95/dist/themes/original.js');
var pamelaAnderson = require('react95/dist/themes/pamelaAnderson.js');
// var peggysPastels = require('react95/dist/themes/peggysPastels.js');
var plum = require('react95/dist/themes/plum.js');
var rainyDay = require('react95/dist/themes/rainyDay.js');
var rose = require('react95/dist/themes/rose.js');
var slate = require('react95/dist/themes/slate.js');
var spruce = require('react95/dist/themes/spruce.js');
var theSixtiesUSA = require('react95/dist/themes/theSixtiesUSA.js');
var tokyoDark = require('react95/dist/themes/tokyoDark.js');
var tooSexy = require('react95/dist/themes/tooSexy.js');
var travel = require('react95/dist/themes/travel.js');
var vaporTeal = require('react95/dist/themes/vaporTeal.js');
var vermillion = require('react95/dist/themes/vermillion.js');
var violetDark = require('react95/dist/themes/violetDark.js');
var water = require('react95/dist/themes/water.js');

var index = {
  azureOrange: azureOrange,
  bee: bee,
  blackAndWhite: blackAndWhite,
  brick: brick,
  candy: candy,
  coldGray: coldGray,
  counterStrike: counterStrike,
  eggplant: eggplant,
  highContrast: highContrast,
  lilac: lilac,
  lilacRoseDark: lilacRoseDark,
  maple: maple,
  marine: marine,
  matrix: matrix,
  millenium: millenium,
  modernDark: modernDark,
  molecule: molecule,
  ninjaTurtles: ninjaTurtles,
  olive: olive,
  original: original,
  pamelaAnderson: pamelaAnderson,
  // peggysPastels: peggysPastels.default,
  plum: plum,
  rainyDay: rainyDay,
  rose: rose,
  slate: slate,
  spruce: spruce,
  theSixtiesUSA: theSixtiesUSA,
  tokyoDark: tokyoDark,
  tooSexy: tooSexy,
  travel: travel,
  vaporTeal: vaporTeal,
  vermillion: vermillion,
  violetDark: violetDark,
  water: water
};

export const Themes = index
export const ThemeList = Object.keys(index).map(key => {
	return {
		name: key,
		label: key,
		value: key,
		theme: index[key]
	}
})
