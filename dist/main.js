function n() {
  return {
    name: "vite-plugin-dns-prefetcher",
    apply: "build",
    enforce: "post",
    transformIndexHtml(e) {
      console.log("=====transform html=======");
    },
    buildEnd(e) {
      console.log("===========build end======");
    }
  };
}
export {
  n as default
};
