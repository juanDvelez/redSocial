# Red Social - React

Implementación en React de una plantilla de red social estilo Facebook, basada en la plantilla W3.CSS Social Media Template.

## Tecnologías

- React 18
- Vite 5
- W3.CSS (vía CDN)
- Font Awesome 4.7 (vía CDN)

## Estructura

```
src/
├── main.jsx
├── App.jsx
└── components/
    ├── Navbar.jsx        # Barra de navegación con notificaciones y menú móvil
    ├── ProfileCard.jsx   # Tarjeta de perfil del usuario (columna izquierda)
    ├── Accordion.jsx     # Grupos, eventos y fotos desplegables
    ├── Interests.jsx     # Etiquetas de intereses
    ├── AlertBox.jsx      # Alerta descartable
    ├── StatusInput.jsx   # Campo para publicar estado
    ├── PostCard.jsx      # Tarjeta de publicación
    └── SidebarRight.jsx  # Columna derecha: eventos, solicitudes, anuncios
```

## Instalación

```bash
npm install
```

## Desarrollo

```bash
npm run dev
```

## Build

```bash
npm run build
```
