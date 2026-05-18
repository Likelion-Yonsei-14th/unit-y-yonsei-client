import { axiosInstance } from "./axiosInstance";
import type { BoothListResponse } from "./types/booth";

type GetBoothsParams = {
  date?: number;
  sector?: string;
  isFood?: boolean;
};

export const getBooths = async (params: GetBoothsParams) => {
  const response = await axiosInstance.get<BoothListResponse>("/api/booths", {
    params,
  });

  return response.data.data;
};