# ストーンパーク バーチャル宝石探しアプリ デザインアイデア

## コンセプト
博石館（ストーンパーク）園内で使用するバーチャル宝石探しWebアプリ。
来館者がスマートフォンで園内マップを見ながら、バーチャルな宝石を発見・収集する体験を提供。

---

<response>
<text>
## アイデア1: Apple Human Interface Guidelines準拠デザイン

### Design Movement
Apple Human Interface Guidelines（HIG）に完全準拠したiOS純正アプリ風デザイン。SF Pro系フォント、システムカラー、標準的なナビゲーションパターンを採用。

### Core Principles
1. **Clarity（明瞭性）**: コンテンツが主役、UIは透明に近い存在
2. **Deference（控えめさ）**: 装飾を最小限に、機能性を最大化
3. **Depth（深度）**: レイヤー構造による視覚的階層
4. **Consistency（一貫性）**: 全画面で統一されたインタラクション

### Color Philosophy
- 背景: #FFFFFF（純白）、#F2F2F7（システムグレー6）
- テキスト: #000000、#8E8E93（セカンダリ）
- アクセント: #007AFF（システムブルー）
- 成功: #34C759（システムグリーン）
- 宝石ハイライト: グラデーション（宝石の種類により変化）

### Layout Paradigm
- フルスクリーンマップをメインビューに
- 下部にiOS標準のタブバー（5アイテム以下）
- モーダルシートで詳細表示（bottom sheet）
- Safe Area完全対応

### Signature Elements
1. **Frosted Glass効果**: ナビゲーションバーとタブバーにブラー効果
2. **Haptic-like Feedback**: タップ時の微細なスケールアニメーション
3. **System Icons**: SF Symbols風のアイコンセット

### Interaction Philosophy
- タップ→即座のフィードバック（スケール0.95）
- スワイプジェスチャーでシート操作
- ロングプレスでコンテキストメニュー

### Animation
- Spring animation（damping: 0.7, stiffness: 300）
- 画面遷移: 0.3s ease-out
- マイクロインタラクション: 0.15s

### Typography System
- Display: SF Pro Display Bold（タイトル）
- Body: SF Pro Text Regular（本文）
- Caption: SF Pro Text Light（補足）
- 代替: Inter（Google Fonts）
</text>
<probability>0.08</probability>
</response>

---

<response>
<text>
## アイデア2: Mineral Museum（鉱物博物館）インスパイアデザイン

### Design Movement
自然史博物館の展示キャプションとラベリングシステムからインスピレーションを得た、学術的でありながらモダンなデザイン。

### Core Principles
1. **Specimen Focus**: 宝石が標本のように美しく展示される
2. **Educational Elegance**: 情報が整理され、学びを促進
3. **Natural Palette**: 石や鉱物の自然な色調を反映
4. **Tactile Quality**: 紙や布のような触感的テクスチャ

### Color Philosophy
- 背景: #FAFAF8（オフホワイト/生成り）
- テキスト: #2C2C2C（チャコール）
- アクセント: #8B7355（ブロンズ）、#4A6741（モスグリーン）
- 宝石カテゴリ別: アメジスト紫、ルビー赤、エメラルド緑など

### Layout Paradigm
- カード型レイアウトで宝石を「標本カード」として表示
- 左右非対称のグリッド配置
- 余白を活かした博物館的な空間設計
- 縦型スクロールではなく、横スワイプでコレクション閲覧

### Signature Elements
1. **Specimen Cards**: 影とエンボス効果のある標本カード
2. **Handwritten Labels**: 手書き風の学名・説明ラベル
3. **Subtle Grain**: 紙のような微細なテクスチャオーバーレイ

### Interaction Philosophy
- カードをタップで「拡大鏡」効果
- ドラッグで宝石を回転表示
- ダブルタップで詳細情報展開

### Animation
- カード出現: fade-in + slide-up（0.4s）
- 拡大: scale transform with easing
- 収集成功: パーティクル効果（キラキラ）

### Typography System
- Display: Playfair Display（セリフ、見出し）
- Body: Source Sans Pro（サンセリフ、本文）
- Label: Caveat（手書き風、ラベル）
</text>
<probability>0.06</probability>
</response>

---

<response>
<text>
## アイデア3: Crystalline Minimalism（結晶ミニマリズム）

### Design Movement
結晶の幾何学的な美しさをUIに昇華させた、超ミニマルで洗練されたデザイン。Dieter Ramsの「Less but better」哲学を体現。

### Core Principles
1. **Geometric Purity**: 六角形・菱形など結晶構造をUIモチーフに
2. **Monochromatic Base**: モノクロベースに宝石色がアクセント
3. **Negative Space**: 余白そのものがデザイン要素
4. **Precision**: ピクセルパーフェクトな配置

### Color Philosophy
- 背景: #FFFFFF → #F8F9FA（微細なグラデーション）
- テキスト: #1A1A1A（ほぼ黒）
- ボーダー: #E5E5E5（薄グレー）
- アクセント: 宝石の色のみ（彩度を抑えた宝石色）
- 発見時: 宝石色が輝く（彩度UP + グロー効果）

### Layout Paradigm
- 中央にマップ、周囲は完全な余白
- 六角形グリッドでマーカー配置
- 情報は必要時のみ出現（Progressive Disclosure）
- 下部に最小限のドット型ナビゲーション

### Signature Elements
1. **Hexagonal Grid**: 六角形ベースのマップグリッド
2. **Crystal Markers**: 結晶形状のマップマーカー
3. **Glow Effect**: 発見可能な宝石の微細な発光

### Interaction Philosophy
- 最小限のタップ操作
- ジェスチャーベースのナビゲーション
- 音声フィードバック（クリスタルの音）

### Animation
- 出現: 結晶が成長するようなアニメーション
- 収集: 宝石が中央に吸い込まれる
- 遷移: フェードのみ（派手さを排除）

### Typography System
- Display: Outfit（ジオメトリックサンセリフ）
- Body: DM Sans（クリーンなサンセリフ）
- Numbers: Space Mono（等幅、データ表示用）
</text>
<probability>0.04</probability>
</response>

---

## 選択したデザイン: アイデア1 - Apple Human Interface Guidelines準拠デザイン

### 選択理由
ユーザーの要望である「Apple純正アプリのような白やグレーのモダンな感じ」に最も合致。
サイバートロフィーの参照デザインもiOS標準UIを踏襲しており、一貫性がある。
来館者にとって馴染みやすく、直感的な操作が可能。

### 実装方針
1. **フォント**: Inter（SF Proの代替として最適）
2. **カラー**: iOS System Colors準拠
3. **コンポーネント**: shadcn/uiをiOS風にカスタマイズ
4. **ナビゲーション**: 下部タブバー（マップ/コレクション/ショップ/お知らせ/設定）
5. **マップ**: カスタム園内マップ（SVGまたはCanvas）
6. **モーダル**: Bottom Sheet形式で宝石詳細表示
