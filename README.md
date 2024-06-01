    # React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

______________________________________________________

1º Instalo react-router-dom para hacer que mi componente navegue según mi usuario esté o no Logeado. 
2º. Creo un componente de api de Java Script, donde haré la petición a mi api, con la información de cada comida que mostraré después.
3º. Creo el componente de FoodList, donde mostrare en mi web el listado de las comidas, con su información(nombre, imagen, descripción, etc).
4º Creo el componente Recipe, con cada item que quiero mostrar posteriormente en mi web a través de FoodList, y se lo mando por props a foodList, añandiéndolo después también a nuestra app para que se muestre finalmente en el html el listado de cada receta con su informacion.#   R E A C T - F I N A L - P R O Y E C T 
 
 #   R E A C T - F I N A L - P R O Y E C T 
 
 



[
  {
    "menu": [
      {
        "day": "Lunes",
        "meals": [
          {
            "id": "1",
            "name": "Tosta de Atun y Aguacate",
            "image": "https://d36fw6y2wq3bat.cloudfront.net/recipes/desayuno-completo-de-tostadas-de-atun-y-aguacate/900/desayuno-completo-de-tostadas-de-atun-y-aguacate_version_1683710001.jpg",
            "description": "Tosta de pan, con aguacate y atun por encima. Perfecta para desayunos o snacks",
            "type": "Desayuno",
            "ingredients": [
              "pan",
              "atun",
              "aguacate"
            ]
          },
          {
            "id": "2",
            "name": "Tostada de huevo escalfado",
            "image": "https://imagenes.20minutos.es/files/image_1920_1080/uploads/imagenes/2023/10/17/tostada-con-huevo-poche.jpeg",
            "description": "Tosta de pan, con aguacate y atun por encima. Perfecta para desayunos o snacks",
            "type": "Comida",
            "ingredients": [
              "pan",
              "huevo"
            ]
          },
          {
            "id": "3",
            "type": "Cena",
            "name": "Flan de platano al microondas",
            "image": "https://storage.googleapis.com/fitia-api-bucket/media/images/recipe_images/1009953.jpg",
            "taste": "dulce",
            "description": "Suave flan de plátano al microondas, fácil de hacer y perfecto para un snack o desayuno.",
            "ingredients": [
              "platano",
              "huevo",
              "leche"
            ]
          }
        ]
      },
      {
        "day": "Martes",
        "meals": [
          {
            "id": "4",
            "type": "Desayuno",
            "name": "Bowl de yogurt con chocolate y melocoton",
            "image": "https://storage.googleapis.com/fitia-api-bucket/media/images/recipe_images/1010930.jpg",
            "taste": "dulce",
            "description": "Yogurt mezclado en un bowl, junto con melocotón troceado y chocolate por encima.",
            "ingredients": [
              "yogurt",
              "melocoton",
              "chocolate"
            ]
          },
          {
            "id": "5",
            "type": "Comida",
            "name": "Omelette de champiñones con tostadas",
            "image": "https://storage.googleapis.com/fitia-api-bucket/media/images/recipe_images/1008201.jpg",
            "taste": "salado",
            "description": "Rica omelette rellena de champiñones a la sartén, acompañada de un par de tostadas. Perfectas para una cena suave.",
            "ingredients": [
              "huevos",
              "champiñones",
              "pan"
            ]
          },
          {
            "id": "6",
            "type": "Cena",
            "name": "Tostadas con jamon y tomate",
            "image": "https://ovipor.es/wp-content/uploads/2023/05/7-OVIPOR-JUN.2023-1-1.jpg",
            "taste": "salado",
            "description": "Ricas tostadas de jamon con tomate, perfectas para empezar el dia con energida y un buen desayuno típico español.",
            "ingredients": [
              "pan",
              "jamon",
              "tomate"
            ]
          }
        ]
      },
      {
        "day": "Miercoles",
        "meals": [
          {
            "type": "Desayuno",
            "id": "7",
            "name": "Muffins de Manzana y Platano",
            "image": "https://storage.googleapis.com/fitia-api-bucket/media/images/recipe_images/1001251.jpg",
            "taste": "dulce",
            "description": "Mezclando todos los ingrendientes en un bowl, y llevándolo al horno a 180 grados durante 15 o 20 min, obtenemos unos ricos muffins de manzana, que podremos acompañar después con el topping que prefiramos.",
            "ingredients": [
              "manzanas",
              "harina",
              "yogurt",
              "huevo",
              "platano",
              "miel"
            ]
          },
          {
            "type": "Comida",
            "id": "8",
            "name": "French Toast",
            "image": "https://storage.googleapis.com/fitia-api-bucket/media/images/recipe_images/1004609.jpg",
            "taste": "dulce",
            "description": "Mezclando todos los ingredientes y llevándolos a una sartén a fuego medio, obtendremos unas ricas French Toast para desayunar y empezar el día de la forma más dulce posible.",
            "ingredients": [
              "huevo",
              "pan de molde",
              "miel",
              "canela",
              "leche"
            ]
          },
          {
            "type": "Cena",
            "id": "9",
            "name": "Tosta de Atun y Aguacate",
            "image": "https://d36fw6y2wq3bat.cloudfront.net/recipes/desayuno-completo-de-tostadas-de-atun-y-aguacate/900/desayuno-completo-de-tostadas-de-atun-y-aguacate_version_1683710001.jpg",
            "description": "Tosta de pan, con aguacate y atun por encima. Perfecta para desayunos o snacks",
            "ingredients": [
              "pan",
              "atun",
              "aguacate"
            ]
          }
        ]
      },
      {
        "day": "Jueves",
        "meals": [
          {
            "type": "Desayuno",
            "id": "10",
            "name": "French Toast",
            "image": "https://storage.googleapis.com/fitia-api-bucket/media/images/recipe_images/1004609.jpg",
            "taste": "dulce",
            "description": "Mezclando todos los ingredientes y llevándolos a una sartén a fuego medio, obtendremos unas ricas French Toast para desayunar y empezar el día de la forma más dulce posible.",
            "ingredients": [
              "huevo",
              "pan de molde",
              "miel",
              "canela",
              "leche"
            ]
          },
          {
            "type": "Comida",
            "id": "11",
            "name": "Fajitas de ternera",
            "image": "https://storage.googleapis.com/fitia-api-bucket/media/images/recipe_images/1010301.jpg",
            "taste": "salado",
            "description": "En unas tortitas de trigo, mezclamos la ternera salteada con un poco de verduras y salsa al gusto. Perfecto para un almuerzo completo y no muy pesado.",
            "ingredients": [
              "ternera",
              "tortas de trigo",
              "pimientos",
              "aguacate"
            ]
          },
          {
            "id": "12",
            "type": "Cena",
            "name": "Tosta de Atun y Aguacate",
            "image": "https://d36fw6y2wq3bat.cloudfront.net/recipes/desayuno-completo-de-tostadas-de-atun-y-aguacate/900/desayuno-completo-de-tostadas-de-atun-y-aguacate_version_1683710001.jpg",
            "description": "Tosta de pan, con aguacate y atun por encima. Perfecta para desayunos o snacks",
            "ingredients": [
              "pan",
              "atun",
              "aguacate"
            ]
          }
        ]
      },
      {
        "day": "Viernes",
        "meals": [
          {
            "type": "Desayuno",
            "id": "13",
            "name": "Flan de platano al microondas",
            "image": "https://storage.googleapis.com/fitia-api-bucket/media/images/recipe_images/1009953.jpg",
            "taste": "dulce",
            "description": "Suave flan de plátano al microondas, fácil de hacer y perfecto para un snack o desayuno.",
            "ingredients": [
              "platano",
              "huevo",
              "leche"
            ]
          },
          {
            "id": "14",
            "type": "Comida",
            "name": "Tostadas con jamon y tomate",
            "image": "https://ovipor.es/wp-content/uploads/2023/05/7-OVIPOR-JUN.2023-1-1.jpg",
            "taste": "salado",
            "description": "Ricas tostadas de jamon con tomate, perfectas para empezar el dia con energida y un buen desayuno típico español.",
            "ingredients": [
              "pan",
              "jamon",
              "tomate"
            ]
          },
          {
            "id": "15",
            "type": "Cena",
            "name": "Tosta de Atun y Aguacate",
            "image": "https://d36fw6y2wq3bat.cloudfront.net/recipes/desayuno-completo-de-tostadas-de-atun-y-aguacate/900/desayuno-completo-de-tostadas-de-atun-y-aguacate_version_1683710001.jpg",
            "description": "Tosta de pan, con aguacate y atun por encima. Perfecta para desayunos o snacks",
            "ingredients": [
              "pan",
              "atun",
              "aguacate"
            ]
          }
        ]
      },
      {
        "day": "Sabado",
        "meals": [
          {
            "id": "16",
            "type": "Desayuno",
            "name": "Avena de Tiramisu",
            "image": "https://storage.googleapis.com/fitia-api-bucket/media/images/recipe_images/1010303.jpg",
            "taste": "dulce",
            "description": "Facil de preparar, mezclamos todos los ingredientes y lo dejamos durante toda la noche en la nevera. Obtenemos a la mañana siguiente una rica tiramisu de avena para desayunar.",
            "ingredients": [
              "yogurt",
              "avena",
              "cafe instantáneo",
              "chocolate"
            ]
          },
          {
            "id": "17",
            "type": "Comida",
            "name": "Tosta de Atun y Aguacate",
            "image": "https://d36fw6y2wq3bat.cloudfront.net/recipes/desayuno-completo-de-tostadas-de-atun-y-aguacate/900/desayuno-completo-de-tostadas-de-atun-y-aguacate_version_1683710001.jpg",
            "description": "Tosta de pan, con aguacate y atun por encima. Perfecta para desayunos o snacks",
            "ingredients": [
              "pan",
              "atun",
              "aguacate"
            ]
          },
          {
            "id": "18",
            "type": "Cena",
            "name": "Sandwitch de atun con tomate",
            "image": "https://storage.googleapis.com/fitia-api-bucket/media/images/recipe_images/1007779.jpg",
            "taste": "salado",
            "description": "Tostando un poco de pan de molde, y rellenandolo de atun y un par de rodajas de tomate, obtendremos un rico sandwitch, perfecto para una cena sana y suave.",
            "ingredients": [
              "pan de molde",
              "atun",
              "tomate"
            ]
          }
        ]
      },
      {
        "day": "Domingo",
        "meals": [
          {
            "id": "19",
            "type": "Desayuno",
            "name": "Pancake de avena con miel",
            "image": "https://storage.googleapis.com/fitia-api-bucket/media/images/recipe_images/1001967.jpg",
            "taste": "dulce",
            "description": "Ricos pancakes hechos de avena, aderezados con miel, para empezar el día de forma sana y con energía.",
            "ingredients": [
              "avena",
              "miel",
              "huevos"
            ]
          },
          {
            "id": "20",
            "type": "Comida",
            "name": "Tacos de pollo",
            "image": "https://storage.googleapis.com/fitia-api-bucket/media/images/recipe_images/1001324.jpg",
            "taste": "salado",
            "description": "Tacos rellenos de pollo y salteado de verduras. Cena sana y suave para no sentirte pesado a la hora de dormir.",
            "ingredients": [
              "tortas de trigo",
              "pollo",
              "verduras",
              "aguacate"
            ]
          },
          {
            "id": "21",
            "type": "Cena",
            "name": "Hamburguesa de pollo",
            "image": "https://storage.googleapis.com/fitia-api-bucket/media/images/recipe_images/1007241.jpg",
            "taste": "salado",
            "description": "Con pollo a la plancha o empanado, lechuga, tomate y queso, podemos crear una rica hamburguesa, perfecta para comer o cenar.",
            "ingredients": [
              "pollo",
              "huevo",
              "lechuga",
              "queso",
              "tomate",
              "pepino",
              "cebolla"
            ]
          }
        ]
      }
    ]
  }
]