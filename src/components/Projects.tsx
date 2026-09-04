import { type Component } from 'solid-js';

export const Projects: Component = () => {
  const projects = [
    {
      tag: 'AIGC WORKFLOW',
      title: 'ComfyUI 视觉创意与节点式智能生成流',
      description:
        '深入节点式多模态生成管线，打造高自由度、风格一致性的 AIGC 视觉工作流。结合独立创作审美对光影与构图进行精细控制，赋能商业视觉与个人灵感表达。',
      techs: ['ComfyUI', 'SD / Flux', 'Python', 'AIGC 调优', 'Prompt 工程'],
      linkText: '探索工作流',
      linkHref: 'https://github.com/Chan-Kris',
    },
    {
      tag: 'FULL-STACK ARCHITECTURE',
      title: '极简电影感个人站 2.0 (Solid.js + Tailwind)',
      description:
        '采用无虚拟 DOM 的 Solid.js 框架构建的极致性能单页流，融合全屏循环背景视频、CSS 遮罩双层高光液体玻璃特效（Liquid Glass）与暗色午夜蓝调美学。',
      techs: ['Solid.js', 'Vite', 'TypeScript', 'Tailwind CSS', 'PHP 边缘交付'],
      linkText: '查看源码',
      linkHref: 'https://github.com/Chan-Kris',
    },
    {
      tag: 'ENTERPRISE & DATA',
      title: '工业 MES / ERP 业务建模与数据智能看板',
      description:
        '结合一线企业级 MES 制造执行与 ERP 系统实施积淀，打通生产与业务链路的数据闭环，利用 Python 与关系型数据库实现多维度数据清洗、指标洞察与智能分析可视化。',
      techs: ['Python', 'MySQL', 'Docker', '数据分析', 'MES / ERP 实施'],
      linkText: '了解更多',
      linkHref: '#contact',
    },
  ];

  return (
    <section id="projects" class="relative z-10 max-w-7xl mx-auto px-6 py-28 sm:py-36">
      {/* Header */}
      <div class="mb-16 sm:mb-20 text-center sm:text-left">
        <span class="text-xs uppercase tracking-[0.25em] text-muted-foreground/80 font-mono block mb-3">
          03 / PRACTICE & WORKS
        </span>
        <h2 class="text-3xl sm:text-5xl lg:text-6xl font-normal tracking-tight text-foreground font-display">
          精选实践与 <em class="not-italic text-muted-foreground">造物成果</em>
        </h2>
        <p class="text-muted-foreground text-sm sm:text-base max-w-2xl mt-4 leading-relaxed">
          将代码工程、数据算法与视觉艺术深度融合，输出兼具商业效能与感官享受的数字造物。
        </p>
      </div>

      {/* Cards Grid */}
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
        {projects.map((project) => (
          <div class="liquid-glass rounded-3xl p-7 sm:p-8 flex flex-col justify-between transition-all duration-300 hover:translate-y-[-4px] group">
            <div>
              <div class="flex items-center justify-between mb-4">
                <span class="text-[10px] font-mono tracking-widest text-muted-foreground/80 uppercase px-2.5 py-1 rounded-full border border-white/10">
                  {project.tag}
                </span>
                <a
                  href={project.linkHref}
                  target={project.linkHref.startsWith('http') ? '_blank' : '_self'}
                  rel="noreferrer"
                  class="text-muted-foreground group-hover:text-foreground transition-colors"
                >
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </a>
              </div>

              <h3 class="text-xl sm:text-2xl font-normal text-foreground mb-3 font-display tracking-wide leading-snug">
                {project.title}
              </h3>

              <p class="text-xs sm:text-sm text-muted-foreground/90 leading-relaxed mb-6 font-normal">
                {project.description}
              </p>
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
                class="w-full py-2.5 rounded-full text-xs text-foreground/90 font-medium liquid-glass flex items-center justify-center space-x-2 group-hover:scale-[1.02] transition-transform"
              >
                <span>{project.linkText}</span>
                <span class="transition-transform duration-200 group-hover:translate-x-1">→</span>
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
