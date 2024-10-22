
    // let user = prompt("Ketik Nama Anda")
    //document.getElementById('user').innerHTML = user

    // Message

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


    


