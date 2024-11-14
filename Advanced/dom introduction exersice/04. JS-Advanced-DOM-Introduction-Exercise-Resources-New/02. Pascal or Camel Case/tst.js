function compareStrings(str1, str2) {
  // Създаваме множества от редовете в двата текста, като премахваме празните редове и дублиращите се стойности
  const set1 = new Set(str1.split('\n').map(line => line.trim()).filter(line => line !== ''));
  const set2 = new Set(str2.split('\n').map(line => line.trim()).filter(line => line !== ''));

  // Намерете редовете, които са само в едното от множествата
  const onlyInSet1 = [...set1].filter(line => !set2.has(line));
  const onlyInSet2 = [...set2].filter(line => !set1.has(line));

  // Показваме резултатите
  if (onlyInSet1.length === 0 && onlyInSet2.length === 0) {
      console.log("The sets have identical content.");
  } else {
      if (onlyInSet1.length > 0) {
          console.log("Lines only in Set 1:");
          onlyInSet1.forEach(line => console.log(`  - ${line}`));
      }
      if (onlyInSet2.length > 0) {
          console.log("Lines only in Set 2:");
          onlyInSet2.forEach(line => console.log(`  - ${line}`));
      }
  }
}

// Пример за използване:
const string1 = `Снимката на профила на stoevsvetozar
stoevsvetozar
Svetozar Stoev
Снимката на профила на butik_dafitooo
butik_dafitooo
Бутик Дафи
Снимката на профила на simeon.stoev
simeon.stoev
Симеон Стоев
Снимката на профила на gavincormac3333
gavincormac3333
Gavin Cormac
Снимката на профила на chavdarkirkov
chavdarkirkov
чавдар кирков
Снимката на профила на nedkastoycheva
nedkastoycheva
Nedka Stoycheva
Снимката на профила на denis.ismailov.9
denis.ismailov.9
Denis Ismailov
Снимката на профила на schanzyschranz
schanzyschranz
Schanzy Schranz
Снимката на профила на rositsagatova
rositsagatova
Rositsa Gatova
Снимката на профила на ivakissa_1989
ivakissa_1989
Ивайло Стойчев
Снимката на профила на aleksov.georgi
aleksov.georgi
Георги Алексов
Снимката на профила на d.vakavliev
d.vakavliev
Диян Вакъвлиев
Снимката на профила на aleksandrkhristev
aleksandrkhristev
Александър Христев
Снимката на профила на yoanna.mariya
yoanna.mariya
Yoanna-Mariya Sheyredova
Снимката на профила на nadezda.kotrukova
nadezda.kotrukova
Надежда Котрукова
Снимката на профила на hri_yy
hri_yy
Snowhite
Снимката на профила на ivvitanov
ivvitanov
Ivan Vitanov
Снимката на профила на jd.decoration13
jd.decoration13
JD DECORATION
Снимката на профила на ninabakalova
ninabakalova
Nina Bakalova
Снимката на профила на georgi.velkov1
georgi.velkov1
Georgi Velkov
Снимката на профила на dafi_dafitoo
dafi_dafitoo
Дафи Теофанова
Снимката на профила на kirova_bela
kirova_bela
Stoyka Kirova
Снимката на профила на sunayrufad
sunayrufad
Sunay Rufad
Снимката на профила на p.stoevaa
p.stoevaa
Петя Стоева
Снимката на профила на sirmapashkova
sirmapashkova
Сирма Пашкова
Снимката на профила на mtl.0331
mtl.0331
МТЛ
Снимката на профила на kodjebashevshener
kodjebashevshener
Shener Kodjebashev
Снимката на профила на rangova7376
rangova7376
Марияна Рангова
Снимката на профила на karaboiukovapaitalova
karaboiukovapaitalova
Даниела Карабоюкова-Пайталова
Снимката на профила на iliyanatomova
iliyanatomova
Iliyana Tomova
Снимката на профила на petya.pankova
petya.pankova
Петя Панкова
Снимката на профила на veselin_dzhurov_
veselin_dzhurov_
Веселин Джуров
Снимката на профила на _vanso777
_vanso777
Иван Пашков
Снимката на профила на vasilev.k.v
vasilev.k.v
Kostadin Vasilev
Снимката на профила на dimitar.jiv.nikolov
dimitar.jiv.nikolov
Димитър Николов
Снимката на профила на danielsokolov96
danielsokolov96
Даниел Соколов
Снимката на профила на gerisavage0505
gerisavage0505
Gerry Savage
Снимката на профила на alexandra.dim
alexandra.dim
Alexandra Dimitrova
Снимката на профила на khristevveselin
khristevveselin
Веселин Христев
Снимката на профила на d.karayuseinova98
d.karayuseinova98
Дими Кара
Снимката на профила на yu.markovska
yu.markovska
Юрия Марковска
Снимката на профила на mariiana306
mariiana306
марияна илиева
Снимката на профила на daniela_karaboukova
daniela_karaboukova
Даниела Карабоюкова
Снимката на профила на hhristo323
hhristo323
plamen atanasov
Снимката на профила на veronika.kadina
veronika.kadina
Veronika Kadina
Снимката на профила на dj_mironi
dj_mironi
DJ_MIRONI
Снимката на профила на khairieemrula
khairieemrula
Хайрие Емрула
Снимката на профила на ve_petrova
ve_petrova
Ve Petrova
Снимката на профила на ivan_raychinov
ivan_raychinov
Ivan Raychinov
Снимката на профила на denica_radoslav
denica_radoslav
Дени Радо Гаджеви
Снимката на профила на gergana_gogova_nikolova
gergana_gogova_nikolova
Gergana Gogova-Nikolova
Снимката на профила на missaannii
missaannii
Анна Чобанова
Снимката на профила на darena.slchv
darena.slchv
Снимката на профила на fkadirov_
fkadirov_
Ferro Kadir
Снимката на профила на el.tomova
el.tomova
Elena Tomova
Снимката на профила на la620za
la620za
Al Bandi
Снимката на профила на martin_mladenov_photographic
martin_mladenov_photographic
MM_PhotoGraphic
Снимката на профила на todor_kostadinov_666
todor_kostadinov_666
todor kostadinov
Снимката на профила на anittark
anittark
Анитта В
Снимката на профила на mladenkolev1987
mladenkolev1987
Mladen Kolev
Снимката на профила на scanphp
scanphp`; // Въведете вашия текст тук
const string2 = `Снимката на профила на stoevsvetozar
stoevsvetozar
Svetozar Stoev
Снимката на профила на rositsagatova
rositsagatova
Rositsa Gatova
Снимката на профила на mladenkolev1987
mladenkolev1987
Mladen Kolev
Снимката на профила на dafi_dafitoo
dafi_dafitoo
Дафи Теофанова
Снимката на профила на paganini.nails.by.stefi.mileva
paganini.nails.by.stefi.mileva
Paganini Nails By Steffi Mileva
Снимката на профила на jd.decoration13
jd.decoration13
JD DECORATION
Снимката на профила на stefanarvanitov
stefanarvanitov
Стефан Арванитов
Снимката на профила на kirova_bela
kirova_bela
Stoyka Kirova
Снимката на профила на hri_yy
hri_yy
Snowhite
Снимката на профила на veselin_dzhurov_
veselin_dzhurov_
Веселин Джуров
Снимката на профила на nadezda.kotrukova
nadezda.kotrukova
Надежда Котрукова
Снимката на профила на nedkastoycheva
nedkastoycheva
Nedka Stoycheva
Снимката на профила на yoanna.mariya
yoanna.mariya
Yoanna-Mariya Sheyredova
Снимката на профила на d.karayuseinova98
d.karayuseinova98
Дими Кара
Снимката на профила на p.stoevaa
p.stoevaa
Петя Стоева
Снимката на профила на ivvitanov
ivvitanov
Ivan Vitanov
Снимката на профила на aleksandrkhristev
aleksandrkhristev
Александър Христев
Снимката на профила на petya.pankova
petya.pankova
Петя Панкова
Снимката на профила на aleksov.georgi
aleksov.georgi
Георги Алексов
Снимката на профила на gerisavage0505
gerisavage0505
Gerry Savage
Снимката на профила на mikel_plovdiv
mikel_plovdiv
MIkel Coffee Plovdiv
Снимката на профила на stelian_tomov
stelian_tomov
Стелиан Томов
Снимката на профила на georgi.velkov1
georgi.velkov1
Georgi Velkov
Снимката на профила на ve_petrova
ve_petrova
Ve Petrova
Снимката на профила на sirmapashkova
sirmapashkova
Сирма Пашкова
Снимката на профила на alexandra.dim
alexandra.dim
Alexandra Dimitrova
Снимката на профила на chavdarkirkov
chavdarkirkov
чавдар кирков
Снимката на профила на khristevveselin
khristevveselin
Веселин Христев
Снимката на профила на todor_kostadinov_666
todor_kostadinov_666
todor kostadinov
Снимката на профила на kodjebashevshener
kodjebashevshener
Shener Kodjebashev
Снимката на профила на vasilev.k.v
vasilev.k.v
Kostadin Vasilev
Снимката на профила на iliyanatomova
iliyanatomova
Iliyana Tomova
Снимката на профила на anittark
anittark
Анитта В
Снимката на профила на butik_dafitooo
butik_dafitooo
Бутик Дафи
Снимката на профила на simeon.stoev
simeon.stoev
Симеон Стоев
Снимката на профила на ivakissa_1989
ivakissa_1989
Ивайло Стойчев
Снимката на профила на sunayrufad
sunayrufad
Sunay Rufad
Снимката на профила на mariiana306
mariiana306
марияна илиева
Снимката на профила на missaannii
missaannii
Анна Чобанова
Снимката на профила на ivan_raychinov
ivan_raychinov
Ivan Raychinov
Снимката на профила на khairieemrula
khairieemrula
Хайрие Емрула
Снимката на профила на r.k.t.74
r.k.t.74
r.k.t.74
Снимката на профила на _vanso777
_vanso777
Иван Пашков
Снимката на профила на martin_mladenov_photographic
martin_mladenov_photographic
MM_PhotoGraphic
Снимката на профила на birbigs654
birbigs654
Mike Birbiglia
Снимката на профила на dimitar.jiv.nikolov
dimitar.jiv.nikolov
Димитър Николов
Снимката на профила на hhristo323
hhristo323
plamen atanasov
Снимката на профила на gavincormac3333
gavincormac3333
Gavin Cormac
Снимката на профила на denica_radoslav
denica_radoslav
Дени Радо Гаджеви
Снимката на профила на veronika.kadina
veronika.kadina
Veronika Kadina
Снимката на профила на ninabakalova
ninabakalova
Nina Bakalova
Снимката на профила на tosevdimitr
tosevdimitr
Димитър Тосев
Снимката на профила на yu.markovska
yu.markovska
Юрия Марковска
Снимката на профила на alex.ronald9
alex.ronald9
alex
Снимката на профила на darena.slchv
darena.slchv
Снимката на профила на gergana_gogova_nikolova
gergana_gogova_nikolova
Gergana Gogova-Nikolova
Снимката на профила на juliyana_ch
juliyana_ch
Снимката на профила на yoanaatanasova13
yoanaatanasova13
Yoana Atanasova
Снимката на профила на rado4951
rado4951
RADO
Снимката на профила на filip3860
filip3860
Филип
Снимката на профила на zeli82
zeli82
ARAS ♊️💊
Снимката на профила на el.tomova
el.tomova
Elena Tomova
Снимката на профила на fkadirov_
fkadirov_
Ferro Kadir
Снимката на профила на la620za
la620za
Al Bandi
Снимката на профила на denis.ismailov.9
denis.ismailov.9
Denis Ismailov
Снимката на профила на maya_filth
maya_filth
Maya Filth
Снимката на профила на pro40knight
pro40knight
Снимката на профила на futbolista1991
futbolista1991
Qnko Kadiev
Снимката на профила на cbmaw
cbmaw
cbma
Снимката на профила на alexwinters827
alexwinters827
Alex winters
Снимката на профила на schanzyschranz
schanzyschranz
Schanzy Schranz`; // Въведете вашия текст тук

compareStrings(string1, string2);
