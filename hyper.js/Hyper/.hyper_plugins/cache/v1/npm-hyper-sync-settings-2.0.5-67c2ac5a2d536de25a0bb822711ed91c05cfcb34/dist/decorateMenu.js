'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _electron = require('electron');

var _checkForMissingSettings = require('./lib/checkForMissingSettings');

var _checkForMissingSettings2 = _interopRequireDefault(_checkForMissingSettings);

var _constants = require('./constants');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (open, menu = []) => {
  const checkAndCallback = callback => () => {
    const commandsAndConfig = (0, _checkForMissingSettings2.default)(open);
    if (commandsAndConfig === false) return;
    callback(commandsAndConfig);
  };

  checkAndCallback(({ commands }) => commands.checkForUpdates());

  var _ref = _electron.app.config.getConfig().syncSettings || {},
      _ref$accelerators = _ref.accelerators;

  const syncSettingsAccelerators = _ref$accelerators === undefined ? {} : _ref$accelerators;

  const accelerators = _constants.possibleAccelerators.reduce((allAccelerators, nextKey) => {
    const accelerator = syncSettingsAccelerators[nextKey];
    return (0, _extends3.default)({}, allAccelerators, {
      [nextKey]: accelerator ? { accelerator } : {}
    });
  }, {});

  return menu.map(item => {
    if (item.label !== 'Plugins') return item;
    return (0, _extends3.default)({}, item, {
      submenu: [...item.submenu, {
        label: 'Sync Settings',
        type: 'submenu',
        submenu: [(0, _extends3.default)({
          label: 'Check for Updates',
          click: checkAndCallback(({ commands }) => commands.checkForUpdates())
        }, accelerators.checkForUpdates), (0, _extends3.default)({
          label: 'Backup Settings',
          click: checkAndCallback(({ commands }) => commands.tryToBackup())
        }, accelerators.backupSettings), (0, _extends3.default)({
          label: 'Restore Settings',
          click: checkAndCallback(({ commands }) => commands.tryToRestore())
        }, accelerators.restoreSettings), {
          label: 'Open',
          type: 'submenu',
          submenu: [(0, _extends3.default)({
            label: 'Gist',
            click: checkAndCallback(({ config }) => open.window(config ? config.url : _constants.gistUrl))
          }, accelerators.openGist), (0, _extends3.default)({
            label: 'Repo',
            click: () => open.item(_constants.paths.dirs.repo)
          }, accelerators.openRepo), (0, _extends3.default)({
            label: 'Configuration',
            click: () => open.item(_constants.paths.files.config)
          }, accelerators.openConfiguration)]
        }]
      }]
    });
  });
};
//# sourceMappingURL=decorateMenu.js.map