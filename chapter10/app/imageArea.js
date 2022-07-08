//windowにDOMContentLoadedの処理を登録
window.addEventListener('DOMContentLoaded', e => {
  //画像エリアの要素
  const elImgA = document.querySelector('#imageArea');
  const elNoView = document.querySelector('#noView');
  const elFile = document.querySelector('#file');

  //Canvas関係の要素
  const canvas = document.querySelector('#view');
  const context = document.querySelector('2d');

  //---------------------
  //画像エリアにドロップしたときの処理
  elImgA.addEventListener('dragover', e => {
    e.preventDefault();
    //preventDefault()は Event インターフェイスのメソッドで、ユーザーエージェントに、
    //このイベントが明示的に処理されない場合に、その既定のアクションを通常どおりに行うべきではないことを伝えます。
  });

  elImgA.addEventListener('dragleave', e => {
    e.preventDefault();
  });

  elImgA.addEventListener('drop', e => {
    e.preventDefault();
    uiReadImage(e.dataTransfer.files[0]);
  });

  //画像エリアをクリックした時の処理
  elImgA.addEventListener('click', e => {
    elFile.click();
  });

  elFile.addEventListener('change', e => {
    uiReadImage(e.target.files[0];)
  });

  //---------------------
  //以降関数

  //画像ファイルの読み込み
  async function uiReadImage(file) {
    //画像の読み込みとCanvasへの描画
    try {
      const dtURL = await readImage(file);
      await drawImage(dtURL, canvas, context);
    } catch(e) {
      return;
    }

    //表示の変更
    elNoView.style.display = 'none';
    canvas.style.display = 'inline';
    
    //読み込み時間の設定
    canvas.setAttribute('time', Date.now());

    //キャンバスの内容をストレージに保存
    saveStorageCanvas();
  }

  //画像ファイルの読み込み
  
});