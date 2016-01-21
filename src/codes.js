import { default as Parser } from 'lircd-conf-parser';
import { readFileSync } from 'fs';

export default class Codes {
  static read(file) {
    let content = readFileSync(file);
    return Parser.parse(content.toString());
  }
}
