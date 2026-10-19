# TypeScript 0→1：零编程基础完整学习教程

> **适用起点：** 从未学过 JavaScript、TypeScript 或其他编程语言；只要会使用电脑和浏览器即可
> **版本：** 2026-10 更新版（TypeScript 7、Node.js 24 LTS、新增第 4B 周与闭包/事件循环/Vitest 课程）
> **对应总蓝图：** 本教程第 1–8 周替代总蓝图第 5–7 周；第 9–12 周替代总蓝图第 11–14 周。两份文档如何交替执行，以总蓝图「第零部分：执行版总日程」为准
> **时间预算：** 13 周核心课程（12 周 + 新增第 4B 周）+ 1–2 周毕业项目，每周 10–15 小时；低于 8 小时时延长当前周，不跳课
> **最终产出：** 80+ 道练习、8 个渐进式小项目、浏览器天气应用、Node.js CLI 和一个综合毕业项目
> **教学语言：** 从第一行代码起直接写 TypeScript，同时把 JavaScript 的运行规则一起学会

这是一条真正从零开始、每天可以照着执行的路线。你不需要先去另一门课程“学完 JavaScript”。TypeScript 包含 JavaScript 的语法和运行行为，所以前 8 周会直接在 `.ts` 文件中学习变量、条件、循环、函数、数组、对象、DOM 和异步请求；后 4 周再系统整理类型系统、泛型、配置和工程实践。

每次学习都遵循同一个闭环：

1. 阅读一个很小的概念和示例，不连续看一小时视频。
2. 亲手输入示例，不复制粘贴，并先预测输出。
3. 运行程序，观察实际结果。
4. 故意修改一处制造错误，学习读运行错误或类型错误。
5. 完成同类但不相同的练习。
6. 合上教程，用自己的话解释今天学会了什么。

这份教程所说的“0→1 完整学会”有一个可验证的含义：你能不靠照抄，独立把一个小需求拆成数据、条件、函数和模块，在 `strict` 模式下完成浏览器应用与 Node.js 工具，并有能力继续学习 React。它不表示你已经掌握 TypeScript 编译器的所有高级特性；那些内容会在真实项目需要时继续学习。

## 导航

- [0. 完成标准与学习边界](#0-完成标准与学习边界)
- [1. 建立正确心智模型](#1-开始前建立正确心智模型)
- [2. 从零搭建开发环境](#2-从零搭建开发环境)
- [3. 第 1–8 周：编程与 Web 基础](#3-第一阶段编程与-web-零基础第-18-周)
- [4. 第 9 周：系统掌握基础类型](#4-第-9-周系统掌握基础类型函数和对象建模)
- [5. 第 10 周：联合类型、收窄与边界](#5-第-10-周联合类型收窄与可信边界)
- [6. 第 11 周：泛型与类型派生](#6-第-11-周泛型与类型派生)
- [7. 第 12 周：配置、模块与项目](#7-第-12-周配置模块dom-与项目实战)
- [8. 参考答案与评分点](#8-参考答案与评分点完成练习后再看)
- [9. 常见错误诊断地图](#9-常见错误诊断地图)
- [10. 必要补充与暂缓内容](#10-必要补充与暂缓内容)
- [11. 复习系统与资源](#11-复习系统与资源)

---

## 0. 完成标准与学习边界

完成本教程后，你应该能独立做到：

- 打开终端、进入项目目录、安装依赖并运行 TypeScript 文件。
- 从需求中识别输入、处理步骤和输出，而不是面对空文件无从下手。
- 使用变量、运算符、条件、循环、函数、数组和对象解决基础问题。
- 解释作用域、参数、返回值、可变数据和不可变更新。
- 使用调试输出、断点和最小复现定位基础错误。
- 解释 TypeScript、JavaScript、类型检查和运行时之间的关系。
- 依靠类型推断写日常代码，在真正需要时添加类型注解。
- 为函数、对象、数组、元组和回调写准确类型。
- 使用联合类型、类型收窄和可辨识联合表达业务规则。
- 在外部数据边界使用 `unknown`，不把类型断言误当成运行时校验。
- 使用泛型表达“输入类型与输出类型之间的关系”。
- 使用 `keyof`、索引访问类型和常用工具类型派生类型，避免复制粘贴。
- 看懂常见 TypeScript 错误，不使用 `any` 或随意的 `as` 压掉错误。
- 根据运行环境选择 `tsconfig.json`，理解 `strict` 和模块配置。
- 在 DOM、`fetch` 和 Node.js CLI 中实际使用 TypeScript。
- 阅读一个小需求，先写样例数据和伪代码，再独立实现、验证与复盘。

### 12 周课程地图

| 周次 | 从不会到会什么 | 交付物 |
|---|---|---|
| 第 1 周 | 终端、文件、第一行代码、值与变量 | 个人名片程序 |
| 第 2 周 | 运算符、输入处理、条件判断 | 价格与折扣计算器 |
| 第 3 周 | 循环、函数、参数与返回值 | 猜数字逻辑 + 函数练习集 |
| 第 4 周 | 字符串、数组、对象 | 学生成绩统计器 |
| 第 4B 周（新增） | 解构、展开/剩余、Map/Set、Intl 格式化 | 订单报表生成器 |
| 第 5 周 | 数组方法、数据转换、回调、**闭包（Day 1B）** | 商品筛选与购物车统计 |
| 第 6 周 | 作用域、拆分问题、错误与调试、**Vitest 测试（Day 5）** | 命令行待办核心逻辑 |
| 第 7 周 | 最小 HTML、DOM、事件和表单 | 浏览器待办应用 |
| 第 8 周 | Promise、`async/await`、**事件循环（Day 2B）**、`fetch`、模块 | API 查询小应用 |
| 第 9 周 | 系统整理基础类型、函数与对象契约 | 20 道严格类型练习 |
| 第 10 周 | 联合、收窄、`unknown`、状态建模 | 安全 JSON 解析器 |
| 第 11 周 | 泛型、`keyof`、工具类型 | 泛型工具函数集 |
| 第 12 周 | `tsconfig`、模块、DOM/Node 项目实践 | 天气应用 + Markdown CLI |

> 加粗内容是 2026-10 新增的课时，原因见对应章节开头的说明。

如果某周验收未通过，就把它拉长到 10 天或 14 天。周次是课程顺序，不是截止日期。第 12 周之后再用 1–2 周完成毕业项目，不学习新语法，只整合已有能力。

本阶段暂时不追求：

- 复杂类型体操、递归条件类型、追求“一行类型解决一切”。
- 编写 TypeScript 编译器插件或深入研究编译器内部。
- 背诵所有 `tsconfig` 选项。
- 为每一行代码手动写类型；能正确推断时应让编译器推断。
- 用类型替代运行时校验。类型在编译后会被擦除，用户输入和网络响应仍需校验。
- 一开始就写 React、Next.js 或使用 AI 生成完整项目；先建立能看懂和修改每一行代码的能力。

### 升级到 React 前的硬门槛

以下 15 项至少完成 12 项；第 1、2、3、6、7、8 项以及最后三项新增内容必须完成：

- [ ] 所有练习能通过 `pnpm typecheck`，且 `strict: true`。
- [ ] 正式代码中没有显式 `any`、`as any` 和无解释的非空断言 `!`。
- [ ] 能不看资料使用变量、条件、循环、函数、数组和对象完成 30–50 行程序。
- [ ] 能逐行解释自己毕业项目中的数据如何流动。
- [ ] 遇到错误会先阅读信息、缩小问题、记录假设，而不是立即让 AI 重写。
- [ ] 能不看笔记写出带参数和返回值类型的函数。
- [ ] 能用可辨识联合表达 `idle/loading/success/error` 四态。
- [ ] 能接收 `unknown` 并通过收窄安全使用。
- [ ] 能解释泛型 `T` 表达的类型关系，而不只是背语法。
- [ ] 能独立处理 `querySelector` 的 `null`。
- [ ] 能在函数参数中解构并写对类型注解，能正确写一层嵌套的不可变更新（第 4B 周）。
- [ ] 能用自己的话解释闭包，并预测“捕获旧值”的输出（第 5 周 Day 1B）。
- [ ] 所有练习的测试用 Vitest 运行，`pnpm test:run` 全绿（第 6 周起）。
- [ ] 能说明 Node 项目为什么使用 `NodeNext`，而打包器项目使用 `Bundler`。
- [ ] 能从空目录创建、运行、构建一个小型 TypeScript 项目。
- [ ] 综合毕业项目达到 80/100，且能逐行讲解一条完整用户操作的数据流。

---

## 1. 开始前：建立正确心智模型

### 1.0 编程到底是在做什么？

程序是一组交给计算机执行的精确指令。绝大多数小程序都可以拆成三部分：

```text
输入 → 处理 → 输出
```

例如“计算订单总价”：

```text
输入：单价 20、数量 3
处理：20 × 3
输出：60
```

代码只是把这三步写成计算机能严格执行的形式：

```ts
const price = 20;
const quantity = 3;
const total = price * quantity;

console.log(total);
```

现在不需要看懂每个符号，只观察对应关系：前两行保存输入，第三行处理，最后一行输出。学习编程不是背下所有语法，而是练习把模糊需求拆成这样的精确步骤。

计算机不会猜你的意思。少一个引号、把变量名拼错、在错误顺序执行步骤，都可能产生错误。这并不说明你“不适合编程”；错误信息就是计算机告诉你哪条指令无法理解或哪个假设不成立。本教程会把读错误当成核心课程，而不是把报错当成失败。

### 1.1 为什么可以不会 JavaScript，直接学习 TypeScript？

TypeScript 由两层组成：

1. **JavaScript 的运行语言。** 变量、条件、循环、函数、数组、对象、DOM、异步请求都来自 JavaScript。
2. **TypeScript 的静态类型层。** 它在运行前检查数据使用方式是否自洽，然后类型信息被移除。

因此你不会跳过 JavaScript。本教程会直接在 TypeScript 文件中学习 JavaScript 的全部必需基础，同时让类型检查从第一天保护你。以后阅读 `.js` 文件时，你会发现主要运行语法已经学过，只是它没有类型注解和编译期检查。

### 1.2 TypeScript 到底做了什么？

TypeScript 是带静态类型检查能力的 JavaScript。开发流程可以简化为：

```text
你写的 .ts 源码
      │
      ├── TypeScript 检查类型 ──→ 有错误：开发阶段反馈
      │
      └── 移除类型语法并输出 JavaScript
                         │
                         └── Node.js / 浏览器真正运行 .js
```

看这个例子：

```ts
function add(a: number, b: number): number {
  return a + b;
}

console.log(add(2, 3));
```

编译后的 JavaScript 大致是：

```js
function add(a, b) {
  return a + b;
}

console.log(add(2, 3));
```

`: number` 在运行时不存在。因此：

- TypeScript 能阻止你的代码在开发时调用 `add("2", 3)`。
- TypeScript 不能阻止真实用户通过网络发来 `{ "a": "2" }`。
- 从表单、URL、文件、数据库或 API 进入程序的数据，都要在运行时验证。

### 1.3 三个必须分开的概念

| 概念 | 问的问题 | 例子 |
|---|---|---|
| 类型检查 | 代码在类型规则上是否自洽？ | `add("2", 3)` 会被拒绝 |
| 编译/转译 | `.ts` 如何变成运行时可执行的 `.js`？ | `tsc` 移除类型语法 |
| 运行 | 代码执行后是否得到正确结果？ | 除数为 0、网络失败仍是运行时问题 |

“没有类型错误”不等于“没有 bug”。下面这段代码类型完全正确，但业务逻辑错误：

```ts
function subtract(a: number, b: number): number {
  return a + b;
}
```

所以每个项目都需要两种验证：

```bash
pnpm typecheck  # 类型是否自洽
pnpm build      # 能否生成 JavaScript
pnpm start      # 运行结果是否正确
```

### 1.4 先认识 12 个高频词

| 词语 | 零基础解释 | 例子 |
|---|---|---|
| 源代码 | 你写给人和工具阅读的文本 | `src/index.ts` |
| 语法 | 代码必须遵守的书写规则 | 字符串需要引号 |
| 值 | 程序实际处理的数据 | `42`、`"Ada"`、`true` |
| 变量 | 给一个值起的名字 | `const age = 18` |
| 表达式 | 计算后会得到一个值的代码 | `price * quantity` |
| 语句 | 要计算机执行的一条指令 | `console.log(total)` |
| 函数 | 可命名、可重复执行的一组步骤 | `calculateTotal()` |
| 参数 | 调用函数时传入的数据 | `calculateTotal(20, 3)` |
| 返回值 | 函数处理完成后交回的结果 | `return 60` |
| 类型 | 一组允许的值及其可用操作 | `number`、`string` |
| 编译 | 把 `.ts` 检查并转成 `.js` | `tsc` |
| 运行时 | 程序真正执行的阶段和环境 | Node.js、浏览器 |

第一次看到陌生词时回到这张表，不要靠猜。

### 1.5 TypeScript 的核心不只是“给变量贴标签”

初学者容易把 TypeScript 理解成“给每个变量写 `: string`”。更准确的理解是：

- **类型是一组可能值。** `boolean` 是 `{ true, false }`；`"draft" | "published"` 只有两个可能值。
- **收窄是在减少可能值。** `typeof value === "string"` 把 `string | number` 缩小成 `string`。
- **建模是在排除非法状态。** 已成功的请求必须有 `data`，失败的请求必须有 `message`。
- **泛型是在表达关系。** 输入什么元素类型，输出就保持或转换成相关的类型。

整个 12 周都围绕这些基本关系展开。前 8 周先学会产生和处理值，后 4 周再把类型建模能力系统化。

### 1.6 常见符号速认

| 符号 | 中文称呼 | 最常见用途 |
|---|---|---|
| `()` | 圆括号 | 调用函数、包住参数、控制运算顺序 |
| `{}` | 花括号 | 代码块、对象、类型成员 |
| `[]` | 方括号 | 数组、按位置/键访问数据 |
| `""` / `''` | 引号 | 创建字符串 |
| `` ` ` `` | 反引号 | 创建可插入表达式的模板字符串 |
| `:` | 冒号 | 类型注解、对象属性和值之间的分隔 |
| `;` | 分号 | 一条语句结束 |
| `,` | 逗号 | 分隔参数、数组项、对象属性 |
| `.` | 点 | 访问对象属性或方法 |
| `=` | 赋值号 | 把右侧值放入左侧变量 |
| `===` | 严格相等 | 比较类型和值是否相等 |
| `=>` | 箭头 | 编写箭头函数 |
| `//` | 单行注释 | 写给人的说明 |

不要孤立背符号。每次在代码中遇到时，指出它正在承担表中的哪一种用途。

---

## 2. 从零搭建开发环境

这一节只做一次。不要跳过，也不要在不理解当前状态时连续粘贴一长串命令。每执行一条，就对照“应该看到什么”。

### 2.1 你要安装的三个东西

| 工具 | 它的作用 | 不是用来做什么 |
|---|---|---|
| Cursor | 编辑 `.ts` 文件、显示错误、打开终端 | 它不是 TypeScript 运行环境 |
| Node.js LTS | 在电脑上运行 JavaScript，以及提供 npm | 它不会自动检查 TypeScript 类型 |
| pnpm | 为项目安装 TypeScript 等工具和库 | 它不是编程语言 |

先打开 macOS Terminal 或 Cursor 的 Terminal，逐条执行：

```bash
node --version
npm --version
pnpm --version
```

命令前不要输入文档中有时用于表示终端提示符的 `$`。例如文档写 `$ node --version` 时，你只输入 `node --version`。

判断结果：

- 三条都显示版本号：进入 2.2。
- `node: command not found`，或版本低于 v22：按下面「2.1.1 用版本管理器安装 Node」操作。
- 版本是 v22：可以继续学习，但请在本周内按 2.1.1 升级到 v24。
- Node 和 npm 有版本，pnpm 没有：执行 `npm install --global pnpm`，完成后再执行 `pnpm --version`。
- 显示权限错误：不要反复加 `sudo`。保存完整错误信息，先确认 Node 的安装方式；必要时按总蓝图的开发环境章节重新配置。

不要追求文档截图中的完全相同版本号。看到有效版本号即可；项目会把 TypeScript 安装在自己目录中，以保证可复现。

#### 2.1.1 用版本管理器安装 Node（2026-10 更新）

**为什么：** Node 20 已于 2026 年 4 月停止维护；当前推荐 **Node 24 LTS**（维护到 2028 年 4 月）。Node 26 计划在 2026 年 10 月下旬进入 LTS，之后两者都可以用。以后不同项目可能需要不同版本，用版本管理器 `fnm` 可以一条命令切换，不用反复去官网下载安装包。

1. 安装 Homebrew（如果 `brew --version` 已有版本号，跳过）：打开 [brew.sh](https://brew.sh/)，复制首页那一行安装命令到终端执行，按提示输入电脑密码。结束时终端会提示你再执行两行 `echo ... >> ~/.zprofile` 和 `eval ...` 命令，照做。
2. 安装 fnm：

   ```bash
   brew install fnm
   ```

3. 让 fnm 在每次打开终端时生效：

   ```bash
   echo 'eval "$(fnm env --use-on-cd --shell zsh)"' >> ~/.zshrc
   source ~/.zshrc
   ```

4. 安装并设为默认：

   ```bash
   fnm install 24
   fnm default 24
   node --version   # 应显示 v24.x.x
   ```

5. 如果你之前用官网安装包装过 Node，执行 `which node`：路径里包含 `fnm` 说明已经生效；如果是 `/usr/local/bin/node`，关闭并重开终端再看一次。
6. 重新安装 pnpm（换了 Node 版本后全局包需要重装）：`npm install --global pnpm`，然后 `pnpm --version`。
7. 在每个项目根目录放一个 `.node-version` 文件，内容只有一行 `24`。`fnm` 进入目录时会自动切换到这个版本，别人也能知道项目需要哪个版本。

### 2.2 终端生存课：只学今天需要的 8 条命令

终端是用文字控制电脑的窗口。它总有一个“当前所在目录”。命令默认作用于这个目录，所以先确认位置再创建文件。

| 命令 | 含义 | 示例 |
|---|---|---|
| `pwd` | 显示当前目录完整路径 | `pwd` |
| `ls` | 列出当前目录内容 | `ls` |
| `cd 路径` | 进入目录 | `cd "Programming Learn"` |
| `cd ..` | 返回上一级目录 | `cd ..` |
| `mkdir 名称` | 创建目录 | `mkdir practice` |
| `touch 文件` | 创建空文件 | `touch hello.ts` |
| `clear` | 清理终端显示，不删除文件 | `clear` |
| `Ctrl + C` | 停止正在运行的命令 | 不需要输入文字 |

路径包含空格时必须加引号：

```bash
cd "/Users/karlan/Programming Learn"
```

完成下面的小测试，确保自己真的理解当前位置：

```bash
pwd
ls
mkdir terminal-practice
cd terminal-practice
pwd
touch hello.txt
ls
cd ..
pwd
```

你应该看到：进入后 `pwd` 的路径以 `terminal-practice` 结尾，`ls` 能看到 `hello.txt`，返回上级后路径不再以它结尾。这个测试目录可以保留，不影响后续课程。

### 2.3 文件、目录和扩展名

- **目录/文件夹**用来组织文件。
- `index.ts` 是 TypeScript 源文件；`.ts` 是扩展名。
- `package.json` 描述项目名称、命令和依赖。
- `node_modules/` 保存安装的第三方工具，体积很大，不手工修改。
- `pnpm-lock.yaml` 锁定依赖的准确版本，不随意删除。
- `dist/` 保存编译后的 JavaScript，可以重新生成。

在 Cursor 中选择 **File → Open Folder**，打开整个 `ts-zero-to-one` 目录，而不是只打开一个文件。左侧文件树、编辑器和终端必须指向同一个项目，否则最常见的结果是“明明安装了依赖，终端却找不到”。

### 2.4 创建课程项目

先进入本仓库所在目录，再逐条执行：

```bash
cd "/Users/karlan/Programming Learn"
mkdir ts-zero-to-one
cd ts-zero-to-one
pnpm init
pnpm add -D typescript tsx @types/node
mkdir src
touch src/index.ts
touch .gitignore
```

每条命令发生了什么：

1. `mkdir ts-zero-to-one` 创建课程项目目录。
2. `cd ts-zero-to-one` 让终端进入它。
3. `pnpm init` 创建 `package.json`。
4. `pnpm add -D ...` 下载三个仅在开发时使用的工具，并记录到 `devDependencies`。
5. `mkdir src` 创建源代码目录。
6. 两条 `touch` 创建入口文件和 Git 忽略文件。

工具职责：

- `typescript`：提供类型检查器和 `tsc` 编译器。
- `tsx`：开发时直接运行 `.ts`，但它不是类型检查器。
- `@types/node`：提供 `process`、`node:fs` 等 Node.js API 的类型。

在 `.gitignore` 写入：

```gitignore
node_modules/
dist/
```

验证项目使用的编译器版本：

```bash
pnpm exec tsc --version
```

在 `package.json` 顶层加入 `"type": "module"`，并把 `scripts` 改为：

```json
{
  "type": "module",
  "scripts": {
    "dev": "tsx src/index.ts",
    "typecheck": "tsc --noEmit",
    "build": "tsc",
    "start": "node dist/index.js"
  }
}
```

`package.json` 中原本的 `name`、`version`、`packageManager` 等字段要保留。JSON 的关键规则：键和字符串使用双引号；每项之间有逗号；最后一项后面不能多逗号。如果文件出现红线，先检查上一行是否漏了逗号。

创建 `tsconfig.json`：

```json
{
  "compilerOptions": {
    "target": "ES2022",
    "module": "NodeNext",
    "moduleResolution": "NodeNext",
    "rootDir": "src",
    "outDir": "dist",
    "strict": true,
    "noUncheckedIndexedAccess": true,
    "exactOptionalPropertyTypes": true,
    "verbatimModuleSyntax": true,
    "esModuleInterop": true,
    "skipLibCheck": true,
    "types": ["node"]
  },
  "include": ["src/**/*.ts"],
  "exclude": ["node_modules", "dist"]
}
```

先不背配置。第 12 周会逐项解释。现在只记住：

- `strict` 是本课程底线。
- `noUncheckedIndexedAccess` 让 `items[0]` 保留“不一定存在”的事实。
- `exactOptionalPropertyTypes` 区分“属性不存在”和“属性存在但值为 `undefined`”。
- `NodeNext` 让 TypeScript 按现代 Node.js 的真实模块规则检查代码。
- `"types": ["node"]` 必须写：从 TypeScript 6 开始，`types` 默认是空数组，不再自动加载 `@types/node`。不写的话，`process`、`node:fs` 会报“找不到名称”。

> **关于 TypeScript 7（2026 年夏天发布）：** 现在执行 `pnpm add -D typescript` 安装的是 7.x，`tsc` 由 Go 重写，速度快很多，用法完全相同。`pnpm exec tsc --version` 显示 `Version 7.x` 即正常。需要知道的三点：① `strict` 现在默认开启（我们仍然显式写上，便于阅读）；② TypeScript 6 中标记为废弃的选项（如 `baseUrl`、`moduleResolution: "node"`、`target: "es5"`）在 7 中会直接报错——以后在网上复制配置时如果看到它们，删掉或换成本教程的写法；③ 少数依赖 TypeScript 编程接口的工具（例如部分 ESLint 插件）暂时需要 TypeScript 6，遇到时总蓝图会单独说明，本教程不受影响。

在 `src/index.ts` 输入：

```ts
const course = "TypeScript 0→1";
console.log(course);
```

依次验证：

```bash
pnpm typecheck
pnpm dev
pnpm build
pnpm start
```

预期结果：

- `pnpm typecheck` 没有输出错误并返回终端提示符，表示类型检查通过。
- `pnpm dev` 显示 `TypeScript 0→1`。
- `pnpm build` 后，左侧文件树出现 `dist/index.js`。
- `pnpm start` 运行编译后的文件，也显示 `TypeScript 0→1`。

如果 `pnpm dev` 一直不返回终端提示符，按 `Ctrl + C` 停止。以后运行 Web 开发服务器时它本来就会持续运行，但此处的简单脚本应该自动结束。

如果你已经完成总蓝图的 Git 课程，可以提交第一个 commit；如果还没学 Git，先跳过这三条命令，不影响 TypeScript 学习：

```bash
git init
git add .
git commit -m "chore: initialize typescript learning project"
```

### 2.5 每日文件组织

建议按周保存，不要把所有答案堆进一个文件：

```text
src/
  week-01/
    day-01.ts
    day-02.ts
    exercises.ts
  week-02/
  ...
  week-12/
  index.ts
notes/
  error-journal.md
```

每个没有 `import` / `export` 的练习文件末尾加：

```ts
export {};
```

这会让文件拥有独立模块作用域，避免不同练习文件里的同名变量互相冲突。

### 2.6 错误日志模板

在 `notes/error-journal.md` 中，每天至少记 1 条：

```md
## 日期 / 题号

- 我原本以为：
- TypeScript 实际提示：
- 期望类型：
- 实际类型：
- 根因：
- 正确修复：
- 我差点使用但不应该使用的逃避方式：
```

“逃避方式”通常是 `any`、`as`、`!` 或关闭严格选项。记录它能训练你正面解决类型问题。

---

## 3. 第一阶段：编程与 Web 零基础（第 1–8 周）

这一阶段不要求你理解“类型系统”这个抽象主题。先学会让程序保存值、做判断、重复执行、组织步骤和处理一组数据；TypeScript 会在旁边及时指出明显错误。每个示例都要亲手输入。

### 第 1 周：第一行代码、值与变量

#### 本周目标

从“一个代码符号都不认识”到能写一个 30 行左右的个人名片程序。你会理解程序按顺序执行、如何输出、什么是值、变量和简单计算。

#### Day 1：运行第一行代码

创建 `src/week-01/day-01.ts`：

```ts
console.log("Hello, TypeScript!");
```

运行指定文件：

```bash
pnpm exec tsx src/week-01/day-01.ts
```

逐个符号理解：

- `console` 是 Node.js 提供的控制台对象。
- `.` 表示访问它拥有的功能。
- `log` 是“打印一条信息”的功能名。
- `()` 包住要交给 `log` 的数据。
- `"Hello, TypeScript!"` 是字符串，也就是文本值。
- `;` 表示一条语句结束。很多时候可省略，但本课程先统一保留。

程序默认从文件第一行向下执行：

```ts
console.log("第一步");
console.log("第二步");
console.log("第三步");
```

预测输出顺序，再运行验证。然后交换第一行和第三行，观察输出也随之变化。

注释是给人看的说明，不会执行：

```ts
// 这是单行注释
console.log("这一行会执行");

/*
  这是多行注释。
  暂时不要用注释长期保留废弃代码。
*/
```

Day 1 练习：

1. 分三行输出你的姓名、所在城市和学习目标。
2. 输出一行由数字组成的信息，如 `2026`。
3. 写一行注释解释程序用途。
4. 故意删掉字符串结尾引号，运行并观察错误位置；然后恢复。
5. 故意把 `console` 写成 `consol`，比较类型检查提示与运行错误。

完成标志：你能在不看教程时创建 `.ts` 文件并运行它。

#### Day 2：值与最基础的类型

程序处理的是“值”。先认识三类最常用值：

```ts
console.log("文字"); // string：字符串
console.log(42);     // number：数字
console.log(true);   // boolean：布尔值，真
console.log(false);  // boolean：布尔值，假
```

引号会改变值的类型：

```ts
console.log(20 + 5);     // 25，两个数字相加
console.log("20" + "5"); // "205"，两段文本拼接
```

`typeof` 可以在运行时查看基础值的类型名称：

```ts
console.log(typeof "hello"); // string
console.log(typeof 100);     // number
console.log(typeof true);    // boolean
```

字符串可以用双引号、单引号或反引号：

```ts
console.log("双引号");
console.log('单引号');
console.log(`反引号`);
```

项目中保持一种风格即可。反引号后面会用于模板字符串。

Day 2 练习：

1. 不运行，预测 `typeof "100"`、`typeof 100`、`typeof false`。
2. 分别输出数字 `8 + 2` 和字符串 `"8" + "2"` 的结果。
3. 输出一句包含英文单引号的文本，如 `I'm learning`，选择不会冲突的引号。
4. 判断手机号、价格、是否登录分别更适合用 string、number 还是 boolean，并写成值。
5. 解释为什么邮政编码即使全是数字，也常适合用 string。

#### Day 3：用变量给值起名字

直接写很多值时，不知道每个值代表什么：

```ts
console.log(99 * 2);
```

变量让数据有名字：

```ts
const price = 99;
const quantity = 2;
const total = price * quantity;

console.log(total);
```

`const` 表示变量名不会重新指向另一个值。默认优先使用它：

```ts
const courseName = "TypeScript 0→1";
console.log(courseName);
```

需要重新赋值时使用 `let`：

```ts
let score = 0;
score = 10;
score = score + 5;
console.log(score); // 15
```

注意三个不同概念：

```ts
const age = 18; // 声明并初始化变量
let count = 0;
count = 1;      // 赋值：把新值放入已有变量
count === 1;    // 比较：询问两边是否严格相等
```

变量命名规则：

- 可以使用字母、数字、`_`、`$`，但不能以数字开头。
- 区分大小写，`userName` 和 `username` 是两个名字。
- 常用 camelCase：第一个单词小写，后续单词首字母大写。
- 名字表达含义：`productPrice` 好于 `p`，`isLoggedIn` 好于 `flag`。
- 不使用 `const`、`let`、`if` 等保留字作为名字。

Day 3 练习：

1. 创建 `name`、`age`、`isStudent` 三个变量并输出。
2. 用 `const` 保存长方形宽高并计算面积。
3. 用 `let` 模拟游戏分数增加三次。
4. 找出非法或糟糕的名字：`2name`、`user-name`、`x`、`userAge`、`const`。
5. 故意对 `const` 重新赋值，阅读错误后改成正确设计。

#### Day 4：字符串不是“只能显示的文字”

字符串可以拼接：

```ts
const firstName = "Karlan";
const greeting = "Hello, " + firstName + "!";
console.log(greeting);
```

模板字符串通常更易读：

```ts
const age = 18;
const introduction = `我叫 ${firstName}，今年 ${age} 岁。`;
console.log(introduction);
```

`${...}` 中可以放表达式：

```ts
const price = 20;
const quantity = 3;
console.log(`总价：${price * quantity} 元`);
```

常用字符串能力：

```ts
const text = "  TypeScript  ";

console.log(text.length);          // 包含空格的字符数量
console.log(text.trim());          // 去掉两端空白
console.log(text.toUpperCase());   // 转大写
console.log(text.toLowerCase());   // 转小写
console.log(text.includes("Script")); // 是否包含某段文本
```

方法调用不会修改原字符串：

```ts
const raw = "  hello  ";
const clean = raw.trim();
console.log(raw);   // 原值仍包含空格
console.log(clean); // 新字符串
```

Day 4 练习：

1. 用模板字符串输出商品、单价、数量和总价。
2. 把 `"  Learn TypeScript  "` 清理空格并转成大写。
3. 计算用户名长度。
4. 判断邮箱文本是否包含 `@`。
5. 解释 `name.length` 为什么没有括号，而 `name.toUpperCase()` 有括号：前者读取属性，后者调用功能。

#### Day 5：数字与运算顺序

```ts
const add = 10 + 3;
const subtract = 10 - 3;
const multiply = 10 * 3;
const divide = 10 / 3;
const remainder = 10 % 3;
const power = 2 ** 3;
```

`%` 得到余数，可判断奇偶：

```ts
const number = 7;
const isEven = number % 2 === 0;
console.log(isEven); // false
```

运算顺序与数学相似，先乘除后加减。对重要业务公式使用括号表达意图：

```ts
const price = 100;
const discountRate = 0.2;
const discountedPrice = price * (1 - discountRate);
```

小数计算可能出现精度现象：

```ts
console.log(0.1 + 0.2); // 可能不是精确的 0.3
```

金额项目常以“分”为单位保存整数，显示时再除以 100。本周只需知道问题存在。

常用 `Math`：

```ts
console.log(Math.round(3.6)); // 4，四舍五入
console.log(Math.floor(3.9)); // 3，向下取整
console.log(Math.ceil(3.1));  // 4，向上取整
console.log(Math.max(3, 8));  // 8
console.log(Math.min(3, 8));  // 3
```

Day 5 练习：

1. 计算半径为 5 的圆面积，圆周率使用 `Math.PI`。
2. 把 367 秒转换为“6 分 7 秒”，使用除法、`Math.floor` 和余数。
3. 计算含 13% 税率的价格。
4. 计算三门成绩平均分并四舍五入。
5. 判断 28 是否为偶数、是否能被 7 整除。

#### Day 6：小项目——个人名片程序

新建 `src/week-01/profile-card.ts`。成品至少包含：

- 姓名、城市、职业目标、已学习天数、每天学习小时数。
- 用模板字符串组成 4 行介绍。
- 计算一周预计学习小时数。
- 把职业目标转成大写显示一次。
- 输出文本中包含至少一个 boolean，例如“是否完成本周任务”。

先写伪代码，不写 TypeScript：

```text
保存个人信息
计算每周学习小时数
组合介绍文本
输出介绍和计算结果
```

再逐行实现。运行后人工核对每个结果，不以“没有红线”作为唯一完成标准。

#### Day 7：复习与周测

闭卷 30 分钟：

1. 什么是值、变量、表达式？各举一例。
2. `const` 和 `let` 的差别是什么？
3. 数字 `10` 与字符串 `"10"` 有什么不同？
4. `=` 和 `===` 分别做什么？
5. 写一个模板字符串，包含两个变量和一个计算表达式。
6. 用变量计算长方形周长和面积。
7. 修复一段含拼错变量名、漏引号和错误类型赋值的代码。

第 1 周验收：

- [ ] 能独立创建并运行 `.ts` 文件。
- [ ] 能预测顺序执行的输出。
- [ ] 会使用 string、number、boolean 值。
- [ ] 能正确选择 `const` 和 `let`。
- [ ] 个人名片项目不少于 20 行，且能解释每一行。
- [ ] 错误日志至少 3 条。

#### 本周练习资源（第 1 周）

| 资源 | 做什么 |
|---|---|
| [MDN：语法和数据类型](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Guide/Grammar_and_types) | 只读“声明”和“数据结构和类型”两节，遇到不懂再回来查 |
| [现代 JavaScript 教程：字符串](https://zh.javascript.info/string) | 做文末任务“首字母大写”“检查 spam”“截断文本” |
| [现代 JavaScript 教程：数字类型](https://zh.javascript.info/number) | 只做“来自访问者的数字的总和”“为什么 6.35.toFixed(1) == 6.3？”两题 |

---

### 第 2 周：比较、条件与业务规则

#### 本周目标

程序不再只从上到下做同一件事，而是根据数据选择不同路径。最终完成一个能处理会员、数量和优惠券规则的价格计算器。

#### Day 1：比较产生 boolean

比较表达式的结果只有 `true` 或 `false`：

```ts
const age = 20;

console.log(age > 18);   // true
console.log(age >= 20);  // true
console.log(age < 10);   // false
console.log(age === 20); // true
console.log(age !== 20); // false
```

严格相等 `===` 同时比较类型和值：

```ts
console.log(10 === 10);   // true
// console.log("10" === 10); // 取消注释后 TypeScript 会提醒这是无意义比较
```

本教程不使用宽松相等 `==`，因为它会先做隐式类型转换，增加初学者判断成本。

字符串也能比较是否相等：

```ts
const role = "admin";
console.log(role === "admin");
```

Day 1 练习：

1. 判断年龄是否至少 18。
2. 判断库存是否等于 0。
3. 判断密码长度是否至少 8。
4. 判断用户名是否不是空字符串。
5. 对每个表达式先写预测，再运行验证：`5 > 3`、`5 >= 5`、`"a" === "A"`、`10 !== 8`。

#### Day 2：`if`、`else if`、`else`

```ts
const score = 82;

if (score >= 90) {
  console.log("优秀");
} else if (score >= 60) {
  console.log("及格");
} else {
  console.log("需要重学");
}
```

执行规则：从上到下检查条件，一旦某个条件为 `true`，执行它的代码块并跳过后续分支。所以上例必须先判断更高分数。

错误顺序：

```ts
if (score >= 60) {
  console.log("及格");
} else if (score >= 90) {
  console.log("优秀"); // 90 分永远先进入第一个分支
}
```

花括号 `{}` 包围一个代码块。即使块中只有一行，也保留花括号，减少以后加代码时的错误。

Day 2 练习：

1. 根据温度输出“寒冷 / 舒适 / 炎热”。
2. 根据库存输出“售罄 / 库存紧张 / 库存充足”。
3. 判断一个数字是正数、负数还是 0。
4. 根据小时 0–23 输出“上午 / 下午 / 晚上”。
5. 修复一个分支顺序导致 95 分只显示“及格”的程序。

#### Day 3：组合条件 `&&`、`||`、`!`

```ts
const age = 22;
const hasTicket = true;

const canEnter = age >= 18 && hasTicket;
```

- `A && B`：A 和 B 都为真，结果才为真。
- `A || B`：至少一个为真，结果就为真。
- `!A`：把真变假、假变真。

```ts
const isWeekend = false;
const isHoliday = true;
const canRest = isWeekend || isHoliday;
const isWorkday = !canRest;
```

业务条件复杂时，先给每个子条件命名：

```ts
const hasEnoughBalance = 200 >= 150;
const accountActive = true;
const canPay = hasEnoughBalance && accountActive;
```

它比把所有数字和判断塞进一行更容易检查。

Day 3 练习：

1. 年龄 18–65 之间且账号有效时允许申请。
2. 是管理员或文章作者时允许编辑。
3. 邮箱非空且包含 `@` 时认为格式“初步有效”。
4. 不在维护中并且服务在线时允许访问。
5. 为三层以上的条件提取有意义的 boolean 变量。

#### Day 4：真值、假值与 `??`

JavaScript 在需要 boolean 的位置会把其他值转换成真或假。常见假值：

```text
false、0、""、null、undefined、NaN
```

本周先避免依赖隐式真值，写明确判断：

```ts
const userName = "";

if (userName !== "") {
  console.log(`欢迎 ${userName}`);
} else {
  console.log("请输入用户名");
}
```

空值合并 `??` 只在值为 `null` 或 `undefined` 时使用默认值：

```ts
const savedCount: number | undefined = undefined;
const count = savedCount ?? 0;
```

不要用 `||` 给所有数值默认值，否则合法的 0 也会被替换。第 9–10 周会系统学习 `null`、`undefined` 和收窄。

Day 4 练习：

1. 比较 `0 || 10` 与 `0 ?? 10` 的输出。
2. 比较 `"" || "默认"` 与 `"" ?? "默认"`。
3. 给可能缺失的昵称设置“匿名用户”。
4. 判断购物车数组长度是否明确等于 0，而不是只写真值判断。
5. 解释为什么“0 个未读消息”不是“没有提供未读消息数量”。

#### Day 5：把文本转换成数字并验证

用户输入和命令行参数通常先是字符串：

```ts
const rawPrice = "19.9";
const price = Number(rawPrice);
console.log(price + 1); // 20.9
```

无法转换时会得到特殊数字 `NaN`：

```ts
const value = Number("hello");
console.log(Number.isNaN(value)); // true
```

不要用 `value === NaN` 判断，它永远不是正确方式。更完整的验证：

```ts
const rawQuantity = "3";
const quantity = Number(rawQuantity);

if (!Number.isInteger(quantity) || quantity <= 0) {
  console.log("数量必须是正整数");
} else {
  console.log(`购买数量：${quantity}`);
}
```

从命令行读取一个参数：

```ts
const rawAge = process.argv[2];

if (rawAge === undefined) {
  console.log("请提供年龄，例如：pnpm exec tsx file.ts 18");
} else {
  const age = Number(rawAge);
  console.log(age);
}
```

这里第一次遇到 `undefined`：表示这个位置没有值。先用 `=== undefined` 检查，再使用它。

Day 5 练习：

1. 从字符串 `"42"` 转成数字并加 8。
2. 验证 `"abc"` 不能作为价格。
3. 验证数量必须是大于 0 的整数。
4. 从 `process.argv[2]` 读取温度并输出分类。
5. 分别测试缺参数、合法数字、负数和非数字文本。

#### Day 6：小项目——价格与折扣计算器

创建 `src/week-02/price-calculator.ts`。先使用代码中的固定输入，完成后再改为命令行参数。

业务规则：

```text
输入：单价、数量、是否会员、优惠券代码
1. 单价必须大于 0
2. 数量必须是正整数
3. 小计 = 单价 × 数量
4. 数量至少 5 件，打 9 折
5. 会员再打 95 折
6. 优惠券 SAVE20 减 20 元，但总价最低为 0
7. 输出小计、每项优惠和最终总价
```

不要一开始写一条超长公式。用变量保存每一步：

```ts
let total = price * quantity;

if (quantity >= 5) {
  total = total * 0.9;
}
```

测试表至少包含：

| 单价 | 数量 | 会员 | 优惠券 | 要验证的规则 |
|---:|---:|---|---|---|
| 100 | 1 | 否 | 无 | 无优惠 |
| 100 | 5 | 否 | 无 | 数量折扣 |
| 100 | 1 | 是 | 无 | 会员折扣 |
| 10 | 1 | 否 | SAVE20 | 不能成为负数 |
| -1 | 2 | 否 | 无 | 拒绝无效单价 |

#### Day 7：复盘与周测

闭卷完成：

1. 写出五个比较运算符并解释。
2. 解释为什么多个分支的顺序会影响结果。
3. 分别给 `&&`、`||`、`!` 举业务例子。
4. 解释 `Number("abc")` 和 `Number.isNaN`。
5. 从命令行接收一个分数，验证后输出等级。
6. 为价格计算器再设计两个边界测试。

第 2 周验收：

- [ ] 能独立写 `if / else if / else`。
- [ ] 能把复杂条件拆成有名字的 boolean。
- [ ] 能区分 `===` 与 `=`。
- [ ] 能把输入字符串转数字并拒绝 `NaN`。
- [ ] 价格计算器覆盖测试表全部场景。
- [ ] 能逐步说明每项优惠的应用顺序。

#### 本周练习资源（第 2 周）

| 资源 | 做什么 |
|---|---|
| [现代 JavaScript 教程：条件分支 if 和 '?'](https://zh.javascript.info/ifelse) | 做文末全部任务，答案写成 `.ts` 函数 |
| [现代 JavaScript 教程：逻辑运算符](https://zh.javascript.info/logical-operators) | 做文末全部任务（重点：检查值是否位于范围区间内） |
| [现代 JavaScript 教程：空值合并运算符 ??](https://zh.javascript.info/nullish-coalescing-operator) | 读完，对照本周 Day 4 写出 `??` 与 `||` 的 3 个差异例子 |

---

### 第 3 周：循环、函数与作用域

#### 本周目标

学会让程序重复执行，并把一段步骤封装成可以重复调用的函数。最终完成一个“猜数字过程模拟器”和一组独立函数。

#### Day 1：为什么需要循环？

重复输出五次当然可以写五行，但无法扩展：

```ts
console.log(1);
console.log(2);
console.log(3);
console.log(4);
console.log(5);
```

`while` 在条件为 `true` 时反复执行：

```ts
let count = 1;

while (count <= 5) {
  console.log(count);
  count = count + 1;
}
```

逐步追踪：

| 执行轮次 | 检查 `count <= 5` | 输出 | 更新后的 count |
|---:|---|---:|---:|
| 1 | `1 <= 5` → true | 1 | 2 |
| 2 | `2 <= 5` → true | 2 | 3 |
| 5 | `5 <= 5` → true | 5 | 6 |
| 6 | `6 <= 5` → false | 不执行 | 6 |

循环有三个关键：初始值、继续条件、每轮更新。漏掉更新会形成无限循环：

```ts
let count = 1;
while (count <= 5) {
  console.log(count);
  // 忘记更新 count，程序不会停止
}
```

若发生无限输出，按 `Ctrl + C` 停止。

Day 1 练习：

1. 用 `while` 输出 1–10。
2. 输出 10–1 的倒计时。
3. 输出 1–20 中的偶数。
4. 计算 1+2+3+...+100。
5. 在纸上追踪一个从 2 开始每次乘 2、直到大于 100 的循环。

#### Day 2：`for` 循环

计数循环常写成：

```ts
for (let index = 0; index < 5; index = index + 1) {
  console.log(index);
}
```

括号内仍是三部分：

```text
初始化；继续条件；每轮更新
```

为什么常从 0 开始？数组的第一个位置编号是 0，第 4 周会使用。

`i++` 是 `i = i + 1` 的常用简写：

```ts
for (let i = 1; i <= 5; i++) {
  console.log(i);
}
```

`break` 立刻结束整个循环，`continue` 跳过本轮剩余代码：

```ts
for (let i = 1; i <= 10; i++) {
  if (i === 5) {
    continue;
  }

  if (i === 9) {
    break;
  }

  console.log(i);
}
```

先少用 `break` / `continue`，很多复杂流程可以通过更清晰的条件表达。

Day 2 练习：

1. 输出 1–10 的平方。
2. 输出 1–50 中能被 3 整除的数。
3. 计算 1–10 的乘积。
4. 用循环生成 `"*****"`，每轮增加一个 `*`。
5. 找出 1–100 中第一个既能被 7 整除又大于 50 的数，然后停止。

#### Day 3：函数把步骤起名字

```ts
function greet(name: string): string {
  const message = `Hello, ${name}!`;
  return message;
}

const firstGreeting = greet("Ada");
const secondGreeting = greet("Lin");

console.log(firstGreeting);
console.log(secondGreeting);
```

逐段理解：

- `function` 声明函数。
- `greet` 是函数名，用动词开头更自然。
- `name: string` 是参数：调用者必须提供一段文本。
- `: string` 表示函数返回字符串。
- `return` 把结果交回调用位置，并结束本次调用。
- `greet("Ada")` 才是在调用；只写 `greet` 是拿到函数本身。

只做输出、不交回有用结果时返回 `void`：

```ts
function printDivider(): void {
  console.log("----------");
}
```

优先让计算函数返回结果，由调用者决定是否输出：

```ts
function calculateArea(width: number, height: number): number {
  return width * height;
}

console.log(calculateArea(4, 5));
```

Day 3 练习：

1. `add(a, b)` 返回两数之和。
2. `isEven(value)` 返回 boolean。
3. `formatUser(name, age)` 返回介绍字符串。
4. `calculateDiscount(price, rate)` 返回折后价格。
5. `printReceiptLine(label, value)` 只输出，不返回结果。

#### Day 4：提前返回和函数的单一职责

函数可以先处理无效情况：

```ts
function describeAge(age: number): string {
  if (!Number.isInteger(age) || age < 0) {
    return "年龄无效";
  }

  if (age < 18) {
    return "未成年人";
  }

  return "成年人";
}
```

提前返回让主路径更少嵌套。一个函数尽量只回答一个问题：

```ts
function isValidQuantity(quantity: number): boolean {
  return Number.isInteger(quantity) && quantity > 0;
}

function calculateSubtotal(price: number, quantity: number): number {
  return price * quantity;
}
```

命名提示：

- boolean 函数常以 `is`、`has`、`can` 开头。
- 转换函数常以 `format`、`convert`、`normalize` 开头。
- 查找函数常以 `find`、`get` 开头，但 `find` 暗示可能找不到。

Day 4 练习：

1. 把第 2 周价格计算器拆成验证、计算小计、应用折扣、格式化输出四个函数。
2. 写 `classifyTemperature`，使用提前返回。
3. 写 `canRegister(age, hasEmail)`。
4. 写 `clamp(value, min, max)`，把数字限制在区间内。
5. 找出一个超过 20 行的函数，说明可以按什么职责拆开。

#### Day 5：作用域——变量在哪些位置可见？

花括号会创建块作用域：

```ts
const outside = "外部";

if (true) {
  const inside = "内部";
  console.log(outside); // 可以：内部能看到外部
  console.log(inside);  // 可以
}

// console.log(inside); // 不可以：外部看不到块内变量
```

函数参数和函数内部变量只在函数中可用：

```ts
function buildMessage(name: string): string {
  const prefix = "Hello";
  return `${prefix}, ${name}`;
}
```

不同作用域可以有同名变量，但容易混淆：

```ts
const name = "外部";

function example(): void {
  const name = "内部";
  console.log(name); // 内部
}
```

初学阶段不要依赖同名遮蔽。变量尽量在最小需要范围内声明，函数通过参数接收数据，不偷偷依赖大量外部可变变量。

Day 5 练习：

1. 判断 5 个变量分别在哪些行可见。
2. 修复“在 `if` 内声明结果、在外部使用”导致的错误。
3. 把依赖全局 `price` 的函数改成接收参数。
4. 解释为什么两个函数都可以拥有名为 `result` 的局部变量。
5. 写一个循环，在循环内创建本轮消息并输出。

#### Day 6：小项目——猜数字过程模拟器

本项目先不做键盘交互，而是用一组预设猜测学习循环和函数。

```ts
const secret = 37;
const guesses = [10, 50, 30, 37, 40];
```

你要完成：

1. `compareGuess(guess, secret)` 返回 `"太小"`、`"太大"` 或 `"猜中"`。
2. 循环处理每个猜测，输出“第 N 次：猜了 X，结果 Y”。
3. 猜中后停止，不处理后面的 40。
4. 记录实际用了几次。
5. 如果所有猜测都没中，最后输出失败信息。

先画执行表，再写代码：

| 次数 | guess | 与 secret 比较 | 输出 | 是否继续 |
|---:|---:|---|---|---|

加分题：验证 secret 必须在 1–100，guesses 中的值也必须在范围内。

#### Day 7：复习与周测

1. 循环的三个必要部分是什么？
2. 什么情况会产生无限循环？如何停止？
3. 参数和返回值有什么区别？
4. `void` 表示什么？
5. 变量作用域为什么重要？
6. 闭卷写 `sumFromOneTo(limit)`。
7. 闭卷写 `countMultiples(limit, divisor)`。

第 3 周验收：

- [ ] 能使用 `while` 和 `for`，知道何时会无限循环。
- [ ] 能写至少 10 个带准确参数/返回类型的函数。
- [ ] 能用提前返回处理错误输入。
- [ ] 不依赖无意义的全局可变变量。
- [ ] 猜数字模拟器能在命中时正确停止。

#### 本周练习资源（第 3 周）

| 资源 | 做什么 |
|---|---|
| [现代 JavaScript 教程：循环 while 和 for](https://zh.javascript.info/while-for) | 做文末全部任务（“输出素数”作为加分题） |
| [现代 JavaScript 教程：函数](https://zh.javascript.info/function-basics) | 做文末任务“函数 min(a, b)”“函数 pow(x,n)”，加上参数和返回类型 |
| [现代 JavaScript 教程：递归和堆栈](https://zh.javascript.info/recursion) | 选学：只读前半部分，理解“函数调用自己” |

---

### 第 4 周：字符串、数组与对象

#### 本周目标

从处理单个值升级到处理“一组值”和“一个具有多个字段的事物”。最终完成学生成绩统计器。

#### Day 1：字符串的索引与切片

字符串中的每个字符都有位置编号，第一位是 0：

```ts
const language = "TypeScript";

console.log(language[0]);      // T
console.log(language[1]);      // y
console.log(language.at(-1));  // t，最后一位
console.log(language.slice(0, 4)); // Type，不包含结束位置 4
```

索引可能越界：

```ts
const first = language[0]; // string | undefined

if (first !== undefined) {
  console.log(first.toLowerCase());
}
```

常用操作：

```ts
const sentence = "learn typescript step by step";

console.log(sentence.split(" "));       // 按空格拆成数组
console.log(sentence.replace("learn", "practice"));
console.log(sentence.startsWith("learn"));
console.log(sentence.endsWith("step"));
```

Day 1 练习：

1. 取出姓名首字母并大写。
2. 从邮箱中取出 `@` 前的用户名，先用 `indexOf` 找位置。
3. 把一句话按空格拆开并计算单词数。
4. 隐藏手机号中间四位，如 `138****5678`。
5. 安全读取空字符串第一位，不能使用 `!`。

#### Day 2：数组保存一组同类值

```ts
const scores: number[] = [88, 92, 76];
const names: string[] = ["Ada", "Lin", "Grace"];
```

访问和修改：

```ts
console.log(scores.length); // 3
console.log(scores[0]);     // number | undefined

scores.push(100); // 末尾添加
const removed = scores.pop(); // 移除并返回最后一项，可能 undefined
scores[1] = 95;   // 修改指定位置
```

数组索引从 0 到 `length - 1`。最后一项：

```ts
const last = scores[scores.length - 1];
```

即使使用 `const`，数组内容仍可修改；`const` 只禁止变量重新指向另一数组：

```ts
const items = [1, 2];
items.push(3); // 可以
// items = []; // 不可以
```

Day 2 练习：

1. 创建 5 个城市组成的数组并输出长度。
2. 添加一个城市、移除最后一个城市。
3. 安全输出第一项与最后一项。
4. 把第二项改成新值。
5. 解释为什么 `items[100]` 的类型包含 `undefined`。

#### Day 3：用循环处理数组

最清晰的读取循环：

```ts
const prices = [10, 20, 30];

for (const price of prices) {
  console.log(price);
}
```

需要位置编号时：

```ts
for (let index = 0; index < prices.length; index++) {
  const price = prices[index];

  if (price !== undefined) {
    console.log(`第 ${index + 1} 项：${price}`);
  }
}
```

求和模式：

```ts
let total = 0;

for (const price of prices) {
  total = total + price;
}

console.log(total);
```

查找最大值时要考虑空数组：

```ts
function findMax(values: number[]): number | undefined {
  let max = values[0];

  if (max === undefined) {
    return undefined;
  }

  for (const value of values) {
    if (value > max) {
      max = value;
    }
  }

  return max;
}
```

Day 3 练习：

1. 求数组总和与平均值，空数组返回 `undefined`。
2. 找最小值。
3. 统计及格成绩数量。
4. 收集所有偶数到新数组。
5. 查找第一个长度超过 8 的字符串。

#### Day 4：对象描述一个事物

多个独立变量不容易保持关联：

```ts
const studentName = "Ada";
const studentScore = 92;
const studentPassed = true;
```

对象把相关字段放在一起：

```ts
const student = {
  name: "Ada",
  score: 92,
  passed: true
};

console.log(student.name);
student.score = 95;
```

属性名也可通过方括号访问：

```ts
console.log(student["name"]);
```

复制并修改对象：

```ts
const updatedStudent = {
  ...student,
  score: 100
};
```

`...student` 把原对象字段复制到新对象，后面的 `score` 覆盖旧值。原对象保持不变。

Day 4 练习：

1. 创建一本书对象：标题、作者、价格、是否读完。
2. 输出一句书籍介绍。
3. 创建价格改变后的新对象，不修改原对象。
4. 创建包含嵌套 `author` 对象的文章。
5. 解释“变量是对象”和“变量是对象中的一个属性”有何区别。

#### Day 5：接口和对象数组初体验

当很多对象拥有相同形状，用 `interface` 描述契约：

```ts
interface Student {
  name: string;
  score: number;
  passed: boolean;
}

const students: Student[] = [
  { name: "Ada", score: 92, passed: true },
  { name: "Lin", score: 58, passed: false }
];
```

如果漏字段或字段类型错误，TypeScript 会提前提示。接口不会在运行时创建对象，它只是开发阶段的规则。

遍历对象数组：

```ts
for (const currentStudent of students) {
  console.log(`${currentStudent.name}: ${currentStudent.score}`);
}
```

写处理函数：

```ts
function createStudent(name: string, score: number): Student {
  return {
    name,
    score,
    passed: score >= 60
  };
}
```

`name,` 是 `name: name` 的属性简写。

Day 5 练习：

1. 定义 `Product` 并创建 3 个商品数组。
2. 写 `createProduct`。
3. 计算商品数组库存总数。
4. 查找指定名称的商品；找不到返回 `undefined`。
5. 创建更新价格的新商品对象。

#### Day 6：小项目——学生成绩统计器

输入至少 6 个学生：

```ts
interface Student {
  id: string;
  name: string;
  score: number;
}
```

项目功能：

1. 验证分数必须在 0–100。
2. 输出每个学生的等级：A/B/C/D/F。
3. 计算有效成绩的平均分。
4. 找出最高分学生；空数组时正确处理。
5. 统计及格人数和不及格人数。
6. 输出一份整齐的文本报告。

建议函数：

```ts
function isValidScore(score: number): boolean;
function getGrade(score: number): string;
function calculateAverage(students: Student[]): number | undefined;
function findTopStudent(students: Student[]): Student | undefined;
```

先为每个函数写至少 3 组输入/期望输出，再写实现。

#### Day 7：复习与阶段检查

1. 字符串和数组的索引为什么从 0 开始使用？
2. `push`、`pop`、`length` 分别做什么？
3. `for...of` 与带 index 的 `for` 何时使用？
4. 对象和数组各适合表达什么？
5. 接口在运行时存在吗？
6. 闭卷写数组求平均值。
7. 闭卷定义 `Book`、创建数组并查找一本书。

第 4 周验收：

- [ ] 能安全处理数组为空和索引越界。
- [ ] 能用循环完成求和、计数、查找、筛选。
- [ ] 能定义简单接口和对象数组。
- [ ] 能解释修改原对象与创建新对象的差异。
- [ ] 成绩统计器每个函数都有测试样例。

#### 本周练习资源（第 4 周）

| 资源 | 做什么 |
|---|---|
| [现代 JavaScript 教程：对象](https://zh.javascript.info/object) | 做文末任务“你好，对象”“检查空对象”“对象属性求和”“将数值属性值都乘以 2” |
| [MDN：Array](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array) | 不通读；本周用到 `push`、`pop`、`includes`、`indexOf` 时查对应条目 |
| [现代 JavaScript 教程：字符串](https://zh.javascript.info/string) | 复习“查找子字符串”“获取子字符串”两节 |

---

### 第 4B 周（新增）：解构、展开与剩余、Map/Set、格式化输出

> **为什么新增这一周：** 原总蓝图的第 5–7 周用 JavaScript 讲过解构、展开运算符和 `Set`，而本教程替代了那几周，但之前没有专门讲这些内容。React 的第一天就会用到它们：`const [count, setCount] = useState(0)` 是数组解构，`function Card({ title }: Props)` 是参数解构，`{ ...task, completed: true }` 是对象展开。不补这一周，进入 React 时你会看不懂最常见的写法。
>
> **位置：** 完成第 4 周验收后、开始第 5 周之前学习。时间与普通周相同（7 天，每天 60–90 分钟）。
>
> **文件组织：** 新建 `src/week-04b/`，每天一个 `day-0N.ts`。每个没有 `import` / `export` 的文件末尾保留 `export {};`。

#### 本周目标

结束时你能：

- 从对象和数组中按需取出字段，并在函数参数中直接解构。
- 用 `...` 复制、合并、追加数据，并说清“展开”和“剩余”的区别。
- 识别浅拷贝陷阱，正确地不可变更新嵌套数据。
- 判断什么时候用 `Map` / `Set`，什么时候用普通对象 / 数组。
- 用 `Intl` 输出货币、百分比和日期，用“分”为单位保存金额。
- 完成“订单报表生成器”小项目。

#### Day 1：对象解构——一次取出多个字段

**第一步：先看没有解构时的写法。** 在 `src/week-04b/day-01.ts` 输入：

```ts
interface User {
  id: string;
  name: string;
  email: string;
  age: number;
}

const user: User = {
  id: "u1",
  name: "Ada",
  email: "ada@example.com",
  age: 28
};

const userName = user.name;
const userEmail = user.email;
console.log(userName, userEmail);

export {};
```

**第二步：改用解构。** 把中间两行替换为：

```ts
const { name, email } = user;
console.log(name, email);
```

读法：“从 `user` 里取出 `name` 和 `email` 两个属性，分别放进同名常量。”花括号在 `=` 左边时不是创建对象，而是“拆开对象”。运行 `pnpm exec tsx src/week-04b/day-01.ts` 确认输出相同。

**第三步：重命名。** 当变量名会冲突，或者你想要更清楚的名字：

```ts
const { name: displayName } = user;
console.log(displayName); // "Ada"
```

注意冒号在这里的意思是“改名为”，**不是类型注解**。这是本周最重要的陷阱，Day 1 第五步还会遇到。

**第四步：默认值。** 只对可选属性有意义：

```ts
interface Profile {
  name: string;
  nickname?: string;
}

const profile: Profile = { name: "Lin" };
const { nickname = "（未设置昵称）" } = profile;
console.log(nickname); // "（未设置昵称）"
```

默认值只在属性值为 `undefined` 时生效；如果值是 `""` 或 `0`，不会使用默认值。把 `profile` 改成 `{ name: "Lin", nickname: "" }` 运行一次，亲眼确认。

**第五步：在函数参数里解构（React 组件天天这么写）。**

```ts
function formatUser({ name, age }: User): string {
  return `${name}（${age} 岁）`;
}

console.log(formatUser(user));
```

类型注解写在**整个花括号后面**。下面是错误写法，请故意输入一次，阅读报错：

```ts
// ❌ 这不是“name 的类型是 string”，而是“把 name 改名为 string”
function wrongFormat({ name: string }) {
  return string;
}
```

在 `strict` 模式下你会看到“绑定元素隐式具有 any 类型”一类的错误。把报错记进 `learning-notes.md`：期望、实际、根因（冒号在解构中表示改名）。

**第六步：嵌套解构（了解即可，不要滥用）。**

```ts
interface Order {
  id: string;
  shipping: { city: string; postcode: string };
}

const order: Order = { id: "o1", shipping: { city: "Singapore", postcode: "018956" } };
const { shipping: { city } } = order;
console.log(city);
```

嵌套超过两层时，可读性会快速下降，写成两行通常更清楚：`const { shipping } = order; const { city } = shipping;`。

Day 1 练习（写在同一文件中，每题之间用注释隔开）：

1. 给定 `const book = { title: "TS 入门", author: "Ada", pages: 320 }`，用一行解构取出 `title` 和 `pages`。
2. 取出 `author` 并重命名为 `writer`。
3. 定义 `interface Settings { theme?: "light" | "dark"; fontSize?: number }`，解构时给 `theme` 默认 `"light"`、`fontSize` 默认 `16`，分别用 `{}` 和 `{ fontSize: 0 }` 测试，记录 `fontSize` 的结果并解释。
4. 写 `function describeBook({ title, author }: Book): string`，返回 `《title》— author`。
5. 把第 4 周成绩统计器里的 `getGrade` 调用处改写一次：先 `const { name, score } = student;` 再输出。

#### Day 2：数组解构——按位置取值

**第一步：基本写法。**

```ts
const scores: number[] = [92, 85, 70];
const [first, second] = scores;
console.log(first, second);
```

把鼠标悬停在 `first` 上：类型是 `number | undefined`。这是因为我们的 tsconfig 打开了 `noUncheckedIndexedAccess`——数组可能比你想的短，TypeScript 让你承认这一点。处理方式和第 4 周一样：

```ts
if (first !== undefined) {
  console.log(first.toFixed(1));
}
```

**第二步：元组没有这个问题。** 元组的长度是固定的：

```ts
const point: [number, number] = [3, 4];
const [x, y] = point;
console.log(x * y); // x、y 都是 number
```

**第三步：跳过和交换。**

```ts
const [, secondOnly] = scores; // 逗号前留空表示跳过第一个

let left = "左";
let right = "右";
[left, right] = [right, left];
console.log(left, right); // "右 左"
```

**第四步：函数返回多个值。** 当一个函数自然地产生“一对”结果时，返回元组再解构：

```ts
function splitFullName(fullName: string): [string, string] {
  const trimmed = fullName.trim();
  const spaceIndex = trimmed.indexOf(" ");
  if (spaceIndex === -1) {
    return [trimmed, ""];
  }
  return [trimmed.slice(0, spaceIndex), trimmed.slice(spaceIndex + 1)];
}

const [givenName, familyName] = splitFullName("Ada Lovelace");
```

**第五步：认识你将在 React 里看到的形状。**

```ts
// 这是 React 代码，现在不用运行，只需看懂“左边在做什么”：
// const [count, setCount] = useState(0);
```

`useState(0)` 返回一个两项数组：第 0 项是当前值，第 1 项是修改它的函数。左边用数组解构给它们起名字。名字可以随便起，位置不能乱。

**第六步：在 `for...of` 中解构。** 第 4 周你遍历过对象数组，现在可以直接拆开：

```ts
interface Student { name: string; score: number }
const students: Student[] = [{ name: "Ada", score: 92 }, { name: "Lin", score: 58 }];

for (const { name, score } of students) {
  console.log(`${name}: ${score}`);
}
```

Day 2 练习：

1. `const rgb: [number, number, number] = [255, 128, 0]`，解构为 `red`、`green`、`blue`。
2. 写 `minMax(values: number[]): [number, number] | undefined`：空数组返回 `undefined`，否则返回 `[最小值, 最大值]`。调用后先判断再解构。
3. 用交换写法交换两个 `let` 变量三次，预测并验证最终结果。
4. 给定 `const entries: [string, number][] = [["apple", 3], ["pear", 5]]`，用 `for (const [fruit, count] of entries)` 输出每一行。
5. 用一句话写下：“数组解构按 ___ 取值，对象解构按 ___ 取值。”

#### Day 3：展开 `...` 与剩余 `...`

同一个 `...`，出现在不同位置，含义相反：

| 位置 | 名称 | 作用 | 例子 |
|---|---|---|---|
| 在值的位置（右边、函数调用实参） | 展开（spread） | 把一个整体“摊开”成多个元素/属性 | `[...a, 4]`、`{ ...task }`、`Math.max(...nums)` |
| 在接收的位置（左边、函数形参） | 剩余（rest） | 把“剩下的”收集成一个数组/对象 | `function sum(...nums)`、`const { id, ...rest } = obj` |

**第一步：数组展开——复制、合并、追加。**

```ts
const base = [1, 2, 3];
const copy = [...base];
const merged = [...base, ...[4, 5]];
const withZero = [0, ...base];

console.log(copy === base); // false：新数组
```

第 5、6 周的不可变更新 `[...tasks, newTask]` 就是这个写法。

**第二步：对象展开——复制并覆盖字段。**

```ts
interface Task { id: string; title: string; completed: boolean }

const task: Task = { id: "t1", title: "写作业", completed: false };
const done = { ...task, completed: true };
```

顺序有意义：后写的覆盖先写的。把它写成 `{ completed: true, ...task }`，预测 `completed` 的值，再运行验证。

**第三步：浅拷贝陷阱（必须亲手复现）。**

```ts
const original = { title: "A", tags: ["x"] };
const shallow = { ...original };

shallow.tags.push("y");
console.log(original.tags); // ["x", "y"] —— 原对象也变了！
```

原因：展开只复制“第一层”。`tags` 是同一个数组的引用，两个对象指向同一份数据。正确的不可变更新是每一层都创建新值：

```ts
const updated = { ...original, tags: [...original.tags, "y"] };
```

在 React 中，直接修改嵌套数组是“页面不刷新”最常见的原因之一。

**第四步：剩余参数——接收任意数量的参数。**

```ts
function sum(...values: number[]): number {
  let total = 0;
  for (const value of values) {
    total = total + value;
  }
  return total;
}

console.log(sum(1, 2, 3)); // 6
console.log(sum());        // 0
```

**第五步：剩余属性——“去掉某些字段，保留其他”。** 常用于把敏感字段从对象中剥离：

```ts
interface Account { id: string; email: string; passwordHash: string }

function toPublicAccount(account: Account): Omit<Account, "passwordHash"> {
  const { passwordHash, ...publicFields } = account;
  return publicFields;
}
```

`Omit` 是第 11 周的工具类型，这里先理解为“Account 去掉 passwordHash”。（`passwordHash` 这个变量没有被使用，这是有意为之。）

**第六步：一个边界。** `Math.max(...[])` 得到 `-Infinity`。用展开调用函数时，要先处理空数组。

Day 3 练习：

1. 写 `appendItem(items: string[], item: string): string[]`，不修改原数组。用 `===` 证明返回的是新数组。
2. 写 `updateTitle(task: Task, title: string): Task`，返回新对象。
3. 给定 `const user = { name: "Ada", address: { city: "SG", zip: "018956" } }`，写出只修改 `city` 的正确不可变更新，并证明 `user.address.city` 没变。
4. 写 `average(...values: number[]): number | undefined`。
5. 写 `withoutId(task: Task)`，用剩余属性返回没有 `id` 的对象，悬停查看返回值的推断类型。

#### Day 4：`Map` 与 `Set`

**第一步：`Set`——不重复的集合。**

```ts
const tags = ["ts", "react", "ts", "css", "react"];
const uniqueTags = new Set(tags);

console.log(uniqueTags.size);         // 3
console.log(uniqueTags.has("css"));   // true
uniqueTags.add("node");
uniqueTags.delete("ts");

const uniqueArray = [...uniqueTags];  // 展开回数组
```

`Set` 适合：去重、快速判断“是否存在”（例如已选中的 ID）。

**第二步：`Map`——任意键到值的映射。** 统计每个词出现几次：

```ts
function countWords(words: string[]): Map<string, number> {
  const counts = new Map<string, number>();
  for (const word of words) {
    counts.set(word, (counts.get(word) ?? 0) + 1);
  }
  return counts;
}

const counts = countWords(["a", "b", "a"]);
console.log(counts.get("a")); // 2
console.log(counts.get("z")); // undefined
```

`Map<string, number>` 读作“键是 string、值是 number 的 Map”。尖括号是第 11 周泛型的语法，现在只需会读。`get` 的返回类型是 `number | undefined`，所以用了第 2 周学过的 `??`。

**第三步：遍历 Map（用到 Day 2 的数组解构）。**

```ts
for (const [word, count] of counts) {
  console.log(`${word}: ${count}`);
}
```

**第四步：对象与 Map 互相转换。**

```ts
const asObject = Object.fromEntries(counts);         // { a: 2, b: 1 }
const backToMap = new Map(Object.entries(asObject));
```

**第五步：陷阱——`JSON.stringify(new Map(...))` 得到 `"{}"`。** 要存进 `localStorage` 或发给服务器时，先转成对象或数组。请亲手运行一次确认。

**第六步：如何选择。**

| 需求 | 选择 |
|---|---|
| 字段固定、已知（用户、订单） | `interface` + 普通对象 |
| 键在运行时才知道，需要频繁增删、计数、分组 | `Map` |
| 只关心“有没有”，需要去重 | `Set` |
| 有顺序的一组同类值 | 数组 |

Day 4 练习：

1. 写 `uniqueSorted(values: string[]): string[]`：去重后按字母排序。
2. 写 `groupByCategory(products: Product[]): Map<string, Product[]>`（`Product` 有 `name`、`category`）。
3. 写 `findDuplicates(ids: string[]): string[]`：只返回出现过 2 次及以上的 ID，用两个 `Set` 实现。
4. 把第 2 题的结果转成普通对象，并用 `JSON.stringify` 输出。
5. 用表格写出 3 个你认为该用 `Map`、3 个该用对象的真实场景。

#### Day 5：格式化输出——`Intl`、金额与日期

**第一步：小数的坑。** 运行：

```ts
console.log(0.1 + 0.2); // 0.30000000000000004
```

计算机用二进制存小数，有些十进制小数无法精确表示。**涉及金额时，用“分”为单位保存整数**——这也是 Stripe 等支付平台的做法：

```ts
const priceInCents = 1999;  // 19.99
const quantity = 3;
const totalInCents = priceInCents * quantity; // 5997，整数，精确
```

**第二步：用 `Intl.NumberFormat` 显示货币。**

```ts
const sgd = new Intl.NumberFormat("en-SG", { style: "currency", currency: "SGD" });
const cny = new Intl.NumberFormat("zh-CN", { style: "currency", currency: "CNY" });

function formatCents(cents: number, formatter: Intl.NumberFormat): string {
  return formatter.format(cents / 100);
}

console.log(formatCents(5997, sgd));
console.log(formatCents(5997, cny));
```

先在注释中写下你**预测**的输出，再运行，记录实际结果。把地区改成 `"en-US"` + `"USD"` 再试一次，观察符号和千分位的变化。

**第三步：百分比和千分位。**

```ts
const percent = new Intl.NumberFormat("zh-CN", { style: "percent", maximumFractionDigits: 1 });
console.log(percent.format(0.256)); // 输入是比例，不是 25.6

const plain = new Intl.NumberFormat("zh-CN");
console.log(plain.format(1234567.891));
```

**第四步：日期基础与两个陷阱。**

```ts
const now = new Date();
console.log(now.toISOString()); // UTC 时间的标准字符串，适合存储和传输

const january = new Date(2026, 0, 15); // 陷阱 1：月份从 0 开始，0 = 一月
console.log(january.getMonth());       // 0

const invalid = new Date("不是日期");
console.log(Number.isNaN(invalid.getTime())); // 陷阱 2：无效日期不会报错，要自己检查
```

**第五步：用 `Intl.DateTimeFormat` 显示日期。**

```ts
const longDate = new Intl.DateTimeFormat("zh-CN", { dateStyle: "long" });
console.log(longDate.format(january));

const withTime = new Intl.DateTimeFormat("zh-CN", {
  dateStyle: "medium",
  timeStyle: "short",
  timeZone: "Asia/Singapore"
});
console.log(withTime.format(now));
```

原则：**存储用 UTC 的 ISO 字符串，显示时再按用户时区格式化。** 新的日期 API `Temporal` 正在各运行环境中逐步落地，现阶段先用 `Date` + `Intl`；遇到复杂的日期计算再引入专门的库。

Day 5 练习：

1. 写 `toCents(input: string): number | undefined`：把 `"19.99"` 转成 `1999`，非法输入返回 `undefined`（提示：先用第 2 周的数字验证，再 `Math.round(value * 100)`）。
2. 写 `formatPrice(cents: number, currency: "SGD" | "CNY" | "USD"): string`。
3. 写 `formatDiscount(rate: number): string`，`0.15` 输出百分比格式。
4. 写 `isValidIsoDate(text: string): boolean`。
5. 写 `formatOrderDate(iso: string): string`，用 `Asia/Singapore` 时区和 `dateStyle: "medium"`。

#### Day 6：小项目——订单报表生成器

在 `src/week-04b/order-report.ts` 中完成。样例数据（亲手输入，至少 5 个订单，可以修改内容）：

```ts
interface OrderItem {
  sku: string;
  name: string;
  priceInCents: number;
  quantity: number;
}

interface Order {
  id: string;
  customer: { name: string; country: "SG" | "CN" | "US" };
  items: OrderItem[];
  tags: string[];
  createdAt: string; // ISO 字符串
}

const orders: Order[] = [
  {
    id: "o-1001",
    customer: { name: "Ada", country: "SG" },
    items: [
      { sku: "book-ts", name: "TS 入门", priceInCents: 3990, quantity: 1 },
      { sku: "pen", name: "钢笔", priceInCents: 1250, quantity: 2 }
    ],
    tags: ["gift", "express"],
    createdAt: "2026-10-01T03:15:00.000Z"
  }
  // 再写至少 4 个订单，包含：空 items 的订单、重复 tag、不同国家
];
```

要求（每条都写成独立函数）：

1. `calculateOrderTotal({ items }: Order): number`——参数解构，返回总金额（分）。
2. `formatOrderLine(order: Order): string`——输出 `o-1001 | Ada | SG | 2026年10月1日 | S$...`，日期和金额都用 `Intl`。
3. `totalsByCountry(orders: Order[]): Map<string, number>`——每个国家的销售额（分）。
4. `allTags(orders: Order[]): string[]`——全部订单中出现过的标签，去重并排序。
5. `addItem(order: Order, item: OrderItem): Order`——返回新订单，原订单不变（用 `===` 和打印原数组证明）。
6. `toAnonymousSummary(order: Order)`——用剩余属性去掉 `customer`，返回其余字段和总金额。
7. `buildReport(orders: Order[]): string`——拼出完整多行报表：每行订单 + 各国合计 + 全部标签。

验证：每个函数至少 3 条 `console.assert`，其中至少 1 条是边界（空 items、空订单数组）。

#### Day 7：复习与周测

闭卷回答：

1. `const { a: b } = obj` 和 `function f({ a }: { a: string })` 中的冒号分别是什么意思？
2. 为什么 `const [first] = numbers` 的类型可能带 `undefined`，而元组不会？
3. 写出“展开”和“剩余”各两个例子，并说明你是如何从位置判断的。
4. 什么叫浅拷贝？写出一个会意外修改原数据的例子以及修正版本。
5. `Map` 和普通对象各适合什么？`JSON.stringify(map)` 会得到什么？
6. 为什么金额用“分”的整数保存？
7. 闭卷写 `countBy(items: string[]): Map<string, number>`。

第 4B 周验收：

- [ ] 能在函数参数中正确解构并写类型注解。
- [ ] 能独立写出对象、数组的不可变更新，包括一层嵌套。
- [ ] 能解释并复现浅拷贝陷阱。
- [ ] 能用 `Map` 分组/计数，用 `Set` 去重。
- [ ] 能用 `Intl` 格式化金额、百分比、日期；金额以“分”存储。
- [ ] 订单报表生成器 7 个函数全部完成，`pnpm typecheck` 零错误。

#### 本周练习资源（按顺序做，不需要另外找）

| 天 | 资源 | 做什么 |
|---|---|---|
| Day 1–2 | [现代 JavaScript 教程：解构赋值](https://zh.javascript.info/destructuring-assignment) | 读完后做文末全部“任务”，用 `.ts` 文件并加类型 |
| Day 3 | [现代 JavaScript 教程：Rest 参数与 Spread 语法](https://zh.javascript.info/rest-parameters-spread) | 读完，对照本教程的表格再写 3 个例子 |
| Day 4 | [现代 JavaScript 教程：Map and Set](https://zh.javascript.info/map-set) | 做文末任务（过滤字谜、迭代键等） |
| Day 5 | [MDN：Intl.NumberFormat](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat)、[现代 JavaScript 教程：日期和时间](https://zh.javascript.info/date) | NumberFormat 只看“示例”部分；日期章节做前 4 个任务 |
| 任意时间 | [TypeScript Playground](https://www.typescriptlang.org/play) | 把不确定的解构类型粘进去，悬停查看推断结果 |

参考答案见第 8 节「8.0.9 新增单元参考答案」。

---

### 第 5 周：数组方法、回调与数据转换

#### 本周目标

从手写所有循环升级到使用数组提供的标准操作。你要理解回调函数，而不是背 `map`、`filter` 的写法。最终完成商品筛选与购物车统计程序。

#### Day 1：函数也可以作为值传递

普通函数：

```ts
function double(value: number): number {
  return value * 2;
}
```

函数可以保存在变量中：

```ts
const double = (value: number): number => {
  return value * 2;
};
```

只有一个表达式时可简写：

```ts
const double = (value: number): number => value * 2;
```

把函数交给另一个函数：

```ts
function applyOperation(
  value: number,
  operation: (input: number) => number
): number {
  return operation(value);
}

console.log(applyOperation(5, double)); // 10
```

`operation` 是回调函数。注意传递 `double` 与立即调用 `double(5)` 不同：前者交出“以后可调用的功能”，后者交出已经计算出的数字。

Day 1 练习：

1. 把三个函数分别改写为箭头函数。
2. 写 `applyOperation(10, operation)`，分别传入加一、平方、减半函数。
3. 写 `repeatMessage(message, formatter)`。
4. 判断下面哪些是函数、哪些是调用结果：`greet`、`greet("Ada")`。
5. 解释回调为什么必须写清参数和返回类型。

#### Day 1B（新增）：闭包——函数记得它出生时的变量

> 这一天紧接 Day 1，因为闭包的前提是“函数可以作为值返回”。它是理解 React 中“事件处理函数里拿到的是旧值”这类 bug 的基础，不要跳过。用时约 90 分钟，文件 `src/week-05/day-01b.ts`。

**第一步：一个能“记住”次数的函数。** 输入并运行：

```ts
function createCounter(): () => number {
  let count = 0;

  return () => {
    count = count + 1;
    return count;
  };
}

const counterA = createCounter();
console.log(counterA()); // ?
console.log(counterA()); // ?

const counterB = createCounter();
console.log(counterB()); // ?
console.log(counterA()); // ?

export {};
```

先在每行的 `?` 处写下预测，再运行。正确结果是 `1、2、1、3`。

**第二步：用追踪表理解发生了什么。**

| 步骤 | 发生了什么 | counterA 的 count | counterB 的 count |
|---|---|---:|---:|
| `createCounter()` 第一次 | 创建一个 `count = 0`，返回一个内部函数，赋给 counterA | 0 | — |
| `counterA()` | 内部函数修改**它出生时那份** `count` | 1 | — |
| `counterA()` | 同一份 `count` 继续加 | 2 | — |
| `createCounter()` 第二次 | 又创建一份全新的 `count = 0` | 2 | 0 |
| `counterB()` | 修改第二份 | 2 | 1 |
| `counterA()` | 第一份不受影响 | 3 | 1 |

**定义：** 一个函数，加上它被创建时能看到的外部变量，合起来叫闭包。`createCounter` 已经执行完了，但它的 `count` 没有消失，因为返回出去的函数还在使用它。

**第三步：闭包的三个常见用途。**

用途一：预先配置好参数的“函数工厂”：

```ts
function makeDiscounter(rate: number): (priceInCents: number) => number {
  return (priceInCents) => Math.round(priceInCents * (1 - rate));
}

const tenPercentOff = makeDiscounter(0.1);
console.log(tenPercentOff(2000)); // 1800
```

用途二：私有状态（外部无法直接改 `nextId`）：

```ts
function createIdGenerator(prefix: string): () => string {
  let nextId = 1;
  return () => {
    const id = `${prefix}-${nextId}`;
    nextId = nextId + 1;
    return id;
  };
}

const nextTaskId = createIdGenerator("task");
console.log(nextTaskId(), nextTaskId()); // task-1 task-2
```

用途三：返回一组共享同一状态的函数：

```ts
interface Counter {
  increment: () => void;
  reset: () => void;
  current: () => number;
}

function createResettableCounter(): Counter {
  let count = 0;
  return {
    increment: () => { count = count + 1; },
    reset: () => { count = 0; },
    current: () => count
  };
}
```

**第四步：“捕获的旧值”——React 里最常见的闭包现象。** `setTimeout` 第 8 周会细讲，这里只需知道它会在 1 秒后执行回调：

```ts
let message = "旧消息";

function scheduleLog(): void {
  const captured = message;
  setTimeout(() => {
    console.log("捕获的：", captured, "｜当前的：", message);
  }, 1000);
}

scheduleLog();
message = "新消息";
```

输出：`捕获的： 旧消息 ｜当前的： 新消息`。`captured` 是调用 `scheduleLog` 那一刻复制下来的值，之后外面怎么改都不影响它。React 中每次渲染都会创建新的函数，每个函数“捕获”的是那一次渲染时的状态——你在 React 第 16 周看到“状态是快照”时，回到这里重读这一段。

**第五步：循环中的闭包。**

```ts
const printers: Array<() => void> = [];

for (let i = 1; i <= 3; i++) {
  printers.push(() => console.log(i));
}

for (const print of printers) {
  print(); // 1、2、3
}
```

`Array<() => void>` 读作“元素是‘无参数、无返回值的函数’的数组”。`let` 在每一轮循环都会创建新的 `i`，所以三个函数各自记住不同的值。（旧代码里的 `var` 不会这样，三个都会输出 4——这是 `var` 被淘汰的原因之一，你只需会认。）

Day 1B 练习：

1. 预测并运行：调用 `createCounter()` 三次得到三个计数器，交替调用它们，写出每次输出。
2. 写 `makeMultiplier(factor: number)`，返回把数字乘以 `factor` 的函数。用它创建 `double`、`triple`。
3. 写 `once(fn: () => string): () => string | undefined`：第一次调用时执行 `fn` 并返回结果，以后调用都返回 `undefined` 且不再执行 `fn`。
4. 完成 `createResettableCounter`，写 5 条 `console.assert` 验证 `increment`、`reset`、`current`。
5. 用自己的话写下：为什么 `counterA` 和 `counterB` 互不影响？为什么 `captured` 不会变成“新消息”？

#### Day 2：`forEach` 做动作，`map` 产生新数组

`forEach` 对每项执行动作，返回值不是新数组：

```ts
const names = ["Ada", "Lin", "Grace"];

names.forEach((name, index) => {
  console.log(`${index + 1}. ${name}`);
});
```

`map` 把每项转换成新值，并保持数组长度：

```ts
const prices = [10, 20, 30];
const labels = prices.map((price) => `¥${price.toFixed(2)}`);
// labels: string[]
```

判断问题：

- 只是打印每项 → `forEach`。
- 每项转换后收集结果 → `map`。
- 需要提前停止 → 普通循环更合适，`forEach` 不能 `break`。

Day 2 练习：

1. 用 `forEach` 输出带序号的任务。
2. 用 `map` 把摄氏温度转换为华氏温度。
3. 把用户对象数组转换成姓名字符串数组。
4. 把商品数组转换成 `{ id, label }` 预览对象。
5. 修复一个误以为 `forEach` 会返回新数组的程序。

#### Day 3：`filter` 保留符合条件的项

```ts
const scores = [45, 60, 78, 92];
const passingScores = scores.filter((score) => score >= 60);
```

回调每次返回 boolean：`true` 保留，`false` 丢弃。原数组不变。

```ts
interface Product {
  id: string;
  name: string;
  price: number;
  inStock: boolean;
}

const affordable = products.filter((product) => product.price <= 100);
const available = products.filter((product) => product.inStock);
```

多个条件先命名：

```ts
const results = products.filter((product) => {
  const matchesPrice = product.price <= 100;
  const canBuy = product.inStock;
  return matchesPrice && canBuy;
});
```

Day 3 练习：

1. 筛选偶数。
2. 筛选长度至少 5 的字符串。
3. 筛选已完成任务。
4. 筛选某分类且有库存的商品。
5. 组合 `filter` + `map`，先筛选及格学生再提取姓名。

#### Day 4：`find`、`some`、`every`

```ts
const found = products.find((product) => product.id === "p2");
// Product | undefined

const hasExpensiveProduct = products.some((product) => product.price > 1000);
const allInStock = products.every((product) => product.inStock);
```

- `find` 返回第一个匹配项，可能找不到。
- `some` 询问“至少一个是否满足”。
- `every` 询问“是否全部满足”。
- 空数组的 `every` 返回 `true`，因为没有任何反例；业务上是否接受要单独决定。

Day 4 练习：

1. 按 ID 查找用户并安全处理找不到。
2. 判断是否存在不及格成绩。
3. 判断所有密码是否至少 8 位。
4. 判断任务数组是否全部完成，但空数组时返回 false。
5. 比较用 `filter(...)[0]` 与 `find` 的意图和效率。

#### Day 5：`reduce` 与什么时候不该用它

`reduce` 把一组值累积成一个结果：

```ts
const prices = [10, 20, 30];

const total = prices.reduce((sum, price) => {
  return sum + price;
}, 0);
```

执行过程：

| 轮次 | sum 进入值 | price | 返回的新 sum |
|---:|---:|---:|---:|
| 1 | 0 | 10 | 10 |
| 2 | 10 | 20 | 30 |
| 3 | 30 | 30 | 60 |

初始值 `0` 很重要。空数组也能安全得到 0。

不要为了“高级”把所有逻辑塞入复杂 `reduce`。求和、分组这类明确累积适合；同时产生多个互不相关结果时，普通循环可能更清楚。

Day 5 练习：

1. 用 `reduce` 求总库存。
2. 求购物车总价：`price * quantity` 累加。
3. 统计字符串总字符数。
4. 先用循环、再用 `reduce` 统计及格人数，比较可读性。
5. 解释为什么 `reduce` 的初始值类型会影响结果类型。

#### Day 6：排序与突变陷阱

`sort` 默认按字符串顺序且会修改原数组：

```ts
const numbers = [10, 2, 30];

const ascending = [...numbers].sort((a, b) => a - b);
const descending = [...numbers].sort((a, b) => b - a);
```

`[...numbers]` 先复制，避免原数组被改。对象数组：

```ts
const byPrice = [...products].sort((a, b) => a.price - b.price);
```

链式处理要每一步都说得通：

```ts
const labels = products
  .filter((product) => product.inStock)
  .sort((a, b) => a.price - b.price)
  .map((product) => `${product.name}: ¥${product.price}`);
```

如果链太长，拆成有名字的中间变量。

Day 6 小项目——商品筛选与购物车统计：

1. 至少 8 个商品，包含分类、价格、库存数量。
2. 按关键字、分类、最高价格和是否有库存筛选。
3. 按价格升序排列，不修改原数组。
4. 转换成显示标签。
5. 购物车项包含商品和购买数量。
6. 计算商品种类数、总件数和总价。
7. 检查任一购买数量是否超过库存。

#### Day 7：周测

给出一个订单数组，闭卷完成：

1. `map` 提取订单 ID。
2. `filter` 筛选已付款订单。
3. `find` 查找一个 ID。
4. `some` 判断是否有退款。
5. `every` 判断所有订单金额是否非负。
6. `reduce` 求已付款总金额。
7. 排序时不修改原数组。

第 5 周验收：

- [ ] 能用一句话区分六个常用数组方法。
- [ ] 能安全处理 `find` 的 `undefined`。
- [ ] 知道 `map/filter` 返回新数组，而 `sort` 默认修改数组。
- [ ] 不用复杂链式调用掩盖业务步骤。
- [ ] 商品项目至少包含 5 个独立处理函数。

#### 本周练习资源（第 5 周）

| 资源 | 做什么 |
|---|---|
| [现代 JavaScript 教程：数组方法](https://zh.javascript.info/array-methods) | 做文末任务：“将 border-left-width 转换成 borderLeftWidth”“过滤范围”“映射到名字”“映射到对象”“按年龄对用户排序”“创建键（id）→ 值的对象” |
| [现代 JavaScript 教程：变量作用域，闭包](https://zh.javascript.info/closure) | 配合 Day 1B：读完全文，做任务“函数会选择最新的内容吗？”“Counter 是独立的吗？”“通过函数筛选”“按字段排序” |

---

### 第 6 周：问题拆解、可变性、错误与调试

#### 本周目标

语法不是最难部分；真正的门槛是面对需求时知道先做什么，以及出错时知道如何缩小范围。本周最终完成一个不依赖网页的待办事项核心程序。

#### Day 1：从需求到伪代码

面对“做一个待办应用”不要立刻写界面。先问：

1. 输入是什么？
2. 数据结构是什么？
3. 有哪些操作？
4. 每个操作的输出或状态变化是什么？
5. 有哪些边界情况？

示例：

```text
数据：任务有 id、标题、是否完成
添加：标题不能为空；创建新任务
完成：按 id 找任务；找不到要返回失败
删除：按 id 移除任务
统计：总数、完成数、未完成数
```

再写函数清单，而不是函数实现：

```text
addTask(tasks, title) → 新任务数组
toggleTask(tasks, id) → 更新后的任务数组
removeTask(tasks, id) → 删除后的任务数组
getTaskStats(tasks) → 统计对象
```

Day 1 练习：为“图书借阅”“购物车”“学生点名”分别写输入→处理→输出、数据字段、函数清单和 5 个边界情况。

#### Day 2：可变更新与不可变更新

直接修改：

```ts
interface Task {
  id: string;
  title: string;
  completed: boolean;
}

const task: Task = { id: "t1", title: "学习", completed: false };
task.completed = true;
```

创建新对象：

```ts
const completedTask: Task = {
  ...task,
  completed: true
};
```

创建新数组：

```ts
const tasks: Task[] = [task];
const nextTasks = [...tasks, { id: "t2", title: "练习", completed: false }];
const withoutTask = tasks.filter((item) => item.id !== "t1");
```

React 后续大量依赖不可变更新，因此现在开始习惯“输入不变，返回新值”的纯函数：

```ts
function completeTask(task: Task): Task {
  return { ...task, completed: true };
}
```

Day 2 练习：

1. 给商品返回涨价 10% 的新对象。
2. 在不修改原数组的前提下追加用户。
3. 按 ID 删除项目。
4. 按 ID 更新任务标题，其他任务保持不变。
5. 用输出证明原数组没有被修改。

#### Day 3：四类错误

| 类型 | 发生时间 | 示例 | 排查方向 |
|---|---|---|---|
| 语法错误 | 解析代码时 | 漏引号、括号 | 看错误位置及前一行 |
| 类型错误 | 类型检查时 | number 赋给 string | 比较实际与期望类型 |
| 运行时错误 | 程序执行时 | 对 undefined 调方法 | 看堆栈第一处自己的代码 |
| 逻辑错误 | 程序能跑但结果错 | 折扣加成加价 | 用小输入逐步追踪 |

运行：

```bash
pnpm typecheck
pnpm exec tsx src/week-06/day-03.ts
```

两条命令回答不同问题。调试流程：

1. 稳定复现错误。
2. 读完整信息，不只看“红色很多”。
3. 找到自己文件的第一行位置。
4. 写下预期值与实际值。
5. 在更小范围打印中间值。
6. 一次只改一个假设。
7. 修复后重新跑原失败场景和相邻场景。

Day 3 练习：老师自己制造并修复 8 个错误：2 个语法、2 个类型、2 个运行时、2 个逻辑错误。每个记录根因，不只记录修改后的代码。

#### Day 4：`console.log`、断点和最小复现

有效调试输出包含标签：

```ts
console.log("[calculateTotal] input", { price, quantity });
console.log("[calculateTotal] subtotal", subtotal);
```

不要留下几十条无意义的 `console.log("here")`。

在 Cursor 行号左侧点击可设置断点。使用 JavaScript Debug Terminal 或调试配置运行时，程序会停在该行，你可以观察变量并逐行执行。今天至少实际完成一次：

1. 在函数第一行设断点。
2. 运行程序。
3. 查看参数值。
4. 单步执行到返回。
5. 删除断点。

最小复现是把问题缩成最少代码：

```ts
const values = [10, 2, 30];
console.log(values.sort());
```

它比提交整个项目更容易发现默认排序规则。

Day 4 练习：从现有项目挑一个 bug 或故意制造一个，把它缩到 15 行以内，并写“输入、期望、实际、根因”。

#### Day 5：用测试样例代替“看起来能用”

最简单测试结构：

```ts
function add(a: number, b: number): number {
  return a + b;
}

console.assert(add(2, 3) === 5, "2 + 3 should equal 5");
console.assert(add(-1, 1) === 0, "negative plus positive");
console.assert(add(0, 0) === 0, "zero case");
```

测试选择三类：

- 正常：最常见输入。
- 边界：空数组、0、最小/最大允许值。
- 非法：负数量、空标题、找不到 ID。

本周先用 `console.assert` 理解“测试是什么”。今天的后半段就换成真正的测试工具 Vitest——总蓝图第 29 周和 Phase 3 都用它，越早养成习惯越好。

**安装 Vitest（约 20 分钟，按顺序执行）：**

1. 在 `ts-zero-to-one` 目录执行：

   ```bash
   pnpm add -D vitest
   ```

2. 打开 `package.json`，在 `scripts` 中增加两行（保留原有的 `dev`、`typecheck`、`build`、`start`）：

   ```json
   "test": "vitest",
   "test:run": "vitest run"
   ```

   `test` 是监听模式，保存文件会自动重跑，按 `q` 退出；`test:run` 跑一次就结束。

3. 把要测试的函数放进普通文件并导出，例如 `src/week-06/grades.ts`：

   ```ts
   export function getGrade(score: number): string {
     if (!Number.isFinite(score) || score < 0 || score > 100) {
       return "invalid";
     }
     if (score >= 90) return "A";
     if (score >= 80) return "B";
     if (score >= 70) return "C";
     if (score >= 60) return "D";
     return "F";
   }
   ```

4. 在同目录新建 `src/week-06/grades.test.ts`：

   ```ts
   import { describe, expect, it } from "vitest";
   import { getGrade } from "./grades.js";

   describe("getGrade", () => {
     it("正常：95 分是 A", () => {
       expect(getGrade(95)).toBe("A");
     });

     it("边界：恰好 90 分是 A，89 分是 B", () => {
       expect(getGrade(90)).toBe("A");
       expect(getGrade(89)).toBe("B");
     });

     it("非法：负数和超过 100 返回 invalid", () => {
       expect(getGrade(-1)).toBe("invalid");
       expect(getGrade(101)).toBe("invalid");
     });
   });
   ```

   注意 import 路径写 `./grades.js`，不是 `.ts`。这是 `NodeNext` 模块规则的要求：路径写的是编译后会存在的文件名。Vitest 能自动找到对应的 `.ts` 文件。

5. 运行 `pnpm test:run`。看到绿色的 `✓` 和 `Tests 3 passed` 即成功。

6. **故意让测试失败一次：** 把 `toBe("A")` 改成 `toBe("B")` 再运行，阅读红色输出中的 `Expected` 和 `Received`，然后改回来。读懂失败输出和写测试一样重要。

7. 再运行 `pnpm typecheck`，确认测试文件本身也没有类型错误。

从今天起，第 6 周 Day 6 待办核心、第 7 周以后的所有“至少 N 个测试”都写成 `*.test.ts` 文件，用 `pnpm test:run` 运行。第 12 周提到的 `node:assert` 可以继续了解，但日常练习统一用 Vitest。


Day 5 练习：为 `getGrade`、`calculateAverage`、`findProduct`、`applyDiscount` 各写至少 5 个测试，其中至少 2 个边界或非法场景。

#### Day 6：小项目——命令行待办核心

只写数据与函数，不做网页界面：

```ts
interface Task {
  readonly id: string;
  title: string;
  completed: boolean;
}
```

要求：

1. `addTask(tasks, title)`：空白标题不允许；返回新数组。
2. `toggleTask(tasks, id)`：找到后切换状态；找不到时返回原数组或明确结果。
3. `renameTask(tasks, id, title)`：验证标题。
4. `removeTask(tasks, id)`：返回新数组。
5. `getTaskStats(tasks)`：返回总数、完成数、未完成数。
6. `formatTaskList(tasks)`：返回多行文本，不在核心函数中散落输出。
7. 每个函数至少 4 个测试。

不要使用 class、数据库或第三方库。目标是把数据流写清楚。

#### Day 7：第一阶段编程能力检查

拿一张空白纸，选择“记账本”或“阅读清单”，在 90 分钟内：

1. 定义接口和 5 条样例数据。
2. 写添加、删除、更新、查找、统计函数。
3. 不修改输入数组。
4. 写至少 10 个测试。
5. 运行 typecheck。
6. 记录一个实际发现并修复的错误。

第 6 周验收：

- [ ] 面对需求能先写数据、操作和边界，而不是立刻乱写代码。
- [ ] 能区分四类错误。
- [ ] 至少实际使用一次断点。
- [ ] 能做对象和数组的不可变更新。
- [ ] 待办核心所有函数有正常、边界、非法测试。

#### 本周练习资源（第 6 周）

| 资源 | 做什么 |
|---|---|
| [现代 JavaScript 教程：错误处理，try...catch](https://zh.javascript.info/try-catch) | 读完，做任务“Finally 还是直接放在代码后面？” |
| [Vitest 官方指南](https://vitest.dev/guide/) | 只读 “Getting Started” 和 “Writing Tests” 两页，对照 Day 5 的安装步骤 |
| [Chrome DevTools：调试 JavaScript](https://developer.chrome.com/docs/devtools/javascript) | 跟着官方示例做一遍断点调试（约 20 分钟），配合 Day 4 |

---

### 第 7 周：从终端程序到浏览器页面

#### 本周目标

理解 TypeScript 如何控制网页：HTML 提供结构，CSS 提供样式，TypeScript 读取和修改 DOM、响应用户事件。最终把第 6 周待办核心接到浏览器界面。

#### Day 1：创建第一个浏览器 TypeScript 项目

终端脚本由 Node.js 运行；浏览器应用由浏览器运行，并通常由 Vite 负责开发服务器和构建。创建独立项目：

```bash
cd "/Users/karlan/Programming Learn/ts-zero-to-one"
mkdir -p projects
cd projects
pnpm create vite browser-todo --template vanilla-ts
cd browser-todo
pnpm install
pnpm dev
```

第一次可能询问是否安装 `create-vite`，确认即可。终端会显示本地地址，通常类似 `http://localhost:5173`。按住 `Cmd` 点击地址，或复制到浏览器。开发服务器会持续运行，这是正常现象；用 `Ctrl + C` 停止。

关键文件：

```text
browser-todo/
  index.html      # 页面入口和结构
  src/main.ts     # 浏览器端 TypeScript 入口
  src/style.css   # 样式
  package.json    # dev/build 等命令
  tsconfig.json   # 浏览器项目类型配置
```

最小 HTML：

```html
<!doctype html>
<html lang="zh-CN">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>TypeScript 待办</title>
  </head>
  <body>
    <main id="app">
      <h1>待办事项</h1>
    </main>
    <script type="module" src="/src/main.ts"></script>
  </body>
</html>
```

- 标签以 `<tag>` 开始、`</tag>` 结束。
- 属性写在开始标签中，如 `id="app"`。
- `script type="module"` 加载 TypeScript 入口；开发时由 Vite 转换。
- 浏览器不会直接理解 TypeScript 类型语法，不能双击 `.ts` 文件运行。

Day 1 练习：

1. 修改标题和 `<h1>`，观察浏览器自动刷新。
2. 加一段 `<p>` 说明。
3. 加一个 `<button id="add-button">添加</button>`。
4. 故意写错入口路径，观察浏览器和终端错误，再恢复。
5. 在 DevTools 的 Elements 面板找到 `#app`。

#### Day 2：DOM 与元素查询

DOM 是浏览器把 HTML 转成的对象树。TypeScript 通过 `document` 查询它：

```ts
const heading = document.querySelector("h1");
console.log(heading);
```

查询可能找不到，所以类型包含 `null`：

```ts
const heading = document.querySelector<HTMLHeadingElement>("h1");

if (heading === null) {
  throw new Error("页面缺少 h1");
}

heading.textContent = "我的 TypeScript 待办";
```

常用选择器：

```text
"h1"          标签选择器
"#task-input" ID 选择器
".task-item"  class 选择器
```

输入框需要更具体的类型：

```ts
const taskInput = document.querySelector<HTMLInputElement>("#task-input");

if (taskInput === null) {
  throw new Error("页面缺少任务输入框");
}

console.log(taskInput.value);
```

创建并添加元素：

```ts
const list = document.querySelector<HTMLUListElement>("#task-list");

if (list === null) {
  throw new Error("页面缺少任务列表");
}

const item = document.createElement("li");
item.textContent = "学习 DOM";
list.append(item);
```

外部文本使用 `textContent`，不要直接拼到 `innerHTML`，避免把不可信文本当 HTML 执行。

Day 2 练习：

1. 查询标题并修改文本。
2. 查询输入框并读取初始 value。
3. 创建三条 `<li>` 添加到列表。
4. 为创建的元素增加 class：`item.classList.add("task-item")`。
5. 故意查询不存在的 ID，观察为何必须处理 `null`。

#### Day 3：事件让页面响应用户

按钮点击：

```ts
const button = document.querySelector<HTMLButtonElement>("#add-button");

if (button === null) {
  throw new Error("页面缺少添加按钮");
}

button.addEventListener("click", () => {
  console.log("按钮被点击");
});
```

表单提交比只监听按钮更完整，因为用户按 Enter 也能提交：

```html
<form id="task-form">
  <label for="task-input">任务</label>
  <input id="task-input" name="task" />
  <button type="submit">添加</button>
</form>
```

```ts
const form = document.querySelector<HTMLFormElement>("#task-form");

if (form === null) {
  throw new Error("页面缺少任务表单");
}

form.addEventListener("submit", (event) => {
  event.preventDefault(); // 阻止浏览器默认刷新页面
  const title = taskInput.value.trim();

  if (title === "") {
    console.log("任务不能为空");
    return;
  }

  console.log(`添加任务：${title}`);
  taskInput.value = "";
});
```

Day 3 练习：

1. 点击按钮切换一段提示文字。
2. 输入时显示剩余字符数，监听 `input` 事件。
3. 提交表单时拒绝纯空格。
4. 成功提交后清空输入并重新聚焦：`taskInput.focus()`。
5. 解释 `event.preventDefault()` 不写会发生什么。

#### Day 4：状态与渲染

页面显示的数据叫状态。不要把 DOM 当唯一数据来源：

```ts
interface Task {
  readonly id: string;
  title: string;
  completed: boolean;
}

let tasks: Task[] = [];
```

渲染函数根据状态重建显示：

```ts
function renderTasks(): void {
  list.replaceChildren();

  for (const task of tasks) {
    const item = document.createElement("li");
    item.textContent = task.completed ? `✓ ${task.title}` : task.title;
    list.append(item);
  }
}
```

更新流程固定为：

```text
事件发生 → 计算新状态 → 保存新状态 → 调用 render
```

```ts
form.addEventListener("submit", (event) => {
  event.preventDefault();
  const title = taskInput.value.trim();

  if (title === "") return;

  const newTask: Task = {
    id: crypto.randomUUID(),
    title,
    completed: false
  };

  tasks = [...tasks, newTask];
  renderTasks();
});
```

Day 4 练习：

1. 空数组时渲染“暂无任务”。
2. 显示总数与完成数。
3. 给每项创建完成按钮和删除按钮。
4. 点击后按 ID 更新状态，再渲染。
5. 确保事件处理不直接拼接一套与 `renderTasks` 不一致的 DOM。

#### Day 5：`localStorage` 保存到浏览器

`localStorage` 只能保存字符串：

```ts
localStorage.setItem("course", "typescript");
const course = localStorage.getItem("course"); // string | null
```

对象/数组需要 JSON 转换：

```ts
function saveTasks(tasksToSave: Task[]): void {
  const json = JSON.stringify(tasksToSave);
  localStorage.setItem("tasks", json);
}
```

读取可能没有值、JSON 也可能损坏：

```ts
function loadTasks(): Task[] {
  const json = localStorage.getItem("tasks");

  if (json === null) {
    return [];
  }

  try {
    const value: unknown = JSON.parse(json);

    if (!Array.isArray(value)) {
      return [];
    }

    // 第 10 周会写完整 Task 运行时校验。
    return value.filter(isTask);
  } catch {
    return [];
  }
}
```

本周先使用下面的最小守卫，第 10 周会逐行理解：

```ts
function isTask(value: unknown): value is Task {
  if (typeof value !== "object" || value === null) {
    return false;
  }

  if (!("id" in value) || !("title" in value) || !("completed" in value)) {
    return false;
  }

  return (
    typeof value.id === "string" &&
    typeof value.title === "string" &&
    typeof value.completed === "boolean"
  );
}
```

每次状态变化后调用 `saveTasks(tasks)`，页面启动时先 `tasks = loadTasks()` 再渲染。

Day 5 练习：

1. 保存并读取简单主题字符串。
2. 保存数字数组并读回。
3. 处理键不存在的 `null`。
4. 手工在 DevTools 修改 localStorage 为非法 JSON，页面不能崩溃。
5. 解释 TypeScript 类型为什么不能保证存储中的旧数据正确。

#### Day 6：小项目——浏览器待办应用

最低功能：

- 添加、完成/取消完成、重命名、删除任务。
- 空标题验证和可见错误提示。
- 显示全部/未完成/已完成筛选。
- 显示总数、完成数、未完成数。
- localStorage 持久化。
- 刷新后数据恢复。
- 所有 DOM 查询处理 `null`。
- 所有用户文本通过 `textContent` 显示。

推荐文件：

```text
src/
  main.ts       # 绑定事件、启动应用
  tasks.ts      # Task 与增删改查函数
  render.ts     # 创建和更新 DOM
  storage.ts    # localStorage 读写
  style.css
```

本周不追求漂亮界面。CSS 只需让表单、按钮和完成状态容易辨认。

#### Day 7：浏览器人工测试

| 场景 | 操作 | 期望 |
|---|---|---|
| 空标题 | 输入空格后提交 | 不添加并显示错误 |
| 添加 | 添加两条不同任务 | 顺序和统计正确 |
| 完成 | 切换第一条 | 状态和统计更新 |
| 删除 | 删除一条 | 只删除目标 |
| 筛选 | 切换三个筛选条件 | 显示正确子集 |
| 刷新 | 刷新页面 | 状态恢复 |
| 损坏存储 | localStorage 写非法 JSON | 回退为空列表，不崩溃 |

第 7 周验收：

- [ ] 能解释 HTML、DOM、TypeScript 各负责什么。
- [ ] 能独立查询元素、监听事件、阻止表单默认提交。
- [ ] 更新流程遵守“事件→新状态→render”。
- [ ] localStorage 的缺失值和损坏值都被处理。
- [ ] 待办项目通过完整人工测试表。

#### 本周练习资源（第 7 周）

| 资源 | 做什么 |
|---|---|
| [现代 JavaScript 教程：getElement*，querySelector*](https://zh.javascript.info/searching-elements-dom) | 做文末任务“搜索元素” |
| [现代 JavaScript 教程：修改文档](https://zh.javascript.info/modifying-document) | 做任务“从对象创建树”之前的全部任务 |
| [现代 JavaScript 教程：浏览器事件简介](https://zh.javascript.info/introduction-browser-events) | 做任务“点击隐藏”“创建滑动菜单” |
| [现代 JavaScript 教程：事件委托](https://zh.javascript.info/event-delegation) | 做任务“使用委托隐藏消息” |
| [现代 JavaScript 教程：LocalStorage](https://zh.javascript.info/localstorage) | 做任务“自动保存表单字段” |

---

### 第 8 周：异步、`fetch` 与模块

#### 本周目标

理解“结果以后才回来”的代码，能显示加载与错误，能把代码拆到不同文件。最终完成一个从 JSON 数据源加载、搜索和展示用户的目录应用。

#### Day 1：同步与异步

同步代码按顺序立即完成：

```ts
console.log("A");
console.log("B");
console.log("C");
```

定时器会把回调安排到以后：

```ts
console.log("开始");

setTimeout(() => {
  console.log("两秒后");
}, 2000);

console.log("结束");
```

输出是“开始、结束、两秒后”。程序不会停在定时器处等待。网络请求、读取文件、计时器都常是异步操作。

Promise 表示“未来会成功得到值，或失败得到原因”：

```ts
function delay(milliseconds: number): Promise<void> {
  return new Promise((resolve) => {
    setTimeout(resolve, milliseconds);
  });
}
```

现在只需认识三种状态：pending（等待）、fulfilled（成功）、rejected（失败）。

Day 1 练习：

1. 预测含两个不同延迟定时器的输出顺序。
2. 写 `delay(1000)` 并观察它返回 Promise，而不是等待结果本身。
3. 设计“请求开始/请求完成”的日志。
4. 解释为什么网络请求不能假设立刻得到数据。
5. 找一个把异步结果当同步值使用的错误示例并修正思路。

#### Day 2：`async` / `await`

```ts
async function runDemo(): Promise<void> {
  console.log("等待前");
  await delay(1000);
  console.log("等待后");
}

await runDemo();
```

- `async` 函数总是返回 Promise。
- `await` 等待 Promise 得到结果，只能在允许 await 的上下文使用。
- 等待不会冻结整个浏览器；其他事件仍可发生。

返回数据：

```ts
async function getMessage(): Promise<string> {
  await delay(500);
  return "完成";
}

const message = await getMessage();
console.log(message);
```

Day 2 练习：

1. 写倒计时，每秒输出一次。
2. 写 `simulateLoadUser()`，延迟后返回对象。
3. 观察忘记 `await` 时变量是 Promise 而不是用户对象。
4. 顺序等待两次和 `Promise.all` 同时等待两次，比较耗时。
5. 解释 `Promise<string>` 与 `string` 的区别。

#### Day 2B（新增）：事件循环——谁先执行？

> 文件 `src/week-08/day-02b.ts`。这一课解决两个问题：为什么异步代码的输出顺序和书写顺序不同；为什么一段很慢的同步代码会让整个页面“卡死”。约 75 分钟。

**第一步：先预测，再运行。** 在注释里写下你认为的输出顺序：

```ts
console.log("1 同步");

setTimeout(() => {
  console.log("2 定时器回调");
}, 0);

Promise.resolve().then(() => {
  console.log("3 Promise 回调");
});

console.log("4 同步");

export {};
```

实际顺序是 `1、4、3、2`。即使定时器写的是 0 毫秒，它也排在 Promise 回调之后。

**第二步：记住三条规则。**

1. **同步代码先全部执行完。** 它们在“调用栈”上一行一行跑，中间不会被打断。
2. **然后清空“微任务队列”。** `Promise.then` 的回调、`await` 之后的代码，都进入微任务队列。
3. **然后才从“任务队列”取出一个任务执行**（定时器回调、点击事件、网络响应等），执行完再回到第 2 步。

用一张图记忆：

```text
调用栈（同步代码） ──全部跑完──▶ 微任务队列（Promise / await 之后）──全部清空──▶ 取一个任务（定时器 / 事件）──▶ 再清空微任务 ──▶ ……
```

**第三步：`await` 之后的代码也是微任务。**

```ts
async function demo(): Promise<void> {
  console.log("A：async 函数开始，这里仍是同步的");
  await null;
  console.log("C：await 之后，进入微任务");
}

demo();
console.log("B：demo() 调用之后的同步代码");
```

预测后运行，结果是 `A、B、C`。`async` 函数在遇到第一个 `await` 之前，都是同步执行的。

**第四步：亲眼看到“页面卡死”。** 在第 7 周的浏览器项目（Vite）中临时加一个按钮：

```ts
const blockButton = document.querySelector<HTMLButtonElement>("#block");
blockButton?.addEventListener("click", () => {
  const start = Date.now();
  while (Date.now() - start < 3000) {
    // 什么都不做，只是占住调用栈 3 秒
  }
  console.log("终于结束");
});
```

点击后马上试着选中页面文字、点击其他按钮：3 秒内页面完全没有反应。因为同步代码没跑完，事件循环无法处理任何点击。结论：**耗时的工作不能写成长时间的同步循环**；网络请求之所以设计成异步，就是为了不卡住页面。做完实验后删除这个按钮。

**第五步：同时等待多个 Promise。** Day 2 练习 4 中你比较过顺序等待和 `Promise.all` 的耗时，现在补上失败时的区别：

```ts
function delayValue(value: string, ms: number, fail = false): Promise<string> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (fail) {
        reject(new Error(`${value} 失败`));
      } else {
        resolve(value);
      }
    }, ms);
  });
}

// Promise.all：全部成功才成功；任何一个失败，整体立即失败
try {
  const values = await Promise.all([delayValue("用户", 300), delayValue("订单", 500, true)]);
  console.log(values);
} catch (error) {
  console.log("all 失败：", error instanceof Error ? error.message : error);
}

// Promise.allSettled：等所有都结束，逐个告诉你成功还是失败
const results = await Promise.allSettled([delayValue("用户", 300), delayValue("订单", 500, true)]);
for (const result of results) {
  if (result.status === "fulfilled") {
    console.log("成功：", result.value);
  } else {
    console.log("失败：", result.reason);
  }
}
```

选择规则：几项数据**缺一不可**（例如页面必须同时有用户和权限）用 `Promise.all`；几项数据**各自独立**（例如仪表盘上的三个卡片）用 `Promise.allSettled`，失败的那张卡片单独显示错误。

Day 2B 练习：

1. 预测并验证：两个 `setTimeout(…, 0)`、两个 `Promise.resolve().then(…)`、两行同步日志交错书写时的输出顺序。
2. 预测并验证：在 `then` 回调里再 `setTimeout` 一次，它排在哪里？
3. 写一个 `async` 函数，在第一个 `await` 前后各输出一行，并在调用处后面输出一行，预测顺序。
4. 用 `Promise.allSettled` 加载 3 个模拟数据（其中 1 个失败），输出“成功 2 项、失败 1 项”。
5. 用一句话解释：为什么 3 秒的 `while` 循环会让按钮点不动？

#### Day 3：失败、`throw` 与 `try/catch`

函数可以抛出错误：

```ts
function divide(a: number, b: number): number {
  if (b === 0) {
    throw new Error("除数不能为 0");
  }

  return a / b;
}
```

捕获：

```ts
function getErrorMessage(error: unknown): string {
  return error instanceof Error ? error.message : String(error);
}

try {
  console.log(divide(10, 0));
} catch (error: unknown) {
  console.log(`计算失败：${getErrorMessage(error)}`);
}
```

不要用空的 `catch {}` 吞掉错误。至少给用户可理解反馈，开发阶段保留足够上下文。

`finally` 无论成功或失败都会执行，适合恢复按钮状态：

```ts
button.disabled = true;

try {
  await doWork();
} catch (error: unknown) {
  showError(getErrorMessage(error));
} finally {
  button.disabled = false;
}
```

Day 3 练习：

1. 为无效年龄抛出清晰错误。
2. 模拟随机成功/失败的异步函数并捕获。
3. 用 `finally` 恢复 loading 状态。
4. 区分适合返回 `undefined` 的“找不到”和适合 throw 的“系统无法继续”。
5. 确保 catch 中不使用 `any`。

#### Day 4：`fetch` 的两道检查

先在 Vite 项目的 `public/users.json` 放本地数据：

```json
[
  { "id": "u1", "name": "Ada", "email": "ada@example.com" },
  { "id": "u2", "name": "Lin", "email": "lin@example.com" }
]
```

请求：

```ts
const response = await fetch("/users.json");

if (!response.ok) {
  throw new Error(`请求失败：HTTP ${response.status}`);
}

const payload: unknown = await response.json();
```

必须过两道关：

1. HTTP 是否成功？`fetch` 遇到 404/500 通常仍会返回 Response，需检查 `response.ok`。
2. JSON 形状是否符合业务？类型注解不能改变服务器数据，需运行时检查。

```ts
interface User {
  id: string;
  name: string;
  email: string;
}

function isUser(value: unknown): value is User {
  if (typeof value !== "object" || value === null) return false;
  if (!("id" in value) || !("name" in value) || !("email" in value)) return false;

  return (
    typeof value.id === "string" &&
    typeof value.name === "string" &&
    typeof value.email === "string"
  );
}

function isUserArray(value: unknown): value is User[] {
  return Array.isArray(value) && value.every(isUser);
}
```

Day 4 练习：

1. 成功加载本地 JSON。
2. 故意改错路径触发 HTTP 错误。
3. 把一个 id 改为数字，守卫应拒绝。
4. 把顶层数组改为对象，守卫应拒绝。
5. 在 UI 中分别显示加载、成功、空数据和失败提示。

#### Day 5：模块拆分

导出：

```ts
// user-types.ts
export interface User {
  id: string;
  name: string;
  email: string;
}
```

```ts
// user-api.ts
import type { User } from "./user-types";

export async function loadUsers(): Promise<User[]> {
  // fetch、HTTP 检查、运行时检查
}
```

```ts
// main.ts
import { loadUsers } from "./user-api";
```

每个文件只保留清晰职责：

- `user-types.ts`：业务数据契约。
- `user-api.ts`：外部请求与校验。
- `render.ts`：创建 DOM。
- `main.ts`：事件与流程协调。

循环依赖通常说明职责不清：A 导入 B，同时 B 又导入 A。初学项目应通过重新分工避免。

Day 5 练习：

1. 把待办项目的类型、逻辑、存储、渲染拆文件。
2. 使用 `import type` 导入纯类型。
3. 故意写错相对路径，阅读模块错误。
4. 解释 `./user-api` 与 `/user-api` 的差异。
5. 画出 `main → api → types` 的依赖箭头。

#### Day 6：小项目——用户目录应用

功能：

1. 页面启动后从 `/users.json` 加载用户。
2. 加载时禁用搜索并显示“加载中”。
3. 检查 HTTP 和 JSON 形状。
4. 成功后显示姓名与邮箱。
5. 输入关键字按姓名或邮箱过滤。
6. 无匹配结果时显示明确空状态。
7. 失败时显示错误和“重试”按钮。
8. 至少拆分 `types/api/render/main` 四个模块。

扩展但非必做：增加部门字段和部门筛选。不要添加登录、数据库或框架。

#### Day 7：第 1–8 周总检查

闭卷回答与实作：

1. 从值、变量、条件、循环、函数、数组、对象依次解释它们如何组合成程序。
2. 写一个接受对象数组并筛选、转换、汇总的函数。
3. 解释同步值与 Promise 的区别。
4. 写含 `response.ok` 与运行时守卫的 fetch 函数骨架。
5. 解释 DOM 查询为什么可能是 `null`。
6. 画出浏览器应用的“事件→状态→渲染”流程。
7. 从空文件写 50 行以内的阅读清单核心逻辑。

第 8 周验收：

- [ ] 能使用 `async/await` 并处理失败。
- [ ] 知道 fetch 成功建立连接不等于 HTTP 成功。
- [ ] 外部 JSON 先视为 `unknown`。
- [ ] 能按职责拆分模块并画出依赖方向。
- [ ] 用户目录应用支持加载、成功、空、失败和重试。
- [ ] 能独立完成第 1–8 周总检查至少 6/7 项。

完成这一阶段后，你已经学会 JavaScript 的核心运行能力，只是学习载体一直是 TypeScript。接下来四周会系统整理类型思维，并把前面“先会用”的语法解释到可以稳定迁移到 React/Next.js 的程度。

#### 本周练习资源（第 8 周）

| 资源 | 做什么 |
|---|---|
| [现代 JavaScript 教程：Promise](https://zh.javascript.info/promise-basics) | 做任务“用 promise 重新解决？”“基于 promise 的延时” |
| [现代 JavaScript 教程：事件循环](https://zh.javascript.info/event-loop) + [微任务](https://zh.javascript.info/microtask-queue) | 配合 Day 2B：读完两章，用自己的话复述“同步 → 微任务 → 一个任务”的顺序，再把章节里的示例代码亲手运行一遍 |
| [现代 JavaScript 教程：Promise API](https://zh.javascript.info/promise-api) | 只读 `Promise.all`、`Promise.allSettled` 两节 |
| [现代 JavaScript 教程：Async/await](https://zh.javascript.info/async-await) | 做任务“用 async/await 来重写” |
| [现代 JavaScript 教程：Fetch](https://zh.javascript.info/fetch) | 做任务“从 GitHub fetch 用户信息”，用 TypeScript + `unknown` 守卫完成 |
| [现代 JavaScript 教程：模块简介](https://zh.javascript.info/modules-intro) | 读完，对照 Day 5 解释 `import` / `export` |

---

## 4. 第 9 周：系统掌握基础类型、函数和对象建模

### 本周结果

本周结束时，你要交付 `src/week-09/`，包含每日实验和 20 道综合题。前 8 周已经会使用这些基础结构，本周的重点是系统理解推断、注解和对象契约。所有文件通过 `pnpm typecheck`，没有 `any`。

建议节奏：工作日每天 60–90 分钟，Day 6 用 2–3 小时完成综合题，Day 7 复盘。

### Day 1：类型推断、注解和类型错误

#### 第一步：先观察推断

输入代码后，把鼠标悬停在变量名上看编辑器显示的类型：

```ts
const courseName = "TypeScript"; // 推断为字面量类型 "TypeScript"
let completedLessons = 0;        // 推断为 number
let isReady = false;             // 推断为 boolean
```

为什么 `const courseName` 更精确？因为它不能被重新赋值，值永远是 `"TypeScript"`。`let completedLessons` 以后可能是任意数字，所以类型是 `number`。

不要机械重复编译器已经知道的信息：

```ts
// 信息没有增加，通常不必这样写
const name: string = "Ada";

// 更自然
const name = "Ada";
```

这些位置通常应该显式标注：

- 函数参数。
- 需要固定公共契约的函数返回值。
- 空数组或稍后初始化的变量。
- 希望变量比初始值更宽或更窄时。
- 模块对外导出的公共 API。

```ts
function greet(name: string): string {
  return `Hello, ${name}`;
}

const scores: number[] = [];
let selectedId: string | null = null;
```

#### 第二步：学会拆错误信息

```ts
const age: number = "18";
```

典型错误可以拆成：

- 错误位置：`age` 的赋值处。
- 实际提供：`string`。
- 期望得到：`number`。
- 根因：字符串 `"18"` 并不是数字 `18`。

正确修复取决于业务事实：

```ts
const age = 18;               // 如果它本来就应该是数字
const ageText = "18";        // 如果它本来就是展示文本
const age = Number("18");    // 如果它来自输入，转换后还要检查 NaN
```

不要用下面两种方式“让红线消失”：

```ts
const age: any = "18";
const age = "18" as unknown as number;
```

它们没有修复数据，只是让编译器不再帮助你。

#### Day 1 小实验

先预测，再运行类型检查：

```ts
let score = 90;
score = 95;
// score = "A";

const role = "admin";
let currentRole = "admin";

function double(value: number): number {
  return value * 2;
}
```

回答：

1. `role` 和 `currentRole` 的推断类型为何不同？
2. 取消 `score = "A"` 的注释后，错误中的实际类型和目标类型是什么？
3. 把 `double` 的返回值改成模板字符串，编译器为什么报错？

完成标志：能用“实际类型不能赋给期望类型”复述一条错误，而不是只说“它红了”。

### Day 2：原始类型、数组、元组与索引安全

#### 原始类型

日常最常用的是：

```ts
const title: string = "Learning TS";
const price: number = 99.5;
const published: boolean = false;
const emptyValue: null = null;
const missingValue: undefined = undefined;
```

使用小写 `string`、`number`、`boolean`，不要用包装对象类型 `String`、`Number`、`Boolean`。

`bigint` 和 `symbol` 知道它们存在即可，本阶段无需深入。

#### 数组

```ts
const tags: string[] = ["typescript", "frontend"];
const scores: Array<number> = [80, 90, 100];
```

两种写法等价。简单元素偏好 `T[]`，复杂组合有时 `Array<T>` 更易读。

因为本教程开启了 `noUncheckedIndexedAccess`：

```ts
const firstTag = tags[0]; // string | undefined
```

数组可能为空，索引也可能越界。安全处理：

```ts
if (firstTag !== undefined) {
  console.log(firstTag.toUpperCase());
}
```

不要为了省事写 `tags[0]!`。`!` 只是声称“一定存在”，不会让数组真的出现元素。

#### 元组

元组适合“长度固定且每个位置有不同意义”的数据：

```ts
const coordinate: readonly [number, number] = [31.2304, 121.4737];
const entry: [status: number, message: string] = [200, "OK"];
```

对象更适合字段多、顺序不直观的业务数据：

```ts
interface Coordinate {
  latitude: number;
  longitude: number;
}
```

经验规则：两个非常明确的位置可以用元组；超过 2–3 个位置时优先对象。

#### Day 2 练习

1. 定义 `languages`，只能保存字符串，并加入 5 种语言。
2. 定义只读 RGB 元组 `[red, green, blue]`，每项为数字。
3. 写 `getFirst(items: string[]): string | undefined`。
4. 写 `average(scores: number[]): number | undefined`；空数组返回 `undefined`。
5. 解释为什么 `string[] | number[]` 与 `(string | number)[]` 不同，各写一个合法值。

验收：第 4 题不能用 `scores[0]!`，第 5 题能用自己的例子解释。

### Day 3：函数是最重要的类型边界

#### 参数、返回值和 `void`

```ts
function calculateSubtotal(price: number, quantity: number): number {
  return price * quantity;
}

function logMessage(message: string): void {
  console.log(message);
}
```

`void` 表示调用者不应该依赖有意义的返回值。它不等于 `undefined` 的所有语义，但初学阶段可以理解成“此函数用于产生动作，而不是产生结果”。

#### 可选参数与默认参数

```ts
function formatPrice(amount: number, currency = "CNY"): string {
  return `${currency} ${amount.toFixed(2)}`;
}

function greetUser(name: string, prefix?: string): string {
  return prefix === undefined ? name : `${prefix} ${name}`;
}
```

`prefix?: string` 在函数内部是 `string | undefined`。默认参数则在函数内部已经是 `string`。

如果几乎每次都有合理默认值，优先默认参数；如果“未提供”具有业务含义，使用可选参数并显式处理。

#### 函数类型与回调

```ts
type NumberTransformer = (value: number) => number;

function applyTwice(value: number, transform: NumberTransformer): number {
  return transform(transform(value));
}

const result = applyTwice(3, (value) => value * 2); // 12
```

箭头函数参数 `value` 不需要手写类型，因为它从 `NumberTransformer` 的上下文中推断为 `number`。这叫上下文类型推断。

#### 返回值为何有时要显式标注？

内部小函数可以依赖推断：

```ts
const square = (value: number) => value * value;
```

公共业务函数建议写返回类型，它能在函数内部提前发现错误：

```ts
function createPriceLabel(amount: number): string {
  // 如果以后误改为 return amount，错误会出现在函数内部
  return `¥${amount.toFixed(2)}`;
}
```

#### Day 3 练习

实现并至少调用两次：

```ts
function getFullName(firstName: string, lastName: string): string;
function isAdult(age: number): boolean;
function calculateTotal(price: number, quantity: number, discount?: number): number;
function findLongest(words: string[]): string | undefined;
function mapPrices(prices: number[], formatter: (price: number) => string): string[];
```

要求：

- `discount` 用 `0.2` 表示八折，缺省时为 0。
- `findLongest([])` 返回 `undefined`。
- 不使用 `any`、`!` 或类型断言。

### Day 4：对象、`interface` 与 `type`

#### 从内联对象到命名契约

```ts
function printUser(user: { id: string; name: string; active: boolean }): void {
  console.log(`${user.name}: ${user.active}`);
}
```

对象形状重复出现时给它命名：

```ts
interface User {
  id: string;
  name: string;
  active: boolean;
}

function printUser(user: User): void {
  console.log(`${user.name}: ${user.active}`);
}
```

#### 可选与只读属性

```ts
interface Product {
  readonly id: string;
  name: string;
  price: number;
  description?: string;
}
```

注意：

- `readonly` 是 TypeScript 编译期限制，不会在运行时冻结对象。
- `description?` 表示属性可以不存在。
- 开启 `exactOptionalPropertyTypes` 后，`description: undefined` 不等同于省略该属性；如果确实要允许它，写 `description?: string | undefined`。

#### 扩展与组合

```ts
interface User {
  readonly id: string;
  name: string;
}

interface Admin extends User {
  permissions: string[];
}

type Timestamped = {
  createdAt: string;
  updatedAt: string;
};

type StoredUser = User & Timestamped;
```

本路线的简单约定：

- 主要描述对象形状时优先 `interface`。
- 联合、元组、函数类型、基本类型别名和类型组合使用 `type`。
- 不为风格争论；清晰与项目一致性比选哪一个更重要。

#### 多余属性检查不是“精确对象类型”

```ts
interface User {
  name: string;
}

// 直接传对象字面量时会检查多余属性
// printUser({ name: "Ada", age: 36 });

const ada = { name: "Ada", age: 36 };
printUser(ada); // 合法：结构上至少满足 User
```

TypeScript 主要采用结构类型系统：只关心值是否拥有所需结构，不要求它由某个类型“创建”。

#### Day 4 练习

定义并创建合法示例：

1. `User`：只读 `id`、`name`、`email`、可选 `avatarUrl`。
2. `Admin extends User`：增加 `permissions: string[]`。
3. `Product`：只读 `id`、`name`、`price`、`inStock`。
4. `CartItem`：包含 `product: Product` 与正整数 `quantity`（类型只能保证 number，正整数要运行时验证）。
5. `Order`：只读 `id`、`user: User`、`items: CartItem[]`、`status` 暂时用字符串、`createdAt: string`。

思考：为什么 TypeScript 的 `number` 不能保证 `quantity` 一定是正整数？你准备在哪里校验？

### Day 5：`null`、`undefined`、可选链和空值合并

在严格模式下，“可能不存在”必须进入类型：

```ts
function findUser(users: User[], id: string): User | undefined {
  return users.find((user) => user.id === id);
}

const user = findUser([], "missing");

if (user !== undefined) {
  console.log(user.name);
}
```

可选链适合“存在就继续，不存在就返回 `undefined`”：

```ts
const upperName = user?.name.toUpperCase(); // string | undefined
```

空值合并 `??` 只在左侧是 `null` 或 `undefined` 时使用默认值：

```ts
const displayName = user?.name ?? "匿名用户";
```

不要把 `||` 和 `??` 混为一谈：

```ts
const inputCount = 0;
const wrong = inputCount || 10; // 10，把合法的 0 当成假值
const right = inputCount ?? 10; // 0，只处理 null/undefined
```

非空断言 `!` 应非常少见：

```ts
const element = document.querySelector("#app")!;
```

它不做运行时检查。DOM 结构变化后，代码仍可能崩溃。学习阶段优先显式检查或写一个会抛出清晰错误的辅助函数。

#### Day 5 练习

1. `getUserEmail(users, id): string | undefined`。
2. `getUserEmailLabel(users, id): string`，不存在时返回 `"未找到邮箱"`。
3. `firstOrDefault(items: string[], fallback: string): string`。
4. 比较 `value || fallback` 与 `value ?? fallback` 在 `""`、`0`、`false`、`null`、`undefined` 下的结果。
5. 写 `requireValue(value: string | null | undefined, label: string): string`；缺失时抛出 `Error`。

### Day 6：20 道综合练习

先独立完成。建议每 5 题运行一次 `pnpm typecheck`，不要等到最后积累几十条错误。

#### A. 数据建模（1–8）

1. 定义 `Address`：`street`、`city`、`country` 必填，`zipCode` 可选。
2. 定义 `Profile`：只读 `id`、`displayName`、可选 `bio`、`skills: string[]`。
3. 定义 `Article`：只读 `id`、`title`、`content`、`author: Profile`、`tags`、可选发布时间。
4. 定义 `InventoryItem`：`sku`、`name`、`price`、`stock`。
5. 定义 `CartLine`：`item: InventoryItem`、`quantity`。
6. 定义 `AppConfig`：所有字段只读，含 `apiBaseUrl`、`retryCount`、`debug`。
7. 定义元组 `NameValuePair`，第一项字符串名，第二项为字符串或数字值。
8. 定义 `Dictionary`，允许任意字符串键，值为字符串。

#### B. 函数实现（9–16）

9. `formatAddress(address: Address): string`。
10. `calculateLineTotal(line: CartLine): number`。
11. `calculateCartTotal(lines: CartLine[]): number`。
12. `findItemBySku(items: InventoryItem[], sku: string): InventoryItem | undefined`。
13. `getPublishedArticles(articles: Article[]): Article[]`。
14. `updateStock(item: InventoryItem, delta: number): InventoryItem`，返回新对象，不修改原对象。
15. `applyToEach(values: number[], operation: (value: number) => number): number[]`。
16. `summarizeProfile(profile: Profile): string`，有 `bio` 时包含简介，没有时使用默认文案。

#### C. 阅读类型与找错（17–20）

17. 解释为什么 `const names = []; names.push("Ada")` 在不同上下文可能得到不理想推断，并为它添加合适类型。
18. 修复：`function getPrice(product: Product): string { return product.price; }`。
19. 修复但不使用 `!`：`const first = tags[0]; console.log(first.toUpperCase());`。
20. 解释为什么 `readonly` 不能防止收到运行时 JavaScript 的代码修改对象，并说出一种运行时冻结办法。

### Day 7：本周闭卷检查

限时 45 分钟，不看教程完成：

1. 建模一个包含用户、商品和订单行的 `Order`。
2. 写 `calculateOrderTotal(order): number`。
3. 写 `findOrder(orders, id): Order | undefined`，并安全打印结果。
4. 写一个接收回调的 `filterOrders`。
5. 解释推断、注解、可选属性、`readonly`、`null` 与 `undefined`。

本周验收：

- [ ] `pnpm typecheck` 零错误。
- [ ] 20 题全部有实际实现，不是空函数。
- [ ] 没有 `any`、`!`、双重断言。
- [ ] 至少记录 5 条错误日志。
- [ ] 能当面解释“类型检查不等于运行时校验”。

### 本周练习资源（第 9 周）

| 资源 | 做什么 |
|---|---|
| [TypeScript Handbook：Everyday Types](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html) | 每读一节，在 Playground 中改写一个例子 |
| [TypeScript Handbook：Object Types](https://www.typescriptlang.org/docs/handbook/2/objects.html) | 读“Optional Properties”“readonly Properties”“Extending Types” 三节 |
| [type-challenges：Pick（中文）](https://github.com/type-challenges/type-challenges/blob/main/questions/00004-easy-pick/README.zh-CN.md) | 只读题目，看懂“要求输入什么、输出什么”；第 11 周再做 |

---

## 5. 第 10 周：联合类型、收窄与可信边界

### 本周结果

本周你要把“一个对象塞很多可选字段”的写法升级成可辨识联合，并掌握从 `unknown` 到可信业务类型的过程。最终产出一个完全穷尽处理的请求状态机和一个安全解析外部 JSON 的小程序。

### Day 1：联合类型与字面量类型

`string` 表示所有可能字符串。很多业务字段并没有那么多合法值：

```ts
type OrderStatus = "draft" | "submitted" | "paid" | "cancelled";

interface Order {
  id: string;
  status: OrderStatus;
}
```

现在 `"payed"`、`"done"` 等未定义状态会在开发时被拒绝。

联合类型也能组合不同形状：

```ts
type Identifier = string | number;
type SearchInput = string | string[];
type DateInput = Date | string | number;
```

对联合类型只能直接做所有成员都支持的操作：

```ts
function printId(id: string | number): void {
  console.log(id.toString());
  // id.toUpperCase(); // number 没有此方法
}
```

#### 联合的两个易错点

第一，`A | B` 表示“值满足 A 或 B”，对象结构可能满足两者共有或组合结构。它不是自动互斥业务状态。互斥要靠可辨识联合。

第二，括号位置会改变数组含义：

```ts
type OneKindOfArray = string[] | number[];
type MixedArray = (string | number)[];

const a: OneKindOfArray = [1, 2, 3];
const b: MixedArray = [1, "two", 3];
```

#### Day 1 练习

1. 定义 `Theme = "light" | "dark" | "system"`。
2. 定义 HTTP 方法，只允许常用的五种大写方法。
3. 定义 `Result = number | "not-found" | "invalid-input"`，写格式化函数。
4. 写 `normalizeInput(input: string | string[]): string[]`。
5. 判断以下场景用 `string` 还是字面量联合：用户昵称、订阅档位、自由搜索词、日志等级、文章正文。

### Day 2：控制流分析与内置收窄

类型收窄是在分支中排除不可能的类型。

#### `typeof`

```ts
function formatValue(value: string | number): string {
  if (typeof value === "string") {
    return value.trim().toUpperCase();
  }

  return value.toFixed(2);
}
```

常用 `typeof` 结果包括 `"string"`、`"number"`、`"boolean"`、`"undefined"`、`"object"`、`"function"`。注意历史遗留行为：`typeof null === "object"`，所以对象检查还要排除 `null`。

#### 等值判断

```ts
function printName(name: string | null | undefined): void {
  if (name === null) {
    console.log("明确为空");
    return;
  }

  if (name === undefined) {
    console.log("未提供");
    return;
  }

  console.log(name.toUpperCase());
}
```

如果业务上不区分两种缺失，可用 `name == null` 同时匹配 `null` 与 `undefined`，但要写注释说明这是有意使用宽松等值；其余情况继续使用 `===`。

#### 真值收窄的陷阱

```ts
function printLength(text: string | null): void {
  if (text) {
    console.log(text.length);
  }
}
```

这会把空字符串 `""` 也放入 `else`。如果空字符串是合法输入，应写 `text !== null`。

#### `instanceof`、`in` 和数组检查

```ts
function formatDate(input: Date | string): string {
  if (input instanceof Date) {
    return input.toISOString();
  }

  return input;
}

interface EmailContact {
  email: string;
}

interface PhoneContact {
  phone: string;
}

function contact(contact: EmailContact | PhoneContact): string {
  if ("email" in contact) {
    return `Email: ${contact.email}`;
  }

  return `Phone: ${contact.phone}`;
}

function count(input: string | string[]): number {
  return Array.isArray(input) ? input.length : input.length;
}
```

最后一个示例两个分支实现相同，故实际没必要分支；它的目的只是观察 `Array.isArray` 的收窄。

#### 提前返回让类型更清晰

```ts
function uppercase(value: string | null): string {
  if (value === null) {
    return "";
  }

  return value.toUpperCase();
}
```

减少嵌套、先处理错误情况，通常比一层层 `if` 更容易阅读。

#### Day 2 练习

实现：

1. `formatPrimitive(value: string | number | boolean): string`。
2. `parseDateInput(value: Date | string | number): Date`，先不处理无效日期。
3. `getContactLabel(contact: EmailContact | PhoneContact): string`。
4. `safeUpper(value: string | null | undefined): string`。
5. 修复一个把合法数字 `0` 错当成缺失值的真值判断。

每题旁边写一句：你用了哪一种收窄，排除了哪些可能类型？

### Day 3：`unknown`、`any` 与自定义类型守卫

#### 为什么外部数据应该从 `unknown` 开始？

`any` 会向后传播不安全：

```ts
const data: any = JSON.parse('{"name": 42}');
data.name.toUpperCase(); // 编译器不阻止，运行时崩溃
```

`unknown` 接受任何值，但使用前必须证明：

```ts
const data: unknown = JSON.parse('{"name": 42}');

if (typeof data === "string") {
  console.log(data.toUpperCase());
}
```

把它们记成一句话：

- `any`：我不想让编译器检查。
- `unknown`：我现在还不知道，使用前必须检查。

外部边界默认选择 `unknown`。

#### 从 `unknown` 检查对象

```ts
function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null;
}

interface ApiUser {
  id: string;
  name: string;
}

function isApiUser(value: unknown): value is ApiUser {
  if (!isRecord(value)) {
    return false;
  }

  return typeof value.id === "string" && typeof value.name === "string";
}
```

`value is ApiUser` 是类型谓词。它告诉编译器：当函数返回 `true` 时，调用处可以把 `value` 当作 `ApiUser`。但编译器不会验证守卫内部是否写得诚实；守卫本身必须测试。

#### 断言函数

当无效数据应立刻终止流程，可以写断言函数：

```ts
function assertApiUser(value: unknown): asserts value is ApiUser {
  if (!isApiUser(value)) {
    throw new Error("Invalid API user payload");
  }
}

const payload: unknown = JSON.parse('{"id":"u1","name":"Ada"}');
assertApiUser(payload);
console.log(payload.name); // 此处已收窄为 ApiUser
```

#### 类型守卫不是校验库的替代品

小结构可以手写守卫。真实 SaaS 的复杂请求体后续应学习 Zod、Valibot 等运行时 Schema 工具，以减少手写校验与 TypeScript 类型不一致的风险。本阶段先理解底层原理，不额外引入库。

#### Day 3 练习

1. 写 `isString(value: unknown): value is string`。
2. 写 `isStringArray(value: unknown): value is string[]`。
3. 定义 `UserPayload` 并写完整守卫。
4. 写 `parseUserJson(json: string): UserPayload`，JSON 无效或形状不对时抛出清晰错误。
5. 为守卫测试至少 6 个值：合法对象、`null`、数组、缺字段、字段类型错误、额外字段。

### Day 4：可辨识联合——让非法状态无法表达

先看常见但有问题的模型：

```ts
interface RequestStateBad<T> {
  loading: boolean;
  data?: T;
  error?: string;
}
```

它允许这些荒谬状态：

```ts
const impossible: RequestStateBad<string[]> = {
  loading: true,
  data: ["done"],
  error: "also failed"
};
```

用共同的字面量字段区分互斥状态：

```ts
type RequestState<T> =
  | { status: "idle" }
  | { status: "loading" }
  | { status: "success"; data: T }
  | { status: "error"; message: string };
```

现在：

- `success` 必须有 `data`。
- `error` 必须有 `message`。
- `loading` 不可能同时携带成功数据和错误消息。

#### 穷尽检查

```ts
function assertNever(value: never): never {
  throw new Error(`Unhandled state: ${JSON.stringify(value)}`);
}

function renderState(state: RequestState<string[]>): string {
  switch (state.status) {
    case "idle":
      return "等待查询";
    case "loading":
      return "加载中";
    case "success":
      return `共 ${state.data.length} 条`;
    case "error":
      return `失败：${state.message}`;
    default:
      return assertNever(state);
  }
}
```

以后新增 `{ status: "cancelled" }` 而忘记处理时，`state` 不再是 `never`，编译器会在 `assertNever(state)` 处报错。

#### 把业务事件也建模

```ts
type RequestEvent<T> =
  | { type: "request" }
  | { type: "resolve"; data: T }
  | { type: "reject"; message: string }
  | { type: "reset" };

function transition<T>(
  state: RequestState<T>,
  event: RequestEvent<T>
): RequestState<T> {
  switch (event.type) {
    case "request":
      return { status: "loading" };
    case "resolve":
      return { status: "success", data: event.data };
    case "reject":
      return { status: "error", message: event.message };
    case "reset":
      return { status: "idle" };
    default:
      return assertNever(event);
  }
}
```

这里还没有限制“哪些状态允许哪些事件”，但已经比三个可选字段安全很多。更严格的状态转换可以留到项目真实需要时再做，不要过早复杂化。

#### Day 4 练习

分别建模并写穷尽处理函数：

1. 支付：`pending/succeeded/failed/refunded`。
2. 通知：`email/sms/push`，不同渠道字段不同。
3. 文件上传：`idle/uploading/success/error`，上传中包含进度，成功包含 URL。
4. 表单提交：`editing/submitting/success/error`。
5. 把一个“多个 boolean + 可选字段”的旧模型改写成可辨识联合，并列出旧模型允许的两个非法状态。

### Day 5：`as const`、`satisfies` 与类型断言

这三个语法外形相近，用途完全不同。

#### `as const`：保留字面量并设为只读

```ts
const PLAN_LIMITS = {
  free: 3,
  pro: 100,
  enterprise: 1000
} as const;

type Plan = keyof typeof PLAN_LIMITS;
type PlanLimit = (typeof PLAN_LIMITS)[Plan]; // 3 | 100 | 1000
```

`as const` 适合配置常量和固定选项，不是“万能类型修复器”。

#### `satisfies`：检查形状，同时保留更具体推断

```ts
type Plan = "free" | "pro";

const planLabels = {
  free: "免费版",
  pro: "专业版"
} satisfies Record<Plan, string>;
```

如果漏掉 `pro` 或多写错误键，编译器会提示。与直接注解相比，`satisfies` 通常能保留表达式自身更精确的类型。

```ts
const palette = {
  primary: [0, 120, 255],
  danger: "#ff0000"
} satisfies Record<string, string | number[]>;

palette.danger.toUpperCase(); // 仍知道 danger 是 string
```

#### `as SomeType`：声明“我比编译器更清楚”

```ts
const input = document.querySelector("#email") as HTMLInputElement;
```

断言不会验证 DOM 中真的存在 input。只有你掌握编译器无法得知的可靠事实时才用，并尽量缩小范围。

绝对错误的边界处理：

```ts
const user = JSON.parse(text) as ApiUser;
```

这没有校验数据。正确做法是接收为 `unknown` 后验证。

#### Day 5 决策题

为每个场景选择“注解 / `as const` / `satisfies` / 类型断言 / 运行时检查”，并说明原因：

1. 一组不会改变的订阅计划名称。
2. 检查路由配置是否覆盖所有页面键，同时保留每个 URL 字面量。
3. 从 API 得到用户 JSON。
4. 已确认某个类选择器只会匹配 `<input>`，但 TypeScript 只知道它是 `Element`。
5. 函数参数必须是 `string`。

### Day 6：小项目——安全解析任务 API

创建 `src/week-10/task-api.ts`，完成一个不发真实网络请求的边界练习。

#### 给定业务类型

```ts
interface Task {
  id: string;
  title: string;
  completed: boolean;
}

type TaskResponse =
  | { status: "success"; tasks: Task[] }
  | { status: "error"; message: string };
```

#### 你要实现

```ts
function isTask(value: unknown): value is Task;
function isTaskArray(value: unknown): value is Task[];
function parseTaskResponse(json: string): TaskResponse;
function summarizeResponse(response: TaskResponse): string;
```

规则：

- JSON 语法错误返回 `{ status: "error" }`，不要让程序崩溃。
- JSON 必须是任务数组；任一元素字段错误都算失败。
- 成功摘要显示总数与已完成数。
- `summarizeResponse` 使用穷尽检查。
- 至少测试 8 个输入：空数组、1 条合法、混合合法、JSON 语法错误、顶层为 `null`、顶层为对象、任务缺字段、字段类型错误。

加分但非必做：让错误消息指出第几个任务不合法。不要为了加分引入复杂抽象。

### Day 7：本周闭卷检查

限时 60 分钟：

1. 定义四态 `AsyncState<T>`。
2. 写穷尽的 `renderAsyncState`。
3. 从 `unknown` 安全解析 `{ id: string; score: number }`。
4. 解释 `any`、`unknown`、`never` 的差异。
5. 解释 `as const`、`satisfies`、`as Type` 分别做什么。
6. 给一个外部 JSON 直接断言类型的反例，并说明运行时风险。

本周验收：

- [ ] 所有联合分支都使用共同的字面量判别字段。
- [ ] 至少两个 `switch` 使用 `never` 穷尽检查。
- [ ] 外部数据从 `unknown` 开始。
- [ ] 类型守卫有合法与非法输入测试。
- [ ] 没有通过 `as` 假装外部数据已经验证。
- [ ] 至少记录 5 条错误日志。

### 本周练习资源（第 10 周）

| 资源 | 做什么 |
|---|---|
| [TypeScript Handbook：Narrowing](https://www.typescriptlang.org/docs/handbook/2/narrowing.html) | 本周主文档，按 Day 2 的顺序对照阅读 |
| [Zod 官方文档](https://zod.dev/) | 读首页“Basic usage”。对比你手写的类型守卫：理解为什么项目里用校验库，但本周仍要手写 |

---

## 6. 第 11 周：泛型与类型派生

### 本周结果

本周不是学习“尖括号语法”，而是学习识别类型之间的关系。最终产出 5 个有真实用途的泛型函数、常用业务派生类型，以及少量帮助理解类型系统的基础类型挑战。

### Day 1：从重复签名发现泛型

假设你先写了两个函数：

```ts
function firstString(items: string[]): string | undefined {
  return items[0];
}

function firstNumber(items: number[]): number | undefined {
  return items[0];
}
```

运行逻辑完全相同，只是元素类型不同。泛型把这段关系表达为：“输入数组的元素类型是什么，返回值就是该类型或 `undefined`。”

```ts
function first<T>(items: T[]): T | undefined {
  return items[0];
}

const firstName = first(["Ada", "Lin"]); // string | undefined
const firstScore = first([90, 100]);      // number | undefined
```

`T` 是类型参数，不是运行时变量。名字可以是 `TItem`、`TValue` 等；简单函数常用 `T`，复杂签名用描述性名字。

#### 好的泛型连接至少两个位置

有意义：

```ts
function identity<T>(value: T): T {
  return value;
}
```

`T` 连接输入和输出。

没有意义：

```ts
function logValue<T>(value: T): void {
  console.log(value);
}
```

如果 `T` 只出现一次且函数不使用其结构，`unknown` 往往更诚实：

```ts
function logValue(value: unknown): void {
  console.log(value);
}
```

#### 两个类型参数表达转换

```ts
function mapArray<TInput, TOutput>(
  items: TInput[],
  transform: (item: TInput) => TOutput
): TOutput[] {
  return items.map(transform);
}

const labels = mapArray([1, 2, 3], (value) => `#${value}`); // string[]
```

关系是：回调接收数组元素类型 `TInput`，回调产生 `TOutput`，函数返回 `TOutput[]`。

#### Day 1 练习

1. `last<T>(items: T[]): T | undefined`。
2. `wrap<T>(value: T): { value: T }`。
3. `pair<TLeft, TRight>(left, right): [TLeft, TRight]`。
4. `mapArray<TInput, TOutput>`。
5. `filterDefined<T>(items: (T | undefined)[]): T[]`。

每题用字符串、数字和对象中的至少两类调用，观察推断结果。

### Day 2：泛型约束与 `keyof`

没有约束的 `T` 可以是任何类型，所以不能假设它有属性：

```ts
function getId<T>(value: T): string {
  // return value.id; // T 上不一定有 id
  return "";
}
```

用约束说明最低要求：

```ts
function getId<T extends { id: string }>(value: T): string {
  return value.id;
}

getId({ id: "u1", name: "Ada" });
// getId({ name: "Ada" }); // 缺少 id
```

约束不会把 `T` 变成只有 `id` 的对象；它会保留调用者的完整类型，同时保证至少有 `id`。

#### `keyof`：对象类型所有键的联合

```ts
interface User {
  id: string;
  name: string;
  age: number;
}

type UserKey = keyof User; // "id" | "name" | "age"
```

#### 索引访问类型 `T[K]`

```ts
type UserName = User["name"]; // string
type UserIdentity = User["id" | "name"]; // string
```

把两者合并，可以写类型安全的属性读取：

```ts
function getProperty<T, K extends keyof T>(object: T, key: K): T[K] {
  return object[key];
}

const user: User = { id: "u1", name: "Ada", age: 36 };
const name = getProperty(user, "name"); // string
const age = getProperty(user, "age");   // number
// getProperty(user, "email");          // 非法键
```

逐段读签名：

1. `T` 是对象完整类型。
2. `K` 必须属于 `keyof T`。
3. `object[key]` 的结果类型是该键对应的 `T[K]`。

#### Day 2 练习

1. 写 `pluck<T, K extends keyof T>(items: T[], key: K): T[K][]`。
2. 写 `hasId<T extends { id: string }>(value: T): boolean`。
3. 写 `sortByNumberKey`，先只支持值为数字的已知字段；如果签名太难，记录卡点，Day 5 再回看。
4. 对 `Product` 手写 `keyof Product` 的结果，再用编辑器验证。
5. 对嵌套数组字段使用 `Product["tags"][number]` 提取元素类型。

### Day 3：常用工具类型来自业务变化

先定义一个唯一的基础实体：

```ts
interface User {
  readonly id: string;
  name: string;
  email: string;
  role: "admin" | "member";
  avatarUrl?: string;
  createdAt: string;
}
```

不要为创建表单、更新表单、列表预览复制三份几乎相同的接口。它们是从 `User` 派生的业务视图。

#### `Pick` 与 `Omit`

```ts
type UserPreview = Pick<User, "id" | "name" | "avatarUrl">;
type CreateUserInput = Omit<User, "id" | "createdAt">;
```

- `Pick<T, K>`：只拿指定字段。
- `Omit<T, K>`：排除指定字段。

#### `Partial` 与 `Required`

```ts
type UpdateUserInput = Partial<Pick<User, "name" | "email" | "avatarUrl">>;
type CompleteUser = Required<User>;
```

不要轻易写 `Partial<User>` 作为所有更新输入，因为这会让 `id`、`createdAt`、`role` 等本不该随意更新的字段也进入契约。先 `Pick` 允许更新的字段，再 `Partial`。

#### `Readonly`

```ts
type ImmutableUser = Readonly<User>;
```

它只做浅层只读。若属性里有数组或嵌套对象，是否能修改取决于内部类型：

```ts
interface Team {
  readonly members: string[];
}

const team: Team = { members: ["Ada"] };
team.members.push("Lin"); // 合法，属性不能重新赋值，但数组本身仍可变
```

要禁止数组修改，写 `readonly string[]`。

#### `Record`

```ts
type Role = "admin" | "member" | "guest";

const roleLabels: Record<Role, string> = {
  admin: "管理员",
  member: "成员",
  guest: "访客"
};
```

当联合新增成员时，`Record` 会提醒你补齐映射。

#### `ReturnType`、`Parameters` 与 `Awaited`

```ts
function createSession(userId: string, expiresIn: number) {
  return { token: crypto.randomUUID(), userId, expiresIn };
}

type Session = ReturnType<typeof createSession>;
type CreateSessionArgs = Parameters<typeof createSession>;

async function loadUser() {
  return { id: "u1", name: "Ada" };
}

type LoadedUser = Awaited<ReturnType<typeof loadUser>>;
```

不要为了少写一个清晰接口而滥用 `ReturnType`。当实现是类型事实的来源时它很有用；当业务契约应该先于实现存在时，显式接口更清楚。

#### Day 3 练习

从一个完整 `Product` 派生：

1. `CreateProductInput`：排除数据库生成字段。
2. `UpdateProductInput`：只允许名称、价格、描述，且都可选。
3. `ProductCard`：只含列表展示字段。
4. `ProductForm`：让可选描述在表单中变为必填字符串。
5. `ProductById`：ID 到商品的映射。
6. `ReadonlyProductList`：数组和商品都不允许修改。

### Day 4：映射类型、条件类型与 `infer` 入门

这一节的目标是看懂常见库类型，不是追求复杂类型体操。

#### 手写 `Partial`

```ts
type MyPartial<T> = {
  [K in keyof T]?: T[K];
};
```

逐段解释：

- `keyof T` 得到所有键。
- `K in keyof T` 逐个遍历键。
- `T[K]` 取得每个键原来的值类型。
- `?` 把每个属性改成可选。

#### 手写 `Readonly`

```ts
type MyReadonly<T> = {
  readonly [K in keyof T]: T[K];
};
```

#### 条件类型

```ts
type IsString<T> = T extends string ? true : false;

type A = IsString<"hello">; // true
type B = IsString<42>;      // false
```

它在类型层面问：“`T` 能否赋给某个类型？”

#### 从数组提取元素类型

不用 `infer`：

```ts
type ElementOf<T extends readonly unknown[]> = T[number];
```

用 `infer`：

```ts
type ElementOfWithInfer<T> = T extends readonly (infer Item)[]
  ? Item
  : never;
```

`infer Item` 表示：“如果 `T` 匹配某种数组，请把元素类型捕获为 `Item`。”

#### 条件类型的分布行为只需知道，不必深挖

```ts
type ToArray<T> = T extends unknown ? T[] : never;
type Distributed = ToArray<string | number>; // string[] | number[]
```

裸类型参数遇到联合时会分别计算。遇到库类型结果出乎意料时，再回来复习；本阶段不需要熟练操控分布式条件类型。

#### Day 4 练习

1. 实现 `MyPick<T, K extends keyof T>`。
2. 实现 `MyRequired<T>`，提示：映射类型中用 `-?` 移除可选。
3. 实现 `ElementOf<T>`。
4. 实现 `NonNullableValue<T>`，排除 `null | undefined`。
5. 实现 `FunctionResult<T>`，从函数类型提取返回值。

完成后分别与内置 `Pick`、`Required`、`NonNullable`、`ReturnType` 对比。正式业务代码优先使用内置工具类型。

### Day 5：实用泛型函数与实现中的诚实边界

#### `pick`

```ts
function pick<T extends object, K extends keyof T>(
  object: T,
  keys: readonly K[]
): Pick<T, K> {
  const result = {} as Pick<T, K>;

  for (const key of keys) {
    result[key] = object[key];
  }

  return result;
}
```

这里为什么出现断言？运行时从空对象逐步构造结果，编译器无法证明循环结束后所需键都已写入。断言被限制在一个很小的、容易审查的实现边界，公共调用方仍然完全类型安全。

这与 `JSON.parse(text) as User` 不同：前者的实现逻辑确实逐个复制了指定键；后者对未知外部数据完全没验证。

#### `keyBy`：先收窄需求，避免不诚实签名

如果任意键值都可能是对象，直接返回 `Record<string, T>` 会发生隐式字符串转换和键冲突。先把需求限制为字符串或数字 ID：

```ts
function keyById<T extends { id: string }>(items: readonly T[]): Record<string, T> {
  const result: Record<string, T> = {};

  for (const item of items) {
    result[item.id] = item;
  }

  return result;
}
```

如果真实需求只是按 `id` 索引，这比做一个支持所有键的万能 `keyBy` 更简单、更可靠。

#### `groupBy`：返回值也要承认键可能不存在

```ts
function groupBy<T, K extends PropertyKey>(
  items: readonly T[],
  getKey: (item: T) => K
): Partial<Record<K, T[]>> {
  const groups: Partial<Record<K, T[]>> = {};

  for (const item of items) {
    const key = getKey(item);
    const group = groups[key] ?? [];
    group.push(item);
    groups[key] = group;
  }

  return groups;
}
```

为什么是 `Partial<Record<K, T[]>>`？输入数据不一定覆盖 `K` 的每个可能值。若返回完整 `Record`，类型会谎称所有组必然存在。

#### Day 5 项目函数

实现并测试：

1. `uniqueBy<T, K>(items, getKey): T[]`。
2. `indexById<T extends { id: string }>(items): Record<string, T>`。
3. `partition<T>(items, predicate): [passed: T[], failed: T[]]`。
4. `mapValues<T, U>(record: Record<string, T>, transform): Record<string, U>`。
5. 回到 Day 2 的数字字段排序题。可以把 API 简化成 `sortBy(items, getValue)`，让回调明确返回 `number`，避免设计复杂的“筛选出所有数字键”类型。

简化后的签名：

```ts
function sortBy<T>(
  items: readonly T[],
  getValue: (item: T) => number
): T[];
```

这是重要经验：当类型变得远比业务逻辑复杂时，先简化 API，而不是立刻升级类型体操。

### Day 6：基础类型挑战（限时）

每题先独立思考最多 20 分钟。到时只看一个提示；仍不会就阅读答案、合上答案后重新实现。不要在一道题上消耗整天。

1. `MyPick<T, K>`
2. `MyReadonly<T>`
3. `TupleToObject<T>`
4. `First<T>`
5. `Length<T>`
6. `MyExclude<T, U>`
7. `MyAwaited<T>`（只处理一层 `Promise` 即可）
8. `If<Condition, Then, Else>`
9. `Concat<A, B>`
10. `Includes<T, U>`（只需处理简单字面量元组）

本教程的目标是借题理解 `keyof`、索引访问、映射和条件类型。完成 6/10 且能解释已完成题目的思路，就足够进入 Day 7；不要求为了数量复制答案。

### Day 7：本周闭卷检查

限时 60 分钟：

1. 从 `User` 派生创建、更新和预览类型。
2. 写 `getProperty` 并解释每个类型参数。
3. 写一个把 `T[]` 映射为 `U[]` 的函数。
4. 写 `MyPartial`。
5. 说明 `unknown` 和无约束泛型 `T` 的区别。
6. 指出一个不该使用泛型的函数，并简化它。
7. 解释 `groupBy` 为什么不能总是诚实地返回完整 `Record<K, T[]>`。

本周验收：

- [ ] 5 个业务泛型函数都有至少 3 个测试示例。
- [ ] 能从输入、输出和回调三个位置解释类型关系。
- [ ] 能使用 `keyof` 与 `T[K]`。
- [ ] 至少使用 6 种内置工具类型。
- [ ] 完成至少 6 道基础类型挑战且有思路注释。
- [ ] 没有为炫技引入递归复杂类型。
- [ ] 断言只出现在局部实现边界，并附有原因注释。

### 本周练习资源（第 11 周）

Day 6 的 10 道挑战题，题目页（中文）：
[Pick](https://github.com/type-challenges/type-challenges/blob/main/questions/00004-easy-pick/README.zh-CN.md) ·
[Readonly](https://github.com/type-challenges/type-challenges/blob/main/questions/00007-easy-readonly/README.zh-CN.md) ·
[Tuple to Object](https://github.com/type-challenges/type-challenges/blob/main/questions/00011-easy-tuple-to-object/README.zh-CN.md) ·
[First of Array](https://github.com/type-challenges/type-challenges/blob/main/questions/00014-easy-first/README.zh-CN.md) ·
[Length of Tuple](https://github.com/type-challenges/type-challenges/blob/main/questions/00018-easy-tuple-length/README.zh-CN.md) ·
[Exclude](https://github.com/type-challenges/type-challenges/blob/main/questions/00043-easy-exclude/README.zh-CN.md) ·
[Awaited](https://github.com/type-challenges/type-challenges/blob/main/questions/00189-easy-awaited/README.zh-CN.md) ·
[If](https://github.com/type-challenges/type-challenges/blob/main/questions/00268-easy-if/README.zh-CN.md) ·
[Concat](https://github.com/type-challenges/type-challenges/blob/main/questions/00533-easy-concat/README.zh-CN.md) ·
[Includes](https://github.com/type-challenges/type-challenges/blob/main/questions/00898-easy-includes/README.zh-CN.md)

每个题目页都有“接受挑战”按钮，会在 TypeScript Playground 中打开带测试的题目，不需要本地安装。

| 资源 | 做什么 |
|---|---|
| [TypeScript Handbook：Generics](https://www.typescriptlang.org/docs/handbook/2/generics.html) | 本周主文档 |
| [TypeScript Handbook：Utility Types](https://www.typescriptlang.org/docs/handbook/utility-types.html) | 查询手册，Day 3 用到哪个查哪个 |

---

## 7. 第 12 周：配置、模块、DOM 与项目实战

### 本周结果

本周把前三周知识放进两个真实运行环境：浏览器和 Node.js。你会完成：

- 从空目录构建一个浏览器端天气/API 应用。
- Markdown 转 HTML 的 Node.js CLI。
- 类型检查、运行时检查和行为检查三层验收。

### Day 1：读懂 `tsconfig.json`，不要背配置

#### TypeScript 项目如何找到配置？

在包含 `tsconfig.json` 的目录执行：

```bash
pnpm exec tsc --noEmit
```

`tsc` 会读取配置中的 `compilerOptions`、`include` 和 `exclude`。一个常见错误是执行：

```bash
pnpm exec tsc src/index.ts
```

显式传文件时不会按你以为的方式使用整个项目配置。日常通过 package script 执行 `pnpm typecheck`。

#### 核心选项按问题分类

| 问题 | 选项 | 本阶段选择 | 理由 |
|---|---|---|---|
| 检查多严格？ | `strict` | `true` | 开启严格类型检查家族 |
| 数组/字典索引可靠吗？ | `noUncheckedIndexedAccess` | `true` | 承认索引结果可能缺失 |
| 可选属性语义是什么？ | `exactOptionalPropertyTypes` | `true` | 区分缺失与显式 `undefined` |
| 输出哪代 JS？ | `target` | `ES2022` | 兼顾现代环境与稳定语法 |
| 代码在哪？ | `rootDir` / `include` | `src` | 限定源码范围 |
| 输出去哪？ | `outDir` | `dist` | 源码与产物分离 |
| 如何理解模块？ | `module` / `moduleResolution` | 取决于运行环境 | Node 与打包器规则不同 |
| 是否输出 JS？ | `noEmit` | 前端打包器项目通常为 `true` | 由 Vite/Next.js 等负责产物 |

`strict` 会启用一组严格选项，未来 TypeScript 版本可能扩展这组行为。因此升级 TypeScript 后出现新的类型错误并不一定是项目坏了，可能是检查变得更完整。

#### 配置 A：直接运行于 Node.js 的 CLI

```json
{
  "compilerOptions": {
    "target": "ES2022",
    "module": "NodeNext",
    "moduleResolution": "NodeNext",
    "rootDir": "src",
    "outDir": "dist",
    "strict": true,
    "noUncheckedIndexedAccess": true,
    "exactOptionalPropertyTypes": true,
    "verbatimModuleSyntax": true,
    "esModuleInterop": true,
    "skipLibCheck": true
  },
  "include": ["src/**/*.ts"],
  "exclude": ["node_modules", "dist"]
}
```

同时在 `package.json` 使用 `"type": "module"`。`NodeNext` 会模仿现代 Node.js 判断 ESM / CommonJS 的规则。Node ESM 的相对导入在源码中通常写输出扩展名：

```ts
import { add } from "./math.js";
```

虽然源码文件是 `math.ts`，运行时 Node 看到的是 `math.js`；TypeScript 会把该路径解析回源码做检查。

#### 配置 B：由 Vite / Next.js 等打包的前端应用

如果使用脚手架，优先保留脚手架生成的配置，只在理解后增加严格选项。典型核心是：

```json
{
  "compilerOptions": {
    "target": "ES2022",
    "lib": ["ES2022", "DOM", "DOM.Iterable"],
    "module": "ESNext",
    "moduleResolution": "Bundler",
    "noEmit": true,
    "strict": true,
    "noUncheckedIndexedAccess": true,
    "exactOptionalPropertyTypes": true,
    "verbatimModuleSyntax": true,
    "moduleDetection": "force"
  },
  "include": ["src"]
}
```

`Bundler` 按打包工具支持的导入方式检查，并允许相对导入省略扩展名。不要把它用于由 `tsc` 输出多个文件后直接交给 Node 运行的 CLI。

#### Day 1 实验

1. 把 `strict` 临时改为 `false`，观察一个隐式 `any` 参数是否仍报错，然后立即改回。
2. 切换 `noUncheckedIndexedAccess`，观察 `items[0]` 类型变化，然后改回 `true`。
3. 用 `pnpm exec tsc --showConfig` 查看最终生效配置。
4. 用 `pnpm exec tsc --listFiles` 观察 `@types/node` 和标准库类型如何进入项目。
5. 写一段笔记：你的 CLI 为什么用 `NodeNext`，天气应用为什么用 `Bundler`。

### Day 2：ES Modules、类型导入和第三方声明

#### 模块拥有自己的作用域

任何带顶层 `import` 或 `export` 的文件都是模块：

```ts
// math.ts
export function add(a: number, b: number): number {
  return a + b;
}

export interface Calculation {
  left: number;
  right: number;
  result: number;
}
```

```ts
// index.ts
import { add } from "./math.js";
import type { Calculation } from "./math.js";
```

`import type` 表明导入只存在于类型世界，编译后会移除。开启 `verbatimModuleSyntax` 后，这种边界更明确。

#### 具名导出与默认导出

本蓝图约定优先具名导出：

```ts
export function parseArgs() {}
export function convertMarkdown() {}
```

优点是导入名一致、重构搜索清晰、一个文件可公开多个相关成员。第三方库使用默认导出时照其文档使用，不需要为了原则绕路。

#### 模块解析问题的排查顺序

遇到 “Cannot find module” 时按顺序检查：

1. 包是否真的安装在当前 workspace？
2. 相对路径、文件名大小写和扩展名是否正确？
3. `package.json` 的 `type` 是什么？
4. 项目由 Node 直接运行还是由打包器处理？
5. `module` 与 `moduleResolution` 是否配套？
6. 包是否自带类型声明？若不带，是否存在可信的 `@types/...`？

不要一看到错误就打开 `skipLibCheck` 或新建一个全是 `any` 的声明文件。

#### 第三方库类型从哪里来？

优先级：

1. 库自己的 `package.json` 暴露类型声明，这是现代库常见方式。
2. DefinitelyTyped 提供的 `@types/package-name`。
3. 自己写最小而准确的 `.d.ts`，只描述实际使用的 API。

不要在确认前同时安装库自带类型和过时的 `@types` 包。

#### Day 2 练习

1. 拆出 `math.ts`、`format.ts`、`index.ts` 三个模块。
2. 导出两个函数、一个接口和一个联合类型。
3. 使用 `import type` 导入纯类型。
4. 故意删掉 Node ESM 相对导入中的 `.js`，阅读错误后修复。
5. 查看一个已安装包的 `package.json`，找它从哪里声明类型入口。

### Day 3：DOM 类型、事件与浏览器边界

#### 查询元素必须处理 `null`

```ts
const cityInput = document.querySelector<HTMLInputElement>("#city");
const searchButton = document.querySelector<HTMLButtonElement>("#search");
const output = document.querySelector<HTMLElement>("#output");

if (!cityInput || !searchButton || !output) {
  throw new Error("Required weather app elements are missing");
}
```

`querySelector<T>` 的泛型参数改善静态类型，但不会验证真实标签。选择器和 HTML 必须由你保持一致。用标签选择器时，TypeScript 常能自动推断：

```ts
const input = document.querySelector("input"); // HTMLInputElement | null
```

#### 事件的 `target` 与 `currentTarget`

`event.target` 可能是触发事件的内部子元素；`event.currentTarget` 是监听器绑定的元素，但在原生 DOM 类型里也常需要明确处理。

```ts
searchButton.addEventListener("click", () => {
  const city = cityInput.value.trim();
  output.textContent = city ? `查询 ${city}` : "请输入城市";
});
```

对表单更自然：

```ts
const form = document.querySelector<HTMLFormElement>("#weather-form");

form?.addEventListener("submit", (event) => {
  event.preventDefault();
});
```

#### DOM 内容写入与安全

显示纯文本优先 `textContent`：

```ts
output.textContent = apiMessage;
```

不要把外部数据直接写入 `innerHTML`，否则会引入 XSS 风险。TypeScript 不会自动阻止安全漏洞。

#### Day 3 小项目

写一个不调用 API 的城市列表过滤器：

- 输入框输入关键词。
- 提交表单后过滤固定的 `City[]`。
- 空输入显示提示。
- 无结果、单个结果和多个结果分别显示合理文案。
- 所有查询结果处理 `null`。
- 数据渲染使用 `textContent` 或创建 DOM 节点，不拼接不可信 HTML。

### Day 4：`fetch`、异步函数和错误处理

#### 异步返回类型

```ts
async function loadText(url: string): Promise<string> {
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error(`HTTP ${response.status}`);
  }

  return response.text();
}
```

`async` 函数总是返回 `Promise`。返回一个 `string` 会被包装为 `Promise<string>`。

#### HTTP 错误不会自动让 `fetch` reject

网络断开通常会 reject，但 404/500 仍会得到 `Response`。必须检查 `response.ok` 或状态码。

#### JSON 仍是未知数据

```ts
interface WeatherData {
  city: string;
  temperature: number;
  description: string;
}

async function fetchWeather(url: string): Promise<WeatherData> {
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error(`Weather request failed: HTTP ${response.status}`);
  }

  const payload: unknown = await response.json();

  if (!isWeatherData(payload)) {
    throw new Error("Weather API returned an invalid payload");
  }

  return payload;
}
```

你要根据自己真实使用的 API 响应编写 `isWeatherData`，不要照抄示例字段。

#### `catch` 中的错误是 `unknown`

```ts
function getErrorMessage(error: unknown): string {
  return error instanceof Error ? error.message : String(error);
}

try {
  const weather = await fetchWeather("...");
  console.log(weather);
} catch (error: unknown) {
  console.error(getErrorMessage(error));
}
```

JavaScript 允许抛出任意值，例如 `throw "failed"`，所以不能假定捕获值一定有 `.message`。

#### 请求状态串联第 10 周知识

```ts
type WeatherState =
  | { status: "idle" }
  | { status: "loading" }
  | { status: "success"; data: WeatherData }
  | { status: "error"; message: string };
```

每次状态变化创建一个合法的新状态对象，而不是维护 `isLoading`、`data?`、`error?` 三份可能矛盾的变量。

#### Day 4 练习

1. 写 `fetchJson(url): Promise<unknown>`，检查 HTTP 状态。
2. 写天气响应守卫。
3. 用四态联合管理一次请求。
4. 正确处理 `catch` 中的 `unknown`。
5. 列出并手动测试：空城市、404、断网、合法响应、字段缺失响应。

### Day 5：项目一——从零构建 TypeScript 天气应用

从空目录创建天气应用：城市输入、查询按钮、加载状态、天气结果、错误信息。如果你已经在其他课程写过 JavaScript 版本，可以复制一份作为行为对照，但本教程不依赖它。

本教程建议使用无需注册密钥的 [Open-Meteo Geocoding API](https://open-meteo.com/en/docs/geocoding-api) 和 [Forecast API](https://open-meteo.com/en/docs)。服务条款或接口以后可能变化，开始项目时先打开官方文档确认。

#### 实现顺序

1. 用第 7 周相同方法创建 `vanilla-ts` Vite 项目，先让空入口能运行。
2. 写城市表单、提交按钮、状态区域与结果区域；所有查询元素处理 `null`。
3. 城市名先 `trim()`，少于 2 个字符时不发请求。
4. 使用 `encodeURIComponent(city)` 构造地理编码 URL，通过城市名取得第一条经纬度；没有结果要返回明确错误状态。
5. 地理编码响应先作为 `unknown`，只验证并提取项目真正使用的 `name/latitude/longitude/country`。
6. 用经纬度请求 forecast endpoint 的 current 数据，例如温度、体感温度、天气代码和风速。
7. 天气响应同样从 `unknown` 开始校验，不把 `as WeatherData` 当验证。
8. 把外部响应转换成自己的 `WeatherData`，不要让渲染层依赖整份第三方 JSON。
9. 每次查询依次进入 loading → success/error，`finally` 恢复按钮。
10. 按下方人工测试表逐项验证，再写 README。

URL 构造示意：

```ts
const geocodingUrl = new URL(
  "https://geocoding-api.open-meteo.com/v1/search"
);
geocodingUrl.searchParams.set("name", city);
geocodingUrl.searchParams.set("count", "1");
geocodingUrl.searchParams.set("language", "zh");
geocodingUrl.searchParams.set("format", "json");
```

用 `URL` 与 `searchParams` 比手工拼接 `&` 更不容易漏编码。第二个 forecast URL 也使用同样方式加入 `latitude`、`longitude`、`current` 和 `timezone=auto`。

#### 推荐模块边界

```text
src/
  main.ts          # 查询 DOM、绑定事件、协调流程
  weather-api.ts   # fetch、HTTP 检查、响应解析
  weather-types.ts # WeatherData、WeatherState
  render.ts        # 把合法状态渲染到页面
```

不要为四个文件增加 class、依赖注入容器或复杂架构。模块只承担清晰分工。

#### 最低验收

- [ ] `strict`、`noUncheckedIndexedAccess` 开启。
- [ ] `pnpm typecheck` 和 `pnpm build` 成功。
- [ ] API JSON 先作为 `unknown`，通过运行时检查后进入业务层。
- [ ] 检查 `response.ok`。
- [ ] 所有 DOM 查询处理 `null`。
- [ ] `catch` 不假设一定是 `Error`。
- [ ] 使用四态联合，不用互相矛盾的可选字段。
- [ ] 空输入、加载、成功、无结果/无效响应、网络错误都有清晰 UI。
- [ ] 不把 API 文本直接写入 `innerHTML`。
- [ ] 没有 `any`、`as any`、`@ts-ignore`。

#### 人工测试表

| 场景 | 操作 | 期望结果 |
|---|---|---|
| 空输入 | 不输入城市直接提交 | 不发请求，显示输入提示 |
| 正常城市 | 输入有效城市 | 先加载，再显示城市、温度、描述 |
| 不存在城市 | 输入无效城市 | 显示可理解错误，不显示旧结果 |
| 快速重复点击 | 连续提交 | 按你的简单策略禁用按钮或接受最后结果；README 说明 |
| API 字段变化 | 用测试数据删一个字段 | 守卫拒绝，不在渲染阶段崩溃 |
| 断网 | DevTools 模拟 offline | 显示网络错误，恢复后可再试 |

### Day 6：项目二——Markdown 转 HTML CLI

#### 目标接口

```text
md-to-html input.md
md-to-html input.md --output output.html
md-to-html --help
```

#### 初始化

```bash
mkdir md-to-html
cd md-to-html
pnpm init
pnpm add marked
pnpm add -D typescript tsx @types/node
```

使用本周的 Node `NodeNext` 配置，并在 `package.json` 加 `"type": "module"`。

#### 先建模，再实现

```ts
interface CliOptions {
  inputFile: string;
  outputFile?: string;
}

type ParseArgsResult =
  | { kind: "help" }
  | { kind: "run"; options: CliOptions }
  | { kind: "error"; message: string };
```

这样 `--help` 不是伪造一个空 `inputFile`，参数错误也不需要抛异常作为普通控制流。

#### 推荐函数拆分

```ts
function parseArgs(args: string[]): ParseArgsResult;
function deriveOutputPath(inputFile: string): string;
function renderHelp(): string;
async function readMarkdown(path: string): Promise<string>;
async function convertMarkdown(markdown: string): Promise<string>;
async function writeHtml(path: string, html: string): Promise<void>;
async function main(args: string[]): Promise<number>;
```

让 `main` 返回退出码：成功为 0，使用错误或文件错误为非 0。程序入口统一设置：

```ts
const exitCode = await main(process.argv.slice(2));
process.exitCode = exitCode;
```

不要在深层辅助函数到处调用 `process.exit()`，那会让测试困难。

#### 实现顺序

1. `--help` 能输出帮助并返回 0。
2. 无参数返回清晰错误与非 0。
3. 单个输入路径能推导 `.html` 输出路径。
4. `-o` / `--output` 后必须有值。
5. 检查输入扩展名；非 `.md` 给出清晰错误或警告，策略写入 README。
6. 用 `node:fs/promises` 读取 Markdown。
7. 调用 `marked` 当前公开 API 转换。
8. 写入前用 `mkdir(..., { recursive: true })` 创建输出文件的父目录。
9. 写入输出文件，捕获文件系统错误。
10. 加入最小 HTML 外壳与 UTF-8 meta。

第三方库 API 会随版本变化，应以项目已安装版本的类型提示和官方文档为准。不要用断言强迫一段过时示例通过。

#### CLI 测试矩阵

至少手动验证：

| 参数 | 期望 |
|---|---|
| `--help` | 打印帮助，退出码 0 |
| 无参数 | 打印用法错误，非 0 |
| `missing.md` | 文件不存在的清晰错误，非 0 |
| `notes.txt` | 按既定策略拒绝或警告 |
| `README.md` | 生成 `README.html` |
| `README.md -o out/page.html` | 生成指定路径，目录策略明确 |
| `README.md --output` | 报“缺少输出路径” |
| 多余未知参数 | 报未知参数，不静默忽略 |

#### CLI 最低验收

- [ ] 参数解析使用可辨识联合。
- [ ] 每个函数签名准确，无 `any`。
- [ ] 使用 ESM 和 `node:` 前缀导入内置模块。
- [ ] 文件错误不会打印无意义的整段堆栈给普通用户。
- [ ] 指定的输出目录不存在时会自动创建。
- [ ] `main` 返回退出码，入口设置 `process.exitCode`。
- [ ] `pnpm typecheck`、`pnpm build`、`pnpm start -- --help` 成功。
- [ ] README 包含安装、构建、使用、示例、错误行为。

### Day 7：三层验证与最终验收

#### 第一层：类型契约测试

对“本来就应该报类型错误”的代码使用 `@ts-expect-error`：

```ts
function setPlan(plan: "free" | "pro"): void {
  console.log(plan);
}

setPlan("free");

// @ts-expect-error: enterprise is not a supported plan yet
setPlan("enterprise");
```

如果以后 `enterprise` 变成合法计划，这条注释会因为“没有出现预期错误”而失败，提醒你更新测试。不要使用 `@ts-ignore`，它即使下方不再报错也会静默存在。

#### 第二层：运行时边界测试

使用 `node:assert/strict` 或你后续选择的测试框架测试类型守卫：

```ts
import assert from "node:assert/strict";

assert.equal(isTask({ id: "1", title: "Learn", completed: false }), true);
assert.equal(isTask({ id: 1, title: "Learn", completed: false }), false);
assert.equal(isTask(null), false);
```

类型守卫写错不会被 TypeScript 自动发现，所以必须用运行时测试证明。

#### 第三层：行为验收

- 天气应用按测试表逐项手测。
- CLI 按参数矩阵逐项执行。
- 在全新终端中从 README 的安装步骤开始跑一次，验证文档没有依赖你的隐性环境。

#### 5 分钟口试

不看笔记回答：

1. TypeScript 类型何时存在、何时消失？
2. `unknown` 为什么比 `any` 安全？
3. 联合类型如何被收窄？
4. 可辨识联合解决什么业务问题？
5. 泛型 `T` 应至少连接哪些位置？
6. `keyof T` 和 `T[K]` 各表示什么？
7. `satisfies` 与类型断言有何不同？
8. 为什么 `fetch().json()` 之后仍要运行时检查？
9. 为什么 Node CLI 与 Vite/Next.js 的模块配置不同？
10. 类型正确的程序为什么仍可能有 bug？

最终验收：

- [ ] 两个项目都有独立 README 和复现步骤。
- [ ] 两个项目的 `pnpm typecheck` 为零错误。
- [ ] 没有 `any`、`as any`、`@ts-ignore`。
- [ ] 所有断言都局部、可解释，并有事实依据。
- [ ] 外部数据有运行时校验。
- [ ] 至少 10 条错误日志已归类复盘。
- [ ] 能独立完成 5 分钟口试中的至少 8 题。
- [ ] 代码目录已有备份；如果已完成总蓝图 Git 单元，则使用 Conventional Commits 推送到 GitHub。

### 本周练习资源（第 12 周）

| 资源 | 做什么 |
|---|---|
| [TSConfig Reference](https://www.typescriptlang.org/tsconfig/) | Day 1 逐项查你 tsconfig 里的每一个选项 |
| [Choosing Compiler Options](https://www.typescriptlang.org/docs/handbook/modules/guides/choosing-compiler-options.html) | Day 1 配置 A / B 的官方依据 |
| [Open-Meteo API 文档](https://open-meteo.com/en/docs) | Day 5 天气应用 |
| [Vite 官方指南](https://vite.dev/guide/) | Day 3、Day 5 浏览器项目 |

### 毕业项目：从空目录独立完成一个产品

核心课程结束后，用 7–14 天独立完成。三选一：

1. **个人记账本：** 添加收入/支出、分类筛选、月度统计、localStorage。
2. **阅读管理器：** 添加书籍、阅读状态、评分、搜索、阅读进度统计。
3. **习惯追踪器：** 创建习惯、每日打卡、连续天数、筛选与统计。

不得直接复刻教程中的待办或天气应用；可以复用你亲手写并理解的通用函数，但要重新建模业务。

#### 必须满足的产品要求

- 至少 2 个相关实体或 1 个包含嵌套数据的实体。
- 至少一个字段使用字面量联合，而不是宽泛 `string`。
- 完成添加、查看、修改、删除中的至少 3 种操作。
- 有搜索或筛选，以及至少 2 项统计。
- 使用可辨识联合表达至少一组 UI/操作状态。
- localStorage 数据作为 `unknown` 验证后使用。
- 至少 5 个模块，依赖方向清楚，无循环依赖。
- 至少 8 个纯函数，每个有正常和边界测试。
- 处理空状态、非法输入、存储损坏和找不到目标。
- `strict`、`noUncheckedIndexedAccess`、`exactOptionalPropertyTypes` 开启。
- 没有 `any`、`as any`、`@ts-ignore` 和无解释的 `!`。
- README 能让另一台电脑从安装到运行成功。

#### 实施顺序

1. 用一句话写清用户和问题，不写代码。
2. 写 5 条用户故事和明确不做的功能。
3. 设计接口、联合类型和 8–12 条样例数据。
4. 先完成纯函数与测试，终端中验证业务逻辑。
5. 画一个非常简单的页面草图。
6. 接 DOM 与事件，保持“事件→状态→渲染”。
7. 加存储边界和恢复策略。
8. 按测试表手测，修复后再跑相邻场景。
9. 删除调试输出，运行 typecheck/build。
10. 写 README 和学习复盘。

#### 100 分评分表

| 维度 | 分数 | 满分证据 |
|---|---:|---|
| 需求与范围 | 10 | 用户故事清楚，无越界功能 |
| 数据建模 | 15 | 类型表达真实业务，非法状态难以构造 |
| 核心逻辑 | 15 | 纯函数职责单一，边界明确 |
| 外部边界 | 15 | 存储/请求从 unknown 校验，失败可恢复 |
| DOM 与数据流 | 15 | 状态为事实来源，渲染无隐性修改 |
| 测试与调试 | 15 | 自动/人工测试覆盖正常、边界、非法 |
| 模块与可读性 | 10 | 命名清楚、无过度抽象、无循环依赖 |
| README 与讲解 | 5 | 可复现，并能讲清一条完整数据流 |

毕业门槛是 80 分，且“数据建模、外部边界、DOM 与数据流”三项都不能低于该项满分的 60%。评分不是为了追求漂亮数字，而是防止用好看的页面掩盖不可信的数据和无法解释的代码。

#### 最终口述演示

选择一个真实操作，例如“添加一笔支出”或“完成一次打卡”，不看代码预先写稿，现场从以下路径讲解：

```text
用户事件
→ 读取并验证表单输入
→ 调用哪个纯函数
→ 状态如何产生新值
→ 如何保存
→ render 如何读取状态
→ 哪些失败路径被处理
```

如果其中某一箭头只能说“反正这段是 AI 写的”，项目还未毕业；回到该模块重写到能解释为止。

---

## 8. 参考答案与评分点（完成练习后再看）

答案用于复盘，不是提交模板。同一道题常有多种正确写法。先比较三件事：你的类型是否诚实、非法状态是否被排除、实现是否处理了空值和错误边界；最后才比较代码长相。

### 8.0 第 1–8 周零基础参考答案

下面只给关键题和项目核心参考。个人信息、文案与界面没有唯一答案。正确使用方式：独立尝试至少 30 分钟 → 对照评分点定位差异 → 关闭答案重新写一遍。

#### 8.0.1 第 1 周

367 秒转换：

```ts
const totalSeconds = 367;
const minutes = Math.floor(totalSeconds / 60);
const seconds = totalSeconds % 60;

console.log(`${minutes} 分 ${seconds} 秒`);
```

个人名片参考：

```ts
const name = "Karlan";
const city = "Shanghai";
const careerGoal = "independent saas developer";
const learnedDays = 7;
const hoursPerDay = 1.5;
const completedThisWeek = true;
const weeklyHours = hoursPerDay * 7;

console.log(`姓名：${name}`);
console.log(`城市：${city}`);
console.log(`目标：${careerGoal.toUpperCase()}`);
console.log(`已学习：${learnedDays} 天`);
console.log(`预计每周学习：${weeklyHours} 小时`);
console.log(`本周是否完成：${completedThisWeek}`);
```

评分点：数字没有放在引号中参与算术；会变化和不会变化的数据使用合适的变量；能解释模板字符串中的每个表达式。

#### 8.0.2 第 2 周

分数等级：

```ts
function getGrade(score: number): string {
  if (score < 0 || score > 100) {
    return "无效分数";
  }

  if (score >= 90) return "A";
  if (score >= 80) return "B";
  if (score >= 70) return "C";
  if (score >= 60) return "D";
  return "F";
}
```

价格计算器参考：

```ts
interface PriceResult {
  subtotal: number;
  quantityDiscount: number;
  memberDiscount: number;
  couponDiscount: number;
  total: number;
}

function calculatePrice(
  price: number,
  quantity: number,
  isMember: boolean,
  couponCode: string
): PriceResult | undefined {
  if (price <= 0 || !Number.isFinite(price)) {
    return undefined;
  }

  if (!Number.isInteger(quantity) || quantity <= 0) {
    return undefined;
  }

  const subtotal = price * quantity;
  const afterQuantity = quantity >= 5 ? subtotal * 0.9 : subtotal;
  const quantityDiscount = subtotal - afterQuantity;

  const afterMember = isMember ? afterQuantity * 0.95 : afterQuantity;
  const memberDiscount = afterQuantity - afterMember;

  const requestedCoupon = couponCode === "SAVE20" ? 20 : 0;
  const total = Math.max(0, afterMember - requestedCoupon);
  const couponDiscount = afterMember - total;

  return {
    subtotal,
    quantityDiscount,
    memberDiscount,
    couponDiscount,
    total
  };
}
```

为什么 `couponDiscount` 不一定是 20？当优惠前只剩 10 元时，实际只能减 10 元，否则总价会为负。

最低测试：

```ts
console.assert(calculatePrice(100, 1, false, "")?.total === 100);
console.assert(calculatePrice(100, 5, false, "")?.total === 450);
console.assert(calculatePrice(10, 1, false, "SAVE20")?.total === 0);
console.assert(calculatePrice(-1, 1, false, "") === undefined);
```

#### 8.0.3 第 3 周

循环求和：

```ts
function sumFromOneTo(limit: number): number {
  let total = 0;

  for (let current = 1; current <= limit; current++) {
    total = total + current;
  }

  return total;
}
```

猜数字模拟器核心：

```ts
function compareGuess(guess: number, secret: number): string {
  if (guess < secret) return "太小";
  if (guess > secret) return "太大";
  return "猜中";
}

function runGuessSimulation(secret: number, guesses: number[]): void {
  let found = false;
  let usedAttempts = 0;

  for (const guess of guesses) {
    usedAttempts++;
    const result = compareGuess(guess, secret);
    console.log(`第 ${usedAttempts} 次：猜了 ${guess}，${result}`);

    if (result === "猜中") {
      found = true;
      break;
    }
  }

  if (!found) {
    console.log(`共猜 ${usedAttempts} 次，没有猜中`);
  }
}

runGuessSimulation(37, [10, 50, 30, 37, 40]);
```

评分点：猜中后没有继续输出 40；失败信息只在全部未命中时出现；次数不是写死的。

#### 8.0.4 第 4 周

安全平均值：

```ts
function calculateNumberAverage(values: number[]): number | undefined {
  if (values.length === 0) {
    return undefined;
  }

  let total = 0;

  for (const value of values) {
    total += value;
  }

  return total / values.length;
}
```

成绩统计核心：

```ts
interface Student {
  id: string;
  name: string;
  score: number;
}

function isValidScore(score: number): boolean {
  return Number.isFinite(score) && score >= 0 && score <= 100;
}

function getStudentGrade(score: number): string {
  if (!isValidScore(score)) return "Invalid";
  if (score >= 90) return "A";
  if (score >= 80) return "B";
  if (score >= 70) return "C";
  if (score >= 60) return "D";
  return "F";
}

function findTopStudent(students: Student[]): Student | undefined {
  let top = students[0];

  if (top === undefined) {
    return undefined;
  }

  for (const student of students) {
    if (student.score > top.score) {
      top = student;
    }
  }

  return top;
}

function calculateStudentAverage(students: Student[]): number | undefined {
  const validStudents = students.filter((student) => isValidScore(student.score));

  if (validStudents.length === 0) {
    return undefined;
  }

  const total = validStudents.reduce((sum, student) => sum + student.score, 0);
  return total / validStudents.length;
}
```

需自行决定并写进 README：遇到无效分数是忽略整条、显示错误还是终止计算。没有说明策略，即使代码运行也不算完整。

#### 8.0.5 第 5 周

数组方法选择：

```ts
const paidOrders = orders.filter((order) => order.status === "paid");
const orderIds = orders.map((order) => order.id);
const target = orders.find((order) => order.id === "o2");
const hasRefund = orders.some((order) => order.status === "refunded");
const amountsValid = orders.every((order) => order.amount >= 0);
const paidTotal = paidOrders.reduce((sum, order) => sum + order.amount, 0);
const byAmount = [...orders].sort((a, b) => a.amount - b.amount);
```

购物车统计：

```ts
interface Product {
  id: string;
  name: string;
  price: number;
  stock: number;
}

interface CartItem {
  product: Product;
  quantity: number;
}

interface CartStats {
  kinds: number;
  units: number;
  total: number;
  exceedsStock: boolean;
}

function getCartStats(items: CartItem[]): CartStats {
  return {
    kinds: items.length,
    units: items.reduce((sum, item) => sum + item.quantity, 0),
    total: items.reduce(
      (sum, item) => sum + item.product.price * item.quantity,
      0
    ),
    exceedsStock: items.some((item) => item.quantity > item.product.stock)
  };
}
```

如果这段 `reduce` 仍难理解，使用普通循环完全正确。能解释数据变化比使用“高级方法”更重要。

#### 8.0.6 第 6 周

不可变待办核心参考：

```ts
interface Task {
  readonly id: string;
  title: string;
  completed: boolean;
}

function addTask(tasks: Task[], title: string): Task[] {
  const cleanTitle = title.trim();

  if (cleanTitle === "") {
    return tasks;
  }

  const newTask: Task = {
    id: crypto.randomUUID(),
    title: cleanTitle,
    completed: false
  };

  return [...tasks, newTask];
}

function toggleTask(tasks: Task[], id: string): Task[] {
  return tasks.map((task) =>
    task.id === id ? { ...task, completed: !task.completed } : task
  );
}

function renameTask(tasks: Task[], id: string, title: string): Task[] {
  const cleanTitle = title.trim();

  if (cleanTitle === "") {
    return tasks;
  }

  return tasks.map((task) =>
    task.id === id ? { ...task, title: cleanTitle } : task
  );
}

function removeTask(tasks: Task[], id: string): Task[] {
  return tasks.filter((task) => task.id !== id);
}

function getTaskStats(tasks: Task[]) {
  const completed = tasks.filter((task) => task.completed).length;

  return {
    total: tasks.length,
    completed,
    remaining: tasks.length - completed
  };
}
```

这个设计在“ID 不存在”时静默返回内容相同的新数组或原有映射结果。更严格的业务可以返回可辨识联合；第 10 周学习后再重构。

#### 8.0.7 第 7 周

DOM 项目最重要的不是复制整份代码，而是保持单向流程：

```ts
let tasks = loadTasks();

function commit(nextTasks: Task[]): void {
  tasks = nextTasks;
  saveTasks(tasks);
  renderTasks(tasks);
}

form.addEventListener("submit", (event) => {
  event.preventDefault();
  commit(addTask(tasks, taskInput.value));
  taskInput.value = "";
});
```

完成按钮使用数据中的 ID：

```ts
const toggleButton = document.createElement("button");
toggleButton.type = "button";
toggleButton.textContent = task.completed ? "取消完成" : "完成";
toggleButton.addEventListener("click", () => {
  commit(toggleTask(tasks, task.id));
});
```

评分点：

- 核心增删改查函数不直接操作 DOM。
- `render` 只根据传入状态创建页面，不偷偷修改 tasks。
- 事件处理器更新状态后统一保存和渲染。
- 没有通过 `innerHTML` 注入用户标题。

#### 8.0.8 第 8 周

完整加载函数核心：

```ts
async function loadUsers(): Promise<User[]> {
  const response = await fetch("/users.json");

  if (!response.ok) {
    throw new Error(`加载用户失败：HTTP ${response.status}`);
  }

  const payload: unknown = await response.json();

  if (!isUserArray(payload)) {
    throw new Error("用户数据格式错误");
  }

  return payload;
}
```

页面协调核心：

```ts
async function start(): Promise<void> {
  setLoading(true);
  clearError();

  try {
    const users = await loadUsers();
    renderUsers(users);
  } catch (error: unknown) {
    renderError(getErrorMessage(error));
  } finally {
    setLoading(false);
  }
}

await start();
```

评分点：404、非法 JSON、错误字段、空数组和正常数组是五个不同测试场景；`finally` 恢复加载状态；`main.ts` 不直接重复 API 校验逻辑。

#### 8.0.9 新增单元参考答案（第 4B 周、第 5 周 Day 1B、第 8 周 Day 2B）

> 先独立完成，再对照。答案只是一种写法；只要类型诚实、边界处理正确、不修改输入，就算正确。

**第 4B 周 Day 1**

```ts
const book = { title: "TS 入门", author: "Ada", pages: 320 };
const { title, pages } = book;             // 1
const { author: writer } = book;           // 2

interface Settings { theme?: "light" | "dark"; fontSize?: number }
function readSettings(settings: Settings): string {
  const { theme = "light", fontSize = 16 } = settings;   // 3
  return `${theme}/${fontSize}`;
}
readSettings({});              // "light/16"
readSettings({ fontSize: 0 }); // "light/0" —— 0 不是 undefined，所以不用默认值

interface Book { title: string; author: string; pages: number }
function describeBook({ title, author }: Book): string {  // 4
  return `《${title}》— ${author}`;
}
```

**第 4B 周 Day 2**

```ts
const rgb: [number, number, number] = [255, 128, 0];
const [red, green, blue] = rgb;                           // 1

function minMax(values: number[]): [number, number] | undefined { // 2
  const [first] = values;
  if (first === undefined) {
    return undefined;
  }
  let min = first;
  let max = first;
  for (const value of values) {
    if (value < min) min = value;
    if (value > max) max = value;
  }
  return [min, max];
}

const range = minMax([4, 9, 1]);
if (range !== undefined) {
  const [low, high] = range;
  console.log(low, high);
}
```

第 5 题：数组解构按**位置**取值，对象解构按**属性名**取值。

**第 4B 周 Day 3**

```ts
function appendItem(items: string[], item: string): string[] {
  return [...items, item];
}

interface Task { id: string; title: string; completed: boolean }
function updateTitle(task: Task, title: string): Task {
  return { ...task, title };
}

const user = { name: "Ada", address: { city: "SG", zip: "018956" } };
const moved = { ...user, address: { ...user.address, city: "KL" } };
console.log(user.address.city); // "SG"

function average(...values: number[]): number | undefined {
  if (values.length === 0) {
    return undefined;
  }
  let total = 0;
  for (const value of values) total = total + value;
  return total / values.length;
}

function withoutId(task: Task) {
  const { id, ...rest } = task;
  return rest; // 推断为 { title: string; completed: boolean }
}
```

**第 4B 周 Day 4**

```ts
function uniqueSorted(values: string[]): string[] {
  return [...new Set(values)].sort();
}

interface Product { name: string; category: string }
function groupByCategory(products: Product[]): Map<string, Product[]> {
  const groups = new Map<string, Product[]>();
  for (const product of products) {
    const existing = groups.get(product.category) ?? [];
    groups.set(product.category, [...existing, product]);
  }
  return groups;
}

function findDuplicates(ids: string[]): string[] {
  const seen = new Set<string>();
  const duplicates = new Set<string>();
  for (const id of ids) {
    if (seen.has(id)) {
      duplicates.add(id);
    } else {
      seen.add(id);
    }
  }
  return [...duplicates];
}

// 4：JSON.stringify(Object.fromEntries(groupByCategory(products)))
```

**第 4B 周 Day 5**

```ts
function toCents(input: string): number | undefined {
  const trimmed = input.trim();
  if (trimmed === "") return undefined;
  const value = Number(trimmed);
  if (!Number.isFinite(value) || value < 0) return undefined;
  return Math.round(value * 100);
}

const formatters = {
  SGD: new Intl.NumberFormat("en-SG", { style: "currency", currency: "SGD" }),
  CNY: new Intl.NumberFormat("zh-CN", { style: "currency", currency: "CNY" }),
  USD: new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" })
};

function formatPrice(cents: number, currency: "SGD" | "CNY" | "USD"): string {
  return formatters[currency].format(cents / 100);
}

function formatDiscount(rate: number): string {
  return new Intl.NumberFormat("zh-CN", { style: "percent" }).format(rate);
}

function isValidIsoDate(text: string): boolean {
  return !Number.isNaN(new Date(text).getTime());
}

function formatOrderDate(iso: string): string {
  return new Intl.DateTimeFormat("zh-CN", { dateStyle: "medium", timeZone: "Asia/Singapore" }).format(new Date(iso));
}
```

**第 4B 周 Day 6（核心函数，报表拼接自行完成）**

```ts
function calculateOrderTotal({ items }: Order): number {
  let total = 0;
  for (const { priceInCents, quantity } of items) {
    total = total + priceInCents * quantity;
  }
  return total;
}

function totalsByCountry(orders: Order[]): Map<string, number> {
  const totals = new Map<string, number>();
  for (const order of orders) {
    const country = order.customer.country;
    totals.set(country, (totals.get(country) ?? 0) + calculateOrderTotal(order));
  }
  return totals;
}

function allTags(orders: Order[]): string[] {
  const tags = new Set<string>();
  for (const order of orders) {
    for (const tag of order.tags) tags.add(tag);
  }
  return [...tags].sort();
}

function addItem(order: Order, item: OrderItem): Order {
  return { ...order, items: [...order.items, item] };
}

function toAnonymousSummary(order: Order) {
  const { customer, ...rest } = order;
  return { ...rest, totalInCents: calculateOrderTotal(order) };
}
```

**第 5 周 Day 1B（闭包）**

```ts
function makeMultiplier(factor: number): (value: number) => number {
  return (value) => value * factor;
}
const double = makeMultiplier(2);
const triple = makeMultiplier(3);

function once(fn: () => string): () => string | undefined {
  let called = false;
  return () => {
    if (called) {
      return undefined;
    }
    called = true;
    return fn();
  };
}
```

第 5 题要点：每次调用 `createCounter()` 都会创建一份新的 `count`，返回的函数只记得自己那一份；`captured` 是在调用那一刻把值复制进局部常量，之后外部变量变化不影响它。

**第 8 周 Day 2B（事件循环）**

1. 所有同步日志 → 所有 Promise 回调（按书写顺序）→ 所有定时器回调（按书写顺序）。
2. 在 `then` 里注册的 `setTimeout` 会排在**之前已注册**的定时器之后，因为它注册得更晚。
3. 顺序是：`await` 前那行 → 调用处后面的同步行 → `await` 后那行。
5. JavaScript 在一个线程上执行；同步循环没结束，事件循环就没有机会处理点击事件。

### 8.1 第 9 周关键练习答案

#### Day 1

1. `const role = "admin"` 无法重新赋值，因此推断为字面量 `"admin"`；`let currentRole = "admin"` 以后可变为其他字符串，因此通常拓宽为 `string`。
2. `"A"` 的实际类型是 `string`，目标变量要求 `number`。
3. 模板字符串产生 `string`，但 `double` 的公开返回契约是 `number`。

#### Day 2

```ts
const languages: string[] = [
  "JavaScript",
  "TypeScript",
  "Python",
  "Rust",
  "Go"
];

const rgb: readonly [red: number, green: number, blue: number] = [255, 128, 0];

function getFirst(items: string[]): string | undefined {
  return items[0];
}

function average(scores: number[]): number | undefined {
  if (scores.length === 0) {
    return undefined;
  }

  const total = scores.reduce((sum, score) => sum + score, 0);
  return total / scores.length;
}

const sameKindA: string[] | number[] = [1, 2, 3];
const sameKindB: string[] | number[] = ["a", "b"];
const mixed: (string | number)[] = [1, "two", 3];
```

评分点：`average([])` 不能得到 `NaN`；`rgb` 的长度和位置类型固定。

#### Day 3

```ts
function getFullName(firstName: string, lastName: string): string {
  return `${firstName} ${lastName}`.trim();
}

function isAdult(age: number): boolean {
  return age >= 18;
}

function calculateTotal(
  price: number,
  quantity: number,
  discount = 0
): number {
  return price * quantity * (1 - discount);
}

function findLongest(words: string[]): string | undefined {
  let longest: string | undefined;

  for (const word of words) {
    if (longest === undefined || word.length > longest.length) {
      longest = word;
    }
  }

  return longest;
}

function mapPrices(
  prices: number[],
  formatter: (price: number) => string
): string[] {
  return prices.map(formatter);
}
```

进一步思考：类型不能保证 `discount` 在 0–1 之间，也不能保证价格非负。真实输入处仍要运行时验证。

#### Day 4

```ts
interface User {
  readonly id: string;
  name: string;
  email: string;
  avatarUrl?: string;
}

interface Admin extends User {
  permissions: string[];
}

interface Product {
  readonly id: string;
  name: string;
  price: number;
  inStock: boolean;
}

interface CartItem {
  product: Product;
  quantity: number;
}

type OrderStatus = "draft" | "submitted" | "paid" | "cancelled";

interface Order {
  readonly id: string;
  user: User;
  items: CartItem[];
  status: OrderStatus;
  createdAt: string;
}
```

题目暂时允许 `status: string`，但字面量联合更能表达业务规则，这是用下一周知识反向改进模型。

正整数在运行时校验，例如：

```ts
function assertPositiveInteger(value: number, label: string): void {
  if (!Number.isInteger(value) || value <= 0) {
    throw new Error(`${label} must be a positive integer`);
  }
}
```

#### Day 5

```ts
function getUserEmail(users: User[], id: string): string | undefined {
  return users.find((user) => user.id === id)?.email;
}

function getUserEmailLabel(users: User[], id: string): string {
  return getUserEmail(users, id) ?? "未找到邮箱";
}

function firstOrDefault(items: string[], fallback: string): string {
  return items[0] ?? fallback;
}

function requireValue(
  value: string | null | undefined,
  label: string
): string {
  if (value === null || value === undefined) {
    throw new Error(`${label} is required`);
  }

  return value;
}
```

`||` 会为 `""`、`0`、`false`、`null`、`undefined` 使用 fallback；`??` 只为 `null`、`undefined` 使用 fallback。

#### Day 6 综合题参考

```ts
interface Address {
  street: string;
  city: string;
  country: string;
  zipCode?: string;
}

interface Profile {
  readonly id: string;
  displayName: string;
  bio?: string;
  skills: string[];
}

interface Article {
  readonly id: string;
  title: string;
  content: string;
  author: Profile;
  tags: string[];
  publishedAt?: string;
}

interface InventoryItem {
  sku: string;
  name: string;
  price: number;
  stock: number;
}

interface CartLine {
  item: InventoryItem;
  quantity: number;
}

interface AppConfig {
  readonly apiBaseUrl: string;
  readonly retryCount: number;
  readonly debug: boolean;
}

type NameValuePair = readonly [name: string, value: string | number];
type Dictionary = Record<string, string>;

function formatAddress(address: Address): string {
  const postal = address.zipCode === undefined ? "" : ` ${address.zipCode}`;
  return `${address.street}, ${address.city}${postal}, ${address.country}`;
}

function calculateLineTotal(line: CartLine): number {
  return line.item.price * line.quantity;
}

function calculateCartTotal(lines: CartLine[]): number {
  return lines.reduce((total, line) => total + calculateLineTotal(line), 0);
}

function findItemBySku(
  items: InventoryItem[],
  sku: string
): InventoryItem | undefined {
  return items.find((item) => item.sku === sku);
}

function getPublishedArticles(articles: Article[]): Article[] {
  return articles.filter((article) => article.publishedAt !== undefined);
}

function updateStock(item: InventoryItem, delta: number): InventoryItem {
  return { ...item, stock: item.stock + delta };
}

function applyToEach(
  values: number[],
  operation: (value: number) => number
): number[] {
  return values.map(operation);
}

function summarizeProfile(profile: Profile): string {
  const bio = profile.bio ?? "暂无简介";
  return `${profile.displayName}：${bio}`;
}
```

17. 空数组没有元素给编译器推断意图。根据上下文和配置，它可能得到过窄或不希望的类型；声明 `const names: string[] = []` 最清楚。
18. 要么把返回值改为 `number`，要么明确格式化数字后返回字符串；选择取决于调用方需要。
19. 先检查 `first !== undefined`，或用 `??` 给默认值。
20. TypeScript 类型编译后消失；运行时浅冻结可使用 `Object.freeze(object)`，但嵌套值仍需单独处理。

### 8.2 第 10 周关键练习答案

#### 常见收窄函数

```ts
function normalizeInput(input: string | string[]): string[] {
  return Array.isArray(input) ? input : [input];
}

function formatPrimitive(value: string | number | boolean): string {
  if (typeof value === "string") {
    return value.toUpperCase();
  }

  if (typeof value === "number") {
    return value.toFixed(2);
  }

  return value ? "Yes" : "No";
}

function safeUpper(value: string | null | undefined): string {
  return value?.toUpperCase() ?? "";
}
```

#### 字符串数组守卫

```ts
function isStringArray(value: unknown): value is string[] {
  return Array.isArray(value) && value.every((item) => typeof item === "string");
}
```

#### 用户 JSON 解析

```ts
interface UserPayload {
  id: string;
  name: string;
  active: boolean;
}

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null;
}

function isUserPayload(value: unknown): value is UserPayload {
  return (
    isRecord(value) &&
    typeof value.id === "string" &&
    typeof value.name === "string" &&
    typeof value.active === "boolean"
  );
}

function parseUserJson(json: string): UserPayload {
  let value: unknown;

  try {
    value = JSON.parse(json);
  } catch {
    throw new Error("User JSON is not valid JSON");
  }

  if (!isUserPayload(value)) {
    throw new Error("User JSON has an invalid shape");
  }

  return value;
}
```

额外字段默认被接受，因为守卫只验证业务所需字段。若业务要求拒绝额外键，需要显式比较键集合；不要在没有需求时增加这层复杂性。

#### 支付可辨识联合

```ts
type PaymentState =
  | { status: "pending"; paymentId: string }
  | { status: "succeeded"; paymentId: string; receiptUrl: string }
  | { status: "failed"; paymentId: string; message: string }
  | { status: "refunded"; paymentId: string; refundedAt: string };

function describePayment(payment: PaymentState): string {
  switch (payment.status) {
    case "pending":
      return `支付 ${payment.paymentId} 处理中`;
    case "succeeded":
      return `支付成功：${payment.receiptUrl}`;
    case "failed":
      return `支付失败：${payment.message}`;
    case "refunded":
      return `已于 ${payment.refundedAt} 退款`;
    default:
      return assertNever(payment);
  }
}
```

#### Task API 项目参考核心

```ts
interface Task {
  id: string;
  title: string;
  completed: boolean;
}

type TaskResponse =
  | { status: "success"; tasks: Task[] }
  | { status: "error"; message: string };

function isTask(value: unknown): value is Task {
  return (
    isRecord(value) &&
    typeof value.id === "string" &&
    typeof value.title === "string" &&
    typeof value.completed === "boolean"
  );
}

function isTaskArray(value: unknown): value is Task[] {
  return Array.isArray(value) && value.every(isTask);
}

function parseTaskResponse(json: string): TaskResponse {
  let payload: unknown;

  try {
    payload = JSON.parse(json);
  } catch {
    return { status: "error", message: "响应不是合法 JSON" };
  }

  if (!isTaskArray(payload)) {
    return { status: "error", message: "响应不是合法任务数组" };
  }

  return { status: "success", tasks: payload };
}

function summarizeResponse(response: TaskResponse): string {
  switch (response.status) {
    case "success": {
      const completed = response.tasks.filter((task) => task.completed).length;
      return `共 ${response.tasks.length} 项，已完成 ${completed} 项`;
    }
    case "error":
      return `读取失败：${response.message}`;
    default:
      return assertNever(response);
  }
}
```

评分点：不是只测一条成功数据；至少证明 `null`、数组元素错误和 JSON 语法错误都会被拒绝。

### 8.3 第 11 周关键练习答案

#### 泛型基础

```ts
function last<T>(items: T[]): T | undefined {
  return items.at(-1);
}

function wrap<T>(value: T): { value: T } {
  return { value };
}

function pair<TLeft, TRight>(
  left: TLeft,
  right: TRight
): [TLeft, TRight] {
  return [left, right];
}

function mapArray<TInput, TOutput>(
  items: TInput[],
  transform: (item: TInput) => TOutput
): TOutput[] {
  return items.map(transform);
}

function filterDefined<T>(items: (T | undefined)[]): T[] {
  return items.filter((item): item is T => item !== undefined);
}
```

#### `pluck`

```ts
function pluck<T, K extends keyof T>(items: T[], key: K): T[K][] {
  return items.map((item) => item[key]);
}
```

#### 商品派生类型

```ts
interface Product {
  readonly id: string;
  name: string;
  price: number;
  description?: string;
  category: string;
  stock: number;
  createdAt: string;
}

type CreateProductInput = Omit<Product, "id" | "createdAt">;

type UpdateProductInput = Partial<
  Pick<Product, "name" | "price" | "description">
>;

type ProductCard = Pick<Product, "id" | "name" | "price" | "category">;

type ProductForm = Required<Pick<Product, "name" | "price" | "description">>;

type ProductById = Record<string, Product>;

type ReadonlyProductList = readonly Readonly<Product>[];
```

`ReadonlyProductList` 是浅层只读商品组成的只读数组；如果商品包含嵌套可变数组，内层仍需单独建模为只读。

#### 基础类型挑战

```ts
type MyPick<T, K extends keyof T> = {
  [P in K]: T[P];
};

type MyReadonly<T> = {
  readonly [P in keyof T]: T[P];
};

type TupleToObject<T extends readonly PropertyKey[]> = {
  [P in T[number]]: P;
};

type First<T extends readonly unknown[]> = T extends readonly [
  infer Head,
  ...unknown[]
]
  ? Head
  : never;

type Length<T extends readonly unknown[]> = T["length"];

type MyExclude<T, U> = T extends U ? never : T;

type MyAwaited<T> = T extends Promise<infer Value> ? Value : T;

type If<Condition extends boolean, Then, Else> = Condition extends true
  ? Then
  : Else;

type Concat<
  A extends readonly unknown[],
  B extends readonly unknown[]
> = [...A, ...B];

type Includes<T extends readonly unknown[], U> = T extends readonly [
  infer Head,
  ...infer Tail
]
  ? U extends Head
    ? true
    : Includes<Tail, U>
  : false;
```

这个简化 `Includes` 对某些复杂联合与结构类型并不等价于严格类型相等，但足够用于本阶段理解递归条件类型。不要把练习解答直接当通用生产工具。

#### 业务泛型函数参考

```ts
function uniqueBy<T, K>(items: readonly T[], getKey: (item: T) => K): T[] {
  const seen = new Set<K>();
  const result: T[] = [];

  for (const item of items) {
    const key = getKey(item);

    if (!seen.has(key)) {
      seen.add(key);
      result.push(item);
    }
  }

  return result;
}

function indexById<T extends { id: string }>(
  items: readonly T[]
): Record<string, T> {
  const result: Record<string, T> = {};

  for (const item of items) {
    result[item.id] = item;
  }

  return result;
}

function partition<T>(
  items: readonly T[],
  predicate: (item: T) => boolean
): [passed: T[], failed: T[]] {
  const passed: T[] = [];
  const failed: T[] = [];

  for (const item of items) {
    (predicate(item) ? passed : failed).push(item);
  }

  return [passed, failed];
}

function mapValues<T, U>(
  record: Record<string, T>,
  transform: (value: T, key: string) => U
): Record<string, U> {
  const result: Record<string, U> = {};

  for (const [key, value] of Object.entries(record)) {
    result[key] = transform(value, key);
  }

  return result;
}

function sortBy<T>(
  items: readonly T[],
  getValue: (item: T) => number
): T[] {
  return [...items].sort((left, right) => getValue(left) - getValue(right));
}
```

评分点：`sortBy` 不修改原数组；`uniqueBy` 的键类型保留；`indexById` 不假装支持任何难以转换的属性值。

### 8.4 第 12 周项目只提供评分点，不提供整份成品

天气应用和 CLI 是毕业作品。如果直接照抄完整答案，你无法验证自己是否已经能独立组合类型知识。卡住时按下面层级求助：

1. 回到对应小节，找同类而非同题示例。
2. 把问题缩成一个 10–20 行最小复现。
3. 说明“期望类型、实际类型、已尝试的收窄”。
4. 只请求错误解释或一个提示，不请求整份实现。
5. 修好后在错误日志中解释根因。

项目评分各 20 分：

| 维度 | 0 分 | 2 分 | 4 分 |
|---|---|---|---|
| 类型配置 | 非 strict | strict 但有逃避项 | strict + 两个额外安全项，能解释 |
| 数据建模 | 大量宽泛字符串/可选项 | 有接口和联合 | 互斥状态准确、类型可派生 |
| 外部边界 | 直接断言 | 部分手写检查 | unknown + 完整校验 + 失败测试 |
| 错误处理 | 崩溃/吞错 | 能显示错误 | 错误分类清晰、可恢复 |
| 可维护性 | 单文件混杂 | 基本函数拆分 | 模块职责清晰且没有过度抽象 |

每个项目至少 16/20，并满足对应最低验收，才算完成。

---

## 9. 常见错误诊断地图

不要从错误编号开始死记。先找到最内层的事实：“我给了什么，那里需要什么？”

### 9.1 六类高频错误

| 常见提示 | 它通常意味着 | 先检查什么 | 正确方向 |
|---|---|---|---|
| `Type 'X' is not assignable to type 'Y'` | 实际值不能满足目标契约 | X 从哪里来？Y 为什么这样定义？ | 改数据、改逻辑或在有证据时改契约 |
| `Argument of type 'X' is not assignable...` | 调用参数不符合函数入口 | 参数顺序、可空性、字段类型 | 在调用前转换/收窄，或纠正函数签名 |
| `Object is possibly 'undefined'` | 查询、索引或可选属性可能缺失 | 空数组、查找失败、字段可选 | 分支检查、默认值、提前返回 |
| `Property 'x' does not exist on type...` | 当前类型未证明有此属性 | 是否还是联合/`unknown`？ | 用判别字段、`in`、守卫收窄 |
| `Element implicitly has an 'any' type...` | 用宽泛字符串索引已知对象 | key 是否应是 `keyof`？ | 收窄 key、使用 `Record` 或改数据结构 |
| `Parameter implicitly has an 'any' type` | 函数入口无类型上下文 | 是否漏写参数类型？ | 标注参数或提供带类型的上下文 |

### 9.2 读超长泛型错误的顺序

第三方库错误可能嵌套很多层。按这个顺序：

1. 找你自己的文件与行号，不先读库内部几十层类型。
2. 找最先出现的 “not assignable” 或 “property is missing”。
3. 把长类型临时拆成命名变量，悬停观察中间类型。
4. 创建最小复现，只保留一个函数调用和最小数据。
5. 检查是不是联合尚未收窄、泛型推断被过宽值污染、可选字段未处理。
6. 最后才查看库文档或请求错误解释。

示例：

```ts
// 不要把所有表达式塞进一行
submit(transform(parse(rawData)));

// 拆开后观察每一步
const parsed = parse(rawData);
const transformed = transform(parsed);
submit(transformed);
```

### 9.3 红线消失但问题没解决的四种做法

#### 滥用 `any`

```ts
const response: any = await loadData();
```

问题：不安全会沿着属性访问和函数调用传播。替代：边界用 `unknown`，验证后返回业务类型。

#### 无依据断言

```ts
const user = payload as User;
```

问题：数据不会因为断言而改变。替代：类型守卫、断言函数或运行时 Schema。

#### 非空断言

```ts
const first = items[0]!;
```

问题：空数组仍然为空。替代：处理 `undefined`，或从 API 设计上要求非空元组。

```ts
type NonEmptyArray<T> = readonly [T, ...T[]];

function firstOfNonEmpty<T>(items: NonEmptyArray<T>): T {
  return items[0];
}
```

#### `@ts-ignore`

问题：永久屏蔽下一行错误，即使错误原因后来变化。替代：修复问题；若是在写“应报错”的类型测试，用带原因的 `@ts-expect-error`。

### 9.4 类型太复杂时的降级顺序

1. 把一个万能函数拆成两个具体函数。
2. 用回调选择值，而不是在类型层筛选所有合法键。
3. 用可辨识联合替代多个相互关联的泛型参数。
4. 在局部实现边界使用一个有解释的窄断言。
5. 接受少量重复，只要它比错误抽象更清楚。

能写复杂类型不等于应该写。独立 SaaS 的目标是快速、安全地维护产品。

---

## 10. 必要补充与暂缓内容

第 9–12 周优先覆盖 React / Next.js 最常用的类型能力。下面内容需要“看得懂”，但不应该挤占主项目时间。

### 10.1 `enum`：会读，应用层常量优先联合或 `as const`

你会在第三方代码中看到：

```ts
enum Direction {
  Up = "UP",
  Down = "DOWN"
}
```

与大部分类型语法不同，常规 `enum` 会产生运行时 JavaScript。应用业务状态通常可以用更贴近普通 JavaScript 的写法：

```ts
const DIRECTIONS = {
  up: "UP",
  down: "DOWN"
} as const;

type Direction = (typeof DIRECTIONS)[keyof typeof DIRECTIONS];
```

这不是“永远禁止 enum”。如果现有项目、生成代码或库 API 已使用它，保持一致即可。本阶段不需要研究 `const enum` 及其构建兼容问题。

### 10.2 类：掌握类型成员，不把 React 写成类教程

```ts
class Counter {
  private value = 0;

  constructor(public readonly label: string) {}

  increment(): number {
    this.value += 1;
    return this.value;
  }
}
```

- `public`、`protected`、`private` 是 TypeScript 的可见性检查。
- JavaScript 的 `#value` 是真正的运行时私有字段，两者不要混为一谈。
- `implements` 检查实例是否满足接口，不会自动生成实现。
- 本蓝图使用函数式 React 与对象/函数模块，暂不需要深入抽象类、装饰器或复杂继承。

练习：定义 `interface KeyValueStorage { get(key: string): string | undefined; set(key: string, value: string): void }`，写一个内存实现类。控制在 20 行左右。

### 10.3 函数重载：当调用形式明确不同

```ts
function format(input: string): string;
function format(input: number): string;
function format(input: string | number): string {
  return typeof input === "string" ? input.trim() : input.toFixed(2);
}
```

调用者看到两个精确签名，实现签名必须兼容所有重载。若返回类型不随输入变化，直接用联合参数更简单；不要为展示技巧添加重载。

### 10.4 `.d.ts` 声明文件：只有类型，没有实现

声明文件描述已存在的 JavaScript API：

```ts
declare module "legacy-package" {
  export function parse(input: string): unknown;
}
```

它不会创建 `legacy-package`，也不会做运行时校验。只有在库不自带类型、没有合适 `@types` 且你确实必须使用时，才写最小声明。禁止用：

```ts
declare module "legacy-package";
```

它通常把整个包变成 `any`，只是隐藏问题。

### 10.5 暂缓到真实需求出现时

| 内容 | 何时再学 |
|---|---|
| 复杂递归条件类型 | 看不懂库类型或需要公开通用库时 |
| 模板字面量类型高级组合 | 路由、事件名等确有字符串约束时 |
| 装饰器 | 使用明确依赖装饰器的框架时 |
| Namespace | 维护旧 TypeScript 项目时 |
| Declaration merging 深入 | 扩展第三方全局/模块类型时 |
| Project References | monorepo 类型检查明显变慢时 |
| 发布 npm 类型库 | 真正需要给外部用户消费时 |

Just-in-Time Learning 同样适用于 TypeScript。不要把会写产品推迟到“学完全部语言特性”之后。

---

## 11. 复习系统与资源

### 11.1 十二周交付日历

| 周次 | 输入 | 刻意练习 | 交付 | 升级条件 |
|---|---|---|---|---|
| 第 1 周 | 运行、值、变量、字符串、数字 | 预测输出与基础计算 | 个人名片 | 能独立创建和运行文件 |
| 第 2 周 | 比较、条件、输入转换 | 业务规则与边界表 | 价格计算器 | 能验证输入并解释分支顺序 |
| 第 3 周 | 循环、函数、作用域 | 追踪表与函数拆分 | 猜数字模拟器 | 能闭卷写基础函数与循环 |
| 第 4 周 | 字符串、数组、对象 | 求和、查找、统计 | 成绩统计器 | 能处理空数组和对象数组 |
| 第 4B 周 | 解构、展开/剩余、Map/Set、Intl | 不可变更新与分组统计 | 订单报表生成器 | 能解释浅拷贝陷阱，金额用分存储 |
| 第 5 周 | 回调与数组方法 | 同一需求用不同方法比较 | 商品/购物车统计 | 能解释 map/filter/find/reduce |
| 第 6 周 | 问题拆解、调试、不可变更新 | 最小复现和测试表 | 待办核心逻辑 | 能定位四类错误 |
| 第 7 周 | HTML、DOM、事件、存储 | 事件→状态→渲染 | 浏览器待办 | 手测表全部通过 |
| 第 8 周 | Promise、fetch、模块 | 成功/失败/非法数据 | 用户目录 | 能处理两道外部边界 |
| 第 9 周 | 推断、函数、对象、空值 | 20 道基础题 | `week-09` 练习集 | strict 零错误，无逃避语法 |
| 第 10 周 | 联合、收窄、unknown | 外部 JSON 与状态机 | Task API 解析器 | 能穷尽处理，能验证边界 |
| 第 11 周 | 泛型、keyof、工具类型 | 5 个工具函数 + 6 道挑战 | 泛型工具集 | 能解释类型关系而非背签名 |
| 第 12 周 | 配置、模块、DOM、fetch | 两种运行环境 | 天气应用 + CLI | 两项目各 ≥16/20 |

### 11.2 间隔复习安排

每个核心概念至少在 4 个时间点主动回忆：

- 当天：合上教程，用一句话解释并手写最小例子。
- 次日：5 分钟闭卷重写。
- 7 天后：在新业务场景中使用。
- 30 天后：从 React / Next.js 代码中找到真实用例。

建议建立 21 张以内的高价值卡片，不做几百张语法卡：

1. 输入→处理→输出如何拆解需求。
2. 值、变量、表达式、语句的区别。
3. 条件分支的顺序与组合条件。
4. 循环的初始值、继续条件、更新。
5. 参数、返回值、作用域。
6. 数组的求和、查找、筛选、转换模式。
6a. 解构中冒号的含义（改名，不是类型）；展开 vs 剩余。
6b. 闭包：函数记得出生时的变量；“捕获的旧值”。
6c. 事件循环：同步 → 微任务 → 一个任务。
7. 事件→状态→渲染的数据流。
8. 同步值与 Promise 的区别。
9. 类型检查与运行时校验的边界。
10. 推断和注解各适合哪里。
11. `any` / `unknown` / `never`。
12. 五种常用收窄。
13. 可辨识联合与穷尽检查。
14. `as const` / `satisfies` / 断言。
15. 泛型表达类型关系。
16. `keyof` / `T[K]` 和常用工具类型。
17. NodeNext / Bundler 的场景差异。
18. `fetch` 的 HTTP 与 JSON 两道边界。

### 11.3 每周复盘模板

```md
# TypeScript 第 N 周复盘

## 本周产出
- 仓库/目录：（填写）
- 可运行命令：（填写）
- 验收结果：（填写）

## 我现在能独立完成
- （填写）

## 仍需提示才能完成
- （填写）

## 最有价值的 3 条错误
1. 期望类型 / 实际类型 / 根因 / 修复
2.
3.

## 是否出现逃避语法
- any：
- 类型断言：
- 非空断言：
- @ts-ignore：

## 下周开始前要补的唯一薄弱点
- （填写）
```

一次只选一个薄弱点补强。不要因为一周没掌握所有边角就重学整周。

### 11.4 如何使用 AI 而不跳过学习

推荐提问模板：

```text
这是我的最小复现、运行命令和完整错误信息。
我认为输入是 ___，期望输出是 ___，实际结果是 ___。
如果是类型错误，我认为期望类型是 ___，实际类型是 ___。
请先判断它属于语法、类型、运行时还是逻辑错误，只解释我的推理哪一步错了，并给一个方向性提示；不要给最终代码。
```

代码完成后的 review 模板：

```text
请只检查以下代码的类型契约是否诚实：
1. 是否有非法状态仍可表达；
2. 是否把外部数据当成可信；
3. 泛型是否真的连接多个位置；
4. 断言是否有事实依据。
请指出问题，不要重写代码。
```

禁止把整个练习题交给 AI 生成后抄写。你需要形成的能力是读错误、收窄和建模，而不是识别看起来像答案的代码。

### 11.5 权威资源与使用顺序

主资源保持少而精：

1. [Node.js 官方下载](https://nodejs.org/en/download) 与 [TypeScript 项目安装说明](https://www.typescriptlang.org/download/)——只在环境搭建或版本问题时查。
2. [MDN JavaScript 指南](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Guide)——第 1–6 周遇到运行语法疑问时按主题查，不要求先通读。
3. [MDN 表达式与运算符](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Guide/Expressions_and_operators)、[控制流](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Guide/Control_flow_and_error_handling)、[函数](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Guide/Functions)——分别配合第 1–3 周。
4. [MDN 数组](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array)——第 4–5 周按方法名称查。
5. [MDN DOM 简介](https://developer.mozilla.org/zh-CN/docs/Web/API/Document_Object_Model/Introduction) 与 [Fetch API](https://developer.mozilla.org/zh-CN/docs/Web/API/Fetch_API/Using_Fetch)——第 7–8 周。
6. [TypeScript Handbook：The Basics](https://www.typescriptlang.org/docs/handbook/2/basic-types.html)——第 9 周按主题阅读。
7. [Everyday Types](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html)——函数、对象、联合。
8. [Narrowing](https://www.typescriptlang.org/docs/handbook/2/narrowing.html)——第 10 周主文档。
9. [Generics](https://www.typescriptlang.org/docs/handbook/2/generics.html)——第 11 周主文档。
10. [Utility Types](https://www.typescriptlang.org/docs/handbook/utility-types.html)——作为查询手册，不整页背诵。
11. [Modules](https://www.typescriptlang.org/docs/handbook/2/modules.html) 与 [Choosing Compiler Options](https://www.typescriptlang.org/docs/handbook/modules/guides/choosing-compiler-options.html)——第 12 周使用。
12. [TSConfig Reference](https://www.typescriptlang.org/tsconfig/)——遇到具体选项再查。
13. [TypeScript Playground](https://www.typescriptlang.org/play)——制作 10–20 行最小复现。
14. [type-challenges](https://github.com/type-challenges/type-challenges)——只完成本教程指定的 Easy 题，不让它取代业务项目。

阅读官方文档时使用“问题驱动”：先写下要回答的问题，读完用自己的代码验证。不要从第一页顺序读到最后一页。

### 11.6 进入 React 后继续保持的习惯

- Props 用准确对象类型，不使用 `Record<string, any>`。
- 请求状态继续使用可辨识联合。
- 事件、ref 和 DOM 空值按事实处理，不随意 `!`。
- 服务端响应、表单、URL 参数仍是外部边界，需要运行时验证。
- 优先从库导入公开类型，不复制第三方内部类型。
- 让组件使用类型，不要把所有类型堆进一个全局 `types.ts`。
- 遇到复杂泛型组件，先写具体版本，看到真实重复后再抽象。

当你能在 React 项目中自然坚持这些习惯，TypeScript 才真正从“学过的语言”变成了工程能力。
