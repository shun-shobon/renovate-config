# renovate-config

shun-shobon の個人リポジトリ向け Renovate の共有プリセット。

## 使い方

対象リポジトリの `renovate.json` で `default.json` を継承する。

```json
{
	"$schema": "https://docs.renovatebot.com/renovate-schema.json",
	"extends": ["github>shun-shobon/renovate-config"]
}
```

一部だけ使う場合は、個別のプリセットを `github>shun-shobon/renovate-config:<ファイル名>` で指定する。

| ファイル         | 内容                                                                          |
| ---------------- | ----------------------------------------------------------------------------- |
| `default.json`   | 下記のプリセットをすべてまとめたもの                                          |
| `base.json5`     | `config:best-practices` を土台にしたスケジュール、自動マージ、更新方針        |
| `npm.json5`      | npm 依存の公開待ち期間、peer deps の扱い、pnpm の dedupe、Node.js の LTS 制限 |
| `security.json5` | OSV による脆弱性修正 PR、npm 以外の公開待ち期間、OpenSSF Scorecard の表示     |
| `label.json5`    | PR のラベルと GitHub Actions 更新のコミットメッセージ                         |

各設定の意図はファイル内のコメントを参照する。

## 開発

Node.js、pnpm、gh-actions-lock のバージョンは `mise.toml` で固定している。

```sh
mise install
pnpm install
pnpm lint          # renovate-config-validator でプリセットを検証する
pnpm format        # oxfmt。CI 向けの検査は pnpm format:check
```

CI では、このリポジトリ自身に対して変更後のプリセットで Renovate を dry-run し、設定が実際に解決・適用できることを確かめる。
