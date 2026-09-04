import { type Component } from 'solid-js';

export const Hero: Component = () => {
  return (
    <section
      id="home"
      class="relative z-10 flex flex-col items-center justify-center text-center px-6 pt-24 pb-32 sm:pt-32 sm:pb-40 py-[90px] max-w-7xl mx-auto min-h-[calc(100vh-80px)]"
    >
      {/* Cinematic Typography H1 */}
      <h1 class="animate-fade-rise text-5xl sm:text-7xl md:text-8xl lg:text-[5.5rem] leading-[1.05] tracking-tight max-w-6xl font-normal text-foreground font-display">
        于静默深处，让{' '}
        <em class="not-italic text-muted-foreground">梦想</em> 破空{' '}
        <em class="not-italic text-muted-foreground">升腾。</em>
      </h1>

      {/* Subtext */}
      <p class="animate-fade-rise-delay text-muted-foreground text-base sm:text-lg md:text-xl max-w-2xl mt-8 leading-relaxed font-normal tracking-wide">
        我是 Kris，一名全栈工程师。专为深度思考者、勇于创新的造物者打造高品质数字工具。
        在喧嚣繁杂的世界中，构筑专注纯粹且富有灵感的数字空间。
      </p>

      {/* Action Buttons */}
      <div class="animate-fade-rise-delay-2 mt-12 flex flex-col sm:flex-row items-center gap-4">
        <a
          href="#skills"
          class="liquid-glass rounded-full px-12 py-4 text-base text-foreground inline-flex items-center justify-center font-medium tracking-wide hover:scale-[1.03] transition-transform duration-200 cursor-pointer select-none"
        >
          开启旅程
        </a>
        <a
          href="#contact"
          class="px-8 py-4 text-sm text-muted-foreground hover:text-foreground transition-colors tracking-wide"
        >
          探索合作机会 →
        </a>
      </div>
    </section>
  );
};
