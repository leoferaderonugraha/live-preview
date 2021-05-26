const projectAppProspectus = (props) => {
    return (
        <div className="row row-buttons">
            <div className="col">
                <a href="https://play.google.com/store/apps/details?id=store.numoney.landxapp&hl=en&gl=US" id="btn-invest">
                    <button className="btn btn-primary btn-detail-bottom" style="width: 100%; box-shadow: 0 8px 10px 1px rgba(0, 0, 0, 0.14)">
                        BELI VIA APP
                    </button>
                </a>
            </div>
            <div className="col">
                <a href={props.prospectusLink} id="download-prospectus">
                    <button className="btn btn-outline-success btn-detail-bottom" style="width: 100%">
                        DOWNLOAD PROSPEKTUS
                    </button>
                </a>
            </div>
        </div>
    );
};