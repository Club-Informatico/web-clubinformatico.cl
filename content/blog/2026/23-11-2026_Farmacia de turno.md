---
Title: Farmacia de Turno: encuentra la farmacia abierta más cercana 💊🗺️
Date: 2026-11-23 19:00
Category: Proyectos  
Authors: Carlos Carrasco  
Summary: Conoce Farmacia de Turno, una app web open source que usa los datos del Ministerio de Salud para mostrarte en un mapa las farmacias de turno cerca de ti, con acceso directo a Google Maps y Waze. Además, se instala en tu celular como una app.  
Header_Image: images/2026/farmacia-de-turno.svg  
---

## 🌙 Son las 2 de la mañana y necesitas un remedio…

Fiebre, un dolor que no se pasa o un medicamento que se acabó justo cuando no debía.  
Y ahí aparece la pregunta de siempre: **¿qué farmacia está abierta a esta hora?** 🤔

Para esos momentos nace **Farmacia de Turno**, un proyecto del Club pensado para [encontrar rápido la farmacia de turno más cercana, sin perder tiempo buscando](#).

👉 **Úsala ahora:** [farmacia-de-turno.clubinformatico.cl](https://farmacia-de-turno.clubinformatico.cl/)

---

## 💊 ¿De qué se trata?

Farmacia de Turno es una **app web** que muestra las **farmacias de turno de Chile** en un mapa interactivo y en un listado de tarjetas fáciles de leer.

Puedes buscar de dos maneras:

- 📍 **Por cercanía:** si das permiso de ubicación, la app muestra las farmacias de turno que están a **menos de 15 km**, ordenadas de la más cercana a la más lejana
- 🏙️ **Por comuna:** eliges tu comuna en el listado y ves todas las farmacias de turno de esa zona

Cada farmacia aparece en una tarjeta con:

- 🏥 **Nombre** del local
- 📍 **Comuna** y **dirección**
- 🕑 **Horario** de atención
- 📏 **Distancia** en kilómetros (cuando buscas por cercanía)
- 🚗 Botones directos a **Google Maps** y **Waze** para llegar sin enredos

---

## ✨ Funcionalidades

- 🏛️ **Datos oficiales** desde la API del **Ministerio de Salud de Chile (MINSAL)**
- 🗺️ **Mapa interactivo** con la ubicación exacta de cada farmacia
- 📍 **Búsqueda por cercanía** usando la ubicación de tu dispositivo
- 🚗 **Navegación con un toque** en Google Maps o Waze
- 📲 **Instalable (PWA)** en el celular o el computador
- 📴 **Funciona sin conexión** con la última información guardada
- 🍏 **Diseño estilo iOS** con **modo claro y oscuro** automático

---

## 📲 Siempre a mano, incluso sin internet

Desde su versión **1.1.0**, Farmacia de Turno es una **Progressive Web App (PWA)**. Eso significa que puedes **instalarla en tu pantalla de inicio** y abrirla como cualquier otra app. 🙌

Además, su *Service Worker* guarda la aplicación y los últimos datos de farmacias, así que **puedes abrirla y revisar la última información aunque te quedes sin señal**. Si pierdes la conexión, la app te avisa.

**¿Cómo instalarla?**

- 🍎 **iPhone (Safari):** botón *Compartir* → *Agregar a pantalla de inicio* (la misma app te muestra un banner con las instrucciones)
- 🤖 **Android (Chrome):** toca el botón de instalación que aparece en la app o usa el menú ⋮ → *Instalar app*

> 💡 **Pro tip:** instálala hoy, cuando no la necesitas. Así la tendrás lista justo en el momento en que haga falta.

---

## 🛠️ ¿Cómo funciona por dentro?

El proyecto está hecho con **HTML5, CSS3 y JavaScript**, sin frameworks y con CSS propio para que sea liviano y cargue rápido.

- 🏛️ Los datos vienen de la **API pública del MINSAL** con las farmacias de turno del país
- 🗺️ El mapa usa **[Leaflet](https://leafletjs.com/)** con mosaicos de **CARTO** basados en OpenStreetMap
- 📐 Para calcular la distancia a cada farmacia se usa la **fórmula de Haversine**, que mide distancias sobre la superficie de la Tierra:

```javascript
function calculateDistance(lat1, lon1, lat2, lon2) {
  const R = 6371; // Radio de la Tierra en km
  const dLat = (lat2 - lat1) * Math.PI / 180;
  const dLon = (lon2 - lon1) * Math.PI / 180;
  const a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) *
    Math.sin(dLon / 2) * Math.sin(dLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return R * c;
}
```

Con esa distancia, la app filtra las farmacias que están a menos de 15 km y las ordena de la más cercana a la más lejana. 📏

Es un excelente proyecto para aprender a [consumir una API pública, trabajar con mapas y usar la geolocalización del navegador](#), todo con un caso de uso real y muy útil.

---

## 💻 Pruébala en tu equipo

Clona el repositorio:

```bash
git clone https://github.com/KrlitosForever/farmacia-de-turno.git
```

y abre `index.html` en tu navegador. Necesitas conexión a internet para obtener los datos del MINSAL y cargar el mapa. 🌐

> ℹ️ Para probar la instalación y el modo offline, el Service Worker necesita servirse desde `localhost` o HTTPS. Un `python -m http.server` en la carpeta del proyecto es suficiente.

---

## 🤝 Súmate al proyecto

Farmacia de Turno es **open source** bajo la licencia **GNU GPL v3**: puedes usarla, estudiarla y modificarla, siempre que tus mejoras también sean públicas.

El repositorio incluye un `CONTRIBUTING.md` con los pasos para colaborar y un `CHANGELOG.md` con la historia del proyecto. Algunas ideas para seguir mejorándola:

- 🔎 Un **buscador** por nombre de farmacia o dirección
- 🎚️ Elegir el **radio de búsqueda** en vez de los 15 km fijos
- 📞 Agregar el **teléfono** de cada local
- ⭐ Guardar **comunas favoritas**

Haz un **fork**, crea tu rama y envía un **Pull Request**. [¡Toda contribución suma!](https://github.com/KrlitosForever/farmacia-de-turno)

---

## 🚀 Que no te pille la noche

Instálala hoy y tenla lista para cuando la necesites. 💊

- 🌐 **Web:** [farmacia-de-turno.clubinformatico.cl](https://farmacia-de-turno.clubinformatico.cl/)
- 💻 **Repositorio:** [github.com/KrlitosForever/farmacia-de-turno](https://github.com/KrlitosForever/farmacia-de-turno)

Compártela con tu familia, especialmente con quienes más la puedan necesitar.  
¡Nos vemos en el próximo proyecto! 💻✨
