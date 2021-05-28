const ProjectFundingDetails = (props) => {
    return (
        <div className="row">
            <div className="col">
                <div className="row">
                    <p className="detail">
                        Rp {props.fundingProgress}
                    </p>
                </div>
                <div className="row">
                    <p className="sub-detail">
                        dari Rp {props.totalFunding}
                    </p>
                </div>
            </div>
            <div className="col">
                <div className="row">
                    <p className="detail">
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
}