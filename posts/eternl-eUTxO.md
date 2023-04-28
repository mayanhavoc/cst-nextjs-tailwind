---
title: 'Módulo 4: La billetera Eternl y el modelo eUTxO de Cardano'
date: '05-24-2023'
categories: ['billetera digital', 'eternl', 'eUTxO']
---

## Objetivos de aprendizaje para el estudiante

- Entiendo los diferentes modelos de contabilidad utilizados por diferentes protocolos de _blockchain_
- Entiendo las diferencias entre el modelo UTxO de Bitcoin, el modelo de cuentas de Ethereum y el modelo eUTxO de Cardano
- Entiendo como la billetera Eternl utiliza el modelo eUTxO de Cardano

## Conceptos importantes

- Modelo de contabilidad: La forma en que un protocolo _blockchain_ lleva un registro de las transacciones realizadas.
- Modelo UTxO de Bitcoin: En el modelo UTxO de Bitcoin, cada transacción consiste de _inputs_ y _outputs_. Cada _input_ debe gastar un _output_ anterior no utilizado, o gastado. Por ejemplo, si Ana quiere enviar 1 BTC a Roberto, debe tener un _input_ que muestre tener al menos 1 BTC y un _output_ que envíe 1 BTC a Roberto y otro que envíe el cambio a su propia dirección.
- Modelo de cuentas de Ethereum: Ethereum utiliza el modelo tradicional de créditos y débitos. Cada cuenta tiene un saldo que se actualiza a medida en que se realizan transacciones. Por ejemplo, si Ana quiere enviar 1 ETH a Roberto, simplemente actualiza su saldo restando 1 ETH y actualiza el saldo de Roberto sumando 1 ETH.
- Modelo eUTxO de Cardano: El modelo eUTxO de Cardano se basa en el modelo UTxO de Bitcoin. Sin embargo, agrega la posibilidad de incluir _scripts_ aleatorios a las transacciones. De esta manera, una transacción en el protocolo de Cardano consiste de _inputs_, _outputs_, data y el contexto. Por ejemplo, en Cardano, Ana puede condicionar el envío de 1 Ada a Roberto al cumplimiento de una condición la cual al cumplirse, automáticamente ejecuta la transacción.
