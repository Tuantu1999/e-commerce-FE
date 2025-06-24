<script setup lang="ts">
import { onMounted, ref } from "vue";
import * as monaco from "monaco-editor";

const editorContainer = ref<HTMLDivElement | null>(null);
const editor = ref<monaco.editor.IStandaloneCodeEditor | null>(null);

const handleGetValue = () => {
  console.log("editorContainer", editor.value?.getValue() || "");
};

onMounted(() => {
  if (!editorContainer.value) return;

  monaco.languages.register({ id: "sql" });

  // highlight
  monaco.languages.setMonarchTokensProvider("sql", {
    tokenizer: {
      root: [
        [
          /\b(SELECT|FROM|WHERE|AND|OR|INSERT|INTO|VALUES|UPDATE|SET|DELETE|JOIN|INNER|LEFT|RIGHT|FULL|ON|AS|GROUP BY|ORDER BY|HAVING|DISTINCT|LIMIT|OFFSET|UNION|ALL|NOT|NULL|IS|IN|BETWEEN|LIKE|EXISTS|CASE|WHEN|THEN|ELSE|END)\b/i,
          "keyword",
        ],
        [/\b([a-z_][a-z0-9_]*)\b/, "identifier"],
        [/'[^']*'/, "string"],
        [/\d+/, "number"],
      ],
    },
  });

  monaco.languages.registerCompletionItemProvider("sql", {
    provideCompletionItems: () => {
      const functions = [
        "AVG",
        "COUNT",
        "FIRST",
        "LAST",
        "MAX",
        "MIN",
        "SUM",
        "UCASE",
        "LCASE",
        "MID",
        "LEN",
        "ROUND",
        "NOW",
        "FORMAT",
        "IFNULL",
        "COALESCE",
        "CONCAT",
        "SUBSTRING",
        "REPLACE",
        "ABS",
        "ACOS",
        "ASIN",
        "ATAN",
        "CEIL",
        "CEILING",
        "COS",
        "EXP",
        "FLOOR",
        "LOG",
        "LOG10",
        "MOD",
        "PI",
        "POWER",
        "RADIANS",
        "RAND",
        "SIGN",
        "SIN",
        "SQRT",
        "TAN",
        "TRUNCATE",
        "CURRENT_DATE",
        "CURRENT_TIME",
        "CURRENT_TIMESTAMP",
      ];
      const suggestions = functions.map((fn) => ({
        label: fn,
        kind: monaco.languages.CompletionItemKind.Function,
        insertText: fn + "(${1:arg})",
        insertTextRules:
          monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
        documentation: `${fn} function`,
      }));
      return { suggestions };
    },
  });

  editor.value = monaco.editor.create(editorContainer.value, {
    value: "SELECT * FROM users WHERE id = 1;",
    language: "sql",
    theme: "vs-dark",
    automaticLayout: true,
  });
});
</script>

<template>
  <div>
    <div ref="editorContainer" class="h-full w-full border"></div>
  </div>
  <v-btn color="#5865f2" elevated rounded="lg" @click="handleGetValue()"
    >Get value editor</v-btn
  >
</template>

<style scoped>
div {
  height: 100%;
  width: 100%;
}
</style>
