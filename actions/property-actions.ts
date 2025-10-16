"use server";

import { propertyDataSchema } from "@/validation/propertySchema";
import z from "zod";

// it was first used because the new-property-form file wasnt accepting this function in a use client enviroment

export async function createProperty(data: z.infer<typeof propertyDataSchema>) {
  // seu código aqui
  console.log("Data -->", { data });
  return null;
}
