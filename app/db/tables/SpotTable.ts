import * as z from "zod";

import { generatedNumber, timestamps } from "../zod-utils.ts";

const SpotTable = z.object({
  id: generatedNumber(),
  name: z.string(),
  list_id: z.number(),
  user_id: z.number(),
  description: z.string(),
  // TODO: z.use(),point type...
  latitude: z.number(),
  longitude: z.number(),
  ...timestamps(),
});

type SpotTable = z.infer<typeof SpotTable>;

export default SpotTable;
