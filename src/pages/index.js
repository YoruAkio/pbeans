import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  FiCoffee,
  FiPackage,
  FiStar,
  FiMapPin,
  FiShoppingBag,
  FiArrowRight,
  FiClock,
} from "react-icons/fi";
import { GiCoffeeCup, GiTeapot, GiBowlOfRice, GiCupcake } from "react-icons/gi";
import { FaMotorcycle } from "react-icons/fa";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

// Animation variants
const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

// Menu data with updated image URLs
const menuData = {
  coffee: [
    {
      name: "Matcha Latte",
      japName: "抹茶ラテ",
      description: "Perfect blend of high-quality matcha and rich milk",
      price: "45,000",
      image:
        "https://images.unsplash.com/photo-1515823064-d6e0c04616a7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bWF0Y2hhJTIwbGF0dGV8ZW58MHx8MHx8fDA%3D",
    },
    {
      name: "Hojicha Espresso",
      japName: "ほうじ茶エスプレッソ",
      description: "Deep espresso with roasted hojicha tea essence",
      price: "40,000",
      image:
        "https://images.pexels.com/photos/312418/pexels-photo-312418.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      name: "Sakura Coffee",
      japName: "さくらコーヒー",
      description: "Spring-inspired coffee with cherry blossom aroma",
      price: "50,000",
      image:
        "https://images.unsplash.com/photo-1686860633705-52054227718b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHNha3VyYSUyMGNvZmZlZXxlbnwwfHwwfHx8MA%3D%3D",
    },
    {
      name: "Black Honey Drip",
      japName: "黒蜜ドリップ",
      description: "Hand-dripped coffee with black honey syrup",
      price: "38,000",
      image:
        "https://images.unsplash.com/photo-1666854448526-2232df89b6bf?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzB8fGJsYWNrJTIwaG9uZXklMjBkcmlwJTIwY29mZmVlfGVufDB8fDB8fHww",
    },
    {
      name: "Yuzu Cold Brew",
      japName: "柚子コールドブリュー",
      description: "24-hour cold brew with refreshing yuzu citrus",
      price: "45,000",
      image:
        "https://images.pexels.com/photos/2615323/pexels-photo-2615323.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      name: "Wabi-Sabi Espresso",
      japName: "わびさびエスプレッソ",
      description: "Special espresso with complex flavors in simplicity",
      price: "35,000",
      image:
        "https://images.pexels.com/photos/324028/pexels-photo-324028.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
  ],
  nonCoffee: [
    {
      name: "Genmaicha Tea",
      japName: "玄米茶",
      description: "Green tea blended with roasted brown rice",
      price: "35,000",
      image:
        "https://images.pexels.com/photos/1638280/pexels-photo-1638280.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      name: "Sencha Tea",
      japName: "煎茶",
      description: "Vibrant green tea with a refreshing aroma",
      price: "30,000",
      image:
        "https://images.pexels.com/photos/1417945/pexels-photo-1417945.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      name: "Hojicha Tea",
      japName: "ほうじ茶",
      description: "Roasted green tea with a deep, toasty flavor",
      price: "32,000",
      image:
        "https://images.pexels.com/photos/230477/pexels-photo-230477.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      name: "Matcha Lemonade",
      japName: "抹茶レモネード",
      description: "Refreshing lemonade infused with premium matcha",
      price: "38,000",
      image:
        "https://images.pexels.com/photos/1581484/pexels-photo-1581484.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
  ],
  food: [
    {
      name: "Onigiri Set",
      japName: "おにぎりセット",
      description: "Rice balls with various fillings, served with miso soup",
      price: "40,000",
      image:
        "https://images.pexels.com/photos/2098143/pexels-photo-2098143.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      name: "Katsu Sando",
      japName: "カツサンド",
      description: "Breaded pork cutlet sandwich with tonkatsu sauce",
      price: "55,000",
      image:
        "https://media.istockphoto.com/id/2178144392/photo/katsu-sando.webp?a=1&b=1&s=612x612&w=0&k=20&c=MScPLE9CDmmi-Dfol9Nwrzm16Oo1b3YPo9SIzZC-kxo=",
    },
    {
      name: "Tamago Toast",
      japName: "たまごトースト",
      description: "Fluffy Japanese egg toast with sweet mayo",
      price: "35,000",
      image:
        "https://media.istockphoto.com/id/1261518125/photo/tamago-sando-is-a-very-humble-snack-modest-low-maintenance-and-very-convenient-the-japanese.webp?a=1&b=1&s=612x612&w=0&k=20&c=8wTkyN-DM680ul-8R_4Llyl0TDoNReSr7vMoto6vAaE=",
    },
  ],
  dessert: [
    {
      name: "Matcha Tiramisu",
      japName: "抹茶ティラミス",
      description: "Tiramisu with rich matcha flavor layers",
      price: "45,000",
      image:
        "https://media.istockphoto.com/id/2150641226/photo/matcha-tiramisu-classica-layered-dessert-made-of-whipped-cream-mascarpone-cheese-and-matcha.webp?a=1&b=1&s=612x612&w=0&k=20&c=xywHusjKamH2mcYAx9iGgNpgniHRyrMxAxCoKccjdRs=",
    },
    {
      name: "Dorayaki",
      japName: "どら焼き",
      description: "Traditional Japanese sweet with red bean paste",
      price: "25,000",
      image:
        "https://media.istockphoto.com/id/2158934267/photo/potato-paste-pancakes.webp?a=1&b=1&s=612x612&w=0&k=20&c=D5KRwjq0UBnhHvMy8YA4DXbnwtdPoqN0pvNr7YuGUp4=",
    },
    {
      name: "Black Sesame Pudding",
      japName: "黒ごまプリン",
      description: "Smooth pudding with rich black sesame flavor",
      price: "30,000",
      image:
        "https://images.unsplash.com/photo-1609163403627-8f24f98b706b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8QmxhY2slMjBTZXNhbWUlMjBQdWRkaW5nfGVufDB8fDB8fHww",
    },
  ],
};

// Updated delivery services with more reliable image URLs
const deliveryServices = [
  {
    name: "GoFood",
    logo: "https://upload.wikimedia.org/wikipedia/commons/f/f9/Gofood_logo.svg",
    url: "https://gofood.co.id",
    color: "from-green-500/20 to-green-600/20",
    borderColor: "border-green-500/30",
  },
  {
    name: "Grab Food",
    logo: "https://food.grab.com/static/images/logo-grabfood2.svg",
    url: "https://food.grab.com",
    color: "from-green-500/20 to-teal-500/20",
    borderColor: "border-green-500/30",
  },
  {
    name: "Shopee Food",
    logo: "http://www.shopeefood.co.id/_next/static/0eb2d0115d4c60e056b5b91ab1813b97.png",
    url: "https://shopee.co.id/food",
    color: "from-orange-500/20 to-orange-600/20",
    borderColor: "border-orange-500/30",
  },
];

export default function Home() {
  const [activeCategory, setActiveCategory] = useState("coffee");
  const [isOpen, setIsOpen] = useState(false);

  const handleScroll = (e, id) => {
    e.preventDefault();
    setIsOpen(false);

    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80, // Offset for navbar height
        behavior: "smooth",
      });
    }
  };

  // Improved image error handling to prevent loops
  const handleImageError = (e) => {
    // Check if we've already set a fallback to prevent loops
    if (!e.target.src.includes("placehold.co")) {
      e.target.src =
        "https://placehold.co/400x300/f8f8f8/999999?text=PBeans+Image";
      e.target.onerror = null; // Prevent future error handling loops
    }
  };

  return (
    <div className="min-h-screen bg-white text-stone-800 font-sans">
      <Navbar />

      {/* Hero Section */}
      <section id="home" className="pt-24 pb-16 md:pt-32 md:pb-24">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="flex flex-col md:flex-row items-center">
            <motion.div
              className="md:w-1/2 mb-10 md:mb-0"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
                Authentic <span className="text-red-500">Japanese</span>
                <br />
                Coffee Experience <span className="text-2xl">コーヒー体験</span>
              </h1>
              <p className="text-stone-600 text-lg md:text-xl mb-8 max-w-md">
                Bringing traditional Japanese coffee culture to the heart of
                Indonesia. Crafted with care and passion.
              </p>
              <div className="flex flex-wrap gap-4">
                <motion.a
                  href="#menu"
                  onClick={(e) => handleScroll(e, "menu")}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-3 bg-stone-800 text-white rounded-md hover:bg-stone-700 transition duration-300 flex items-center gap-2"
                >
                  Menu <FiCoffee />
                </motion.a>
                <motion.a
                  href="#delivery"
                  onClick={(e) => handleScroll(e, "delivery")}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-3 border border-stone-800 text-stone-800 rounded-md hover:bg-stone-100 transition duration-300 flex items-center gap-2"
                >
                  Order <span className="text-sm ml-1">購入</span>{" "}
                  <FiShoppingBag />
                </motion.a>
              </div>
            </motion.div>

            <motion.div
              className="md:w-1/2"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
            >
              <div className="relative h-[400px] w-full md:h-[500px] rounded-lg overflow-hidden">
                <Image
                  src="https://raw.githubusercontent.com/YoruAkio/ProjectAssets/refs/heads/main/akio/pbeans/3d_beans_compressed.png"
                  alt="PBeans Coffee"
                  fill
                  className="object-contain"
                  priority
                  onError={handleImageError}
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 bg-stone-50">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            className="text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-2">
              About Us <span className="text-red-500">について</span>
            </h2>
            <p className="text-stone-600 max-w-2xl mx-auto">
              PBeans merges traditional Japanese brewing techniques with
              Indonesia's premium coffee beans for a unique experience.
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <FeatureCard
              icon={<FiCoffee />}
              title="Handcrafted Coffee"
              japTitle="手作りのコーヒー"
              description="Every cup is meticulously prepared using traditional Japanese methods."
            />
            <FeatureCard
              icon={<FiPackage />}
              title="Premium Beans"
              japTitle="高品質の豆"
              description="We source only the finest beans from the highlands of Indonesia."
            />
            <FeatureCard
              icon={<FiStar />}
              title="Unique Blends"
              japTitle="独自のブレンド"
              description="Experience our one-of-a-kind blends that fuse Japanese technique with Indonesian flavor."
            />
          </motion.div>

          <motion.div
            className="mt-16 flex justify-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <div className="relative w-full max-w-4xl h-[300px] md:h-[400px] rounded-lg overflow-hidden">
              <Image
                src="https://images.pexels.com/photos/1813466/pexels-photo-1813466.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="Our Coffee Shop"
                fill
                className="object-cover"
                onError={handleImageError}
              />
              <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                <p className="text-white text-2xl md:text-3xl font-medium px-4 text-center">
                  "Coffee is both an art and a science.{" "}
                  <span className="text-lg block mt-2">
                    コーヒーは、芸術であり、科学です。
                  </span>
                  "
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Menu Section */}
      <section id="menu" className="py-16">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            className="text-center mb-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-2">
              Our Menu <span className="text-red-500">メニュー</span>
            </h2>
            <p className="text-stone-600 max-w-2xl mx-auto">
              Enjoy our special coffee and beverages made with the highest
              quality ingredients and traditional techniques.
            </p>
          </motion.div>

          {/* Menu Categories with Icons */}
          <motion.div
            className="flex justify-center mb-10 space-x-4 md:space-x-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <CategoryButton
              active={activeCategory === "coffee"}
              onClick={() => setActiveCategory("coffee")}
              icon={<GiCoffeeCup />}
              label="Coffee"
            />
            <CategoryButton
              active={activeCategory === "nonCoffee"}
              onClick={() => setActiveCategory("nonCoffee")}
              icon={<GiTeapot />}
              label="Non-Coffee"
            />
            <CategoryButton
              active={activeCategory === "food"}
              onClick={() => setActiveCategory("food")}
              icon={<GiBowlOfRice />}
              label="Food"
            />
            <CategoryButton
              active={activeCategory === "dessert"}
              onClick={() => setActiveCategory("dessert")}
              icon={<GiCupcake />}
              label="Dessert"
            />
          </motion.div>

          {/* Menu Items - Modified to ensure proper rendering when switching */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {menuData[activeCategory]?.map((item, index) => (
              <motion.div
                key={`${activeCategory}-${index}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="group bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow"
                whileHover={{ y: -5 }}
              >
                <div className="relative h-48 w-full">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                    onError={(e) => {
                      if (!e.target.src.includes("placehold.co")) {
                        e.target.src =
                          "https://placehold.co/400x300/f8f8f8/999999?text=PBeans+Menu+Item";
                        e.target.onerror = null; // Prevent error loops
                      }
                    }}
                  />
                </div>
                <div className="p-4">
                  <div className="flex justify-between items-start mb-1">
                    <h3 className="font-bold text-lg">{item.name}</h3>
                    <span className="text-red-500 font-medium">
                      IDR {item.price}
                    </span>
                  </div>
                  <p className="text-xs text-red-500 mb-2">{item.japName}</p>
                  <p className="text-stone-600 text-sm">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Delivery Section */}
      <section id="delivery" className="py-16 bg-stone-50">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            className="text-center mb-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-2">
              Delivery <span className="text-red-500">配達</span>
            </h2>
            <p className="text-stone-600 max-w-2xl mx-auto">
              Can't visit us? Let us come to you! Order through your favorite
              delivery app.
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {deliveryServices.map((service, index) => (
              <motion.div
                key={index}
                className={`bg-gradient-to-r ${service.color} rounded-xl p-6 border ${service.borderColor} hover:shadow-lg transition-all duration-300`}
                variants={fadeIn}
                whileHover={{ y: -5 }}
              >
                <div className="flex flex-col items-center">
                  <div className="h-16 w-full relative mb-4 flex items-center justify-center">
                    <Image
                      src={service.logo}
                      alt={service.name}
                      width={120}
                      height={48}
                      className="object-contain"
                      onError={handleImageError}
                    />
                  </div>
                  <motion.a
                    href={service.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="mt-4 px-6 py-2 bg-white text-stone-800 rounded-md hover:bg-stone-100 transition duration-300 flex items-center gap-2 shadow-sm"
                  >
                    Order via {service.name} <FaMotorcycle />
                  </motion.a>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            className="mt-10 text-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <div className="bg-white p-6 rounded-lg shadow-sm inline-block">
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-full bg-red-500/10 text-red-500">
                  <FiClock className="text-xl" />
                </div>
                <div className="text-left">
                  <h3 className="font-medium">Delivery Hours</h3>
                  <p className="text-stone-600 text-sm">
                    10:00 AM - 8:00 PM Daily{" "}
                    <span className="text-xs">毎日</span>
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Shop Online Section */}
      <section id="shop" className="py-16 bg-stone-900 text-white">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            className="text-center mb-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-2">
              Online Shop{" "}
              <span className="text-red-500">オンラインショップ</span>
            </h2>
            <p className="text-stone-300 max-w-2xl mx-auto">
              Enjoy PBeans from home. We deliver premium coffee beans and
              specialty blends to your doorstep.
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <ShopItem
              name="Signature Blend"
              japName="シグネチャーブレンド"
              description="Our flagship blend that combines Japanese techniques with Indonesian flavors"
              price="120,000"
              image="https://images.pexels.com/photos/894695/pexels-photo-894695.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            />
            <ShopItem
              name="Premium Specialty"
              japName="極上スペシャルティ"
              description="Rare specialty coffee cultivated in the Indonesian highlands"
              price="150,000"
              image="https://images.pexels.com/photos/1695052/pexels-photo-1695052.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            />
            <ShopItem
              name="Matcha Blend"
              japName="抹茶ブレンド"
              description="Unique blend of high-quality matcha and coffee"
              price="130,000"
              image="https://images.pexels.com/photos/1581554/pexels-photo-1581554.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            />
          </motion.div>

          <motion.div
            className="mt-12 text-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <motion.a
              href="https://shop.pbeans.co.id"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 bg-red-500 text-white rounded-md hover:bg-red-600 transition duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Visit Online Shop <span className="text-sm ml-1">ショップへ</span>{" "}
              <FiArrowRight className="ml-2" />
            </motion.a>
          </motion.div>
        </div>
      </section>

      {/* Location Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            className="text-center mb-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-2">
              Location <span className="text-red-500">場所</span>
            </h2>
            <p className="text-stone-600 max-w-2xl mx-auto">
              Visit our store in the heart of Magetan. A tranquil oasis in the
              small city.
            </p>
          </motion.div>

          <motion.div
            className="bg-stone-100 p-8 rounded-lg"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <div className="flex flex-col md:flex-row gap-8">
              <div className="md:w-1/2">
                <div className="relative w-full h-[300px]">
                  <Image
                    src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                    alt="PBeans Coffee Shop Location"
                    fill
                    className="object-cover rounded-lg"
                    onError={handleImageError}
                  />
                </div>
              </div>
              <div className="md:w-1/2">
                <h3 className="text-xl font-bold mb-4">PBeans Coffee</h3>
                <div className="flex items-start gap-3 mb-4">
                  <FiMapPin className="mt-1 flex-shrink-0" />
                  <p>
                    JL. Pasar Baru No. 09
                    <br />
                    Magetan, 63384
                    <br />
                    Indonesia
                  </p>
                </div>
                <p className="mb-4">
                  Five minutes from the center of the city. A peaceful space in
                  the small city.
                  <span className="text-sm block mt-1 text-stone-500">
                    小さな街の静かな空間。
                  </span>
                </p>
                <motion.a
                  href="https://maps.app.goo.gl/gDHBCPSWYbJgjpAk9"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-4 py-2 bg-stone-800 text-white rounded-md hover:bg-stone-700 transition duration-300 flex items-center gap-2 inline-flex"
                >
                  View Map <FiArrowRight />
                </motion.a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

// Helper Components

const FeatureCard = ({ icon, title, japTitle, description }) => {
  return (
    <motion.div
      className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow"
      variants={fadeIn}
      whileHover={{ y: -5 }}
    >
      <div className="w-12 h-12 bg-stone-100 rounded-full flex items-center justify-center mb-4 text-stone-800">
        <span className="text-xl">{icon}</span>
      </div>
      <h3 className="text-lg font-bold mb-1">{title}</h3>
      <p className="text-sm text-red-500 mb-2">{japTitle}</p>
      <p className="text-stone-600 text-sm">{description}</p>
    </motion.div>
  );
};

const CategoryButton = ({ active, onClick, icon, label }) => {
  return (
    <motion.button
      onClick={onClick}
      className={`flex flex-col items-center gap-1 px-4 py-3 rounded-md transition-colors ${
        active
          ? "bg-stone-800 text-white"
          : "bg-stone-100 text-stone-800 hover:bg-stone-200"
      }`}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <span className="text-2xl">{icon}</span>
      <span className="text-xs font-medium">{label}</span>
    </motion.button>
  );
};

const MenuItem = ({ name, japName, description, price, image }) => {
  return (
    <motion.div
      className="group bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow"
      variants={fadeIn}
      whileHover={{ y: -5 }}
    >
      <div className="relative h-48 w-full">
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
          onError={(e) => {
            if (!e.target.src.includes("placehold.co")) {
              e.target.src =
                "https://placehold.co/400x300/f8f8f8/999999?text=PBeans+Menu+Item";
              e.target.onerror = null; // Prevent error loops
            }
          }}
        />
      </div>
      <div className="p-4">
        <div className="flex justify-between items-start mb-1">
          <h3 className="font-bold text-lg">{name}</h3>
          <span className="text-red-500 font-medium">IDR {price}</span>
        </div>
        <p className="text-xs text-red-500 mb-2">{japName}</p>
        <p className="text-stone-600 text-sm">{description}</p>
      </div>
    </motion.div>
  );
};

const ShopItem = ({ name, japName, description, price, image }) => {
  return (
    <motion.div
      className="group bg-stone-800 rounded-lg overflow-hidden border border-stone-700"
      variants={fadeIn}
      whileHover={{ y: -5 }}
    >
      <div className="relative h-48 w-full">
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
          onError={(e) => {
            if (!e.target.src.includes("placehold.co")) {
              e.target.src =
                "https://placehold.co/400x300/333333/999999?text=PBeans+Shop+Item";
              e.target.onerror = null; // Prevent error loops
            }
          }}
        />
      </div>
      <div className="p-4">
        <div className="flex justify-between items-start mb-1">
          <h3 className="font-bold text-lg text-white">{name}</h3>
          <span className="text-red-400 font-medium">IDR {price}</span>
        </div>
        <p className="text-xs text-red-400 mb-2">{japName}</p>
        <p className="text-stone-400 text-sm mb-4">{description}</p>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="w-full px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition duration-300"
        >
          Buy Now <span className="text-xs">購入</span>
        </motion.button>
      </div>
    </motion.div>
  );
};
