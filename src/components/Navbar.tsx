import { createSignal, type Component } from 'solid-js';

interface NavbarProps {
  currentView?: () => 'home' | 'projects';
  onNavigate?: (view: 'home' | 'projects', anchor?: string) => void;
}

export const Navbar: Component<NavbarProps> = (props) => {
  const [mobileMenuOpen, setMobileMenuOpen] = createSignal(false);

  const navLinks = [
    { name: '首页', view: 'home' as const, anchor: '#home' },
    { name: '专业技能', view: 'home' as const, anchor: '#skills' },
    { name: '经历历程', view: 'home' as const, anchor: '#about' },
    { name: '实践成果', view: 'projects' as const, anchor: '#/projects', isPage: true },
    { name: '联系方式', view: 'home' as const, anchor: '#contact' },
  ];

  const handleClick = (e: MouseEvent, link: typeof navLinks[number]) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    if (props.onNavigate) {
      props.onNavigate(link.view, link.anchor);
    } else {
      window.location.hash = link.anchor;
    }
  };

  const isLinkActive = (link: typeof navLinks[number]) => {
    if (!props.currentView) return false;
    if (link.isPage) {
      return props.currentView() === 'projects';
    }
    return false;
  };

  return (
    <header class="sticky top-0 z-50 w-full transition-all duration-300 backdrop-blur-md bg-background/30 border-b border-white/[0.06]">
      <nav class="flex items-center justify-between px-6 sm:px-8 py-5 max-w-7xl mx-auto">
        {/* Logo */}
        <a
          href="#home"
          onClick={(e) => handleClick(e, navLinks[0])}
          class="text-2xl sm:text-3xl tracking-tight text-foreground select-none transition-opacity hover:opacity-90 font-display flex items-center cursor-pointer"
        >
          Kris<sup class="text-xs ml-0.5 font-sans font-normal opacity-80">®</sup>
        </a>

        {/* Desktop Navigation Links */}
        <div class="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a
              href={link.anchor}
              onClick={(e) => handleClick(e, link)}
              class={`text-sm transition-colors duration-200 tracking-wide font-normal cursor-pointer ${
                isLinkActive(link)
                  ? 'text-foreground font-medium underline underline-offset-8 decoration-white/40'
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              {link.name}
              {link.isPage && (
                <span class="ml-1 text-[10px] px-1.5 py-0.5 rounded bg-white/[0.08] text-amber-300/80 font-mono">
                  PAGE
                </span>
              )}
            </a>
          ))}
        </div>

        {/* CTA Button */}
        <div class="hidden sm:flex items-center">
          <a
            href="#contact"
            onClick={(e) => handleClick(e, navLinks[4])}
            class="liquid-glass rounded-full px-5 py-2 text-xs sm:text-sm text-foreground hover:scale-[1.03] transition-transform duration-200 cursor-pointer inline-flex items-center justify-center font-medium tracking-wide"
          >
            与我联系
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen())}
          class="md:hidden flex items-center justify-center p-2 rounded-lg text-muted-foreground hover:text-foreground focus:outline-none"
          aria-label="切换导航菜单"
        >
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {mobileMenuOpen() ? (
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile Drawer */}
      {mobileMenuOpen() && (
        <div class="md:hidden px-6 pb-6 pt-3 max-w-7xl mx-auto flex flex-col space-y-4 liquid-glass rounded-2xl mb-4 mx-4">
          {navLinks.map((link) => (
            <a
              href={link.anchor}
              onClick={(e) => handleClick(e, link)}
              class={`text-sm py-1.5 transition-colors tracking-wide flex items-center justify-between ${
                isLinkActive(link)
                  ? 'text-foreground font-medium'
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              <span>{link.name}</span>
              {link.isPage && (
                <span class="text-[10px] px-1.5 py-0.5 rounded bg-white/[0.08] text-amber-300/80 font-mono">
                  PAGE
                </span>
              )}
            </a>
          ))}
          <a
            href="#contact"
            onClick={(e) => handleClick(e, navLinks[4])}
            class="liquid-glass rounded-full px-5 py-2.5 text-sm text-foreground text-center font-medium mt-2 hover:scale-[1.02] transition-transform cursor-pointer"
          >
            与我联系
          </a>
        </div>
      )}
    </header>
  );
};
