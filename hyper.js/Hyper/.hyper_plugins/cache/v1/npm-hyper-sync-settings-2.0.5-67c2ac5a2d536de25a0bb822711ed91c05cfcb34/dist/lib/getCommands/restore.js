'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _promise = require('babel-runtime/core-js/promise');

var _promise2 = _interopRequireDefault(_promise);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _simpleGit = require('simple-git');

var _simpleGit2 = _interopRequireDefault(_simpleGit);

var _constants = require('../../constants');

var _fs = require('../fs');

var _fs2 = _interopRequireDefault(_fs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _paths$files = _constants.paths.files;
const restoreFile = _paths$files.restore,
      backupFile = _paths$files.backup;

exports.default = (() => {
  var _ref = (0, _asyncToGenerator3.default)(function* ({ repoPromise }) {
    yield repoPromise;
    yield new _promise2.default(function (resolve) {
      return (0, _simpleGit2.default)(_constants.paths.dirs.repo).fetch().mergeFromTo('origin/master', 'master').then(resolve);
    });
    yield _fs2.default.ensureFileAsync(restoreFile);
    yield _fs2.default.outputFileAsync(restoreFile, (yield _fs2.default.readFileAsync(backupFile)), { flag: 'r+' });
  });

  return function (_x) {
    return _ref.apply(this, arguments);
  };
})();
//# sourceMappingURL=restore.js.map