import { Command } from "commander"
import { version, description } from "../package.json"

const program = new Command()

program.name("work-git-cli").description(description).version(version)

// TODO: 初始化项目配置
program.command("init")

// TODO: 新增需求
program.command("request")

// TODO: 发布测试环境
program.command("test")

// TODO: 项目发版
program.command("release")

program.parse(process.argv)
