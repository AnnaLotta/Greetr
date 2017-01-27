(function(global, $) {
    
    // luuakse uus objekt mille sees on funktsioon
    var Greetr = function(firstName, lastName, language) {
        return new Greetr.init(firstName, lastName, language);   
    }
    
    // tehakse prototyyp, milles asetsevad meetodid
    Greetr.prototype = {};
    

    // paris uus objekt luuakse siin, mis lubab meil teha
    // uue objekti ilma selleta et nimetada new'd
    Greetr.init = function(firstName, lastName, language) {
        
        // teeb muutuja self mis vordub thisiga
        // ta viitab iseendale, leides sealt eesnime, perenime ja vajaliku keele
        var self = this;
        self.firstName = firstName || '';
        self.lastName = lastName || '';
        self.language = language || 'en';
        
    }
    
    // selleks et mitte kasutada new votmesona on siin 
    // jquerist laenatud
    Greetr.init.prototype = Greetr.prototype;
    

    // Greetr poogitakse globaalse objekti kylge
    // mis annab voimaluse kirjutada lyhemalt
    global.Greetr = global.G$ = Greetr;
    
}(window, jQuery));