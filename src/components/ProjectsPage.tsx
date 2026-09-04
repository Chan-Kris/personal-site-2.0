import { createSignal, type Component } from 'solid-js';

interface ProjectsPageProps {
  onBack: () => void;
  onContact: () => void;
}

export const ProjectsPage: Component<ProjectsPageProps> = (props) => {
  const [activeCategory, setActiveCategory] = createSignal<'all' | 'aigc' | 'web' | 'data'>('all');

  const categories = [
    { id: 'all', label: '全部项目 (All)' },
    { id: 'aigc', label: 'AIGC 视觉与创意' },
    { id: 'web', label: '全栈 Web 与架构' },
    { id: 'data', label: '工业 MES 与数据智能' },
  ] as const;

  const projects = [
    {
      category: 'aigc',
      tag: 'AIGC WORKFLOW',
      title: 'ComfyUI 节点式视觉创意管线与多模态生成流',
      description:
        '深度运用 ComfyUI 节点式架构，搭建涵盖角色一致性保持、精细光影控制与多风格迁移的高自由度 AIGC 生成管线。将 8 年独立视频创作者的构图与色调直觉融入算法调优，赋能高质量商业视觉产出。',
      highlights: [
        '基于 SDXL 与 Flux 模型的精细 ControlNet 姿态与深度约束',
        '多节点自动化批处理与高分辨率二次潜空间重绘（Hires Fix）',
        '针对商业广告与分镜设计的风格预设和 Prompt 体系化工程',
      ],
      techs: ['ComfyUI', 'SDXL / Flux', 'Python', 'AIGC 调优', '分镜美学'],
      linkText: '查看代码与工作流',
      linkHref: 'https://github.com/Chan-Kris',
    },
    {
      category: 'web',
      tag: 'FULL-STACK WEB',
      title: 'Kris® 2.0 极简电影感个人站架构',
      description:
        '探索前端极致性能体验与前沿视觉风格的落地。基于 Solid.js 细粒度响应式更新机制，实现首屏毫秒级加载；定制 CSS 遮罩双层高光液体玻璃效果（.liquid-glass）与硬件加速的全屏视频高斯模糊景深切换。',
      highlights: [
        '无虚拟 DOM 开销，生产打包 JS 体积压缩至 12KB (gzip)',
        '自动化 Vite 构建插件，每次打包自动生成标准 PHP 入口',
        'GPU 硬件加速的单页滚动高斯模糊过渡与全端平滑响应式布局',
      ],
      techs: ['Solid.js', 'Vite 6', 'TypeScript', 'Tailwind CSS', 'PHP 边缘交付'],
      linkText: 'GitHub 仓库开源',
      linkHref: 'https://github.com/Chan-Kris/personal-site-2.0',
    },
    {
      category: 'data',
      tag: 'DATA ENGINEERING & AGENT',
      title: '亚马逊数据自动化收集并分析',
      description:
        '构建一套高可信、防静默错误的一体化电商数据工程系统。覆盖 3 个产品组、18 个样本、6 张多维数据表与 18 份每日深度报告，让每个数字都可验证、可解释、可恢复。',
      highlights: [
        '首创“连续两次完整快照签名校验”机制，彻底杜绝异步渲染产生的半新半旧脏数据',
        '严谨语义缺失值治理（区分无排名、结构空缺与无效采样），拒绝 0 污染均值与排序',
        '将 Google Sheets 当作生产数据库，执行动态坐标重算、写入前审计与逐格回读校对',
        '建立包含事实、组内比较与阈值行动的七维商业分析模型，每日全自动输出可接管报告',
      ],
      techs: ['Python', 'AI Agent', 'Google Sheets API', '可信数据工程', '自动化分析'],
      linkText: '交流与架构复盘',
      linkHref: '#contact',
    },
    {
      category: 'data',
      tag: 'ENTERPRISE MES',
      title: '工业 MES 制造执行业务建模与生产数据看板',
      description:
        '立足于一线企业级制造执行系统（MES）与 ERP 实施经验，针对多工序复杂车间现场的物料周转、设备稼动率与工艺良率痛点，设计打通端到端业务闭环的高实时性数据看板。',
      highlights: [
        '工业车间核心业务流程建模与跨工序生产数据指标抽取',
        '基于 Python / Pandas 搭建高效数据清洗管道与报表自动生成',
        '直面企业客户实际交付，具备高可用性与复杂业务容错设计',
      ],
      techs: ['Python', 'MySQL', 'Docker', 'MES 业务架构', '数据看板可视化'],
      linkText: '交流咨询',
      linkHref: '#contact',
    },
    {
      category: 'data',
      tag: 'AI ANALYTICS',
      title: 'AI 驱动的数据智能分析与时序趋势洞察工具',
      description:
        '结合现代 LLM 智能体能力与传统统计分析方法，开发针对中小型业务指标的轻量化自动化数据分析工具。支持自然语言提问提取多维指标、自动识别异常波动并生成图表洞察报告。',
      highlights: [
        '自然语言到 SQL / 数据分析代码的动态生成与沙箱验证',
        '多维时序数据趋势预测与结构化业务异常智能诊断',
        '一键导出交互式分析报告与业务决策建议',
      ],
      techs: ['Python', 'LLM Agent', '数据挖掘', 'Docker', 'RESTful API'],
      linkText: '探索更多',
      linkHref: 'https://github.com/Chan-Kris',
    },
    {
      category: 'aigc',
      tag: 'MULTIMEDIA CRAFT',
      title: '独立视频叙事与高质感后期调色工程',
      description:
        '自 2016 年起持续探索的视觉内容创作实践，精通影视级色彩科学、剪辑节奏把控与声画同步设计。为各类数字产品宣传、艺术短片及个人表达提供兼具思想深度与视觉冲击力的最终成片。',
      highlights: [
        '熟练驾驭 Final Cut Pro、Premiere Pro 与 Photoshop 工作流',
        '精通影视 Log 曲线色彩还原、胶片质感模拟与风格化调色',
        '从概念脚本编写、分镜绘制到后期特效合成的全流程闭环',
      ],
      techs: ['Final Cut Pro', 'Premiere Pro', 'Photoshop', '色彩科学', '视效合成'],
      linkText: '了解作品集',
      linkHref: '#contact',
    },
  ];

  const filteredProjects = () => {
    const cat = activeCategory();
    if (cat === 'all') return projects;
    return projects.filter((p) => p.category === cat);
  };

  return (
    <div class="relative z-10 max-w-7xl mx-auto px-6 py-12 sm:py-20 animate-fade-rise">
      {/* Top Navigation Bar / Breadcrumb */}
      <div class="flex items-center justify-between mb-12 sm:mb-16">
        <button
          type="button"
          onClick={props.onBack}
          class="liquid-glass rounded-full px-5 py-2.5 text-xs sm:text-sm text-foreground flex items-center space-x-2 hover:scale-[1.03] transition-transform duration-200 cursor-pointer"
        >
          <span>←</span>
          <span>返回首页</span>
        </button>

        <span class="text-xs font-mono tracking-widest text-muted-foreground uppercase hidden sm:inline-block">
          PRACTICE & WORKS · INDEPENDENT PAGE
        </span>
      </div>

      {/* Main Header */}
      <div class="mb-14 text-center sm:text-left">
        <span class="text-xs uppercase tracking-[0.25em] text-muted-foreground/80 font-mono block mb-3">
          PORTFOLIO ARCHIVE
        </span>
        <h1 class="text-3xl sm:text-5xl lg:text-6xl font-normal tracking-tight text-foreground font-display mb-5">
          实践成果与 <em class="not-italic text-muted-foreground">造物沉淀</em>
        </h1>
        <p class="text-muted-foreground text-sm sm:text-base max-w-3xl leading-relaxed">
          这里收录了我近年来在 AIGC 视觉管线、全栈 Web 工程、工业制造系统以及 AI 数据分析等领域的代表性实践。
          无论是视觉艺术还是业务工程，我始终坚持用严谨的逻辑支撑富有美感的产品形态。
        </p>
      </div>

      {/* Category Tabs */}
      <div class="flex flex-wrap gap-2 sm:gap-3 mb-12 border-b border-white/[0.08] pb-6">
        {categories.map((cat) => (
          <button
            type="button"
            onClick={() => setActiveCategory(cat.id)}
            class={`px-4 sm:px-5 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-medium transition-all duration-200 cursor-pointer ${
              activeCategory() === cat.id
                ? 'bg-foreground text-background shadow-md'
                : 'liquid-glass text-muted-foreground hover:text-foreground'
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Projects Grid */}
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
        {filteredProjects().map((project) => (
          <div class="liquid-glass rounded-3xl p-7 sm:p-10 flex flex-col justify-between transition-all duration-300 hover:translate-y-[-4px] group">
            <div>
              <div class="flex items-center justify-between mb-4">
                <span class="text-[10px] font-mono tracking-widest text-muted-foreground/80 uppercase px-2.5 py-1 rounded-full border border-white/10">
                  {project.tag}
                </span>
                <a
                  href={project.linkHref}
                  target={project.linkHref.startsWith('http') ? '_blank' : '_self'}
                  rel="noreferrer"
                  class="text-muted-foreground group-hover:text-foreground transition-colors p-1"
                >
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </a>
              </div>

              <h2 class="text-xl sm:text-2xl font-normal text-foreground mb-4 font-display tracking-wide leading-snug">
                {project.title}
              </h2>

              <p class="text-xs sm:text-sm text-muted-foreground/90 leading-relaxed mb-6 font-normal">
                {project.description}
              </p>

              {/* Highlights List */}
              <div class="mb-6 space-y-2">
                <span class="text-[11px] font-mono uppercase tracking-wider text-muted-foreground/70 block">
                  核心亮点 / KEY HIGHLIGHTS:
                </span>
                <ul class="space-y-1.5 text-xs text-muted-foreground/90">
                  {project.highlights.map((h) => (
                    <li class="flex items-start space-x-2">
                      <span class="text-amber-300/80 font-mono mt-0.5">•</span>
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div>
              <div class="flex flex-wrap gap-1.5 pt-4 border-t border-white/[0.06] mb-6">
                {project.techs.map((t) => (
                  <span class="text-[11px] px-2.5 py-1 rounded-lg bg-white/[0.04] text-foreground/80 font-mono">
                    {t}
                  </span>
                ))}
              </div>

              <a
                href={project.linkHref}
                target={project.linkHref.startsWith('http') ? '_blank' : '_self'}
                rel="noreferrer"
                class="w-full py-3 rounded-full text-xs text-foreground/90 font-medium liquid-glass flex items-center justify-center space-x-2 group-hover:scale-[1.02] transition-transform"
              >
                <span>{project.linkText}</span>
                <span class="transition-transform duration-200 group-hover:translate-x-1">→</span>
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom Connect CTA Banner */}
      <div class="liquid-glass rounded-3xl p-8 sm:p-12 text-center max-w-4xl mx-auto mb-16">
        <h3 class="text-2xl sm:text-3xl font-normal text-foreground font-display mb-3">
          想要探讨更多项目细节或开启定制合作？
        </h3>
        <p class="text-xs sm:text-sm text-muted-foreground max-w-xl mx-auto mb-8">
          无论是工业企业级系统、AIGC 流程开发还是现代全栈应用，期待与你碰撞出新的可能。
        </p>
        <div class="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            type="button"
            onClick={props.onContact}
            class="liquid-glass rounded-full px-8 py-3.5 text-sm text-foreground font-medium hover:scale-[1.03] transition-transform cursor-pointer"
          >
            与我取得联系 →
          </button>
          <button
            type="button"
            onClick={props.onBack}
            class="text-xs text-muted-foreground hover:text-foreground transition-colors px-6 py-3"
          >
            返回首页顶部 ↑
          </button>
        </div>
      </div>
    </div>
  );
};
