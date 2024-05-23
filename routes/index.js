var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('home');
});

router.get('/about', function(req, res, next) {
  res.render('about');
});

router.get("/library",(req,res,next)=>{
  const books=[
    {
      BookName:"The work of Art",
      Author:"Adam Moss",
      Price:"INR 200",
      Language:"English",
      Rating:"⭐⭐⭐⭐⭐",
      Book_link:"https://www.amazon.com/Work-Art-Something-Comes-Nothing/dp/059329758X",
      Buy_now:"",
      Image:"https://images1.penguinrandomhouse.com/cover/9780593297582",
      Description:"“The book is a visual feast, full of drafts, sketches, and scribbled notebook pages. Every page shows how an idea becomes a finished design.” —Ari Shapiro, All Things Considered.",

    },
    {
      BookName:"A book of days",
      Author:"Patti Smith",
      Price:"INR 250",
      Language:"English",
      Rating:"⭐⭐⭐⭐",
      Book_link:"https://www.amazon.in/Book-Days-Patti-Smith/dp/1526650983",
      Buy_now:"",
      Image:"https://images2.penguinrandomhouse.com/cover/9780593730386",
      Description:"From the National Book Award-winning author of Just Kids and M Train, a profound, beautifully realized collection of photography from a living legend."
    },
    {
      BookName:"Eat in My Kitchen",
      Author:"Meike Peters",
      Price:"INR 300",
      Language:"English",
      Rating:"⭐⭐⭐⭐⭐",
      Buy_now:"",
      Image:"https://images3.penguinrandomhouse.com/cover/9783791382005",
      Book_link:"https://www.amazon.in/Eat-My-Kitchen-Cook-Treat/dp/3791382004",
      Description:"Meike Peters, the author of the acclaimed cooking blog Eat In My Kitchen, presents a cookbook as inviting, entertaining, and irresistible as her website, featuring dozens of never-before-published recipes."
    }
  ]
  // books.forEach(book=>{
  //   console.log(book.BookName);
  //   console.log(book.Author);
  //   console.log(book.Price);
  // })
  res.render('library',{books});
});

router.get("/create-book",(req,res,next)=>{
  res.render('createbook');
})

module.exports = router;
