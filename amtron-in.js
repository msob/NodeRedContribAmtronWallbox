module.exports = function(RED) {
    function AmtronInNode(config) {
        RED.nodes.createNode(this, config);
        var node = this;

        node.on('input', function(msg) {
            var ModbusRTU = require("modbus-serial");
            var client = new ModbusRTU();

            var register = config.register.split("_");
            var registerType = register[0].toUpperCase();
            var registerAddress = parseInt(register[1]);
            var registerDataType = register[2].toUpperCase();
            var registerCount = registerDataType == "ASCII12" ? 12 : (registerDataType == "UINT32" ? 2 : 1);

            client.connectTCP(config.ip, { port: 502 }, function() {
                client.setID(255);

                if (registerType == "C") {
                    client.readCoils(registerAddress, registerCount, function(err, data) { handleResponse(err, data); });
                }
                else if (registerType == "DI") {
                    client.readDiscreteInputs(registerAddress, registerCount, function(err, data) { handleResponse(err, data); });
                }
                else if (registerType == "IR") {
                    client.readInputRegisters(registerAddress, registerCount, function(err, data) { handleResponse(err, data); });
                }
                else if (registerType == "HR") {
                    client.readHoldingRegisters(registerAddress, registerCount, function(err, data) { handleResponse(err, data); });
                }
            });

            function handleResponse(err, data) {
                if (err) {
                    console.log(err);
                }
                else if (data) {
                    if (registerDataType.startsWith("ASCII")) {
                        var chars = [];
                        // Every two chars are swapped (e.g. badc instead of abcd).
                        data.buffer.forEach((value, index) => index % 2 == 0 ? chars.push(String.fromCharCode(value)) : chars.splice(-1, 0, String.fromCharCode(value)));
                        msg.payload = chars.join("");
                    }
                    else if (registerDataType == "UINT32") {
                        msg.payload = data.data[0] + data.data[1] * 255 ;
                    }
                    else if (registerDataType == "BOOL") {
                        msg.payload = data.data[0];
                    }
                    else {
                        msg.payload = data.data[0];
                    }
                }
                
                client.close();
                node.send(msg);
            }
        });
    }

    RED.nodes.registerType("amtron-in", AmtronInNode);
}
