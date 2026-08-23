# 156 周全栈独立 SaaS 开发者学习蓝图

面向零基础学习者的 156 周学习路线，以及配套的 TypeScript 从 0 到 1 教程。

## 阅读入口

- [156 周学习蓝图](./156-week-blueprint.md)
- [TypeScript 从 0 到 1 教程](./typescript-zero-to-one.md)
- [浏览器版学习蓝图](./dist/156-week-blueprint.html)

## 仓库结构

```text
.
├── 156-week-blueprint.md       # 学习蓝图的 Markdown 源文件
├── typescript-zero-to-one.md   # 独立的 TypeScript 详细教程与练习
├── scripts/
│   └── build-html.mjs          # 将蓝图转换为可直接打开的 HTML
├── dist/
│   └── 156-week-blueprint.html # 生成的浏览器版学习蓝图
├── package.json
└── package-lock.json
```

## 本地使用

要求：Node.js 20 或更高版本。

```bash
npm ci
npm run build
```

构建命令始终从 `156-week-blueprint.md` 生成 `dist/156-week-blueprint.html`。请编辑 Markdown 或 `scripts/build-html.mjs`，不要直接修改生成的 HTML。

`node_modules/` 和本地下载的 `*.tgz` 包不会提交到 Git；使用 `npm ci` 即可根据锁文件恢复依赖。
