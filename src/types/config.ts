export interface IConfigGlobal {
  git_remote_url: string
  jira_url: string
  jenkins_url: string
}

export type StatusType = "todo" | "doing" | "done"

export interface IConfigProjectRequest {
  jira_tag: string
  description: string
  branch: string
  status: StatusType
}

export interface IConfigProjectRelease {
  branch: string
  status: StatusType
  pipline_tag: string
  linked_requests_branches: string[]
}

export interface IConfigProject {
  name: string
  repo: string
  pipline: string
  qas_url: string
  requests: IConfigProjectRequest[]
  releases: IConfigProjectRelease[]
}

export interface IConfig {
  global: IConfigGlobal
  projects: IConfigProject[]
}
