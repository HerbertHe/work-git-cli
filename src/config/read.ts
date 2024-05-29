import fs from "fs"
import toml from "@iarna/toml"

import { config_path, releases_log_path } from "./constants"

/**
 * 读取配置文件
 * @returns
 */
export const readConfig = () => {
  const content = fs.readFileSync(config_path, "utf-8")
  return toml.parse(content)
}

/**
 * 读取发布日志
 * @returns
 */
export const readReleasesLog = () => {
  return fs.readFileSync(releases_log_path, "utf-8")
}
