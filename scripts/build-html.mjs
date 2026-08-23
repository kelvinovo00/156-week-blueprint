/**
 * Build dist/156-week-blueprint.html from 156-week-blueprint.md.
 * Table layout/styling: edit this file and run `npm run build` — do not hand-edit the HTML.
 */
import { mkdirSync, readFileSync, writeFileSync } from 'fs';
import { dirname, resolve } from 'path';
import { fileURLToPath } from 'url';
import { marked } from 'marked';
import { parse } from 'node-html-parser';

const repoRoot = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const sourcePath = resolve(repoRoot, '156-week-blueprint.md');
const outputPath = resolve(repoRoot, 'dist', '156-week-blueprint.html');

/** Fullwidth vertical line — looks like | in prose/code but does not split GFM tables. */
const FW_PIPE = '\uFF5C';

const STEP_MARK = /[①②③④⑤⑥⑦⑧⑨⑩⑪⑫⑬⑭⑮⑯⑰⑱⑲⑳]/;
const STEP_SPLIT = /(?=[①②③④⑤⑥⑦⑧⑨⑩⑪⑫⑬⑭⑮⑯⑰⑱⑲⑳])/;

/**
 * GFM tables treat every ASCII | as a column boundary. Long "Day N" cells use | in prose,
 * TS unions (`string | number`), footer examples (`名字 | 学习`), shell `| sh`, etc.
 * Outside `` `inline code` `` we use &#124;; inside we use U+FF5C so marked still parses the table.
 */
function encodeMidCellForGfmTable(mid) {
  let out = '';
  let i = 0;
  while (i < mid.length) {
    if (mid[i] === '`') {
      const end = mid.indexOf('`', i + 1);
      if (end === -1) {
        let rest = mid.slice(i);
        rest = rest.replace(/\\\|/g, FW_PIPE);
        rest = rest.replace(/\|/g, '&#124;');
        out += rest;
        break;
      }
      let chunk = mid.slice(i, end + 1);
      chunk = chunk.replace(/\\\|/g, FW_PIPE);
      chunk = chunk.replace(/\|/g, FW_PIPE);
      out += chunk;
      i = end + 1;
    } else {
      const next = mid.indexOf('`', i);
      const segment = next === -1 ? mid.slice(i) : mid.slice(i, next);
      let s = segment.replace(/\\\|/g, '&#124;');
      s = s.replace(/\|/g, '&#124;');
      out += s;
      i = next === -1 ? mid.length : next;
    }
  }
  return out;
}

function encodePipesInDayTaskRows(md) {
  const row = /^(\| Day \d+ \| [^|]+ \| [^|]+ \|)(.*)(\|)\s*$/;
  return md
    .split('\n')
    .map((line) => {
      const m = line.match(row);
      if (!m) return line;
      return m[1] + encodeMidCellForGfmTable(m[2]) + m[3];
    })
    .join('\n');
}

function normalizeHeader(text) {
  return text.replace(/\s+/g, ' ').trim();
}

function getTableHeaders(table) {
  const ths = table.querySelectorAll('thead th');
  if (ths.length) return ths.map((th) => normalizeHeader(th.text));
  const firstRow = table.querySelector('tr');
  if (!firstRow) return [];
  const cells = firstRow.querySelectorAll('th, td');
  return cells.map((c) => normalizeHeader(c.text));
}

function classifyTable(headers) {
  const h = headers.map((x) => x.replace(/\s/g, ''));
  if (
    headers.length === 4 &&
    h[0] === '天' &&
    h[1] === '时间' &&
    h[2] === '任务' &&
    h[3] === '具体要求'
  ) {
    return { className: 'table-day-plan', colWidths: [8, 8, 18, 66] };
  }
  if (headers.length === 2 && h[1] === '具体要求') {
    return { className: 'table-detail-col', colWidths: [28, 72] };
  }
  if (headers.length === 4 && headers.some((x) => x.includes('为什么选它'))) {
    return { className: 'table-tech-stack', colWidths: [10, 14, 42, 34] };
  }
  if (headers.length >= 5) {
    return { className: 'table-matrix', colWidths: null };
  }
  return { className: 'table-balanced', colWidths: null };
}

function colgroupHtml(widths) {
  const cols = widths.map((w) => `<col style="width:${w}%">`).join('');
  return `<colgroup>${cols}</colgroup>`;
}

/** Turn ①②③… prose in a cell into <ol class="task-steps">. */
function htmlToTaskSteps(innerHtml) {
  if (!STEP_MARK.test(innerHtml)) return innerHtml;
  const parts = innerHtml.split(STEP_SPLIT).filter((p) => p.trim());
  const items = parts
    .map((p) => p.replace(/^[①②③④⑤⑥⑦⑧⑨⑩⑪⑫⑬⑭⑮⑯⑰⑱⑲⑳]\s*/, '').trim())
    .filter(Boolean);
  if (items.length < 2) return innerHtml;
  return `<ol class="task-steps">${items.map((item) => `<li>${item}</li>`).join('')}</ol>`;
}

function enhanceTables(html) {
  const root = parse(`<div id="enhance-root">${html}</div>`, {
    blockTextElements: { script: true, style: true, pre: true },
  });
  const container = root.querySelector('#enhance-root');

  for (const table of container.querySelectorAll('table')) {
    const headers = getTableHeaders(table);
    if (!headers.length) continue;

    const { className, colWidths } = classifyTable(headers);
    table.classList.add(className);

    if (colWidths) {
      table.setAttribute('style', 'table-layout:fixed');
      const existing = table.querySelector('colgroup');
      if (existing) existing.remove();
      table.insertAdjacentHTML('afterbegin', colgroupHtml(colWidths));
    }

    if (className === 'table-day-plan') {
      const labelTexts = headers;
      for (const tr of table.querySelectorAll('tbody tr')) {
        const tds = tr.querySelectorAll('td');
        tds.forEach((td, i) => {
          if (labelTexts[i]) td.setAttribute('data-label', labelTexts[i]);
          if (i === tds.length - 1) {
            td.innerHTML = htmlToTaskSteps(td.innerHTML);
          }
        });
      }
    }
  }

  for (const table of [...container.querySelectorAll('table')]) {
    const headers = getTableHeaders(table);
    const { className } = classifyTable(headers);
    if (className !== 'table-matrix') continue;
    if (table.parentNode?.getAttribute('class') === 'table-scroll') continue;

    const wrapper = parse('<div class="table-scroll"></div>').firstChild;
    const parent = table.parentNode;
    table.remove();
    wrapper.appendChild(table);
    table.classList.add('table-matrix-inner');
    parent.appendChild(wrapper);
  }

  return container.innerHTML;
}

const mdRaw = readFileSync(sourcePath, 'utf-8');
const md = encodePipesInDayTaskRows(mdRaw);

marked.setOptions({ gfm: true, breaks: false });
const rendered = enhanceTables(marked.parse(md));

const html = `<!DOCTYPE html>
<html lang="zh-CN">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<base href="../">
<title>156 周全栈独立 SaaS 开发者学习蓝图</title>
<style>
  :root {
    --sidebar-w: 320px;
    --bg: #fff;
    --bg-sidebar: #f8f9fa;
    --text: #1a1a2e;
    --text-light: #555;
    --accent: #2563eb;
    --border: #e2e8f0;
    --hover: #eef2ff;
  }
  @media (prefers-color-scheme: dark) {
    :root {
      --bg: #0f172a;
      --bg-sidebar: #1e293b;
      --text: #e2e8f0;
      --text-light: #94a3b8;
      --accent: #60a5fa;
      --border: #334155;
      --hover: #1e3a5f;
    }
  }
  * { box-sizing: border-box; margin: 0; padding: 0; }
  body {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Noto Sans SC", sans-serif;
    color: var(--text);
    background: var(--bg);
    line-height: 1.7;
  }
  #sidebar {
    position: fixed; top: 0; left: 0;
    width: var(--sidebar-w); height: 100vh;
    background: var(--bg-sidebar);
    border-right: 1px solid var(--border);
    overflow-y: auto; padding: 16px 0; z-index: 100;
    transition: transform .25s ease;
  }
  #sidebar.collapsed { transform: translateX(calc(-1 * var(--sidebar-w))); }
  #sidebar h2 {
    font-size: 14px; padding: 0 16px 8px; color: var(--text-light);
    text-transform: uppercase; letter-spacing: .5px;
    border-bottom: 1px solid var(--border); margin-bottom: 8px;
  }
  #sidebar input {
    display: block; width: calc(100% - 32px); margin: 0 16px 8px;
    padding: 6px 10px; border: 1px solid var(--border); border-radius: 6px;
    background: var(--bg); color: var(--text); font-size: 13px; outline: none;
  }
  #sidebar input:focus { border-color: var(--accent); }
  #toc-list { list-style: none; }
  #toc-list li a {
    display: block; padding: 4px 16px; color: var(--text);
    text-decoration: none; font-size: 13px;
    border-left: 3px solid transparent;
    transition: background .15s, border-color .15s;
  }
  #toc-list li a:hover { background: var(--hover); }
  #toc-list li a.active {
    border-left-color: var(--accent); color: var(--accent);
    font-weight: 600; background: var(--hover);
  }
  #toc-list li.depth-1 a { padding-left: 16px; font-weight: 600; font-size: 14px; }
  #toc-list li.depth-2 a { padding-left: 16px; font-weight: 600; }
  #toc-list li.depth-3 a { padding-left: 28px; }
  #toc-list li.depth-4 a { padding-left: 40px; font-size: 12.5px; color: var(--text-light); }
  #toc-list li.hidden { display: none; }
  #toggle-btn {
    position: fixed; top: 12px; left: 12px; z-index: 200;
    width: 36px; height: 36px;
    border: 1px solid var(--border); border-radius: 8px;
    background: var(--bg-sidebar); color: var(--text);
    font-size: 18px; cursor: pointer;
    display: flex; align-items: center; justify-content: center;
    transition: left .25s ease;
  }
  #toggle-btn.shifted { left: calc(var(--sidebar-w) + 12px); }
  #content {
    margin-left: var(--sidebar-w); max-width: min(960px, 100%);
    padding: 40px 48px 120px; transition: margin-left .25s ease;
  }
  #content.expanded { margin-left: 0; }
  #content h1 { font-size: 2rem; margin: 2rem 0 1rem; padding-bottom: .5rem; border-bottom: 2px solid var(--border); }
  #content h2 { font-size: 1.6rem; margin: 2.5rem 0 .8rem; padding-bottom: .3rem; border-bottom: 1px solid var(--border); }
  #content h3 { font-size: 1.3rem; margin: 2rem 0 .6rem; color: var(--accent); }
  #content h4 { font-size: 1.1rem; margin: 1.6rem 0 .5rem; }
  #content p { margin: .6rem 0; }
  #content ul, #content ol { margin: .5rem 0 .5rem 1.5rem; }
  #content li { margin: .25rem 0; }
  #content blockquote {
    margin: 1rem 0; padding: 12px 20px;
    border-left: 4px solid var(--accent); background: var(--bg-sidebar);
    border-radius: 0 8px 8px 0;
  }
  #content code {
    background: var(--bg-sidebar); padding: 2px 6px;
    border-radius: 4px; font-size: .9em;
    font-family: "SF Mono", Menlo, monospace;
    word-break: break-word;
  }
  #content pre {
    background: var(--bg-sidebar); padding: 16px; border-radius: 8px;
    overflow-x: auto; margin: 1rem 0; border: 1px solid var(--border);
  }
  #content pre code { background: none; padding: 0; word-break: normal; }
  #content table {
    border-collapse: collapse; width: 100%; margin: 1rem 0; font-size: .92em;
  }
  #content th, #content td {
    border: 1px solid var(--border); padding: 8px 12px;
    text-align: left; vertical-align: top;
  }
  #content th { background: var(--bg-sidebar); font-weight: 600; }
  #content tr:hover { background: var(--hover); }
  #content table.table-balanced { table-layout: auto; }
  #content table.table-day-plan td:nth-child(1),
  #content table.table-day-plan td:nth-child(2),
  #content table.table-day-plan th:nth-child(1),
  #content table.table-day-plan th:nth-child(2) {
    white-space: nowrap;
  }
  #content table.table-day-plan td:last-child {
    background: var(--bg-sidebar);
    border-left: 3px solid var(--accent);
    line-height: 1.65;
  }
  #content table.table-day-plan .task-steps {
    margin: 0; padding-left: 1.35rem; list-style: decimal;
  }
  #content table.table-day-plan .task-steps li {
    margin: .55rem 0; padding-left: .2rem;
  }
  #content table.table-day-plan .task-steps li::marker {
    color: var(--accent); font-weight: 600;
  }
  #content table.table-detail-col td:first-child {
    font-weight: 600; white-space: nowrap; width: 28%;
  }
  #content .table-scroll {
    overflow-x: auto; -webkit-overflow-scrolling: touch;
    margin: 1rem 0; border: 1px solid var(--border); border-radius: 8px;
  }
  #content .table-scroll .table-matrix-inner {
    margin: 0; font-size: .85em; min-width: 720px;
  }
  #content hr { border: none; border-top: 1px solid var(--border); margin: 2rem 0; }
  #content a { color: var(--accent); }
  #content img { max-width: 100%; }
  #content input[type="checkbox"] { margin-right: 6px; }
  #content strong { font-weight: 700; }
  #progress {
    position: fixed; top: 0; left: 0; width: 0; height: 3px;
    background: var(--accent); z-index: 300; transition: width .1s;
  }
  #back-top {
    position: fixed; bottom: 24px; right: 24px;
    width: 40px; height: 40px; border-radius: 50%;
    background: var(--accent); color: #fff; border: none;
    font-size: 20px; cursor: pointer; opacity: 0;
    transition: opacity .3s;
    display: flex; align-items: center; justify-content: center;
  }
  #back-top.visible { opacity: 1; }
  @media (max-width: 900px) {
    :root { --sidebar-w: 280px; }
    #content { padding: 24px 20px 80px; }
    #sidebar { transform: translateX(calc(-1 * var(--sidebar-w))); }
    #sidebar.open { transform: translateX(0); }
    #content { margin-left: 0; }
    #toggle-btn { left: 12px; }
    #toggle-btn.shifted { left: 12px; }
    #content table.table-day-plan { display: block; border: none; }
    #content table.table-day-plan thead { display: none; }
    #content table.table-day-plan tbody { display: block; }
    #content table.table-day-plan tr {
      display: block; margin-bottom: 14px; padding: 0;
      border: 1px solid var(--border); border-radius: 8px;
      overflow: hidden; background: var(--bg);
    }
    #content table.table-day-plan tr:hover { background: var(--bg); }
    #content table.table-day-plan td {
      display: block; width: 100% !important; border: none;
      border-bottom: 1px solid var(--border); padding: 10px 14px;
      white-space: normal;
    }
    #content table.table-day-plan td:last-child {
      border-bottom: none; border-left: none;
      background: var(--bg-sidebar);
    }
    #content table.table-day-plan td::before {
      content: attr(data-label);
      display: block; font-weight: 600; font-size: .8em;
      color: var(--accent); text-transform: uppercase;
      letter-spacing: .03em; margin-bottom: 4px;
    }
    #content table.table-day-plan td:last-child::before {
      font-size: .85em; margin-bottom: 8px;
    }
  }
</style>
</head>
<body>
<div id="progress"></div>
<button id="toggle-btn" class="shifted" title="Toggle sidebar">&#9776;</button>
<nav id="sidebar">
  <h2>大纲目录</h2>
  <input id="toc-filter" type="text" placeholder="搜索目录…">
  <ul id="toc-list"></ul>
</nav>
<div id="content">${rendered}</div>
<button id="back-top" title="回到顶部">&#8593;</button>
<script>
const headings = document.querySelectorAll('#content h1, #content h2, #content h3, #content h4');
const tocList = document.getElementById('toc-list');
const tocItems = [];

headings.forEach((h, i) => {
  const id = 'heading-' + i;
  h.id = id;
  const depth = parseInt(h.tagName[1]);
  const li = document.createElement('li');
  li.className = 'depth-' + depth;
  const a = document.createElement('a');
  a.href = '#' + id;
  a.textContent = h.textContent;
  a.addEventListener('click', e => {
    e.preventDefault();
    h.scrollIntoView({ behavior: 'smooth', block: 'start' });
    if (window.innerWidth <= 900) document.getElementById('sidebar').classList.remove('open');
  });
  li.appendChild(a);
  tocList.appendChild(li);
  tocItems.push({ li, a, text: h.textContent.toLowerCase(), id, el: h });
});

document.getElementById('toc-filter').addEventListener('input', e => {
  const q = e.target.value.toLowerCase();
  tocItems.forEach(item => {
    item.li.classList.toggle('hidden', q && !item.text.includes(q));
  });
});

let ticking = false;
function updateActive() {
  let current = tocItems[0];
  const scrollY = window.scrollY + 80;
  for (const item of tocItems) {
    if (item.el.offsetTop <= scrollY) current = item;
  }
  tocItems.forEach(t => t.a.classList.remove('active'));
  if (current) {
    current.a.classList.add('active');
    current.a.scrollIntoView({ block: 'nearest', behavior: 'smooth' });
  }
  const docH = document.documentElement.scrollHeight - window.innerHeight;
  document.getElementById('progress').style.width = (window.scrollY / docH * 100) + '%';
  document.getElementById('back-top').classList.toggle('visible', window.scrollY > 600);
}
window.addEventListener('scroll', () => {
  if (!ticking) { ticking = true; requestAnimationFrame(() => { updateActive(); ticking = false; }); }
});
updateActive();

const sidebar = document.getElementById('sidebar');
const toggleBtn = document.getElementById('toggle-btn');
const content = document.getElementById('content');
toggleBtn.addEventListener('click', () => {
  if (window.innerWidth <= 900) {
    sidebar.classList.toggle('open');
  } else {
    sidebar.classList.toggle('collapsed');
    toggleBtn.classList.toggle('shifted');
    content.classList.toggle('expanded');
  }
});

document.getElementById('back-top').addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});
</script>
</body>
</html>`;

mkdirSync(dirname(outputPath), { recursive: true });
writeFileSync(outputPath, html, 'utf-8');
console.log('Done! => dist/156-week-blueprint.html (' + (html.length / 1024).toFixed(0) + ' KB)');
