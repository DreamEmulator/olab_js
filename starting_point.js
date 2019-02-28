///*******
//Olab
//17-07-2018
//Sebastiaan Hols
//*********/
//List Sorting:
// Hoofdcategorie
var catA = [];
var catAsorted = [];
// Anamnese
var catB = [];
var catBsorted = [];
// Uitvragen Hoofdklacht
var catC = [];
var catCsorted = [];
// Lichamelijk Onderzoek
var catD = [];
var catDsorted = [];
// Aanvullend Onderzoek
var catE = [];
var catEsorted = [];
// Onderzoek Binnen De Praktijk
var catF = [];
var catFsorted = [];
// Microbiologie
var catG = [];
var catGsorted = [];
var trimText;
// var anamneseClick = false;
// var lichamelijkOnderzoekClick = false;
// var aanvullendOnderzoekClick = false;
//Register clicks in the navigation
//Remove points depending on which boolean is set to true
$(document).ready(function () {

//Clean up embed error
    $('a:contains("">")').length > 0 ? $('a:contains("">")').html($('a:contains("">")').html().split('"&gt;')[1]) : null;

    $(".popup-outside-container div").first().children("div:nth-child(1)").addClass("navBlock");
    $(".popup-outside-container div").first().children("div:nth-child(2)").addClass("textBlock");
    $(".popup-outside-container div").first().children("div:nth-child(3)").addClass("historyBlock");
    $(".navigation").parent().css("height", "90%");
    $("[alt='info']").addClass('infoButton');
    $("[data-target='#counter-debug']").parent().addClass('counter');
    $(".counter:not(.counter:eq(0))").remove();
    $(".annotation").remove();

    if (!$("iframe").parent().hasClass("embed-container")) {
        $("iframe").wrap("<div class='embed-container'></div>");
    };

    $('img[src*="SBAR"]').attr('src', '/olab/files/71/SBAR.png').css({
        'border': 'none',
        'position': 'relative',
        'left': '50%',
        'transform': 'translatex(-50%)',
        'width': '100%',
        'max-width': '603px'
    });


    $('[id^=ChatQuestion]').click(function () {
        $('[id^=ChatAnswer] p').each(function () {
            var $this = $(this);
            $this.html($this.html().replace(/&nbsp;/g, ''));
        });
    });


    $('[id^=ChatQuestion]').click(function () {
        $(this).parent().parent().addClass('qClicked');
        if (!$("iframe").parent().hasClass("embed-container")) {
            $("iframe").wrap("<div class='embed-container'></div>");
        }
        ;

    });

    //Video Wrapper
    var wrapVideo = function () {
        $("iframe").css({
            "position": "absolute"
            , "top": "0"
            , "left": "0"
            , "height": "100%"
        }).wrap("<div class='videoWrapper'></div>");
        $(".videoWrapper").css({
            "position": "relative",
            "padding-bottom": "56.25%",
            "padding-top": "25px",
            "height": "0"
        });
    };

    // Table Builder
    var count = $('.textBlock tr').length;
    if (count != 0) {
        for (i = 1; i < count; i = i + 2) {
            $("'.textBlock tr:nth-child(" + i + ")'").append(($("'.textBlock tr:nth-child(" + (i + 1) + ")'").contents()));
        }
    };
    //Old clock: <img src="../../../css/skin/basic/clock.png" class="clock">
    //   $( "a.btn:contains('>')").addClass('navButton');
    // $( "a.btn:contains('>>')").addClass('navButtonExtra');
    var arrayBuilt = false;
    var getArray = function (sortingItems) {
        var sortingItems = $(".btn").length;
        // console.log("Getting Array Items..");
        for (i = 0; i < sortingItems; i++) {
            var b = $(".btn").eq(i);
            // console.log(b);
            if (($(b).text() == "Begin van het consult" || $(b).text() == "Anamnese" || $(b).text() == "Vervolg anamnese" || $(b).text() == "Lichamelijk onderzoek" || $(b).text() == "Differentiaal Diagnose" || $(b).text() == "Aanvullend onderzoek" || $(b).text() == "Werkdiagnose en beleid" || $(b).text() == "Medicatie toedienen" || $(b).text() == "Maak je SBAR")) {
                catA.push(b)
            }
            else if ($(b).text() == "Uitvragen hoofdklacht" || $(b).text() == "Algemene anamnese" || $(b).text() == "Sociale anamnese" || $(b).text() == "Bewegingsapparaat" || $(b).text() == "Tractus circulatorius" || $(b).text() == "Tractus respiratorius" || $(b).text() == "Tractus neurologie" || $(b).text() == "Tractus digestivus" || $(b).text() == "Tractus urogenitalis" || $(b).text() == "Endocrinologische tractus" || $(b).text() == "Psychologische tractus") {
                catB.push(b)
            }
            else if ($(b).text() == "Uitvragen..." || $(b).text() == "Bijkomende klachten" || $(b).text() == "Uitvragen van de pijn" || $(b).text() == "Uitvragen van de klacht" || $(b).text() == "Uitvragen klacht" || $(b).text() == "Uitvragen van het gewichtsverlies" || $(b).text() == "Anamnese mevrouw Verstraten" || $(b).text() == "Anamnese meneer Verstraten") {
                catC.push(b)
            }
            else if ($(b).text() == "Algemene indruk" || $(b).text() == "Metingen" || $(b).text() == "Hoofd" || $(b).text() == "Hals" || $(b).text() == "Hoofd / hals" || $(b).text() == "KNO" || $(b).text() == "Nek" || $(b).text() == "Rug" || $(b).text() == "Neurologisch onderzoek" || $(b).text() == "Thorax" || $(b).text() == "Buik" || $(b).text() == "Extremiteiten" || $(b).text() == "Thorax, buik, en ledematen" || $(b).text() == "A" || $(b).text() == "B" || $(b).text() == "C" || $(b).text() == "D" || $(b).text() == "E") {
                catD.push(b)
            }
            else if ($(b).text() == "Onderzoek binnen de praktijk" || $(b).text() == "Laboratoriumonderzoek" || $(b).text() == "Microbiologie" || $(b).text() == "Histologie") {
                catE.push(b)
            }
            else if ($(b).text() == "Urine onderzoek (dipstick): uitslag bekend binnen 5 minuten." || $(b).text() == "Urine onderzoek (dipstick): uitslag bekend binnen 5 minuten" || $(b).text() == "Zwangerschapstest: uitslag bekend binnen 5 min" || $(b).text() == "Zwangerschapstest: uitslag bekend binnen 5 minuten." || $(b).text() == "Zwangerschapstest: uitslag bekend binnen 5 minuten" || $(b).text() == "Echo: uitslag bekend na 3 dagen" || $(b).text() == "ECG: uitslag bekend na 3 dagen" || $(b).text() == "Spirometrie: uitslag bekend na 3 dagen" || $(b).text() == "Rontgen onderzoek: uitslag bekend na 3 dagen" || $(b).text() == "EA-index: uitslag bekend na 3 dagen" ||$(b).text() == "VierDimensionale KlachtenLijst (4DKL)"||$(b).text() == "Audiogram" || $(b).text() == "Basale temperatuurcurve: uitslag bekend na een maand" || $(b).text() == "Salbutamol per voorzetkamer") {
                catF.push(b)
            }
            else if ($(b).text() == "Chlamydia onderzoek" || $(b).text() == "Afscheiding oog - banale kweek" ||  $(b).text() == "PCR  C. Trachomatis"|| $(b).text() == "PCR Gonorroe" || $(b).text() == "Gonorroe kweek" || $(b).text() == "Trichomonas kweek" || $(b).text() == "Herpes Simplex test" || $(b).text() == "Gardnerella kweek" || $(b).text() == "Candida kweek" || $(b).text() == "Feces viraal" || $(b).text() == "Feces bacterieel" || $(b).text() == "Feces parasiet" || $(b).text() == "Helicobacter pylori feces" || $(b).text() == "Urine kweek" || $(b).text() == "Semen analyse" || $(b).text() == "Post-coïtumtest") {
                catG.push(b)
            }
        }
        ;
        arrayBuilt = true;
        //Sort out Array's
        var arraySort = false;
        //Sort Hoofd
        for (i = 0; i < catA.length; i++) {
            // console.log("Hoofd Categorie Array Found: sorting...");
            if (catA[i].text() == "Begin van het consult") {
                catAsorted[1] = catA[i];
            }
            else if (catA[i].text() == "Anamnese") {
                catAsorted[2] = catA[i];
            }
            else if (catA[i].text() == "Vervolg anamnese") {
                catAsorted[3] = catA[i];
            }
            else if (catA[i].text() == "Lichamelijk onderzoek") {
                catAsorted[4] = catA[i];
            }
            else if (catA[i].text() == "Differentiaal Diagnose") {
                catAsorted[5] = catA[i];
            }
            else if (catA[i].text() == "Aanvullend onderzoek") {
                catAsorted[6] = catA[i];
            }
            else if (catA[i].text() == "Werkdiagnose en beleid") {
                catAsorted[7] = catA[i];
            }
            else if (catA[i].text() == "Medicatie toedienen") {
                catAsorted[8] = catA[i];
            }
            else if (catA[i].text() == "Maak je SBAR") {
                catAsorted[9] = catA[i];
            }
            else {
                // console.log("Attention: Item unsorted...")
            }
        }
        ;
        //Sort Anamnese
        for (i = 0; i < catB.length; i++) {
            // console.log("Anamnese Array Found: sorting...");
            if (catB[i].text() == "Uitvragen hoofdklacht") {
                catBsorted[1] = catB[i];
            }
            else if (catB[i].text() == "Algemene anamnese") {
                catBsorted[2] = catB[i];
            }
            else if (catB[i].text() == "Sociale anamnese") {
                catBsorted[3] = catB[i];
            }
            else if (catB[i].text() == "Bewegingsapparaat") {
                catBsorted[4] = catB[i];
            }
            else if (catB[i].text() == "Tractus circulatorius") {
                catBsorted[5] = catB[i];
            }
            else if (catB[i].text() == "Tractus respiratorius") {
                catBsorted[6] = catB[i];
            }
            else if (catB[i].text() == "Tractus neurologie") {
                catBsorted[7] = catB[i];
            }
            else if (catB[i].text() == "Tractus digestivus") {
                catBsorted[8] = catB[i];
            }
            else if (catB[i].text() == "Tractus urogenitalis") {
                catBsorted[9] = catB[i];
            }
            else if (catB[i].text() == "Endocrinologische tractus") {
                catBsorted[10] = catB[i];
            }
            else if (catB[i].text() == "Psychologische tractus") {
                catBsorted[11] = catB[i];
            }
            else {
                // console.log("Attention: Item unsorted...")
            }
        }
        ;
        //Sort Uitvragen Hoofdklacht
        for (i = 0; i < catC.length; i++) {
            // console.log("Uitvragen Hoofdklacht Array Found: sorting...");
            if (catC[i].text() == "Uitvragen...") {
                catCsorted[1] = catC[i];
            }
            else if (catC[i].text() == "Uitvragen van de klacht") {
                catCsorted[2] = catC[i];
            }
            else if (catC[i].text() == "Uitvragen klacht") {
                catCsorted[2] = catC[i];
            }
            else if (catC[i].text() == "Uitvragen van de pijn") {
                catCsorted[3] = catC[i];
            }
            else if (catC[i].text() == "Uitvragen van het gewichtsverlies") {
                catCsorted[4] = catC[i];
            }
            else if (catC[i].text() == "Anamnese meneer Verstraten") {
                catCsorted[5] = catC[i];
            }
            else if (catC[i].text() == "Anamnese mevrouw Verstraten") {
                catCsorted[6] = catC[i];
            }
            else if (catC[i].text() == "Bijkomende klachten") {
                catCsorted[7] = catC[i];
            }
            else {
                // console.log("Attention: Item unsorted...")
            }
        }
        ;
        //Sort Lichamelijk Onderzoek
        for (i = 0; i < catD.length; i++) {
            // console.log("Lichamelijk Onderzoek Array Found: sorting...");
            if (catD[i].text() == "Algemene indruk") {
                catDsorted[1] = catD[i];
            }
            else if (catD[i].text() == "Metingen") {
                catDsorted[2] = catD[i];
            }
            else if (catD[i].text() == "Hoofd") {
                catDsorted[3] = catD[i];
            }
            else if (catD[i].text() == "Hals") {
                catDsorted[4] = catD[i];
            }
            else if (catD[i].text() == "Hoofd / hals") {
                catDsorted[5] = catD[i];
            }
            else if (catD[i].text() == "KNO") {
                catDsorted[6] = catD[i];
            }
            else if (catD[i].text() == "Nek") {
                catDsorted[7] = catD[i];
            }
            else if (catD[i].text() == "Rug") {
                catDsorted[8] = catD[i];
            }
            else if (catD[i].text() == "Neurologisch onderzoek") {
                catDsorted[9] = catD[i];
            }
            else if (catD[i].text() == "Thorax") {
                catDsorted[10] = catD[i];
            }
            else if (catD[i].text() == "Buik") {
                catDsorted[11] = catD[i];
            }
            else if (catD[i].text() == "Extremiteiten") {
                catDsorted[12] = catD[i];
            }
            else if (catD[i].text() == "Thorax, buik, en ledematen") {
                catDsorted[13] = catD[i];
            }
            else if (catD[i].text() == "A") {
                catDsorted[14] = catD[i];
            }
            else if (catD[i].text() == "B") {
                catDsorted[15] = catD[i];
            }
            else if (catD[i].text() == "C") {
                catDsorted[16] = catD[i];
            }
            else if (catD[i].text() == "D") {
                catDsorted[17] = catD[i];
            }
            else if (catD[i].text() == "E") {
                catDsorted[18] = catD[i];
            }
            else {
                // console.log("Attention: Item unsorted...")
            }
        }
        ;
        //Sort Aanvullend Onderzoek
        for (i = 0; i < catE.length; i++) {
            // console.log("Aanvullend Onderzoek Array Found: sorting...");
            if (catE[i].text() == "Onderzoek binnen de praktijk") {
                catEsorted[1] = catE[i];
            }
            else if (catE[i].text() == "Laboratoriumonderzoek") {
                catEsorted[2] = catE[i];
            }
            else if (catE[i].text() == "Microbiologie") {
                catEsorted[3] = catE[i];
            }
            else if (catE[i].text() == "Histologie") {
                catEsorted[4] = catE[i];
            }
            else {
                // console.log("Attention: Item unsorted...")
            }
        }
        ;
        //Sort Onderzoek Binnen de Praktijk
        for (i = 0; i < catF.length; i++) {
            // console.log("Onderzoek Binnen de Praktijk: sorting...");
            if (catF[i].text() == "Urine onderzoek (dipstick): uitslag bekend binnen 5 min") {
                catFsorted[1] = catF[i];
            }
            else if (catF[i].text() == "Urine onderzoek (dipstick): uitslag bekend binnen 5 minuten.") {
                catFsorted[2] = catF[i];
            }
            else if (catF[i].text() == "Urine onderzoek (dipstick): uitslag bekend binnen 5 minuten") {
                catFsorted[3] = catF[i];
            }
            else if (catF[i].text() == "Zwangerschapstest: uitslag bekend binnen 5 min") {
                catFsorted[4] = catF[i];
            }
            else if (catF[i].text() == "Zwangerschapstest: uitslag bekend binnen 5 minuten.") {
                catFsorted[5] = catF[i];
            }
            else if (catF[i].text() == "Zwangerschapstest: uitslag bekend binnen 5 minuten") {
                catFsorted[6] = catF[i];
            }
            else if (catF[i].text() == "Echo: uitslag bekend na 3 dagen") {
                catFsorted[7] = catF[i];
            }
            else if (catF[i].text() == "ECG: uitslag bekend na 3 dagen") {
                catFsorted[8] = catF[i];
            }
            else if (catF[i].text() == "Spirometrie: uitslag bekend na 3 dagen") {
                catFsorted[9] = catF[i];
            }
            else if (catF[i].text() == "Rontgen onderzoek: uitslag bekend na 3 dagen") {
                catFsorted[10] = catF[i];
            }
            else if (catF[i].text() == "EA-index: uitslag bekend na 3 dagen") {
                catFsorted[11] = catF[i];
            }
            else if (catF[i].text() == "VierDimensionale KlachtenLijst (4DKL)") {
                catFsorted[12] = catF[i];
            }
	    else if (catF[i].text() == "Audiogram") {
                catFsorted[13] = catF[i];
            }
            else if (catF[i].text() == "Basale temperatuurcurve: uitslag bekend na een maand") {
                catFsorted[14] = catF[i];
            }
            else if (catF[i].text() == "Salbutamol per voorzetkamer") {
                catFsorted[15] = catF[i];
            }
            else {
                // console.log("Attention: Item unsorted...")
            }
        }
        ;
        //Sort Microbiologie
        for (i = 0; i < catG.length; i++) {
            // console.log("Microbiologie Array Found: sorting...");
            if (catG[i].text() == "Chlamydia onderzoek") {
                catGsorted[1] = catG[i];
            }
            else if (catG[i].text() == "Gonorroe kweek") {
                catGsorted[2] = catG[i];
            }
            else if (catG[i].text() == "Trichomonas kweek") {
                catGsorted[3] = catG[i];
            }
            else if (catG[i].text() == "Herpes Simplex test") {
                catGsorted[4] = catG[i];
            }
            else if (catG[i].text() == "Gardnerella kweek") {
                catGsorted[5] = catG[i];
            }
            else if (catG[i].text() == "Candida kweek") {
                catGsorted[6] = catG[i];
            }
            else if (catG[i].text() == "Feces viraal") {
                catGsorted[7] = catG[i];
            }
            else if (catG[i].text() == "Feces bacterieel") {
                catGsorted[8] = catG[i];
            }
            else if (catG[i].text() == "Feces parasiet") {
                catGsorted[9] = catG[i];
            }
            else if (catG[i].text() == "Helicobacter pylori feces") {
                catGsorted[10] = catG[i];
            }
            else if (catG[i].text() == "Urine kweek") {
                catGsorted[11] = catG[i];
            }
            else if (catG[i].text() == "Semen analyse") {
                catGsorted[12] = catG[i];
            }
            else if (catG[i].text() == "Post-coïtumtest") {
                catGsorted[13] = catG[i];
            }
	    else if (catG[i].text() == "PCR  C. Trachomatis") {
                catGsorted[14] = catG[i];
            }
            else if (catG[i].text() == "PCR Gonorroe") {
                catGsorted[15] = catG[i];
            }
            else if (catG[i].text() == "Afscheiding oog - banale kweek") {
                catGsorted[16] = catG[i];
            }
            else {
                // console.log("Attention: Item unsorted...")
            }
        }
        ;
    };
    //Write out Array Data
    var writeArray = function () {
        // console.log("Writing out sorted array's...")
        // $(".navBlock").empty();
        //Anamnese
        if (catBsorted.length > 0) {
            $(".navBlock").append("<h1>Anamnese</h1>");
            var a = catBsorted.length;
            for (i = 0; i < a; i++) {
                $(".navBlock").append(catBsorted[i]);
            }
        }
        //Uitvragen hoofdklacht
        if (catCsorted.length > 0) {
            $(".navBlock").append("<h1>Uitvragen Hoofdklacht</h1>");
            var a = catCsorted.length;
            for (i = 0; i < a; i++) {
                $(".navBlock").append(catCsorted[i]);
            }
        }
        //Lichamelijk onderzoek
        if (catDsorted.length > 0) {
            $(".navBlock").append("<h1>Lichamelijk Onderzoek</h1>");
            var a = catDsorted.length;
            for (i = 0; i < a; i++) {
                $(".navBlock").append(catDsorted[i]);
            }
        }
        //Aanvullend onderzoek
        if (catEsorted.length > 0) {
            $(".navBlock").append("<h1>Aanvullend Onderzoek</h1>");
            var a = catEsorted.length;
            for (i = 0; i < a; i++) {
                $(".navBlock").append(catEsorted[i]);
            }
        }
        //Onderzoek Binnen de Praktijk;
        if (catFsorted.length > 0) {
            $(".navBlock").append("<h1>Onderzoek Binnen de Praktijk</h1>")
            var a = catFsorted.length;
            for (i = 0; i < a; i++) {
                $(".navBlock").append(catFsorted[i]);
            }
        }
        //Microbiologie
        if (catGsorted.length > 0) {
            $(".navBlock").append("<h1>Microbiologie</h1><ol></ol>");
            var a = catGsorted.length;
            for (i = 0; i < a; i++) {
                $(".navBlock").append(catGsorted[i]);
            }
        }
        //Hoofdcategorie
        if (catAsorted.length > 0) {
            $(".navBlock").append("<h1>Navigatie</h1>");
            var a = catAsorted.length;
            for (i = 0; i < a; i++) {
                $(".navBlock").append(catAsorted[i]);
            }
        }
    };
    //Add tags to the DOM items
    var tagArray = function (tagItems) {
        var tagItems = $(".btn").length;
        // console.log("Getting Array Items to tag..");
        for (i = 0; i < tagItems; i++) {
            var b = $(".btn").eq(i);
            // console.log(b);
            if (($(b).text() == "Begin van het consult")) {
                b.addClass("navButton")
            }
            else if ($(b).text() == "Anamnese") {
                b.addClass("navButton").addClass("anamneseBtn")
            }
            else if ($(b).text() == "Lichamelijk onderzoek") {
                b.addClass("navButton").addClass("lichamelijkOnderzoekBtn")
            }
            else if ($(b).text() == "Aanvullend onderzoek") {
                b.addClass("navButton").addClass("aanvullendOnderzoekBtn")
            }
            else if ($(b).text() == "Differentiaal Diagnose") {
                b.addClass("navButton")
            }
            else if ($(b).text() == "Werkdiagnose en beleid") {
                b.addClass("navButton")
            }
            else if ($(b).text() == "Vervolg anamnese") {
                b.addClass("navButton")
            }
            else if ($(b).text() == "Medicatie toedienen") {
                b.addClass("navButton")
            }
            else if ($(b).text() == "Maak je SBAR") {
                b.attr("id", "navButtonExtra")
            }
            else if ($(b).text() == "Uitvragen hoofdklacht" || $(b).text() == "Algemene anamnese" || $(b).text() == "Sociale anamnese" || $(b).text() == "Bewegingsapparaat" || $(b).text() == "Tractus circulatorius" || $(b).text() == "Tractus respiratorius" || $(b).text() == "Tractus neurologie" || $(b).text() == "Tractus digestivus" || $(b).text() == "Tractus urogenitalis" || $(b).text() == "Endocrinologische tractus" || $(b).text() == "Psychologische tractus") {
                b.addClass("anamnese")
            }
            else if ($(b).text() == "Uitvragen..." || $(b).text() == "Uitvragen van de pijn" || $(b).text() == "Uitvragen van de klacht" ||  $(b).text() == "Uitvragen klacht" || $(b).text() == "Bijkomende klachten") {
                b.addClass("uitvragen")
            }
            else if ($(b).text() == "Algemene indruk" || $(b).text() == "Metingen" || $(b).text() == "Hoofd" || $(b).text() == "Hals" || $(b).text() == "Hoofd / hals" || $(b).text() == "KNO" || $(b).text() == "Nek" || $(b).text() == "Rug" || $(b).text() == "Neurologisch onderzoek" || $(b).text() == "Thorax" || $(b).text() == "Buik" || $(b).text() == "Extremiteiten" || $(b).text() == "Thorax, buik, en ledematen") {
                b.addClass("lichamelijkOnderzoek")
            }
            else if ($(b).text() == "Onderzoek binnen de praktijk" || $(b).text() == "Laboratoriumonderzoek" || $(b).text() == "Microbiologie" || $(b).text() == "Histologie") {
                b.addClass("aanvullendOnderzoek")
            }
            else if ($(b).text() == "Urine onderzoek (dipstick): uitslag bekend binnen 5 min" || $(b).text() == "Urine onderzoek (dipstick): uitslag bekend binnen 5 minuten." || $(b).text() == "Zwangerschapstest: uitslag bekend binnen 5 min" || $(b).text() == "Zwangerschapstest: uitslag bekend binnen 5 minuten." || $(b).text() == "Zwangerschapstest: uitslag bekend binnen 5 minuten" || $(b).text() == "Echo: uitslag bekend na 3 dagen" || $(b).text() == "ECG: uitslag bekend na 3 dagen" || $(b).text() == "Spirometrie: uitslag bekend na 3 dagen" || $(b).text() == "Rontgen onderzoek: uitslag bekend na 3 dagen" || $(b).text() == "EA-index: uitslag bekend na 3 dagen" || $(b).text() == "VierDimensionale KlachtenLijst (4DKL)" || $(b).text() == "Audiogram" || $(b).text() == "Basale temperatuurcurve..." || $(b).text() == "Salbutamol per voorzetkamer") {
                b.addClass("onderzoekBinnenPraktijk")
            }
            else if ($(b).text() == "Chlamydia onderzoek"|| $(b).text() == "PCR Gonorroe" ||$(b).text() == "Afscheiding oog - banale kweek" || $(b).text() == "PCR  C. Trachomatis" || $(b).text() == "Gonorroe kweek" || $(b).text() == "Trichomonas kweek" || $(b).text() == "Herpes Simplex test" || $(b).text() == "Gardnerella kweek" || $(b).text() == "Candida kweek" || $(b).text() == "Feces viraal" || $(b).text() == "Feces bacterieel" || $(b).text() == "Feces parasiet" || $(b).text() == "Helicobacter pylori feces" || $(b).text() == "Urine kweek" || $(b).text() == "Semen analyse" || $(b).text() == "Post-coïtumtest") {
                b.addClass("microbiologie")
            }
        }
    };


    //COUNTER:

    if (location.href.split('index').length > 1) {
        localStorage.startAmount = parseInt($($(document).find('#counter-debug h2')[0]).text().split("= ")[1]);
    }
    var startAmount = localStorage.startAmount;

    function scoreBijwerken(newScore) {
        if (newScore > 0) {
            $("li.counter p:not(p.erasmuswallet)").html('Je hebt nog ' + newScore + ' punten over...');
            $(".time").css("height", ((newScore / startAmount) * 100) + "%");
        }
        else {
            $("li.counter p:not(p.erasmuswallet)").html('Je hebt geen punten meer over. Het is tijd om de SBAR te maken...');
            $(".time").css("height", "0%");
            $("[id^=ChatQuestion]").css("pointer-events", "none");
//            setTimeout(function () {
//                $('.btn:not(#navButtonExtra), .navBlock h1').css('transition', '1s').fadeOut("slow", function () {
//                    $('.btn:not(#navButtonExtra), .navBlock h1').remove();
//                })
//                $("#navButtonExtra").click();
//                console.log("Going to SBAR...");
//            }, 2000);
        }
    };

    $("[id^=ChatQuestion]").click(function () {
        $.ajax({
            url: '', success: function (result) {
                var newScore = parseInt($($('<div>' + result + '</div>').find('#counter-debug h2')[0]).text().split("= ")[1]);
                scoreBijwerken(newScore);
            }

        });
    });


    var score = parseInt($($(document).find('#counter-debug h2')[0]).text().split("= ")[1]);

    $("li.counter").html('<div class="timeContainer"><div class="time"></div></div><p>'+score+'</p></li>');

    scoreBijwerken(score);

    //Call Sort Function
    if (arrayBuilt == false) {
        getArray();
        writeArray();
        tagArray();
    }
    ;
});


//Dit is voor de digitale portemonnnee

$(document).ready(function(){

	if ($("#counter-debug h2:contains('wallet')").length > 0) {
	        console.log("Loading Erasmus Wallet Module");
        	$.getScript('/olab/erasmus_custom/js/wallet.js');
	}

});
