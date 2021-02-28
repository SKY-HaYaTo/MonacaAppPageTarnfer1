// This is a JavaScript file
var showAlert = function() {
  ons.notification.alert('Alert!');
};

var showConfirm = function() {
  ons.notification.confirm('Confirm!')
};

var showPrompt = function() {
  ons.notification.prompt('Prompt!')
    .then(function(input) {
      var message = input ? 'Entered: ' + input : 'Entered nothing!';
      ons.notification.alert(message);
    });
};

var showToast = function() {
  ons.notification.toast('Toast!', {
    timeout: 2000
  });
};

//「OK」ボタンをクリックすると次のページ(nextPage.html)へ遷移する処理:引数に変数materialを持つfunction関数を作成する。
var goToNextPage = function(material){
  var mod = material?'material':undefined;
  ons.notification.confirm({
    message:'Do you want to go to The next page?',
    modifier:mod,
    callback:function(idx){
      switch(idx){
        case 0: //「キャンセル」ボタンをクリックした場合
          ons.notification.alert({
            message:'You pressed "Cancel"',
            modifier:mod
          });
          break;
        case 1: //「OK」ボタンをクリックした場合
          ons.notification.alert({
            message:'You pressed "OK"',
            modifier:mod
          });
          location.href ="nextPage.html";
          break;
      }
    }
  })
}
