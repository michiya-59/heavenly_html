// 以下の既存のJavascriptのコードがあるので、こちらに追記・修正する形でお願いします。
// document.addEventListener('DOMContentLoaded', function() {
//   var modal = document.getElementById("modal");
//   var link = document.getElementById("submitLink");
//   var fileUpload = document.getElementById("fileUpload");
//   var close = document.getElementsByClassName("close")[0];


//   link.onclick = function(e) {
//     e.preventDefault();
//     modal.style.display = "block";
//   }

//   fileUpload.onchange = function() {
//     if (this.files.length > 3) {
//       alert("最大3つのファイルまで選択できます。");
//       this.value = ""; // 選択をクリア
//     }
//   };

//   window.onclick = function(event) {
//     if (event.target == modal) {
//       modal.style.display = "none";
//     }
//   }
//   close.onclick = function() {
//     modal.style.display = "none";
//   };

//   window.onclick = function(event) {
//     if (event.target == modal) {
//       modal.style.display = "none";
//     }
//   };
// });
document.addEventListener('DOMContentLoaded', function() {
  var modal = document.getElementById("modal");
  var link = document.getElementById("submitLink");
  var fileUpload = document.getElementById("fileUpload");
  var close = document.getElementsByClassName("close")[0];

  // モーダルを表示する関数
  function showModal() {
    modal.style.display = "block";
    modal.style.opacity = 1; // 透明度を最大に
  }

  // モーダルを非表示にする関数
  function hideModal() {
    modal.style.opacity = 0; // 透明度を0に設定してふわっと消えるアニメーション開始
    // アニメーションが完了するまで待つ
    setTimeout(function() {
      modal.style.display = "none"; // アニメーション完了後にdisplayをnoneに設定
    }, 400); // CSSのアニメーション時間と一致させる
  }

  link.addEventListener('click', function(e) {
    e.preventDefault();
    showModal();
  });

  close.addEventListener('click', function() {
    hideModal();
  });

  window.addEventListener('click', function(event) {
    if (event.target == modal) {
      hideModal();
    }
  });

  fileUpload.onchange = function() {
    if (this.files.length > 3) {
      alert("最大3つのファイルまで選択できます。");
      this.value = ""; // 選択をクリア
    }
  };
});
