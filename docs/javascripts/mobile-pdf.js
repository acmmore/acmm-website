(() => {
  if (!/iPad|iPhone|iPod/.test(navigator.userAgent)) return;

  const libraryUrl = "https://cdn.jsdelivr.net/npm/pdfjs-dist@3.11.174/build/pdf.min.js";
  const workerUrl = "https://cdn.jsdelivr.net/npm/pdfjs-dist@3.11.174/build/pdf.worker.min.js";

  function loadLibrary() {
    if (window.pdfjsLib) return Promise.resolve(window.pdfjsLib);
    return new Promise((resolve, reject) => {
      const script = document.createElement("script");
      script.src = libraryUrl;
      script.onload = () => resolve(window.pdfjsLib);
      script.onerror = reject;
      document.head.append(script);
    });
  }

  async function showPdf(frame, pdfjsLib) {
    const url = frame.src;
    const viewer = document.createElement("div");
    viewer.className = "mobile-pdf-viewer";
    frame.after(viewer);

    try {
      const documentPdf = await pdfjsLib.getDocument(url).promise;
      const observer = new IntersectionObserver((entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          observer.unobserve(entry.target);
          entry.target.renderPage();
        }
      }, { rootMargin: "600px" });

      frame.style.display = "none";

      for (let pageNumber = 1; pageNumber <= documentPdf.numPages; pageNumber++) {
        const page = await documentPdf.getPage(pageNumber);
        const canvas = document.createElement("canvas");
        const width = viewer.clientWidth || frame.clientWidth || 320;
        const viewport = page.getViewport({ scale: width / page.getViewport({ scale: 1 }).width });
        canvas.width = Math.ceil(viewport.width * devicePixelRatio);
        canvas.height = Math.ceil(viewport.height * devicePixelRatio);
        canvas.style.width = `${viewport.width}px`;
        canvas.style.height = `${viewport.height}px`;
        canvas.renderPage = () => page.render({
          canvasContext: canvas.getContext("2d"),
          viewport: page.getViewport({ scale: width * devicePixelRatio / page.getViewport({ scale: 1 }).width })
        }).promise.catch(() => {});
        viewer.append(canvas);
        observer.observe(canvas);
      }
    } catch (error) {
      viewer.remove();
      frame.style.display = "";
    }
  }

  document.addEventListener("DOMContentLoaded", async () => {
    const frames = [...document.querySelectorAll('iframe[src$=".pdf"]')];
    if (!frames.length) return;
    try {
      const pdfjsLib = await loadLibrary();
      pdfjsLib.GlobalWorkerOptions.workerSrc = workerUrl;
      await Promise.all(frames.map((frame) => showPdf(frame, pdfjsLib)));
    } catch (error) {
    }
  });
})();
