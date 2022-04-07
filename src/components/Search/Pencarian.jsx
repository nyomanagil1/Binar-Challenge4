import React from 'react';
import './pencarian.css';

function Pencarian() {
  return (
    <>
      <div class="card card-carimobil">
        <div class="card-body d-flex">
          <div className="card-content" style={{ maxWidth: 250, marginRight: 20 }}>
            <p class="mb-1">Tipe Driver</p>
            <select class="form-select" aria-label="Default select example" style={{ maxWidth: 210 }}>
              <option selected>Pilih Tipe Driver</option>
              <option value="1">Dengan Sopir</option>
              <option value="2">Tanpa Sopir (Lepas Kunci)</option>
            </select>
          </div>
          <div className="card-content" style={{ maxWidth: 250, marginRight: 20 }}>
            <p class="mb-1">Tanggal</p>
            <select class="form-select" aria-label="Default select example" style={{ maxWidth: 210 }}>
              <option selected>Tanggal</option>
              <option value="1">1</option>
              <option value="2">2</option>
            </select>
          </div>
          <div className="card-content" style={{ maxWidth: 250, marginRight: 20 }}>
            <p class="mb-1">Waktu Jemput/Ambil</p>
            <select class="form-select" aria-label="Default select example" style={{ maxWidth: 210 }}>
              <option selected>Pilih Waktu</option>
              <option value="1">08:00 WIB</option>
              <option value="2">09:00 WIB</option>
              <option value="3">10:00 WIB</option>
              <option value="4">11:00 WIB</option>
              <option value="5">12:00 WIB</option>
            </select>
          </div>
          <div className="card-content" style={{ maxWidth: 250, marginRight: 20 }}>
            <p class="mb-1">Jumlah Penumpang (Optional)</p>
            <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" placeholder="Jumlah Penumpang" />
          </div>
          <div className="card-content" style={{ position: 'relative', top: '31px' }}>
            <button type="submit" class="sewabtn">
              Cari Mobil
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Pencarian;
