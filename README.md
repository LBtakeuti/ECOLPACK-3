# エコロパック企業サイト

株式会社エコロパックの企業サイトです。

## 技術スタック

- **フレームワーク**: Next.js 15.4.2
- **スタイリング**: Tailwind CSS
- **言語**: TypeScript
- **認証**: iron-session
- **データベース**: SQLite（開発環境）
- **画像ストレージ**: Supabase（オプション）

## 主な機能

### 公開サイト
- 企業情報ページ
- 製品ラインナップ（5製品）
- ニュース一覧
- お問い合わせ情報

### CMS機能（開発環境のみ）
- 管理者ログイン
- ニュース管理（作成・編集・削除）
- 画像管理（ページごとの画像アップロード）

**注意**: 本番環境（Vercel）ではCMS機能は無効化されています。詳細は[PRODUCTION_NOTICE.md](./PRODUCTION_NOTICE.md)を参照してください。

## セットアップ

### 1. 依存関係のインストール
```bash
npm install
```

### 2. 環境変数の設定
`.env.local`ファイルを作成：
```
SESSION_SECRET=your-secret-key-at-least-32-characters
```

### 3. 開発サーバーの起動
```bash
npm run dev
```

### 4. データベースの初期化（開発環境）
```bash
npm run setup
```

## Vercelへのデプロイ

詳細は[VERCEL_ENV_SETUP.md](./VERCEL_ENV_SETUP.md)を参照してください。

## プロジェクト構造

```
├── app/                # Next.js App Router
│   ├── admin/         # CMS管理画面
│   ├── api/           # APIルート
│   └── (pages)/       # 公開ページ
├── components/        # 共通コンポーネント
├── lib/              # ライブラリ関数
├── public/           # 静的ファイル
└── styles/           # グローバルスタイル
```

## ライセンス

© 2024 株式会社エコロパック. All rights reserved.