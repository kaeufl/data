const config = require('./config');
const CACHE_DIR = process.argv[2] === '-c' ? process.argv[3] : '.';
const path = require('path');
const cachePath = path.join(__dirname, './results', CACHE_DIR);
const analyze = require('heimdall-query/src/analyze');

analyze(config, cachePath);

