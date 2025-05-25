# 推しイチ - アイドルチャットアプリ

## 🚀 セットアップ手順

### 1. 環境変数の設定
`.env.local.example` を `.env.local` にコピーして、Supabaseの情報を入力してください。

### 2. 依存関係のインストール
```bash
npm install
```

### 3. Supabaseのセットアップ
1. [Supabase](https://supabase.com) でプロジェクトを作成
2. SQL Editorで `sql/supabase-setup.sql` を実行
3. APIキーを `.env.local` に設定

### 4. 統合アプリのコードを追加
`components/OshiichiIntegratedApp.tsx` に完全なコードを貼り付けてください。

### 5. 開発サーバーの起動
```bash
npm run dev
```

### 6. アプリにアクセス
ブラウザで http://localhost:3000 を開く

## 📁 フォルダ構造
```
oshiichi-app/
├── app/
│   ├── api/          # APIルート
│   ├── page.tsx      # メインページ
│   ├── layout.tsx    # レイアウト
│   └── globals.css   # グローバルCSS
├── components/       # Reactコンポーネント
├── lib/             # ユーティリティ
├── public/          # 静的ファイル
└── sql/             # データベーススクリプト
```

## 🎯 機能
- ライセンスキーによる認証
- リアルタイムチャット
- ポイントシステム
- 管理者機能

## 📱 対応環境
- デスクトップ/モバイル対応
- モダンブラウザ推奨
