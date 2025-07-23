# Vercel環境変数設定ガイド

## 必須の環境変数

Vercelでデプロイする際に、以下の環境変数を設定してください：

### 1. SESSION_SECRET（必須）
```
SESSION_SECRET=your-very-long-random-string-here-at-least-32-characters
```
- 32文字以上のランダムな文字列
- 生成方法: `openssl rand -base64 32`

### 2. NEXT_PUBLIC_BASE_URL（自動設定）
- Vercelが自動的に設定します（設定不要）

### 3. Supabase設定（画像アップロード用・オプション）
```
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-supabase-anon-key
```

## Vercelでの設定手順

1. Vercelダッシュボードにログイン
2. プロジェクトを選択
3. 「Settings」タブをクリック
4. 「Environment Variables」セクションに移動
5. 上記の環境変数を追加
6. 「Save」をクリック

## 重要な注意事項

### データベースについて
- 現在の設定では、本番環境でCMS機能は制限されています
- 静的サイトとして正常に動作します
- CMS機能を本番で使用する場合は、外部データベース（PostgreSQL等）の設定が必要です

### デフォルトの管理者情報
- 開発環境のみで使用可能
- Email: admin@ecolopack.jp
- Password: admin123

## トラブルシューティング

### ビルドエラーが発生する場合
1. SESSION_SECRETが正しく設定されているか確認
2. Node.jsバージョンが18.x以上か確認

### 画像アップロードができない場合
1. Supabaseの環境変数が設定されているか確認
2. Supabaseのバケット設定を確認

## デプロイ後の確認

1. トップページが正常に表示されるか
2. 各ページへのナビゲーションが動作するか
3. 画像が正しく表示されるか