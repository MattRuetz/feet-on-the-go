export function inview(node, params = {}) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          params.onenter?.();
          if (params.once) observer.unobserve(node);
        } else {
          params.onleave?.();
        }
      });
    },
    {
      threshold: params.threshold || 0,
    },
  );

  observer.observe(node);

  return {
    destroy() {
      observer.unobserve(node);
    },
  };
}
