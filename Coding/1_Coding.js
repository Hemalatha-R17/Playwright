function normalizeJsBasicsLabel(label) {
  let normalize = label.trim().toLowerCase();
  normalize = normalize.replace(/[^a-z0-9]+/g, "-");
  normalize = normalize.replace(/-+/g, "-");
  normalize = normalize.replace(/^-+|-+$/g, "");
  if (!normalize) {
    return "js-basic";
  }
  return "js-basic-" + normalize;
}