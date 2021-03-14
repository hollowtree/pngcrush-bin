# pngcrush-bin ![GitHub Actions Status](https://github.com/imagemin/pngcrush-bin/workflows/test/badge.svg?branch=master)

> [pngcrush](https://pmt.sourceforge.io/pngcrush/) is an optimizer which main purpose is to reduce the size of the PNG IDAT datastream by trying various compression levels an PNG filter methods

You probably want [`imagemin-pngcrush`](https://github.com/imagemin/imagemin-pngcrush) instead.


## Install

```
$ npm install --save pngcrush-bin
```

### Downloading From a Custom Source
By default, this package will download pngcrush-bin from GitHub. To use a custom source, set the npm config property `imagemin_local_url`. The downloader will append `/<name>/<version>/vendor/<dist>`.

```
$ npm install pngcrush-bin --imagemin_local_url=https://mymirror.local/path
```

Or add property into your `.npmrc` file([https://docs.npmjs.com/files/npmrc](https://docs.npmjs.com/files/npmrc))

```
imagemin_local_url=https://mymirror.local/path
```

Another option is to use the environment variable `IMAGEMIN_LOCAL_URL`.

```
$ IMAGEMIN_LOCAL_URL=https://mymirror.local/path npm install pngcrush-bin
```


## Usage

```js
const {execFile} = require('child_process');
const pngcrush = require('pngcrush-bin');

execFile(pngcrush, ['-reduce', '-brute', 'input.png', 'output.png'], err => {
	console.log('Image minified');
});
```


## CLI

```
$ npm install --global pngcrush-bin
```

```
$ pngcrush --help
```


## License

MIT © [Imagemin](https://github.com/imagemin)
