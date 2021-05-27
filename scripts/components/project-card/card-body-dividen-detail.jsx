const CardBodyDividendDetail = (props) => {
    return(
        <div class="row">
            <div class="col">
                <div class="row">
                    <div class="col">
                        <p class="sub-progress-detail">
                            Periode Dividen <span class="iconify info-outline-circle" data-icon="ant-design:info-circle-outlined" data-toggle="tooltip" title="Hello"></span>
                        </p>
                    </div>
                </div>
                <div class="row">
                    <div class="col">
                        <p class="progress-detail-2">
                            {props.dividendSchedule}
                        </p>
                    </div>
                </div>
            </div>
            <div class="col">
                <div class="row">
                    <div class="col">
                        <p class="sub-progress-detail">
                            Estimasi Dividen <span class="iconify info-outline-circle" data-icon="ant-design:info-circle-outlined" data-toggle="tooltip" title="Hello"></span>
                        </p>
                    </div>
                </div>
                <div class="row">
                    <div class="col">
                        <p class="progress-detail-2">
                            {props.annualRentYield}-{props.annualRentYieldUpper}% <span>Per Tahun</span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}