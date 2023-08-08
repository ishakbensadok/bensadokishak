import { Eye, Pupil } from '../../components/eyes/eyes.styles';

export const startObserving = () => {
  const pupilsEl = Array.from(document.querySelectorAll(Pupil));
  const pointerEl = document.querySelector('.pointer-1');

  const isDesktop = window.innerWidth >= 768; // Assuming 768 as a breakpoint for desktop

  if (isDesktop) {
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('scroll', handleMouseMove);
  }

  document.addEventListener('mouseleave', () => {
    window.requestAnimationFrame(() => {
      pupilsEl.forEach((pupilEl) => {
        pupilEl.style.left = 'auto';
        pupilEl.style.top = 'auto';
      });
    });
  });

  function handleMouseMove(e) {
    const { clientX, clientY } = e;
    window.requestAnimationFrame(() => {
      const boundry = pointerEl.getBoundingClientRect();
      const mouseX = clientX || boundry.x;
      const mouseY = clientY || boundry.y;

      pupilsEl.forEach((pupilEl) => {
        const eyeEl = pupilEl.closest(Eye);

        const eyeRect = eyeEl.getBoundingClientRect();
        const eyeCenterX = eyeRect.left + eyeRect.width / 2.8;
        const eyeCenterY = eyeRect.top + eyeRect.height / 2.6;

        const angle = Math.atan2(mouseY - eyeCenterY, mouseX - eyeCenterX);
        const maxDistance = (eyeRect.width - pupilEl.offsetWidth) / 2.8;
        const newX = Math.cos(angle) * maxDistance + eyeCenterX - eyeRect.left;
        const newY = Math.sin(angle) * maxDistance + eyeCenterY - eyeRect.top;

        pupilEl.style.left = newX + 'px';
        pupilEl.style.top = newY + 'px';
      });
    });
  }
};
