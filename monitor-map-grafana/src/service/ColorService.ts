import hash from 'object-hash';
import randomcolor from 'randomcolor';

class ColorService {
  static getColor(seed: string) {
    return randomcolor({
      seed: hash(seed),
      format: 'hex',
      luminosity: 'bright',
    });
  }
}

export default ColorService;
