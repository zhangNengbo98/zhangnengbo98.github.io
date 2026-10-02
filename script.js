(() => {
  'use strict';
  const translations = {
    zh: {
      skip: '跳转到主要内容', brandAria: '张能波，返回首页', brandSubtitle: '个人项目 · 技术实践', navigation: '主要导航', navProjects: '项目', navTechnology: '技术',
      heroLine1: '让感知算法，', heroLine2: '走进真实世界。', name: '张能波', heroDescription: '探索视觉与无线信号中的信息，以深度学习构建感知能力，并将模型转化为可运行的工程系统。', explore: '探索我的项目', focusVision: '计算机视觉', focusSensing: '智能感知', focusDeployment: '模型部署',
      selectedWork: 'SELECTED WORK / 精选项目', projectsTitle: '从研究问题，到实际系统。', projectsIntro: '聚焦算法方法、个人贡献与工程实践，呈现四个不同感知场景中的技术探索。', filterAria: '按项目类型筛选', filterAll: '全部', filterResearch: '研究', filterEngineering: '工程', workNote: 'RESEARCH × IMPLEMENTATION', engineeringLabel: '工程实践', researchLabel: '研究探索', projectTags: '项目技术', methodContribution: '方法与贡献',
      oreTitle: '深度度量学习\n矿石分选系统', oreDescription: '从样本不足的矿物识别问题出发，将 Triplet Network 与 GPU 部署结合，推动分选算法的工程落地。', oreDetail1: '负责分选框架搭建与更新，针对业务需求选择合适的深度学习方法。', oreDetail2: '使用 Triplet Network 应对特殊矿物样本不足；进行 PyTorch 模型格式转换、TensorRT 部署及 NVIDIA 硬件优化。', oreDetail3: '替换原有 Caffe 模型，维护 GPU 服务器，并持续迭代分选模块。',
      mocomTitle: '事件视觉与\n微型飞行器通信', mocomDescription: '围绕微型飞行器（MAV）的运动视觉通信，探索事件视觉与脉冲神经网络的结合。', mocomDetail1: 'MoCom 的研究主题为基于运动的微型飞行器间视觉通信。', mocomDetail2: '技术路径结合事件视觉与脉冲神经网络，关联研究兴趣包括 MAV 动作识别与事件视觉目标跟踪。',
      wifiTitle: 'WiFi 信号\n手语短语识别', wifiDescription: '采集与处理 WiFi CSI 信号，通过深度神经网络学习手语短语中的时序信息。', wifiDetail1: '参与 CSI 数据采集与预处理、神经网络训练调优、实验分析及论文写作。', wifiDetail2: '相关成果 Wi-Phrase: Deep Residual-MultiHead Model for WiFi Sign Language Phrase Recognition 发表于 IEEE Internet of Things Journal（2022）。',
      trackingTitle: '多特征融合\n视觉目标跟踪', trackingDescription: '将深度特征、HOG 与稀疏光流统一到跟踪框架中，兼顾运动描述与 GPU 实时实现。', trackingDetail1: '引入稀疏光流作为目标特征描述，融合 VGG 网络特征、HOG 特征与运动信息。', trackingDetail2: '优化特征组合与 GPU 跟踪实现；相关研究发表于《信号处理》（2019）。', relatedCode: '相关研究项目仓库', mavrNote: '多视角 MAV 动作识别 · GitHub Fork', mobiactNote: '轻量化 MAV 动作识别 · GitHub Fork',
      toolkitLabel: 'TECHNICAL TOOLKIT / 技术栈', techLine1: '理解信号。', techLine2: '构建模型。', techLine3: '落地系统。', techIntro: '从研究方法到工程实现，关注模型、数据与运行环境之间的完整链路。', skillPerception: '视觉与智能感知', perceptionDescription: '事件视觉、目标跟踪、无线信号感知与 MAV 动作识别。', skillLearning: '深度学习与建模', learningDescription: '神经网络训练与实验分析，度量学习与脉冲神经网络。', skillEngineering: '部署与工程实现', engineeringDescription: '模型格式转换、GPU 推理优化与 C++ 算法集成。', footerTitle: '项目与技术，持续打磨。', visitGithub: '在 GitHub 上查看', footerNote: '专注感知、学习与工程实践。', backToTop: '回到顶部 ↑'
    },
    en: {
      skip: 'Skip to main content', brandAria: 'Nengbo Zhang, back to home', brandSubtitle: 'PROJECTS · TECHNOLOGY', navigation: 'Main navigation', navProjects: 'Projects', navTechnology: 'Technology',
      heroLine1: 'Intelligent sensing.', heroLine2: 'Real-world systems.', name: 'Nengbo Zhang', heroDescription: 'Exploring information in visual and wireless signals, building perception with deep learning, and turning models into working engineering systems.', explore: 'Explore my work', focusVision: 'Computer vision', focusSensing: 'Intelligent sensing', focusDeployment: 'Model deployment',
      selectedWork: 'SELECTED WORK / PROJECTS', projectsTitle: 'From research to real systems.', projectsIntro: 'Methods, contributions, and engineering practice across four distinct perception challenges.', filterAria: 'Filter projects by type', filterAll: 'All', filterResearch: 'Research', filterEngineering: 'Engineering', workNote: 'RESEARCH × IMPLEMENTATION', engineeringLabel: 'ENGINEERING', researchLabel: 'RESEARCH', projectTags: 'Project technologies', methodContribution: 'Methods & contributions',
      oreTitle: 'Deep metric learning\nfor ore sorting', oreDescription: 'Addressing limited-sample mineral recognition with a triplet network and GPU deployment to bring sorting algorithms into production.', oreDetail1: 'Built and updated the sorting framework, selecting deep learning methods to meet business requirements.', oreDetail2: 'Applied a triplet network to limited-sample mineral recognition; converted PyTorch models, deployed with TensorRT, and optimized for NVIDIA hardware.', oreDetail3: 'Replaced legacy Caffe models, maintained GPU servers, and iterated on sorting modules.',
      mocomTitle: 'Event vision for\ninter-MAV communication', mocomDescription: 'Exploring event vision and spiking neural networks for motion-based visual communication between micro aerial vehicles (MAVs).', mocomDetail1: 'MoCom investigates motion-based visual communication between micro aerial vehicles.', mocomDetail2: 'The research combines event vision with spiking neural networks. Related interests include MAV action recognition and event-based object tracking.',
      wifiTitle: 'Sign language phrases\nfrom WiFi signals', wifiDescription: 'Collecting and processing WiFi CSI signals, then learning temporal information in sign language phrases with deep neural networks.', wifiDetail1: 'Contributed to CSI acquisition and preprocessing, neural network training and tuning, experimental analysis, and paper writing.', wifiDetail2: 'The related paper, Wi-Phrase: Deep Residual-MultiHead Model for WiFi Sign Language Phrase Recognition, appeared in IEEE Internet of Things Journal (2022).',
      trackingTitle: 'Visual tracking with\nfeature fusion', trackingDescription: 'Combining deep features, HOG, and sparse optical flow in a unified tracking framework, with motion representation and GPU implementation.', trackingDetail1: 'Integrated sparse optical flow as a target descriptor and fused VGG features, HOG features, and motion information.', trackingDetail2: 'Optimized feature fusion and GPU tracking. Related research appeared in the Journal of Signal Processing (2019).', relatedCode: 'RELATED PROJECT REPOSITORIES', mavrNote: 'Multi-view MAV action recognition · GitHub fork', mobiactNote: 'Lightweight MAV action recognition · GitHub fork',
      toolkitLabel: 'TECHNICAL TOOLKIT', techLine1: 'Understand signals.', techLine2: 'Build models.', techLine3: 'Deploy systems.', techIntro: 'Working across the full chain of research methods, data, models, and runtime environments.', skillPerception: 'Vision & intelligent sensing', perceptionDescription: 'Event vision, object tracking, wireless sensing, and MAV action recognition.', skillLearning: 'Deep learning & modeling', learningDescription: 'Network training, experimental analysis, metric learning, and spiking neural networks.', skillEngineering: 'Deployment & engineering', engineeringDescription: 'Model conversion, GPU inference optimization, and C++ algorithm integration.', footerTitle: 'Projects. Technology. Always evolving.', visitGithub: 'Explore on GitHub', footerNote: 'Perception, learning, and engineering.', backToTop: 'Back to top ↑'
    }
  };
  const description = {
    zh: '张能波的个人项目与技术：计算机视觉、智能感知、脉冲神经网络与 GPU 模型部署。',
    en: 'Projects and technology by Nengbo Zhang: computer vision, intelligent sensing, spiking neural networks, and GPU model deployment.'
  };
  let language = 'zh';
  let activeFilter = 'all';
  const languageButton = document.getElementById('language-toggle');
  const cards = [...document.querySelectorAll('.project-card')];
  const filters = [...document.querySelectorAll('.filter')];
  const status = document.getElementById('filter-status');

  function announceFilter() {
    const count = cards.filter(card => !card.hidden).length;
    status.textContent = language === 'zh' ? `显示 ${count} 个项目。` : `Showing ${count} ${count === 1 ? 'project' : 'projects'}.`;
  }

  function setLanguage(nextLanguage, remember = true) {
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
    languageButton.setAttribute('aria-label', language === 'zh' ? 'Switch to English' : '切换为中文');
    document.getElementById('language-label').textContent = language === 'zh' ? 'EN' : '中文';
    document.title = language === 'zh' ? '张能波 Nengbo Zhang — Projects & Technology' : 'Nengbo Zhang — Projects & Technology';
    document.querySelector('meta[name="description"]').content = description[language];
    document.querySelector('meta[property="og:title"]').content = document.title;
    document.querySelector('meta[property="og:description"]').content = description[language];
    document.querySelector('meta[property="og:locale"]').content = language === 'zh' ? 'zh_CN' : 'en_US';
    announceFilter();
    if (remember) {
      try { localStorage.setItem('nengbo-portfolio-language', language); } catch (_) { /* Works without storage. */ }
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

  languageButton.addEventListener('click', () => setLanguage(language === 'zh' ? 'en' : 'zh'));
  filters.forEach(button => button.addEventListener('click', () => setFilter(button.dataset.filter)));
  document.getElementById('copyright-year').textContent = String(new Date().getFullYear());
  try { setLanguage(localStorage.getItem('nengbo-portfolio-language') || 'zh', false); }
  catch (_) { setLanguage('zh', false); }
})();
