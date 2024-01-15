import {getFileType, domainProcess} from '../src/utils'
import {expect, test} from 'vitest'


test("should get js file type", ()=>{
  const fileName = "a.js";
  const fileType = getFileType(fileName);
  expect(fileType).toBe("js")
});

test("should limit dns", () => {
  const domains = [
    "https://www.baidu.com",
    "https://www.github.com",
    "https://www.google.com",
    "https://www.apple.com"
  ];
  const result = domainProcess(domains, {limit: 3});
  expect(result.length).toBe(3);
});

test("should ignore dns", () => {
  const domains = [
    "https://www.baidu.com",
    "https://www.github.com",
    "https://www.google.com",
    "https://www.apple.com"
  ];
  const result = domainProcess(domains, {dnsIgnore: ["https://www.baidu.com"]});
  expect(result).toEqual([
    "https://www.github.com",
    "https://www.google.com",
    "https://www.apple.com"
  ]);
})
