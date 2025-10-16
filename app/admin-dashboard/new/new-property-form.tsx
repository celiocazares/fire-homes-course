"use client";

// import { createProperty } from "@/actions/property-actions";
import PropertyForm from "@/components/property-form";
import { useAuth } from "@/context/auth";
import { propertyDataSchema } from "@/validation/propertySchema";
import { PlusCircleIcon } from "lucide-react";
import z from "zod";
import { saveNewProperty } from "./actions";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

export default function NewPropertyForm() {
  const auth = useAuth();
  const router = useRouter();
  async function createProperty(data: z.infer<typeof propertyDataSchema>) {
    // seu código aqui

    const token = await auth?.currentUser?.getIdToken();
    if (!token) {
      return;
    }

    const response = await saveNewProperty({ ...data, token });

    if (!!response.error) {
      toast.error("Error!", {
        description: response.error,
      });
      return;
    }

    toast.success("Success!", {
      description: "Property created",
    });

    router.push("/admin-dashboard");

    console.log("Data -->", { response });
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
