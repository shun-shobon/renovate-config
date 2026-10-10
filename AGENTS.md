# AGENTS.md

個人リポジトリ向けの Renovate 共有プリセット。プリセットの一覧と開発コマンドは README を参照する。

## プリセット

- 設定は関心ごとにファイルを分け、`default.json` からすべて継承する。新しいプリセットファイルを足したら `default.json` の `extends` と README の表にも追加する。
- プリセットは JSON5 で書く。`pnpm lint` が検証するのは `default.json` と `*.json5` だけなので、`.json` で増やさない。
- 設定ごとに、意図を日本語のコメントで残す。Renovate の既定値やほかのプリセットを打ち消す設定は、何を打ち消すのかを書く。
- `default.json` は他リポジトリから `github>shun-shobon/renovate-config` で参照される。main への変更はすぐに全リポジトリへ反映されるので、挙動が変わる設定は影響範囲を確認してから入れる。
- 変更後は `pnpm format` と `pnpm lint` を通す。

## GitHub Actions

- `uses:` はタグで書き、SHA は `.github/workflows/actions.lock` で固定する。`uses:` を変えたら `gh-actions-lock`（mise で入る）を実行してロックファイルを更新する。

## コミット

- ユーザーに頼まれたときだけコミットする。
- メッセージは Conventional Commits の `type: 英語の件名` 形式で書く（例: `feat: disable lock file maintenance and harden security settings`）。
