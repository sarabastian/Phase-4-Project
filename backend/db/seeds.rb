# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
Van.destroy_all

Review.destroy_all
Order.destroy_all
Review.destroy_all
SavedVan.destroy_all
TripDate.destroy_all

v1 = Van.create(name: 'The Rambler', description: 'RAM Promaster 159 WB High Roof', 
                price: 96000, mileage: 8625,
                size: '2 person', 
                interior_features: 'Full Size Murphy bed with mattress. Two storage benches with cushions &
                Post Table. Overhead storage cabinets',
                utilities: 'Dawn Sink with faucet, Induction cooktop, Microwave, EVO 40 with smart temperature control, Floor to ceiling shower with Natures Head Compost Toilet',
                available: true, location: 'Austin',
                rates: 180,
                pet_friendly: false, img_1: 'https://images.squarespace-cdn.com/content/v1/5ae313877106997b679cbd30/1608606406987-FNSOAX7ZVJRGIPM147JG/ke17ZwdGBToddI8pDm48kDUenuO8rMQmebykEEIq_zEUqsxRUqqbr1mOJYKfIPR7LoDQ9mXPOjoJoqy81S2I8PaoYXhp6HxIwZIk7-Mi3Tsic-L2IOPH3Dwrhl-Ne3Z2FKVZ3JTyubAzn07z6Ml5uUjev0Tycse35GGx2QNth_6hHAH51QaxKq4KdVMVBxpG/C6ED47D0-1611-4341-9D89-DB8F788B7774_1_105_c.jpeg?format=750w',
                img_2: 'https://images.squarespace-cdn.com/content/v1/5ae313877106997b679cbd30/1608606414589-7O3PSLSWAXW12GM22VLF/ke17ZwdGBToddI8pDm48kK60W-ob1oA2Fm-j4E_9NQB7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0kD6Ec8Uq9YczfrzwR7e2Mh5VMMOxnTbph8FXiclivDQnof69TlCeE0rAhj6HUpXkw/Interior+murphy+bed+up.jpeg?format=750w',
                img_3: 'https://images.squarespace-cdn.com/content/v1/5ae313877106997b679cbd30/1608606423008-JZVKEX1SGV433QWM218P/ke17ZwdGBToddI8pDm48kK60W-ob1oA2Fm-j4E_9NQB7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0kD6Ec8Uq9YczfrzwR7e2Mh5VMMOxnTbph8FXiclivDQnof69TlCeE0rAhj6HUpXkw/sliding+door.jpeg?format=750w')

v2 = Van.create(name:'The Overlander', description: 'Overland 2020 Mercedes Sprinter 4x4 144',
                price: 160000, mileage: 1000,
                size: '2 person',
                interior_features: 'Removable 3-Panel bed system, bedside cubby, bamboo panels, slide pantry.',
                utilities: 'Electrical cabinet, Stainless Steel Sink, Cuisinart Induction Cooktop, Toilet and shower, usb chargers on both sides of bed, LED ceiling lights (5) on dimmer, 4000k warm white',
                available: true, location: 'Austin',
                rates: 200, pet_friendly: true,
                img_1: 'https://vanlifetrader.com/wp-content/uploads/listing-uploads/gallery/2020/11/IMG-1915-scaled.jpg',
                img_2: 'https://vanlifetrader.com/wp-content/uploads/listing-uploads/gallery/2020/11/IMG-1910-scaled.jpg ',
                img_3: 'https://vanlifetrader.com/wp-content/uploads/listing-uploads/gallery/2020/11/IMG-1912-scaled.jpg')

v3 = Van.create(name: 'The Kowboy Express', description: '2020 Ram Promaster 159" High Roof', 
                price: 84500, mileage: 6000,
                size: '2 person', 
                interior_features: 'Folding King Bed, overhead storage cabinets,  King Bed/lounge area can also be configured into Queen, Twin, or couch setups so that you can freely move about and suit anyone traveling in this van.',
                utilities: 'Deep sink with cold and hot water, dual burner propane stove, indoor high-pressure shower, Cassette Toilet, WEBASTO heater',
                available: true, location: 'Austin',
                rates: 150, pet_friendly: true,
                img_1: 'https://vanlifetrader.com/wp-content/uploads/listing-uploads/gallery/2020/12/kowboykreations_silvinmorgan-17-1-scaled.jpg',
                img_2: 'https://vanlifetrader.com/wp-content/uploads/listing-uploads/gallery/2020/12/kowboykreations_silvinmorgan-23-1-scaled.jpg',
                img_3: 'https://vanlifetrader.com/wp-content/uploads/listing-uploads/gallery/2020/12/kowboykreations_silvinmorgan-14-1-1024x683.jpg.webp')
v4 = Van.create(name: 'The Siesta', description: '2019 Ram Promaster FOUR SEASON stealth conversion with VanLifeTech',
                price: 95000, mileage: 10500,
                size: '2 person',
                interior_features: 'Murphy bed, Dual sliding pocket door bulkhead for open layout with swivel seat, or a light sealed bulkhead look, Live edge walnut countertops and backsplash.',
                utilities: '400w of roof rack mounted solar, can be charged 3 ways - solar, by the vehicles alternator, and by a shore plug, 2-burner induction cooktop, outdoor shower, 35 gallons of fresh water storage, unlimited hot water generation, 4 season capable - all of the plumbing is inside of the van and is heated allowing the van to be used in very cold climates without issue. Dometic CRX50 refrigerator freezer',
                available: true, location: 'San Francisco',
                rates: 200, pet_friendly: true,
                img_1: 'https://vanlifetrader.com/wp-content/uploads/listing-uploads/gallery/2020/11/EditedPics-43-scaled.jpg',
                img_2: 'https://vanlifetrader.com/wp-content/uploads/listing-uploads/gallery/2020/11/EditedPics-9-scaled.jpg',
                img_3: 'https://vanlifetrader.com/wp-content/uploads/listing-uploads/gallery/2020/11/EditedPics-47-683x1024.jpg.webp')
v5 = Van.create(name: 'The Adventurer', description: '2014 Ram 3500 Promaster 159’ High Roof',
                price: 75000, mileage: 112000,
                size: '2 person',
                interior_features: '6” memory form queen mattress, stainless steel fridge/freezer, double burner cook top. Comes with a set of 4 pots/pans. Rivati deep sink, Moen facet with soap dispenser. Custom built cabinets and bench. ',
                utilities: '2 outlets with 2 USB outlets in the kitchen area, Webasto heater with digital thermostat. The heater is connected to the car battery and power box with a flip switch allowing you to pull power from either source.',
                available: true, location: 'Denver',
                rates: 175, pet_friendly: true,
                img_1: 'https://vanlifetrader.com/wp-content/uploads/listing-uploads/gallery/2020/12/DB7D4035-3EB2-43BF-8BB9-662FEAB57E10_1_201_a-scaled.jpeg',
                img_2: 'https://vanlifetrader.com/wp-content/uploads/listing-uploads/gallery/2020/12/041E519A-25DC-4821-AB93-0F36B767B6BB_1_201_a-scaled.jpeg',
                img_3: 'https://vanlifetrader.com/wp-content/uploads/listing-uploads/gallery/2020/12/348D7D51-E8F3-4CA8-A266-92CC4FE64195_1_201_a-scaled.jpeg'
            )
v6 = Van.create(name: 'Blue', description: '2016 Mercedes Benz Sprinter 4x4',
                price: 90000, mileage: 60000,
                size: '2 person',
                interior_features: 'Dining Table, Kitchen Sink, Refrigerator, Stove, Audio Inputs, CD Player',
                utilities: 'Solar Power, AC, Heater', available: true, location: 'Denver', rates: 210, pet_friendly: true,
                img_1: 'https://res.cloudinary.com/outdoorsy/image/upload/v1520367576/p/rentals/3914/images/zf1n3iwbm2lvlqgec4lb.jpg',
                img_2: 'https://res.cloudinary.com/outdoorsy/image/upload/v1520367600/p/rentals/3914/images/tgkcibd3xfqrybayxphu.jpg',
                img_3: 'https://res.cloudinary.com/outdoorsy/image/upload/v1520367654/p/rentals/3914/images/wi14fy9i3m916pt41ckx.jpg')

v7 = Van.create(name: 'The Tin Can', description: '1984 Volkswagen Westfalia Vanagon',
                price: 40000, mileage: 200000,
                size: '4 person',
                interior_features: 'Dining Table, Kitchen Sink, Refrigerator, Stove',
                utilities: 'Solar, Ceiling Fan, Heater', available: true, location: 'Austin', rates: 185,
                pet_friendly: true,
                img_1: 'https://res.cloudinary.com/outdoorsy/image/upload/v1526311928/p/rentals/51155/images/c74mn38t9niqygxdjapa.jpg',
                img_2: 'https://res.cloudinary.com/outdoorsy/image/upload/v1526311922/p/rentals/51155/images/t0kh3vye54np3g39fuzk.jpg',
                img_3: 'https://res.cloudinary.com/outdoorsy/image/upload/v1568318241/p/rentals/51155/images/fip5u3yoew2tne2oysau.jpg')





u1 = User.create(username: "Sara", password: "password")

o1 = Order.create(user_id: u1.id, van_id: v2.id)
o2 = Order.create(user_id: u1.id, van_id: v3.id)


r1 = Review.create(user_id: u1.id, van_id: v1.id, comment: 'We loved the Rambler Experience! We felt free as a bird with our sweet house on wheels. The van is superpractical and has all amenities you’ll need. Would definately recommend this adventurous and colourful experience!')


sv1 = SavedVan.create(user_id: u1.id, van_id: v6.id)

td1 = TripDate.create(departure_date: '1/18/2021', return_date: '1/29/2021', van_id: v6.id, saved_van_id: sv1.id)

