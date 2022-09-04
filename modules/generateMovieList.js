module.exports = () => {
  const movies = [
    {
      image: "http://37.221.162.250/uploads/posts/2021-10/1634029810_swan.jpg",
      titleLtu: "Princesė Gulbė. Karališkoji miZterija",
      titleEng: "The Swan Princess: A Royal Myztery",
      genre: ["Animaciniai", "Šeimai"],
      imdbRating: 4.2,
      mpa: 7,
      year: 2018,
      duration: "79 min",
      description:
        "Karalystės gyventojai susiduria su paslaptingu reiškiniu – visur atsirandančiu Z ženklu. Princesė ir jos draugai pajunta, kad kažkas jiems nori perduoti slaptą žinią... Kas tai galėtų būti?",
    },
    {
      image: "http://37.221.162.250/uploads/posts/2021-10/1633429858_gui.jpg",
      titleLtu: "Gitara",
      titleEng: "The Guitar",
      genre: ["Dramos", "Romantiniai", "Muzikiniai"],
      imdbRating: 6.5,
      mpa: 14,
      year: 2008,
      duration: "",
      description:
        "Ši istorija pasakoja apie moterį, kuri susirgo gerklų vėžiu ir iškart po to jai viskas pradėjo slysti iš rankų: ją paliko vaikinas, ji buvo išmesta iš darbo ir t.t. Daktarė jai pasakė, kad jai gyventi liko tik du mėnesiai, tad ji tuos du mėnesius nusprendė nugyventi taip, kaip visada troško.",
    },
    {
      image: "http://37.221.162.250/uploads/posts/2021-09/1633020257_alive.jpg",
      titleLtu: "Niekas neišeina gyvas",
      titleEng: "No One Gets Out Alive",
      genre: ["Dramos", "Siaubo", "Trileriai", "Mistiniai"],
      imdbRating: 5.3,
      mpa: 18,
      year: 2021,
      duration: "",
      description:
        "Imigrantė, ieškanti amerikietiškos svajonės, priversta gyventi pensionate, kur patenka į košmarą, iš kurio negali pasprukti.",
    },
    {
      image:
        "http://37.221.162.250/uploads/posts/2021-10/1634745846_shaggy.jpg",
      titleLtu: "Šuns kailyje",
      titleEng: "The Shaggy Dog",
      genre: ["Komedijos", "Fantastiniai", "Šeimai"],
      imdbRating: 4.4,
      mpa: 14,
      year: 2006,
      duration: "98 min",
      description:
        "A man tries to live a normal life despite the fact that he sometimes turns into a sheepdog.",
    },
    {
      image: "http://37.221.162.250/uploads/posts/2021-09/1633008688_per.jpg",
      titleLtu: "Persekiojimo auka",
      titleEng: "Persecuted",
      genre: ["Veiksmo", "Dramos", "Trileriai", "Mistiniai"],
      imdbRating: 3.5,
      mpa: 18,
      year: 2014,
      duration: "93 min",
      description:
        "Džonas Liuteris - paskutinė kliūtis didelei religinei reformai Amerikoje, tad senatorius jį pagrobia bei melagingai apkaltina paauglės nužudymu. Prasideda sunkiai suvokiamų persekiojimų era. Pasprukęs Liuteris ieško tiesos ir prisiekia paviešinti visus, kurie prisidėjo prie merginos nužudymo ar juo pasinaudojo. Vykdydamas misiją jis susidurs su persekiojimais, kurie grasina sunaikinti visą Amerikos krikščionių bendruomenę.",
    },
    {
      image: "http://37.221.162.250/uploads/posts/2021-10/1634549951_dance.jpg",
      titleLtu: "Mirtini šokiai",
      titleEng: "Dance to Death",
      genre: ["Veiksmo", "Dramos", "Moksliniai"],
      imdbRating: 2.8,
      mpa: 14,
      year: 2017,
      duration: "90 min",
      description:
        "2070-ieji. Maskva. Pasaulis skendi branduolinio karo griuvėsiuose. O žmonijos išlikimas priklauso nuo žiauraus šokių turnyro dalyvių energijos… Bet kai vienas iš pretendentų įsimyli merginą, konkurso dalyvę, ir bet kokia kaina nusprendžia išgelbėti jos gyvybę, kyla grėsmė nusistovėjusiai sistemai…",
    },
    {
      image:
        "http://37.221.162.250/uploads/posts/2021-10/1634732404_titane.jpg",
      titleLtu: "Titanė",
      titleEng: "Titane",
      genre: ["Dramos", "Siaubo", "Trileriai", "Moksliniai"],
      imdbRating: 7.1,
      mpa: 14,
      year: 2021,
      duration: "108 min",
      description:
        "Following a series of unexplained crimes, a father is reunited with the son who has been missing for 10 years. Titane: A metal highly resistant to heat and corrosion, with high tensile strength alloys.",
    },
    {
      image: "http://37.221.162.250/uploads/posts/2021-10/1634731932_macho.jpg",
      titleLtu: "Vyriškos ašaros",
      titleEng: "Cry Macho",
      genre: ["Dramos", "Trileriai", "Vesternai"],
      imdbRating: 5.8,
      mpa: 14,
      year: 2021,
      duration: "104 min",
      description:
        "Mike'as Milo imasi buvusio viršininko darbo, kad parvežtų namo jaunąjį sūnų iš Meksikos.",
    },
    {
      image:
        "http://37.221.162.250/uploads/posts/2021-10/1634731693_college.jpg",
      titleLtu: "Kelionė po koledžus",
      titleEng: "College Road Trip",
      genre: ["Komedijos", "Dramos", "Nuotykiai", "Šeimai"],
      mpa: 7,
      imdbRating: 4.3,
      year: 2008,
      duration: "83 min",
      description:
        "When an overachieving high school student decides to travel around the country to choose the perfect college, her overprotective cop father decides to accompany her to keep her on the straight and narrow.",
    },
    {
      image:
        "http://37.221.162.250/uploads/posts/2021-10/1634731160_musical.jpg",
      titleLtu: "Vidurinės mokyklos miuziklas 3",
      titleEng: "High School Musical 3: Senior Year",
      genre: ["Komedijos", "Dramos", "Romantiniai", "Šeimai", "Muzikiniai"],
      imdbRating: 4.9,
      mpa: 14,
      year: 2008,
      duration: "117 min",
      description:
        "As seniors in high school, Troy and Gabriella struggle with the idea of being separated from one another as college approaches. Along with the rest of the Wildcats, they stage a spring musical to address their experiences, hopes and fears about their future.",
    },
    {
      image: "http://37.221.162.250/uploads/posts/2021-10/1634730926_force.jpg",
      titleLtu: "G Būrys",
      titleEng: "G-Force",
      genre: [
        "Veiksmo",
        "Animaciniai",
        "Komedijos",
        "Fantastiniai",
        "Nuotykiai",
        "Šeimai",
      ],
      imdbRating: 5.1,
      mpa: 7,
      year: 2009,
      duration: "88 min",
      description:
        "A specially trained squad of guinea pigs is dispatched to stop a diabolical billionaire from taking over the world.",
    },
    {
      image:
        "http://37.221.162.250/uploads/posts/2021-10/1634730517_copshop.jpg",
      titleLtu: "Jokių liudininkų",
      titleEng: "Copshop",
      genre: ["Veiksmo", "Trileriai", "Kriminaliniai"],
      imdbRating: 6.3,
      mpa: 14,
      year: 2021,
      duration: "",
      description:
        "В маленьком городке в жестоком противостоянии сталкиваются профессиональный киллер и знаменитый аферист. Между молотом и наковальней оказывается девушка-новичок, едва успевшая заступить на службу в местный полицейский участок.",
    },
    {
      image: "http://37.221.162.250/uploads/posts/2021-10/1634730203_night.jpg",
      titleLtu: "Nakties iltys",
      titleEng: "Night Teeth",
      genre: ["Veiksmo", "Dramos", "Siaubo", "Trileriai", "Kriminaliniai"],
      imdbRating: 6.1,
      mpa: 18,
      year: 2021,
      duration: "",
      description:
        "A college student moonlighting as a chauffeur picks up two mysterious women for a night of party-hopping across LA. But when he uncovers their bloodthirsty intentions - and their dangerous, shadowy underworld - he must fight to stay alive.",
    },
    {
      image: "http://37.221.162.250/uploads/posts/2021-10/1634730081_lost.jpg",
      titleLtu: "Pasiklydę per Kalėdas",
      titleEng: "Lost at Christmas",
      genre: ["Komedijos", "Romantiniai"],
      imdbRating: 5.2,
      mpa: 7,
      year: 2020,
      duration: "101 min",
      description:
        "In this feel good festive romance, two strangers come together to try and get home for Christmas.",
    },
    {
      image:
        "http://37.221.162.250/uploads/posts/2021-10/1634729839_killed.jpg",
      titleLtu: "Vaikinas, kuris nužudė mano tėvus",
      titleEng: "The Boy Who Killed My Parents",
      genre: ["Dramos", "Trileriai", "Kriminaliniai"],
      imdbRating: 6.2,
      mpa: 18,
      year: 2021,
      duration: "",
      description:
        "The film presents de Suzane von Richthofen's point of view of the events that led to the death of her parents. A real crime drama about one of the most shocking murder cases of Brazil.",
    },
    {
      image: "http://37.221.162.250/uploads/posts/2021-10/1634728852_runt.jpg",
      titleLtu: "Runt",
      titleEng: "",
      genre: ["Dramos", "Trileriai"],
      imdbRating: 6,
      mpa: 14,
      year: 2020,
      duration: "95 min",
      description:
        "Neglected and unsupervised, a group of high school seniors are pulled into a downward cycle of violence.",
    },
    {
      image:
        "http://37.221.162.250/uploads/posts/2021-10/1634728665_whitetail.jpg",
      titleLtu: "Baltauodegis",
      titleEng: "Whitetail",
      genre: ["Trileriai"],
      imdbRating: 6.3,
      mpa: 14,
      year: 2021,
      duration: "119 min",
      description:
        "WHITETAIL follows a broken family consisting of a father, an uncle and the son as they embark on a weekend hunting trip out in West Texas. The mother has recently died of an overdose and the trio hope to get away from it all by being out in nature and hunting. Instead they find a mysterious man, shot in the stomach and clutching onto a backpack full of money. Who shot the man? Where did the money come from, and how long will they survive while criminals are all out looking for the cash?",
    },
    {
      image: "http://37.221.162.250/uploads/posts/2021-09/1632994219_mosul.jpg",
      titleLtu: "Mosulas",
      titleEng: "Mosul",
      genre: ["Veiksmo", "Dramos"],
      imdbRating: 7.2,
      mpa: 14,
      year: 2019,
      duration: "86 min",
      description:
        "Mosulo policijos komanda kaunasi su ISIS sukilėliais dėl šio Irako miesto išvadavimo.",
    },
    {
      image: "http://37.221.162.250/uploads/posts/2021-10/1634645281_sec.jpg",
      titleLtu: "Paslaptingas sodas",
      titleEng: "The secret garden",
      genre: ["Animaciniai", "Šeimai"],
      mpa: 7,
      imdbRating: 6.2,
      year: 1994,
      description:
        "Istorija apie jauną našlaitę, kuri ateina gyventi pas dėdė i jo paslaptingą šeimą ir atranda užrakintą sodą, kuris tampa didžiausia paslaptimi!",
    },
  ];

  return movies;
};
