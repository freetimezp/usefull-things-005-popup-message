const btn = document.getElementById('btn');

if (btn) {
    btn.addEventListener('click', function () {
        let msg = document.getElementById('message');
        msg.className = 'show';


        setTimeout(function () {
            msg.className = msg.className.replace("show", "");
        }, 2000);
    });
}



