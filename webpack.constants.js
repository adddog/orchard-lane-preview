const path = require('path');

const ABSOLUTE_BASE = path.normalize(path.join(__dirname));
const BUILD = 'dist';
const DIST = BUILD;
const ASSETS = path.join(DIST, 'assets');
const FRONTEND = 'src';

const constants = Object.freeze({
  ABSOLUTE_BASE,
  BUILD,
  DIST,
  FRONTEND,
  ASSETS,
  SPEECH_POST_P: path.join(ABSOLUTE_BASE, '../speech-postprocessing/src'),
  NODE_MODULES_DIR: path.join(ABSOLUTE_BASE, 'node_modules'),
  BUILD_DIR: path.join(ABSOLUTE_BASE, BUILD),
  SRC_DIR: path.join(ABSOLUTE_BASE, FRONTEND),
  CSS_SRC_DIR: path.join(ABSOLUTE_BASE, FRONTEND, 'css'),
  JS_SRC_DIR: path.join(ABSOLUTE_BASE, FRONTEND, 'js'),
  JS_DIST_DIR: path.join(ABSOLUTE_BASE, BUILD, 'js'),
  ASSETS_DIR: path.join(ABSOLUTE_BASE, ASSETS),
  THIRD_PARTY_DIR: path.join(ABSOLUTE_BASE, ASSETS, 'third-party'),
  HOT_RELOAD_PORT: 8080,
  SYNC_PORT: 3000,
  APP_FILENAME: 'index',
  WEBPACKSERVER_DIR: path.join(ABSOLUTE_BASE, 'tasks/server'),
  RENDERSERVER_DIR: path.join(ABSOLUTE_BASE, 'tasks/static/server'),
});

module.exports = constants
