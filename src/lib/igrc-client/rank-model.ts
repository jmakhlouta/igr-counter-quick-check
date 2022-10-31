export type RankRequest = {
  keywords: string[], 
  url: string
}

export type RankResponse = {
  ranks: { [name: string]: number }
}
