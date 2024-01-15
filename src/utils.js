function getFileType(filePath) {
  const pathArr = filePath.split(".");
  return pathArr[pathArr.length - 1];
}

function domainProcess(domains, options){
  if(options.limit){
    return domains.slice(0, options.limit);
  }

  if(options.dnsIgnore){
    return domains.filter(url => !options.dnsIgnore.includes(url));
  }

  return domains;
}

export {getFileType, domainProcess}