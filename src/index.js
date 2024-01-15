import { getFileType, domainProcess } from "./utils"

const urlPattern = /(https?:\/\/[^/]*)/g;

export default function addDnsPrefetch(options){
  let urls = new Set();
  return {
    name: "vite-plugin-dns-prefetcher",
    apply: "build",
    enforce: "post",
    transform(code, id){
      if (/node_modules/.test(id)) return code; // node_modules里的文件不执行该插件
      const validateFile = (options.fileIncludes ?? ['ts', 'js']).includes(getFileType(id)); // 过滤文件类型
      if(!validateFile) return;
      let transformCode = code;
      const matches = transformCode.match(urlRegex({strict: true}));
      if(matches){
        const domains = domainProcess(matches, options);
        domains.forEach(url => {
          const match = url.match(urlPattern);
          match.forEach(domain => urls.add(domain))
        })
      }
    },
    transformIndexHtml(html) {
      if(urls.size > 0){
        return [...urls].map(url => {
          return {
            tag: "link",
            attrs: {
              rel: "dns-prefetch",
              href: url
            },
            children: "",
            injectTo: "head-prepend"
          }
        })
      }
      return html;
    },
  }
}