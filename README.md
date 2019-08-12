# nuxt + ts template

https://github.com/takefumi-yoshii/ts-nuxtjs-vuex を参考に作成しています。

## Development

リポジトリをクローンして依存ライブラリをインストールします。

```
$ yarn
```

ローカルホストで動かします。

```
$ yarn dev
```

ビルドします。`.nuxt`に吐き出します。

```
$ yarn build
```

ビルドしてスタートします。`.nuxt`に吐き出してスタートします。

```
$ yarn start
```

リントします。`@typescript-eslint/parser`を使っているのでちょっと遅いです。fix までするときは`:fix`をつけます。

```
$ yarn lint
or
$ yarn lint:fix
```

フォーマットをします。Prettier の標準ルールに準拠しています。

```
$ yarn format
```
