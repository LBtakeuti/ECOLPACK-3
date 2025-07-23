# Vercelデプロイガイド

## デプロイ手順

1. **Vercelアカウントの準備**
   - [Vercel](https://vercel.com)にアクセスしてアカウントを作成
   - GitHubアカウントと連携

2. **プロジェクトのインポート**
   - Vercelダッシュボードで「New Project」をクリック
   - GitHubリポジトリ「ECOLPACK-3」を選択
   - 「Import」をクリック

3. **環境変数の設定**
   
   Vercelのプロジェクト設定で以下の環境変数を追加：

   ```
   SESSION_SECRET=your-very-long-random-string-here-at-least-32-characters
   ```

   ※ SESSION_SECRETは32文字以上のランダムな文字列を生成してください
   
   例：`openssl rand -base64 32` コマンドで生成可能

4. **データベースの設定**

   本番環境では以下のオプションがあります：

   ### オプション1: Vercel Blob Storage（推奨）
   - Vercelダッシュボードで「Storage」タブを選択
   - 「Create Database」→「Blob」を選択
   - 自動的に環境変数が設定されます

   ### オプション2: 外部データベース
   - SQLiteの代わりにPostgreSQLやMySQLを使用
   - データベースの接続情報を環境変数に追加

5. **デプロイ**
   - 「Deploy」ボタンをクリック
   - デプロイが完了するまで待機（約2-3分）

## デプロイ後の設定

1. **管理者アカウント**
   - URL: `https://your-domain.vercel.app/admin`
   - デフォルトログイン情報:
     - Email: admin@ecolopack.jp
     - Password: admin123

   ⚠️ **重要**: デプロイ後すぐにパスワードを変更してください

2. **画像アップロード**
   - 本番環境では画像をVercel Blobまたは外部ストレージ（AWS S3など）に保存することを推奨

## トラブルシューティング

### ビルドエラーが発生する場合
- Node.jsバージョンを確認（18.x以上が必要）
- package.jsonの依存関係を確認

### ログインできない場合
- SESSION_SECRET環境変数が正しく設定されているか確認
- ブラウザのCookieをクリアして再試行

### 画像がアップロードできない場合
- 本番環境では`/public/uploads`への書き込みができないため、外部ストレージの設定が必要

## カスタムドメインの設定

1. Vercelダッシュボードで「Domains」タブを選択
2. カスタムドメインを追加
3. DNSレコードを設定（VercelのIPアドレスを指定）

## 更新方法

GitHubにプッシュすると自動的にVercelが再デプロイします：

```bash
git add .
git commit -m "Update content"
git push origin main
```

## セキュリティ推奨事項

1. 本番環境では強力なSESSION_SECRETを使用
2. デフォルトの管理者パスワードを必ず変更
3. HTTPSを必ず使用（Vercelでは自動的に有効）
4. 定期的にセキュリティアップデートを確認