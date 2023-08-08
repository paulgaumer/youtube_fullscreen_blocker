window.addEventListener(
  'dblclick',
  (event) => {
    if (event.target.matches('video')) {
      event.stopPropagation();
    }
  },
  true
);
