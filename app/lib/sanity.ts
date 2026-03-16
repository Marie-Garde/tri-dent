import { createClient } from "@sanity/client";
import { createImageUrlBuilder } from "@sanity/image-url";
import type { SanityClient } from "@sanity/client";

let _client: SanityClient;
let _builder: ReturnType<typeof createImageUrlBuilder>;

export function initSanity(projectId: string, dataset: string) {
  _client = createClient({ projectId, dataset, apiVersion: "2024-01-01", useCdn: true });
  _builder = createImageUrlBuilder(_client);
}

export function getSanityClient(): SanityClient {
  return _client;
}

export function urlFor(source: any) {
  return _builder.image(source);
}
