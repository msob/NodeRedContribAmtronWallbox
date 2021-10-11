# Node-RED AMTRON Node

This Node is using the Modbus TCP Interface of some MENNEKES AMTRON Models. Supported are the AMTRON XTRA and PREMIUM wallboxes, based on the HCC3 controller.

## Setup Wallbox
The AMTRON has to run software version 1.13 or newer and the Modbus TCP interface has to be anabled first. To do so, open the AMTRON Service Interface at http://<AMTRON-IP-Address>:25000/ and log in with the installation PIN. Switch to the installation settings page and enable the Modbus TCP option.

## Manufacturer Documentation
The manufacturer of the AMTRON wallboxes (MENNEKES Elektrotechnik GmbH & Co. KG in Kirchhundem, Germany) provides an official documentation of the Modbus TCP interface. This documentation can be downloaded [here](https://update.mennekes.de/hcc3/1.13/Description%20Modbus_AMTRON%20HCC3_v01_2021-06-25_en.pdf) for software release 1.13.