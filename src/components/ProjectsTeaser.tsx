import { type Component } from 'solid-js';

interface ProjectsTeaserProps {
  onExplore: () => void;
}

export const ProjectsTeaser: Component<ProjectsTeaserProps> = (props) => {
  return (
    <section id="projects" class="relative z-10 max-w-7xl mx-auto px-6 py-20 sm:py-28">
      <div class="liquid-glass rounded-3xl p-8 sm:p-14 relative overflow-hidden group">
        {/* Ambient background glow */}
        <div class="absolute -right-20 -bottom-20 w-80 h-80 bg-white/[0.03] rounded-full blur-3xl pointer-events-none transition-transform duration-500 group-hover:scale-125" />

        <div class="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div class="max-w-2xl">
            <span class="text-xs uppercase tracking-[0.25em] text-muted-foreground/80 font-mono block mb-3">
              01 / PRACTICE & WORKS
            </span>
            <h2 class="text-2xl sm:text-4xl lg:text-5xl font-normal tracking-tight text-foreground font-display mb-4">
              精选实践与 <em class="not-italic text-muted-foreground">造物成果</em>
            </h2>
            <p class="text-muted-foreground text-sm sm:text-base leading-relaxed">
              涵盖 ComfyUI 节点式生成流、无虚拟 DOM 的极致性能全栈 Web 架构、以及工业级 MES / ERP 复杂数据看板等多维度的实践积淀。
            </p>
          </div>

          <div class="flex-shrink-0">
            <button
              type="button"
              onClick={props.onExplore}
              class="liquid-glass rounded-full px-8 sm:px-10 py-4 text-sm sm:text-base text-foreground font-medium tracking-wide flex items-center space-x-3 hover:scale-[1.03] transition-transform duration-200 cursor-pointer shadow-lg group-hover:border-white/30"
            >
              <span>探索全部实践成果</span>
              <span class="text-lg transition-transform duration-200 group-hover:translate-x-1.5">→</span>
            </button>
          </div>
        </div>

        {/* Quick Highlights Pills */}
        <div class="relative z-10 mt-8 pt-6 border-t border-white/[0.06] flex flex-wrap items-center gap-3 text-xs text-muted-foreground font-mono">
          <span class="text-muted-foreground/50">精选分类：</span>
          <span class="px-3 py-1 rounded-lg bg-white/[0.03] border border-white/[0.06]">#亚马逊数据自动化系统</span>
          <span class="px-3 py-1 rounded-lg bg-white/[0.03] border border-white/[0.06]">#AIGC 视觉管线</span>
          <span class="px-3 py-1 rounded-lg bg-white/[0.03] border border-white/[0.06]">#全栈 Web 架构</span>
          <span class="px-3 py-1 rounded-lg bg-white/[0.03] border border-white/[0.06]">#工业 MES/ERP 系统</span>
        </div>
      </div>
    </section>
  );
};
