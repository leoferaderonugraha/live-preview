/* Assembly all the components */
class ProjectWrapper extends React.Component {
    render() {
        var symbolName = this.props.project["token"]["symbol"];
        var projectName = this.props.project["token"]["name"].split(" - ")[0];
        var projectIssuerName = this.props.project["issuerName"];
        var category = this.props.project["category"];
        var fundingProgress;
        var totalFunding = numeral(this.props.project["totalPurchasePrice"]).format("0,0");
        var progressBar = this.props.project["launchProgress"] * 100;
        var isSold = false;
        var lotPrice = numeral(this.props.project["initialTokenPrice"]).format("0,0");
        var totalLot = parseInt(this.props.project["tokenSupply"], 10);
        var dividendSchedule = this.props.project["dividendSchedule"];
        var annualRentYield = parseFloat(this.props.project["annualRentYield"]) * 100;
        var annualRentYieldUpper = parseFloat(this.props.project["annualRentYieldUpper"]) * 100;
        var prospectusLink = `https://landx.id/prospektus/${symbolName}.pdf`;
        
        /* calculate the remaining days */
        const oneDay = 24 * 60 * 60 * 1000; // Hours * Minutes * Seconds * Milliseconds
        const today = new Date().getTime();
        var remainingDays = (this.props.project["settlementDate"] - today) / oneDay;
        /*------------------------------*/
        
        if (remainingDays < 0) {
            remainingDays = 0;
        }

        if (this.props.project["launchProgress"] == null) {
            // market closed,
            // make assumption that it has been bought completely
            fundingProgress = numeral(this.props.project["totalPurchasePrice"]).format("0,0");
        } else {
            fundingProgress = numeral(this.props.project["launchProgress"] * this.props.project["totalPurchasePrice"]).format("0,0");
        }

        if (fundingProgress >= totalFunding) {
            isSold = true;
            remainingDays = 0;
        }

        return (
            <div className="col-md-6 right-box pull-md-right box-2">
                <projectSymbol
                    name={symbolName} 
                />
                <projectTitle
                    name={projectName}
                    issuerName={projectIssuerName}
                />
                <projectCategory
                    category={category}
                />
                <projectFundingDetails
                    fundingProgress={fundingProgress}
                    totalFunding={totalFunding}
                    remainingDays={Math.floor(remainingDays)}
                />
                <projectProgressBar
                    progress={progressBar}
                />
                <projectLotPrice
                    lotPrice={lotPrice}
                    totalLot={totalLot}
                />
                <projectDividendDetails
                    dividendSchedule={dividendSchedule}
                    annualRentYield={annualRentYield}
                    annualRentYieldUpper={annualRentYieldUpper}
                />
                <projectAppProspectus
                    prospectusLink={prospectusLink}
                />
            </div>
        );
    }
};