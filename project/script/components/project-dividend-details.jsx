const projectDividendDetails = (props) => {
    return (
        <div className="row mt-2">
            <div className="col">
                <div className="row">
                    <div className="col-auto pl-0">
                        <span className="detail-2" style={{display: "inline"}}>
                            Periode Dividen 
                        </span>
                        <i className="fa fa-info-circle" 
                            style={{fontSize: "12px", color: "seagreen"}}
                            data-toggle="tooltip"
                            id="dividend-period-desc"
                            data-original-title=""
                            title="Periode dividen aktual akan tetap mengacu pada laporan keuangan dan persetujuan Rapat Umum Pemegang Saham (RUPS).">
                        </i>
                    </div>
                </div>
                <div className="row">
                    <p className="sub-detail-2" id="dividend-period">
                        {props.dividendSchedule}
                    </p>
                </div>
            </div>
            <div className="col">
                <div className="row">
                    <div className="col-auto pl-0">
                        <span className="detail-2" style={{display: "inline"}}>
                            Estimasi Dividen 
                        </span>
                        <i className="fa fa-info-circle" 
                            style={{fontSize: "12px", color: "seagreen"}}
                            data-toggle="tooltip"
                            id="dividend-period-desc"
                            data-original-title=""
                            title="Disclaimer: kinerja masa lalu bukan merupakan indikasi kinerja masa depan. Estimasi dividen adalah ilustrasi berdasarkan proyeksi konservatif, dividen aktual akan tetap mengacu pada kinerja penerbit dan persetujuan Rapat Umum Pemegang Saham (RUPS). Estimasi dividen belum termasuk potensi capital gain dari kenaikan harga saham">
                        </i>
                    </div>
                </div>
                <div className="row">
                    <p className="sub-detail-2" id="dividend-estimation">
                        {props.annualRentYield}-{props.annualRentYieldUpper}% Per Tahun
                    </p>
                </div>
            </div>
        </div>
    );
};