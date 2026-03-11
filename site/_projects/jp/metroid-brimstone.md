---
title: Metroid Brimstone
tech: Unreal Engine, Blender
preview-static: /assets/projects/MetroidBrimstone/MetroidBrimstoneGameplay-poster.png
preview-animated: /assets/images/MetroidBrimstone_short1-3.webp
lang: jp
---

# Metroid Brimstone（大学のプロジェクト・ファンゲーム）

３⼈の⼤学⽣たちと共に、３ヶ⽉の間に、「Unreal Engine 5」を使⽤し、ゲームの⼀部試作を制作しました。他の⽣徒たちはUnrealで経験が少なかったので、私がゲームの企画をまとめ、同僚たちのそれぞれの個⼈⽬標を配慮しながら、Unrealの基本的な使い⽅を教え、チームを指導して完成度の⾼い⼀部試作品を作り上げました。

このプロジェクトはすでに完了です。

## 内容

一般リールのビデオがハイライトを紹介しますが、以下のビデオはゲームプレイのレコーディングです。

<section class="project-media">
  <div class="project-video">
    <video
      controls
      muted
      preload="metadata"
      poster="/assets/projects/MetroidBrimstone/MetroidBrimstoneGameplay-poster.png">
      <source src="/assets/projects/MetroidBrimstone/MetroidBrimstoneGameplay.webm" type="video/webm">
    </video>
  </div>

  <div class="project-doc">
    <h3>テクスチャマッピングの講義</h3>
    <p>
      教授からテクスチャマッピングの講義を教えるのが頼まれた時に、このスライドを作り上げました。目標はテクスチャマッピングの多面さの模範を示すことでした。このゲームの敵のパイプラインに基づいています。
    </p>
    <a
      href="/assets/projects/MetroidBrimstone/ThePowerOfTextureMapping.pdf"
      target="_blank"
      rel="noopener"
      class="project-doc-link">
      PDF版 →
    </a>
  </div>
</section>

## 責任

#### 役割: ディレクター／プロデューサー

### 担当したこと:

- 主⼈公のゲームプレイプログラミング
- AIシステム
    - ⼀つの敵のAIとAIのシステムを作成しました。
    - 同僚たちに他の敵を作れるようにAIを教えました。
- バージョン管理
    - Perforce Depotを作ったり扱ったりすることを学びました。
- リギング
    - ４つのキャラクターのリグ
    - ゲームエンジンで使えるように主⼈公のリグを直しました。
- アニメーション
    - 全てのキャラと敵のアニメーションを⼿でしました。（約５０本）
    - 主⼈公とボスのアニメーションシステムを作成しました。
- モデリング／テクスチャリング
    - チームのためにモデリングをもっと簡単にできるように、プロシージャルのモデリング・テクスチャリングのパイプラインを開発しました。
    - ボスと⼀匹の敵の⽟でできているベースモデルを作成しました。
- BlenderからUnrealに移⾏するパイプラインを開発しました。

### 担当しなかったこと:

- Game Mode/Instanceの論理（ゲーム進⾏）
- 半分の敵のAI（ボスにも）
- 主⼈公のモデルとベースリグ（オンラインで⾒つけた）
- ⾶ぶ敵と溶岩の敵のベースモデル
- レベルの設計
- 環境アート
- VFX
- SFX
- ⾳楽
