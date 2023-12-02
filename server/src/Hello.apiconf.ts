import { z } from "zod";
import { APIConfig, transformPath } from "@/src/shared/tsdk-helper";

/**
 * Get hello ({@link APIConfig})
 * @category hello
 */
export const GetHelloConfig: APIConfig = {
  type: "user",
  method: "get",
  path: transformPath("GetHello"),
  description: "Get hello",
  category: "hello",
  needAuth: false,
};
/**
 *
 * @category hello
 */
export type GetHelloReq = {};

/**
 *
 * @category hello
 */
export type GetHelloRes = {
  result: string;
};
// --------- GetHello END ---------

/**
 * Update hello ({@link APIConfig})
 * @category hello
 */
export const UpdateHelloConfig = {
  type: "user" as const,
  method: "post" as const,
  path: transformPath("UpdateHello"),
  description: "Update hello",
  category: "hello",
  needAuth: false,
  schema: z.object({
    payload: z.string().min(1),
  }),
};
/**
 *
 * @category hello
 */
export type UpdateHelloReq = z.infer<typeof UpdateHelloConfig.schema>;
// export type UpdateHelloReq = {payload: string};
/**
 *
 * @category hello
 */
export type UpdateHelloRes = {
  result: string;
};
// --------- UpdateHello END ---------
