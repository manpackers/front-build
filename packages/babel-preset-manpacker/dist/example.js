import "core-js/modules/es.function.name.js";

var _dec, _class, _temp;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var a = function a() {
  console.log(a);
};

a();

var Decorators = function Decorators() {};

var // eslint-disable-next-line
Test = (_dec = Decorators({
  props: {}
}), _dec(_class = (_temp = function Test() {
  _classCallCheck(this, Test);

  this.name = 1;

  this.test = function () {
    console.log('test methods');
  };
}, _temp)) || _class);