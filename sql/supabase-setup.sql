-- 推しイチ Supabaseセットアップスクリプト
-- このスクリプトをSupabaseのSQL Editorにコピペして実行してください

-- ユーザーテーブル（ファン用）
CREATE TABLE users (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  email TEXT UNIQUE NOT NULL,
  name TEXT NOT NULL,
  points INTEGER DEFAULT 100,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- 以下、他のテーブル定義も含める...
