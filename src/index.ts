/* eslint-disable no-unused-expressions */
import { createCanvas, loadImage, registerFont } from 'canvas';
import { Stream } from 'stream';
export async function genshinAchievement(text: string): Promise<Stream|never> {
  registerFont(__dirname+"\\assests\\zh.cn.ttf", { family: 'genshin' });
  const s: string = text.trim();
  if (s.trim() == "" ||s.trim().length>50) return new Promise((resolve, reject) => {
      reject("Length must be less than 50 characters and not empty");
  });
  const secondLine: string[] = [
    (`"` + s).slice(0, (`"` + s).slice(0, 25).lastIndexOf(' ')),
    (`"` + s).slice((`"` + s).slice(0, 25).lastIndexOf(' ')) + `"`,
  ];
  const canvas = createCanvas(719, 270);
  const ctx = canvas.getContext('2d');
  const myimg = await loadImage(__dirname+"\\assests\\row-2-column-1.png");
  ctx.drawImage(myimg, 0, 0, 719, 270);
  ctx.font = '28px "genshin"';
  ctx.fillStyle = '#8c7d6f';
  ctx.fillText(s.length > 27 ? secondLine[0] : `"` + s + `"`, 220, 145);
  s.length > 25 ? ctx.fillText(secondLine[1], 225, 190) : '';
  return canvas.createPNGStream()}
