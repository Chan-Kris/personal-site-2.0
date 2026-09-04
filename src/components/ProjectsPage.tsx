import { createSignal, type Component } from 'solid-js';

interface ProjectsPageProps {
  onBack: () => void;
  onContact: () => void;
  onOpenAmazonCaseStudy?: () => void;
}

export const ProjectsPage: Component<ProjectsPageProps> = (props) => {
  const [activeCategory, setActiveCategory] = createSignal<'all' | 'data' | 'web'>('all');

  const categories = [
    { id: 'all', label: '全部项目 (All)' },
    { id: 'data', label: '数据工程与自动化' },
    { id: 'web', label: '全栈 Web 与架构' },
  ] as const;

  const projects = [
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
      linkText: '阅读完整系统复盘与架构',
      linkHref: '#/project/amazon-data',
      isCaseStudy: true,
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

              {project.isCaseStudy ? (
                <button
                  type="button"
                  onClick={() => {
                    if (props.onOpenAmazonCaseStudy) {
                      props.onOpenAmazonCaseStudy();
                    } else {
                      window.location.hash = project.linkHref;
                    }
                  }}
                  class="w-full py-3 rounded-full text-xs text-foreground font-medium liquid-glass flex items-center justify-center space-x-2 group-hover:scale-[1.02] transition-transform cursor-pointer border border-amber-300/30 hover:border-amber-300/60 bg-amber-400/[0.04]"
                >
                  <span class="text-amber-300 text-sm">★</span>
                  <span>{project.linkText}</span>
                  <span class="transition-transform duration-200 group-hover:translate-x-1">→</span>
                </button>
              ) : (
                <a
                  href={project.linkHref}
                  target={project.linkHref.startsWith('http') ? '_blank' : '_self'}
                  rel="noreferrer"
                  class="w-full py-3 rounded-full text-xs text-foreground/90 font-medium liquid-glass flex items-center justify-center space-x-2 group-hover:scale-[1.02] transition-transform"
                >
                  <span>{project.linkText}</span>
                  <span class="transition-transform duration-200 group-hover:translate-x-1">→</span>
                </a>
              )}
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
