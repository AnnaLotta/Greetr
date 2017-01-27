(function(global, $) {
    
    var Greetr = function(firstName, lastName, language) {
        return new Greetr.init(firstName, lastName, language);   
    }
    
    // tehakse muutuja, milles on olemas millised keeled on 
    // toetatud
    var supportedLangs = ['en', 'es'];
    
    // tehakse muutuja greetings, milles on tervitused eelnevalt
    // kehtestatud keeltes ara defineeritud
    var greetings = {
        en: 'Hello',
        es: 'Hola'
    };
    
    // tehakse muutuja formalGreetings, milles on formaalsed
    // tervitused eelnevalt defineeritud keeltes
    var formalGreetings = {
        en: 'Greetings',
        es: 'Saludos'
    };
    
    // tehakse muutuja logMessages, milles on sisselogimise
    // teated inglise ja hispaania keeles defineeritud
    var logMessages = {
        en: 'Logged in',
        es: 'Inició sesión'
    };
    
    Greetr.prototype = {
        
        // parameeter fullName saab funktsiooni, mis valjastab
        // eesnime ja perenime this'iga, mis tahendab, et 
        // objekti kutsutakse kaivitamise ajal
        fullName: function() {
            return this.firstName + ' ' + this.lastName;   
        },
        
        // valideerimise funktsioon, vaatab kas keel on toetatud
        // viitab supportedLangs muutujale, kus olid defineeritud
        // toetatud keeled
        validate: function() {
             if (supportedLangs.indexOf(this.language)  === -1) {
                throw "Invalid language";   
             }
        },
        
        // greeting muutujale lisatakse funktsioon mis tagastab
        // teate objektist parameetritele viidates kasutades nurksulgude
        // syntaksit
        greeting: function() {
            return greetings[this.language] + ' ' + this.firstName + '!';
        },
        
        // teeb seda sama mis eelmine
        formalGreeting: function() {
            return formalGreetings[this.language] + ', ' + this.fullName();  
        },
        

        // yhendatavad meetodid tagastavad oma enda obejkti
        greet: function(formal) {
            // defineeritakse muutuja msg
            var msg;
            
            // kui on undefined voi null siis sunnitakse ta 'false'ks
            // kui on formal siis valjasta formalGreeting
            if (formal) {
                msg = this.formalGreeting();  
            }
            // vastasel juhul valjasta lihtsalt greeting
            else {
                msg = this.greeting();  
            }
            // kui konsool siis valjasta muutja msg
            if (console) {
                console.log(msg);
            }

            // 'this' viitab kutsutavale objektile kaivitamise ajal
            // see teebki meetodi yhendatavaks.
            return this;
        },
        
        // logi funktsioon, kui on konsool siis valjasta logMessage vajalikus
        // keeles ja fullName.
        log: function() {
            if (console) {
                console.log(logMessages[this.language] + ': ' + this.fullName()); 
            }
            
            // teeb yhendadtavaks             
            return this;
        },
          
        // setlang funktsioon keele maaramiseks, lang parameeter lisatakse                  
        setLang: function(lang) {
            // kehtestab keele
            this.language = lang;
            
            // valideerib kas keel on toetatud
            this.validate();
            
            // teeb yhendatavaks
            return this;
        }
        
    };
    
    Greetr.init = function(firstName, lastName, language) {
        
        var self = this;
        self.firstName = firstName || '';
        self.lastName = lastName || '';
        self.language = language || 'en';
        
    }
    
    Greetr.init.prototype = Greetr.prototype;
    
    global.Greetr = global.G$ = Greetr;
    
}(window, jQuery));