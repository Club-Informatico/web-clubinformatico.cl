---
Title: Chile Sismos Tracker: los últimos temblores de Chile en un vistazo 🌎📈
Date: 2026-11-25 19:00
Category: Proyectos  
Authors: Carlos Carrasco  
Summary: Conoce Chile Sismos Tracker, una web open source que muestra los últimos 15 sismos registrados en Chile con su magnitud, profundidad, ubicación y un emoji que te dice al tiro si fue un temblorcito o algo más serio.  
Header_Image: images/2026/chile-sismos-tracker.svg  
---

## 🌎 ¿Tembló o fue idea mía?

Si vives en Chile, conoces la escena: estás tranquilo en tu casa, sientes un movimiento y de inmediato aparece la pregunta de siempre…  
**¿tembló o fue idea mía?** 🤔

Y ahí parte la búsqueda en el celular. Con esa idea nace **Chile Sismos Tracker**, un proyecto del Club pensado para [consultar la actividad sísmica de Chile de forma rápida, simple y amigable](#).

👉 **Visítalo ahora:** [sismos.clubinformatico.cl](https://sismos.clubinformatico.cl/)

---

## 📈 ¿De qué se trata?

Chile Sismos Tracker es una web que muestra los **últimos 15 sismos registrados en Chile**, cada uno en su propia tarjeta con la información que realmente importa:

- 📏 **Magnitud** del sismo
- 📅 **Fecha y hora** del evento
- 🕳️ **Profundidad** en kilómetros
- 📍 **Ubicación** (referencia geográfica)

Sin menús enredados ni gráficos difíciles de leer: entras, miras y ya sabes qué pasó.

---

## 😊 vs 😨 El toque emoji

Lo que le da personalidad al proyecto son los **emojis**. Cada tarjeta trae uno según la magnitud del sismo:

| Magnitud | Emoji | Interpretación |
|:-:|:-:|:-|
| Menor a 5 | 😊 | Tranquilidad, un temblor de los que estamos acostumbrados |
| 5 o más | 😨 | Ojo, este ya se sintió fuerte |

Un detalle pequeño, pero que permite [entender la intensidad de un vistazo](#), sin tener que pensar en escalas ni números.

---

## 🛠️ ¿Cómo funciona por dentro?

Uno de los puntos más interesantes del proyecto es lo **liviano** que es. Todo vive en un único archivo `index.html`:

- 🎨 **HTML5 + CSS3 + Bootstrap** para un diseño limpio y responsive
- ⚡ **JavaScript** que, al cargar la página, consulta una **API pública de sismos**
- 🧩 Por cada sismo recibido se arma dinámicamente una tarjeta en pantalla
- 🌐 Publicado con **GitHub Pages** y un dominio propio del Club

La lógica es tan directa como esto:

```javascript
fetch("https://api.gael.cloud/general/public/sismos")
  .then((response) => response.json())
  .then((data) => {
    data.forEach((sismo) => {
      const emoji = sismo.Magnitud >= 5 ? "😨" : "😊";
      // ...se crea una tarjeta con magnitud, fecha, profundidad y ubicación
    });
  });
```

Cada vez que recargas la página obtienes la información más reciente. 🔄

Es un ejemplo perfecto para quienes están aprendiendo a [consumir APIs desde el navegador con `fetch`](#) y quieren ver resultados reales en pocas líneas de código.

---

## 💻 Pruébalo en tu equipo

No necesitas instalar nada. Solo clona el repositorio:

```bash
git clone https://github.com/KrlitosForever/Chile-Sismos-Tracker.git
```

y abre el archivo `index.html` en tu navegador favorito. ✅

---

## 🤝 Súmate al proyecto

Chile Sismos Tracker es **open source** bajo la licencia **GNU GPL v3**: puedes usarlo, estudiarlo y modificarlo, siempre que tus mejoras también sean públicas.

¿Ideas para llevarlo al siguiente nivel? Se nos ocurren varias:

- 🗺️ Un **mapa** con la ubicación de cada sismo
- 🎚️ Más **niveles de emojis** según la magnitud
- 🔔 **Notificaciones** cuando ocurra un sismo fuerte
- 📊 **Gráficos** con la actividad de los últimos días

Si te animas, haz un **fork**, crea tu rama, programa tu idea y envía un **Pull Request**. [¡Toda contribución suma!](https://github.com/KrlitosForever/Chile-Sismos-Tracker)

---

## 🚀 La próxima vez que tiemble…

…ya sabes dónde mirar. 😉

- 🌐 **Web:** [sismos.clubinformatico.cl](https://sismos.clubinformatico.cl/)
- 💻 **Repositorio:** [github.com/KrlitosForever/Chile-Sismos-Tracker](https://github.com/KrlitosForever/Chile-Sismos-Tracker)

Compártelo con tu familia y amistades, y cuéntanos qué te parece.  
¡Nos vemos en el próximo proyecto! 💻✨
