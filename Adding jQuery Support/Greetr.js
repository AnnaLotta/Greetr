(function(global, $) {
    
    var Greetr = function(firstName, lastName, language) {
        return new Greetr.init(firstName, lastName, language);   
    }
    
    var supportedLangs = ['en', 'es'];
    
    var greetings = {
        en: 'Hello',
        es: 'Hola'
    };
    
    var formalGreetings = {
        en: 'Greetings',
        es: 'Saludos'
    };
    
    var logMessages = {
        en: 'Logged in',
        es: 'Inició sesión'
    };
    
    Greetr.prototype = {
        
        fullName: function() {
            return this.firstName + ' ' + this.lastName;   
        },
        
        validate: function() {
             if (supportedLangs.indexOf(this.language)  === -1) {
                throw "Invalid language";   
             }
        },
        
        greeting: function() {
            return greetings[this.language] + ' ' + this.firstName + '!';
        },
        
        formalGreeting: function() {
            return formalGreetings[this.language] + ', ' + this.fullName();  
        },
        
        greet: function(formal) {
            var msg;
            
            // if undefined or null it will be coerced to 'false'
            if (formal) {
                msg = this.formalGreeting();  
            }
            else {
                msg = this.greeting();  
            }

            if (console) {
                console.log(msg);
            }

            // 'this' refers to the calling object at execution time
            // makes the method chainable
            return this;
        },
        
        log: function() {
            if (console) {
                console.log(logMessages[this.language] + ': ' + this.fullName()); 
            }
                            
            return this;
        },
                            
        setLang: function(lang) {
            this.language = lang;
                    
            this.validate();
            
            return this;
        },
        
        // funktsioon HTMLGReeting. parameetrid selector ja formal. 
        HTMLGreeting: function(selector, formal) {
            // kui jQueryt ei leita 
            if (!$) {
                // viskab 'jQuery not loaded'
                throw 'jQuery not loaded';   
            }
            // kui selectorit ei leita
            if (!selector) {
                // viskab 'Missing jQuery selector'
                throw 'Missing jQuery selector';   
            }
            

            // muutuja msg defineerib teate
            var msg;
            // kui on formaalne
            if (formal) {
                // msg valjastab formaalse tervituse
                msg = this.formalGreeting();   
            }
            // vastasel juhul valjastab tavalise tervituse
            else {
                msg = this.greeting();   
            }
            
            // paneb teate valitud kohta DOM'is
            $(selector).html(msg);
            
            // teeb yhilduvaks
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