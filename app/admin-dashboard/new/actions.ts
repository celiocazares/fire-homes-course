"use server";

import { auth, firestore } from "@/firebase/server";
import { propertyDataSchema } from "@/validation/propertySchema";

export const saveNewProperty = async (data: {
  address1: string;
  address2?: string;
  city: string;
  postcode: string;
  description: string;
  price: number;
  bathrooms: number;
  bedrooms: number;
  status: "sale" | "draft" | "withdrawn" | "sold";
  token: string;
}) => {
  const { token, ...propertyData } = data;
  const verifiedToken = await auth.verifyIdToken(token);
  if (!verifiedToken.admin) {
    return {
      error: true,
      message: "Unauthorized",
    };
  }

  const validation = propertyDataSchema.safeParse(propertyData);
  if (!validation.success) {
    return {
      error: true,
      message: validation.error.issues[0]?.message ?? "An error ocurred",
    };
  }

  // actually creating the property and inserting in the database
  const property = await firestore.collection("properties").add({
    ...propertyData,
    created: new Date(),
    updated: new Date(),
  });

  return {
    propertyId: property.id,
  };
};
