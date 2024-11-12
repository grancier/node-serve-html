const getResults = async () => {
  const json = await fetch(
    "https://politics.api.cnn.io/results/national-races/2024-HG.json",
    {
      credentials: "omit",
      headers: {
        "User-Agent":
          "Mozilla/5.0 (X11; Linux x86_64; rv:131.0) Gecko/20100101 Firefox/131.0",
        Accept: "*/*",
        "Accept-Language": "en-US,en;q=0.5",
        "x-api-key": "TtGlrrOrcdJNvE5U9t4XulVZuwk68Ecru3UIgtnr",
        "Sec-Fetch-Dest": "empty",
        "Sec-Fetch-Mode": "cors",
        "Sec-Fetch-Site": "cross-site",
        "If-None-Match": "5d3738f7bcc82816fa3f6a0f49544ec5",
      },
      referrer: "https://www.cnn.com/",
      method: "GET",
      mode: "cors",
    }
  ).then((results)=>{
    console.log(results)
    results.json().then((data) => {
        data.map((race)=>{
            console.log(`${race.ecKey}>>>${race.candidates[0].fullName}>>>${race.candidates[0].candidatePartyCode}>>>${race.candidates[0].voteNum}>>>${race.candidates[1]?.fullName}>>>${race?.candidates[1]?.candidatePartyCode}>>>${race?.candidates[1]?.voteNum}>>>${race.percentReporting}`);
        })
    });
  })
};

getResults();
