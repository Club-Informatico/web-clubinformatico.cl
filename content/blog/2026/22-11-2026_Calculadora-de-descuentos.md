---
Title: Calculadora de descuentos: saca la cuenta antes de pasar por caja 🛍️💸
Date: 2026-11-22 19:00
Category: Proyectos  
Authors: Carlos Carrasco  
Summary: Te presentamos la Calculadora de descuentos, una app web open source que te dice al instante cuánto pagarás por un producto rebajado. Se puede instalar en el celular y funciona incluso sin internet.  
Header_Image: images/2026/calculadora-descuentos.svg  
---

## 🛍️ "¿Y cuánto queda con el 35%?"

Estás en el mall, ves un cartel gigante de **"35% OFF"** y empieza el cálculo mental…  
¿Cuánto era el 10%? ¿Lo multiplico por tres y medio? ¿Y si mejor saco el celular? 😅

Y si andas con tu pareja, la pregunta llega sí o sí. Para esos momentos nace la **Calculadora de descuentos**, un proyecto del Club pensado para [saber al tiro cuánto vas a pagar, sin sacar cuentas a mano](#).

👉 **Pruébala ahora:** [calculadora-descuentos.clubinformatico.cl](https://calculadora-descuentos.clubinformatico.cl/)

---

## 💸 ¿De qué se trata?

Es una **app web muy simple** con solo dos campos:

1. 🏷️ **Precio original** del producto
2. 📉 **Porcentaje de descuento**

Y listo: mientras escribes, la app te muestra el **precio final con descuento**. No hay botón de "calcular" ni pasos extra. ⚡

> Ejemplo: un producto de **$49.990** con **35%** de descuento queda en **$32.493,5**. 😎

---

## ✨ Funcionalidades

- ⚡ **Cálculo automático** mientras escribes
- 💰 **Formato con separador de miles** para leer los precios sin enredarse
- 📱 **Diseño responsive**, pensado especialmente para el celular
- 🖥️ **Interfaz limpia e intuitiva**, inspirada en el estilo de iOS
- 📲 **Se puede instalar** en tu pantalla de inicio como si fuera una app
- 📴 **Funciona sin internet**, ideal para el subterráneo del mall

---

## 📲 Una app que vive en tu celular

Esta es la parte más entretenida del proyecto: la calculadora es una **PWA** (*Progressive Web App*).

¿Qué significa eso? Que además de usarla desde el navegador, puedes **instalarla en tu teléfono** y abrirla desde la pantalla de inicio, a pantalla completa, como cualquier otra app. 🙌

Para lograrlo, el proyecto incluye dos piezas clave:

- 📄 **`manifest.webmanifest`**: define el nombre, los íconos y los colores de la app al instalarla
- ⚙️ **`sw.js`** (*Service Worker*): guarda la app en caché para que **funcione sin conexión**

**¿Cómo instalarla?**

- 🍎 **iPhone (Safari):** botón *Compartir* → *Agregar a inicio*
- 🤖 **Android (Chrome):** menú ⋮ → *Instalar app* o *Agregar a pantalla principal*

---

## 🛠️ ¿Cómo funciona por dentro?

Está construida con **HTML5, CSS3 y JavaScript (ES6)**, sin frameworks ni dependencias.

El cálculo es tan simple como efectivo:

```javascript
var descuentoAplicado = precio * (descuento / 100);
var precioFinal = precio - descuentoAplicado;

// Formateamos el precio final con separadores de miles
var precioFormateado = precioFinal.toLocaleString('es-ES');
```

Cada campo tiene un evento `oninput`, así que el resultado se actualiza **con cada tecla**. Y si alguien escribe valores negativos, la app avisa. ✅

Es un excelente proyecto para quienes quieren dar el salto de una web común a una [Progressive Web App con soporte offline](#), viendo un ejemplo real y fácil de entender.

---

## 💻 Pruébala en tu equipo

No necesitas instalar nada. Clona el repositorio:

```bash
git clone https://github.com/KrlitosForever/Calculadora-descuentos.git
cd Calculadora-descuentos
```

y abre `index.html` en tu navegador favorito. 🚀

> ℹ️ Para probar la instalación y el modo offline, el Service Worker necesita servirse desde `localhost` o HTTPS. Un `python -m http.server` en la carpeta del proyecto es suficiente.

---

## 🤝 Súmate al proyecto

La Calculadora de descuentos es **open source** bajo la licencia **GNU GPL v3**: puedes usarla, estudiarla y modificarla, siempre que tus mejoras también sean públicas.

Algunas ideas para llevarla más lejos:

- 💵 Mostrar **cuánto te ahorras** además del precio final
- ➕ Aplicar **descuentos acumulados** (por ejemplo, 30% + 10% extra)
- 🧾 Llevar una **lista de compras** con el total
- 🌙 Agregar un **modo oscuro**

¿Te animas? Haz un **fork**, crea tu rama, programa tu idea y abre un **Pull Request**. [¡Toda contribución suma!](https://github.com/KrlitosForever/Calculadora-descuentos)

---

## 🚀 La próxima vez que veas un "OFF"…

…ya sabes qué hacer. 😉

- 🌐 **Web:** [calculadora-descuentos.clubinformatico.cl](https://calculadora-descuentos.clubinformatico.cl/)
- 💻 **Repositorio:** [github.com/KrlitosForever/Calculadora-descuentos](https://github.com/KrlitosForever/Calculadora-descuentos)

Instálala en tu celular, compártela con tu familia y, si te gusta, regálale una ⭐ en GitHub.  
¡Nos vemos en el próximo proyecto! 💻✨
