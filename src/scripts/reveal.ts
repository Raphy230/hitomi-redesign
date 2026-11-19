// Scroll reveal: elements with the attribute data-reveal fade and slide up
// when they scroll into view. Shared by all sections below the Hero.
//
// Usage in HTML:  <h2 data-reveal>…</h2>
// Optional:       data-reveal-delay="0.2"  (seconds)
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const mm = gsap.matchMedia();

mm.add('(prefers-reduced-motion: no-preference)', () => {
	// ScrollTrigger.batch groups elements that enter the screen at the same time,
	// so they animate one after another (a "stagger") instead of all at once.
	ScrollTrigger.batch('[data-reveal]', {
		start: 'top 88%', // when the element's top passes 88% of the screen height
		once: true,
		onEnter: (elements) =>
			gsap.fromTo(
				elements,
				{ opacity: 0, y: 36 },
				{
					opacity: 1,
					y: 0,
					duration: 1.1,
					ease: 'power3.out',
					stagger: 0.08,
					delay: (i: number, el: HTMLElement) => Number(el.dataset.revealDelay ?? 0),
				},
			),
	});
	// Hide them until they are revealed (only when animations are allowed —
	// without JavaScript or with reduced motion everything is simply visible).
	gsap.set('[data-reveal]', { opacity: 0 });
});
