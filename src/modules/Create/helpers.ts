export const dataURLtoFile = (
  dataUrl: string,
  filename: string
): File | null => {
  if (dataUrl) {
    let arr = dataUrl.split(",");
    if (arr.length >= 2 && arr[0]) {
      let mime = arr[0].match(/:(.*?);/)?.[1];
      let bstr = atob(arr[1]);
      let n = bstr.length;
      let u8arr = new Uint8Array(n);

      while (n--) {
        u8arr[n] = bstr.charCodeAt(n);
      }

      if (mime) {
        return new File([u8arr], filename, { type: mime });
      }
    }
  }
  return null;
};
