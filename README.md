# Nengbo Zhang · 张能波

A compact bilingual academic homepage with a separate project page. Static HTML, CSS and JavaScript; no build step, external fonts, dependencies, analytics or account tracking.

## Files / 文件

- `index.html`: education and five published papers, with verified original publication links.
- `projects.html`: research projects, engineering contributions, repository links and technical skills.
- `styles.css`: responsive editorial layout, keyboard focus, reduced-motion and print styles.
- `script.js`: Chinese/English display, page-specific metadata and project filters.

首页主要展示教育经历与发表论文；技术能力、工程内容及研究项目集中在“项目介绍”页面。

## Language / 语言

Chinese is the default whenever a plain page URL is opened. Use the visible **中文 / English** buttons to select a language. English selection adds `?lang=en` to the URL and follows navigation between the two pages. No old browser-stored preference can override the Chinese default.

直接打开网站默认中文；点击 English 后，当前链接和页面导航保留 `?lang=en`。选择中文会移除此参数。网页不依赖浏览器本地存储。

## Deploy / 发布

Upload these files to the root of `zhangnengbo98.github.io`. In GitHub **Settings → Pages**, choose **Deploy from a branch → main → / (root)**. The site is served at <https://zhangnengbo98.github.io/>.

将文件上传至仓库根目录，在 **Settings → Pages** 选择 `main` 分支与根目录。无需安装 Node.js 或运行构建命令。

## Edit / 更新

Update default Chinese content in each HTML page and matching Chinese/English keys in the `translations` object in `script.js`. Keep project category counts consistent with cards. Update `sitemap.xml` when adding a page. Publication links use verified DOI records; retain original scholarly titles except the bilingual title supplied by the Chinese journal.

新增或修改项目时，同时维护 HTML 默认中文内容与脚本中的双语文本；若新增项目，更新筛选计数。技术栈与项目详情均可直接编辑。

## Content and design provenance / 来源

Education and project facts come from the owner's supplied CV. Five published papers were verified against publisher/journal metadata. MoCom is the latest publication: Nengbo Zhang, Hann Woei Ho and Ye Zhou, “MoCom: Motion-Based Inter-MAV Visual Communication Using Event Vision and Spiking Neural Networks,” IEEE Transactions on Robotics, 42: 1680–1694, 2026, [DOI](https://doi.org/10.1109/TRO.2026.3677077). Its title, author order, year, volume and pages were checked against [IEEE's Crossref deposit](https://api.crossref.org/works/10.1109/TRO.2026.3677077); only the verified publication year is displayed, not the DOI registration date. Other submission-only research is not labeled as published. The USM entry records its July 2024 start without inferring a graduation date or present enrollment status. MobiAct and MAVR-Net point to the owner's GitHub forks and retain that attribution. No phone number, private contact data or invented performance claims are published.

The design follows PaperBanana's Retriever → Planner → Stylist → Visualizer → Critic sequence using the native Codex HTML/CSS rendering path. Abstract CSS compositions are decorative, not research data, experimental results or scientific method diagrams. No upstream image model or external rendering API is used.

页面内容以个人简历和已核实的出版信息为依据；不推断论文当前投稿状态，不展示私人联系电话，不编造性能指标。采用 PaperBanana 原生 HTML/CSS 流程，不调用外部图像生成服务。
