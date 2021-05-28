/* This script require numeral.js */
var listOfProjects = {};

fetch("https://api.landx.id/", {
    method: "POST",
    mode: "cors",
    headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
    },
    body: JSON.stringify({query: `{
        currencies {
            landXProperty {
                address
                annualRentYield
                annualRentYieldUpper
                category
                dividendSchedule
                id
                initialTokenPrice
                launchProgress
                mapImageUrl
                name
                previewImages
                propertyPrice
                settlementDate
                tokenSupply
                totalPurchasePrice
                token {
                    name
                }
            }
        }
    }`})
})
.then(r => r.json())
.then(data => listOfProjects = data)
.then(() => {
    /* Remove empty project(s) */
    listOfProjects["data"]["currencies"].forEach(function(item, index) {
        if ( item["landXProperty"] == null
        || item["landXProperty"] == "") {
            delete listOfProjects["data"]["currencies"][index];
        }
    });

    /* Rearrange projects */
    var projects = [];

    for (var key in listOfProjects["data"]["currencies"]) {
        projects.push(listOfProjects["data"]["currencies"][key]);
    }

    /* Get the last three projects
     * and make the details
     */
    var lastThree = [];
    for (var i = projects.length - 3; i < projects.length; i++) {
        var tmpProject = projects[i];
        tmpProject["landXProperty"].fundingProgress = numeral(tmpProject["landXProperty"]["launchProgress"] * tmpProject["landXProperty"]["totalPurchasePrice"]).format("0,0");
        tmpProject["landXProperty"].totalFunding = numeral(tmpProject["landXProperty"]["totalPurchasePrice"]).format("0,0");

        /* Calculate the remaining days */
        const oneDay = 24 * 60 * 60 * 1000; // Hours * Minutes * Seconds * Milliseconds
        const today = new Date().getTime();
        tmpProject["landXProperty"].remainingDays = (tmpProject["landXProperty"]["settlementDate"] - today) / oneDay;

        tmpProject["landXProperty"]["launchProgress"] *= 100;
        tmpProject["landXProperty"]["initialTokenPrice"] = numeral(tmpProject["landXProperty"]["initialTokenPrice"]).format("0,0");
        tmpProject["landXProperty"]["tokenSupply"] = parseInt(tmpProject["landXProperty"]["tokenSupply"], 10);
        tmpProject["landXProperty"]["annualRentYield"] = parseFloat(tmpProject["landXProperty"]["annualRentYield"]) * 100;
        tmpProject["landXProperty"]["annualRentYieldUpper"] = parseFloat(tmpProject["landXProperty"]["annualRentYieldUpper"]) * 100;
        tmpProject["landXProperty"].isSold = false;


        if (tmpProject["landXProperty"].remainingDays < 0) {
            tmpProject["landXProperty"].remainingDays = 0;
        }

        if (tmpProject["landXProperty"].fundingProgress >= tmpProject["landXProperty"].totalFunding) {
            tmpProject["landXProperty"].isSold = true;
            tmpProject["landXProperty"].remainingDays = 0;
        }

        lastThree.push(tmpProject);
    }

    console.log("loaded new 3");
    console.log(lastThree);

    CreateCard(lastThree);
});