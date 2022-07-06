## #imageArea
- #noView : 画像のドロップを促すdiv要素
- #view :画像を表示するcanvas要素
- #file :ファイル入力欄

## #controlArea
- #ef1 :[セピア]ボタン
- #efBack :[戻す]ボタン
- #efSave :[保存]ボタン
- #efDel :[削除]ボタン

## #commentArea
- #commentStatus :文字数を表示するspan要素
- #comment :[コメント]欄

## #sendArea
- #send :[投稿]ボタン

## #postListArea
- 投稿された内容をタイムライン表示

## common.js

全エリア共通で使う処理

## storage.js

Webページを読み込んだ時に、以前の作業状態を復帰するための処理

## imageArea.js

#imageAreaの処理

## controlArea.js

#controlAreaの処理

## commentArea.js

#controlAreaの処理。コメント欄に入力するとリアルタイムに文字数を表示

## sendArea.js

#sendAreaの処理

## dateFormat.js

日付の表示を上手く加工するプログラム

## postListArea.js

#postListAreaの処理