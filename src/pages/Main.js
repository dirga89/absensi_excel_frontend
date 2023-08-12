import Header from "./Header"; 

export default function Main() {
    return (
        <main className="d-flex justify-content-center align-items-center p-5">
            <div className="card row p-3">
                <div className="col-12">
                    <p className="fs-1">Absensi Karyawan</p>
                    <form>
                    <div className="mb-3">
                        <label htmlFor="formFileMultiple" className="form-label">*.xlsx</label>
                        <input className="form-control" type="file" id="formFileMultiple" multiple />
                    </div>
                    <div className="mt-3">
                        <button type="button" className="btn btn-primary">Submit</button>
                    </div>
                    </form>
                </div>
                
            </div>      
        </main>
    );
}