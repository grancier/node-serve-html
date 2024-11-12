const axios = require("axios");

axios({
  url: "https://www.njlottery.com/api/v2/draw-games/draws/?previous-draws=50&next-draws=0&game-names=Pick+6",
  method: "get"
}).then((result) => {
    result.data.draws.map((draw)=>{
        console.log(draw.results && draw.results[0].primary[0])
    })
    
});
