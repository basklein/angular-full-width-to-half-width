[![npm version](https://badge.fury.io/js/angular-full-width-to-half-width.svg)](https://badge.fury.io/js/angular-full-width-to-half-width)
[![GitHub issues](https://img.shields.io/github/issues/basklein/angular-full-width-to-half-width.svg?style=flat-square)](https://github.com/basklein/angular-full-width-to-half-width/issues)
[![GitHub license](https://img.shields.io/github/license/basklein/angular-full-width-to-half-width.svg?style=flat-square)](https://github.com/basklein/angular-full-width-to-half-width/blob/master/LICENSE)

# angular-full-width-to-half-width
Full-width to half-width character service and filters for AngularJS
<!-- 
## Demo
[demo on plnkr](https://plnkr.co/edit/eK0dOA?p=info) -->

## Description
This is a service for AngularJS that converts full-width Unicode characters to their half-width counterparts. This service can be used as is, or through the filter `fullWidthToHalfWidth`.

At the moment the service only converts the characters in the Unicode range 0xFF00 - 0xFF5E. I am planning on adding the ability to convert the rest of the characters in the U+FF00 - U+FFEF block, but this will take time.

## Usage

1. Install via [npm](https://www.npmjs.com/) or downloaded files:
    1. via npm: `npm install --save angular-full-width-to-half-width`
    2. via [downloaded files](https://github.com/basklein/angular-full-width-to-half-width/master)
2. Add `angular-full-width-to-half-width` to your application's module dependencies.
3. Include dependencies and angular-full-width-to-half-width in your HTML.
    - When using npm
    ```html
    <script src="node_modules/angular-full-width-to-half-width/dist/angular-full-width-to-half-width.min.js"></script>
    ```
    - When using downloaded files
    ```html
    <script src="YOUR_PATH/angular-full-width-to-half-width.min.js"></script>
    ```
4. Use the angular filter `fullWidthToHalfWidth`, or use the angular service `fullWidthToHalfWidthService`.

## Documentation

### Services

#### convertToHalfWidthService
##### convertToHalfWidth
Converts the full-width characters in a string to half-width counterparts.
* `@param {string} value` The string containing characters to convert to half-width.
* `@return {string}` A string containing half-width characters converted from the original value.

### Filters
##### fullWidthToHalfWidth
Converts the full-width characters in a string to half-width counterparts.
* `@param {string} input` The string containing characters to convert to half-width.
* `@return {string}` A string containing half-width characters converted from the original value.

## Example

HTML
```html
<p>
  {{"ｈえｌｌｏ　ｗｏｒｌｄ！" | fullWidthToHalfWidth }} : ｈえｌｌｏ　ｗｏｒｌｄ！
</p>
<p>
  {{"Whａt， is this？" | fullWidthToHalfWidth}} : Whａt， is this？
</p>
```

Result:
```html
<p>
  hえllo world! : ｈえｌｌｏ　ｗｏｒｌｄ！
</p>
<p>
  What, is this? : Whａt， is this？
</p>
```

Javascript:
```javascript
angular.module('app', ['angular-full-width-to-half-width']);

angular.module('app')
    .controller('appController', function ($scope, $filter) {
      $scope.javascriptTest = $filter('fullWidthToHalfWidth')("Hello world!");
      $scope.javascriptExample = $filter('fullWidthToHalfWidth')("ｈえｌｌｏ　ｗｏｒｌｄ！");
    });
```

Result:
```html
<p>
  Hello world! : $scope.javascriptTest Hello world!
</p>
<p>
  hえllo world! : $scope.javascriptString ｈえｌｌｏ　ｗｏｒｌｄ！
</p>
```

# LICENSE
MIT
