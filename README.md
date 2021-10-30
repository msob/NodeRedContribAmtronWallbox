# Node-RED AMTRON Node

[![Platform](https://img.shields.io/badge/platform-Node--RED-red)](https://nodered.org)
![MIT license](https://img.shields.io/badge/License-MIT-blue.svg)
![Build](https://github.com/msob/SoftKvmSwitch/actions/workflows/build.yml/badge.svg?branch=main)

*German is the main Language in this projects documentation.* \
*You can find the english version in the second part of this document.*

## Deutsche Dokumentation
In diesem Projekt wurde eine Node für Node-RED realisiert, mit der eine Elektroauto-Ladestation gesteuert werden kann. Unterstützt werden die Modelle AMTRON XTRA und PREMIUM des Herstellers MENNEKES.

Diese Ladestationen verfügen ab Software Version 1.13 über ein ModbusTCP Interface, auf das diese Node zugreift und so die Ladestation über Ethernet oder WLAN steuert. Das Softwareupdate stellt der Hersteller auf seiner [Website](https://www.chargeupyourday.de/services/software-updates/) für alle Kunden kostenlos zum Download bereit.

### Ladestation konfigurieren
Damit die Ladestation über ModbusTCP gesteuert werden kann, muss das Protokoll erst in den Einstellungen des Geräts aktiviert werden. Mit einem Browser kann man über die Adresse http://AMTRON-IP-Address:25000/ das Web Interface des AMTRON aufrufen. Nachdem man sich mit der Installation PIN angemeldet hat, kann man auf der Seite "Installation Settings" die Option "Modbus TCP Server" aktivieren.

Je nach Anwendungsfall müssen ggf. weitere Werte im Web Interface konfiguriert werden.

### Die AMTRON-Node in Node-RED installieren
Um die aktuelle Version dieser Node zu installieren, öffnet man die Node-RED Oerfläche und navigiert zu "Menü" > "Manage Palette" und sucht dort nach node-red-contrib-amtron-wallbox.

Alternativ kann man das Paket auch mit dem folgenden Aufruf über die Kommandozeile installieren.

    npm i node-red-contrib-amtron-wallbox

Nach einem Neustart findet man in der Palette die beiden Nodes "AMTRON in" und "AMTRON out".

### Dokumentation des Herstellers
Die offizielle Dokumentation der ModbusTCP Schnittstelle wurde von MENNEKES auf der [Homepage](https://www.chargeupyourday.de/services/software-updates/) veröffentlicht.



## English Documentation
This Node provides access to the MENNEKES AMTRON XTRA and PREMIUM models. These wallboxes contain the so called HCC3 controller, which can be connected to a local network via Ethernet or (depending on the device model) WiFi.

### Configure Wallbox
The AMTRON has to run software version 1.13 or newer and the Modbus TCP interface has to be enabled first. To do so, open the AMTRON Service Interface at http://AMTRON-IP-Address:25000/ and log in with the installation PIN. Switch to the Installation Settings page and enable the Modbus TCP option.

The recent software release can be downloaded for free from the manufacturer [website](https://www.chargeupyourday.de/services/software-updates/).

### Add this Node to Node-RED
To install the stable version of this node, use the "Menu" > "Manage palette" option and search for node-red-contrib-amtron-wallbox.

Alternatively, you may execute the following command in your Node-RED user directory.

    npm i node-red-contrib-amtron-wallbox

Restart your Node-RED instance and check your palette for the "AMTRON in" and "AMTRON out" node types.

### Manufacturer Documentation
The manufacturer of the AMTRON wallboxes provides an official documentation of the Modbus TCP interface. This documentation and the recent software version can be downloaded [here](https://www.chargeupyourday.de/services/software-updates/) for software release 1.13.