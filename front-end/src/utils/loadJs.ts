export const loadJs = (src: string, id: string = '') => {
  return new Promise((resolve, _reject) => {
    const js: HTMLScriptElement = document.createElement("script");

    js.id = id;
    js.src = src;
    js.onload = resolve;

    document.body.append(js);
  });
};