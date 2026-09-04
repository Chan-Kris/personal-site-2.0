import { createSignal, type Component } from 'solid-js';

export const Contact: Component = () => {
  const [copied, setCopied] = createSignal(false);
  const email = 'Cforiky0314@gmail.com';
  const github = 'https://github.com/Chan-Kris';

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      // Fallback prompt
      window.prompt('复制邮箱地址:', email);
    }
  };

  return (
    <section id="contact" class="relative z-10 max-w-7xl mx-auto px-6 py-28 sm:py-36">
      {/* Header */}
      <div class="mb-16 sm:mb-20 text-center sm:text-left">
        <span class="text-xs uppercase tracking-[0.25em] text-muted-foreground/80 font-mono block mb-3">
          04 / CONNECT & TOUCH
        </span>
        <h2 class="text-3xl sm:text-5xl lg:text-6xl font-normal tracking-tight text-foreground font-display">
          开启对话与 <em class="not-italic text-muted-foreground">合作探索</em>
        </h2>
        <p class="text-muted-foreground text-sm sm:text-base max-w-2xl mt-4 leading-relaxed">
          无论是全栈产品工程、AIGC 视觉流定制、AI 数据分析探讨，或是数字系统咨询，随时期待与你产生连接。
        </p>
      </div>

      {/* Contact Cards */}
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl">
        {/* Email Card */}
        <div class="liquid-glass rounded-3xl p-8 sm:p-10 flex flex-col justify-between">
          <div>
            <div class="flex items-center space-x-3 text-muted-foreground mb-4">
              <svg class="w-5 h-5 text-amber-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              <span class="text-xs font-mono tracking-wider uppercase">ELECTRONIC MAIL</span>
            </div>

            <h3 class="text-2xl sm:text-3xl font-medium text-foreground mb-2 font-display">
              随时发信交流
            </h3>
            <p class="text-xs sm:text-sm text-muted-foreground mb-8">
              点击下方按钮可一键复制邮箱，或直接通过邮件客户端发送。
            </p>

            <div class="p-3.5 rounded-2xl bg-white/[0.03] border border-white/10 font-mono text-xs sm:text-sm text-foreground/90 select-all mb-6 break-all">
              {email}
            </div>
          </div>

          <div class="flex flex-col sm:flex-row gap-3">
            <button
              type="button"
              onClick={copyEmail}
              class="flex-1 py-3 rounded-full text-xs font-medium liquid-glass hover:scale-[1.02] transition-transform text-foreground flex items-center justify-center space-x-2"
            >
              <span>{copied() ? '✓ 已复制到剪切板' : '复制邮箱地址'}</span>
            </button>
            <a
              href={`mailto:${email}`}
              class="py-3 px-6 rounded-full text-xs font-medium bg-white/[0.08] hover:bg-white/[0.15] transition-colors text-foreground text-center"
            >
              直接唤起发信
            </a>
          </div>
        </div>

        {/* GitHub Card */}
        <div class="liquid-glass rounded-3xl p-8 sm:p-10 flex flex-col justify-between">
          <div>
            <div class="flex items-center space-x-3 text-muted-foreground mb-4">
              <svg class="w-5 h-5 text-foreground" fill="currentColor" viewBox="0 0 24 24">
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                />
              </svg>
              <span class="text-xs font-mono tracking-wider uppercase">OPEN SOURCE & REPO</span>
            </div>

            <h3 class="text-2xl sm:text-3xl font-medium text-foreground mb-2 font-display">
              GitHub 代码库
            </h3>
            <p class="text-xs sm:text-sm text-muted-foreground mb-8">
              探索开源仓库、实验性脚本、AIGC 实践及持续迭代的技术动态。
            </p>

            <div class="p-3.5 rounded-2xl bg-white/[0.03] border border-white/10 font-mono text-xs sm:text-sm text-foreground/90 mb-6">
              github.com/Chan-Kris
            </div>
          </div>

          <div>
            <a
              href={github}
              target="_blank"
              rel="noreferrer"
              class="w-full py-3 rounded-full text-xs font-medium liquid-glass hover:scale-[1.02] transition-transform text-foreground flex items-center justify-center space-x-2"
            >
              <span>前往 @Chan-Kris 主页</span>
              <span>↗</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
