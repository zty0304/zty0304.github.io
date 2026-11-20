// Site behaviour: theme, menu, scroll reveal, BibTeX, year filter, lightbox, hero flow lines.

window.__siteReady = true;
const root = document.documentElement;
const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
const darkQuery = window.matchMedia('(prefers-color-scheme: dark)');

const store = {
  get(k) { try { return localStorage.getItem(k); } catch { return null; } },
  set(k, v) { try { localStorage.setItem(k, v); } catch { /* private mode */ } },
};

// ── Theme ──────────────────────────────────────────────────────
const isDark = () => (root.dataset.theme ? root.dataset.theme === 'dark' : darkQuery.matches);
document.querySelector('[data-theme-toggle]')?.addEventListener('click', () => {
  const next = isDark() ? 'light' : 'dark';
  const apply = () => { root.dataset.theme = next; store.set('theme', next); };
  if (document.startViewTransition && !reduceMotion.matches) document.startViewTransition(apply);
  else apply();
});

// ── Header ─────────────────────────────────────────────────────
const header = document.querySelector('.site-header');
const onScroll = () => header?.classList.toggle('is-scrolled', window.scrollY > 4);
window.addEventListener('scroll', onScroll, { passive: true });
onScroll();

const navToggle = document.querySelector('[data-nav-toggle]');
const navList = document.querySelector('[data-nav-list]');
navToggle?.addEventListener('click', () => {
  const open = navToggle.getAttribute('aria-expanded') !== 'true';
  navToggle.setAttribute('aria-expanded', String(open));
  navList.classList.toggle('is-open', open);
});

// ── Scroll reveal ──────────────────────────────────────────────
// Elements marked data-reveal fade and rise in as they enter the viewport;
// items that arrive together are staggered a little.
const revealables = [...document.querySelectorAll('[data-reveal]')];
if (revealables.length && 'IntersectionObserver' in window && !reduceMotion.matches) {
  const io = new IntersectionObserver((entries) => {
    const entering = entries.filter((e) => e.isIntersecting).map((e) => e.target);
    entering.forEach((el, i) => {
      el.style.setProperty('--d', `${Math.min(i, 6) * 70}ms`);
      el.classList.add('is-in');
      io.unobserve(el);
    });
  }, { rootMargin: '0px 0px -8% 0px', threshold: 0.08 });
  revealables.forEach((el) => io.observe(el));
} else {
  revealables.forEach((el) => el.classList.add('is-in'));
}

// ── BibTeX ─────────────────────────────────────────────────────
document.addEventListener('click', async (e) => {
  const toggle = e.target.closest('[data-bib-toggle]');
  if (toggle) {
    const box = document.getElementById(toggle.getAttribute('aria-controls'));
    const open = toggle.getAttribute('aria-expanded') !== 'true';
    toggle.setAttribute('aria-expanded', String(open));
    box.hidden = !open;
    return;
  }
  const copy = e.target.closest('[data-bib-copy]');
  if (copy) {
    const text = copy.parentElement.querySelector('code').textContent;
    try {
      await navigator.clipboard.writeText(text);
      copy.querySelector('span').textContent = 'Copied';
      setTimeout(() => { copy.querySelector('span').textContent = 'Copy'; }, 1600);
    } catch { /* clipboard blocked: text stays selectable */ }
  }
});

// ── News: show earlier items ───────────────────────────────────
document.querySelector('[data-news-more]')?.addEventListener('click', (e) => {
  const btn = e.currentTarget;
  const older = [...document.querySelectorAll('[data-news-older]')];
  const open = btn.getAttribute('aria-expanded') !== 'true';
  older.forEach((li, i) => {
    li.hidden = !open;
    if (open && !reduceMotion.matches) {
      li.animate([{ opacity: 0, transform: 'translateY(8px)' }, { opacity: 1, transform: 'none' }], { duration: 420, delay: i * 50, easing: 'cubic-bezier(0.22, 1, 0.36, 1)', fill: 'backwards' });
    }
  });
  btn.setAttribute('aria-expanded', String(open));
  btn.firstChild.textContent = open ? 'Show less ' : 'Show earlier news ';
});

// ── Publications: year filter ─────────────────────────────────
const yearButtons = [...document.querySelectorAll('[data-year-filter]')];
if (yearButtons.length) {
  const groups = [...document.querySelectorAll('[data-pub-group]')];
  const empty = document.querySelector('[data-pub-empty]');

  const applyYear = (year) => {
    yearButtons.forEach((b) => {
      const on = b.dataset.yearFilter === year;
      b.classList.toggle('is-active', on);
      b.setAttribute('aria-pressed', String(on));
    });
    let total = 0;
    groups.forEach((g) => {
      let shown = 0;
      g.querySelectorAll('.pub-list > li').forEach((li) => {
        const match = year === 'all' || li.dataset.year === year;
        li.classList.toggle('is-hidden', !match);
        if (match) {
          shown += 1;
          if (!reduceMotion.matches) li.animate([{ opacity: 0, transform: 'translateY(6px)' }, { opacity: 1, transform: 'none' }], { duration: 360, delay: Math.min(shown, 8) * 30, easing: 'cubic-bezier(0.22, 1, 0.36, 1)', fill: 'backwards' });
        }
      });
      // the first visible item of each year shows its year label
      let prev = '';
      g.querySelectorAll('.pub-list > li:not(.is-hidden) .year').forEach((y) => {
        y.classList.toggle('repeat', y.textContent === prev);
        prev = y.textContent;
      });
      g.classList.toggle('is-hidden', shown === 0);
      const chip = document.querySelector(`[data-jump="${g.id}"]`);
      if (chip) {
        chip.hidden = shown === 0;
        chip.querySelector('[data-jump-count]').textContent = shown;
      }
      total += shown;
    });
    if (empty) empty.hidden = total > 0;
  };

  yearButtons.forEach((b) => b.addEventListener('click', () => {
    applyYear(b.dataset.yearFilter);
    const url = new URL(window.location);
    if (b.dataset.yearFilter === 'all') url.searchParams.delete('year');
    else url.searchParams.set('year', b.dataset.yearFilter);
    history.replaceState(null, '', url);
  }));
  const fromUrl = new URLSearchParams(window.location.search).get('year');
  if (fromUrl && yearButtons.some((b) => b.dataset.yearFilter === fromUrl)) applyYear(fromUrl);
}

// ── Lightbox ───────────────────────────────────────────────────
const lightbox = document.querySelector('[data-lightbox]');
const items = [...document.querySelectorAll('[data-lightbox-item]')];
if (lightbox && items.length) {
  const img = lightbox.querySelector('[data-lb-img]');
  const caption = lightbox.querySelector('[data-lb-caption]');
  const count = lightbox.querySelector('[data-lb-count]');
  const prev = lightbox.querySelector('[data-lb-prev]');
  const next = lightbox.querySelector('[data-lb-next]');
  let index = 0;
  let lastFocus = null;
  let touchX = 0;

  img.addEventListener('load', () => img.classList.remove('is-loading'));

  const show = (i) => {
    index = (i + items.length) % items.length;
    const item = items[index];
    img.classList.add('is-loading');
    // let the fade-out start before swapping the source
    setTimeout(() => {
      img.src = item.href;
      img.alt = item.dataset.caption || '';
      if (img.complete) img.classList.remove('is-loading');
    }, img.src ? 140 : 0);
    caption.textContent = item.dataset.caption || '';
    count.textContent = `${index + 1} / ${items.length}`;
    const n = items[(index + 1) % items.length];
    if (n) { const pre = new Image(); pre.src = n.href; }
  };
  const open = (i) => {
    lastFocus = document.activeElement;
    img.removeAttribute('src');
    show(i);
    lightbox.hidden = false;
    root.classList.add('lb-open');
    lightbox.querySelector('[data-lb-close]').focus();
  };
  const close = () => {
    lightbox.hidden = true;
    img.removeAttribute('src');
    root.classList.remove('lb-open');
    lastFocus?.focus();
  };

  items.forEach((el, i) => el.addEventListener('click', (e) => { e.preventDefault(); open(i); }));
  lightbox.querySelector('[data-lb-close]').addEventListener('click', close);
  lightbox.addEventListener('click', (e) => { if (e.target === lightbox) close(); });
  prev.addEventListener('click', () => show(index - 1));
  next.addEventListener('click', () => show(index + 1));
  if (items.length < 2) { prev.hidden = true; next.hidden = true; }

  document.addEventListener('keydown', (e) => {
    if (lightbox.hidden) return;
    if (e.key === 'Escape') close();
    if (e.key === 'ArrowLeft') show(index - 1);
    if (e.key === 'ArrowRight') show(index + 1);
  });
  lightbox.addEventListener('touchstart', (e) => { touchX = e.changedTouches[0].clientX; }, { passive: true });
  lightbox.addEventListener('touchend', (e) => {
    const d = e.changedTouches[0].clientX - touchX;
    if (Math.abs(d) > 50) show(index + (d < 0 ? 1 : -1));
  }, { passive: true });
}

// ── Hero: flow lines ───────────────────────────────────────────
// Streamlines of a smooth flow that bends around the portrait, drawn like
// fine ink strokes — a nod to flow-line guided hair synthesis. After the
// lines draw in, small strokes of ink keep travelling along them.
const canvas = document.querySelector('[data-flow]');
const portrait = document.querySelector('[data-portrait]');
if (canvas && portrait) {
  const ctx = canvas.getContext('2d');
  const layer = document.createElement('canvas'); // static lines, drawn once
  const lctx = layer.getContext('2d');
  let lines = [];
  let pulses = [];
  let W = 0;
  let H = 0;
  let dpr = 1;
  let colors = {};
  let raf = 0;
  let visible = true;
  let introDone = false;
  let token = 0;
  let lastKey = '';
  const key = () => { const r = portrait.getBoundingClientRect(); return `${Math.round(r.left)},${Math.round(r.top - canvas.getBoundingClientRect().top)},${Math.round(r.width)}`; };

  const readColors = () => {
    const css = getComputedStyle(root);
    colors = {
      ink: css.getPropertyValue('--flow-ink').trim(),
      alpha: parseFloat(css.getPropertyValue('--flow-alpha')) || 0.18,
      accent: css.getPropertyValue('--flow-accent').trim(),
    };
  };

  const build = () => {
    dpr = Math.min(window.devicePixelRatio || 1, 2);
    const box = canvas.getBoundingClientRect();
    const pic = portrait.getBoundingClientRect();
    W = box.width;
    H = box.height;
    if (!W || !H) return false;
    for (const c of [canvas, layer]) { c.width = Math.round(W * dpr); c.height = Math.round(H * dpr); }
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    lctx.setTransform(dpr, 0, 0, dpr, 0, 0);

    const cx = pic.left - box.left + pic.width / 2;
    const cy = pic.top - box.top + pic.height / 2;
    const R = Math.hypot(pic.width, pic.height) * 0.43;
    const tilt = -0.16;
    const ct = Math.cos(tilt);
    const st = Math.sin(tilt);
    const k1 = (2 * Math.PI) / Math.max(W * 0.6, 420);
    const k2 = (2 * Math.PI) / Math.max(H * 0.8, 360);
    const swirl = 0.32;

    // potential flow around a cylinder (tilted) + a gentle swirl away from it
    const vel = (x, y) => {
      const dx = x - cx;
      const dy = y - cy;
      const X = dx * ct + dy * st;
      const Y = -dx * st + dy * ct;
      const r2 = X * X + Y * Y || 1;
      const R2 = R * R;
      const uf = 1 - (R2 * (X * X - Y * Y)) / (r2 * r2);
      const vf = -(2 * R2 * X * Y) / (r2 * r2);
      let u = uf * ct - vf * st;
      let v = uf * st + vf * ct;
      const damp = Math.min(1, Math.max(0, (Math.sqrt(r2) - R) / (R * 0.9)));
      const a = k1 * x + 0.6;
      const b = k2 * y + 1.3;
      u += swirl * damp * Math.sin(a) * Math.cos(b);
      v -= swirl * damp * (k1 / k2) * Math.cos(a) * Math.sin(b);
      return [u, v];
    };

    lines = [];
    const spacing = W < 700 ? 9 : 8;
    const step = 2.2;
    for (let y0 = -H * 0.35; y0 < H * 1.35; y0 += spacing) {
      let x = 0;
      let y = y0;
      const pts = [x, y];
      let minD = Infinity;
      for (let i = 0; i < 2600; i++) {
        const [u1, v1] = vel(x, y);
        const m1 = Math.hypot(u1, v1) || 1;
        const [u2, v2] = vel(x + (u1 / m1) * step * 0.5, y + (v1 / m1) * step * 0.5);
        const m2 = Math.hypot(u2, v2) || 1;
        x += (u2 / m2) * step;
        y += (v2 / m2) * step;
        const d = Math.hypot(x - cx, y - cy);
        if (d < minD) minD = d;
        if (d < R * 0.995) break;
        if (x > W + 4 || y < -H * 0.4 || y > H * 1.4) break;
        pts.push(x, y);
      }
      // only keep lines that cross the visible right part of the hero
      if (pts.length > 8 && pts.some((v, i) => i % 2 === 1 && v > 0 && v < H)) {
        lines.push({ pts, near: minD < R * 1.09 && minD > R * 0.995 });
      }
    }
    return true;
  };

  const strokeLine = (c, line, upto) => {
    const p = line.pts;
    c.beginPath();
    c.moveTo(p[0], p[1]);
    for (let i = 2; i < upto; i += 2) c.lineTo(p[i], p[i + 1]);
    c.strokeStyle = line.near ? `rgb(${colors.accent} / 0.7)` : `rgb(${colors.ink} / ${colors.alpha})`;
    c.lineWidth = line.near ? 1.1 : 0.8;
    c.stroke();
  };

  const paintLayer = () => {
    lctx.clearRect(0, 0, W, H);
    lines.forEach((l) => strokeLine(lctx, l, l.pts.length));
  };

  // travelling ink: a short stroke that moves along a line, brightest at its head
  const visibleX = () => W * 0.45;
  const spawn = (initial) => {
    const pool = lines.filter((l) => l.pts.length > 160);
    if (!pool.length) return null;
    const near = pool.filter((l) => l.near);
    const line = near.length && Math.random() < 0.35 ? near[(Math.random() * near.length) | 0] : pool[(Math.random() * pool.length) | 0];
    const n = line.pts.length / 2;
    // start where the line becomes visible (the left part is masked out)
    let start = 0;
    while (start < n - 1 && line.pts[start * 2] < visibleX()) start += 1;
    return {
      line,
      head: initial ? start + Math.random() * (n - start) : start - Math.random() * 120,
      speed: 1.1 + Math.random() * 1.3,
      len: 40 + Math.random() * 50,
      accent: line.near || Math.random() < 0.25,
    };
  };

  const drawPulse = (p) => {
    const pts = p.line.pts;
    const n = pts.length / 2;
    const head = Math.min(Math.floor(p.head), n - 1);
    const tail = Math.max(0, Math.floor(p.head - p.len));
    if (head - tail < 2) return;
    const rgb = p.accent ? colors.accent : colors.ink;
    const segs = 6;
    for (let s = 0; s < segs; s++) {
      const a = tail + Math.floor(((head - tail) * s) / segs);
      const b = tail + Math.floor(((head - tail) * (s + 1)) / segs);
      ctx.beginPath();
      ctx.moveTo(pts[a * 2], pts[a * 2 + 1]);
      for (let i = a + 1; i <= b; i++) ctx.lineTo(pts[i * 2], pts[i * 2 + 1]);
      ctx.strokeStyle = `rgb(${rgb} / ${(((s + 1) / segs) ** 1.6) * (p.accent ? 0.95 : 0.6)})`;
      ctx.lineWidth = p.accent ? 1.6 : 1.3;
      ctx.stroke();
    }
  };

  const loop = () => {
    raf = 0;
    if (!visible || reduceMotion.matches) return;
    ctx.clearRect(0, 0, W, H);
    ctx.drawImage(layer, 0, 0, W, H);
    pulses.forEach((p, i) => {
      p.head += p.speed;
      if (p.head - p.len > p.line.pts.length / 2) pulses[i] = spawn(false) || p;
      else if (p.head > 0) drawPulse(p);
    });
    raf = requestAnimationFrame(loop);
  };
  const startLoop = () => { if (!raf && introDone && visible && !reduceMotion.matches) raf = requestAnimationFrame(loop); };

  const intro = () => {
    const mine = token;
    const begin = performance.now();
    const duration = 1800;
    const tick = (now) => {
      if (mine !== token) return;
      const t = Math.min(1, (now - begin) / duration);
      const e = 1 - (1 - t) ** 3;
      ctx.clearRect(0, 0, W, H);
      lines.forEach((l) => strokeLine(ctx, l, Math.max(4, Math.floor((l.pts.length / 2) * e) * 2)));
      if (t < 1) requestAnimationFrame(tick);
      else { introDone = true; startLoop(); }
    };
    requestAnimationFrame(tick);
  };

  const setup = (animate) => {
    cancelAnimationFrame(raf);
    raf = 0;
    token += 1;
    readColors();
    if (!build()) return;
    paintLayer();
    const count = Math.round(Math.min(26, Math.max(10, W / 60)));
    pulses = Array.from({ length: count }, () => spawn(true)).filter(Boolean);
    if (animate && !reduceMotion.matches) { introDone = false; intro(); }
    else { ctx.clearRect(0, 0, W, H); ctx.drawImage(layer, 0, 0, W, H); introDone = true; startLoop(); }
  };

  // start once the portrait is in and web fonts have settled the layout (max 800 ms)
  const imgReady = portrait.complete ? Promise.resolve() : new Promise((r) => portrait.addEventListener('load', r, { once: true }));
  const fontsReady = Promise.race([document.fonts?.ready ?? Promise.resolve(), new Promise((r) => setTimeout(r, 800))]);
  Promise.all([imgReady, fontsReady]).then(() => { lastKey = key(); setup(true); });

  // pause when the hero is off screen or the tab is hidden
  new IntersectionObserver(([e]) => { visible = e.isIntersecting; startLoop(); }).observe(canvas);
  document.addEventListener('visibilitychange', () => { visible = !document.hidden; startLoop(); });

  let resizeTimer;
  let lastWidth = window.innerWidth;
  window.addEventListener('resize', () => {
    if (window.innerWidth === lastWidth) return; // ignore mobile URL-bar height changes
    lastWidth = window.innerWidth;
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => setup(false), 150);
  });
  const recolor = () => { readColors(); paintLayer(); if (!raf) { ctx.clearRect(0, 0, W, H); ctx.drawImage(layer, 0, 0, W, H); } };
  new MutationObserver(recolor).observe(root, { attributes: true, attributeFilter: ['data-theme'] });
  darkQuery.addEventListener('change', recolor);
  // late web fonts can still shift the portrait; rebuild only if it actually moved
  document.fonts?.ready.then(() => { if (introDone && key() !== lastKey) { lastKey = key(); setup(false); } });
}
