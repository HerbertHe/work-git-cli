import { execSync } from "child_process"

/**
 * 获取远程仓库地址
 * @returns
 */
export const getRemoteUrl = () => {
  const remoteUrl: string[] = []
  execSync("git remote -v")
    .toString()
    .split("\n")
    .filter((l) => !!l.trim())
    .forEach((line) => {
      const [_, url] = line
        .trim()
        .split(/\s+/g)
        .filter((s) => !!s)
      if (!remoteUrl.includes(url)) {
        remoteUrl.push(url)
      }
    })
  return remoteUrl
}

/**
 * 获取本地分支
 * @returns
 */
export const getLocalBranches = () => {
  const branches: string[] = []
  execSync("git branch")
    .toString()
    .split("\n")
    .filter((l) => !!l.trim())
    .forEach((line) => {
      branches.push(line.trim())
    })
  return branches
}

export const getCurrentLocalBranch = () => {
  return execSync("git branch --show-current").toString().trim()
}
