import sales from "@/static/menuItem/sales.svg";
import chef from "@/static/menuItem/chef.svg";
import bakaleria from "@/static/menuItem/bakaleria.svg";
import condiment from "@/static/menuItem/condiment.svg";
import cooking from "@/static/menuItem/cooking.svg";
import dumpling from "@/static/menuItem/dumpling.svg";
import gingerbread  from "@/static/menuItem/gingerbread.svg";
import grain from "@/static/menuItem/grain.svg";
import milk from "@/static/menuItem/milk.svg";
import salad from "@/static/menuItem/salad.svg";
import stake from "@/static/menuItem/stake.svg";
import tea from "@/static/menuItem/tea.svg";
import toast from "@/static/menuItem/toast.svg";
import track  from "@/static/menuItem/track.svg";
import water  from "@/static/menuItem/water.svg";





export const menuItem = [
  {
    id: 1,
    name: "Акционные товары",
    imageUrl:  sales ,
    slug: "/sales",
  },
  {
    id: 2,
    name: "Собственное производство",
    imageUrl:  chef ,
    slug: "/chef",
  },
  {
    id: 3,
    name: "Бакалея",
    imageUrl:  bakaleria ,
    slug: "/bakaleria",
  },
  {
    id: 4,
    name: "Мясо и рыба",
    imageUrl:  stake ,
    slug: "/stake",
  },
  {
    id: 5,
    name: "Молочные продукты",
    imageUrl: milk ,
    slug: "/milk",
  },
  {
    id: 6,
    name: "Фрукты, овощи",
    imageUrl: salad ,
    slug: "/salad",
  },
  {
    id: 7,
    name: "Замороженные продукты",
    imageUrl:  dumpling ,
    slug: "/dumpling",
  },
  {
    id: 8,
    name: "Вода, напитки, соки",
    imageUrl:  water ,
    slug: "/water",
  },
  {
    id: 9,
    name: "Хлеб, кондитерские изделия",
    imageUrl:  toast ,
    slug: "/toast",
  },
  {
    id: 10,
    name: "Чай, кофе",
    imageUrl: tea ,
    slug: "/tea",
  },
  {
    id: 11,
    name: "Здоровое питание",
    imageUrl:  grain ,
    slug: "/grain",
  },
  {
    id: 12,
    name: "Детское питание",
    imageUrl:  gingerbread ,
    slug: "/gingerbread",
  },
  {
    id: 13,
    name: "Товары восточной кухни",
    imageUrl: cooking ,
    slug: "/cooking",
  },
  {
    id: 14,
    name: "Бытовая химия, хозтовары",
    imageUrl: condiment ,
    slug: "/condiment",
  },
  {
    id: 15,
    name: "Зоотовары",
    imageUrl:  track ,
    slug: "/track",
  },

];
