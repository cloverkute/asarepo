<?php
$tmpl = ".";
?>
<link rel="stylesheet" href="<?php echo $tmpl; ?>/cookie/main.css">
<div id="cookie__popup" class="cookie__popup">
  <p class="cookie__popup__title">クッキーへの同意</p>
  <p class="cookie__popup__text">当サイトを引き続き利用することにより、クッキーの利用に同意したものと見なされます。</p>
  <div class="cookie__popup__flex">
    <div class="cookie__popup__flex__box">
      <ul class="cookie__popup__menu">
        <li><a href="https://www.shinwart.co.jp/cookiepolicy.html" target="_blank" rel="noopener">クッキーについて</a></li>
        <li><a href="https://www.shinwart.co.jp/privacypolicy.html" target="_blank" rel="noopener">プライバシーポリシー</a></li>
      </ul>
    </div>
    <ul class="cookie__popup__btns">
      <li class="cookie__popup__btns-1"><a href="javascript:void(0)" id="cookie-set-open">設定変更</a></li>
      <li id="pp_agree_btn" class="cookie__popup__btns-2"><a href="">OK</a></li>
    </ul>
  </div>
  <div id="cookie__popup__close" class="cookie__popup__close"></div>
</div>
<!-- cookie__popup -->
<div id="cookie-policy" class="cookie-policy">
  <div id="cookie-policy__layer" class="cookie-policy__layer"></div>
  <div id="cookie-policy__container" class="cookie-policy__container">
    <div class="cookie-policy__container__title">
      <div class="cookie-policy__container__title__logo"><img src="<?php echo $tmpl; ?>/cookie/site_logo.png"></div>
      <div class="cookie-policy__container__title__detail">Cookie の確認と管理</div>
    </div>
    <!-- cookie-policy__container__title -->
    <div class="cookie-policy__container__flex">
      <div class="cookie-policy__container__flex__left">
        <ul class="cookie-policy__container__flex__left__menu">
          <li class="pp-list-item cookie-policy__container__flex__left__menu__item"><a class="active pp-item" data-target="pp-content1">プライバシー情報</a></li>
          <li class="pp-list-item cookie-policy__container__flex__left__menu__item"><a class="pp-item" data-target="pp-content2">不可欠な Cookie</a></li>
          <li class="pp-list-item cookie-policy__container__flex__left__menu__item"><a class="pp-item" data-target="pp-content3">パフォーマンス Cookie</a></li>
          <li class="pp-list-item cookie-policy__container__flex__left__menu__item"><a class="pp-item" data-target="pp-content4">ターゲティング Cookie</a></li>
        </ul>
      </div>
      <div class="cookie-policy__container__flex__right">
        <div id="cookie-policy__contents" class="cookie-policy__container__flex__right__contents">
          <div id="pp-content1" class="active pp-content cookie-policy__container__flex__right__contents__box">
            <p class="pp-content__title cookie-policy__container__flex__right__contents__box__title">プライバシー情報</p>
            <div class="pp-content__text cookie-policy__container__flex__right__contents__box__text">
              <p>お客様が当サイトを訪れると、ブラウザに情報が保存される、またはブラウザに保存された情報が取得されることがあります。情報の主な保存先は Cookie であり、対象となるのはサイト訪問者に関する情報、サイト訪問者による設定、デバイス情報などです。これらの情報はサイトを正常に機能させる目的を中心に使われます。個人を直接特定できる情報が保存されることは通常ありませんが、Web サイトのパーソナライズに使われることはあります。鈴与シンワートではプライバシーの権利を尊重しており、一部の Cookie については有効化を拒否できるよう配慮しています。各カテゴリをクリックすることで、それらの Cookie に関する詳細を確認し、当サイトにおけるデフォルト設定を変更できます。ただし、一部の Cookie を無効化した場合、サイトの利用やサービスの利用に影響が出る可能性があります。<a href="https://www.shinwart.co.jp/privacypolicy.html" target="_blank"  rel="noopener">詳細情報</a></p>
            </div>
          </div>
          <div id="pp-content2" class="pp-content cookie-policy__container__flex__right__contents__box">
            <p class="pp-content__title cookie-policy__container__flex__right__contents__box__title">不可欠な Cookie</p>
            <div class="pp-content__field cookie-policy__container__flex__right__contents__box__field">常に有効</div>
            <div class="pp-content__text cookie-policy__container__flex__right__contents__box__text">
              <p>このカテゴリの Cookie は、Web サイトが正常に機能する上で欠かせないものであり、無効にできません。プライバシー設定、ログインやフォームでの入力など、サイトの利用に必要な情報に限り保存されます。ブラウザの設定により、不可欠な Cookie を警告またはブロックできますが、ブロックすると当サイトの一部は機能しなくなります。不可欠な Cookie に個人情報は保存されません。</p>
            </div>
          </div>
          <div id="pp-content3" class="pp-content cookie-policy__container__flex__right__contents__box">
            <p class="pp-content__title cookie-policy__container__flex__right__contents__box__title">パフォーマンス Cookie</p>
            <div class="pp-content__field cookie-policy__container__flex__right__contents__box__field">
              <label for="performance_cookie">
                <input type="checkbox" id="performance_cookie" name="performance_cookie" class="performance_cookie pp_cookies">
                有効にする</label>
            </div>
            <div class="pp-content__text cookie-policy__container__flex__right__contents__box__text">
              <p>このカテゴリの Cookie は、訪問回数とトラフィックソースの種類を数えるために使われます。これらの情報は、当サイトのパフォーマンスを測り改善する目的で利用されます。たとえば最も訪問者が多いページと少ないページや、訪問者が開いたページなどを追跡します。情報はすべて集約されるため、匿名性が維持されます。パフォーマンス Cookie を無効にすると、最後に訪れた日時を把握できないため、当サイトのパフォーマンスが判断できなくなります。</p>
            </div>
          </div>
          <div id="pp-content4" class="pp-content cookie-policy__container__flex__right__contents__box">
            <p class="pp-content__title cookie-policy__container__flex__right__contents__box__title">ターゲティング Cookie</p>
            <div class="pp-content__field cookie-policy__container__flex__right__contents__box__field">
              <label for="targeting_cookie">
                <input type="checkbox" id="targeting_cookie" name="targeting_cookie" class="targeting_cookie pp_cookies">
                有効にする</label>
            </div>
            <div class="pp-content__text cookie-policy__container__flex__right__contents__box__text">
              <p>このカテゴリの Cookie は、広告パートナーにより当サイト経由で設定される場合があります。訪問者の興味関心について記録し、それらと関連性の高い広告をサイト上で表示させる目的で使われます。個人情報が直接保存されることはありませんが、お使いのブラウザとデバイスに関する固有の情報が利用されます。ターゲティング Cookie を無効にすると、広告のターゲティング度合いが低下します。</p>
            </div>
          </div>
        </div>
        <!-- cookie-policy__container__flex__right__contents --> 
      </div>
    </div>
    <!-- cookie-policy__container__flex -->
    <div class="cookie-policy__container__bottom">
      <button id="pp-agree-btn" class="cookie-policy__container__bottom__btn">この設定で保存する</button>
    </div>
    <!-- cookie-policy__container__bottom --> 
  </div>
  <!-- cookie-policy__container --> 
</div>
<!-- cookie-policy --> 
<script src="<?php echo $tmpl; ?>/cookie/index.js"></script>