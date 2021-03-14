'use strict';
const path = require('path');
const BinWrapper = require('bin-wrapper');
const pkg = require('../package.json');

const url_prefix = process.env.RAW_GITHUBUSERCONTENT_LOCAL_URL ||
	process.env.npm_config_imagemin_local_url ||
	process.env.IMAGEMIN_LOCAL_URL ||
	'https://raw.githubusercontent.com/imagemin';

const url = `${url_prefix}/pngcrush-bin/v${pkg.version}/vendor/`;

module.exports = new BinWrapper()
	.src(`${url}osx/pngcrush`, 'darwin')
	.src(`${url}linux/pngcrush`, 'linux')
	.src(`${url}win/x64/pngcrush.exe`, 'win32', 'x64')
	.src(`${url}win/x86/pngcrush.exe`, 'win32', 'x86')
	.dest(path.resolve(__dirname, '../vendor'))
	.use(process.platform === 'win32' ? 'pngcrush.exe' : 'pngcrush');
