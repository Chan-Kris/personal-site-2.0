import { type Component } from 'solid-js';

export const About: Component = () => {
  const milestones = [
    {
      year: '2016',
      period: '启航 · 艺术与逻辑的交汇',
      role: '独立视频创作者 & 自学编程',
      desc: '开启独立视频创作者生涯，积累了敏锐的视觉分镜感、光影色彩审美与数字叙事能力。出于对计算机底层造物的强烈兴趣，自学 Python 与 Java，完成了早期的自动化脚本与逻辑实验，埋下了全栈工程的种子。',
      tags: ['视频创作', 'Python 自学', 'Java 基础', '视觉美学'],
    },
    {
      year: '2019',
      period: '沉淀 · 工业企业级工程实战',
      role: 'MES / ERP 系统实施顾问（互联网公司）',
      desc: '深入制造业与数字化转型一线，担任复杂企业级 MES 与 ERP 系统的实施顾问。负责从 0 到 1 与客户深度沟通业务边界、方案定制、系统搭建部署与疑难痛点排查，锤炼出扎实的业务架构能力与高抗压的系统级问题解决思维。',
      tags: ['MES 制造系统', 'ERP 企业系统', '架构搭建', '业务实施', '客户协同'],
    },
    {
      year: 'NOW',
      period: '跃迁 · AI 全栈与前沿范式探索',
      role: '全栈工程师 · AI 数据分析 · AIGC 创作者',
      desc: '将八年视觉创作者的审美直觉与企业级系统架构的严谨沉淀合二为一，深度融合 AI 数据分析与 ComfyUI 节点式生成流。积极实践现代 Vibe Coding，以 Solid.js / Node.js 等全栈技术构建具有极致响应与电影感美学的数字产品。',
      tags: ['AI 数据分析', 'AIGC 创作', 'ComfyUI', 'Vibe Coding', '全栈交付'],
      current: true,
    },
  ];

  return (
    <section id="about" class="relative z-10 max-w-7xl mx-auto px-6 py-28 sm:py-36">
      {/* Header */}
      <div class="mb-16 sm:mb-20 text-center sm:text-left">
        <span class="text-xs uppercase tracking-[0.25em] text-muted-foreground/80 font-mono block mb-3">
          02 / JOURNEY & NARRATIVE
        </span>
        <h2 class="text-3xl sm:text-5xl lg:text-6xl font-normal tracking-tight text-foreground font-display">
          跨界轨迹与 <em class="not-italic text-muted-foreground">经历沉淀</em>
        </h2>
        <p class="text-muted-foreground text-sm sm:text-base max-w-2xl mt-4 leading-relaxed">
          从追求极致画面的独立视频创作者，到深入工厂一线的企业级系统实施，再到驱动现代 AI 的全栈造物者。
        </p>
      </div>

      {/* Narrative Card */}
      <div class="liquid-glass rounded-3xl p-8 sm:p-12 mb-16 max-w-5xl">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          <div class="md:col-span-1 border-b md:border-b-0 md:border-r border-white/10 pb-6 md:pb-0 md:pr-8">
            <span class="text-xs font-mono tracking-widest text-muted-foreground uppercase block mb-2">
              CREATIVE PHILOSOPHY
            </span>
            <h3 class="text-2xl sm:text-3xl font-normal text-foreground font-display leading-tight">
              代码构建秩序，<br />
              艺术赋予灵魂。
            </h3>
          </div>
          <div class="md:col-span-2 text-sm sm:text-base text-muted-foreground/90 leading-relaxed font-normal space-y-4">
            <p>
              我是 <strong class="text-foreground font-medium">Kris</strong>。我的技术路径并非单一维度的代码堆叠，而是一场长达数年的跨界融合。
            </p>
            <p>
              在视频创作时期培养的美学敏锐度，让我对界面交互有着极其苛刻的质感追求；在实施 MES 与 ERP 工业系统过程中建立的工程思维，让我懂得如何应对庞大、复杂且高可靠的企业级业务。如今，借助 AI 数据分析与 AIGC 生产力的杠杆，我致力于以最敏捷、最有质感的方式创造真实的价值。
            </p>
          </div>
        </div>
      </div>

      {/* Timeline */}
      <div class="space-y-8 max-w-5xl">
        {milestones.map((item, index) => (
          <div class="relative pl-6 sm:pl-10 border-l border-white/15 pb-4 last:pb-0 group">
            {/* Timeline node */}
            <div
              class={`absolute -left-[9px] top-1.5 w-4 h-4 rounded-full border-2 transition-transform duration-300 group-hover:scale-125 ${
                item.current
                  ? 'bg-amber-400 border-amber-300 shadow-[0_0_12px_rgba(251,191,36,0.6)]'
                  : 'bg-background border-white/40 group-hover:border-white'
              }`}
            />

            {/* Content card */}
            <div class="liquid-glass rounded-2xl p-6 sm:p-8 transition-all duration-300 group-hover:translate-x-1">
              <div class="flex flex-col sm:flex-row sm:items-center justify-between mb-3 gap-2">
                <div class="flex items-center space-x-3">
                  <span class="text-xs font-mono px-2.5 py-1 rounded bg-white/[0.08] text-foreground font-medium">
                    {item.year}
                  </span>
                  <span class="text-xs text-muted-foreground font-mono">{item.period}</span>
                </div>
                {item.current && (
                  <span class="text-[11px] font-mono text-emerald-400 tracking-wider">
                    ● CURRENT STAGE
                  </span>
                )}
              </div>

              <h4 class="text-lg sm:text-xl font-medium text-foreground mb-3 font-display tracking-wide">
                {item.role}
              </h4>

              <p class="text-xs sm:text-sm text-muted-foreground/90 leading-relaxed mb-5 font-normal">
                {item.desc}
              </p>

              <div class="flex flex-wrap gap-2">
                {item.tags.map((tag) => (
                  <span class="text-[11px] px-2.5 py-1 rounded-lg bg-white/[0.03] text-muted-foreground border border-white/[0.06] font-mono">
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
