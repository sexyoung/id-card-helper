class Formater {
  static get Error() {
    return {
      Empty:  'NotAllowedEmpty',
    };
  }

  check(idCode) {
    try {
      /* is id empty? */
      if (Formater.isEmpty(idCode)) {
        throw new Error(Formater.Error.Empty);
      }
    } catch (e) {
      throw e;
    }
    return true;
  }

  static isEmpty(idCode) {
    if (idCode === '') return true;
    if (idCode === null) return true;
    if (typeof idCode !== 'string') return true;
    return false;
  }
}

export default Formater;
