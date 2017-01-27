(function(global, $) {
    
    // 'uus' objekt
    var Greetr = function(firstName, lastName, language) {
        return new Greetr.init(firstName, lastName, language);   
    }
    
    
    // peidetud IIFE skoopi ja mitte kunagi pole otseselt ligipaasetav
    var supportedLangs = ['en', 'es'];
    
    
    // tavatervitused
    var greetings = {
        en: 'Hello',
        es: 'Hola'
    };
    
    // formaalsed tervitused
    var formalGreetings = {
        en: 'Greetings',
        es: 'Saludos'
    };
    
    // logi teated
    var logMessages = {
        en: 'Logged in',
        es: 'Inició sesión'
    };
    
    // prototyyp hoiab meetodeid (et hoida kokku malu)
    Greetr.prototype = {
        
        
        // 'this' viitab kutsuvale objektile kaivitamise ajal
        fullName: function() {
            return this.firstName + ' ' + this.lastName;   
        },
        
        validate: function() {
            // kontrolli et oleks toetatud keel
            // viitab valiselt juurdepaasmatule 'supportedLangs'ile
            // closure sees
             if (supportedLangs.indexOf(this.language)  === -1) {
                throw "Invalid language";   
             }
        },
        
        
        // vota teated objektilt viidates parameetritele kasutades [] syntaksi
    
        greeting: function() {
            return greetings[this.language] + ' ' + this.firstName + '!';
        },
        
        formalGreeting: function() {
            return formalGreetings[this.language] + ', ' + this.fullName();  
        },
        
        // yhendatavad meetodid tagastavad end sisaldavaid objekte
        greet: function(formal) {
            var msg;
            
            // kui undefined voi null siis sunnitakse see 'false'ks 
            if (formal) {
                msg = this.formalGreeting();  
            }
            else {
                msg = this.greeting();  
            }

            if (console) {
                console.log(msg);
            }

            
            // 'this' viitab objekti kutsumisele kaivitamise ajal, teeb meetodi
            // yhendatavaks
            return this;
        },
        
        log: function() {
            if (console) {
                console.log(logMessages[this.language] + ': ' + this.fullName()); 
            }
            
            // tee yhendatav
            return this;
        },
                            
        setLang: function(lang) {
            
            // defineeri keel
            this.language = lang;
        
            // valideeri
            this.validate();
            
            // tee yhendatavaks
            return this;
        },
        
        HTMLGreeting: function(selector, formal) {
            if (!$) {
                throw 'jQuery not loaded';   
            }
            
            if (!selector) {
                throw 'Missing jQuery selector';   
            }
            
            // muutuja msg defineerib teate
            var msg;
            if (formal) {
                msg = this.formalGreeting();   
            }
            else {
                msg = this.greeting();   
            }
            
            // paneb teate valitud kohta DOM'is
            $(selector).html(msg);
            
            // tee yhendatavaks
            return this;
        }
        
    };
    

    // paris objekt luuakse siin, lubades meil kasutada 'new' objektil
    // ilma selleta et objekt peaks olema 'new'
    Greetr.init = function(firstName, lastName, language) {
        
        var self = this;
        self.firstName = firstName || '';
        self.lastName = lastName || '';
        self.language = language || 'en';
        
        self.validate();
        
    }
    
  
    // laenatud trikk jQuerist et ei peaks kasutama 'new' votmesona
    Greetr.init.prototype = Greetr.prototype;
    
 
    // Greetr pannakse globaalse objekti kylge et luua shortcut
    // '$G' et vahem kirjutama peaks
    global.Greetr = global.G$ = Greetr;
    
}(window, jQuery));