import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Refenerce","description":"","frontmatter":{"outline":"deep"},"headers":[],"relativePath":"start/refenerce.md","filePath":"start/refenerce.md","lastUpdated":1713254375000}');
const _sfc_main = { name: "start/refenerce.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="refenerce" tabindex="-1">Refenerce <a class="header-anchor" href="#refenerce" aria-label="Permalink to &quot;Refenerce&quot;">​</a></h1><p>This is a fake lodash library.The purpose is not to replace it, but to use the latest JavaScript API for the best implementation in a different way.</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("start/refenerce.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const refenerce = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  refenerce as default
};
