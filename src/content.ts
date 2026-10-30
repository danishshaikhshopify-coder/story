// This is the user's final, approved original story, transcribed verbatim.
// Do not rewrite, shorten, paraphrase or reconstruct any line in `chapters` or `finale`.

export const cover = {
  title: "OUR STORY",
  subtitle: "Dani & Nabia",
  tagline: "A story that started with a simple comment and became my favourite part of life.",
  hint: "Aapke liye ek chhoti si kahani...",
  openLabel: "Open Our Story ❤️",
};

export type ChapterId =
  | "hamari-shuruaat"
  | "pehli-tasveer-pehla-pyaar"
  | "baaton-ka-safar"
  | "meri-pasand-meri-mohabbat"
  | "hamare-khwaab"
  | "hamesha-tumhare-saath";

export type Paragraph = string | { text: string; italic: true };

export interface Chapter {
  id: ChapterId;
  number: number;
  title: string;
  tagline: string;
  paragraphs: Paragraph[];
  emphasisLine?: string;
}

export const chapters: Chapter[] = [
  {
    id: "hamari-shuruaat",
    number: 1,
    title: "Hamari Shuruaat",
    tagline: "Ek choti si mulaqat, ek khoobsurat safar...",
    paragraphs: [
      "Nabia jii, aapko yaad hai na hum TikTok par mile thay? Aapne meri picture par comment kiya tha aur wahin se humari baat-cheet shuru hui thi.",
      "Pehle hum dost bane, phir best friends aur dheere dheere ek doosre ke itne qareeb aa gaye ke aaj aap meri zindagi ka sabse khaas hissa ban gayi hain.",
      "Aapko pata hai, shuru mein mujhe bilkul andaza nahi tha ke TikTok par hone wali ek choti si mulaqat meri poori zindagi ki itni khoobsurat kahani ban jayegi.",
      "Aur ek baat yaad hai? Jab aap aayi thi toh maine aapko kaha tha ke aap meri behen hain. 😂",
      "Touba touba! Kya pagal tha main! Mujhe kya pata tha ke ek din yehi ladki meri wiffy, meri begum aur meri sabse favourite insaan ban jayegi.",
      "Aap doosron jaisi nahi hain, Nabia. Aapne mera saath diya, mera khayal rakha aur mujhe kabhi akela mehsoos nahi hone diya.",
    ],
    emphasisLine: "Aap chaand hain mera, aap hain toh main hoon, warna main kuch bhi nahi. ❤️",
  },
  {
    id: "pehli-tasveer-pehla-pyaar",
    number: 2,
    title: "Pehli Tasveer, Pehla Pyaar",
    tagline: "Woh ek tasveer jo dil mein reh gayi...",
    paragraphs: [
      "Nabia jii, mujhe woh din aaj bhi yaad hai jab maine aapko pehli baar tasveer mein dekha tha.",
      "Hirabad mein dawat thi, Asar ka waqt tha. Main apni pictures bana raha tha aur achanak aapki Snap aayi.",
      "Maine Snap kholi aur aapko dekha...",
      "Bas phir kya tha! Main kuch der ke liye bilkul sunn reh gaya. Aapko dekh kar blush karne laga. Dimagh mein bas ek hi baat chal rahi thi:",
      { text: "Hayeee! Nabia itni khoobsurat hain!", italic: true },
      "Us din aap poora waqt mere zehan mein rahi. Aapki tasveer dekh kar mera dil aap par aa gaya tha.",
      "Aur sabse khoobsurat baat pata hai kya hai?",
      "Aaj bhi jab main aapki picture dekhta hoon na, toh aap utni hi haseen lagti hain jitni pehli baar lagi thi.",
      "Aapki khoobsurati sirf aapki tasveer mein nahi, balki aapke pyaar, aapki care aur aapke khayal rakhne mein bhi hai.",
      "MashaAllah meri Nabia jii, itna haseen bhi nahi hona chahiye kisi ko! ❤️",
    ],
  },
  {
    id: "baaton-ka-safar",
    number: 3,
    title: "Baaton Ka Safar",
    tagline: "Kab dosti mohabbat ban gayi, pata hi nahi chala...",
    paragraphs: [
      "Humari baatein bhi kitni interesting thi na, Nabia jii?",
      "Pehle thodi bohat laraiyan hoti thin, phir ek doosre ki care, khayal, support aur pyaar badhta gaya.",
      "Aur ab bhi laraiyan kam nahi hui hain! 😂 Lekin kya karein, aapko tang karna aur aapse thoda sa ladna bhi toh mere favourite kaamon mein se hai.",
      "Mujhe yaad hai jab maine pehli baar aapko propose kiya tha. Aap toh maan hi nahi rahi thin! Phir maine itna kaha, itna manaya ke aakhir aap maan hi gayi.",
      "Lekin mujhe sabse zyada tab mehsoos hua ke aap mere liye kitni special hain, jab main akela tha aur aap mere saath khari thin.",
      "Aapki care, aapki tareef aur aapka mera khayal rakhna mere din ko acha bana deta hai.",
      "Aur humare nicknames toh alag hi hain!",
      "Main aapko Motuu bulata hoon aur aap mujhe Chipkali. 😂",
      "Pata nahi hum dono mein se zyada pagal kaun hai, lekin itna zaroor pata hai ke mujhe apni ye pagal si Nabia bohat pyaari hai.",
    ],
  },
  {
    id: "meri-pasand-meri-mohabbat",
    number: 4,
    title: "Meri Pasand, Meri Mohabbat",
    tagline: "Aapki woh choti choti baatein jo mere liye bohat khaas hain...",
    paragraphs: [
      "Nabia, pata hai mujhe aapki sabse achi baat kya lagti hai?",
      "Aap mera khayal rakhti hain. Kabhi mujhse larhti hain toh woh bhi mere liye hi. Main kahin lag jaaun ya mera mood off ho, toh aap tension mein aa jaati hain.",
      "Aap meri har cheez ka dhyan rakhti hain aur mujhe har baat achhe se samjhati hain.",
      "Aapka mujhe baat baat par tang karna, aapki aankhein aur aapke woh pyaare pyaare expressions... hayeee! Sab kuch kitna acha lagta hai.",
      "Aur jab main udaas hota hoon na, toh aap kitni pyaari baatein karke mujhe manati hain. Itne pyaar se samjhati hain ke meri saari narazgi khatam ho jaati hai.",
      "Haan, ek baat ka mujhe afsos bhi hai.",
      "Main apne business aur doosri cheezon mein itna uljha rehta hoon ke kabhi kabhi aapko woh attention nahi de pata jo aap deserve karti hain. Lekin iska matlab kabhi ye nahi ke main aapse kam pyaar karta hoon.",
      "Main shayad har baar apna pyaar bayan nahi kar pata, lekin aap mere liye bohat bohat special hain.",
      "Aur mere liye aapke saath guzra har din favourite hai. ❤️",
    ],
  },
  {
    id: "hamare-khwaab",
    number: 5,
    title: "Hamare Khwaab",
    tagline: "Ek zindagi, jismein aap mere saath hon...",
    paragraphs: [
      "Nabia jii, mujhe future mein aapke liye sab kuch karna hai. Main aapko hamesha apne saath chahta hoon.",
      "Mera ek bohat khoobsurat khwaab hai ke hum dono saath Makkah aur Madina jaayein. Allah hum dono ko ye naseeb farmaye. Ameen. ❤️",
      "Mujhe koi bohat badi ya filmy zindagi nahi chahiye.",
      "Mujhe toh bas aisi zindagi chahiye jahan main office se ghar aaun aur aapse poori raat baatein karun.",
      "Aapko apne haathon se khana khilaaun, aapki har cheez mein help karun, khana banane mein bhi aapka saath doon aur aapki choti choti khushiyon ka khayal rakhun.",
      "Aur agar kabhi zindagi mushkil ho jaaye, toh aap yaad rakhna ke aapka Dani aapke saath khara hoga.",
      "Main aapko samjhaunga, aapka khayal rakhunga aur kabhi aapke khilaaf nahi honga.",
      "Duniya chahe kisi bhi taraf ho, main aapka saath nahi chhorna chahta.",
    ],
    emphasisLine: "Mujhe apna har aane wala kal aapke saath chahiye, meri Nabia.",
  },
  {
    id: "hamesha-tumhare-saath",
    number: 6,
    title: "Hamesha Tumhare Saath",
    tagline: "Meri aakhri mohabbat, mera sabse khoobsurat rishta...",
    paragraphs: [
      "Nabia jii, agar aap abhi mere saamne hoti na, toh main sabse pehle aapka haath pakarta, aapko gale lagata aur shayad bohat rota.",
      "Phir aapse duniya bhar ke logon ki shikayatein karta aur aap mujhe apne pyaare andaaz mein samjhati.",
      "Mujhe pata hai main perfect nahi hoon. Mujhse galtiyan bhi hoti hain, kabhi main aapko attention nahi de pata aur kabhi apni baatein theek se samjha nahi pata.",
      "Lekin meri ek baat hamesha yaad rakhna:",
      "Main aapse shaadi karna chahta hoon. Aapke saath apni poori zindagi guzarna chahta hoon.",
      "Mera wada hai ke aapke siwa meri mohabbat kisi aur ke liye nahi hogi. Aap hi meri aakhri mohabbat hain.",
      "Main hamesha aapka bankar rehna chahta hoon.",
      "Aur agar kabhi main paas na bhi hoon, toh apna khayal zaroor rakhna. Overthink mat karna. Kabhi ye mat sochna ke aapke saath koi nahi hai.",
      "Aapka Dani hamesha aapke saath hai. Bas ek awaaz dena, main aapke paas aa jaunga.",
      "Aur haan, meri Motuu, mujhe hamesha apne paas rakhna. ❤️",
    ],
  },
];

export const finale = {
  miniHeading: "Aakhri Alfaaz...",
  urduCoupletLines: ["محبت کا سب سے حسین احساس تم ہو،", "میرے دل کے سب سے قریب شخص تم ہو۔"],
  coupletLines: ["Mohabbat ka sabse haseen ehsaas tum ho,", "Mere dil ke sabse qareeb shakhs tum ho."],
  signatureLines: ["Hamesha tumhara,", "𝓓𝓪𝓷𝓲 ♡", "For my Nabia, my Motuu, my Moon."],
};
