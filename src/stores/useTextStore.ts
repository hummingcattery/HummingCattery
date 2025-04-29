import { defineStore } from "pinia";

export const useTextStore = defineStore("text", {
    state: () => ({
      language: "fi",
      texts: {
        fi: {
            welcome: "Tervetuloa FI*Humming pyhä birma -kissalan sivuille!",
            lifeDatesHeader: "s.",
            lifeDatesLongerHeader: "Synt.",
            tom: "isä",
            queen: "emo",
            exhibitionSuccessHeadear: "Näyttelymenestys",
            homeInfo: "Meillä on pentuja! Huldan ja Äijän pentue syntyi 9.4.2025. Pentueessa on yksi tyttö ja kaksi poikaa. Tyttö etsii sijoituskotia.",
            homeInfoSecondary: "11.1.2025 Vilma on uusi Junior Winner!",
            placementTerms: `Lue sijoitusehdoista`,
            newsHeader: "Uutiset",
            kittenBasket: "Pentukori",
            kittenBasketInfo: "Suunnitelmissa pentue Huldalle 2024-2025",
            kittens: "Pennut",
            name: "Nimi",
            color: "Väri",
            gender: "Sukupuoli",
            level: "Taso",
            breederIntrodction1: `Olen Jenni Mäkinen, 36-vuotias alunperin Pirkanmaalta (Vammalasta) ja Tampereen kautta Helsinkiin ponnistanut nainen. Ensimmäisen birmani "Inkun" sain vuonna 2000 ollessani 11-vuotias. Inkku ei koskaan asunut luonani, vaan (FI*Recknagel) -nimellä kasvatusta tehneiden tätieni Marjo ja Merja Mäkisen luona. Inkku oli kuitenkin itselleni se ponnistus siihen, että oma rotuni on ja tulee aina olemaan pyhä birma. Ensimmäisen omaan kotiin muuttaneen kissan Harpun sain vuonna 2008 Zhamanen-kasvattaja Mariia Touroselta, Harppu oli alkuun sijoituksessa ja lopulta omistajuus siirrettiin minulle. Harppu on varmasti se elämäni kissa, kaunein, lempein empaattisin, ei sitä edes pysty selittämään. Harppu menehtyi 15 vuoden iässä vuoden 2023 joulukuussa taisteltuaan 1,5 vuotta maitorauhaskasvaimia vastaan.\n
                                FI*Humming -kasvattajanimen hankin vuonna 2012, ensimmäinen pentue oli Harpun ja TT:n Pink Floyd -pentue, joka syntyi 3.3.2013. Kaikkiin pentueisiin pääsee tutustumaan Pentueet-sivulta.\n
                                Tavoitteenani on kasvattaa terveitä, kauniita, hyväluonteisia birmoja joilla on se oikea "birmalook", myös birmojen geenipoolin laajentaminen on tärkeä arvo kasvatustyössä. Vuonna 2023 haimme kasvattajakollegan kanssa Yhdysvalloista uroksen, vuotta aikaisemmin naaraan Espanjasta, joten "vieraan veren" tuominen kasvatukseen on itselleni äärimmäisen tärkeää.\n
                                Näyttelykärpänen puraisi itseäni jo lapsena, ja kissoillani onkin ollut loistavaa menestystä aikanaan näyttelyrintamalla ("Halka" SC SP FI*Recknagel Tairapänks, DVM DSM oli mm. Kissaliiton vuoden kissa vuonna 2014). Näiden kissojen (Harppu & Halka) jäätyä eläkkeelle oli näyttelyistä useamman vuoden tauko, mutta vuonna 2022 pääsimme taas aloittamaan näyttelyttämisen, kun Hillevi muutti meille.`,
            previouslyUpdatedTitle: "Päivitetty",
            previouslyUpdatedDate: "29.4.2025",
            emailTitle: "sähköposti",
            emailAddress: "hummingcattery@gmail.com",
            phoneTitle: "puh.",
            phoneNumber: "040 – 765 9625",
            facebookAlt: "Facebook icon",
            facebookUrl: "https://www.facebook.com/hummingcattery/",
            instagramAlt: "Instagram icon",
            instagramUrl: "https://www.instagram.com/hummingcattery/",
            contactHeader: "Ota yhteyttä",
            buttons: {
                home: "Tallenna",
                news: "Peruuta",
                cats: "Peruuta",
                mollies: "Peruuta",
                castrates: "Peruuta",
                inMemoriam: "Peruuta",
                kittenBasket: "Peruuta",
                litter: "Peruuta",
                litter1: "Peruuta",
                litter2: "Peruuta",
                litter3: "Peruuta",
                litter4: "Peruuta",
                litter5: "Peruuta",
                litter6: "Peruuta",
                kissala: "Peruuta",
                breeder: "Peruuta",
                kittenInfo: "Peruuta",
                contact: "Peruuta"
            },
            news: [
                {
                    date: "16.2.2024",
                    news1: `Tervetuloa täysin uusituille kotisivuille!<br>
                            Meille on syntymässä pentuja helmikuun lopulla. Yhdistelmänä Hillevi x Copa (Demi JohnNatarie -E x Kyatwo T’Challa’s Glory). Tämän pentueen vanhemmat ovat ulkomaantuonteja ja suvullisesti verrattain hyvin kaukana toisistaan.<br>
                            Hillevi on tuotu Espanjasta kesällä 2022 ja Copa on tuotu Los Angelesista USA:sta kesällä 2023 (Copa on yhteisomistuksessa neljän kasvattajan kanssa: FI*Suvirannan, FI*Njaalan, FI*LeeviL & FI*Humming). Tällä yhdistelmällä on siis ensisijaisesti tarkoitus laajentaa birman geenipoolia Suomessa.`,
                },
                {
                    date: "14.4.2024",
                    news2: `Hillevin ja Copan pennut syntyivät 26.2.2024. Kaksi ruskeanaamio-tyttöpentua, jotka etsivät molemmat sijoituskotia.<br>
                        Toinen tytöistä "Vilma" on näyttelytasoinen, joten kodilla olisi hyvä olla jonkinlainen innostus näyttelyistä.<br>
                        Toinen tytöistä "Valma" voisi kokeilla näyttelyitä pentuna, mutta toinen takakiila on vähän turhan niukka siihen, että näyttelyissä kerättäisiin aikuisena sertejä.<br>
                        Otathan yhteyttä sähköpostitse, jos olet kiinnostunut toimimaan sijoituskotina.`,
                },
                {
                    date: "29.4.2024",
                    news3: `Pennut täyttivät tänään 9 viikkoa, vauhtia ja vaarallisia tilanteita riittää. Pentujen ensimmäinen rokotus on varattu 20.5. päivälle, jolloin pennut saavat myös mikrosirut. <br>
                        Nykyiset rokotussuositukset ovat sellaiset, että ensimmäinen rokote suositellaan annettavan 12 viikon iässä, ja toinen tästä 3-4 viikon päästä. Täten meillä pennut tulevat olemaan
                        luovutuskypsiä vasta 16-viikkoisina, täydellä rokotussuojalla. <br>
                        Pennuista on tullut jonkin verran kyselyjä (lähinnä lemmikkikoteihin), mutta nämä pennut etsivät edelleen ensisijassa sijoituskoteja.
                        Tärkeintä on, että tästä pentueesta molemmille tytöille tulee mahdollisuus suvun jatkolle.<br>
                        Otathan rohkeasti yhteyttä, jos sijoituskotina toimiminen yhtään kiinnostaa! :)`,
                },
                {
                    date: "23.6.2024",
                    news4: `Hillevin pennut tulivat luovutusikään kesäkuun puolenvälin paikkeilla. Alkuperäisistä suunnitelmista poiketen Valma muutti lemmikkikotiin Merikarvialle ja Vilma jäi
                        kuin jäikin kotiin. Sijoituskoteja ei siis tälle pentueelle valitettavasti löytynyt, mutta toisaalta en varmaan olisi enää pystynyt Vilmasta edes luopumaan. :). 
                        Vilman kanssa käydään kesän mittaan joissain näyttelyissä, seuraavan kerran heti ensi viikonloppuna Hämeenlinnassa.`,
                },
                {
                    date: "18.1.2025",
                    news5: "Viime päivityskerrasta on vierähtänyt puolisen vuotta. Vilmasta tuli Junior Winner saavutettuaan viidennen Best in Show -tuloksen pennuissa/nuorissa Puolan Gdyniassa 11.1.2025. :) Huldalle on toiveissa pentuja keväälle 2025, jahka kollisuunnitelmat selviävät."
                }],
            cats: {
                harppu: {
                    name: "Harppu",
                    fullname: "SP, SC Zhamanen Harlequin, DVM DSM",
                    variety: "SBI n 21",
                    lifeDates: "28.7.2008 - 12.12.2023",
                    tom: "EC FI*JoJon El Rayo Rumba (SBI n 21)",
                    queen: "IC FI*Zhamanen Ferrarina N.F.S. (SBI h)",
                    exhibitionSuccessResults: "Multi BIS, BIV, NOM -winner"
                },
                halka: {
                    name: "Halka",
                    fullname: "SP, SC Recknagel Tairapänks, DVM, DSM",
                    variety: "SBI a",
                    lifeDates: "21.6.2009 - 23.1.2025",
                    tom: "IC FI*Zhamanen Fangio, JW (SBI n)",
                    queen: "FI*Recknagel Fridakahlo (SBI b)",
                    exhibitionSuccessResults: "Multi BIS (& BIV & NOM) Winner Vuoden kissa 2014"
                },
                hekla: {
                    name: "Hekla",
                    fullname: "FI*Humming Birdy",
                    variety: "SBI c",
                    lifeDates: "10.5.2013",
                    tom: "CH*Tamus Thunderbird",
                    queen: "Recknagel Tairapänks",
                    exhibitionSuccessResults: "Useampi BIV & NOM pentuluokissa. Hekla ei ole näyttelytasoinen, joten aikuisena ei ole käyty näyttelyissä. :)"
                },
                hillevi: {
                    name: "Hillevi",
                    fullname: "CH Demi Johnnatarie -E",
                    variety: "SBI b",
                    lifeDates: "1.3.2022",
                    tom: "",
                    queen: "",
                    exhibitionSuccessResults: "5xBIV, 7xNOM, 3xBIS, International Champion",
                    pedigreeLink: "https://kissat.kissaliitto.fi/Pedigree?id=296517"
                },
                hulda: {
                    name: "Hulda",
                    fullname: "JCH KCH Unica vom Lilienweg",
                    variety: "SBI b 21",
                    lifeDates: "7.8.2023",
                    tom: "",
                    queen: "",
                    exhibitionSuccessResults: "7xNOM, 1xBIS, 2xBIV",
                    pedigreeLink: "https://kissat.kissaliitto.fi/Pedigree?id=323820"
                },
                vilma: {
                    name: "Vilma",
                    fullname: "JCH KCH Fi*Humming California Girls JW",
                    variety: "SBI n",
                    lifeDates: "26.2.2024",
                    tom: "",
                    queen: "",
                    exhibitionSuccessResults: "8xNOM, 7xBIS, 4xBIV, Junior Winner",
                    pedigreeLink: "https://kissat.kissaliitto.fi/Pedigree?id=329981"
                }
            },
            litters: [
                {
                    parents: "SC Zhamanen Harlequin DVM x Tamus Thunderbird",
                    bornDate: "3.3.2013",
                    kittens: [
                        {
                            name: "Humming Ummagumma",
                            variety: "SBI b",
                            gender: "uros",
                            level: "Näyttelytasoinen",
                            exhibitionSuccessResults: "Nominated for BIS"
                        },
                        {
                            name: "Humming High Hopes",
                            variety: "SBI c",
                            gender: "naaras",
                            level: "Siitostasoinen",
                            exhibitionSuccessResults: "BIS-winner"
                        }
                    ]
                },
                    {
                        parents: "SC Recknagel Tairapänks DVM x Tamus Thunderbird",
                        bornDate: "10.5.2013",
                        kittens: [
                        {
                            name: "Humming Birdy",
                            variety: "SBI c",
                            gender: "naaras",
                            level: "Siitostasoinen / Jäi kotiin",
                            exhibitionSuccessResults: "Nominated for BIS"
                        },
                        {
                            name: "Humming Banshee Beat",
                            variety: "SBI c",
                            gender: "uros",
                            level: "Lemmikki",
                            exhibitionSuccessResults: ""
                        },
                        {
                            name: "Humming Baba O’Riley",
                            variety: "SBI c",
                            gender: "uros",
                            level: "Lemmikki",
                            exhibitionSuccessResults: ""
                        },
                        {
                            name: "Humming Bullet Boy",
                            variety: "SBI c",
                            gender: "uros",
                            level: "Lemmikki",
                            exhibitionSuccessResults: ""
                        }
                    ]
                },
                {
                    parents: "SC Zhamanen Harlequin, DVM x Tamus Juke",
                    bornDate: "6.5.2015",
                    kittens: [
                        {
                            name: "Humming Hoppipolla",
                            variety: "SBI b 21",
                            gender: "uros",
                            level: "Lemmikki",
                            exhibitionSuccessResults: ""
                        },
                        {
                            name: "Humming Staralfur",
                            variety: "SBI a 21",
                            gender: "uros",
                            level: "Lemmikki",
                            exhibitionSuccessResults: ""
                        }
                    ]
                },
                {
                    parents: "Humming Birdy x Mototassun Rocket III",
                    bornDate: "20.6.2017",
                    kittens: [
                        {
                            name: "Humming Karma Police",
                            variety: "SBI a",
                            gender: "uros",
                            level: "Lemmikki",
                            exhibitionSuccessResults: ""
                        },
                        {
                            name: "Humming No Surprises",
                            variety: "SBI n",
                            gender: "uros",
                            level: "Lemmikki",
                            exhibitionSuccessResults: ""
                        },
                        {
                            name: "Humming Paranoid Android",
                            variety: "SBI f",
                            gender: "naaras",
                            level: "Näyttely/siitos",
                            exhibitionSuccessResults: "Nominated for BIS"
                        }
                    ]
                },
                {
                    parents: "Humming Paranoid Android x Touchant Chance au Jeu",
                    bornDate: "4.6.2019",
                    kittens: [
                        {
                            name: "Humming Musik Non Stop",
                            variety: "SBI c",
                            gender: "uros",
                            level: "Lemmikki",
                            exhibitionSuccessResults: ""
                        },
                        {
                            name: "Humming Stoppa Mig Juni",
                            variety: "SBI b",
                            gender: "uros",
                            level: "Lemmikki",
                            exhibitionSuccessResults: ""
                        },
                        {
                            name: "Humming Visslaren",
                            variety: "SBI c 21",
                            gender: "naaras",
                            level: "Lemmikki",
                            exhibitionSuccessResults: ""
                        }
                    ]
                },
                {
                    parents: "Demi JohnNatarie -E - US*Kyatwo T'Challa's Glory",
                    bornDate: "26.2.2024",
                    kittens: [
                        {
                            name: "FI*Humming California Dreamin'",
                            variety: "SBI n",
                            gender: "naaras",
                            level: "Lemmikki",
                            exhibitionSuccessResults: ""
                        },
                        {
                            name: "Fi*Humming California Girls",
                            variety: "SBI n",
                            gender: "naaras",
                            level: "Siitostasoinen",
                            exhibitionSuccessResults: "7xNOM, 6xBIS, 2xBIV, Junior Winner"
                        }
                    ]
                },
                {
                    parents: "JCH KCH Unica vom Lilienweg x Lofanna Äärirajoille",
                    bornDate: "9.4.2025",
                    kittens: [
                        {
                            name: "Kilpuritypy",
                            variety: "SBI h 21",
                            gender: "naaras",
                            level: "N/A",
                            exhibitionSuccessResults: ""
                        },
                        {
                            name: "Pédro",
                            variety: "SBI n",
                            gender: "uros",
                            level: "N/A",
                            exhibitionSuccessResults: ""
                        },
                        {
                            name: "Possu",
                            variety: "SBI f",
                            gender: "uros",
                            level: "N/A",
                            exhibitionSuccessResults: ""
                        }
                    ]
                },
            ],
            KittenInfo: [
                {
                    title: "Yleistä",
                    content: `Meillä on ollut vuosien saatossa hyvin harvakseltaan pentuja, mutta nyt (2024) taloudessa on kaksi naarasta, sekä jatkossa on tarkoitus sijoittaa 1-2 pentua per pentue, joten
                            jatkossa pentueita voi olla jopa 2kpl vuosittain. Tiedotamme pentukorissa ajantasaisesta pentuetilanteesta, sekä tulevista pentuesuunnitelmista.\n
                            Myytävän pennun hinta on 1400 EUR.<br>
                            Sijoituspentu maksaa 600 EUR (joka on ns. takuu), summa palautetaan sijoituskodille, kun sijoitusehdot (1-2 pentuetta) on täytetty, tässä kohtaa myös
                            kissan omistajuus siirretään sijoituskodin nimiin. Jos pentuja ei jostain syystä synny, sijoituspennun takuusummaa ei palauteta.\n
                            Jokaisen FI*Humming -pentueen vanhemmat on terveystestattu, lisäksi sydänultrat otetaan kaikista kasvatuskissoista yleensä ennen ensimmäistä astutusta. Jokainen
                            FI*Humming -pentu saa matkaansa penturepun, johon kuuluu pennulle tuttua ruokaa, leluja,  huopia, yms. Pennut rekisteröidään Suomen Kissaliittoon (FiFe). 
                            Halutessaan ostaja liitetään kasvattajan toimesta Ery-Syd rotukissayhdistyksen, sekä Pyhä Birman Kissa ry:n jäseneksi vuoden ajaksi. Pennut luovutetaan sirutettuina, kahdesti
                            rokotettuina ja terveystarkastettuina aikaisintaan 14 viikon iässä.`,
                },
                {
                    title: "Meillekö sijoituskissa?",
                    content: `Sijoituskissa on loistava tapa päästä tutustumaan kasvatukseen, vaikka kaikissa tapauksissa sijoituskodin ei tarvitsekaan sitoutua pentuvaiheeseen. Sijoituskodit
                            ovat välttämätön apu kasvatustyössä, kun kasvattajan oman kodin kissamäärää ei ole järkevä kasvattaa. Humming-kissalassa kaikki kissat, jotka jäävät kotiin, elävät
                            kotona alusta loppuun asti, eli meillä yksikään kissa ei etsi aikuisena uutta kotia, ellei tähän ole jotain todella painavaa syytä (kuten kissojen väliset muuttuneet
                            kemiat tms.). Meillä jokainen kasvatuskissa on siis rakas lemmikki ja oman kodin perheenjäsen. Tästä syystä, jotta kasvatusta on ylipäänsä mahdollista jatkaa, ovat
                            sijoituskodit kasvattajalle kullanarvoisia.\n
                            Sijoitussopimus (pentujen hoidon osalta) voidaan laatia muutamalla eri tavalla.\n
                            Sijoituskissa saa pennut sijoituskodissa ja pennut kasvavat sijoituskodissa kunnes täyttävät 14 viikkoa.\n
                            Sijoituskissa muuttaa kasvattajan kotiin n. 1-2 viikkoa ennen synnytystä ja pennut asuvat kasvattajalla n. ensimmäiset 4 viikkoa, jonka jälkeen emo ja pennut muuttavat sijoituskotiin\n
                            Sijoituskissa muuttaa kasvattajan kotiin n. 1-2 viikkoa ennen synnytystä ja pysyy kasvattajalla kunnes pennut ovat 14 viikkoisia.\n
                            Näistä vaihtoehdoista kissalle mieluisin on toki 1. vaihtoehto, mutta esimerkiksi 2. vaihtoehto on toiminut tässä kissalassa hyvin. Joka tapauksessa sijoituskodilla
                            on aina kasvattajan 100% tuki ja aina saa kysyä mitä ikinä mieleen tulee.\n
                            Sijoituskoti siis pitää sijoituskissaa kuten omaansa, hankkii laadukasta ruokaa, hankkii vakuutuksen, pitää yllä rokotukset jne. Kasvattaja astuu mukaan kustannusten
                            osalta siinä vaiheessa kun kissalta otetaan siitostestejä. Tämän jälkeen astutuksen jälkeen kasvattaja tukee emoa ruokakustannuksissa tai hankkii emolle ruokaa. 
                            Pentujen kasvaessa kasvattaja hankkii pennuille ruoat ja muut tarpeet. Sijoituskodit sitoutuvat siihen, että kissa saa 1-2 pentuetta kasvattajan kissalan nimiin, 
                            jonka jälkeen sijoituskissa siirtyy sijoituskodin omistukseen. Pennut pyritään saamaan ennen sijoituskissan 2. ikävuotta, jotta vältytään mahdollisilta komplikaatioilta.`
                }
            ],
        },
        en: {
          welcome: "Welcome to the app!",
          buttons: {
            save: "Save",
            cancel: "Cancel"
          }
        }
      }
    }),
  
    getters: {
      getText: (state) => (key: string) => {
        return key.split(".").reduce((o, i) => o?.[i], state.texts[state.language]) || key;
      }
    },
  
    actions: {
      setLanguage(lang: string) {
        this.language = lang;
      }
    }
  });
  