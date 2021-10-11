module.exports = function(RED) {
    function AmtronOutNode(config) {
        RED.nodes.createNode(this, config);
        var node = this;

        node.on('input', function(msg) {
            var ModbusRTU = require("modbus-serial");
            var client = new ModbusRTU();

            var register = config.register.split("_");
            var registerType = register[0].toUpperCase();
            var registerAddress = parseInt(register[1]);
            var registerDataType = register[2].toUpperCase();

            client.connectTCP(config.ip, { port: 502 }, function() {
                client.setID(255);

                if (registerType == "C") {
                    client.writeCoil(registerAddress, msg.payload, function(err, info) { client.close(); });
                }
                else if (registerType == "HR") {
                    var num = parseInt(msg.payload);
                    client.writeRegister(registerAddress, num, function(err, info) { client.close(); });
                }
            });
        });
    }

    RED.nodes.registerType("amtron-out", AmtronOutNode);
}
