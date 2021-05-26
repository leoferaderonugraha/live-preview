const ProjectFundingDetails = (props) => {
    return (
        <div className="row">
            <div className="col">
                <div className="row">
                    <p className="detail" id="funding-progress">
                        Rp {props.fundingProgress}
                    </p>
                </div>
                <div className="row">
                    <p className="sub-detail" id="total-funding">
                        dari Rp {props.totalFunding}
                    </p>
                </div>
            </div>
            <div className="col">
                <div className="row">
                    <p className="detail" id="remaining-days">
                        {props.remainingDays}
                    </p>
                </div>
                <div className="row">
                    <p className="sub-detail">
                        Hari Lagi
                    </p>
                </div>
            </div>
        </div>
    );
};