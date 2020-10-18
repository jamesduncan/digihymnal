const translations = {
  "en": {
    "Digital Hymnal": "Digital Hymnal",
    "Search": "Search",
    "Cancel": "Cancel",
    "Choose a language": "Choose a language",
    "Back": "Back",
    "Key": "Key",
    "Chords": "Chords",
    "Number Notation": "Number Notation",
    "Intro Verse": "Intro Verse",
    "Main Chorus": "Main Chorus"
  },
  "thai": {
    "Digital Hymnal": "เพลงสวดดิจิตอล",
    "Search": "ค้นหา",
    "Cancel": "ยกเลิก",
    "Choose a language": "เลือกภาษา",
    "Back": "กลับ",
    "Key": "คีย์เพลง",
    "Chords": "คอร์ด",
    "Number Notation": "สัญกรณ์ตัวเลข",
    "Intro Verse": "กลอน",
    "Main Chorus": "คอรัส"
  }
}

export function translate (text) {
  var languageCode = window.languageCode || "en";
  if (!translations[languageCode]) languageCode = "en";
  return translations[languageCode][text];
}