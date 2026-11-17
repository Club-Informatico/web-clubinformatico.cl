---
Title: Temporizador para presentaciones: controla tu tiempo con un semáforo 🚦⏱️
Date: 2026-11-21 19:00
Category: Proyectos  
Authors: Carlos Carrasco  
Summary: Te presentamos un temporizador web pensado para charlas y eventos, que cambia el fondo de verde a amarillo y luego a rojo para que quien expone sepa de un vistazo cuánto tiempo le queda.  
Header_Image: images/2026/temporizador-presentaciones.svg  
---

## 🎤 "Te quedan cinco minutos…"

Si alguna vez has dado una charla, sabes lo difícil que es manejar el tiempo.  
Estás concentrado en tu tema, con los nervios a flor de piel, y de pronto alguien del público te hace señas porque **ya te pasaste**. 😅

Para evitar ese momento incómodo nace el **Temporizador para presentaciones**, un proyecto del Club pensado para que [quien expone pueda controlar su tiempo sin perder el hilo](#).

👉 **Úsalo ahora:** [temporizador-presentaciones.clubinformatico.cl](https://temporizador-presentaciones.clubinformatico.cl)

---

## 🚦 ¿De qué se trata?

Es un **temporizador web de cuenta regresiva** que ocupa toda la pantalla y funciona como un **semáforo**: el color de fondo cambia a medida que avanza el tiempo.

| Etapa | Color | Qué significa |
|:-:|:-:|:-|
| Primer tercio | 🟢 Verde | Vas bien, tienes tiempo de sobra |
| Segundo tercio | 🟡 Amarillo | Ve preparando las ideas principales |
| Último tercio | 🔴 Rojo | ¡Hora de cerrar! |

La gracia es que [no necesitas leer los números para saber cómo vas](#). Basta una mirada rápida a la pantalla, aunque estés al otro lado del escenario.

---

## ✨ Funcionalidades

- ⏱️ **Cuenta regresiva configurable** (por defecto, 15 minutos)
- 🎨 **Cambio progresivo de colores**: verde, amarillo y rojo
- 🔢 **Números grandes y legibles** a pantalla completa
- 🌈 **Transiciones suaves** entre un color y otro
- 💬 **Ventana emergente** para elegir la duración al abrir la página

---

## 🎮 ¿Cómo se usa?

1. Abre la página y aparecerá una ventana para **configurar el tiempo** 💬
2. Escribe los **minutos** de tu presentación (por ejemplo, `15`) ✍️
3. El temporizador **parte de inmediato** ▶️
4. Proyéctalo o déjalo en una pantalla que puedas ver mientras hablas 🖥️
5. ¡Deja que los colores te avisen cómo vas! 🚦

> 💡 **Pro tip:** ideal para meetups, clases, defensas de proyectos, hackatones o cualquier evento con varias personas exponiendo en tiempos acotados.

---

## 🛠️ ¿Cómo funciona por dentro?

El proyecto es pequeño y muy fácil de entender. Está hecho con **HTML5, CSS3 y JavaScript (ES6)**, repartido en tres archivos: `index.html`, `styles.css` y `script.js`.

El corazón del temporizador es una función que calcula **qué fracción del tiempo ya pasó** y, según eso, elige el color:

```javascript
function updateBackgroundColor() {
    let elapsed = totalTime - remainingTime;
    let fraction = elapsed / totalTime;

    if (fraction <= 1/3) {
        document.body.style.backgroundColor = 'green';
    } else if (fraction <= 2/3) {
        document.body.style.backgroundColor = 'yellow';
    } else {
        document.body.style.backgroundColor = 'red';
    }
}
```

Un `setInterval` descuenta un segundo cada vez, actualiza los números y llama a esta función. Simple y efectivo. ✅

Es un gran ejemplo para quienes están comenzando con JavaScript y quieren practicar [temporizadores, manipulación del DOM y estilos dinámicos](#).

---

## 🎨 Hazlo tuyo

Personalizarlo es muy sencillo:

- ⏳ Cambia la duración por defecto en la variable `totalTime` de `script.js`
- 🌈 Elige otros colores en la función `updateBackgroundColor()`
- 🔠 Ajusta el tamaño de los números en `styles.css`

Y para probarlo en tu equipo no necesitas instalar nada:

```bash
git clone https://github.com/KrlitosForever/Temporizador-presentaciones.git
```

Luego abre el archivo `index.html` en tu navegador favorito. ¡Listo! 🚀

---

## 🤝 Súmate al proyecto

¿Se te ocurre cómo mejorarlo? Algunas ideas para empezar:

- ⏸️ Botones para **pausar y reiniciar**
- 🔊 Un **sonido** cuando el tiempo se acabe
- ⏰ Mostrar el **tiempo extra** cuando alguien se pase
- 🎚️ Elegir **en qué momento** cambia cada color

Las contribuciones son bienvenidas: abre un **issue** o envía un **Pull Request** en el [repositorio del proyecto](https://github.com/KrlitosForever/Temporizador-presentaciones).

---

## 🚀 Tu próxima charla, a tiempo

La próxima vez que te toque exponer, deja que el semáforo te acompañe. 🚦

- 🌐 **Web:** [temporizador-presentaciones.clubinformatico.cl](https://temporizador-presentaciones.clubinformatico.cl)
- 💻 **Repositorio:** [github.com/KrlitosForever/Temporizador-presentaciones](https://github.com/KrlitosForever/Temporizador-presentaciones)

Compártelo con quienes organizan eventos y cuéntanos cómo te fue.  
¡Nos vemos en el próximo proyecto! 💻✨
