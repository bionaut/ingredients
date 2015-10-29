(function () {
  'use strict';
  angular.module('angular-ingredients.js')
    .controller('sampleCtrl', sampleCtrl);

  sampleCtrl.$inject = ['$timeout'];
  function sampleCtrl($timeout) {
    var ctrl = this;

    ctrl.handleSubmit = function (form) {
      alert('submitted');
    };

    ctrl.cardTypes = [{label: 'Stávající kartě', value: false}, {label: 'Obnovené kartě', value: true}];


    ctrl.action = function (a) {
      alert(a);
    };

    ctrl.sampleData = [
      {
        texts: {
          en: 'english',
          cs: 'cesky'
        },
        value: 1
      },
      {
        texts: {
          en: 'english',
          cs: 'cesky'
        },
        value: 2
      }
    ];


    ctrl.sampleData3 = {
      1: {
        texts: {
          en: 'english',
          cs: 'cesky'
        },
        value: 1
      },
      2: {
        texts: {
          en: 'english',
          cs: 'cesky'
        },
        value: 2
      },
      3: {
        texts: {
          en: 'english',
          cs: 'cesky'
        },
        value: 3
      }
    };

    ctrl.sampleData4 = [
      {
        label: 'Some label 1',
        value: 1
      },
      {
        label: 'Some label 2',
        value: 2
      }
    ];

    ctrl.sampleCarsData = [
      {
        label: 'Škoda Auto - simple clever',
        value: 'skoda'
      },
      {
        label: 'BMW - as fast as you',
        value: 'bmw'
      }
    ];

    ctrl.sampleCarsData2 = {
      skoda: {
        label: 'Skoda'
      },
      bmw: {
        label: 'bmw'
      },
      merc: {
        label: 'MERC'
      }
    };

    ctrl.banks = [{
      "code": "6300",
      "bankCode": "GEBACZPP",
      "swift": "GEBACZPP",
      "name": "FORTIS BANK SA NV, BRUSSELS, BRANCH CZECH REPUBLIC",
      "countryId": "CZ",
      "texts": {
        "cs": "BNP Paribas Fortis SA/NV, pobočka Česká republika",
        "en": "BNP Paribas Fortis SA/NV, pobočka Česká republika"
      },
      "textId": 1007812,
      "separeachable": true,
      "t2Reachable": false
    }, {
      "code": "8030",
      "bankCode": "GENOCZ21",
      "swift": "GENOCZ21",
      "name": "RAIFFEISENBANK IM STIFTLAND EG",
      "countryId": "CZ",
      "texts": {
        "cs": "Raiffeisenbank im Stiftland eG pobočka Cheb, odštěpný závod",
        "en": "Raiffeisenbank im Stiftland eG pobočka Cheb, odštěpný závod"
      },
      "textId": 1007813,
      "separeachable": true,
      "t2Reachable": false
    }, {
      "code": "5500",
      "bankCode": "RZBCCZPP",
      "swift": "RZBCCZPP",
      "name": "RAIFFEISENBANK A.S.",
      "countryId": "CZ",
      "texts": {"cs": "Raiffeisenbank a.s.", "en": "Raiffeisenbank a.s."},
      "textId": 1007824,
      "separeachable": true,
      "t2Reachable": false
    }, {
      "code": "7980",
      "bankCode": "7980",
      "swift": "7980",
      "name": "WUSTENROT HYPOTECNI BANKA A.S.",
      "countryId": "CZ",
      "texts": {"cs": "Wüstenrot hypoteční banka a.s.", "en": "Wüstenrot hypoteční banka a.s."},
      "textId": 1007788,
      "separeachable": false,
      "t2Reachable": false
    }, {
      "code": "8090",
      "bankCode": "CZEECZPP",
      "swift": "CZEECZPP",
      "name": "CZECH EXPORT BANK",
      "countryId": "CZ",
      "texts": {"cs": "Česká exportní banka, a.s.", "en": "Česká exportní banka, a.s."},
      "textId": 1007806,
      "separeachable": true,
      "t2Reachable": false
    }, {
      "code": "2010",
      "bankCode": "FIOBCZPP",
      "swift": "FIOBCZPP",
      "name": "FIO BANKA, A.S.",
      "countryId": "CZ",
      "texts": {"cs": "Fio banka, a.s.", "en": "Fio banka, a.s."},
      "textId": 1007811,
      "separeachable": true,
      "t2Reachable": false
    }, {
      "code": "7960",
      "bankCode": "7960",
      "swift": "7960",
      "name": "CESKOMORAVSKA STAVEBNI SPORITELNA, A.S.",
      "countryId": "CZ",
      "texts": {"cs": "Českomoravská stavební spořitelna, a.s.", "en": "Českomoravská stavební spořitelna, a.s."},
      "textId": 1007786,
      "separeachable": false,
      "t2Reachable": false
    }, {
      "code": "0600",
      "bankCode": "AGBACZPP",
      "swift": "AGBACZPP",
      "name": "GE MONEY BANK, A.S.",
      "countryId": "CZ",
      "texts": {"cs": "GE Money Bank, a.s.", "en": "GE Money Bank, a.s."},
      "textId": 1007792,
      "separeachable": true,
      "t2Reachable": false
    }, {
      "code": "6100",
      "bankCode": "EQBKCZPP",
      "swift": "EQBKCZPP",
      "name": "EQUA BANK A.S.",
      "countryId": "CZ",
      "texts": {"cs": "Equa bank a.s.", "en": "Equa bank a.s."},
      "textId": 1007808,
      "separeachable": true,
      "t2Reachable": false
    }, {
      "code": "5800",
      "bankCode": "JTBPCZPP",
      "swift": "JTBPCZPP",
      "name": "J AND T BANKA A.S.",
      "countryId": "CZ",
      "texts": {"cs": "J & T BANKA, a.s.", "en": "J & T BANKA, a.s."},
      "textId": 1007816,
      "separeachable": true,
      "t2Reachable": false
    }, {
      "code": "6000",
      "bankCode": "PMBPCZPP",
      "swift": "PMBPCZPP",
      "name": "PPF BANKA A.S.",
      "countryId": "CZ",
      "texts": {"cs": "PPF banka a.s.", "en": "PPF banka a.s."},
      "textId": 1007822,
      "separeachable": true,
      "t2Reachable": false
    }, {
      "code": "0710",
      "bankCode": "CNBACZPP",
      "swift": "CNBACZPP",
      "name": "CESKA NARODNI BANKA",
      "countryId": "CZ",
      "texts": {"cs": "Česká národní banka", "en": "Česká národní banka"},
      "textId": 1007802,
      "separeachable": true,
      "t2Reachable": false
    }, {
      "code": "2020",
      "bankCode": "BOTKCZPP",
      "swift": "BOTKCZPP",
      "name": "BANK OF TOKYO MITSUBISHI UFJ (HOLLAND) N.V. PRAGUE BRANCH",
      "countryId": "CZ",
      "texts": {
        "cs": "Bank of Tokyo-Mitsubishi UFJ (Holland) N.V. Prague Branch, organizační složka",
        "en": "Bank of Tokyo-Mitsubishi UFJ (Holland) N.V. Prague Branch, organizační složka"
      },
      "textId": 1007796,
      "separeachable": true,
      "t2Reachable": false
    }, {
      "code": "2600",
      "bankCode": "CITICZPX",
      "swift": "CITICZPX",
      "name": "CITIBANK EUROPE PLC, ORGANIZACNI SLOZKA",
      "countryId": "CZ",
      "texts": {"cs": "Citibank Europe plc, organizační složka", "en": "Citibank Europe plc, organizační složka"},
      "textId": 1007800,
      "separeachable": true,
      "t2Reachable": false
    }, {
      "code": "0300",
      "bankCode": "CEKOCZPP",
      "swift": "CEKOCZPP",
      "name": "CESKOSLOVENSKA OBCHODNI BANKA, A.S.",
      "countryId": "CZ",
      "texts": {"cs": "Československá obchodní banka, a. s.", "en": "Československá obchodní banka, a. s."},
      "textId": 1007798,
      "separeachable": true,
      "t2Reachable": false
    }, {
      "code": "2250",
      "bankCode": "CTASCZ22",
      "swift": "CTASCZ22",
      "name": "ZALOZNA CREDITAS, SPORITELNI DRUZSTVO",
      "countryId": "CZ",
      "texts": {"cs": "Záložna CREDITAS, spořitelní družstvo", "en": "Záložna CREDITAS, spořitelní družstvo"},
      "textId": 1007805,
      "separeachable": false,
      "t2Reachable": false
    }, {
      "code": "2030",
      "bankCode": "2030",
      "swift": "2030",
      "name": "AKCENTA, SPORITELNI A UVERNI DRUZSTVO",
      "countryId": "CZ",
      "texts": {"cs": "AKCENTA, spořitelní a úvěrní družstvo", "en": "AKCENTA, spořitelní a úvěrní družstvo"},
      "textId": 1007782,
      "separeachable": false,
      "t2Reachable": false
    }, {
      "code": "0800",
      "bankCode": "GIBACZPX",
      "swift": "GIBACZPX",
      "name": "CESKA SPORITELNA A.S.",
      "countryId": "CZ",
      "texts": {"cs": "Česká spořitelna, a.s.", "en": "Česká spořitelna, a.s."},
      "textId": 1007814,
      "separeachable": true,
      "t2Reachable": false
    }, {
      "code": "5000",
      "bankCode": "CRLYCZPP",
      "swift": "CRLYCZPP",
      "name": "CREDIT AGRICOLE",
      "countryId": "CZ",
      "texts": {"cs": "Crédit Agricole", "en": "Crédit Agricole"},
      "textId": 1007804,
      "separeachable": false,
      "t2Reachable": false
    }, {
      "code": "2200",
      "bankCode": "2200",
      "swift": "2200",
      "name": "PENEZNI DUM, SPORITELNI DRUZSTVO",
      "countryId": "CZ",
      "texts": {"cs": "Peněžní dům, spořitelní družstvo", "en": "Peněžní dům, spořitelní družstvo"},
      "textId": 1007784,
      "separeachable": false,
      "t2Reachable": false
    }, {
      "code": "7940",
      "bankCode": "SPWTCZ21",
      "swift": "SPWTCZ21",
      "name": "WALDVIERTLER SPARKASSE BRANCH JINDRICHUV HRADEC",
      "countryId": "CZ",
      "texts": {"cs": "Waldviertler Sparkasse Bank AG", "en": "Waldviertler Sparkasse Bank AG"},
      "textId": 1007826,
      "separeachable": true,
      "t2Reachable": false
    }, {
      "code": "0100",
      "bankCode": "KOMBCZPP",
      "swift": "KOMBCZPP",
      "name": "KOMERCNI BANKA A.S.",
      "countryId": "CZ",
      "texts": {"cs": "Komerční banka, a.s.", "en": "Komerční banka, a.s."},
      "textId": 1007817,
      "separeachable": true,
      "t2Reachable": false
    }, {
      "code": "4300",
      "bankCode": "CMZRCZP1",
      "swift": "CMZRCZP1",
      "name": "CESKOMORAVSKA ZARUCNI A ROZVOJOVA BANKA, A.S.",
      "countryId": "CZ",
      "texts": {
        "cs": "Českomoravská záruční a rozvojová banka, a.s.",
        "en": "Českomoravská záruční a rozvojová banka, a.s."
      },
      "textId": 1007801,
      "separeachable": true,
      "t2Reachable": false
    }, {
      "code": "2070",
      "bankCode": "MPUBCZPP",
      "swift": "MPUBCZPP",
      "name": "MORAVSKY PENEZNI USTAV – SPORITELNI DRUZSTVO",
      "countryId": "CZ",
      "texts": {
        "cs": "Moravský Peněžní Ústav – spořitelní družstvo",
        "en": "Moravský Peněžní Ústav – spořitelní družstvo"
      },
      "textId": 1007819,
      "separeachable": false,
      "t2Reachable": false
    }, {
      "code": "2310",
      "bankCode": "ZUNOCZPP",
      "swift": "ZUNOCZPP",
      "name": "ZUNO BANK AG ORGANIZACNI SLOZKA",
      "countryId": "CZ",
      "texts": {"cs": "ZUNO BANK AG, organizační složka", "en": "ZUNO BANK AG, organizační složka"},
      "textId": 1007829,
      "separeachable": true,
      "t2Reachable": false
    }, {
      "code": "5400",
      "bankCode": "ABNACZPP",
      "swift": "ABNACZPP",
      "name": "THE ROYAL BANK OF SCOTLAND N.V. (CZECH REPUBLIC) ",
      "countryId": "CZ",
      "texts": {
        "cs": "The Royal Bank of Scotland plc, organizační složka",
        "en": "The Royal Bank of Scotland plc, organizační složka"
      },
      "textId": 1007791,
      "separeachable": true,
      "t2Reachable": false
    }, {
      "code": "6700",
      "bankCode": "SUBACZPP",
      "swift": "SUBACZPP",
      "name": "VSEOBECNA UVEROVA BANKA, A.S. BRANCH PRAHA",
      "countryId": "CZ",
      "texts": {
        "cs": "Všeobecná úverová banka a.s., pobočka Praha; zkráceně: VUB, a.s., pobočka Praha",
        "en": "Všeobecná úverová banka a.s., pobočka Praha; zkráceně: VUB, a.s., pobočka Praha"
      },
      "textId": 1007827,
      "separeachable": true,
      "t2Reachable": false
    }, {
      "code": "7990",
      "bankCode": "7990",
      "swift": "7990",
      "name": "MODRA PYRAMIDA STAVEBNI SPORITELNA, A.S.",
      "countryId": "CZ",
      "texts": {"cs": "Modrá pyramida stavební spořitelna, a.s.", "en": "Modrá pyramida stavební spořitelna, a.s."},
      "textId": 1007789,
      "separeachable": false,
      "t2Reachable": false
    }, {
      "code": "7970",
      "bankCode": "7970",
      "swift": "7970",
      "name": "WUSTENROT - STAVEBNI SPORITELNA",
      "countryId": "CZ",
      "texts": {"cs": "Wüstenrot - stavební spořitelna", "en": "Wüstenrot - stavební spořitelna"},
      "textId": 1007787,
      "separeachable": false,
      "t2Reachable": false
    }, {
      "code": "8150",
      "bankCode": "MIDLCZPP",
      "swift": "MIDLCZPP",
      "name": "HSBC BANK PLC",
      "countryId": "CZ",
      "texts": {"cs": "HSBC Bank plc - pobočka Praha", "en": "HSBC Bank plc - pobočka Praha"},
      "textId": 1007818,
      "separeachable": true,
      "t2Reachable": false
    }, {
      "code": "7950",
      "bankCode": "7950",
      "swift": "7950",
      "name": "RAIFFEISEN STAVEBNI SPORITELNA A.S.",
      "countryId": "CZ",
      "texts": {"cs": "Raiffeisen stavební spořitelna a.s.", "en": "Raiffeisen stavební spořitelna a.s."},
      "textId": 1007785,
      "separeachable": false,
      "t2Reachable": false
    }, {
      "code": "2700",
      "bankCode": "BACXCZPP",
      "swift": "BACXCZPP",
      "name": "UNICREDIT BANK CZECH REPUBLIC,A.S.",
      "countryId": "CZ",
      "texts": {
        "cs": "UniCredit Bank Czech Republic and Slovakia, a.s.",
        "en": "UniCredit Bank Czech Republic and Slovakia, a.s."
      },
      "textId": 1007795,
      "separeachable": true,
      "t2Reachable": false
    }, {
      "code": "6200",
      "bankCode": "COBACZPX",
      "swift": "COBACZPX",
      "name": "COMMERZBANK AG",
      "countryId": "CZ",
      "texts": {
        "cs": "COMMERZBANK Aktiengesellschaft, pobočka Praha",
        "en": "COMMERZBANK Aktiengesellschaft, pobočka Praha"
      },
      "textId": 1007803,
      "separeachable": true,
      "t2Reachable": false
    }, {
      "code": "6800",
      "bankCode": "VBOECZ2X",
      "swift": "VBOECZ2X",
      "name": "SBERBANK CZ, A.S. ",
      "countryId": "CZ",
      "texts": {"cs": "Sberbank CZ, a.s.", "en": "Sberbank CZ, a.s."},
      "textId": 1007828,
      "separeachable": true,
      "t2Reachable": false
    }, {
      "code": "8060",
      "bankCode": "8060",
      "swift": "8060",
      "name": "STAVEBNI SPORITELNA CESKE SPORITELNY, A.S.",
      "countryId": "CZ",
      "texts": {
        "cs": "Stavební spořitelna České spořitelny, a.s.",
        "en": "Stavební spořitelna České spořitelny, a.s."
      },
      "textId": 1007790,
      "separeachable": false,
      "t2Reachable": false
    }, {
      "code": "2100",
      "bankCode": "2100",
      "swift": "2100",
      "name": "HYPOTECNI BANKA, A.S.",
      "countryId": "CZ",
      "texts": {"cs": "Hypoteční banka, a.s.", "en": "Hypoteční banka, a.s."},
      "textId": 1007783,
      "separeachable": false,
      "t2Reachable": false
    }, {
      "code": "2220",
      "bankCode": "ARTTCZPP",
      "swift": "ARTTCZPP",
      "name": "ARTESA, SPORITELNI DRUZSTVO",
      "countryId": "CZ",
      "texts": {"cs": "Artesa, spořitelní družstvo", "en": "Artesa, spořitelní družstvo"},
      "textId": 1007794,
      "separeachable": false,
      "t2Reachable": false
    }, {
      "code": "2060",
      "bankCode": "CITFCZPP",
      "swift": "CITFCZPP",
      "name": "CITFIN, SPORITELNI DRUZSTVO",
      "countryId": "CZ",
      "texts": {"cs": "Citfin, spořitelní družstvo", "en": "Citfin, spořitelní družstvo"},
      "textId": 1007799,
      "separeachable": false,
      "t2Reachable": false
    }, {
      "code": "4000",
      "bankCode": "EXPNCZPP",
      "swift": "EXPNCZPP",
      "name": "EXPOBANK CZ A.S.",
      "countryId": "CZ",
      "texts": {"cs": "Expobank CZ a.s.", "en": "Expobank CZ a.s."},
      "textId": 1007809,
      "separeachable": true,
      "t2Reachable": false
    }, {
      "code": "3500",
      "bankCode": "INGBCZPP",
      "swift": "INGBCZPP",
      "name": "ING BANK N.V.",
      "countryId": "CZ",
      "texts": {"cs": "ING Bank N.V.", "en": "ING Bank N.V."},
      "textId": 1007815,
      "separeachable": true,
      "t2Reachable": false
    }, {
      "code": "8040",
      "bankCode": "OBKLCZ2X",
      "swift": "OBKLCZ2X",
      "name": "OBERBANK AG",
      "countryId": "CZ",
      "texts": {"cs": "Oberbank AG pobočka Česká republika", "en": "Oberbank AG pobočka Česká republika"},
      "textId": 1007821,
      "separeachable": true,
      "t2Reachable": false
    }, {
      "code": "7910",
      "bankCode": "DEUTCZPX",
      "swift": "DEUTCZPX",
      "name": "DEUTSCHE BANK AG",
      "countryId": "CZ",
      "texts": {
        "cs": "Deutsche Bank Aktiengesellschaft Filiale Prag, organizační složka",
        "en": "Deutsche Bank Aktiengesellschaft Filiale Prag, organizační složka"
      },
      "textId": 1007807,
      "separeachable": true,
      "t2Reachable": false
    }, {
      "code": "2240",
      "bankCode": "POBNCZPP",
      "swift": "POBNCZPP",
      "name": "POSTOVA BANKA, A.S.,POBOCKA CESKA REPUBLIKA",
      "countryId": "CZ",
      "texts": {
        "cs": "Poštová banka, a.s., pobočka Česká republika",
        "en": "Poštová banka, a.s., pobočka Česká republika"
      },
      "textId": 1007823,
      "separeachable": true,
      "t2Reachable": false
    }, {
      "code": "6210",
      "bankCode": "BREXCZPP",
      "swift": "BREXCZPP",
      "name": "BRE BANK S.A., ORGANIZACNI SLOZKA PODNIKU",
      "countryId": "CZ",
      "texts": {"cs": "mBank S.A., organizační složka", "en": "mBank S.A., organizační složka"},
      "textId": 1007797,
      "separeachable": true,
      "t2Reachable": false
    }, {
      "code": "3030",
      "bankCode": "AIRACZPP",
      "swift": "AIRACZPP",
      "name": "AIR BANK A.S.",
      "countryId": "CZ",
      "texts": {"cs": "Air Bank a.s.", "en": "Air Bank a.s."},
      "textId": 1007793,
      "separeachable": true,
      "t2Reachable": false
    }, {
      "code": "2210",
      "bankCode": "FICHCZPP",
      "swift": "FICHCZPP",
      "name": "EVROPSKO-RUSKA BANKA, A.S.",
      "countryId": "CZ",
      "texts": {"cs": "Evropsko-ruská banka, a.s.", "en": "Evropsko-ruská banka, a.s."},
      "textId": 1007810,
      "separeachable": true,
      "t2Reachable": false
    }];

    ctrl.inactive = [0,2];
    ctrl.counts = [0,2,10];


    ctrl.sampleData2 = ['Item 1', 'Item 2'];


    $timeout(function () {
      //ctrl.m1 = 1;
      //ctrl.m2 = 1;
      //ctrl.m3 = 1;
      ctrl.selectedBank = 5500;

    }, 5000)

  }
})();
