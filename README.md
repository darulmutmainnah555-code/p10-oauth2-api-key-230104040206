# PRAKTIKUM 10  
## Simulasi API Key & OAuth 2.0  
Mata Kuliah: Web Service Engineering  
Nama: *Syfa Aulia Darul Mutmainnah*  
NIM: *230104040206*  

---

## 📘 Pendahuluan
Praktikum 10 ini bertujuan untuk memberikan pemahaman praktis mengenai proses autentikasi dan otorisasi pada layanan web menggunakan:

- **API Key Authentication** (akses publik terbatas)
- **OAuth 2.0 berbasis JWT (JSON Web Token)** untuk akses privat
- **Role-Based Access Control (RBAC)** menggunakan peran *admin* dan *user*

Pada praktikum ini, mahasiswa mengimplementasikan API lengkap yang mencakup login, validasi API Key, validasi JWT, serta CRUD sederhana untuk produk.

---

## 📁 Struktur Proyek
Struktur proyek disusun sebagai berikut:

p10-oauth2-api-key-230104040206
│── controllers/
│ ├── authController.js
│ ├── productController.js
│
│── middleware/
│ ├── validateApiKey.js
│ ├── validateToken.js
│
│── models/
│ ├── User.js
│ ├── ApiKey.js
│ ├── Product.js
│
│── routes/
│ ├── authRoutes.js
│ ├── productRoutes.js
│
│── seeders/
│ ├── seed.js
│
│── utils/
│ ├── generateToken.js
│
│── server.js
│── package.json
│── .env

---

# 📷 Lampiran Screenshot Hasil Praktikum pengujian API menggunakan Postman :

## 1. http status code berhasil
![http://localhost:3000/](./screenshots/statuscode-berhasil.png)

## 2. Pengujian Key (Gagal,Key Hilang)
![/api/v1/products/public](./screenshots/getpublic-keyhilangg.png)

## 3. Pengujian Key (Gagal,Key Palsu)
![/api/v1/products/public](./screenshots/getpublic-keypalsu.png)

## 4. Pengujian Key (Sukses)
![/api/v1/products/public](./screenshots/getpublic-keyvalid.png)

## 5. Pengujian Gagal Akses Token 
![/api/v1/auth/token](./screenshots/gagallogin.png)

## 6. Pengujian Sukses Akses Token Admin 
![/api/v1/auth/token](./screenshots/sukses-tokenadmin.png)

## 7. Pengujian Sukses Akses Token User 
![/api/v1/auth/token](./screenshots/sukses-tokenuser.png)

## 8. Pengujian Gagal (Token Hilang)
![/api/v1/products/private](./screenshots/gagal-tokenhilang.png)

## 9. Pengujian Gagal (Token Palsu)
![/api/v1/products/private](./screenshots/gagal-tokenpalsu.png)

## 10. Pengujian Sukses (Token Valid)
![/api/v1/products/private](./screenshots/sukses-tokenvalid.png)

## 11. Pengujian creat (Creat Admin)
![/api/v1/products/private](./screenshots/id-creatadmin.png)

## 12. Pengujian creat (Creat Admin)
![/api/v1/products/private](./screenshots/id-creatuser.png)

## 13. Pengujian update (Admin)
![/api/v1/products/private/69379751e742c7f62586ef73](./screenshots/update-admin.png)

## 14. Pengujian delete (User)
![/api/v1/products/private/69379751e742c7f62586ef73](./screenshots/delete-user.png)

## 15. Pengujian delete (Admin)
![/api/v1/products/private/69379751e742c7f62586ef73](./screenshots/delete-admin.png)

---


📝 Kesimpulan
Melalui praktikum ini, saya berhasil mengimplementasikan:

Mekanisme API Key Authentication

JWT Authentication (OAuth 2.0 simplified)

Role-based Authorization (Admin & User)

CRUD Produk dengan Endpoint Public & Private

Sistem Seeding untuk data awal

Pengujian lengkap menggunakan Postman

Seluruh fitur berjalan sesuai dengan modul praktikum.
