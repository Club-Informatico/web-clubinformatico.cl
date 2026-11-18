---
Title: Calculadora IMC: tu índice de masa corporal en segundos ⚖️📱
Date: 2026-11-24 19:00
Category: Proyectos  
Authors: Carlos Carrasco  
Summary: Te presentamos la Calculadora IMC, una app web open source con estilo iOS que calcula tu índice de masa corporal al instante. Se instala en el celular, tiene modo oscuro y funciona 100% sin internet.  
Header_Image: images/2026/calculadora-imc.svg  
---

## ⚖️ ¿Cuánto es mi IMC?

El **Índice de Masa Corporal (IMC)** es uno de esos datos que aparecen en controles de salud, clases de educación física o consultas médicas.  
La fórmula no es difícil, pero entre pasar los centímetros a metros, elevar al cuadrado y dividir… siempre se agradece una ayuda. 😅

Así nace la **Calculadora IMC**, un proyecto del Club pensado para [calcular tu IMC en segundos, desde cualquier dispositivo y sin necesidad de internet](#).

👉 **Pruébala ahora:** [calculadora-imc.clubinformatico.cl](https://calculadora-imc.clubinformatico.cl)

---

## 📱 ¿De qué se trata?

Es una **app web** muy simple de usar:

1. 📏 Ingresa tu **altura** en centímetros
2. ⚖️ Ingresa tu **peso** en kilogramos
3. 👆 Presiona **"Calcular IMC"**

Al instante verás tu **IMC con un decimal** y una **categoría de referencia** destacada con color. Después, los campos se limpian solos para que puedas **calcular otro IMC sin recargar la página**. ⚡

> Ejemplo: una persona de **170 cm** y **65 kg** tiene un IMC de **22,5**, que está en el rango *saludable*. 💚

---

## 🎨 Categorías con color

El resultado se muestra con un color según el rango de referencia:

| IMC | Categoría | Color |
|:-:|:-|:-:|
| Menos de 18,5 | Bajo peso | 🟠 |
| 18,5 a 24,9 | Saludable | 🟢 |
| 25 a 29,9 | Sobrepeso | 🟠 |
| 30 a 34,9 | Obesidad | 🔴 |
| 35 o más | Obesidad extrema | 🟤 |

> ⚠️ **Importante:** la app está pensada como apoyo para adolescentes, siguiendo los criterios de referencia del **MINSAL**, y entrega **solo una referencia general**. En adolescentes, un diagnóstico real requiere comparar el IMC con las **curvas de crecimiento de la OMS** según la edad exacta y el sexo biológico. Ante cualquier duda, consulta con un profesional de la salud. 🩺

---

## ✨ Funcionalidades

- ⚡ **Cálculo instantáneo** y flujo continuo para varios cálculos seguidos
- 🍏 **Diseño estilo iOS**, inspirado en las *Human Interface Guidelines* de Apple
- 🌙 **Modo oscuro automático** según la preferencia de tu sistema
- 📲 **Instalable** en la pantalla de inicio como una app nativa
- 📴 **Funciona 100% offline** una vez instalada
- 📱 **Compatible con notch y Dynamic Island**, respetando las áreas seguras de la pantalla
- 🔢 **Acepta punto o coma** decimal (`172.5` o `172,5`), ideal para el teclado de iOS en español

---

## 📲 Una app en tu bolsillo

La Calculadora IMC es una **Progressive Web App (PWA)**: gracias a su `manifest.json` y a un *Service Worker* que guarda todos sus archivos, puedes instalarla y usarla **sin conexión a internet**. No tiene backend, así que **tus datos nunca salen de tu dispositivo**. 🔒

**¿Cómo instalarla?**

- 🍎 **iPhone (Safari):** botón *Compartir* → *Agregar a pantalla de inicio*
- 🤖 **Android (Chrome):** menú ⋮ → *Instalar app* o *Agregar a pantalla principal*

---

## 🛠️ ¿Cómo funciona por dentro?

El proyecto está hecho con **HTML, CSS y JavaScript puro**, sin frameworks ni proceso de compilación, y está bien ordenado en carpetas (`css/`, `js/` e `icons/`).

El cálculo usa la fórmula clásica del IMC: **peso ÷ altura²**.

```javascript
// Transformación matemática: cm a metros
const alturaM = alturaCm / 100;
const imc = pesoKg / (alturaM * alturaM);

// Mostrar resultado (1 decimal)
imcValor.textContent = imc.toFixed(1);
```

Un detalle muy bien pensado: el teclado decimal de iOS en español escribe **coma** en vez de punto, así que la app convierte la coma antes de calcular. ✅

```javascript
const parseDecimal = valor => parseFloat(String(valor).replace(',', '.'));
```

Es un excelente ejemplo para aprender a crear una [PWA offline con estética nativa](#), con modo oscuro y soporte para pantallas con notch, todo en muy pocas líneas.

---

## 💻 Pruébala en tu equipo

Clona el repositorio:

```bash
git clone https://github.com/KrlitosForever/Calculadora-IMC.git
cd Calculadora-IMC
```

Como es una app estática, basta con levantar un servidor HTTP simple:

```bash
python3 -m http.server 8000
```

y abrir `http://localhost:8000` en tu navegador. 🚀

---

## 🤝 Súmate al proyecto

La Calculadora IMC es **open source** bajo la licencia **GNU GPL v3**: puedes usarla, estudiarla y modificarla, siempre que tus mejoras también sean públicas.

Algunas ideas para llevarla más lejos:

- 📈 Incorporar las **curvas de crecimiento OMS** según edad y sexo
- 🗂️ Guardar un **historial** de mediciones en el dispositivo
- 📊 Mostrar el resultado en una **barra o gráfico** de rangos
- 🧮 Calcular el **rango de peso saludable** según la altura

Haz un **fork**, crea tu rama y envía un **Pull Request**. [¡Toda contribución suma!](https://github.com/KrlitosForever/Calculadora-IMC)

---

## 🚀 Tu IMC, siempre a mano

Instálala en tu celular y tenla lista para cuando la necesites. ⚖️

- 🌐 **Web:** [calculadora-imc.clubinformatico.cl](https://calculadora-imc.clubinformatico.cl)
- 💻 **Repositorio:** [github.com/KrlitosForever/Calculadora-IMC](https://github.com/KrlitosForever/Calculadora-IMC)

Compártela con tu familia, amistades o tu curso.  
¡Nos vemos en el próximo proyecto! 💻✨
