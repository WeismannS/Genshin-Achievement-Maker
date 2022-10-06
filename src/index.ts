/* eslint-disable no-unused-expressions */
import { createCanvas, loadImage, registerFont,Canvas,CanvasRenderingContext2D } from 'canvas';
import { Stream } from 'stream';
import * as path from 'path'
export async function genshinAchievement(text: string): Promise<Stream|never> {
  registerFont(path.join(__dirname, "..", 'lib','assets', 'zh-cn.ttf'), { family: 'genshin' })
  const s: string = text.trim();
  if (s.trim() == "" ||s.trim().length>50) return new Promise((resolve, reject) => {
      reject("Length must be less than 50 characters and not empty");
  });
  const space : number = (`"` + s).slice(0, 25).lastIndexOf(' ')
  const Lines: string[] = [
    (`"`+ s).slice(0, space!=-1? space : 24) +  (space!=-1? "":"-"),
    ("\"" + s).slice(space!=-1?space:24) + "\""
  ];
  const canvas: Canvas = createCanvas(719, 270);
  const ctx : CanvasRenderingContext2D  = canvas.getContext('2d');
  const myimg = await loadImage(path.join(__dirname, "..", 'lib','assets', 'row-2-column-1.png'));
  ctx.drawImage(myimg, 0, 0, 719, 270);
  ctx.font = '28px "genshin"';
  ctx.fillStyle = '#8c7d6f';
  ctx.fillText(s.length > 27 ? Lines[0] : `"` + s + `"`, 220, 145);
  s.length > 25 ? ctx.fillText(Lines[1], 225, 190) : '';
  return canvas.createPNGStream()}