import React from "react";
import "./App.css";
import Gambar from "./assets/46640.jpg";

function App() {
  return (
    <div className="App">
      <hr></hr>

      <br></br>
      <header className="App-header">
        <h1>Hii, I'am!!!</h1>
      </header>
      <br></br>

      <hr></hr>

      <h2>MUHAMMAD ALWI RIDHO AL ANSHORY</h2>
      <img src={Gambar} className="gambarAlwie" />

      <main>
        <section className="About">
          <h1>
            <b>--- About Me!!! ---</b>
          </h1>
          <p>
            Saya Adalah Seorang Pengembang Perangkat Lunak Yang Bersemangat
            Untuk Membuat Aplikasi Website Yang Menarik Dan Bermanfaat. <br />{" "}
            Saya Adalah Siswa Dari Salah Satu Sekolah Di Samarinda Yaitu Di SMK
            TI AIRLANGGA.
          </p>

          <hr></hr>
        </section>

        <section className="Projects">
          <h2>* : Project Saya : *</h2>
          <div className="Project">
            <h3>Project 1.</h3>
            <p>Menyusun Dan Merancang Website bagian Front-end.</p>
          </div>

          <div className="Project">
            <h3>project 2.</h3>
            <p>Mendesain Program Website Dengan Menarik.</p>
          </div>
        </section>

        <section className="Contact">
          <h2>* : Contact : *</h2>
          <p>
            Instagram :{" "}
            <a href="https://www.instagram.com/syapa_wii" target="_blank">
              syapa_wii
            </a>
          </p>
          <p>
            WhatsApp : <a href="#">081346754171</a>
          </p>
          <p>
            Tik-Tok : <a href="#">Bang_wii</a>
          </p>
        </section>
      </main>

      <footer>
        <p className="footer">&copy; 2024 Portfolio Saya</p>
      </footer>
    </div>
  );
}

export default App;
