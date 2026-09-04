import { createSignal, onMount, onCleanup, Show, type Component } from 'solid-js';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Skills } from './components/Skills';
import { About } from './components/About';
import { ProjectsTeaser } from './components/ProjectsTeaser';
import { ProjectsPage } from './components/ProjectsPage';
import { Contact } from './components/Contact';

export const App: Component = () => {
  const [currentView, setCurrentView] = createSignal<'home' | 'projects'>('home');
  const [isScrolled, setIsScrolled] = createSignal(false);

  const navigateTo = (view: 'home' | 'projects', anchor?: string) => {
    setCurrentView(view);
    if (view === 'projects') {
      window.location.hash = '#/projects';
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      if (anchor && anchor !== '#home' && anchor !== '#/home') {
        window.location.hash = anchor;
        setTimeout(() => {
          const target = document.querySelector(anchor);
          if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
          }
        }, 60);
      } else {
        window.location.hash = '#home';
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }
  };

  onMount(() => {
    const syncRouteFromHash = () => {
      const hash = window.location.hash;
      if (hash === '#/projects' || hash === '#projects') {
        setCurrentView('projects');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        setCurrentView('home');
        if (hash && hash !== '#home' && hash !== '#/home' && !hash.startsWith('#/')) {
          setTimeout(() => {
            const target = document.querySelector(hash);
            if (target) {
              target.scrollIntoView({ behavior: 'smooth' });
            }
          }, 80);
        }
      }
    };

    syncRouteFromHash();
    window.addEventListener('hashchange', syncRouteFromHash);

    const handleScroll = () => {
      // 页面向下滚动超过 60px 时触发高斯模糊过渡
      setIsScrolled(window.scrollY > 60);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });

    onCleanup(() => {
      window.removeEventListener('hashchange', syncRouteFromHash);
      window.removeEventListener('scroll', handleScroll);
    });
  });

  return (
    <div class="relative min-h-screen w-full flex flex-col bg-background text-foreground selection:bg-white/20 selection:text-white">
      {/* Fullscreen Looping Video Background with Gaussian Blur Transition */}
      <video
        autoplay
        loop
        muted
        playsinline
        class={`fixed inset-0 w-full h-full object-cover z-0 pointer-events-none transition-all duration-700 ease-out will-change-transform ${
          isScrolled() || currentView() === 'projects'
            ? 'filter blur-md sm:blur-xl scale-[1.04] opacity-50'
            : 'filter-none scale-100 opacity-100'
        }`}
      >
        <source
          src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260314_131748_f2ca2a28-fed7-44c8-b9a9-bd9acdd5ec31.mp4"
          type="video/mp4"
        />
      </video>

      {/* Dynamic Ambient Blur & Darkening Overlay */}
      <div
        class={`fixed inset-0 pointer-events-none z-0 transition-all duration-700 ease-out ${
          isScrolled() || currentView() === 'projects'
            ? 'bg-background/50 backdrop-blur-sm'
            : 'bg-transparent'
        }`}
      />

      {/* Navigation */}
      <Navbar currentView={currentView} onNavigate={navigateTo} />

      {/* Main Content Area */}
      <main class="relative z-10 flex-1 flex flex-col">
        <Show
          when={currentView() === 'projects'}
          fallback={
            <div class="space-y-12">
              <Hero onExploreProjects={() => navigateTo('projects')} />
              <Skills />
              <About />
              <ProjectsTeaser onExplore={() => navigateTo('projects')} />
              <Contact />
            </div>
          }
        >
          <ProjectsPage
            onBack={() => navigateTo('home', '#home')}
            onContact={() => navigateTo('home', '#contact')}
          />
        </Show>
      </main>

      {/* Footer */}
      <footer class="relative z-10 w-full py-12 px-8 border-t border-white/[0.08] backdrop-blur-md bg-background/50 text-center">
        <div class="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-muted-foreground">
          <div class="flex items-center space-x-2">
            <span class="font-display text-lg text-foreground tracking-tight">
              Kris<sup class="text-[10px] font-sans">®</sup>
            </span>
            <span>· 全栈工程 · AIGC 创意 · 工业数字化</span>
          </div>

          <div>
            <span>© {new Date().getFullYear()} Kris. Crafted with Solid.js & Tailwind CSS.</span>
          </div>

          <div>
            {currentView() === 'projects' ? (
              <button
                type="button"
                onClick={() => navigateTo('home', '#home')}
                class="hover:text-foreground transition-colors cursor-pointer"
              >
                返回首页 ↑
              </button>
            ) : (
              <a href="#home" class="hover:text-foreground transition-colors">
                返回顶部 ↑
              </a>
            )}
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
