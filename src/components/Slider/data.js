import chef from "@/static/slider/chef.png"
import pizza from "@/static/slider/pizza.png"
import wing from"@/static/slider/wing.png"
import pizzaBox from "@/static/slider/pizzaBox.png"
export const dataSlider = [
    {
        id: 1,
        title: "ЛАЙМ ФРЕШ МАРКЕТ",
        subtitle:"Давайте знакомиться!",
        buttonText:"УЗНАТЬ О НАС",
        imageUrl:chef,
        color:"linear-gradient(90deg, #A1D214 0%, #87C04F 100%)",
        white:false

    },
    {
        id: 2,
        title: "СОБСТВЕННОЕ ПРОИЗВОДСТВО",
        subtitle:"Готовим для вас только из свежих продуктов!",
        buttonText:"ЗАКАЗАТЬ",
        imageUrl:pizza,
        color:"linear-gradient(90deg, #FFA601 0%, #FFC500 100%)",
        white:false
    },
    {
        id: 3,
        title: "РЕЦЕПТЫ ОТ ШЕФА",
        subtitle:"Любим готовить и научим Вас!",
        buttonText:"РЕЦЕПТЫ",
        imageUrl:wing,
        color:"linear-gradient(90deg, #47C8FF 0%, #26D0CE 100%), linear-gradient(90deg, #FFA601 0%, #FFC500 100%), linear-gradient(90deg, #A1D214 0%, #87C04F 100%)",
        white:false
    },
    {
        id: 4,
        title: "ДОСТАВКА ПИЦЦЫ И СУШИ",
        subtitle:"Будет у вас через 60 минут!",
        buttonText:"ЗАКАЗАТЬ",
        imageUrl:pizzaBox,
        color:"linear-gradient(90deg, #FF9901 0.01%, #FF6B00 100%), linear-gradient(90deg, #A1D214 0%, #87C04F 100%)",
        white:true
    },

]