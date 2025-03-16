# 秘書完全再現 LocalAI セットアップ

## セットアップ手順

### 1. モデルのダウンロード
models/ フォルダに日本語モデル (ELYZAなど) を配置してください。
例:
https://huggingface.co/elyza/ELYZA-japanese-Llama-2-7b-instruct-GGUF

### 2. Docker 起動
```
docker-compose up -d
```

### 3. UI セットアップ
```
cd ui
npm install
npm run dev
```

ブラウザで http://localhost:3000 へアクセスして秘書とチャット開始！
