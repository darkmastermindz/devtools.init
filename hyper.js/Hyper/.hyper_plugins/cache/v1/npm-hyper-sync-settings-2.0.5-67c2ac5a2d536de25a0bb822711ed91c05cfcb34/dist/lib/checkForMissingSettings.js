'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _electron = require('electron');

var _getGitConfig = require('./getGitConfig');

var _getGitConfig2 = _interopRequireDefault(_getGitConfig);

var _getCommands = require('./getCommands');

var _getCommands2 = _interopRequireDefault(_getCommands);

var _constants = require('../constants');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = open => {
  const config = (0, _getGitConfig2.default)();
  const personalAccessToken = config.personalAccessToken,
        gistId = config.gistId;

  const hyperConfig = _electron.app.config.getConfig().syncSettings || { quiet: false };

  if (personalAccessToken && gistId) {
    const commands = (0, _getCommands2.default)(config, open, hyperConfig);
    return { config, commands };
  }

  const notify = message => open.notification(_constants.errorTitle, message, _constants.setupUrl);

  if (!personalAccessToken && !gistId) {
    notify('Settings not found! Click for more info.');
    return false;
  }

  if (!personalAccessToken) notify('`personalAccessToken` not set! Click for more info.');
  if (!gistId) notify('`gistId` not set! Click for more info.');
  return false;
};
//# sourceMappingURL=checkForMissingSettings.js.map