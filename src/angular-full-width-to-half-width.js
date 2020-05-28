angular.module('angular-full-width-to-half-width', []);

angular.module('angular-full-width-to-half-width').service('fullWidthToHalfWidthService', function () {
  /**
  * Converts the full-width characters in a string to half-width counterparts.
  * @param {string} value The string containing characters to convert to half-width.
  * @return {string} A string containing half-width characters converted from the original value.
  */
  this.convertToHalfWidth = function (value) {
    value = value.toString() || '';
    var out = '';
    for(var i = 0; i < value.length; i++) {
        var c = value.charCodeAt(i);

        // Make sure we only convert characters in the full-width range.
        if (c >= 0xFF00 && c <= 0xFF5E) {
          c = 0xff & (c + 0x20);
        }
        if (c == 0x3000) {
          c = 0x20;
        }

        out += String.fromCharCode(c);
    }

    return out;
  };
});

angular.module('angular-full-width-to-half-width').filter('fullWidthToHalfWidth', ['fullWidthToHalfWidthService', function (fullWidthToHalfWidthService) {

  /**
  * Converts the full-width characters in a string to their equivalent half-width characters.
  * @param {string} input The string containing characters to convert to half-width.
  * @return {string} A string containing half-width characters converted from the original value.
  */
  return function (input) {
    return fullWidthToHalfWidthService.convertToHalfWidth(input);
  };
}]);
