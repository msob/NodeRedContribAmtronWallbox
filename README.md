# Node-RED AMTRON Node

[![Platform](https://img.shields.io/badge/platform-Node--RED-red)](https://nodered.org)
![MIT license](https://img.shields.io/badge/License-MIT-blue.svg)
![Build](https://github.com/msob/SoftKvmSwitch/actions/workflows/build.yml/badge.svg?branch=main)

This Node provides access to the MENNEKES AMTRON XTRA and PREMIUM models. These wallboxes contain the so called HCC3 controller, which can be connected to a local network via Ethernet or (depending on the device model) WiFi.

## Configure Wallbox
The AMTRON has to run software version 1.13 or newer and the Modbus TCP interface has to be enabled first. To do so, open the AMTRON Service Interface at http://AMTRON-IP-Address:25000/ and log in with the installation PIN. Switch to the installation settings page and enable the Modbus TCP option.

## Add this Node to Node-RED

To install the stable version of this node, use the "Menu" > "Manage palette" option and search for node-red-contrib-amtron-wallbox.

Alternatively, you may execute the following command in your Node-RED user directory.

    npm i node-red-contrib-amtron-wallbox

Restart your Node-RED instance and check your palette for the "AMTRON in" and "AMTRON out" node types.

## Manufacturer Documentation
The manufacturer of the AMTRON wallboxes provides an official documentation of the Modbus TCP interface. This documentation and the recent software version can be downloaded [here](https://www.chargeupyourday.de/services/software-updates/) for software release 1.13.