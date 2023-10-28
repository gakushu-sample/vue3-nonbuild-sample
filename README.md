# vue3-nonbuild-sample

Vue3をビルドなしで使う場合のサンプル。  
サーバサイドフレームワークを別途使用していて、そちらのテンプレートエンジンを使ってはいるが、画面側でもモダンなフレームワークを使いたい、というときに Vue3 は便利かもしれない。  
ただし、クライアント側で vue.global.prod.js により処理するためコンポーネントはユーザーに丸見え。  
恥ずかしいコメントは書かないようにしましょう。

---

Windows 環境下で確認します。

# 起動方法

Apache を起動して、そのうえで実行して確認する

## 1. httpd-2.4.57-win64-VS17.zip を解凍する

解凍する場所はどこでもいいが、ここでは `D:\src_files\vue3-nonbuild-sample` とする  
解凍してできたフォルダは `D:\src_files\vue3-nonbuild-sample\Apache24` とする

## 2. 解凍したフォルダにある `Apache24\conf\httpd.conf` を以下のように直す

```sh
～ 中略 ～

Define SRVROOT "D:/src_files/vue3-nonbuild-sample/Apache24"

～ 中略 ～

DocumentRoot "D:/src_files/vue3-nonbuild-sample/src"
<Directory "D:/src_files/vue3-nonbuild-sample/src">
```

## 3. 解凍したフォルダにある `Apache24\bin\httpd.exe` を実行する

コマンドプロンプトから `D:\src_files\vue3-nonbuild-sample\Apache24\bin\httpd.exe` を起動する  
なお、 Apache の起動を止める場合は `Ctrl + C` で止まる

# ソース確認方法

## ブラウザでアクセスするだけ

`http://localhost` にアクセスすると、表示される
