const editor = document.getElementById("editor");
const editorBox = document.getElementById("editor-box");
const preview = document.getElementById("preview");
const previewBox = document.getElementById("preview-box");
const icons = document.querySelectorAll(".fa");
const editorIcon = document.getElementById("editorIcon");
const previewIcon = document.getElementById("previewIcon");
const renderer = new marked.Renderer();
marked.setOptions({
  gfm: true, // GitHub Flavored Markdown
  breaks: true, // Line breaks in Markdown
  headerIds: false, // Disable automatic header IDs
  sanitize: true, // Escape HTML
});

editor.addEventListener("input", () => {
  preview.innerHTML = marked.parse(editor.value);
});

document.addEventListener("DOMContentLoaded", function () {
  preview.innerHTML += marked.parse(editor.value);
});

let isClicked = true;

editorIcon.addEventListener("click", () => {
  if (isClicked) {
    editor.style.minHeight = "95vh";
    previewBox.style.display = "none";
    isClicked = false;
  } else {
    editor.style.minHeight = "200px";
    previewBox.style.display = "block";
    isClicked = true;
  }
});

let isClickedIcon2 = true;
previewIcon.addEventListener("click", () => {
  if (isClickedIcon2) {
    preview.style.minHeight = "95vh";
    editorBox.style.display = "none";
    isClickedIcon2 = false;
  } else {
    preview.style.minHeight = "150px";
    editorBox.style.display = "block";
    isClickedIcon2 = true;
  }
});
