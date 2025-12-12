<template>
  <div class="portable-text">
    <template v-for="(block, index) in blocks" :key="index">
      <!-- Bloc de texte standard -->
      <component
        v-if="block._type === 'block'"
        :is="getBlockComponent(block.style)"
        :class="`block-${block.style || 'normal'}`"
      >
        <template
          v-for="(child, childIndex) in block.children"
          :key="childIndex"
        >
          <strong v-if="child.marks?.includes('strong')">{{
            child.text
          }}</strong>
          <em v-else-if="child.marks?.includes('em')">{{ child.text }}</em>
          <u v-else-if="child.marks?.includes('underline')">{{ child.text }}</u>

          <a
            v-else-if="hasLinkMark(child.marks, block.markDefs)"
            :href="getLinkHref(child.marks, block.markDefs)"
            target="_blank"
            rel="noopener noreferrer"
          >
            {{ child.text }}
          </a>
          <span v-else>{{ child.text }}</span>
        </template>
      </component>

      <!-- Bloc image -->
      <figure
        v-else-if="block._type === 'imageBlock'"
        :class="['image-block', getImageClass(index)]"
      >
        <img
          :src="urlFor(block).width(1200).url()"
          :alt="block.alt"
          loading="lazy"
        />
        <figcaption v-if="block.caption">{{ block.caption }}</figcaption>
      </figure>

      <!-- Bloc vidéo -->
      <figure v-else-if="block._type === 'videoBlock'" class="video-block">
        <video controls>
          <source :src="getFileUrl(block.asset._ref)" />
          Votre navigateur ne supporte pas la vidéo.
        </video>
        <figcaption v-if="block.caption">{{ block.caption }}</figcaption>
      </figure>

      <!-- Bloc encadré -->
      <div
        v-else-if="block._type === 'callout'"
        :class="['callout', `callout--${block.type || 'info'}`]"
      >
        <p>{{ block.text }}</p>
      </div>
    </template>
  </div>
</template>

<script setup lang="ts">
import { urlFor } from "~/lib/sanity";

const props = defineProps<{
  blocks: any[];
}>();

function getBlockComponent(style?: string) {
  const componentMap: Record<string, string> = {
    h2: "h2",
    h3: "h3",
    h4: "h4",
    blockquote: "blockquote",
    normal: "p",
  };
  return componentMap[style || "normal"] || "p";
}

function hasLinkMark(marks: string[] = [], markDefs: any[] = []) {
  if (!marks || !markDefs) return false;
  return marks.some((mark) =>
    markDefs.some((def) => def._key === mark && def._type === "link")
  );
}

function getLinkHref(marks: string[] = [], markDefs: any[] = []) {
  if (!marks || !markDefs) return "#";
  const linkMark = marks.find((mark) =>
    markDefs.some((def) => def._key === mark && def._type === "link")
  );
  if (!linkMark) return "#";
  const linkDef = markDefs.find((def) => def._key === linkMark);
  return linkDef?.href || "#";
}

function getFileUrl(ref: string) {
  const config = useRuntimeConfig();
  const [_file, id, extension] = ref.split("-");
  return `https://cdn.sanity.io/files/${config.public.sanityProjectId}/${config.public.sanityDataset}/${id}.${extension}`;
}

// Déterminer si l'image est suivie d'une autre image
function getImageClass(index: number) {
  const currentBlock = props.blocks[index];
  const nextBlock = props.blocks[index + 1];
  const prevBlock = props.blocks[index - 1];

  const isImageBlock = (block: any) => block?._type === "imageBlock";

  // Si l'image suivante est aussi une image
  if (isImageBlock(nextBlock)) {
    return "image-paired image-paired--first";
  }

  // Si l'image précédente était une image
  if (isImageBlock(prevBlock)) {
    return "image-paired image-paired--second";
  }

  // Image seule
  return "image-single";
}
</script>

<style scoped lang="scss">
@use "@/assets/scss/variables" as *;

.portable-text {
  blockquote {
    border-left: 4px solid $color-primary;
    padding-left: $spacing-md;
    font-style: italic;
    background-color: $color-bg-blue;
    padding: $spacing-md;
  }

  a {
    color: $color-primary;
    text-decoration: underline;

    &:hover {
      opacity: 0.8;
    }
  }

  strong {
    font-weight: 600;
  }

  em {
    font-style: italic;
  }

  u {
    text-decoration: underline;
  }

  .image-block {
    margin: $spacing-lg 0;

    img {
      width: 100%;
      height: auto;
      border-radius: $border-radius;
    }

    figcaption {
      text-align: center;
      font-size: 14px;
      margin-top: $spacing-sm;
      font-style: italic;
    }
  }

  // Image seule : max 50% et centrée
  .image-single {
    max-width: 50%;
    margin-left: auto;
    margin-right: auto;
  }

  // Images côte à côte
  .image-paired {
    display: inline-block;
    width: 49%;
    vertical-align: top;

    &--first {
      margin-right: 2%;
    }

    &--second {
      margin-top: $spacing-lg;
    }
  }

  .video-block {
    margin: $spacing-lg 0;

    video {
      width: 100%;
      border-radius: $border-radius;
    }

    figcaption {
      text-align: center;
      font-size: 14px;
      margin-top: $spacing-sm;
      font-style: italic;
    }
  }

  .callout {
    padding: $spacing-md;
    border-radius: $border-radius;
    margin: $spacing-md 0;
    border-left: 4px solid;

    &--info {
      background-color: #e0f2fe;
      border-color: #0284c7;
      color: #075985;
    }

    &--warning {
      background-color: #fef3c7;
      border-color: #f59e0b;
      color: #92400e;
    }

    &--tip {
      background-color: #dcfce7;
      border-color: #10b981;
      color: #065f46;
    }

    p {
      margin: 0;
    }
  }
}

@media (max-width: 768px) {
  .portable-text {
    // Sur mobile, toutes les images prennent 100% de largeur
    .image-single,
    .image-paired {
      max-width: 100%;
      width: 100%;
      display: block;
      margin-left: 0;
      margin-right: 0;
    }

    .image-paired--first {
      margin-right: 0;
      margin-bottom: $spacing-md;
    }
  }
}
</style>
