const createElementFromTemplate = (template) => {
  const parser = new DOMParser();
  const result = parser.parseFromString(template, `text/html`);
  console.log(result);
  return result.body.firstElementChild;
};

export default createElementFromTemplate;
