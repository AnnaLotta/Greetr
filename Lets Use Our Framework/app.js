// saab uue objekti
var g = G$('John', 'Doe');


// siin kasutame yhilduvaid meetodeid Greetr.js'ist
g.greet().setLang('es').greet(true).log();


// objekti kasutatakse sisselogimise nupule vajutamisel
$('#login').click(function() {
   
   
    // luuakse uus Greetri objekt, loginGrtr
    var loginGrtr = G$('John', 'Doe');
    
     // ekraanil login peidetakse
    $('#logindiv').hide();
    
     // kaivitatakse HTML tervitus, kasutades #greetingut selektorina ja valitud keelena
     // ja siis logitakse ka tervitus
    loginGrtr.setLang($('#lang').val()).HTMLGreeting('#greeting', true).log();
    
});