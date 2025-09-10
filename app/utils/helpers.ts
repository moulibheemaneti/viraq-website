
export const handleDownloadApp = () => {
   window.open("/variq.dmg");
   // Show a toast message indicating download started
   // If you use a global $toast or similar, adjust as needed
   if (typeof window !== "undefined" && (window as any).$toast) {
      (window as any).$toast.success("Download started.");
   } else {
      alert("Download started");
   }
};
