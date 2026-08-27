(function () {
  "use strict";

  var translations = {
    ca: {
      "brand.sub": "Bar de barri · Gràcia",
      "nav.story": "La història",
      "nav.menu": "La carta",
      "nav.market": "El mercat",
      "nav.visit": "Com arribar",
      "nav.reserve": "Reservar",

      "hero.eyebrow": "Carrer de Pi i Margall, Gràcia",
      "hero.title1": "Cada plat",
      "hero.title2": "porta un nom",
      "hero.title3": "de la família.",
      "hero.lede": "Àngel va obrir la persiana fa anys i des de llavors cuina com a casa: el que porta el mercat, amb el nom dels seus a la pissarra. La Nina, el Montxo, la Paca — no són plats, són persones.",
      "hero.cta1": "Trucar i reservar",
      "hero.cta2": "Veure la carta",
      "hero.meta1label": "Barri",
      "hero.meta1value": "Gràcia, Barcelona",
      "hero.meta2label": "Ambient",
      "hero.meta2value": "Barra, tamborets i terrassa",
      "hero.meta3label": "Cuina",
      "hero.meta3value": "Al dia, segons el mercat",
      "hero.tagStrong": "Vermut de aixeta",
      "hero.tagText": "i entrepans que no caben en dues mans.",

      "facts.item1title": "Sense carta fixa",
      "facts.item1text": "Àngel compra cada matí al mercat de l'Abaceria. Es cuina el que hi ha, no el que sobra.",
      "facts.item2title": "Només 20 llocs",
      "facts.item2text": "Barra i tamborets, sense pretensions. Reserva o vine aviat, s'omple ràpid.",
      "facts.item3title": "De tota la vida",
      "facts.item3text": "Metro Alfons X, al carrer, al cor de Gràcia. Sense cadenes, sense turisme de postal.",

      "story.eyebrow": "La història",
      "story.title": "Un bar que es cuina en família, encara que gairebé ningú de la família hi treballi.",
      "story.p1": "<strong>Àngel</strong> porta La Barreta com qui porta la seva pròpia cuina: amb la porta oberta i la nevera plena del que ha comprat aquell mateix matí. No hi ha menú plastificat ni fotos dels plats. Hi ha una pissarra, lletra atapeïda, i noms que només tenen sentit si coneixes la família.",
      "story.p2": "Cada plat que surt de la barra porta el nom d'algú: una filla, un cunyat, una mare. No és un gest de màrqueting — és, senzillament, com Àngel ha anomenat sempre les coses a casa seva. Els clients ho noten de seguida a les ressenyes: es parla dels plats com es parla de la gent, amb afecte.",
      "story.p3": "El resultat és un bar de barri sense impostura, on el vermut es serveix d'aixeta, els entrepans no caben en dues mans, i cada tamboret —perquè aquí no hi ha taules per seure— comparteix quelcom del mateix mercat i de la mateixa cuina de sempre.",
      "story.quote": "“La Nina la fa la meva filla, el Montxo pel meu cunyat, i la Paca amb molt d'amor.”",
      "story.quoteCite": "— Ressenya d'un client sobre Àngel",

      "menu.eyebrow": "La carta",
      "menu.title": "De la família a la barra",
      "menu.lede": "La carta canvia amb el mercat, però aquests són els noms que gairebé mai falten — pregunta per ells, o deixa que Àngel et sorprengui amb el que ha portat avui.",
      "menu.dish1who": "Per la seva filla",
      "menu.dish1name": "La Nina",
      "menu.dish1desc": "Carxofes de temporada guisades a poc a poc, amb un fons que Àngel no comparteix amb ningú. La preferida de la casa quan el mercat porta bona verdura.",
      "menu.dish2who": "Pel seu cunyat",
      "menu.dish2name": "El Montxo",
      "menu.dish2desc": "Entrepà generós, dels que no caben en dues mans: porchetta sucosa, alguna cosa verda i cruixent, i pa que aguanta fins al final.",
      "menu.dish3who": "Amb molt d'amor",
      "menu.dish3name": "La Paca",
      "menu.dish3desc": "La recepta que un client va descriure tal qual: feta amb molt de carinyo. Canvia de forma segons el dia, però mai d'intenció.",
      "menu.dish4who": "Els dijous",
      "menu.dish4name": "Paella del mercat",
      "menu.dish4desc": "Cita fixa de la setmana: arròs fet amb el millor que ha entrat aquell matí. Vola de pressa, així que convé arribar amb gana i sense presses.",
      "menu.note": "Croquetes casolanes, encurtits i opcions veggie gairebé sempre disponibles. La carta exacta es decideix cada matí al mercat — pregunta a la barra què ha portat Àngel avui.",

      "market.eyebrow": "El mercat mana",
      "market.title": "La dictadura del mercat de l'Abaceria",
      "market.p1": "No hi ha proveïdor de congelats ni carta impresa a cinc anys vista. Cada matí Àngel camina fins al mercat de l'Abaceria i decideix el dia segons el que troba: carxofes, encurtits, la verdura que està en el seu punt.",
      "market.p2": "És un mètode antic — gairebé tossut — en una ciutat que cada cop té menys bars així. Però és la raó per la qual un entrepà aquí sap diferent: res no porta més d'un dia a la nevera.",
      "market.tag1": "Vermut artesà d'aixeta",
      "market.tag2": "Croquetes casolanes",
      "market.tag3": "Encurtits propis",
      "market.tag4": "Paella els dijous",

      "visit.eyebrow": "Com arribar",
      "visit.title": "Busca'ns a la barra, no a la carta.",
      "visit.addressLabel": "Adreça",
      "visit.metroLabel": "Metro",
      "visit.metroValue": "L4 — Alfons X, al carrer",
      "visit.hoursLabel": "Horari",
      "visit.day1": "Dimarts – Divendres",
      "visit.day2": "Dissabte",
      "visit.day3": "Diumenge",
      "visit.day4": "Dilluns",
      "visit.closed": "Tancat",
      "visit.phoneLabel": "Telèfon",
      "visit.disclaimer": "* Horari orientatiu d'un bar de barri petit — pot variar segons el dia. Millor confirmar per telèfon abans de venir.",

      "reserve.title": "Guarda lloc a la barra d'Àngel.",
      "reserve.text": "Només 20 llocs, sense taules per seure — així que si véns en grup o vols assegurar tamboret, una trucada ho arregla tot.",
      "reserve.cta1": "+34 640 26 44 94",
      "reserve.cta2": "Escriure per WhatsApp",

      "footer.about": "Bar de barri a Gràcia. Cuina de mercat, vermut d'aixeta, i plats que porten el nom de la família d'Àngel.",
      "footer.exploreLabel": "Explorar",
      "footer.contactLabel": "Contacte",
      "footer.rights": "© 2026 La Barreta — Gràcia, Barcelona.",
      "footer.note": "Lloc no oficial d'un bar de barri, fet amb carinyo."
    },

    en: {
      "brand.sub": "Neighbourhood bar · Gràcia",
      "nav.story": "The story",
      "nav.menu": "The menu",
      "nav.market": "The market",
      "nav.visit": "Find us",
      "nav.reserve": "Reserve",

      "hero.eyebrow": "Carrer de Pi i Margall, Gràcia",
      "hero.title1": "Every dish",
      "hero.title2": "carries a name",
      "hero.title3": "from the family.",
      "hero.lede": "Ángel opened the shutters years ago and has cooked like it's home ever since: whatever the market brings, with his family's names chalked on the board. La Nina, el Montxo, la Paca — they're not dishes, they're people.",
      "hero.cta1": "Call to reserve",
      "hero.cta2": "See the menu",
      "hero.meta1label": "Neighbourhood",
      "hero.meta1value": "Gràcia, Barcelona",
      "hero.meta2label": "Atmosphere",
      "hero.meta2value": "Bar stools and a terrace",
      "hero.meta3label": "Kitchen",
      "hero.meta3value": "Whatever the market brings",
      "hero.tagStrong": "Vermouth on tap",
      "hero.tagText": "and sandwiches too big for two hands.",

      "facts.item1title": "No fixed menu",
      "facts.item1text": "Ángel shops every morning at the Abaceria market. He cooks what's there, not what's left over.",
      "facts.item2title": "Just 20 seats",
      "facts.item2text": "Bar stools only, no pretence. Reserve ahead or come early — it fills up fast.",
      "facts.item3title": "The old way",
      "facts.item3text": "Metro Alfons X, street level, right in the heart of Gràcia. No chains, no postcard tourism.",

      "story.eyebrow": "The story",
      "story.title": "A bar cooked in family — even though almost none of the family actually works there.",
      "story.p1": "<strong>Ángel</strong> runs La Barreta the way you'd run your own kitchen: door open, fridge full of whatever he bought that same morning. There's no laminated menu, no photos of the dishes. There's a chalkboard, cramped handwriting, and names that only make sense once you know the family.",
      "story.p2": "Every dish that comes off the bar carries someone's name: a daughter, a brother-in-law, a mother. It isn't a marketing gesture — it's simply how Ángel has always named things at home. Regulars pick up on it fast in their reviews: they talk about the dishes the way you'd talk about people, with real affection.",
      "story.p3": "The result is an unpretentious neighbourhood bar, where vermouth comes straight from the tap, sandwiches don't fit in two hands, and every stool — because there are no tables to sit at here — shares in the same market and the same kitchen as always.",
      "story.quote": "“La Nina is made by my daughter, el Montxo for my brother-in-law, and la Paca with a lot of love.”",
      "story.quoteCite": "— A customer's review of Ángel",

      "menu.eyebrow": "The menu",
      "menu.title": "From the family to the bar",
      "menu.lede": "The menu moves with the market, but these are the names that rarely disappear — ask for them by name, or let Ángel surprise you with whatever he brought in today.",
      "menu.dish1who": "For his daughter",
      "menu.dish1name": "La Nina",
      "menu.dish1desc": "Seasonal artichokes, slow-braised in a base Ángel won't share with anyone. The house favourite whenever the market brings good vegetables.",
      "menu.dish2who": "For his brother-in-law",
      "menu.dish2name": "El Montxo",
      "menu.dish2desc": "A generous sandwich, one of those that won't fit in two hands: juicy porchetta, something green and crisp, and bread that holds up to the very last bite.",
      "menu.dish3who": "Made with love",
      "menu.dish3name": "La Paca",
      "menu.dish3desc": "The recipe one customer described exactly as it is: made with a lot of love. It changes shape from day to day, but never its intention.",
      "menu.dish4who": "Thursdays only",
      "menu.dish4name": "Market paella",
      "menu.dish4desc": "A fixed weekly date: rice made with the best of what came in that morning. It goes fast, so come hungry and unhurried.",
      "menu.note": "Homemade croquetas, house pickles and veggie options are almost always on hand. The exact menu is decided every morning at the market — ask at the bar what Ángel brought in today.",

      "market.eyebrow": "The market decides",
      "market.title": "The dictatorship of the Abaceria market",
      "market.p1": "There's no frozen-goods supplier here, no menu printed five years in advance. Every morning Ángel walks to the Abaceria market and decides the day by what he finds: artichokes, pickles, whatever vegetable is at its best.",
      "market.p2": "It's an old-fashioned method — almost stubborn — in a city with fewer and fewer bars like this left. But it's exactly why a sandwich here tastes different: nothing sits in the fridge for more than a day.",
      "market.tag1": "Artisan vermouth on tap",
      "market.tag2": "Homemade croquetas",
      "market.tag3": "House-made pickles",
      "market.tag4": "Paella on Thursdays",

      "visit.eyebrow": "Find us",
      "visit.title": "Look for us at the bar, not on a menu board.",
      "visit.addressLabel": "Address",
      "visit.metroLabel": "Metro",
      "visit.metroValue": "L4 — Alfons X, street level",
      "visit.hoursLabel": "Hours",
      "visit.day1": "Tue – Fri",
      "visit.day2": "Saturday",
      "visit.day3": "Sunday",
      "visit.day4": "Monday",
      "visit.closed": "Closed",
      "visit.phoneLabel": "Phone",
      "visit.disclaimer": "* Indicative hours for a small neighbourhood bar — they can vary day to day. Best to confirm by phone before you come.",

      "reserve.title": "Save your spot at Ángel's bar.",
      "reserve.text": "Just 20 seats and no tables to sit at — so if you're coming as a group or want to be sure of a stool, one call sorts it out.",
      "reserve.cta1": "+34 640 26 44 94",
      "reserve.cta2": "Message on WhatsApp",

      "footer.about": "A neighbourhood bar in Gràcia. Market-driven cooking, vermouth on tap, and dishes named after Ángel's family.",
      "footer.exploreLabel": "Explore",
      "footer.contactLabel": "Contact",
      "footer.rights": "© 2026 La Barreta — Gràcia, Barcelona.",
      "footer.note": "Unofficial site for a neighbourhood bar, made with care."
    }
  };

  var STORAGE_KEY = "labarreta-lang";
  var root = document.documentElement;
  var originalEs = {};

  function captureOriginal() {
    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      originalEs[el.getAttribute("data-i18n")] = el.innerHTML;
    });
  }

  function applyLang(lang) {
    var dict = lang === "es" ? originalEs : translations[lang];
    if (!dict) return;
    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      var key = el.getAttribute("data-i18n");
      if (dict[key] !== undefined) {
        el.innerHTML = dict[key];
      } else if (lang !== "es" && originalEs[key] !== undefined) {
        el.innerHTML = originalEs[key];
      }
    });
    document.querySelectorAll("[data-lang]").forEach(function (btn) {
      btn.classList.toggle("active", btn.getAttribute("data-lang") === lang);
    });
    root.setAttribute("lang", lang);
    try { localStorage.setItem(STORAGE_KEY, lang); } catch (e) {}
  }

  function initLang() {
    captureOriginal();
    var saved = null;
    try { saved = localStorage.getItem(STORAGE_KEY); } catch (e) {}
    var lang = saved || "es";
    applyLang(lang);
    document.querySelectorAll("[data-lang]").forEach(function (btn) {
      btn.addEventListener("click", function () {
        applyLang(btn.getAttribute("data-lang"));
      });
    });
  }

  function initMobileNav() {
    var nav = document.getElementById("mobileNav");
    var openBtn = document.getElementById("navToggle");
    var closeBtn = document.getElementById("navClose");
    if (!nav || !openBtn || !closeBtn) return;

    function open() {
      nav.classList.add("open");
      openBtn.setAttribute("aria-expanded", "true");
      document.body.style.overflow = "hidden";
    }
    function close() {
      nav.classList.remove("open");
      openBtn.setAttribute("aria-expanded", "false");
      document.body.style.overflow = "";
    }
    openBtn.addEventListener("click", open);
    closeBtn.addEventListener("click", close);
    nav.querySelectorAll("a").forEach(function (a) {
      a.addEventListener("click", close);
    });
  }

  function initReveal() {
    var items = document.querySelectorAll("[data-reveal]");
    if (!("IntersectionObserver" in window) || items.length === 0) {
      items.forEach(function (el) { el.classList.add("is-visible"); });
      return;
    }
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15, rootMargin: "0px 0px -60px 0px" });
    items.forEach(function (el) { io.observe(el); });
  }

  document.addEventListener("DOMContentLoaded", function () {
    initLang();
    initMobileNav();
    initReveal();
  });
})();
