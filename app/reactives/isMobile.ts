import { ref, readonly, onMounted, onBeforeUnmount } from "vue";

const isMobile = ref(false);

export function useIsMobile() {
  let mediaQuery: MediaQueryList;

  const update = (e: MediaQueryList | MediaQueryListEvent) => {
    isMobile.value = e.matches;
  };

  onMounted(() => {
    mediaQuery = window.matchMedia("(max-width: 768px)");
    update(mediaQuery);
    mediaQuery.addEventListener("change", update);
  });

  onBeforeUnmount(() => {
    mediaQuery?.removeEventListener("change", update);
  });

  return readonly(isMobile);
}
