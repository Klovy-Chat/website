import AOS from 'aos';
import 'aos/dist/aos.css';

export function initAOS() {
  if (typeof window !== 'undefined') {
    AOS.init({
      duration: 700,
      once: true,
      offset: 80,
      easing: 'ease-out-cubic',
    });
  }
}
