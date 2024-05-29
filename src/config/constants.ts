import path from "path"
import os from "os"

/**
 * 配置文件路径
 */
export const config_path  = path.join(os.homedir(), ".wgc.toml")

/**
 * 发布日志文件路径
 */
export const releases_log_path = path.join(os.homedir(), ".wgc.releases.log")
