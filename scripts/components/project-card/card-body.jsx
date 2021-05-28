const CardBody = (props) => {
    return (
        <div className="card-body custom">
            <div className="container-fluid px-0">
                <CardBodyButtonBuy />
                <CardBodySymbol
                    symbol={props.token.symbol}
                />
                <CardBodyName
                    name={props.token.name}
                />
                <CardBodyCategory
                    category={props.category}
                />
                <CardBodyFundingProgress
                    fundingProgress={props.fundingProgress}
                    totalFunding={props.totalFunding}
                    remainingDays={props.remainingDays}
                />
                <CardBodyProgressBar
                    launchProgress={props.launchProgress}
                />
                <CardBodyLotPrice
                    initialTokenPrice={props.initialTokenPrice}
                    tokenSupply={props.tokenSupply}
                />
                <CardBodyDividendDetail
                    dividendSchedule={props.dividendSchedule}
                    annualRentYield={props.annualRentYield}
                    annualRentYieldUpper={props.annualRentYieldUpper}
                    dividendPeriodDesc={props.dividendPeriodDesc}
                    dividendEstimatesDesc={props.dividendEstimatesDesc}
                />
            </div>
        </div>
    );
}