'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _promise = require('babel-runtime/core-js/promise');

var _promise2 = _interopRequireDefault(_promise);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _moment = require('moment');

var _moment2 = _interopRequireDefault(_moment);

var _simpleGit = require('simple-git');

var _simpleGit2 = _interopRequireDefault(_simpleGit);

var _constants = require('../../constants');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const gitDateToISOString = gitDate => (0, _moment2.default)(gitDate, 'YYYY-MM-DD HH:mm:ss Z');

exports.default = (() => {
  var _ref = (0, _asyncToGenerator3.default)(function* ({ repoPromise }) {
    const local = {};
    const remote = {};

    yield repoPromise;
    yield new _promise2.default(function (resolve) {
      return (0, _simpleGit2.default)(_constants.paths.dirs.repo).fetch().checkout('origin/master').log(['-n', '1', '--date=iso'], function (err, log) {
        remote.hash = log.latest.hash;
        remote.date = gitDateToISOString(log.latest.date);
      }).checkout('master').log(['-n', '1', '--date=iso'], function (err, log) {
        local.hash = log.latest.hash;
        local.date = gitDateToISOString(log.latest.date);
      }).then(resolve);
    });

    return (0, _moment2.default)(remote.date).isAfter(local.date) && local.hash !== remote.hash;
  });

  return function (_x) {
    return _ref.apply(this, arguments);
  };
})();
//# sourceMappingURL=updates.js.map