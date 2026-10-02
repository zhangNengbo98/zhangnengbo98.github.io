(() => {
  'use strict';
  const translations = {
    zh: {
      skip: '跳转到主要内容', brandAria: '张能波，返回首页', brandSubtitle: '教育 · 论文 · 项目', navigation: '主要导航', navHome: '首页', navProjects: '项目介绍', navTechnology: '技术', languageAria: '选择显示语言',
      homeEyebrow: '个人主页', homeIntro: '教育经历与已发表论文。', homeEducation: '教育经历', homePublications: '发表论文', homeProjectLink: '查看项目介绍', pubLabel: '已发表', pubTrackingVenue: '《信号处理》', pubTrackingTitle: 'Lasso约束下融和光流信息的DCF目标跟踪算法',
      educationUsm: '马来西亚理科大学', educationUsmDegree: '航空航天工程 · 硕士课程', educationUsmDate: '2024.07 入学', educationShenzhen: '深圳大学', educationShenzhenDegree: '信息与通信工程 · 工学硕士', educationShenzhenDate: '2016.09 — 2019.07', educationJiangxi: '江西理工大学', educationJiangxiDegree: '软件工程 · 工学学士', educationJiangxiDate: '2012.10 — 2016.07',
      heroLine1: '让感知算法，', heroLine2: '走进真实世界。', name: '张能波', heroDescription: '探索视觉与无线信号中的信息，以深度学习构建感知能力，并将模型转化为可运行的工程系统。', explore: '探索我的项目', focusVision: '计算机视觉', focusSensing: '智能感知', focusDeployment: '模型部署',
      selectedWork: '项目与技术实践', projectsTitle: '项目介绍', projectsIntro: '研究方法、个人贡献与工程实现。', filterAria: '按项目类型筛选', filterAll: '全部', filterResearch: '研究', filterEngineering: '工程', workNote: 'RESEARCH × IMPLEMENTATION', engineeringLabel: '工程实践', researchLabel: '研究探索', projectTags: '项目技术', methodContribution: '方法与贡献',
      oreTitle: '深度度量学习\n矿石分选系统', oreDescription: '从样本不足的矿物识别问题出发，将 Triplet Network 与 GPU 部署结合，推动分选算法的工程落地。', oreDetail1: '负责分选框架搭建与更新，针对业务需求选择合适的深度学习方法。', oreDetail2: '使用 Triplet Network 应对特殊矿物样本不足；进行 PyTorch 模型格式转换、TensorRT 部署及 NVIDIA 硬件优化。', oreDetail3: '替换原有 Caffe 模型，维护 GPU 服务器，并持续迭代分选模块。',
      mocomTitle: '事件视觉与\n微型飞行器通信', mocomDescription: '围绕微型飞行器（MAV）的运动视觉通信，探索事件视觉与脉冲神经网络的结合。', mocomDetail1: 'MoCom 的研究主题为基于运动的微型飞行器间视觉通信。', mocomDetail2: '技术路径结合事件视觉与脉冲神经网络，关联研究兴趣包括 MAV 动作识别与事件视觉目标跟踪。',
      wifiTitle: 'WiFi 信号\n手语短语识别', wifiDescription: '采集与处理 WiFi CSI 信号，通过深度神经网络学习手语短语中的时序信息。', wifiDetail1: '参与 CSI 数据采集与预处理、神经网络训练调优、实验分析及论文写作。', wifiDetail2: '相关成果 Wi-Phrase: Deep Residual-MultiHead Model for WiFi Sign Language Phrase Recognition 发表于 IEEE Internet of Things Journal（2022）。',
      trackingTitle: '多特征融合\n视觉目标跟踪', trackingDescription: '将深度特征、HOG 与稀疏光流统一到跟踪框架中，兼顾运动描述与 GPU 实时实现。', trackingDetail1: '引入稀疏光流作为目标特征描述，融合 VGG 网络特征、HOG 特征与运动信息。', trackingDetail2: '优化特征组合与 GPU 跟踪实现；相关研究发表于《信号处理》（2019）。', relatedCode: '相关研究项目仓库', mavrNote: '多视角 MAV 动作识别 · GitHub Fork', mobiactNote: '轻量化 MAV 动作识别 · GitHub Fork',
      toolkitLabel: 'TECHNICAL TOOLKIT / 技术栈', techLine1: '理解信号。', techLine2: '构建模型。', techLine3: '落地系统。', techIntro: '从研究方法到工程实现，关注模型、数据与运行环境之间的完整链路。', skillPerception: '视觉与智能感知', perceptionDescription: '事件视觉、目标跟踪、无线信号感知与 MAV 动作识别。', skillLearning: '深度学习与建模', learningDescription: '神经网络训练与实验分析，度量学习与脉冲神经网络。', skillEngineering: '部署与工程实现', engineeringDescription: '模型格式转换、GPU 推理优化与 C++ 算法集成。', footerTitle: '项目与技术，持续打磨。', visitGithub: '在 GitHub 上查看', footerNote: '专注感知、学习与工程实践。', backToTop: '回到顶部 ↑'
    },
    en: {
      skip: 'Skip to main content', brandAria: 'Nengbo Zhang, back to home', brandSubtitle: 'Education · Publications · Projects', navigation: 'Main navigation', navHome: 'Home', navProjects: 'Project introductions', navTechnology: 'Technology', languageAria: 'Choose display language',
      homeEyebrow: 'Personal homepage', homeIntro: 'Education and published research.', homeEducation: 'Education', homePublications: 'Publications', homeProjectLink: 'Explore project introductions', pubLabel: 'Published', pubTrackingVenue: 'Journal of Signal Processing', pubTrackingTitle: 'DCF Visual Object Tracking Algorithm with Lasso Constraints and Fusion Optical Flow',
      educationUsm: 'Universiti Sains Malaysia', educationUsmDegree: 'Aerospace Engineering · Master’s programme', educationUsmDate: 'Started Jul 2024', educationShenzhen: 'Shenzhen University', educationShenzhenDegree: 'Information and Communication Engineering · M.Eng.', educationShenzhenDate: 'Sep 2016 — Jul 2019', educationJiangxi: 'Jiangxi University of Science and Technology', educationJiangxiDegree: 'Software Engineering · B.Eng.', educationJiangxiDate: 'Oct 2012 — Jul 2016',
      heroLine1: 'Intelligent sensing.', heroLine2: 'Real-world systems.', name: 'Nengbo Zhang', heroDescription: 'Exploring information in visual and wireless signals, building perception with deep learning, and turning models into working engineering systems.', explore: 'Explore my work', focusVision: 'Computer vision', focusSensing: 'Intelligent sensing', focusDeployment: 'Model deployment',
      selectedWork: 'Projects & technical practice', projectsTitle: 'Project introductions', projectsIntro: 'Research methods, contributions, and engineering implementation.', filterAria: 'Filter projects by type', filterAll: 'All', filterResearch: 'Research', filterEngineering: 'Engineering', workNote: 'RESEARCH × IMPLEMENTATION', engineeringLabel: 'ENGINEERING', researchLabel: 'RESEARCH', projectTags: 'Project technologies', methodContribution: 'Methods & contributions',
      oreTitle: 'Deep metric learning\nfor ore sorting', oreDescription: 'Addressing limited-sample mineral recognition with a triplet network and GPU deployment to bring sorting algorithms into production.', oreDetail1: 'Built and updated the sorting framework, selecting deep learning methods to meet business requirements.', oreDetail2: 'Applied a triplet network to limited-sample mineral recognition; converted PyTorch models, deployed with TensorRT, and optimized for NVIDIA hardware.', oreDetail3: 'Replaced legacy Caffe models, maintained GPU servers, and iterated on sorting modules.',
      mocomTitle: 'Event vision for\ninter-MAV communication', mocomDescription: 'Exploring event vision and spiking neural networks for motion-based visual communication between micro aerial vehicles (MAVs).', mocomDetail1: 'MoCom investigates motion-based visual communication between micro aerial vehicles.', mocomDetail2: 'The research combines event vision with spiking neural networks. Related interests include MAV action recognition and event-based object tracking.',
      wifiTitle: 'Sign language phrases\nfrom WiFi signals', wifiDescription: 'Collecting and processing WiFi CSI signals, then learning temporal information in sign language phrases with deep neural networks.', wifiDetail1: 'Contributed to CSI acquisition and preprocessing, neural network training and tuning, experimental analysis, and paper writing.', wifiDetail2: 'The related paper, Wi-Phrase: Deep Residual-MultiHead Model for WiFi Sign Language Phrase Recognition, appeared in IEEE Internet of Things Journal (2022).',
      trackingTitle: 'Visual tracking with\nfeature fusion', trackingDescription: 'Combining deep features, HOG, and sparse optical flow in a unified tracking framework, with motion representation and GPU implementation.', trackingDetail1: 'Integrated sparse optical flow as a target descriptor and fused VGG features, HOG features, and motion information.', trackingDetail2: 'Optimized feature fusion and GPU tracking. Related research appeared in the Journal of Signal Processing (2019).', relatedCode: 'RELATED PROJECT REPOSITORIES', mavrNote: 'Multi-view MAV action recognition · GitHub fork', mobiactNote: 'Lightweight MAV action recognition · GitHub fork',
      toolkitLabel: 'TECHNICAL TOOLKIT', techLine1: 'Understand signals.', techLine2: 'Build models.', techLine3: 'Deploy systems.', techIntro: 'Working across the full chain of research methods, data, models, and runtime environments.', skillPerception: 'Vision & intelligent sensing', perceptionDescription: 'Event vision, object tracking, wireless sensing, and MAV action recognition.', skillLearning: 'Deep learning & modeling', learningDescription: 'Network training, experimental analysis, metric learning, and spiking neural networks.', skillEngineering: 'Deployment & engineering', engineeringDescription: 'Model conversion, GPU inference optimization, and C++ algorithm integration.', footerTitle: 'Projects. Technology. Always evolving.', visitGithub: 'Explore on GitHub', footerNote: 'Perception, learning, and engineering.', backToTop: 'Back to top ↑'
    }
  };
  const page = document.body.dataset.page === 'projects' ? 'projects' : 'home';
  const metadata = {
    home: {
      zh: { title: '张能波｜教育经历与发表论文', description: '张能波的个人主页：教育经历与已发表论文。' },
      en: { title: 'Nengbo Zhang | Education & Publications', description: 'The education and published research of Nengbo Zhang.' }
    },
    projects: {
      zh: { title: '项目介绍｜张能波', description: '张能波的研究项目、工程实践与技术栈。' },
      en: { title: 'Project introductions | Nengbo Zhang', description: 'Research projects, engineering practice, and technical skills by Nengbo Zhang.' }
    }
  };
  let language = 'zh';
  let activeFilter = 'all';
  const languageButton = document.getElementById('language-toggle');
  const languageChoices = [...document.querySelectorAll('[data-language]')];
  const cards = [...document.querySelectorAll('.project-card')];
  const filters = [...document.querySelectorAll('.filter')];
  const status = document.getElementById('filter-status');

  function announceFilter() {
    if (!status) return;
    const count = cards.filter(card => !card.hidden).length;
    status.textContent = language === 'zh' ? `显示 ${count} 个项目。` : `Showing ${count} ${count === 1 ? 'project' : 'projects'}.`;
  }

  function setLanguage(nextLanguage, updateUrl = true) {
    language = nextLanguage === 'en' ? 'en' : 'zh';
    const dictionary = translations[language];
    document.documentElement.lang = language === 'en' ? 'en' : 'zh-CN';
    document.querySelectorAll('[data-i18n]').forEach(element => {
      const text = dictionary[element.dataset.i18n];
      if (typeof text !== 'string') return;
      element.replaceChildren();
      text.split('\n').forEach((line, index) => {
        if (index) element.append(document.createElement('br'));
        element.append(document.createTextNode(line));
      });
    });
    document.querySelectorAll('[data-i18n-aria]').forEach(element => {
      const label = dictionary[element.dataset.i18nAria];
      if (label) element.setAttribute('aria-label', label);
    });
    languageChoices.forEach(button => {
      const selected = button.dataset.language === language;
      button.setAttribute('aria-pressed', String(selected));
      button.classList.toggle('active', selected);
    });
    if (languageButton) {
      languageButton.setAttribute('aria-label', language === 'zh' ? 'Switch to English' : '切换为中文');
      const legacyLabel = document.getElementById('language-label');
      if (legacyLabel) legacyLabel.textContent = language === 'zh' ? 'EN' : '中文';
    }
    document.title = metadata[page][language].title;
    const setMeta = (selector, content) => { const element = document.querySelector(selector); if (element) element.content = content; };
    setMeta('meta[name="description"]', metadata[page][language].description);
    setMeta('meta[property="og:title"]', document.title);
    setMeta('meta[property="og:description"]', metadata[page][language].description);
    setMeta('meta[property="og:locale"]', language === 'zh' ? 'zh_CN' : 'en_US');
    document.querySelectorAll('[data-page-link]').forEach(link => {
      if (!link.dataset.baseHref) link.dataset.baseHref = link.getAttribute('href');
      const destination = new URL(link.dataset.baseHref, window.location.href);
      if (language === 'en') destination.searchParams.set('lang', 'en');
      else destination.searchParams.delete('lang');
      link.href = destination.pathname + destination.search + destination.hash;
    });
    announceFilter();
    if (updateUrl) {
      const current = new URL(window.location.href);
      if (language === 'en') current.searchParams.set('lang', 'en');
      else current.searchParams.delete('lang');
      try { window.history.replaceState(null, '', current.pathname + current.search + current.hash); }
      catch (_) { /* Language selection still works for local file previews. */ }
    }
  }

  function setFilter(filter) {
    activeFilter = filter;
    cards.forEach(card => { card.hidden = filter !== 'all' && card.dataset.category !== filter; });
    filters.forEach(button => {
      const active = button.dataset.filter === activeFilter;
      button.classList.toggle('active', active);
      button.setAttribute('aria-pressed', String(active));
    });
    announceFilter();
  }

  if (languageButton) languageButton.addEventListener('click', () => setLanguage(language === 'zh' ? 'en' : 'zh'));
  languageChoices.forEach(button => button.addEventListener('click', () => setLanguage(button.dataset.language)));
  filters.forEach(button => button.addEventListener('click', () => setFilter(button.dataset.filter)));
  const copyrightYear = document.getElementById('copyright-year');
  if (copyrightYear) copyrightYear.textContent = String(new Date().getFullYear());
  // A plain URL always defaults to Chinese, regardless of any old saved preference.
  // Explicit English selection travels between pages via ?lang=en.
  setLanguage(new URLSearchParams(window.location.search).get('lang') === 'en' ? 'en' : 'zh', false);
})();
