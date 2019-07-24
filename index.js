const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5000

const { Pool } = require('pg');
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: true
});

// BONNIE CODE

function pickRandom(argument) {
  if (typeof argument === 'number') {
    return Math.floor(Math.random() * Math.floor(argument)) + 1;
  }
  if (Array.isArray(argument)) {
    return argument[Math.floor(Math.random() * argument.length)];
  }
}

var subjectlist = ([
'BONNIE HE',
'The Pack',
'THE OINTMENT',
'YOUR LATE NIGHT SHOW TONIGHT',
'THE NICKY URBAN SHOW',
'LATE NITE HOOK UPS',
'THE BAE*GENCY',
'YAY!',
'BIG YELLOW TAXI',
'A VERY SPECIAL EPISODE',
'BLACKVERSE',
'BOOK REPORT',
'CUT SCENE',
'DARK MATTERS',
'PODCAST PARTY',
'SHITPOST',
'SOUL SISTA PRESENTS DROP THE BEAT',
'SUPER DATING SIMULATOR',
'WIZARDING WORLD LIVE',
'MOPS',
'FUSSY',
'NUISANCE',
'VICIOUS',
'DINGLEBERRIES',
'DETENTION',
'GOLDBABY',
'FRIENDO',
'GUTTER',
'HAYMAKER',
'LICK',
'MOONSHOT',
'PATSY',
'PILLOW MONSTER',
'RAT QUEEN',
'ROYALE',
'SQUISH',
'TANTRUM',
'THUNDERDOG',
'VERY FAMOUS',
'FEMMEBOT PHD',
'NIGHTCHURCH',
'TINY MUSCLES',
'BIO-DOME',
'CHOPPING BLOCK COMEDY',
'MURDERFIST',
'SPEEDFACE',
'DR. TIME****',
'HELL KROSS'  
]);

var activitylist = ([
'is yes anding',
'is boinking',
'is pity laughing at',
'is shutting down',
'is your Uber driver to',
'wishes they were',
'is writing a sketch about',
'is totally banging',
'is shark editing',
'is auditioning for',
'is playing \"Fuck, Marry, Kill\" with',
'is jumping on stage with',
'is getting a suggestion from',
'dgaf about',
'is socially awkward around',
'is Marie Kondoing',
'is quitting',
'is doing a bit about',
'is too good for',
'is too real for',
'is cancelling',
'is bombing at',
'is voting for',
'loves',
'is pitching a show to',
'is shooting a pilot about',
'is hosting',
'is ironically detached from',
'is doing a jam with',
'is flaking on',
'is clap editing',
'is getting commercially repped by',
'is team bonding with',
'is getting a callback for',
'is getting a stand-up special on',
'is selling a show to',
'is mortal enemies with',
'is depressed about',
'is clowning on',
'is clowning with',              
'is going viral with',
'is making a podcast about',
'has a total crush on',
'is being sex positive about',
'is getting fresh with',
'is supporting',
'is committing to',
'has turned heel against',
'is becoming an influencer for',
'is booing at',
'is getting auditioning tips from',
'is buying pizza for',
'is Rickrolling',
'needs to borrow a wig for',
'is writing for',
'is sipping',
'is being extra about',
'is totally over',
'is hustling',
'fucks with',
'is getting high with',
'is getting a Queer Eye makeover from',
'is not being woke with',
'needs attention desperately from',
'is ugly crying with',
'is promoting',
'is wearing Fashionova jeans for',
'is getting drunk with',
'is getting a tarot reading from',
'is subtweeting about',
'is trying to impress',
'loves everything about',
"doesn\'t want to hide their feelings anymore from",
'feels that BDE from',
'worships',
'worships only one god and that god is',
'wants to be BFF with',
'would sacrifice everything for',
'matched with',
'knows a secret about',
'is spanking',
"can\'t live without",
"just can\'t get enough of",
'is an emotional support animal for',
'is shitposting about',
'wants to grow old with',
'idolizes everything about',
'is smashing the patriarchy with',
'is getting information from the Russians about',
'is spying on',
'is going to couples counseling with',
'is creeping on',
'is head over heels for',
'feels so lucky to know',
'still has nightmares about',
'cannot WAIT to see',
'faked an orgasm with',
'is developing feels for',
'is sabotaging',
'is plotting with',
'is teaching sex ed to',
'is fantasizing about', 
'owes a favor to',
'wants to make a baby with',
'is impersonating',
"can\'t handle the truth from",
'is gonna pass on',
"can\'t handle",
'is rejecting',
"can\'t fight this feeling anymore about",
'is upstaging',
'needs you to choose between them and ',
'is allergic to',
'is hiding from',
'is body swapping with',
'is trading husbands with',
'is calling out',
'is paying rent money to',
'is being a dick to',
'is a secret admirer of',
'is roasting',
'is going to propose to',
'is not the father of',
'is ghosting',
'is getting divorced from',
'is going to frame a murder on',
'in love with',
'wants to take long walks on the beach with',
'is stealing ideas from',
'is laughing at, not with',
'is crazy for',
'is thirsty for',
'is setting a thirst trap for',
'is falling in live with',
'is FWB with',
'is giving $100 to',
'is wingmanning',
'is Netflix and chilling with',
'is psyching up',
'is riding on the coattails of',
'is making friendship bracelets with',
'is learning sex ed from',
'is in an unmarked white van, waiting for',
'is mansplaining to',
'is too shy to talk to',
'is never gonna give up',
'is flirting with',
'is trying BDSM with',
'is supes jealous of',
'is putting a hex on',
'is taking a break from',
'knows too much about',
'wants to repeal and replace',
'is blackmailing',
'is getting swole for',
'cannot unsee',  

]);

var objectlist = ([
 'you',
'your dad',
'a DILF',
'dat ass',
'your ass',            
'a Pack improv team',
'a Pack sketch team',
'a variety show',
'a sketch show',
'a improv show',
'the tea',
'your bit',
'your indie team',
'SNL',
'your indie show',
'Trump',
'Netflix',
'Reign Agency',
'clowns',
'your sketch packet',
'a Furry',
'your audition tape',
'your characters',
'your crew',
'your crush',
'your bae',
'your hawt cousin',
'the love of your life',
'your dildo',
'your dad bod',


  
  // Manually copying/pasting subject array afer this point

'The Pack',  
'THE OINTMENT',
'YOUR LATE NIGHT SHOW TONIGHT',
'THE NICKY URBAN SHOW',
'LATE NITE HOOK UPS',
'THE BAE*GENCY',
'YAY!',
'BIG YELLOW TAXI',
'A VERY SPECIAL EPISODE',
'BLACKVERSE',
'BOOK REPORT',
'CUT SCENE',
'DARK MATTERS',
'PODCAST PARTY',
'SHITPOST',
'SOUL SISTA PRESENTS DROP THE BEAT',
'SUPER DATING SIMULATOR',
'WIZARDING WORLD LIVE',
'MOPS',
'FUSSY',
'NUISANCE',
'VICIOUS',
'DINGLEBERRIES',
'DETENTION',
'GOLDBABY',
'FRIENDO',
'GUTTER',
'HAYMAKER',
'LICK',
'MOONSHOT',
'PATSY',
'PILLOW MONSTER',
'RAT QUEEN',
'ROYALE',
'SQUISH',
'TANTRUM',
'THUNDERDOG',
'VERY FAMOUS',
'FEMMEBOT PHD',
'NIGHTCHURCH',
'TINY MUSCLES',
'BIO-DOME',
'CHOPPING BLOCK COMEDY',
'MURDERFIST',
'SPEEDFACE',
'DR. TIME****',
'HELL KROSS' 
]);

//

// SERVER SIDE CODE

var bigphrase = '';
var bigphrase1 = 'line1:';
var bigphrase2 = 'line2:';

express()
  .use(express.static(path.join(__dirname, 'public')))
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs')

  .get('/showdatabase', async (req, res) => {
    try {
      const client = await pool.connect()
 
      client.query("SELECT * FROM phrase_table", function (perr, presult, pfields) {
        if (perr) {
          console.error("UHUH");
        } else {
          bigphrase2 = '<b>Database of all phrases generated so far:</b><br />';

          presultrows = presult.rows;
          
          for (var i = 0; i < presultrows.length; i++) {
           currentphraseitem = presultrows[i];
           if (currentphraseitem) {
              bigphrase2 += 'phrase ' + (i+1) + ' : ';
              bigphrase2 += '<b>' + currentphraseitem.phrase + '</b>';    
              bigphrase2 += ' | generated on ' + currentphraseitem.createtime;
              bigphrase2 += '<br />';
            } else {
              bigphrase2 = bigphrase2 + 'is empty (error?) <br />';
            }
          }
        }
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(bigphrase2);
        res.end();   
      })
      client.release();
      
    } catch (err) {
      console.error(err);
      res.send("Error " + err);
    }
  })

  .get('/secretreset', async (req, res) => {
    try {
      const client = await pool.connect()
      const result1 = await client.query("DROP TABLE test_table");    
      const result2 = await client.query("DROP TABLE phrase_table");    
      const result3 = await client.query("CREATE TABLE test_table(id SERIAL PRIMARY KEY, count INT)");
      const result4 = await client.query("CREATE TABLE phrase_table(id SERIAL PRIMARY KEY, phrase TEXT, createtime TIMESTAMP)");
      const result5 = await client.query("INSERT INTO test_table(id, count) VALUES(1, 0)");
      res.send("Reset!");
      client.release();
    } catch (err) {
      console.error(err);
      res.send("Error " + err);
    }
  })

  .get('/', async (req, res) => {
    try {
      const client = await pool.connect()
      client.query("SELECT * FROM test_table", function (err, result, fields) {
        if (err) {
          console.error("UHUH");
          res.writeHead(200, {'Content-Type': 'text/html'});
          res.write('<b>ERROR ADDING</b>');
          res.end();
        } else {
          currentitem = result.rows[0];
          newcount = currentitem.count + 1;
          
          var randomStatus = (pickRandom(subjectlist) + ' ' + pickRandom(activitylist) + ' ' + pickRandom(objectlist) + ' at #PackCon.');
          newphrase = "'" + randomStatus + "'";        
          
          query1 = "UPDATE test_table SET count = " + newcount + " WHERE id = 1";
          query2 = "INSERT INTO phrase_table(id, phrase, createtime) VALUES(" + newcount + ", " + newphrase + "," + "CURRENT_TIMESTAMP" + " )";

          const result3 = client.query(query1);
          const result4 = client.query(query2);
          
          res.writeHead(200, {'Content-Type': 'text/html'});
          res.write('<center>');
          res.write('<br />' + randomStatus + '<br />');
          res.write('<br><br><br><button onclick="location.reload();">Generate New PackCon Status</button><br><br></center>');
          
          res.end();
          client.release();
        }
      })      
    } catch (err) {
      console.error(err);
      res.send("Error " + err);
    }
  })

  .listen(PORT, () => console.log(`Listening on ${ PORT }`))

// UNUSED 
/*  .get('/', (req, res) => res.render('pages/index'))

  .get('/db', async (req, res) => {
    try {
      const client = await pool.connect()
      const result = await client.query('SELECT * FROM phrase_table');
      const results = { 'results': (result) ? result.rows : null};
      res.render('pages/db', results );
      client.release();
    } catch (err) {
      console.error(err);
      res.send("Error " + err);
    }
  })
*/
