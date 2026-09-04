import { type Component } from 'solid-js';

export const Skills: Component = () => {
  const skillCategories = [
    {
      badge: 'ARTIFICIAL INTELLIGENCE',
      title: 'AI 开发与前沿范式',
      subtitle: '现代 AI 工作流与智能数据应用',
      skills: ['ComfyUI', 'AIGC 视觉创作', 'AI 数据分析', 'Vibe Coding', 'Prompt 架构'],
      desc: '深入 ComfyUI 节点式生成流与 AIGC 创意工程，运用 AI 进行高效数据挖掘分析，推崇现代极速迭代的 Vibe Coding 范式。',
      highlight: true,
    },
    {
      badge: 'FRONTEND ARCHITECTURE',
      title: '前端工程与交互',
      subtitle: '追求毫秒级首屏与极致交互动效',
      skills: ['Solid.js', 'React', 'Vue', 'TypeScript', 'Tailwind CSS'],
      desc: '具备细粒度响应式与组件化架构视野，熟练使用现代 CSS 变量、毛玻璃光效与动画系统，打造高质感现代 Web 界面。',
      highlight: false,
    },
    {
      badge: 'BACKEND ENGINEERING',
      title: '后端开发与服务设计',
      subtitle: '扎实稳健的多语言业务逻辑建模',
      skills: ['Node.js', 'PHP', 'Python', 'Java', 'RESTful API'],
      desc: '掌握多元技术栈与复杂业务场景建模，支持从轻量级高并发脚本到工业级中后台服务的全流程开发。',
      highlight: false,
    },
    {
      badge: 'INFRA & CLOUD',
      title: '数据与基础设施',
      subtitle: '容器化交付与高可用边缘网络',
      skills: ['MySQL', 'Docker', 'Nginx', 'Cloudflare', 'Linux 运维'],
      desc: '擅长关系型数据建模与性能调优，运用 Docker 容器化交付环境，结合 Nginx 反向代理与 Cloudflare 边缘安全加速。',
      highlight: false,
    },
    {
      badge: 'VISUAL & MEDIA',
      title: '视觉设计与后期剪辑',
      subtitle: '八年独立视频创作者的审美本能',
      skills: ['Final Cut Pro', 'Premiere Pro', 'Photoshop', '分镜脚本', '视效调色'],
      desc: '源于 2016 年的独立视频创作者底蕴，具备天然的镜头叙事、画面构图与调色感知，赋予数字产品不可替代的美学灵魂。',
      highlight: false,
    },
  ];

  return (
    <section id="skills" class="relative z-10 max-w-7xl mx-auto px-6 py-28 sm:py-36">
      {/* Section Header */}
      <div class="mb-16 sm:mb-20 text-center sm:text-left">
        <span class="text-xs uppercase tracking-[0.25em] text-muted-foreground/80 font-mono block mb-3">
          02 / CAPABILITIES & CRAFT
        </span>
        <h2 class="text-3xl sm:text-5xl lg:text-6xl font-normal tracking-tight text-foreground font-display">
          专业技能与 <em class="not-italic text-muted-foreground">技术矩阵</em>
        </h2>
        <p class="text-muted-foreground text-sm sm:text-base max-w-2xl mt-4 leading-relaxed">
          融汇八年独立视频创作者的视觉审美、企业级复杂工业系统的严谨逻辑，以及当今前沿的 AI 驱动全栈范式。
        </p>
      </div>

      {/* Grid */}
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {skillCategories.map((item) => (
          <div
            class={`liquid-glass rounded-3xl p-7 sm:p-8 flex flex-col justify-between transition-all duration-300 hover:translate-y-[-4px] group ${
              item.highlight ? 'lg:col-span-2 bg-white/[0.02]' : ''
            }`}
          >
            <div>
              <div class="flex items-center justify-between mb-4">
                <span class="text-[10px] font-mono tracking-widest text-muted-foreground/70 uppercase px-2.5 py-1 rounded-full border border-white/10">
                  {item.badge}
                </span>
                {item.highlight && (
                  <span class="text-[10px] tracking-wider text-amber-300/90 font-mono px-2 py-0.5 rounded bg-amber-400/10 border border-amber-400/20">
                    FOCUS
                  </span>
                )}
              </div>

              <h3 class="text-xl sm:text-2xl font-normal text-foreground mb-1 font-display tracking-wide">
                {item.title}
              </h3>
              <div class="text-xs text-muted-foreground mb-4">{item.subtitle}</div>

              <p class="text-xs sm:text-sm text-muted-foreground/90 leading-relaxed mb-6 font-normal">
                {item.desc}
              </p>
            </div>

            {/* Badges */}
            <div class="flex flex-wrap gap-2 pt-2 border-t border-white/[0.06]">
              {item.skills.map((skill) => (
                <span class="text-xs px-3 py-1.5 rounded-xl bg-white/[0.04] text-foreground/90 font-mono border border-white/[0.08] transition-colors group-hover:border-white/20">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
