import { createSignal, type Component } from 'solid-js';

export const Navbar: Component = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = createSignal(false);

  const navLinks = [
    { name: '首页', href: '#home' },
    { name: '专业技能', href: '#skills' },
    { name: '经历历程', href: '#about' },
    { name: '实践成果', href: '#projects' },
    { name: '联系方式', href: '#contact' },
  ];

  return (
    <header class="sticky top-0 z-50 w-full transition-all duration-300 backdrop-blur-md bg-background/30 border-b border-white/[0.06]">
      <nav class="flex items-center justify-between px-6 sm:px-8 py-5 max-w-7xl mx-auto">
        {/* Logo */}
        <a
          href="#home"
          class="text-2xl sm:text-3xl tracking-tight text-foreground select-none transition-opacity hover:opacity-90 font-display flex items-center"
        >
          Kris<sup class="text-xs ml-0.5 font-sans font-normal opacity-80">®</sup>
        </a>

        {/* Desktop Navigation Links */}
        <div class="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a
              href={link.href}
              class="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200 tracking-wide font-normal"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* CTA Button */}
        <div class="hidden sm:flex items-center">
          <a
            href="#contact"
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
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              class="text-sm py-1.5 text-muted-foreground hover:text-foreground transition-colors tracking-wide"
            >
              {link.name}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setMobileMenuOpen(false)}
            class="liquid-glass rounded-full px-5 py-2.5 text-sm text-foreground text-center font-medium mt-2 hover:scale-[1.02] transition-transform"
          >
            与我联系
          </a>
        </div>
      )}
    </header>
  );
};
