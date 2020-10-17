import locale from 'locale-code';

//Add for non iso languages - copied some from wikipedia, not sure if its correct.
const customLocales = [
  {name:"Central Tibetan", local:"དབུས་སྐད", location: "", tag: "ct"},
  {name:"Central Tibetan Romanized", local:"Ü-Tsang", location: "", tag: "ctr"},
  {name:"Amdo Tibetan", local:"ཨ་མདོ་སྐད", location: "", tag: "at"},
  {name:"Amdo Tibetan Romanized", local:"Amdolese", location: "", tag: "atr"},
];


export function getLocale(code) {
  var locale = locale.getByTag(code);
  if (locale === 'undefined') {
    locale = customLocales.find( ({tag}) => tag === code );
  }
  return locale;
}
