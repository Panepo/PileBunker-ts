# [PileBunker](https://github.com/Panepo/PileBunker-ts)

[![Build Status][travis-image]][travis-url] [![Style Status][prettier-image]][prettier-url] [![Coverage Status][codecov-image]][codecov-url]

[travis-image]: https://travis-ci.org/Panepo/PileBunker-ts.svg
[travis-url]: https://travis-ci.org/Panepo/PileBunker-ts.svg?branch=master

[prettier-image]: https://img.shields.io/badge/code_style-prettier-ff69b4.svg
[prettier-url]: https://github.com/prettier/prettier

[codecov-image]: https://codecov.io/gh/Panepo/PileBunker-ts/branch/master/graph/badge.svg
[codecov-url]: https://codecov.io/gh/Panepo/PileBunker-ts

Shiropro RE weapon damage calculator PileBunker

城プロRE 武器傷害機算機 パイルバンカー

* 『[城プロRE](http://www.dmm.com/netgame_s/oshirore/)』(C) DMMゲームズ
* 「城プロRE」から転載された全てのコンテンツの著作権につきましては、権利者様へ帰属します。

Build with Create React App, Material-UI and typescript.

## Screenshot

![demo1](https://github.com/Panepo/PileBunker-ts/blob/master/doc/demo1.png)
![demo2](https://github.com/Panepo/PileBunker-ts/blob/master/doc/demo2.png)
![demo3](https://github.com/Panepo/PileBunker-ts/blob/master/doc/demo3.png)

## Data

Data are collected from:

* [御城プロジェクトRE 城プロRE 攻略 Wiki](http://scre.swiki.jp/)
* [くろもじ屋](http://www116.sakura.ne.jp/~kuromoji/castle_enemy.htm)

## Algorithm

The calcuation algorithm for is

```
城娘の動作に関して
  実行フレーム＝基本攻撃フレーム/(攻撃速度上昇割合+1)+隙フレーム/(隙速度上昇割合+1)
  攻撃・隙　速度上昇割合＝裝備上昇割合＋特技計略上昇割合
  ※計算結果は小數點以下四捨五入
```

The calcuation algorithm for damage is

```
城プロのダメージ計算式
  自身の攻撃力－対象の防禦力＝ダメージ
```

The calcuation algorithm for status on battlefield is

```
城娘の戦場配置後のステータス計算式
  耐久・攻撃・防禦・範囲
  ＝(基本値×絆ボーナス×地形ボーナス＋裝備補正)×
  巨大化補正×最大係數の割合上昇系特技・計略補正＋全ての固定値繫上昇特技・計略補正
```

The calcuation algorithm for character base attack is

```
Lv.Xでの城娘の能力値Y算出（※2017/08/08メンテ後）
  計算式 … Y=INT(INT((A-B)/1000*X+B)*a)
      A … 武器種ごとのLv.1000の基本値
      B … 武器種ごとのLv.0の基本値
      a … 城娘ごとの能力値係數
  計算例：Lv.110の駿府城の攻撃の値（絆ボーナス・武器・施設は無しでの値）
      INT(INT((1234-50)/1000*110+50)*1.10)=198
```

## Reference

* [御城プロジェクト：RE](http://www.dmm.com/netgame_s/oshirore/)
* [御城プロジェクトRE 城プロRE 攻略 Wiki](https://scre.swiki.jp/)
* [くろもじ屋](http://www116.sakura.ne.jp/~kuromoji/castle_enemy.htm)
* [React](https://facebook.github.io/react/)
* [Redux](http://redux.js.org/)
* [Create React App](https://github.com/facebook/create-react-app)
* [create-react-app-material-typescript-redux](https://github.com/innFactory/create-react-app-material-typescript-redux)
* [Material Design Lite](https://getmdl.io/)
* [Material-UI](https://material-ui.com/)
* [LokiJS](http://lokijs.org/)

## Develop

### Development Requirements
* node `^8.11.0`
* yarn `^1.7.0`
* python `^3.0.0`

### Getting Start

1. Clone source code
```
$ git clone https://github.com/Panepo/PileBunker-ts.git
```
2. Install dependencies
```
$ cd PileBunker-ts
$ yarn
```
3. Start development server and visit [http://localhost:3000/](http://localhost:3000/)
```
$ yarn start
```
### Scripts

|`yarn <script>`       |Description|
|---------------------|-----------|
|`start`              |Serves your app at `localhost:3000`|
|`parser`             |Parses raw data in ./src/raw to generate .json file|
|`test`               |Run test code in ./src|
|`prettier`           |Prettier code in ./src|
|`build`              |Builds the production application to ./build|
|`deploy`             |Deploy the production application to github pages|

### Production

Build code before deployment by running `yarn build`.

## Author

[Panepo](https://github.com/Panepo)
