# Supabase セットアップガイド

## 1. Supabaseプロジェクトの作成

1. [Supabase](https://supabase.com) にアクセス
2. 新規プロジェクトを作成
3. プロジェクトURLとAnon Keyを取得

## 2. データベーステーブルの作成

Supabase SQLエディタで以下を実行：

```sql
-- ユーザーテーブル
CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  username TEXT UNIQUE NOT NULL,
  password_hash TEXT NOT NULL
);

-- ニューステーブル
CREATE TABLE news (
  id SERIAL PRIMARY KEY,
  title TEXT NOT NULL,
  content TEXT NOT NULL,
  status TEXT DEFAULT 'draft',
  published_at TIMESTAMP,
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);

-- ページ画像テーブル
CREATE TABLE page_images (
  id SERIAL PRIMARY KEY,
  page_name TEXT NOT NULL,
  image_name TEXT NOT NULL,
  file_path TEXT NOT NULL,
  alt_text TEXT,
  created_at TIMESTAMP DEFAULT NOW(),
  UNIQUE(page_name, image_name)
);

-- 更新日時の自動更新
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER update_news_updated_at BEFORE UPDATE ON news
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
```

## 3. 初期管理者ユーザーの作成

```sql
-- パスワードハッシュは事前に生成する必要があります
-- または、初回ログイン時に作成するロジックを実装
INSERT INTO users (username, password_hash) 
VALUES ('admin', '$2a$10$...');  -- bcryptハッシュ
```

## 4. 環境変数の設定

Vercelで以下の環境変数を追加：

```
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
SUPABASE_SERVICE_ROLE_KEY=your-service-role-key
```

## 5. ストレージバケットの設定

1. Supabaseダッシュボードで「Storage」を開く
2. 「images」バケットを作成
3. バケットをpublicに設定

## 6. RLS（Row Level Security）の設定

```sql
-- 必要に応じてRLSポリシーを設定
-- 例：認証されたユーザーのみ書き込み可能
ALTER TABLE news ENABLE ROW LEVEL SECURITY;
ALTER TABLE page_images ENABLE ROW LEVEL SECURITY;

-- ポリシーの例
CREATE POLICY "Public read access" ON news
  FOR SELECT USING (status = 'published');

CREATE POLICY "Admin full access" ON news
  FOR ALL USING (true);
```