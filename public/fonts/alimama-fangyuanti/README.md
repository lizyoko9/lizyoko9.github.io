# 阿里妈妈方圆体 Alimama FangYuanTi（子集化中文正文字体）

用于站点中文正文。已用 `cn-font-split` 按 unicode-range 切成多个 woff2 分片，浏览器只下载每页用到的字形。

- 字体：阿里妈妈方圆体 Alimama FangYuanTi VF（免费商用，允许 web 嵌入）
- 原始为变量字体，两个轴：`wght`（字重 200–700）、`BEVL`（圆角程度 1=方 … 100=圆）
- 本目录已固定 `BEVL=100`（全圆，与参考站观感一致），并实例化出两个真实字重：
  - `regular/` —— wght 400，`@font-face` 声明 `font-weight: 400`
  - `bold/` —— wght 700，`@font-face` 声明 `font-weight: 700`
- CSS 中 `font-family` 名：`Alimama FangYuanTi`（两个字重同名，靠 weight 区分，正文加粗为真加粗）

## 如何重新生成

```bash
# 1. 取得方圆体变量字体（ttf/woff2 皆可），用 fontTools 固定 BEVL 并实例化字重：
python - <<'PY'
from fontTools.ttLib import TTFont
from fontTools.varLib import instancer
for wght, tag in [(400, "regular"), (700, "bold")]:
    f = TTFont("AlimamaFangYuanTiVF.ttf")
    inst = instancer.instantiateVariableFont(f, {"BEVL": 100, "wght": wght}, inplace=False)
    inst.save(f"fy-{tag}.ttf")
PY

# 2. 分别切片到子目录：
npx cn-font-split@7.4.3 run -i fy-regular.ttf -o public/fonts/alimama-fangyuanti/regular \
  --css.fontFamily "Alimama FangYuanTi" --css.fontWeight "400" --css.fontStyle "normal" \
  --css.fontDisplay "swap" --css.fileName "result" --testHtml false -r false
npx cn-font-split@7.4.3 run -i fy-bold.ttf    -o public/fonts/alimama-fangyuanti/bold \
  --css.fontFamily "Alimama FangYuanTi" --css.fontWeight "700" --css.fontStyle "normal" \
  --css.fontDisplay "swap" --css.fileName "result" --testHtml false -r false

# 3. 各子目录里把无扩展名 result 重命名为 result.css，删除 index.proto
```

在 `src/layouts/Layout.astro` 中通过两个 `<link>` 引入 `regular/result.css` 与 `bold/result.css`。
在 `tailwind.config.mjs` 的 `sans` 栈中以 `Alimama FangYuanTi` 承担中文字形。
