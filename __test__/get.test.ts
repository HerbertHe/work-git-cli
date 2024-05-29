import { describe, it } from "vitest"
import {
  getCurrentLocalBranch,
  getLocalBranches,
  getRemoteUrl,
} from "../src/git"

describe("测试 get 方法", () => {
  it("测试获取远程路径", () => {
    const urls = getRemoteUrl()
    console.log(urls)
  })

  it("测试获取本地分支", () => {
    const branch = getLocalBranches()
    console.log(branch)
  })

  it("测试获取当前分支", () => {
    const branch = getCurrentLocalBranch()
    console.log(branch)
  })
})
