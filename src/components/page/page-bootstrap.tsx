import { Component, h } from '@stencil/core';

@Component({
  tag: 'page-bootstrap',
})
export class PageBootStrap {
  render() {
    return (
      <div class="d-flex flex-column">
        <img class="w-100" src="/assets/images/fv.jpg"></img>
        <img class="position-absolute animate__animated animate__pulse animate__infinite" style={{ top: '25vw', left: '10%', width: '40%' }} src="/assets/images/fv_btn.png"></img>
        <p class="text-center p-4">
          ※当セミナーは、YouTubeで集客や売上を上げる方法が学べる経営者・個人事業主・自営業者向けの内容です。
          <br></br>
          YouTuberとして広告収入を得る目的や動画編集スキルを身に付けたい方向けではございません。
        </p>
        <h2 class="text-center">
          ビジネスYouTubeに、<br></br>
          <span class="red">再生回数は必要ありません！</span>
        </h2>
      </div>
    );
  }
}
