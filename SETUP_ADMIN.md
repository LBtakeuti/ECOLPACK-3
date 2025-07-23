# 本番環境でのCMS初期設定

## 1. 環境変数の確認

Vercelで以下の環境変数が設定されていることを確認：
- `SESSION_SECRET`
- `NEXT_PUBLIC_SUPABASE_URL`
- `NEXT_PUBLIC_SUPABASE_ANON_KEY`
- `SUPABASE_SERVICE_ROLE_KEY`

## 2. デプロイ状況の確認

Vercelダッシュボードで最新のデプロイが成功していることを確認

## 3. 環境変数の動作確認

```bash
curl https://[your-domain]/api/debug
```

すべての値が`true`になっていることを確認

## 4. Supabaseテーブルの確認

```bash
curl -X POST https://[your-domain]/api/test-auth
```

レスポンスを確認：
- `env`セクションですべての値が設定されているか
- `usersTable`セクションでテーブルの状態を確認

## 5. Adminユーザーの初期化

```bash
curl -X POST https://[your-domain]/api/init-admin
```

成功メッセージが表示されることを確認

## 6. CMSにログイン

1. `https://[your-domain]/admin`にアクセス
2. ユーザー名: `admin`
3. パスワード: `admin123`

## トラブルシューティング

### ログインできない場合

1. Vercel Functions のログを確認
2. `/api/test-auth`の結果を確認
3. Supabaseダッシュボードでusersテーブルを直接確認

### 500エラーが出る場合

1. 環境変数が正しく設定されているか確認
2. Supabaseのテーブルが作成されているか確認
3. RLS（Row Level Security）が無効になっているか確認