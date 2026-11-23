---
Title: La Chaqueta: una leyenda de Copiapó convertida en novela gráfica 🧥👻
Date: 2026-11-26 19:00
Category: Proyectos  
Authors: Carlos Carrasco  
Summary: Te presentamos La Chaqueta, una novela visual de terror y misterio ambientada en Copiapó, inspirada en el mito popular de la chaqueta. Hecha con Ren'Py, con arte y música originales generados por código, y que puedes jugar gratis desde tu navegador.  
Header_Image: images/2026/ng-la-chaqueta.svg  
---

## 🌙 Copiapó, domingo 8 de noviembre…

> **Rodolfo Pizarro**, taxista nocturno, recoge bajo los pimientos de la **Plaza Prat** a una muchacha que lleva una **chaqueta de lana roja** que le queda enorme. Le da una dirección que parece de lo más normal: *"Pasaje Los Pimientos 2347"*.
>
> El reloj del auto se detiene a las **23:47**, el taxímetro marca en **escudos**… y la chaqueta se queda en el asiento. 🧥

¿Te suena? Seguramente alguna vez escuchaste una versión de esta historia: la del pasajero que se sube a un auto de noche, deja olvidada una prenda y luego… bueno, mejor no te contamos más. 😶

Así nace **La Chaqueta**, una **novela gráfica interactiva** del Club que toma este [mito popular y lo lleva a las calles de Copiapó](#).

👉 **Juégala ahora, gratis y desde tu navegador:** [ng-la-chaqueta.clubinformatico.cl](https://ng-la-chaqueta.clubinformatico.cl/)

---

## 📖 ¿De qué se trata?

La Chaqueta es una **novela visual de terror y misterio**: una historia que lees como un cómic animado, con música y efectos de sonido, y en la que **tú tomas decisiones** a lo largo del camino.

- ⏱️ **Duración:** entre 20 y 30 minutos de lectura
- 📚 **Estructura:** prólogo, 6 capítulos y epílogo
- 🎨 **Arte y sonido originales**, generados completamente por código
- **En español** y con mucho sabor nortino

Es perfecta para una noche tranquila… o no tan tranquila. 👀

---

## 🎭 Los personajes

| Personaje | Quién es |
|:-|:-|
| 🚕 **Rodolfo Pizarro** | Taxista nocturno de Copiapó y quien narra la historia |
| 🧥 **La pasajera** | La misteriosa muchacha de la chaqueta roja |
| 👴 **Tomás** | El papá de Rodolfo |
| 🧔 **Don Lucho** | El taxista más antiguo de Copiapó |
| 🕯️ **Don Arsenio** | Cuidador del cementerio |

---

## 🔀 Tus decisiones importan

A lo largo de la historia tendrás que elegir qué hacer. Algunos ejemplos (sin spoilers, prometido 🤐):

- 🖼️ ¿Das vuelta la foto que está boca abajo en la casa de tu papá?
- 🚕 En el taxi eliges **2 de 3 acciones**: preguntarle de dónde viene, prender la radio o mirarla por el espejo
- ✉️ ¿Abres el sobre… o no?
- 💬 ¿Qué le dices a la pasajera al final?

Todas las rutas llegan al **mismo final**, pero cada decisión cambia los **diálogos, las pistas que descubres y los detalles** de la historia. Así que vale la pena jugarla más de una vez. 🔁

---

## 🏜️ Copiapó como escenario

Uno de los detalles más bonitos del proyecto es que la historia ocurre en **lugares reales de Copiapó**:

- 🌳 La **Plaza Prat** con sus pimientos
- 🛣️ La **avenida Copayapu**
- ⚰️ El **cementerio de la avenida La Paz**
- 🏔️ La salida a **Tierra Amarilla**

Los personajes, la **Radio Chañarcillo**, la empresa **"Estrella del Norte"** y el famoso **"Pasaje Los Pimientos"** son inventados para la historia.

> 💰 **Dato curioso:** los **escudos (E°)** que marca el taxímetro fueron la moneda oficial de Chile entre **1960 y 1975**. ¿Por qué un taxímetro marcaría en escudos? Tendrás que jugarla para descubrirlo. 😉

---

## 🛠️ ¿Cómo está hecha?

La Chaqueta está construida con **[Ren'Py](https://www.renpy.org)**, un motor gratuito y open source para crear novelas visuales usando **Python**.

Y aquí viene lo más interesante para quienes programan: **todo el arte y la música fueron generados por código**. 🤯

- 🖼️ **11 fondos**, **12 escenas especiales** y **9 sprites de personajes**, creados con scripts de Python
- 🎵 **5 piezas musicales** y **8 efectos de sonido** sintetizados con `numpy` y `scipy`
- ✅ Un **validador propio** (`validar_renpy.py`) que revisa el guion: indentación, saltos, imágenes, audio y personajes
- 🌐 Una **versión web** que permite jugarla en el navegador sin instalar nada

El repositorio está muy bien ordenado:

```
game/
├── script.rpy                 Guion completo
├── leyenda_definiciones.rpy   Personajes, imágenes y sonidos
├── images/                    Fondos, escenas, sprites y menús
├── audio/                     Música y efectos originales
└── fonts/                     Tipografía DejaVu Serif

herramientas/
├── arte/                      Scripts que generan el arte
├── sonido/                    Script que sintetiza la música
└── validar_renpy.py           Revisión rápida del guion
```

Es un ejemplo increíble para quienes quieren aprender a [contar historias con código](#) o dar sus primeros pasos en el desarrollo de videojuegos narrativos. 🎮

---

## 💻 Juégala en tu computador

Si prefieres jugarla en tu equipo o modificarla:

1. Descarga **Ren'Py 8** desde [renpy.org](https://www.renpy.org)
2. En el launcher, crea un **proyecto nuevo** llamado `La Chaqueta` con resolución **1920x1080** ⚠️
3. Clona el repositorio:

```bash
git clone https://github.com/Club-Informatico/NG-La-Chaqueta.git
```

4. Copia el contenido de la carpeta `game/` del repositorio dentro de la carpeta `game` de tu proyecto
5. Haz clic en **"Lanzar proyecto"** y… que empiece el viaje. 🚕

> 💡 **¿Usas macOS?** Al copiar la carpeta, mantén presionada la tecla **Opción (⌥)** y elige **"Combinar"** en vez de "Reemplazar". El README del repositorio explica este y otros detalles.

---

## 🤝 Súmate al proyecto

La Chaqueta es **open source** bajo la licencia **GNU GPL v3**, y está en la cuenta del **Club Informático** en GitHub. Puedes estudiarla, modificarla y crear tu propia versión.

Algunas ideas para colaborar:

- ✍️ Escribir **nuevas escenas** o rutas alternativas
- 🎨 Mejorar o reemplazar el **arte** de fondos y personajes
- 🎵 Componer **nueva música** para la historia
- 🌎 **Traducirla** a otros idiomas
- 👻 Crear una **nueva novela** con otra leyenda de nuestra región

[¡Toda contribución suma!](https://github.com/Club-Informatico/NG-La-Chaqueta)

---

## 🧥 ¿Te atreves a subirla al taxi?

Apaga la luz, ponte audífonos y dale una oportunidad. 🎧

- 🌐 **Juega aquí:** [ng-la-chaqueta.clubinformatico.cl](https://ng-la-chaqueta.clubinformatico.cl/)
- 💻 **Repositorio:** [github.com/Club-Informatico/NG-La-Chaqueta](https://github.com/Club-Informatico/NG-La-Chaqueta)

Y cuando termines, cuéntanos: **¿qué le dijiste a la pasajera al final?** 👻  
¡Nos vemos en el próximo proyecto! 💻✨
