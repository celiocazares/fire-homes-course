"use server";

import { propertyDataSchema } from "@/validation/propertySchema";
import z from "zod";

export async function createProperty(data: z.infer<typeof propertyDataSchema>) {
  // seu código aqui
  return null;
}
