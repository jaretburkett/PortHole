// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.

// CMD +ALT + I = dev tools

var SerialPort = require('serialport');
var currentPort = '';
updatePorts();
function updatePorts() {
    var str = '';
    SerialPort.list(function (err, ports) {
        ports.forEach(function (port) {
            str += '<tr>' +
                '<td>' + port.comName + '</td>' +
                '<td>' + (port.pnpId == null ? '' : port.pnpId ) + '</td>' +
                '<td>' + (port.manufacturer == null ? '' : port.manufacturer) + '</td>' +
                '</tr>';

            str += '<li><a href="#" class="port-item">' + port.comName + '</a></li>';
        });
        $('#port-table').html(str);

    });
}

// port updater
setInterval(function () {
    updatePorts();

}, 1000);