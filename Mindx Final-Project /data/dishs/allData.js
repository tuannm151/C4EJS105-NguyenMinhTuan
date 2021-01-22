let recipes = [
    {
        recipe_name: 'Gà chiên nước mắm',
        recipe_id: '0',
        category: 'asia', // phân loại món á, món âu, ...
        difficult: 'medium', // độ khó
        time: '45', // thời gian nấu
        type: 'main', // loại: bữa chính, bữa sáng, bữa tối
        recipe_ingredients: [
            {
                id: '5',
                amount: '500',
            },
            {
                id: '7',
                amount: '11',
            },
            {
                id: '1',
                amount: '1/3',
            },
            {
                id: '6',
                amount: '1',
            },
            {
                id: '2',
                amount: '7',
            },
            {
                id: '3',
                amount: '1/3',
            },
            {
                id: '0',
                amount: '1/2',
            },
            {
                id: '4',
                amount: '2',
            },
        ],
        recipe_instruction: ['  Rửa cánh gà, chà nhẹ muối lên da gà và rửa dưới vòi nước để bỏ bớt mùi hôi. Cắt ở khớp khuỷu tay hoặc thành miếng nhỏ tùy ý.','Đặt cánh gà vào bát, ướp với hạt nêm, 1 thìa cà phê đường, 2 thìa cà phê nước mắm. Ướp trong khoảng 15 phút.', ' Hành tím bóc vỏ băm nhỏ. Tỏi bóc vỏ cắt nhỏ một ít, một ít để nguyên múi.','  Pha 3 thìa canh nước mắm, 2 thìa cà phê đường, 1/3 thìa cà phê hạt tiêu rồi khuấy đều cho đến khi tan.','Cho dầu vào chảo, đợi nóng thì cho cánh gà vào chiên vàng khoảng 15 - 20 phút. Vớt ra đặt lên giấy thấm bớt dầu ăn. Sau đó cho tỏi vào chảo phi thơm vớt ra để riêng.','  Đổ dầu ăn ra, chừa lại một ít, rồi cho hành tím băm vào chảo phi thơm, tiếp theo cho gà và tỏi đã phi thơm vào xào cùng. Sau đó đổ chén nước sốt vào xào khoảng 3-4 phút thì tắt bếp.','Múc cánh gà chiên sốt nước mắm ra đĩa, trang trí ớt hoặc rau ngò cho đẹp mắt nhé!'],
    },
]

let ingrediens = [
    {
        name: 'Tỏi',
        id: '0',
        price: '1',
        measurement: 'củ',
        type: 'vegetable', // rau cu
    },
    {
        name: 'Hạt tiêu',
        id: '1',
        price: '1',
        measurement: 'thìa',
        type: 'seasoning', // gia vi
    },
    {
        name: 'Đường trắng',
        id: '2',
        price: '2',
        measurement: 'thìa',
        type: 'seasoning',
    },
    {
        name: 'Hạt nêm',
        id: '3',
        price: '1',
        measurement: 'thìa',
        type: 'seasoning',
    },
    {
        name: 'Dầu ăn',
        id: '4',
        price: '3',
        measurement: 'thìa',
        type: 'seasoning',
    },
    {
        name: 'Thịt gà',
        id: '5',
        price: '3',
        measurement: 'gram',
        type: 'meat',
    },
    {
        name: 'Hành tím',
        id: '6',
        price: '3',
        measurement: 'củ',
        type: 'vegetable',
    },
    {
        name: 'Nước mắm',
        id: '7',
        price: '3',
        measurement: 'thìa',
        type: 'seasoning',
    }
]
