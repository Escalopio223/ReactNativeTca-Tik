# ReactNativeTca-Tik
Prueba de nivel - Tca-Tik

Instalar dependencias: "npm i"

Levantar expo: "npx expo start"

Descargar Expo Go en un móvil o en una máquina virtual Android con Android Studio.

- Móvil:
    Darle a la opción "Scan QR code" y escanear el QR que muestra el terminal cuando
    ejecutas "npx expo start"

- Emulador Android Studio:
    Darle a la opción "Enter URL manually" y poner: "expo://ipDeTuLocal:8081"

Si al escanear el QR o meter la IP aparece un pantallazo azul con un texto de
error, seguramente sea porque la IP asociada al "REACT_NATIVE_PACKAGER_HOSTNAME"
sea una IP diferente, por lo que habrá que ejecutar como administrador en el CMD
o la PowerShell el siguiente comando: "setx /M REACT_NATIVE_PACKAGER_HOSTNAME `IPLOCAL`"
