import { TaiwanFormater } from 'formaters';

const classes = {
  TaiwanFormater
};

class ID {
  constructor(country) {
    /* Capitalize */
    this.change(country);
  }

  change(country) {
    this.country = country.replace(/\b\w/g, l => l.toUpperCase());
    const formater = new classes[`${this.country}Formater`]();
    this.check    = formater.check;
    this.generate = formater.generate;
  }
}

export default ID;
