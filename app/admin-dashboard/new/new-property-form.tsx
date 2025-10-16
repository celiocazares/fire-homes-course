"use client";

// import { createProperty } from "@/actions/property-actions";
import PropertyForm from "@/components/property-form";
import { propertyDataSchema } from "@/validation/propertySchema";
import { PlusCircleIcon } from "lucide-react";
import z from "zod";

export default function NewPropertyForm() {
  async function createProperty(data: z.infer<typeof propertyDataSchema>) {
    // seu código aqui
    console.log("Data -->", { data });
    return null;
  }
  return (
    <div>
      <PropertyForm
        handleSubmit={createProperty}
        submitButtonLabel={
          <>
            <PlusCircleIcon /> Create Property
          </>
        }
      />
    </div>
  );
}
