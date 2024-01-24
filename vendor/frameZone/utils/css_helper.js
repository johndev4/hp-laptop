export async function combineCSSStyleSheet(asyncImports) {
  return !asyncImports
    ? []
    : Array.isArray(asyncImports)
    ? Promise.all(
        asyncImports.map((item) =>
          item
            .then((m) => {
              // if (m.default instanceof CSSStyleSheet) return m.default;
              // const cssStyle = new CSSStyleSheet();
              // cssStyle.replaceSync(m.default);
              // return cssStyle;
              return m.default;
            })
            .catch((err) => console.error("🌋importCSSStyleSheet ERROR:", err))
        )
      )
    : asyncImports
        .then((m) => {
          // if (m.default instanceof CSSStyleSheet) return m.default;
          // const cssStyle = new CSSStyleSheet();
          // cssStyle.replaceSync(m.default);
          // return cssStyle;
          return m.default;
        })
        .catch((err) => console.error("🌋importCSSStyleSheet ERROR:", err));
}
