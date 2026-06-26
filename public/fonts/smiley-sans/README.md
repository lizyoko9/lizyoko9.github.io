# 得意黑 Smiley Sans（子集化 web 字体）

用于站点标题/站点名的展示字体。已用 `cn-font-split` 按 unicode-range 切成多个 woff2 分片，
浏览器只会下载每个页面实际用到的字形分片。

- 字体：得意黑 Smiley Sans v2.0.1（Oblique）
- 来源：https://github.com/atelier-anchor/smiley-sans （SIL Open Font License 1.1，允许子集化与再分发）
- CSS 中声明的 `font-family` 名：`Smiley Sans`

## 如何重新生成

```bash
# 1. 从 release 下载并解压，拿到 SmileySans-Oblique.ttf
#    https://github.com/atelier-anchor/smiley-sans/releases

# 2. 切片（输出 result.css + 若干 *.woff2 到本目录）
npx cn-font-split@7.4.3 run \
  -i SmileySans-Oblique.ttf \
  -o public/fonts/smiley-sans \
  --css.fontFamily "Smiley Sans" \
  --css.fontWeight "400 900" \
  --css.fontStyle "normal" \
  --css.fontDisplay "swap" \
  --css.fileName "result" \
  --testHtml false -r false

# 3. 把生成的无扩展名 result 重命名为 result.css，删除 index.proto
```

在 `src/layouts/Layout.astro` 中通过 `<link rel="stylesheet" href="/fonts/smiley-sans/result.css">` 引入。
