'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.possibleAccelerators = exports.paths = exports.setupUrl = exports.errorTitle = exports.title = exports.gistUrl = undefined;

var _electron = require('electron');

var _os = require('os');

var _path = require('path');

const gistUrl = exports.gistUrl = (gistId, token) => `https://${token ? `${token}@` : ''}gist.github.com/${gistId}.git`;

const title = exports.title = 'hyper-sync-settings';
const errorTitle = exports.errorTitle = `${title} error 🔥`;
const setupUrl = exports.setupUrl = 'https://github.com/dfrankland/hyper-sync-settings#setup';

// If the user defines XDG_CONFIG_HOME they definitely want their config there,
// otherwise use the home directory in linux/mac and userdata in windows
const home = process.env.XDG_CONFIG_HOME !== undefined ? join(process.env.XDG_CONFIG_HOME, 'hyper') : process.platform == 'win32' ? _electron.app.getPath('userData') : (0, _os.homedir)();

const repo = (0, _path.resolve)(home, './.hyper_plugins/.hyper-sync-settings');

const paths = exports.paths = {
  dirs: { home, repo },
  files: {
    config: (0, _path.resolve)(home, './.hyper_plugins/.hyper-sync-settings.json'),
    configTemplate: (0, _path.resolve)(__dirname, './config.default.json'),
    backup: (0, _path.resolve)(repo, './.hyper.js'),
    restore: (0, _path.resolve)(home, './.hyper.js')
  }
};

const possibleAccelerators = exports.possibleAccelerators = ['checkForUpdates', 'backupSettings', 'restoreSettings', 'openGist', 'openRepo', 'openConfiguration'];
//# sourceMappingURL=constants.js.map