'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _constants = require('../../constants');

var _updates = require('./updates');

var _updates2 = _interopRequireDefault(_updates);

var _restore = require('./restore');

var _restore2 = _interopRequireDefault(_restore);

var _backup = require('./backup');

var _backup2 = _interopRequireDefault(_backup);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (config, open, { quiet }) => {
  const catchError = err => {
    open.notification(_constants.errorTitle, err);
    throw err;
  };

  const notify = (emoji, message) => open.notification(`${_constants.title} ${emoji}`, message, config.url);

  return {
    checkForUpdates: (() => {
      var _ref = (0, _asyncToGenerator3.default)(function* () {
        const isUpdated = yield (0, _updates2.default)(config).catch(catchError);

        if (isUpdated) {
          notify('❗️', 'Your settings need to be updated.');
        } else if (!quiet) {
          notify('👍', 'Your settings are up to date.');
        }
      });

      return function checkForUpdates() {
        return _ref.apply(this, arguments);
      };
    })(),
    tryToBackup: (() => {
      var _ref2 = (0, _asyncToGenerator3.default)(function* () {
        yield (0, _backup2.default)(config).catch(catchError);
        notify('🔜', 'Your settings have been saved.');
      });

      return function tryToBackup() {
        return _ref2.apply(this, arguments);
      };
    })(),
    tryToRestore: (() => {
      var _ref3 = (0, _asyncToGenerator3.default)(function* () {
        yield (0, _restore2.default)(config).catch(catchError);
        notify('🔙', 'Your settings have been restored.');
      });

      return function tryToRestore() {
        return _ref3.apply(this, arguments);
      };
    })()
  };
};
//# sourceMappingURL=index.js.map