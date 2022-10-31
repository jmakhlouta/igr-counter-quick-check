import type { RankResponse, RankRequest } from "./rank-model";
import { send } from "./client";

const rankEndpoint = "/google/rank";

export async function rank(request: RankRequest) {
  return (await send<RankRequest, RankResponse>(rankEndpoint, "POST", request)).data;
}