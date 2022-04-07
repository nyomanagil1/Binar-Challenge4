import React from 'react';
import './hasilpencarian.css';

function CompHasilPencarian() {
  return (
    <>
      <div className="container">
        <div className="row d-flex">
          <div className="card card-hasil">
            <div className="card-body">
              <h6 class="fw-bold mb-0 mt-2">Pencarianmu</h6>
            </div>
            <div className="col-lg-12 d-flex">
              <div className="card-body">
                <div className="input-text">
                  <p class="mb-1">Tipe Driver</p>
                </div>
                <select class="form-select" aria-label="Default select example" style={{ minWidth: 221 }}>
                  <option selected>Pilih Tipe Driver</option>
                  <option value="1">Dengan Sopir</option>
                  <option value="2">Tanpa Sopir (Lepas Kunci)</option>
                </select>
              </div>
              <div className="card-body">
                <div className="input-text">
                  <p class="mb-1">Tanggal</p>
                </div>
                <select class="form-select" aria-label="Default select example" style={{ minWidth: 221 }}>
                  <option selected>Tanggal</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                </select>
              </div>
              <div className="card-body">
                <div className="input-text">
                  <p class="mb-1">Waktu Jemput/Ambil</p>
                </div>
                <select class="form-select" aria-label="Default select example" style={{ minWidth: 221 }}>
                  <option selected>Pilih Waktu</option>
                  <option value="1">08:00 WIB</option>
                  <option value="2">09:00 WIB</option>
                  <option value="3">10:00 WIB</option>
                  <option value="4">11:00 WIB</option>
                  <option value="5">12:00 WIB</option>
                </select>
              </div>
              <div className="card-body">
                <div className="input-text">
                  <p class="mb-1">Jumlah Penumpang (Optional)</p>
                </div>
                <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" placeholder="Jumlah Penumpang" />
              </div>
              <div className="card-body d-flex align-items-end">
                <button type="button" class="btn btn-outline-primary">
                  Edit
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <div class="card card-hasil">
        <div className="container">
          <h6 style={{ fontWeight: 700, marginTop: '20px', marginBottom: '0' }}>Pencarianmu</h6>
        </div>
        <div class="card-body d-flex">
          <div className="card-content" style={{ minWidth: 250, marginRight: 20 }}>
            <p class="mb-1">Tipe Driver</p>
            <select class="form-select" aria-label="Default select example" style={{ minWidth: 210 }}>
              <option selected>Pilih Tipe Driver</option>
              <option value="1">Dengan Sopir</option>
              <option value="2">Tanpa Sopir (Lepas Kunci)</option>
            </select>
          </div>
          <div className="card-content" style={{ minWidth: 250, marginRight: 20 }}>
            <p class="mb-1">Tanggal</p>
            <select class="form-select" aria-label="Default select example" style={{ minWidth: 210 }}>
              <option selected>Tanggal</option>
              <option value="1">1</option>
              <option value="2">2</option>
            </select>
          </div>
          <div className="card-content" style={{ minWidth: 250, marginRight: 20 }}>
            <p class="mb-1">Waktu Jemput/Ambil</p>
            <select class="form-select" aria-label="Default select example" style={{ minWidth: 210 }}>
              <option selected>Pilih Waktu</option>
              <option value="1">08:00 WIB</option>
              <option value="2">09:00 WIB</option>
              <option value="3">10:00 WIB</option>
              <option value="4">11:00 WIB</option>
              <option value="5">12:00 WIB</option>
            </select>
          </div>
          <div className="card-content" style={{ minWidth: 250, marginRight: 20 }}>
            <p class="mb-1">Jumlah Penumpang (Optional)</p>
            <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" placeholder="Jumlah Penumpang" />
          </div>
          <div className="card-content" style={{ position: 'relative', top: '28px' }}>
            <button type="button" class="btn btn-outline-primary">
              Edit
            </button>
          </div>
        </div>
      </div> */}
    </>
  );
}

export default CompHasilPencarian;
