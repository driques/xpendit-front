# Xpendit Frontend

Frontend simple para backend engine rules, diseñado para la gestión inteligente de gastos corporativos.

## Herramientas y Tecnologías

Este proyecto ha sido construido utilizando un conjunto de herramientas modernas para asegurar calidad y rapidez en el desarrollo:

- **Stitch**: Herramienta utilizada para la generación de mockups de alta fidelidad y diseño visual de la interfaz.
- **Antigravity**: Asistente de IA avanzado utilizado para la generación de código, refactorización y orquestación del desarrollo del frontend.
- **React + TypeScript**: Base sólida para una aplicación SPA (Single Page Application) robusta y tipada.
- **Tailwind CSS**: Framework de estilos para lograr una estética limpia, moderna y responsiva.
- **Vite**: Build tool de última generación para un entorno de desarrollo rápido.

## Arquitectura y Lógica de Negocio

Es fundamental destacar la separación de responsabilidades en el ecosistema de Xpendit:

- **Backend**: La **lógica de negocio pura y dura** reside exclusivamente en el backend. Este ha sido implementado siguiendo estrictos principios de **Domain-Driven Design (DDD)** y **Arquitectura Hexagonal**, asegurando un núcleo desacoplado, testearle y centrado en el dominio del problema (reglas de gastos, validaciones complejas, anomalías).
- **Frontend (Este repositorio)**: Actúa como una capa de presentación. Se ha desarrollado como un **plus** al proyecto para demostrar cómo estos servicios de backend son consumidos por una aplicación cliente real. El objetivo es ofrecer una interfaz visual que facilite la interacción con el motor de reglas de Xpendit.

## Funcionalidades Principales

1.  **Dashboard de Gestión**: Visualización clara de métricas clave (Gastos Aprobados, Pendientes, Anomalías).
2.  **Carga de Gastos**: Interfaz drag-and-drop para subir archivos CSV de gastos para su análisis.
3.  **Visualización de Resultados**: Tabla interactiva que muestra el estado de cada transacción procesada por el motor de reglas del backend.
4.  **Estética Xpendit**: Diseño cuidado, modo claro, y feedback visual inmediato para el usuario.

## Ejecución Local

1.  Instalar dependencias:
    ```bash
    npm install
    ```

2.  Iniciar servidor de desarrollo:
    ```bash
    npm run dev
    ```

Cabe destacar que el backend [https://github.com/driques/xpendit-backend] debe estar expuesto y con el servidor activo de forma local antes de ejecutar este front.
