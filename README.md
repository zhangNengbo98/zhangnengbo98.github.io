# Nengbo Zhang · 张能波

A bilingual personal portfolio focused on projects and technical practice. Native HTML, CSS and JavaScript; no build step, dependencies, analytics or external fonts.

## Files / 文件

- `index.html`: semantic page structure and complete Chinese content available without JavaScript.
- `styles.css`: responsive editorial layout, keyboard focus, reduced-motion and print styles.
- `script.js`: Chinese/English text, saved language preference and project filters.

## Deploy / 发布

Upload these files to the root of `zhangnengbo98.github.io`. In GitHub **Settings → Pages**, choose **Deploy from a branch → main → / (root)**. The site is served at <https://zhangnengbo98.github.io/>.

将文件上传至仓库根目录，在 **Settings → Pages** 选择 `main` 分支与根目录。无需安装 Node.js 或运行构建命令。

## Edit / 更新

Update the Chinese default content in `index.html` and matching Chinese/English keys in the `translations` object in `script.js`. Keep project category counts consistent with cards. The GitHub profile and research repository links are in `index.html`.

新增或修改项目时，同时维护 HTML 默认中文内容与脚本中的双语文本；若新增项目，更新筛选计数。技术栈与项目详情均可直接编辑。

## Content and design provenance / 来源

Project facts are grounded in the owner's supplied CV. Research topics are not presented as currently accepted publications. MobiAct and MAVR-Net links point to the owner's GitHub forks and are labeled accordingly. No phone number, private contact information or fabricated performance metrics are included.

The design follows PaperBanana's Retriever → Planner → Stylist → Visualizer → Critic sequence using the native Codex HTML/CSS rendering path. Abstract CSS compositions are decorative, not research data, experimental results or scientific method diagrams. No upstream image model or external rendering API is used.

页面内容以个人提供的简历为依据；不推断论文当前投稿状态，不展示私人联系电话，不编造性能指标。装饰性构图由 CSS 原生绘制，不代表实验数据。语言偏好仅保存在浏览器本地。
