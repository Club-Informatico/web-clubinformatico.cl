---
Title: El Bramador: la leyenda del cerro que canta, ahora como novela gráfica ⛰️🔊
Date: 2026-11-27 19:00
Category: Proyectos  
Authors: Carlos Carrasco  
Summary: Te presentamos El Bramador, una novela visual ambientada en el Copiapó de 1839, en plena fiebre de la plata, inspirada en la leyenda del Cerro Bramador. Tiene 4 finales, arte y sonido generados por código y un bramido recreado a partir de una grabación real. Puedes jugarla gratis desde tu navegador.  
Header_Image: images/2026/ng-el-bramador.svg  
---

## ⛰️ *"Donde la arena no canta, ahí está la puerta."*

> **Copiapó, invierno de 1839**, en plena fiebre de la plata. **Matías Ardiles**, cateador arruinado, recibe de su viejo amigo Celestino un **derrotero** que lleva al **Cerro Bramador**.
>
> **Don Fermín Cisternas**, el habilitador que se hizo rico de la noche a la mañana hace diez años, les financia la expedición… **con una condición**. 🤝

Si eres de Copiapó, seguro has escuchado hablar del **Cerro Bramador**: ese cerro de arena al poniente de la ciudad que, dicen, **brama** cuando el viento sopla o cuando alguien lo pisa. Y si no lo conocías… prepárate, porque la leyenda es tan buena como el sonido. 😮

Después de [La Chaqueta]({filename}26-11-2026_NG-la-chaqueta.md), el Club presenta su segunda novela gráfica basada en una leyenda local: **El Bramador**.

👉 **Juégala ahora, gratis y desde tu navegador:** [ng-el-bramador.clubinformatico.cl](https://ng-el-bramador.clubinformatico.cl/)

---

## 📖 ¿De qué se trata?

El Bramador es una **novela visual** de misterio en español: una historia ilustrada, con música y efectos de sonido, donde **tus decisiones cambian el destino** de los personajes.

- ⏱️ **Duración:** entre 25 y 35 minutos
- 📚 **Estructura:** prólogo, 4 capítulos y **4 finales distintos**
- 🎨 **Arte y sonido originales**, generados completamente por código
- 🔊 **Un bramido recreado** a partir del análisis de una grabación real del cerro

Fortuna, tratos que conviene leer con cuidado y un cerro que parece tener vida propia. ¿Qué podría salir mal? 😅

---

## 🎭 Los personajes

| Personaje | Quién es |
|:-|:-|
| ⛏️ **Matías Ardiles** | El narrador. Cateador arruinado |
| 👩 **Rosario** | Su mujer |
| 🗺️ **Celestino Aracena** | Viejo amigo de Matías, quien trae el derrotero |
| 💰 **Don Fermín Cisternas** | Habilitador, rico de la noche a la mañana |
| 🌿 **Doña Tránsito** | La curandera |
| 🌀 **El Loco Ulises** | El loco del pueblo |
| 🎩 **El forastero** | Muy bien vestido. Aparece de noche junto a la fogata… |

---

## 🔀 Cuatro finales, una sola verdad

La historia tiene **cuatro finales**, y a cuál llegues depende de lo que decidas en el camino:

| | Final |
|:-:|:-|
| I | **El precio** |
| II | **El loco del Bramador** |
| III | **Arena** |
| IV | **La letra del trato** 🔒 |

El cuarto es el **final verdadero**, y para llegar a él tendrás que encontrar las pistas correctas. 🕵️

> 💡 **Lo mejor:** el juego **recuerda los finales que ya viste** y, al terminar, te da una pista para encontrar el que te falta. No te vamos a decir cómo llegar al final IV… eso te toca a ti. 😉

---

## 🔊 El bramido: la estrella del juego

Lo más impresionante de El Bramador es su **sonido**. El bramido del cerro es una **recreación original**, sintetizada a partir del análisis de una **grabación real del Cerro Bramador**:

- 🎵 Una nota muy grave, de entre **68 y 88 Hz** (el cerro "canta" cerca de un **Re grave**)
- 🌊 Un **ataque lento**, como de avalancha, con sus armónicos y un temblor en el volumen
- ⏳ Al entrar al cerro suena un **bramido de 30 segundos** que imita la forma de la grabación real: parte lento, se sostiene cerca de 70 Hz y al final sube antes de apagarse

Y un detalle muy bien pensado: al iniciar cada partida, el juego te pregunta **cómo quieres escucharlo**:

- 🔈 **Bramido completo:** como suena el cerro de verdad
- 🎧 **Bramido suave:** quita la nota más grave para que vibre menos, ideal con audífonos

Puedes cambiar de modo cuando quieras con la tecla **B**. 🎚️

> 🎧 **Recomendación:** juégala con audífonos o buenos parlantes. El bramido se siente más de lo que se escucha.

---

## 🏜️ Historia real detrás de la leyenda

La novela mezcla ficción con **historia real de Atacama**:

- ⛰️ **El Cerro Bramador** existe: está en el **sector Toledo**, al poniente de Copiapó, y su bramido es real
- **El descubrimiento de Chañarcillo en 1832** desató la **fiebre de la plata** que vivía Copiapó en esa época
- En **1835**, un naturalista inglés que pasó por Copiapó escuchó a los lugareños hablar del "Bramador"… ese naturalista era nada menos que **Charles Darwin** (en el juego no se le nombra)

Los personajes y la compañía minera **"La Fortuna del Poniente"** son inventados para la historia. Y lo que hay **adentro del cerro**… también. O eso dicen. 👀

---

## 🛠️ ¿Cómo está hecha?

Igual que La Chaqueta, El Bramador está hecha con **[Ren'Py](https://www.renpy.org)**, el motor gratuito y open source para novelas visuales basado en **Python**. Y, otra vez, **todo el arte y el audio fueron generados por código**. 🤯

- 🖼️ **14 fondos**, **5 escenas especiales** y **14 sprites** de personajes creados con scripts de Python
- 🎵 Música, efectos y **todos los bramidos** sintetizados con `numpy` y `scipy`
- ✅ Un validador propio (`validar_renpy.py`) para revisar el guion
- 🌐 **Descarga progresiva** en la versión web: imágenes y música se descargan a medida que se necesitan, así el juego parte más rápido

```
NG-El-Bramador/
├── game/
│   ├── script.rpy                  Guion completo
│   ├── bramador_definiciones.rpy   Personajes, imágenes y sonido
│   ├── images/                     Fondos, escenas, sprites y menús
│   └── audio/                      Música, bramidos y efectos
├── herramientas/                   Scripts que generaron el arte y el sonido
└── progressive_download.txt        Descarga progresiva para la web
```

Es un ejemplo fascinante de cómo se puede usar la **programación y la física del sonido** para [darle vida a una leyenda](#). 🎮

---

## 💻 Juégala en tu computador

Esta vez es todavía más fácil, porque el repositorio **ya es un proyecto completo de Ren'Py**:

1. Descarga el **SDK de Ren'Py 8** desde [renpy.org](https://www.renpy.org/latest.html)
2. Clona el repositorio:

```bash
git clone https://github.com/Club-Informatico/NG-El-Bramador.git
```

3. En el launcher, ve a **Preferencias → Directorio de proyectos** y elige la carpeta que contiene `NG-El-Bramador`
4. Haz clic en **Actualizar**, selecciona **NG-El-Bramador** y luego **Lanzar proyecto** 🚀

---

## 🤝 Súmate al proyecto

El Bramador es **open source** bajo la licencia **GNU GPL v3** y está en la cuenta del **Club Informático** en GitHub.

Algunas ideas para colaborar:

- ✍️ Escribir **nuevas escenas** o un quinto final
- 🎨 Mejorar el **arte** de fondos y personajes
- 🔊 Experimentar con nuevas **síntesis del bramido**
- 🌎 **Traducirla** a otros idiomas
- 👻 Proponer **la próxima leyenda** de Atacama para convertir en novela

[¡Toda contribución suma!](https://github.com/Club-Informatico/NG-El-Bramador)

---

## ⛰️ ¿Escuchas eso?

Ponte audífonos, apaga la luz y acércate a la fogata. 🔥

- 🌐 **Juega aquí:** [ng-el-bramador.clubinformatico.cl](https://ng-el-bramador.clubinformatico.cl/)
- 💻 **Repositorio:** [github.com/Club-Informatico/NG-El-Bramador](https://github.com/Club-Informatico/NG-El-Bramador)

Y cuando termines, cuéntanos: **¿cuántos finales lograste descubrir?** 🏆  
¡Nos vemos en el próximo proyecto! 💻✨
