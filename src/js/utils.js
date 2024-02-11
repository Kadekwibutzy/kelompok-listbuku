export function generateElement({
  tag,
  id,
  className,
  value,
  href,
  elementHTML,
  src,
}) {
  const element = document.createElement(tag);

  if (id) element.id = id;
  if (className) element.className = className;
  if (value) element.innerText = value;
  if (elementHTML) element.innerHTML = elementHTML;

  if (tag === "a") element.href = href;
  if (tag === "img") element.src = src;

  return element;
}
