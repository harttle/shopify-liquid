# liquidjs
[![npm version](https://img.shields.io/npm/v/liquidjs.svg)](https://www.npmjs.org/package/liquidjs)
[![npm downloads](https://img.shields.io/npm/dm/liquidjs.svg)](https://www.npmjs.org/package/liquidjs)
[![coveralls coverage](https://img.shields.io/coveralls/harttle/liquidjs.svg)](https://coveralls.io/github/harttle/liquidjs?branch=master)
[![travis Build Status](https://travis-ci.org/harttle/liquidjs.svg?branch=master)](https://travis-ci.org/harttle/liquidjs)
[![GitHub issues](https://img.shields.io/github/issues-closed/harttle/liquidjs.svg)](https://github.com/harttle/liquidjs/issues)
[![GitHub contributors](https://img.shields.io/github/contributors/harttle/liquidjs.svg)](https://github.com/harttle/liquidjs/graphs/contributors)
[![Open Collective contributors](https://img.shields.io/opencollective/all/liquidjs)](https://opencollective.com/liquidjs)
[![David dependencies](https://img.shields.io/david/harttle/liquidjs.svg)](https://david-dm.org/harttle/liquidjs)
[![David devDependencies](https://img.shields.io/david/dev/harttle/liquidjs.svg)](https://david-dm.org/harttle/liquidjs?type=dev)
[![DUB license](https://img.shields.io/dub/l/vibe-d.svg)](https://github.com/harttle/liquidjs/blob/master/LICENSE)
[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](https://github.com/angular/angular.js/blob/master/DEVELOPERS.md#commits)
[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/harttle/liquidjs)

A simple, expressive, safe and [Shopify][shopify/liquid] compatible template engine in pure JavaScript.
**The purpose of this repo** is to provide a standard Liquid implementation for the JavaScript community so that [Jekyll sites](https://jekyllrb.com), [Github Pages](https://pages.github.com/) and [Shopify templates](https://themes.shopify.com/) can be ported to Node.js without pain.

* [Documentation][doc]
* Please star [LiquidJS on GitHub][github]!
* Support [LiquidJS on Open Collective][oc] or [Patreon][patreon]

<p align="center"><a href="https://liquidjs.com"><img height="155px" width="155px" src="https://liquidjs.com/icon/mstile-310x310.png" alt="logo"></a></p>

## Installation

Install from npm in Node.js:

```bash
npm install --save liquidjs
```

Or use the UMD bundle from jsDelivr:

```html
<script src="https://cdn.jsdelivr.net/npm/liquidjs/dist/liquid.min.js"></script>
```

More details, refer to [The Setup Guide][setup].

## Related Packages

* [gulp-liquidjs](https://www.npmjs.com/package/@tuanpham-dev/gulp-liquidjs): A shopify compatible Liquid template engine for Gulp using liquidjs.
* [grunt-liquify](https://www.npmjs.com/package/grunt-liquify): A Grunt task to process Liquid using liquidjs. Use it to add Liquid magic to your scripts and css assets.
* [react-liquid](https://github.com/aquibm/react-liquid#readme): Liquid templating language component for React
* [@11ty/eleventy](https://www.npmjs.com/package/@11ty/eleventy): A simpler static site generator. An alternative to Jekyll. Written in JavaScript. Transforms a directory of templates (of varying types) into HTML.

## Backers

If you love LiquidJS or your company is using LiquidJS? Please consider [support us on Open Collective or Patreon][financial-support].

![backers from open-collective](https://opencollective.com/liquidjs/tiers/backer.svg?avatarHeight=97)

## Contributors ✨

Want to contribute? see [Contribution Guidelines][contribution]. Thanks goes to these wonderful people:

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tr>
    <td align="center"><a href="https://harttle.land"><img src="https://avatars3.githubusercontent.com/u/4427974?v=4" width="100px;" alt=""/><br /><sub><b>Jun Yang</b></sub></a><br /><a href="#maintenance-harttle" title="Maintenance">🚧</a> <a href="https://github.com/harttle/liquidjs/commits?author=harttle" title="Code">💻</a></td>
    <td align="center"><a href="https://github.com/chenos"><img src="https://avatars0.githubusercontent.com/u/2993310?v=4" width="100px;" alt=""/><br /><sub><b>chenos</b></sub></a><br /><a href="https://github.com/harttle/liquidjs/commits?author=chenos" title="Code">💻</a></td>
    <td align="center"><a href="https://zachleat.com/"><img src="https://avatars2.githubusercontent.com/u/39355?v=4" width="100px;" alt=""/><br /><sub><b>Zach Leatherman</b></sub></a><br /><a href="https://github.com/harttle/liquidjs/issues?q=author%3Azachleat" title="Bug reports">🐛</a></td>
    <td align="center"><a href="https://github.com/thardy"><img src="https://avatars3.githubusercontent.com/u/120636?v=4" width="100px;" alt=""/><br /><sub><b>Tim Hardy</b></sub></a><br /><a href="https://github.com/harttle/liquidjs/commits?author=thardy" title="Code">💻</a></td>
    <td align="center"><a href="https://paulrobertlloyd.com/"><img src="https://avatars3.githubusercontent.com/u/813383?v=4" width="100px;" alt=""/><br /><sub><b>Paul Robert Lloyd</b></sub></a><br /><a href="https://github.com/harttle/liquidjs/commits?author=paulrobertlloyd" title="Code">💻</a> <a href="https://github.com/harttle/liquidjs/issues?q=author%3Apaulrobertlloyd" title="Bug reports">🐛</a></td>
    <td align="center"><a href="https://twitter.com/alecdotbiz"><img src="https://avatars2.githubusercontent.com/u/1925840?v=4" width="100px;" alt=""/><br /><sub><b>Alec Larson</b></sub></a><br /><a href="https://github.com/harttle/liquidjs/commits?author=aleclarson" title="Code">💻</a></td>
    <td align="center"><a href="https://github.com/pmalouin"><img src="https://avatars1.githubusercontent.com/u/1411117?v=4" width="100px;" alt=""/><br /><sub><b>Patrick Malouin</b></sub></a><br /><a href="https://github.com/harttle/liquidjs/commits?author=pmalouin" title="Code">💻</a> <a href="https://github.com/harttle/liquidjs/commits?author=pmalouin" title="Documentation">📖</a></td>
  </tr>
  <tr>
    <td align="center"><a href="https://jaswrks.com"><img src="https://avatars3.githubusercontent.com/u/1563559?v=4" width="100px;" alt=""/><br /><sub><b>jaswrks</b></sub></a><br /><a href="https://github.com/harttle/liquidjs/commits?author=jaswrks" title="Code">💻</a></td>
    <td align="center"><a href="https://oott123.com"><img src="https://avatars2.githubusercontent.com/u/905663?v=4" width="100px;" alt=""/><br /><sub><b>三三</b></sub></a><br /><a href="https://github.com/harttle/liquidjs/commits?author=oott123" title="Code">💻</a> <a href="#ideas-oott123" title="Ideas, Planning, & Feedback">🤔</a></td>
    <td align="center"><a href="https://github.com/ssendev"><img src="https://avatars0.githubusercontent.com/u/450793?v=4" width="100px;" alt=""/><br /><sub><b>ssendev</b></sub></a><br /><a href="https://github.com/harttle/liquidjs/commits?author=ssendev" title="Code">💻</a> <a href="https://github.com/harttle/liquidjs/commits?author=ssendev" title="Documentation">📖</a></td>
    <td align="center"><a href="https://github.com/wojtask9"><img src="https://avatars3.githubusercontent.com/u/6099236?v=4" width="100px;" alt=""/><br /><sub><b>wojtask9</b></sub></a><br /><a href="https://github.com/harttle/liquidjs/commits?author=wojtask9" title="Code">💻</a></td>
    <td align="center"><a href="https://github.com/thelornenelson"><img src="https://avatars3.githubusercontent.com/u/24596583?v=4" width="100px;" alt=""/><br /><sub><b>Andrew Barclay</b></sub></a><br /><a href="https://github.com/harttle/liquidjs/commits?author=thelornenelson" title="Code">💻</a></td>
    <td align="center"><a href="https://www.stam.pr/"><img src="https://avatars2.githubusercontent.com/u/142338?v=4" width="100px;" alt=""/><br /><sub><b>Cory Mawhorter</b></sub></a><br /><a href="https://github.com/harttle/liquidjs/commits?author=cmawhorter" title="Code">💻</a></td>
    <td align="center"><a href="https://github.com/thehappybug"><img src="https://avatars0.githubusercontent.com/u/3393530?v=4" width="100px;" alt=""/><br /><sub><b>Mehdi Jaffery</b></sub></a><br /><a href="https://github.com/harttle/liquidjs/commits?author=thehappybug" title="Code">💻</a></td>
  </tr>
  <tr>
    <td align="center"><a href="https://github.com/robinbijlani"><img src="https://avatars0.githubusercontent.com/u/2503108?v=4" width="100px;" alt=""/><br /><sub><b>Robin Bijlani</b></sub></a><br /><a href="https://github.com/harttle/liquidjs/commits?author=robinbijlani" title="Code">💻</a> <a href="https://github.com/harttle/liquidjs/issues?q=author%3Arobinbijlani" title="Bug reports">🐛</a></td>
    <td align="center"><a href="https://www.rmkennedy.com"><img src="https://avatars3.githubusercontent.com/u/8356669?v=4" width="100px;" alt=""/><br /><sub><b>Ryan Kennedy</b></sub></a><br /><a href="https://github.com/harttle/liquidjs/commits?author=ryaninvents" title="Code">💻</a></td>
    <td align="center"><a href="https://github.com/strax"><img src="https://avatars2.githubusercontent.com/u/587213?v=4" width="100px;" alt=""/><br /><sub><b>Sami Kukkonen</b></sub></a><br /><a href="https://github.com/harttle/liquidjs/commits?author=strax" title="Code">💻</a></td>
    <td align="center"><a href="https://ScottFreeCode.github.io/"><img src="https://avatars3.githubusercontent.com/u/16506071?v=4" width="100px;" alt=""/><br /><sub><b>Scott Santucci</b></sub></a><br /><a href="https://github.com/harttle/liquidjs/commits?author=ScottFreeCode" title="Code">💻</a></td>
    <td align="center"><a href="http://stevenrescigno.com"><img src="https://avatars3.githubusercontent.com/u/8505293?v=4" width="100px;" alt=""/><br /><sub><b>Steven </b></sub></a><br /><a href="#example-stevenanthonyrevo" title="Examples">💡</a> <a href="https://github.com/harttle/liquidjs/commits?author=stevenanthonyrevo" title="Code">💻</a></td>
    <td align="center"><a href="https://efcl.info/"><img src="https://avatars1.githubusercontent.com/u/19714?v=4" width="100px;" alt=""/><br /><sub><b>azu</b></sub></a><br /><a href="https://github.com/harttle/liquidjs/commits?author=azu" title="Documentation">📖</a></td>
    <td align="center"><a href="https://github.com/wyozi"><img src="https://avatars3.githubusercontent.com/u/4894573?v=4" width="100px;" alt=""/><br /><sub><b>Joonas</b></sub></a><br /><a href="https://github.com/harttle/liquidjs/commits?author=wyozi" title="Code">💻</a></td>
  </tr>
  <tr>
    <td align="center"><a href="https://github.com/jamelait"><img src="https://avatars1.githubusercontent.com/u/14369255?v=4" width="100px;" alt=""/><br /><sub><b>Jamel A.</b></sub></a><br /><a href="https://github.com/harttle/liquidjs/commits?author=jamelait" title="Code">💻</a></td>
    <td align="center"><a href="https://brandonpittman.net"><img src="https://avatars0.githubusercontent.com/u/967145?v=4" width="100px;" alt=""/><br /><sub><b>Brandon Pittman</b></sub></a><br /><a href="https://github.com/harttle/liquidjs/commits?author=brandonpittman" title="Code">💻</a></td>
    <td align="center"><a href="https://github.com/tgrandgent"><img src="https://avatars3.githubusercontent.com/u/17069042?v=4" width="100px;" alt=""/><br /><sub><b>tgrandgent</b></sub></a><br /><a href="https://github.com/harttle/liquidjs/commits?author=tgrandgent" title="Code">💻</a></td>
    <td align="center"><a href="https://github.com/mastodon0"><img src="https://avatars1.githubusercontent.com/u/7924332?v=4" width="100px;" alt=""/><br /><sub><b>Martin Schuster</b></sub></a><br /><a href="https://github.com/harttle/liquidjs/commits?author=mastodon0" title="Code">💻</a></td>
    <td align="center"><a href="http://js.chenlei.me"><img src="https://avatars0.githubusercontent.com/u/6339390?v=4" width="100px;" alt=""/><br /><sub><b>Ray</b></sub></a><br /><a href="https://github.com/harttle/liquidjs/commits?author=richardo2016" title="Tests">⚠️</a> <a href="https://github.com/harttle/liquidjs/commits?author=richardo2016" title="Code">💻</a></td>
    <td align="center"><a href="https://github.com/CriGoT"><img src="https://avatars0.githubusercontent.com/u/1936786?v=4" width="100px;" alt=""/><br /><sub><b>Cristofer Gonzales</b></sub></a><br /><a href="https://github.com/harttle/liquidjs/commits?author=CriGoT" title="Code">💻</a></td>
    <td align="center"><a href="https://www.raymondcamden.com"><img src="https://avatars3.githubusercontent.com/u/393660?v=4" width="100px;" alt=""/><br /><sub><b>Raymond Camden</b></sub></a><br /><a href="https://github.com/harttle/liquidjs/commits?author=cfjedimaster" title="Documentation">📖</a></td>
  </tr>
</table>

<!-- markdownlint-enable -->
<!-- prettier-ignore-end -->
<!-- ALL-CONTRIBUTORS-LIST:END -->

[shopify/liquid]: https://shopify.github.io/liquid/
[plugins]: https://liquidjs.com/tutorials/plugins.html#Plugin-List
[setup]: https://liquidjs.com/tutorials/setup.html
[doc]: https://liquidjs.com
[github]: https://github.com/harttle/liquidjs
[patreon]: https://www.patreon.com/harttle
[oc]: https://opencollective.com/liquidjs/
[contribution]: https://liquidjs.com/tutorials/contribution-guidelines.html
[financial-support]: https://liquidjs.com/tutorials/contribution-guidelines.html#Financial-Support
