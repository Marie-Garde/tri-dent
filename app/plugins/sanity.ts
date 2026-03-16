import { initSanity } from "~/lib/sanity";

export default defineNuxtPlugin(() => {
  const config = useRuntimeConfig();
  initSanity(
    config.public.sanityProjectId as string,
    config.public.sanityDataset as string,
  );
});
