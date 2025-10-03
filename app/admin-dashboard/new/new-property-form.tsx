"use client";

import { createProperty } from "@/actions/property-actions";
import PropertyForm from "@/components/property-form";

export default function NewPropertyForm() {
  return (
    <div>
      <PropertyForm handleSubmit={createProperty} />
    </div>
  );
}
