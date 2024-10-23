    // Validasi Nama/user
     let user = prompt("Ketik Nama Anda")
     document.getElementById('user').innerHTML = user

    // Validasi Message
    function validateForm () {
        const name = document.forms ["message-form"]["nama-panjang"].value;
        const date = document.forms ["message-form"]["tanggal-lahir"].value;
        const gender = document.forms ["message-form"]["gender"].value;
        const message = document.forms ["message-form"]["pesan"].value;

        if (name == "", date == "", gender == "", message == "") {
            alert ("Form Tidak Boleh Kosong");
            return false;
        }

        setsenderUI(name, date, gender, message);
        return false
    }

    function setsenderUI(name, date, gender, message) {
        document.getElementById('hasil-nama-panjang').innerHTML = name;
        document.getElementById('hasil-tanggal-lahir').innerHTML = date;
        document.getElementById('hasil-gender').innerHTML = gender;
        document.getElementById('hasil-pesan').innerHTML = message;
    }

    // Banner Slide
    var slideIndex = 1;
    showDivs(slideIndex);

    function plusDivs(n) {
        showDivs(slideIndex += n)
    }

    function showDivs(n) {
        var i;
        var x = document.getElementsByClassName('banner');
        if (n > x.length) {slideIndex = 1} ;
        if (n < 1) {slideIndex = x.length}
        for (i = 0; i < x.length; i++) {
            x[i].style.display = "none" ;
        }
        x[slideIndex-1].style.display = "block";
        // Interval
        setInterval(() => {
            plusDivs(1);
        }, 5000);
    }


    


