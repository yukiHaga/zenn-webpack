FROM node:latest

# appディレクトリに移動。appディレクトリがないならルートディレクトリ配下に作ってから移動する
# 以降の命令ではこのディレクトリを基準にして行われる
WORKDIR /app

COPY package*.json ./

RUN npm install

# アプリケーションのコードをコピー
# .dockerignoreでnode_modulesをイメージのファイルシステムにコピーしないようにする。
# それをしちゃうと、上でせっかく新しいパッケージをインストールしても、ローカルのnode_modulesで上書きされちゃうから
COPY . .

# ポート番号を公開
# EXPOSE命令は、コンテナがどのポート番号を受け付けるようになるかを指定する。
EXPOSE 3000

# CMDではンテナを起動したタイミングで、コンテナの中で実行したいコマンドを実行するため
# CMD ["npm", "start"]


