# spacegarbagecollector

## Lore
"Post sociedad avanzada que ya ha contaminado el universo 666 dcc.(despues.de.cristo.cibernetico.A.I.)"
Jugador: recoje basura para avanzar / (sobre)vivir
Medios:
- gran carguero /cantidad:1 (donde navega el jugador entre sistemas/mapas)
- naves orbitales recojemierda (NOR) /cantidad:x
- tecnologias 2 ramas -> carguero / NOR
  - carguero -> sacar beneficio de la recolección ++
  - NOR -> recolectar ++
## Referencias
   - [Advent Incremental/Idle](https://paperpilot.dev/advent/)
   - [IdleLoop](https://lloyd-delacroix.github.io/omsi-loops/) Esto es tmb un juego en github.
   - [dodecadragons](https://demonin.com/games/dodecaDragons/)

## Ideas para el gameplay
   - La primera (1) vista, "orbital" centrada en un planeta que permita estas acciones:
      - Mejorar las partes de la nave (de momento: colector, procesador y fabricación)
      - Modificar la posición orbital de la nave respecto al planeta
      - Escanear nuevas posibles fuentes o "nubes" de basura orbital
      - Pasar a la vista 2 para ver el sistema al que el planeta pertenece.
   - La segunda (2) vista de todo el sistema solar:
      - Elegir un planeta para pasar a la vista 1
      - Gestión/Mejoras/Investigación
      - Obtener métricas de la flota.  
En la vista 1 se podrá ir obteniendo una serie de paquetes de basura de cada una de las nubes que podrán ser procesados para generar materiales. Propuesta de tipos de basura inicial: blanca, azul, verde y púrpura. Cada nube de basura orbital podrá tener un color afín a la basura que en mayor medida permita recolectar -> si la nube es blanca, en mayor medida se recolectará basura blanca, pero un pequeño porcentaje del total podrá ser de otro color, en el caso inicial podría ser azul (esto podría seguir una distribución fija tipo 95% de la basura es blanca y un 5% azul). De la basura que se vaya acumulando se podrá ir mejorando un procesador que convertirá la basura de cada color en un material en función de las recetas disponibles. La propuesta de tipos de material inicial es: materiales metálicos, plásticos, orgánicos, materiales compuestos?, materiales líquidos?(liquidos congelados:que se fusionen al recogerlos, o gotas de metales; gotas de refrigerante -> amoníaco, Na, K) , materiales gaseosos (p.e. 100% dependientes del planeta ya que "nubes o cúmulos" de gas son demasiado inestables como para que sea creible la sensación de "farmearlo"), materiales por tamaño (Tam>1m, 10cm>Tam>1m, Tam<10cm).
Propiedades de Nubes de basura orbital: color (distribución de la basura que otorgará), densidad, altura de la órbita LEO,MEO,GEO.
### Mejoras
#### Nave
- Drones

## Ideas para HUD y vista final

   - Ejemplo de una imagen con un HUD retro que da una idea || [wing-commander-1990](https://github.com/user-attachments/assets/838cef7a-5df0-4160-ab0f-a048449ab954)
