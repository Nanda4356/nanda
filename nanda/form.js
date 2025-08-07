    function validateForm() {
      const name = document.getElementById("name").value;
      const email = document.getElementById("email").value;
      const password = document.getElementById("password").value;

      if (name === "" || password === "") {
        alert("Form tidak boleh kosong");
        return false;
      }
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailPattern.test(email)) {
        alert("Masukkan email yang valid!");
        return false;
      }

      alert("Form berhasil divalidasi!");
      return true;
    }