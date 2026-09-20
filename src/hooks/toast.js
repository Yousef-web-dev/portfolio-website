// بديل document.getElementById — أي component يقدر يستدعي showToast
export function showToast(type, icon, title, sub) {
  window.dispatchEvent(
    new CustomEvent("app:toast", { detail: { type, icon, title, sub } })
  );
}
