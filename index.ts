function renderThumb({
  x,
  y,
  fontSize,
}: {
  x: number;
  y: number;
  fontSize: number;
}) {
  return `
  <text x="${x}" y="${y}" font-size="${fontSize}" font-family="Apple Color Emoji, Segoe UI Emoji, Noto Color Emoji, sans-serif">👍</text>
`;
}

function renderImage({
  width,
  height,
  thumbs,
}: {
  width: number;
  height: number;
  thumbs: string[];
}) {
  return `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${width} ${height}" width="${width}" height="${height}">
  ${thumbs.join("")}
</svg>
`;
}

function main() {
  const width = 600;
  const height = 600;
  const numThumbs = 6;
  const fontSize = 420;

  const xSpacing = width / numThumbs;
  const ySpacing = height / numThumbs;
  const fontSpacing = fontSize / numThumbs;

  const area = width * height;

  const what = (fontSize / area) * Math.pow(numThumbs, 2.97);

  console.error({ fontSpacing, area, what });

  const thumbs = Array.from({ length: numThumbs }, (_, i) => {
    const factor = i * what;

    return renderThumb({
      x: 170 - xSpacing * factor,
      y: 390 + ySpacing * factor,
      fontSize: fontSize - fontSpacing * i * 0.7,
    });
  });
  const image = renderImage({ width, height, thumbs });
  console.log(image);
}

main();
