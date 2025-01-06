# Proyecto de Demostración de Almacenamiento Gaia

## Propósito del Repositorio

Este repositorio tiene como objetivo enseñar los conceptos básicos de cómo usar e implementar el almacenamiento Gaia con un caso de uso específico: metadatos de NFTs. A lo largo del proyecto, se demostrará cómo instalar `stacks/storage`, la librería que permite gestionar datos con Gaia Storage. Posteriormente, se diseñará un formulario que recibirá imágenes y un archivo CSV con los atributos del NFT. Se detallarán los estándares seguidos: para formar la metadata se poblará un JSON siguiendo el estándar SIP 016 y para el archivo CSV se seguirá el estándar de uso de Gamma.io. Finalmente, se implementarán las funciones necesarias para preprocesar el archivo CSV y poblar el archivo JSON, así como las correspondientes a subir la imagen y la metadata a Gaia Storage.

## Tecnologías Utilizadas

- **Stacks.js**: Biblioteca para interactuar con la blockchain de Stacks.
- **Gaia Storage**: Sistema de almacenamiento descentralizado de alto rendimiento.
- **Node.js**: Entorno de ejecución para JavaScript.
- **Next.js**: Framework de React para aplicaciones web con renderizado del lado del servidor.

## Guía de Instalación y Ejecución en Modo Desarrollo

1. **Clonar el repositorio**:
    ```bash
    git clone https://github.com/OriolPalacios/stacks-gaia-storage-demo.git
    cd stacks-gaia-storage-demo
    ```

2. **Instalar dependencias**:
    ```bash
    npm install
    ```

3. **Ejecutar en modo desarrollo**:
    ```bash
    npm run dev
    ```

## Referencias

- **Producto final del tutorial**: [OriolPalacios/stacks-gaia-storage-demo](https://github.com/OriolPalacios/stacks-gaia-storage-demo)
- **Documentación de Stacks Storage**: [stacks.js/packages/storage at main · hirosystems/stacks.js](https://github.com/hirosystems/stacks.js/tree/main/packages/storage)
- **Documentación de Gaia Storage**: [stacks-network/gaia](https://github.com/blockstack/gaia) y [Gaia | Stacks Documentation](https://docs.stacks.co/docs/gaia/overview)
- **Crear una aplicación e implementar autenticación de usuarios**: [OriolPalacios/stacks-authentication](https://github.com/OriolPalacios/stacks-authentication)
- **SIP 016**: [sips/sips/sip-016/sip-016-token-metadata.md at main · stacksgov/sips](https://github.com/stacksgov/sips/blob/main/sips/sip-016/sip-016-token-metadata.md)
- **Formato de atributos de NFT en Gamma.io**: [🎥 How to Create a Metadata CSV File for a Stacks collection – Gamma.io Support](https://support.gamma.io/hc/en-us/articles/4412562233363-How-to-Create-a-Metadata-CSV-File-for-a-Stacks-collection)
