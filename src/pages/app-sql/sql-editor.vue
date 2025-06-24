<script setup lang="ts">
import { onMounted, ref } from "vue";
import * as monaco from "monaco-editor";

const editorContainer = ref<HTMLDivElement | null>(null);

onMounted(() => {
  if (!editorContainer.value) return;

  monaco.languages.register({ id: "sql" });

  monaco.languages.setMonarchTokensProvider("sql", {
    tokenizer: {
      root: [
        [
          /\b(SELECT|FROM|WHERE|AND|OR|INSERT|INTO|VALUES|UPDATE|SET|DELETE)\b/i,
          "keyword",
        ],
        [/\b([a-z_][a-z0-9_]*)\b/, "identifier"],
        [/'[^']*'/, "string"],
        [/\d+/, "number"],
      ],
    },
  });

  monaco.editor.create(editorContainer.value, {
    value: "SELECT * FROM users WHERE id = 1;",
    language: "sql",
    theme: "vs-dark",
    automaticLayout: true,
  });
});
</script>

<template>
  <div class="h-full w-full">
    <div ref="editorContainer" class="h-full w-full border rounded-md"></div>
  </div>
</template>

<style scoped>
div {
  height: 100%;
  width: 100%;
}
</style>
