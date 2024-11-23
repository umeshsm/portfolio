export type Page = {
  TITLE: string
  DESCRIPTION: string
}

export interface Site extends Page {
  AUTHOR: string
}

export type Links = {
  TEXT: string
  HREF: string
}[]

export type Socials = {
  NAME: string
  ICON: string
  TEXT: string
  HREF: string
}[]

export type Tech = {
  TEXT: string
  ICON: string
  HREF: string
}

export type TechStack = Record<string, Tech[]>
