import sharp from "sharp";

const fileName = "icon";
const formats = [
  16, 32, 48, 57, 60, 72, 76, 96, 114, 120, 128, 144, 152, 168, 180, 192, 384,
  400, 512,
];

formats.forEach((format) => {
  sharp(`${fileName}-original.png`)
    .resize({
      width: format,
      height: format,
      fit: "cover",
    })
    .toFile(
      `${fileName}-${format}x${format}.png`,
      (err: Error, info: sharp.OutputInfo) => {
        if (err) {
          console.error("Erreur lors du traitement de l'image:", err);
        } else {
          console.log("Image traitée avec succès:", info);
        }
      }
    );
});
