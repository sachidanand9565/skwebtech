// Empty replacement for next/dist/build/polyfills/polyfill-module.
// Our browserslist targets modern browsers (Chrome 91+, Safari 15+) that already
// implement Array.prototype.at/flat/flatMap, Object.fromEntries/hasOwn etc.,
// so Next's ~12KB bundled polyfills are dead weight (flagged by PageSpeed).
