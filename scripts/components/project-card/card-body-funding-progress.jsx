const CardBodyFundingProgress = (props) => {
    return (
        <div className="row mt-3">
            <div className="col-8">
                <div className="row">
                    <div className="col">
                        <p className="progress-detail">
                            Rp {props.fundingProgress}
                        </p>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <p className="sub-progress-detail">
                            dari Rp {props.totalFunding} Total Pendanaan
                        </p>
                    </div>
                </div>
            </div>
            <div className="col-4">
                <div className="row">
                    <div className="col">
                        <p className="progress-detail">
                            {props.remainingDays}
                        </p>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <p className="sub-progress-detail">
                            Hari Lagi
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}