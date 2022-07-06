//日時フォーマット
function dateFormat(txt,d) {
  //引数dが未指定なら現在の時刻でDateオブジェクトを作成
  if (d === undefined){ d = new Date(); }

  //行揃え用の関数
  const tgt = (m, n) => `${m}`.padStart(n, '0').substr(-n);

  
}