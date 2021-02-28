
//「トップへ戻る」ボタンをクリック時の処理:引数に変数materialを持つfunction関数を作成する。
var backToIndex = function(material){
  var mod = material?'material':undefined;
  ons.notification.confirm({
    message:'トップページに戻りますか？',
    modifier:mod,
    callback:function(idx){
      switch(idx){
        case 0: //「キャンセル」ボタンをクリックした場合
          ons.notification.alert({
            message:'キャンセルボタンを押しました。',
            modifier:mod
          });
          break;
        case 1: //「OK」ボタンをクリックした場合
          ons.notification.alert({
            message:'OKボタンが押されました。',
            modifier:mod
          });
          //トップページに遷移する。
          location.href="index.html";
          break;
      }
    }
  })
}
