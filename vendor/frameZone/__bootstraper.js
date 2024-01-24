import { combineCSSStyleSheet } from "@frameZone/utils/css_helper.js";

export function frameworkZone() {
  return {
    bootstrap: function (AppModule) {
      combineCSSStyleSheet([
        import("@styles/styles.css"),
        ...AppModule().styles,
      ]).then((sheets) => {
        document.adoptedStyleSheets = sheets;
        document.querySelector("#app-root").innerHTML =
          AppModule().templateHTML;

        // Initialize app module after the all CSS stylesheets combined
        AppModule().entry();
      });
    },
  };
}
