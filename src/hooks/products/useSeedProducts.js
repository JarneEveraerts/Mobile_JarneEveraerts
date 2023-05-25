import { useEffect } from "react";
import { collection, addDoc } from "firebase/firestore";
import { firestore } from "../../../firebase";

const useSeedProducts = () => {
  useEffect(() => {
    const seedProducts = async () => {
      const products = [
        {
          id: "1",
          name: "The Set of Three Rings of Power",
          price: 78576.69,
          description:
            "Introducing the Legendary Trio - The Set of Three Rings of Power! Crafted with ancient Elven magic, this trilogy of Rings possesses unparalleled might. Feel the scorching flames of the Ring of Fire, radiating inspiration and courage. Immerse yourself in the ethereal depths of the Ring of Water, weaving the currents of destiny. Soar to new heights with the exhilarating power of the Ring of Air, guiding your path with wisdom. Individually awe-inspiring, but together an unstoppable force. Unleash their combined might and become the master of your destiny. Conquer kingdoms, inspire nations, and rewrite the course of history with this extraordinary set of Rings!",
          image: "https://i.imgur.com/hRZCSaQ.png",
        },
        {
          id: "2",
          name: "Lightsaber of Darth Vader",
          price: 29999.99,
          description:
            "Unleash the power of the Force with the iconic Lightsaber from Star Wars! Immerse yourself in epic battles as you wield this elegant and deadly weapon. The vibrant, plasma-based blade cuts through the air with a mesmerizing hum, allowing you to deflect blaster bolts, engage in thrilling duels, and defend the galaxy against the forces of darkness. Whether you're a valiant Jedi Knight or a cunning Sith Lord, the Lightsaber's customizable design and crystal-powered blade offer endless possibilities. Feel the weight of destiny in your hands as you choose between the noble path of the Jedi or the seductive allure of the dark side. With its unrivaled craftsmanship and timeless appeal, the Lightsaber is an essential weapon for any aspiring galactic hero",
          image: "https://i.imgur.com/vmaFooe.png",
        },
        {
          id: "3",
          name: "Sonic Screwdriver",
          price: 8999.99,
          description:
            "Step into the shoes of the ingenious Time Lord with the extraordinary Sonic Screwdriver from Doctor Who! This remarkable device is the ultimate tool for unlocking mysteries and overcoming obstacles across time and space. With a simple flick of the wrist, the Sonic Screwdriver emits a mesmerizing array of lights and sounds, capable of manipulating technology, opening doors, and even mending broken circuits. Whether you're outsmarting alien adversaries or deciphering complex puzzles, this versatile gadget is your key to unlimited possibilities. Its sleek design fits perfectly in your hand, making you feel like a true Time Lord as you navigate the cosmos. Embark on thrilling adventures and join the ranks of the Doctor with your very own Sonic Screwdriver",
          image: "https://i.imgur.com/56Rkuux.png",
        },
        {
          id: "4",
          name: "Apple of Eden",
          price: 4212.6,
          description:
            "Introducing the extraordinary Apple of Eden! This rare and awe-inspiring artifact is a true marvel of ancient craftsmanship. Its mysterious origins shroud it in an aura of intrigue and power. The Apple of Eden is rumored to possess unparalleled abilities, allowing its bearer to manipulate minds, influence events, and alter the very fabric of reality itself. With this remarkable relic in your possession, you hold the key to rewriting history and shaping the destiny of civilizations. Prepare to transcend the boundaries of ordinary existence and unlock a world of limitless possibilities. Beware, however, for such immense power comes with great responsibility. Will you harness the true potential of the Apple of Eden, or succumb to its temptations and be consumed by its overwhelming might? The choice is yours to make, and the impact will be legendary.",
          image: "https://i.imgur.com/YKjipZT.png",
        },
        {
          id: "5",
          name: "Master Sword",
          price: 9999.99,
          description:
            "Unleash the true power of the legendary Master Sword, the pinnacle of heroism and the ultimate weapon for those destined to save the world. Crafted by the gods themselves, this magnificent blade pulses with ancient energy, yearning to be held by the chosen hero. With its gleaming, silver blade and adorned hilt, the Master Sword possesses an awe-inspiring presence that strikes fear into the hearts of evildoers. As you wield this iconic symbol of courage, you'll feel an electrifying surge of strength coursing through your veins, empowering you to vanquish any darkness that threatens your realm",
          image: "https://i.imgur.com/0sF4Zqu.png",
        },
        {
          id: "6",
          name: "Portal Gun",
          price: 14990.99,
          description:
            "Step into the extraordinary world of interdimensional travel with the mind-bending Portal Gun! This technological marvel is the epitome of innovation, allowing you to defy the laws of physics and explore uncharted realms like never before. With a sleek, ergonomic design and an array of advanced features, the Portal Gun harnesses the power of portal technology to create portals that connect distant locations. Seamlessly traverse vast distances, bypass insurmountable obstacles, and solve intricate puzzles with a simple flick of the wrist. Immerse yourself in a realm of mind-bending possibilities as you manipulate space and time. Are you ready to embark on an adventure that will redefine your perception of reality?",
          image: "https://i.imgur.com/6IR1IBu.png",
        },
        {
          id: "7",
          name: "BFG 9000",
          price: 19999.99,
          description:
            "Prepare to unleash unparalleled devastation with the awe-inspiring BFG 9000! This colossal weapon of mass destruction redefines the meaning of firepower. With a design that radiates power and a name that strikes fear into the hearts of even the most formidable foes, the BFG 9000 is the epitome of annihilating force. Harness its immense energy and witness as it disintegrates enemies with a single shot, obliterating everything in its path with explosive precision. The BFG 9000 is not merely a weapon; it's a statement of dominance.",
          image: "https://i.imgur.com/PtGulHX.png",
        },
        {
          id: "8",
          name: "Gravity Gun",
          price: 8999.99,
          description:
            "Introducing the groundbreaking Gravity Gun, a technological marvel that defies the laws of physics and grants you unparalleled control over the forces of gravity! This ingenious device empowers you to manipulate objects with ease, lifting them effortlessly and launching them at astonishing velocities. No longer will you be constrained by mere mortal strength—imagine levitating heavy crates, hurling debris as deadly projectiles, or constructing ingenious pathways using the very environment around you. The Gravity Gun revolutionizes gameplay, offering a truly immersive experience that will leave you in awe.",
          image: "https://i.imgur.com/HwH26Cj.png",
        },
        {
          id: "9",
          name: "Mjolnir Armor",
          price: 29999.99,
          description:
            "Gear up for the ultimate embodiment of power and protection with the legendary Mjolnir Armor! This cutting-edge exoskeleton is the pinnacle of technological advancement, offering unmatched strength, agility, and defensive capabilities. Step into the boots of a true super-soldier as you don the iconic Mjolnir Armor, inspired by the mythical hammer wielded by the Norse god of thunder. With its sleek design and advanced nanotechnology, this suit grants you enhanced reflexes, superhuman strength, and the ability to withstand even the most devastating blows. Whether you're engaging in intense combat or embarking on daring missions, the Mjolnir Armor ensures that you emerge victorious.",
          image: "https://i.imgur.com/27PsIng.png",
        },
        {
          id: "10",
          name: "Pip-Boy",
          price: 4999.99,
          description:
            "Immerse yourself in the post-apocalyptic wasteland with the iconic Pip-Boy, the ultimate personal computing device for survival and exploration! This ingenious wrist-mounted gadget brings the future to your fingertips, providing vital information, communication, and utilities in the harshest of environments. With its retro-futuristic design and intuitive interface, the Pip-Boy becomes an extension of your arm, guiding you through treacherous terrains and helping you make critical decisions. Access your inventory, track your quests, monitor your health and radiation levels, and even listen to your favorite tunes while battling the dangers of the wasteland. The Pip-Boy is not just a device; it's your lifeline in a world gone mad.",
          image: "https://i.imgur.com/xOko8Cb.png",
        },
        {
          id: "11",
          name: "Excalibur",
          price: 34999.99,
          description:
            "Unleash the legendary Excalibur, the fabled sword of kings! This iconic weapon, steeped in myth and glory, possesses unparalleled might and holds the key to your destiny. Crafted by the finest smiths of old, Excalibur is a symbol of honor, nobility, and untamed power. With its shimmering blade and ornate hilt, this legendary sword grants you the strength to overcome any challenge that stands in your way. Wield Excalibur and become the true embodiment of a heroic knight, destined to protect the realm from darkness. Experience the exhilaration of swinging this majestic weapon, cutting through enemies with precision and grace.",
          image: "https://i.imgur.com/oAwllKQ.png",
        },
        {
          id: "12",
          name: "Hidden Blade",
          price: 9999.99,
          description:
            "Discover the covert world of assassins with the groundbreaking Hidden Blade! This revolutionary weapon, worn discreetly on the forearm, grants you the advantage of stealth and precision in every strike. With a swift flick of your wrist, the Hidden Blade effortlessly extends, allowing you to strike swiftly and silently, eliminating your targets with deadly accuracy. Designed with the utmost craftsmanship and ingenuity, this hidden marvel ensures that your enemies never see it coming. Become a master of assassination as you seamlessly blend into the shadows and strike fear into the hearts of those who stand in your way.",
          image: "https://i.imgur.com/1fgH1QS.png",
        },
        {
          id: "13",
          name: "Red Shell",
          price: 2999.99,
          description:
            "Unleash the unstoppable force of the Red Shell! This iconic item from the world of Mario Kart is your ticket to victory on the race track. Equip yourself with this devious projectile and watch as it seeks out and demolishes your opponents, leaving a trail of chaos in its wake. No longer will you be at the mercy of rival racers; with the Red Shell, you take control of the race and leave your adversaries in a cloud of dust. This homing missile is the ultimate equalizer, targeting the racer ahead of you with unrelenting accuracy.",
          image: "https://i.imgur.com/hIZRbEJ.png",
        },
        {
          id: "14",
          name: "Keyblade",
          price: 19999.99,
          description:
            "Unlock the realm of dreams and embark on an extraordinary adventure with the legendary Keyblade! This mystical weapon is the key to unlocking hidden worlds and battling the forces of darkness. As a chosen wielder of the Keyblade, you possess the power to seal away the heartless and protect the realms from evil. With its intricately designed hilt and radiant blade, the Keyblade is a symbol of courage and hope. Swing this mighty weapon and unleash devastating combos, channeling the very essence of light in your strikes. Traverse enchanted landscapes, meet iconic characters, and fulfill your destiny as a true hero.",
          image: "https://i.imgur.com/pSzbQYd.png",
        },
        {
          id: "15",
          name: "Lancer Assault Rifle",
          price: 24999.99,
          description:
            "Gear up for intense futuristic warfare with the Lancer Assault Rifle! This cutting-edge weapon combines relentless firepower with unparalleled precision to dominate the battlefield. Engineered with advanced technology and ergonomic design, the Lancer Assault Rifle is the weapon of choice for elite soldiers. Rain down a hailstorm of bullets upon your enemies, mowing them down with ease. But that's not all – the Lancer features a built-in chainsaw bayonet, allowing you to engage in close-quarters combat with brutal efficiency. Slice through enemy lines and watch as fear spreads among your foes. With the Lancer Assault Rifle in your hands, victory is within reach.",
          image: "https://i.imgur.com/5vDOpFd.png",
        },
        {
          id: "16",
          name: "Poke Ball",
          price: 1999.99,
          description:
            "Embark on an extraordinary journey as a Pokémon Trainer with the revolutionary Poke Ball! This iconic device is your gateway to capturing and taming the enchanting creatures that inhabit the world around you. Crafted with precision engineering and infused with advanced technology, the Poke Ball encapsulates the essence of adventure and companionship. With a simple throw, the Poke Ball encapsulates wild Pokémon, harnessing their unique powers and abilities to join you on your quest. Train them, nurture them, and watch as they evolve into formidable allies by your side. The possibilities are endless as you build your ultimate team of Pokémon and compete against fellow trainers.",
          image: "https://i.imgur.com/6BTzdOW.png",
        },
        {
          id: "17",
          name: "Infinity Gauntlet",
          price: 99999.99,
          description:
            "Embrace the limitless power of the awe-inspiring Infinity Gauntlet! This legendary artifact grants you the unrivaled ability to control the very fabric of the universe itself. Crafted with cosmic precision and adorned with the six powerful Infinity Stones, the Infinity Gauntlet transforms you into the ultimate master of reality. With a mere clench of your fist, you can reshape planets, manipulate time, harness the forces of nature, and even dictate the fate of entire civilizations. Unleash the unimaginable might of the Infinity Gauntlet and become a cosmic force to be reckoned with. However, such immeasurable power comes at a cost, as the temptation to succumb to darkness looms ever-present. ",
          image: "https://i.imgur.com/HpSoWPb.png",
        },
        {
          id: "18",
          name: "OmniWrench 8000",
          price: 7999.99,
          description:
            "Introducing the extraordinary OmniWrench 8000, the ultimate tool for intergalactic adventurers and mechanical marvels! This state-of-the-art device combines versatility, precision, and sheer power to revolutionize your tinkering and repair endeavors. With its sleek design and cutting-edge technology, the OmniWrench 8000 is your trusty companion in any cosmic quest. Whether you're fixing starships, dismantling rogue robots, or navigating treacherous terrains, this multifunctional wrench has got you covered. With a simple twist and turn, it adjusts to fit any bolt or nut, and its built-in mechanisms ensure maximum torque for even the most stubborn fasteners. Its built-in gadgets, such as laser cutters, magnetic clamps, and energy projectors, provide unmatched versatility in solving complex problems. ",
          image: "https://i.imgur.com/OVd9LWT.png",
        },
        {
          id: "19",
          name: "Ray Gun",
          price: 12999.99,
          description:
            "Unleash the otherworldly power of the Ray Gun, the pinnacle of extraterrestrial weaponry! This advanced energy weapon harnesses the boundless energy of the cosmos to deliver devastating blasts that decimate anything in their path. With its sleek, futuristic design and pulsating energy core, the Ray Gun is a testament to the cutting-edge technology of a distant and advanced civilization. Fire brilliant beams of concentrated energy that obliterate your adversaries and leave no chance for escape. No longer bound by conventional firearms, you now wield a weapon of intergalactic might. Immerse yourself in a world of science fiction warfare, where the boundaries of what's possible are shattered.",
          image: "https://i.imgur.com/0AG6l1h.png",
        },
        {
          id: "20",
          name: "cardboard box",
          price: 299.99,
          description:
            "Introducing the incredible Cardboard Box, a seemingly ordinary item with extraordinary versatility and endless possibilities! Don't let its humble appearance fool you, for within this unassuming box lies a world of creativity and stealth. Crafted from sturdy yet lightweight cardboard, the Cardboard Box becomes your ultimate tool of concealment and strategic maneuvering. With a simple fold and tuck, you can transform this unassuming box into a hiding spot that defies detection. Blend seamlessly into your surroundings, outsmarting your foes and navigating even the most treacherous environments. Use it as a portable shelter, a makeshift disguise, or a clever trap. The Cardboard Box is your ally in the art of deception and surprise.",
          image: "https://i.imgur.com/a5AmRpY.png",
        },
      ];

      try {
        for (const product of products) {
          await addDoc(collection(firestore, "products"), product);
          console.log("Product added:", product.name);
        }
      } catch (error) {
        console.error("Error seeding products:", error);
      }
    };

    seedProducts();
  }, []);

  return null; // or you can return a loading indicator if needed
};

export default useSeedProducts;
