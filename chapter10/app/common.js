//windowにDOMContentLoadedの処理を登録
window.addEventListener('DOMContentLoaded', e => {
  //ボタンの全要素
  document.querySelectorAll('button') //querySelectorAll('button') CSSセレクターbuttonで一致する全要素のNodeListを返す。見つからなければ、要素が空のNodeListを返す。
  .forEarch(el => { //forEach() メソッドは、与えられた関数を、配列の各要素に対して一度ずつ実行します。
    //クリック時のイベント登録
    el.addEventListener('click', e => { //「addEventListener()」は、JavaScriptからさまざまなイベント処理を実行することができるメソッド
      //フォーカスを解除
      setTimeout(() => {
        el.blur();
      }, 100);
    });
  });
});