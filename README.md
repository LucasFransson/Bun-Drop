# Bun-Drop

How to run the application.
1. Open the project in Visual Studio Code or another IDE of your choice.
2. Open a console/terminal in the IDE and enter 'npm i' to install all the packages that's necessary for running and developing the app.
3. When the installation process is completed, type "npm run json-server" in the console/terminal and hit enter to start the json-server database.
4. Open a new console/terminal and type "npm run compile-sass" to start the sass-compiler that allows the developer to write scss in the scss-files and automatically compile and write the scss to the style.css file.
5. Finally to run the application, open a new console/terminal and type "npm run dev" and enter. This will generate a link in the console/terminal and clicking on that link will open the application in your browser.










Reflektion om Bun Drop - Gränssnittsutveckling

I början av projektet så la jag hela den första dagen på att planera och designa ett stiltema för projektet i Figma.Jag spenderade en hel del tid på att testa olika färger och stilar för att hitta ett tema som jag kände var passande. Från början så hade jag en bild i mitt huvud om en lite mer exlusiv, elegant och lyxig design än de designer som andra snabbmatsföretag har, och därför valde jag att använda mig av mycket neutrala och mörka färger blandat med en dov,blek (desaturated ) gul/champagne färg och hårda kanter och linjer.
Min första plan var också att följa många av de UX-”regler som finns så som 60-30-10 regeln av färger, Millers law, Hicks law, C.R.A.P och även att skapa en större landing page som implementerade de sektioner som UX-studier visat resulterar i en hemsida som användare gillar.

När figma-delen var klar efter första dagen så satte jag igång med att skapa grunden till projektet. Jag valde att göra applikationen med JavaScript, Vite och SCSS. Vite valdes på grund av att jag tycker att det är mycket bättre alternativ än CRA som är väldigt bloated och SCSS valdes framför vanilla CSS på grund av hur mycket enklare det är att skapa och organisera större och mer komplexa system för styling.
Min första tanke var att bygga applikationen i TypeScript för jag tycker att det går mycket snabbare att felsöka och skriva med TS jämfört med JS på grund av kompilatorn som finns i TS, men då jag under större delen av kursen har använt mig av TS så valde jag till slut att använda mig av JS för att utmana mig själv lite mer och bredda mina kunskaper. 



När applikationens grund väl var skapad och nödvändiga paket för att köra scss och json-server var installerat så började jag bygga html:en och css:en för att skapa landing-pagen, och detta gjorde jag först i ett vanligt html-dokument med en vanlig css fil. När jag var nöjd med utseendet så bröt jag ner html-en jag skrivit till mindre delar och började skapade relevanta react/jsx-komponenter ur dessa delar. 

Vid den här tiden gjorde jag dock ett stort misstag som skulle kosta mig längre fram i projektet, och det var att jag använde mig av absolute positioning mycket när jag stilade landing-pagen och inte hade planerat ett sammanhängande system för hur jag skulle positionera allt i appen senare.

Efter att landingpagen var uppdelat i komponenter så bestämde jag mig för att skapa en del av den logik jag visste skulle krävas för applikationen, så jag satte upp min routing med react-router-dom,skapade databasen och skapade webhooks för fetching och posting till databasen och testade så dessa funkade. Jag skapade även vissa komponenter som jag tänkte använda mig av under projektet, så som en CardGrid-komponent, Button-komponent, och en Card-komponent.

För att kompensera för avsaknaden av en kompilator i JavaScript och för att underlätta testningen och felsökningen av koden så valde jag också att sätta upp och konfiguerera en testing-enviroment på paketen babel och jest, där planen var att använda mig av AI för att generera unit-tester på min kod. Det tog lite tid för att få allt att fungera men resultatet var väldigt bra, och med den enorma kraft som finns i AI så kunde jag generera tester på några enstaka sekunder och få det svart på vitt huruvida min kod fungerade eller ej. Tyvärr så var det oklart vid den här perioden vad skolans nya policy angående AI innebar, så därför valde jag att inte använda mig av dessa tester något under projektet.

Jag började därefter skriva koden för logiken som styr inloggandet av användare och hanterandet av localstorage, och jag visste direkt att jag ville abstrahera den här logiken så mycket det gick och inte behöva upprepa den på flera ställen i projektet. Så jag skapade två stycken Javascript filer som skulle hantera den här logiken, userService och cartService. Först var OOP-instinkten till skapa två klasser väldigt stor, men då react ligger närmre en funktionell paradigm så valde jag att försöka hålla mig till det också, och istället skapade separata funktioner som jag exporterade. Nu i efterhand så känns det som att det var ett bra val, då det var väldigt sällan jag behövde använda mig av många funktioner i en komponent och inte en enda gång krävdes alla funktioner på ett och samma ställe, så det hade varit onödigt att behöva importera allt.

Jag fick också läsa dokumentationen som krävdes för att implementera Context till min cartService som hanterade localstorage/carten, för jag ville inte behöva skicka runt min cart hela tiden på det sättet som hade krävts utan context. Jag kollade även in Redux som ett alternativ, men det verkade betydligt mer komplicerat och jag kände att Context var mer än tillräckligt för att få det resultatet jag ville ha.

Efter jag skrivit all den här logiken så testade jag funktionaliteten av den genom att skapa knappar som console-loggade resultatet och genom att inspektera applikationen i dev tools i browsern och på så sätt kunna bekräfta att de fungerade. 

Därefter var det dags att skapa resten av alla sidor som jag hade satt upp i mina Routes, och här var det jag insåg hur fragil min css var och hur överflödigt mitt scss-system var. 
Jag hade implementerat 7-1 scss-systemet där man skapar 7 folders ( abstracts, base, components, layout, pages, themes och vendors ) som håller flertalet scss filer i sig som sedan importeras till en main-scss fil.
Det här fick min hastighet att skriva scss att sjunka drastiskt för jag var tvungen att navigera mig fram och tillbaka genom mängder av folders och filer. 


Det största problemet var dock, som tidigare nämnts, att jag hade använt mig av scss/css för min landing page utan en övergripande plan och förlitat mig för mycket på absolute positionering. Allt jag försökte göra härefter krävdes kontrollerande fram och tillbaka att ingen av min tidigare styling blev påverkad, och det var uppenbart att det här inte fungerade bra så jag valde att bita i det sura äpplet och skrota det jag skapat (förutom logiken).

Jag hade dessutom börjat tveka på mitt val av design-tema. Jag kände att det eleganta och lyxiga tema jag valt inte stämde överens med företagets kärna. Företaget sålde visserligen goda hamburgare, men fokuset låg på den moderna teknologin bakom leverans med drönare, så när jag nu började om från ett tomt papper så bestämde jag mig för att gå tillbaka till figma och göra en helt ny design. 

Jag skar ner på landing-pagen, använde mig av en stark röd färg och vände på 60-30-10 regeln så att istället för 60 % neutrala färger och 30 % brand-color så körde jag 60% brand color och 30 % neutrala för att få en mer vågat och modern känsla.Jag skrotade även 7-1 mönstret för SCSS och körde på en folder med en base.scss fil och en layout.scss fil för att öka hastigheten. I SCSS blir det redan lite av en naturlig uppdelning när man använder sig av BEM-naming konventionen som jag gjorde, så det var väldigt enkelt att navigera sig i den här filen även när storleken växte. Tanken var att senare sortera upp den här till 7-1 mönstret för att få en tydligare struktur, men jag hann aldrig med att göra det innan projektet tog slut.

Resterande tid av projektet spenderades på att bara skriva kod genom att skapa komponenter för varje sida och styla dessa en efter en så som jag ritat dom i Figma, och det finns inte så mycket att säga om den processen, förutom att jag då hade valt mig för att använda mig nästintill strikt av flex-boxes och grid och att undvika positionering genom absolute och margins så mycket det gick. 

Viss tid fick läggas till att uppdatera och ändra logiken för mina users och min cart, men inget extraordinärt inträffade här, utan det var den vanliga processen som uppstår vid all kodning. 

Det sista jag gjorde i projektet var att göra applikationen responsiv, och då många av de val jag hade gjort tidigare i min styling hade gjorts med responsivitet i tanken så var det inte mycket arbete som krävdes för att få fram en acceptabel produkt som var responsiv på både stora och små skärmar, utan jag fick mest flytta runt på vissa delar i media queries, öka/minska storleken på margins och font-sizes och ändra vissa flex-boxes från rows till columns.
