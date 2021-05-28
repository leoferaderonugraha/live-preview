// var project = {
//     "id": "test-carousel",
//     "symbol": "JKT007",
//     "previewImages": [
//         "https://landx.id/images/SIAP/1.png",
//         "https://landx.id/images/SIAP/2.png"
//     ],
//     "projectName": "FACILITY SERVICE MANAGEMENT - PT. SOLUSI INDONESIA ANUGERAH PERKASA",
//     "category": "INDEKOS",
//     "lotPrice": "1000000",
//     "totalLot": "1000",
//     "fundingProgress": "1000000",
//     "totalFunding": "1000000",
//     "remainingDays": "0",
//     "launchProgress": "100",
//     "dividendSchedule": "Per 3 Bulan",
//     "annualRentYield": "5",
//     "annualRentYieldUpper": "8",
// };

// var dividendPeriodDesc = "Periode dividen aktual akan tetap mengacu pada laporan keuangan dan " +
//                             "persetujuan Rapat Umum Pemegang Saham (RUPS).";
// var dividendEstimatesDesc = "Disclaimer: kinerja masa lalu bukan merupakan indikasi kinerja masa depan." +
//                             " Estimasi dividen adalah ilustrasi berdasarkan proyeksi konservatif, dividen" +
//                             " aktual akan tetap mengacu pada kinerja penerbit dan persetujuan"+
//                             " Rapat Umum Pemegang Saham (RUPS). Estimasi dividen belum termasuk potensi" +
//                             " capital gain dari kenaikan harga saham.";

// project.dividendPeriodDesc = dividendPeriodDesc;
// project.dividendEstimatesDesc = dividendEstimatesDesc;

// CreateCard(project);

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
    
    /* Get the last three projects */
    var lastThree = [];
    for (var i = projects.length - 3; i < projects.length; i++) {
        lastThree.push(projects[i]);
    }

    console.log("loaded new 1");
    console.log(lastThree);

    CreateCard(lastThree);
});