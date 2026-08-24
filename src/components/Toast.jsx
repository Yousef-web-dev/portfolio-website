export default function Toast() {
  return (
    <div id="toast">
      <span className="text-xl" id="toastIcon">✅</span>
      <div className="flex flex-col gap-0.5">
        <span className="block text-[0.92rem] font-bold text-text" id="toastTitle">Message sent!</span>
        <span className="block text-[0.8rem] font-normal text-muted" id="toastSub">I'll get back to you soon.</span>
      </div>
    </div>
  );
}
