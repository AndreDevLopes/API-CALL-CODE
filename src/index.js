const express = require('express');

const app = express();
const passport = require('passport');
//sessão
app.use(
    session({
      secret: "SigMed",
      resave: true,
      saveUninitialized: true,
    })
  );

app.use(passport.initialize());

app.use(passport.session()); 

app.use(express.urlencoded({extended:false}));

app.use(express.json());

const PORT = process.env.PORT || 3000 ;

app.listen(PORT, ()=>{
    console.log(`server run ${PORT}`);
});