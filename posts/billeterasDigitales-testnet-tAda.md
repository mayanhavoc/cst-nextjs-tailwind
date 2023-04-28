---
title: 'Módulo 2: La billetera Nami, el testnet de Cardano y tAda'
date: '05-10-2023'
categories: ['billetera digital', 'testnet', 'tAda']
---

## Objetivos de aprendizaje

- Entiendo los conceptos básicos detrás de las billeteras digitales y cómo funcionan.
- Sé como crear y manejar una billetera digital utilizando la plataforma Nami.
- Conozco las mejores prácticas para la seguridad de las billeteras digitales.

## Conceptos importantes

- Billeteras digitales: Las billeteras digitales son plataformas que permiten almacenar, enviar y recibir criptomonedas.
- Nami: La billetera Nami es una billetera digital específicamente diseñada para el protocolo de Cardano y permite configuración en _mainnet_ y _testnet_.
- tAda: tAda se refiere a la criptomoneda nativa para el _testnet_ de Cardano.
- _Testnet_: La _testnet_ es una red de prueba que permite a los desarrolladores probar sus aplicaciones sin arriesgar fondos reales.

## Cómo crear y manejar una billetera digital

### Pre-requisitos

- Un browser basado en [chromium](https://www.chromium.org/Home)
- _Masterclass_ de Charles Hoskinson en [Fundamentos de ciber-seguridad](https://www.youtube.com/watch?v=heilPdATpMk)
- Todos los ejercicios usan el navegador [Brave](https://brave.com/es/)[^1], si quieres seguir exactamente lo que yo hago, puedes bajarlo [aquí](https://brave.com/es/), sin embargo cualquier navegador basado en chromium (e.g. Google, Opera o Vivaldi) funcionará.

[Video - Mini-tutorial: Cómo instalar el plugin de la billetera Nami en tu browser](https://www.youtube.com/watch?v=biZn9IrPoIc&t=14s)

### Paso 1

1. Navega a la página de [Nami](https://namiwallet.io/)
2. Haz click en el ícono de tu navegador
3. Haz click en 'Agregar a Chrome' y acepta la instalación

### Paso 2

**IMPORTANTE**: **SI VAS A USAR UN DOCUMENTO DIGITAL, RECUERDA NUNCA GUARDARLO EN UN DISPOSITIVO CON ACCESO A INTERNET**

En este curso romperemos muchos de los protocolos de seguridad con propósitos educativos y porque todo lo que haremos será en el _testent_ y por lo tanto, no involucra valor real.

Si piensas guardar información sensible en un dispositivo digital, asegùrate que no tenga acceso a internet.

[Video - Mini tutorial: Crear una billetera Nami](https://youtu.be/g6g85Sugg6o)

1. Haz click en _New Wallet_ para crear una billetera
2. Haz click en _Continue_ en la ventana con la advertencia de no permitir que otros vean tu pantalla mientras tu frase semilla esté visible
3. Guarda tu frase semilla en un lugar seguro. Mantén tus notas a la mano, usarás tu frase semilla en el siguiente paso.

- Asegúrate de guardar tus llaves siguiendo protocolos de seguridad apropiados

4. Verifica tu frase semilla completando los espacios vacíos con los respectivos valores de tu frase semilla
5. Haz click en _Next_ para continuar
6. Crea tu cuenta proporcionándo un nombre de cuenta y una contraseña segura

### Paso 3

[ Video - Mini tutorial: Configura tu billetera para usar el testnet ](https://youtu.be/J2gBko_pg18)

Para configurar la billetera Nami a usar el _testnet_ de Cardano:

1. Haz click en el ícono de tu _avatar_
2. Haz click en _Settings_
3. Haz click en el menú y selecciona _Preprod_

### Paso 4

[Envía tAda a tu billetera Nami]

1. Haz click en este [link](https://docs.cardano.org/cardano-testnet/tools/faucet) para navegar al grifo del _testnet_ de Cardano (o Cardano _testnet_ _faucet_).
2. Haz click en el menú con nombre _Environment_ y selecciona _Preprod Testnet_
3. Haz click en el menú con nombre _Action_ y selecciona _Receive test ADA_
4. Haz click en el ícono de tu billetera Nami en la sección de extensiones de tu _browser_
5. Haz click en tu _avatar_ (esquina superior derecha)
6. Haz click en _Settings_
7. Haz click en _Network_
8. Asegúrate que tu billetera esté configurada correctamente para usar el _Preprod Testnet_ [^2]
9. Regresa al menú principal de tu billetera Nami y haz click en _Receive_
10. Haz click en el ícono ubicado en la parte inferior derecha de la imágen con el código QR de tu billetera (justo después de tu dirección) para copiar la dirección de tu billetera al _clipboard_.
11. Regresa a la página del grifo _testnet_ de Cardano
12. Pega la dirección de tu billetera Nami en el campo titulado _Address_
13. Haz click en el reCAPTCHA
14. Haz click en el botón de _REQUEST FUNDS_

## Paso 5

Dos maneras de verificar que hayas obtenido tus fondos:

- En tu billetera Nami

  1. Haz click en el ícono de tu billetera Nami en la sección de extensiones de tu navegador
  2. Haz click en el ícono que representa un reloj en el extremo derecho de la sección de íconos de tu billetera
  3. Este ícono presenta el historial de transacciones de tu billetera. Si tu transacción ha sido exitosa, será la primera transacción en el historial.[^3]

- En [Cardanoscan](https://cardanoscan.io/)[^4]

  1. Dirígete a la página de Cardanoscan haciendo click en el link anterior o haciendo click [aquí](https://cardanoscan.io/).
  2. Haz click en el botón con el texto _Mainnet_ ubicado en la esquina superior derecha de la página.
  3. Escoge la red _PreProd_ haciendo click en esta opción del menú
  4. Ahora tienes dos opciones:
  5. Ingresando la dirección de tu billetera Nami (repite los pasos 1 a 3 de la sección anterior para copiar la dirección de tu billetera Nami) en el formulario de búsqueda (ubicado en la parte izquierda debajo del encabezado "Cardano PreProd Testnet Blockchain Explorer").
  6. Ingresando el _hash_ de tu transacción (el cuál se te ha proporcionado en la página del grifo _testnet_ de Cardano después de hacer click en el botón _REQUEST FUNDS_) en el formulario de búsqueda.

- Si seguiste el paso No.5, debes hacer _scroll_ hacia abajo hasta ver la sección titulada _Transactions_, allí verás el _hash_ de tu transacción junto con otra información.
- Si seguiste el paso No.6, la información de tu transacción se te presentará inmediatamente.

## Paso 6

Ahora que sabes como configurar tu billetera y la has cargado con _tAda_ te proponemos un pequeño reto:

Envíale _tAda_ a tus colegas y demuéstralo enviando el _hash_ de la transacción y compartiéndolo en cualquiera de nuestros canales de comunicación para que todos podamos verificarlo.

Puedes encontrar todos los _links_ a nuestros canales de comunicación en un solo [lugar](linktr.ee/cardanosintecnicismos).

Tienes a tu disposición varios canales de comunicación:
[Whatsapp](https://chat.whatsapp.com/IyxkbkiesL52aiip7NqViL)
[Discord](https://discord.gg/Bp8KtHsx)

Puedes encontrar sesiones pasadas y mini tutoriales en nuestro canal de [Youtube](https://www.youtube.com/channel/UCdYflNYOIZbEzLzSFztGZsA)

---

## Notas al pie

[^1]: El navegador _Brave_ fue diseñado con tecnología blockchain en mente, además de tener otras ventajas como bloqueo de anuncios así como seguridad y protección de la informacion del usuario.
[^2]: Aunque parezca un paso trivial, es importante asegurarse que la billetera esté correctamente configurada ya que el grifo del _testnet_ de Cardano únicamente permite un envío de _tAda_ cada 24 horas.
[^3]: Puede que tus fondos no aparezcan inmediatamente en tu billetera, pues las transacciones toman unos segundos en confirmarse. Si no aparecen, espera unos segundos, refresca tu aplicación e intenta de nuevo.
[^4]: Cardanoscan es uno de una variedad de exploradores de Cardano, siéntete en la libertad de utilizar el que sea de tu preferencia.
