import { createClient } from "next-sanity";
import { apiVersion, dataset, projectId, isSanityConfigured } from "@/sanity/env";

export const client = isSanityConfigured
  ? createClient({
      projectId,
      dataset,
      apiVersion,
      useCdn: true,
    })
  : null;
