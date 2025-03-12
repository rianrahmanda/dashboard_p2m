// script.js
document.addEventListener("DOMContentLoaded", () => {
    // Dummy data untuk agenda
    const agendaData = [
        {
            no: 1,
            namaKegiatan: "Rapat Koordinasi Mutu",
            tanggal: "2025-03-15",
            waktu: "09:00 - 11:00",
            lokasi: "Ruang Rapat P2M",
            keterangan: "Membahas hasil audit internal"
        },
        {
            no: 2,
            namaKegiatan: "Pelatihan Penyusunan Dokumen Akreditasi",
            tanggal: "2025-03-20",
            waktu: "13:00 - 16:00",
            lokasi: "Aula Kampus Utama",
            keterangan: "Untuk tim penyusun dokumen"
        },
        {
            no: 3,
            namaKegiatan: "Evaluasi Progres Akreditasi",
            tanggal: "2025-03-25",
            waktu: "10:00 - 12:00",
            lokasi: "Ruang Rapat P2M",
            keterangan: "Meninjau status dokumen"
        },
        {
            no: 4,
            namaKegiatan: "Sosialisasi Standar Mutu",
            tanggal: "2025-04-01",
            waktu: "08:30 - 11:30",
            lokasi: "Aula Kampus OKU",
            keterangan: "Untuk dosen dan staf - Mendesak"
        },
    ];

    // Dummy data untuk akreditasi
    const akreditasiData = [
        {
            prodi: "D3 - Administrasi Bisnis",
            nomorSK: "1619/SK/BAN-PT/Ak-PPJ/Dipl-III/III/2020",
            masaBerlaku: "2025-03-15",
            cakupan: "LAM-EMBA",
            status: "Menunggu Jadwal Assesmen Lapangan",
        },
        {
            prodi: "D3 - Teknologi Pangan",
            nomorSK: "6749/SK/BAN-PT/Akred/ST/X/2020",
            masaBerlaku: "2025-06-27",
            cakupan: "BAN-PT",
            status: "(Reakreditasi) Submit Dokumen - Status Berhasil - Belum diterima",
        },
        {
            prodi: "D4 - Perancangan Jalan Dan Jembatan (Kampus Oku)",
            nomorSK: "2388/SK/BAN-PT/Ak.P/STr/VI/2023",
            masaBerlaku: "2025-06-20",
            cakupan: "BAN-PT",
            status: "(Reakreditasi) Submit Dokumen - Status Berhasil - Belum diterima",
        },
        {
            prodi: "D4 - Teknologi Produksi Tanaman Perkebunan",
            nomorSK: "2388/SK/BAN-PT/Ak.P/STr/VI/2023",
            masaBerlaku: "2025-06-20",
            cakupan: "BAN-PT",
            status: "(Reakreditasi) Submit Dokumen - Status Berhasil - Belum diterima",
        },
        {
            prodi: "D3 - Bahasa Inggris",
            nomorSK: "5063/SK/BAN-PT/Ak-PPJ/Dipl-III/IX/2020",
            masaBerlaku: "2025-08-30",
            cakupan: "BAN-PT",
            status: "Submit Dokumen - Status Berhasil - Belum diterima",
        },
        {
            prodi: "D3 - Teknik Listrik",
            nomorSK: "4880/SK/BAN-PT/Akred/Dipl-III/VIII/2020",
            masaBerlaku: "2025-08-25",
            cakupan: "LAM-TEKNIK",
            status: "Menunggu Hasil Assesmen Lapangan",
        },
        {
            prodi: "D3 - Teknik Mesin",
            nomorSK: "6120/SK/BAN-PT/Akred/Dipl-III/IX/2020",
            masaBerlaku: "2025-09-30",
            cakupan: "LAM-TEKNIK",
            status: "Menunggu Hasil Assesmen Lapangan",
        },
        {
            prodi: "D3 - Teknik Elektronika",
            nomorSK: "5942/SK/BAN-PT/Akred/Dipl-III/IX/2020",
            masaBerlaku: "2025-09-23",
            cakupan: "LAM-TEKNIK",
            status: "Upload Batch 2 (sebelum 14 Mei 2025)",
        },
        {
            prodi: "D4 - Manajemen Bisnis",
            nomorSK: "7147/SK/BAN-PT/Akred/ST/XI/2020",
            masaBerlaku: "2025-11-10",
            cakupan: "LAM-TEKNIK",
            status: "Menunggu Hasil Assesmen Lapangan",
        },
        {
            prodi: "D4 - Usaha Perjalanan Wisata",
            nomorSK: "6412/SK/BAN-PT/Akred/ST/X/2020",
            masaBerlaku: "2025-10-13",
            cakupan: "BAN-PT",
            status: "Submit Dokumen - Status Berhasil - Belum diterima",
        },
        {
            prodi: "D3 - Teknik Kimia",
            nomorSK: "6567/SK/BAN-PT/Akred/Dipl-III/X/2020",
            masaBerlaku: "2025-10-20",
            cakupan: "LAM-TEKNIK",
            status: "Submit Batch 2 (Sebelum 14 Mei 2025)",
        },
        {
            prodi: "D4 - Teknik Elektro",
            nomorSK: "6749/SK/BAN-PT/Akred/ST/X/2020",
            masaBerlaku: "2025-10-27",
            cakupan: "BAN-PT",
            status: "Submit Dokumen - Status Berhasil - Belum diterima",
        },
        {
            prodi: "Politeknik Negeri Sriwijaya",
            nomorSK: "994/SK/BAN-PT/XII/2020",
            masaBerlaku: "2025-12-01",
            cakupan: "BAN-PT",
            status: "Meyusun Dokumen Akreditasi (Menunggu SK Tim Penyusun Terbit)",
        },
        {
            prodi: "D3 - Manajemen Informatika",
            nomorSK: "846/SK/BAN-PT/Akred/Dipl-III/II/2021",
            masaBerlaku: "2026-02-20",
            cakupan: "LAM-INFOKOM",
            status: "Terakreditasi",
        },
        {
            prodi: "D3 - Teknik Telekomunikasi",
            nomorSK: "2318/SK/BAN-PT/Akred/Dipl-III/IV/2021",
            masaBerlaku: "2026-04-21",
            cakupan: "LAM-TEKNIK",
            status: "Terakreditasi",
        },
        {
            prodi: "D3 - Teknik Sipil",
            nomorSK: "2410/SK/BAN-PT/Akred/Dipl-III/IV/2021",
            masaBerlaku: "2026-04-27",
            cakupan: "LAM-TEKNIK",
            status: "Terakreditasi",
        },
        {
            prodi: "D4 - Teknik Energi ",
            nomorSK: "5971/SK/BAN-PT/Ak-PPJ/ST/VI/2021",
            masaBerlaku: "2026-06-03",
            cakupan: "LAM-TEKNIK",
            status: "Terakreditasi",
        },
        {
            prodi: "D4 - Teknologi Informatika Multimedia Digital",
            nomorSK: "10162/SK/BAN-PT/Akred/ST/VIII/2021",
            masaBerlaku: "2026-08-18",
            cakupan: "LAM-INFOKOM",
            status: "Terakreditasi",
        },
        {
            prodi: "D3 - Teknik Komputer",
            nomorSK: "Tidak Ada sertifikat akreditasi",
            masaBerlaku: "2026-10-21",
            cakupan: "LAM-Infokom",
            status: "Terakreditasi",
        },
        {
            prodi: "D4 - Perancangan Jalan dan Jembatan (PJJ) ",
            nomorSK: "0396/SK/LAM Teknik/VST/XII/2023",
            masaBerlaku: "2028-12-20",
            cakupan: "LAM-TEKNIK",
            status: "Terakreditasi",
        },
        {
            prodi: "D4 - Teknik Mesin Produksi dan Perawatan",
            nomorSK: "0399/SK/LAM Teknik/VST/XII/2023",
            masaBerlaku: "2028-12-20",
            cakupan: "LAM-TEKNIK",
            status: "Terakreditasi",
        },
        {
            prodi: "D4 - Teknologi Kimia Industri",
            nomorSK: "0398/SK/LAM Teknik/VST/XII/2023",
            masaBerlaku: "2028-12-20",
            cakupan: "LAM-TEKNIK",
            status: "Terakreditasi",
        },
        {
            prodi: "S2 - Teknik Energi Terbarukan",
            nomorSK: "0397/SK/LAM Teknik/VMT/XII/2023",
            masaBerlaku: "2028-12-20",
            cakupan: "LAM-TEKNIK",
            status: "Terakreditasi",
        },
        {
            prodi: "D4 - Manajemen Informatika",
            nomorSK: "091/SK/LAM-INFOKOM/Ak/STr/VIII/2024",
            masaBerlaku: "2029-08-07",
            cakupan: "LAM-INFOKOM",
            status: "Terakreditasi",
        },
        {
            prodi: "D4 - Teknologi Telekomunikasi",
            nomorSK: "0392/SK/LAM Teknik/VST/VIII/2024",
            masaBerlaku: "2029-08-20",
            cakupan: "LAM-TEKNIK",
            status: "Terakreditasi",
        },
        {
            prodi: "D4 - Bisnis Digital",
            nomorSK: "546/DE/A.5/AR.11/X/2024",
            masaBerlaku: "2029-10-17",
            cakupan: "LAM-EMBA",
            status: "Terakreditasi (Minimum)",
        },
        {
            prodi: "D4 - Akuntansi Sektor Publik",
            nomorSK: "1619/DE/A.5/AR.10/X/2024",
            masaBerlaku: "2029-10-11",
            cakupan: "LAM-EMBA",
            status: "Terakreditasi",
        },
        {
            prodi: "D3 - Teknik Kimia (Kampus Siak)",
            nomorSK: "0392/SK/LAM Teknik/VST/VIII/2024",
            masaBerlaku: "2029-12-20",
            cakupan: "LAM-TEKNIK",
            status: "Terakreditasi",
        },
        {
            prodi: "D4 - TMPP (Kampus Kab. Siak)",
            nomorSK: "0730/SK/LAM Teknik/VST/XII/2024",
            masaBerlaku: "2029-12-20",
            cakupan: "LAM-EMBA",
            status: "Terakreditasi",
        },
        {
            prodi: "D3 - Pemeliharaan Alat berat",
            nomorSK: "139/SK/BAN-PT/Ak.P/D3/I/2025",
            masaBerlaku: "2030-01-21",
            cakupan: "BAN-PT",
            status: "Terakreditasi (sementara)",
        },
        {
            prodi: "D4 - Arsitektur Bangunan Gedung",
            nomorSK: "141/SK/BAN-PT/Ak.P/STr/I/2025",
            masaBerlaku: "2030-01-21",
            cakupan: "BAN-PT",
            status: "Terakreditasi (Sementara)",
        },
        {
            prodi: "D3 - Administrasi Bisnis (Kampus Kab. OKU)",
            nomorSK: "2039/DE/A.5/AR.10/II/2025",
            masaBerlaku: "2030-02-21",
            cakupan: "LAM-EMBA",
            status: "Terakreditasi (BAIK)",
        },
        {
            prodi: "D4 - Teknologi Rekayasa Instalasi Listrik",
            nomorSK: "--",
            masaBerlaku: "0000-00-00",
            cakupan: "BAN-PT",
            status: "None",
        },
    ];

    // Fungsi untuk menghitung sisa masa berlaku dalam hari
    function hitungSisaMasaBerlaku(tanggalAkhir) {
        const sekarang = new Date("2025-03-11");
        const akhir = new Date(tanggalAkhir);
        const selisih = akhir - sekarang;
        const hari = Math.floor(selisih / (1000 * 60 * 60 * 24));
        const tahun = Math.floor(hari / 365);
        const bulan = Math.floor((hari % 365) / 30);
        const sisaHari = hari % 30;

        return {
            totalHari: hari,
            teks: `${tahun} Tahun, ${bulan} Bulan, ${sisaHari} Hari`,
        };
    }

    // Fungsi untuk menghitung sisa hari kegiatan (untuk tabel agenda)
    function hitungSisaHariKegiatan(tanggalKegiatan) {
        const sekarang = new Date();
        const kegiatan = new Date(tanggalKegiatan);
        const selisih = kegiatan - sekarang;
        const hari = Math.floor(selisih / (1000 * 60 * 60 * 24));
        return hari;
    }

    // Mengurutkan data akreditasi berdasarkan sisa hari
    akreditasiData.sort((a, b) => {
        const sisaA = hitungSisaMasaBerlaku(a.masaBerlaku).totalHari;
        const sisaB = hitungSisaMasaBerlaku(b.masaBerlaku).totalHari;
        return sisaA - sisaB;
    });

    // Menampilkan daftar akreditasi
    const akreditasiTable = document.getElementById("akreditasiTable");
    akreditasiData.forEach((item) => {
        const sisa = hitungSisaMasaBerlaku(item.masaBerlaku);
        const row = document.createElement("tr");

        // Logika pewarnaan berdasarkan sisa hari dan status
        let warnaLatar = "";
        let warnaTeks = "#000000"; // Default teks hitam
        if (item.status === "None") {
            warnaLatar = "#0000FF"; // Biru untuk status "None"
            warnaTeks = "#FFFFFF"; // Teks putih untuk biru
            row.classList.add('data-biru');
        } else if (sisa.totalHari < 365) {
            warnaLatar = "#FF0000"; // Merah untuk kurang dari 1 tahun
            warnaTeks = "#FFFFFF"; // Teks putih untuk merah
            row.classList.add('data-merah');
        } else if (sisa.totalHari >= 365 && sisa.totalHari < 730) { // Kuning untuk 1-2 tahun
            warnaLatar = "#FFFF00"; // Kuning untuk 1 tahun sampai kurang dari 2 tahun
        } else {
            warnaLatar = "#00FF00"; // Hijau untuk lebih dari 2 tahun
        }

        row.innerHTML = `
            <td>${item.prodi}</td>
            <td>${item.nomorSK}</td>
            <td>${item.masaBerlaku}</td>
            <td>${sisa.teks}</td>
            <td>${item.cakupan}</td>
            <td>${item.status}</td>
        `;


        row.style.backgroundColor = warnaLatar;
        row.style.color = warnaTeks;
        row.style.fontFamily = "Arial, sans-serif";
        row.style.padding = "8px";
        akreditasiTable.appendChild(row);
    });

    // Menampilkan data agenda ke tabel dengan styling tambahan
    const agendaTable = document.getElementById("agendaTable");
    agendaData.forEach((item) => {
        const row = document.createElement("tr");
        const sisaHari = hitungSisaHariKegiatan(item.tanggal);

        // Logika pewarnaan untuk tabel agenda
        let warnaLatar = "";
        let warnaTeks = "#000000"; // Default teks hitam
        if (item.keterangan.includes("Mendesak")) {
            warnaLatar = "#0000FF"; // Biru untuk kegiatan mendesak
            warnaTeks = "#FFFFFF"; // Teks putih untuk biru
            row.classList.add('data-biru');
        } else if (sisaHari <= 7) { // Kurang dari 7 hari
            warnaLatar = "#FF0000"; // Merah untuk kegiatan dalam 7 hari
            warnaTeks = "#FFFFFF"; // Teks putih untuk merah
            row.classList.add('data-merah');
        }

        row.innerHTML = `
            <td class="agenda-no">${item.no}</td>
            <td class="agenda-name">${item.namaKegiatan}</td>
            <td class="agenda-date">${item.tanggal}</td>
            <td class="agenda-time">${item.waktu}</td>
            <td class="agenda-location">${item.lokasi}</td>
            <td class="agenda-note">${item.keterangan}</td>
        `;
        row.style.backgroundColor = warnaLatar;
        row.style.color = warnaTeks;
        row.style.fontFamily = "Arial, sans-serif";
        row.style.padding = "8px";
        row.style.transition = "background-color 0.3s ease";
        agendaTable.appendChild(row);

    });
});