export const appendScript = (scriptToAppend) => {
  const script = document.createElement('script');
  script.src = scriptToAppend;
  script.async = true;
  script.type = 'text/babel';
  document.body.appendChild(script);
};
