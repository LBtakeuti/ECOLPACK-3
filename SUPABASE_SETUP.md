# Supabase画像ストレージ設定ガイド

Supabaseを使用して画像をクラウドストレージに保存する設定方法です。

## Supabaseプロジェクトの作成

1. **Supabaseアカウントの作成**
   - [Supabase](https://supabase.com)にアクセス
   - GitHubアカウントでサインアップ

2. **新しいプロジェクトを作成**
   - 「New Project」をクリック
   - プロジェクト名: `ecolopack-storage`（任意）
   - データベースパスワードを設定（安全な場所に保存）
   - リージョン: `Northeast Asia (Tokyo)`を選択

3. **プロジェクトの初期化を待つ**
   - 約2分程度でプロジェクトが作成されます

## ストレージバケットの設定

1. **Storageタブに移動**
   - 左側メニューから「Storage」を選択

2. **新しいバケットを作成**
   - 「New bucket」をクリック
   - バケット名: `images`
   - Public bucket: **ON**にする（画像を公開アクセス可能にする）
   - 「Create bucket」をクリック

3. **バケットポリシーの設定**
   - 作成した`images`バケットをクリック
   - 「Policies」タブを選択
   - 「New Policy」をクリック

4. **アップロードポリシーを追加**
   ```sql
   -- すべてのユーザーがアップロードできるようにする
   CREATE POLICY "Allow public uploads" ON storage.objects
   FOR INSERT WITH CHECK (bucket_id = 'images');
   ```

5. **読み取りポリシーを追加**
   ```sql
   -- すべてのユーザーが画像を閲覧できるようにする
   CREATE POLICY "Allow public reads" ON storage.objects
   FOR SELECT USING (bucket_id = 'images');
   ```

## 環境変数の取得

1. **プロジェクト設定に移動**
   - 左側メニューの「Settings」→「API」を選択

2. **必要な情報をコピー**
   - **Project URL**: `https://xxxxx.supabase.co`
   - **anon public**: `eyJhbGc...`（長い文字列）

## Vercelでの環境変数設定

1. **Vercelプロジェクトの設定**
   - プロジェクト設定→「Environment Variables」

2. **以下の環境変数を追加**
   ```
   NEXT_PUBLIC_SUPABASE_URL=https://xxxxx.supabase.co
   NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGc...（anon publicキー）
   SESSION_SECRET=your-session-secret-here
   ```

## 動作確認

1. **デプロイ後の確認**
   - 管理画面（`/admin`）にログイン
   - 画像管理ページで画像をアップロード
   - アップロードされた画像がSupabaseに保存されることを確認

2. **Supabaseダッシュボードで確認**
   - Storage→imagesバケットで画像が保存されているか確認

## メリット

- **無料枠**: 1GBまでのストレージが無料
- **高速配信**: CDN経由で画像を配信
- **自動バックアップ**: Supabaseが自動的にバックアップ
- **スケーラブル**: トラフィックが増えても安定動作

## トラブルシューティング

### 画像がアップロードできない場合
- 環境変数が正しく設定されているか確認
- Supabaseのバケットポリシーが正しく設定されているか確認

### 画像が表示されない場合
- バケットがPublicに設定されているか確認
- CORSの設定が必要な場合があります

### エラーが発生する場合
- Supabaseダッシュボードのログを確認
- ブラウザのコンソールエラーを確認

## 注意事項

- 本番環境では適切なアクセス制御を検討してください
- 大量の画像を扱う場合は有料プランへの移行を検討してください
- 定期的にストレージ使用量を確認してください