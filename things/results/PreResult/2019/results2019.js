$(function () {
  // selectがチェンジした場合に処理
  $('select').change(function () {
    // スクロールの速度
    var speed = 400; // ミリ秒
    // アンカーの値取得
    var href = $(this).val(); // リンク先（value）を取得して、hrefという変数に代入
    // 移動先を取得
    var target = $(href == "#" || href == "" ? 'html' : href); // リンク先(href）のidがある要素を探して、targetに代入
    // 移動先を調整
    var position = target.offset().top; // idの要素の位置をoffset()で取得して、positionに代入
    // スムーススクロール
    $('body,html').animate({scrollTop:position}, speed, 'swing'); // linear（等速） or swing（変速）
    return false;
  });
});