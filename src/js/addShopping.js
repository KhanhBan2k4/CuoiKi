
//mhom hang hoa

const Products = [
    {
        id: 1,
        name: 'Mercedes Benz Club Black Men EDT',
        price: '1.850.000'
    },
    {
        id: 2,
        name: 'Montblanc Explorer Platinum EDP',
        price: '2.150.000'
    },
    {
        id: 3,
        name: 'Giorgio Armani Acqua di Gio Pour Homme Parfum',
        price: '3.550.000'
    },
    {
        id: 4,
        name: 'Giorgio Armani Armani Code Parfum',
        price: '3.050.000'
    },
    {
        id: 5,
        name: 'Lattafa Maahir Legacy EDP',
        price: '795.000'
    },
    {
        id: 6,
        name: 'GWP Túi Prada Toiletry Bag(20x14x11)',
        price: '1.950.000'
    },
    {
        id: 7,
        name: 'Prada Luna Rossa Black EDP',
        price: '1.950.000'
    },
    {
        id: 8,
        name: 'Prada Luna Ocean EDT',
        price: '6.850.000'
    },
    {
        id: 9,
        name: 'Creed Virgin Island Water EDP',
        price: '1.990.000'
    },
    {
        id: 10,
        name: 'Givenchy Gentleman Reserve Privee EDP',
        price: '2.880.000'
    },
    {
        id: 11,
        name: "Hermes Terre d'Hermes Eau Givree EDP",
        price: '2.250.000'
    },
    {
        id: 12,
        name: 'Azzaro The Most Wanted For Men EDP Intense',
        price: '2.550.000'
    },
    {
        id: 13,
        name: 'Mancera Cedrat Boise Intense Extrait De Parfum',
        price: '950.000'
    },
    {
        id: 14,
        name: 'Salvatore Ferragamo F By Black Men EDT',
        price: '990.000'
    },
    {
        id: 15,
        name: 'Reyane Tradition R2B2 A.I',
        price: '2.250.000'
    },
    {
        id: 16,
        name: 'Memo Winter Palace EDP',
        price: '4.650.000'
    },
    {
        id: 17,
        name: 'Salvatore Ferragamo Uomo Signature EDP',
        price: '1.450.000'
    },
    {
        id: 18,
        name: 'Giorgio Armani Acqua di Gio Pour Homme Parfum',
        price: '3.550.000'
    },
    {
        id: 19,
        name: "GHermes Terre d'Hermes EDT",
        price: '2.650.000'
    },
    {
        id: 20,
        name: 'Jean-Paul-Gaultier-Ultra-Male-EDT',
        price: '3.550.000'
    },
    {
        id: 21,
        name: 'Versace Eros EDT',
        price: '2.400.000'
    },
    {
        id: 22,
        name: 'Moschino Toy Boy EDP',
        price: '1.700.000'
    },
    {
        id: 23,
        name: 'Versace Dylan Blue Pour Homme EDT',
        price: '2.300.000'
    },
    {
        id: 24,
        name: 'YSL Y EDP',
        price: '5.900.000'
    },
    {
        id: 25,
        name: 'YSL Y Le Parfum',
        price: '3.700.000'
    },
    {
        id: 26,
        name: 'Dior Sauvage EDP',
        price: '5.500.000'
    },
    {
        id: 27,
        name: 'Giorgio Armani Acqua di Gio Profondo EDP',
        price: '3.990.000'
    },
    {
        id: 28,
        name: 'Narciso Rodriguez Narciso Poudree EDP',
        price: '3.350.000'
    },
    {
        id: 29,
        name: 'Thierry Mugler Alien EDP',
        price: '2.250.000'
    },
    {
        id: 30,
        name: 'AI Haramain Amber Oud Ruby (Baccarat 540)',
        price: '2.350.000'
    },
    {
        id: 31,
        name: 'Armaf Club De Nuit Women EDP',
        price: '890.000'
    },
    {
        id: 32,
        name: 'Narciso Rodriguez Cristal EDP',
        price: '2.690.000'
    },
    {
        id: 33,
        name: 'Narciso Rodriguez Narciso Pure Musc EDP',
        price: '3.550.000'
    },
    {
        id: 34,
        name: 'Karl Lagerfeld De Pecher EDP',
        price: '1.170.000'
    },
    {
        id: 35,
        name: 'Karl Lagerfeld De Murier EDP',
        price: '1.170.000'
    },
    {
        id: 36,
        name: 'Chanel Coco Mademoiselle EDP',
        price: '6.800.000'
    },
    {
        id: 37,
        name: 'Lancome La Vie Est Belle EDP',
        price: '2.950.000'
    },
    {
        id: 38,
        name: 'Jean Paul Gaultier Scandal EDP',
        price: '3.250.000'
    },
    {
        id: 39,
        name: 'Azzaro The Most Wanted For Men EDP Intense MINI 5ml',
        price: '195.000'
    },
    {
        id: 40,
        name: 'Marc Jacobs Daisy EDT MINI 4ml',
        price: '209.000'
    },
    {
        id: 41,
        name: 'Mac Jacobs Perfect EDP MINI 5ml',
        price: '250.000'
    },
    {
        id: 42,
        name: 'Marc Jacobs Daisy EDT MINI 4ml',
        price: '190.000'
    },
    {
        id: 43,
        name: 'Marc Jacobs Daisy Eau so Fresh EDT MINI 4ml',
        price: '190.000'
    },
    {
        id: 44,
        name: 'Gucci Flora Gorgeous Magnolia EDP 5ml MINI',
        price: '350.000'
    },
    {
        id: 45,
        name: 'Salvatore Ferragamo Signoria Libera EDP Mini 5ml',
        price: '197.000'
    },
    {
        id: 46,
        name: 'Salvatore Ferragamo Ferragamo EDT Mini 5ml',
        price: '185.000'
    },
    {
        id: 47,
        name: 'SON 3CE Soft Matte Lipstick - Giving Pleasure',
        price: '1.850.000'
    },
    {
        id: 48,
        name: 'SON 3CE Soft Matte Lipstick - Smoke Pink',
        price: '1.850.000'
    },
    {
        id: 49,
        name: 'SON 3CE Soft Matte Lipstick - Holy Chic',
        price: '1.850.000'
    },
    {
        id: 50,
        name: 'KSON 3CE Soft Matte Lipstick - Focus On Me',
        price: '1.850.000'
    },
    {
        id: 51,
        name: 'SON 3CE Soft Matte Lipstick - Speak To Me',
        price: '1.850.000'
    },
    {
        id: 52,
        name: 'SON 3CE Red Recipe Lip Color Mini Kit',
        price: '1.850.000'
    },
    {
        id: 53,
        name: 'Son Kem Lì MAC Powder Kiss Liquid 998 Sorry Not Sorry',
        price: '1.850.000'
    },
    {
        id: 54,
        name: "Lancome L'absolu Rouge 175 Obsessive Red Drama Matte",
        price: '1.850.000'
    },
]

//sp noi bat
let i = 0
let couts = 0

$(document).ready(function () {
    $('#cout1').click(function (e) { 
        e.preventDefault()
        let tdNew = '<tr><td>'+(++i)+'</td><td>'+Products[0].name+'</td><td>'+Products[0].price+'</td></tr>'
        console.log('New row:', tdNew)
        $('#DSShopping').append(tdNew)
        ++couts
        $('#countShopping').html(couts)
        $('#countShoppingnew').html(couts)
    })  

    $('#cout2').click(function (e) { 
        e.preventDefault()
        let tdNew = '<tr><td>'+(++i)+'</td><td>'+Products[1].name+'</td><td>'+Products[1].price+'</td></tr>'
        console.log('New row:', tdNew)
        $('#DSShopping').append(tdNew)
        ++couts
        $('#countShopping').html(couts)
        $('#countShoppingnew').html(couts)
    })

    $('#cout3').click(function (e) { 
        e.preventDefault()
        let tdNew = '<tr><td>'+(++i)+'</td><td>'+Products[2].name+'</td><td>'+Products[2].price+'</td></tr>'
        console.log('New row:', tdNew)
        $('#DSShopping').append(tdNew)
        ++couts
        $('#countShopping').html(couts)
        $('#countShoppingnew').html(couts)
    })

    $('#cout4').click(function (e) { 
        e.preventDefault()
        let tdNew = '<tr><td>'+(++i)+'</td><td>'+Products[3].name+'</td><td>'+Products[3].price+'</td></tr>'
        console.log('New row:', tdNew)
        $('#DSShopping').append(tdNew)
        ++couts
        $('#countShopping').html(couts)
        $('#countShoppingnew').html(couts)
    })

    $('#cout5').click(function (e) { 
        e.preventDefault()
        let tdNew = '<tr><td>'+(++i)+'</td><td>'+Products[4].name+'</td><td>'+Products[4].price+'</td></tr>'
        console.log('New row:', tdNew)
        $('#DSShopping').append(tdNew)
        ++couts
        $('#countShopping').html(couts)
        $('#countShoppingnew').html(couts)
    })

    $('#cout6').click(function (e) { 
        e.preventDefault()
        let tdNew = '<tr><td>'+(++i)+'</td><td>'+Products[5].name+'</td><td>'+Products[5].price+'</td></tr>'
        console.log('New row:', tdNew)
        $('#DSShopping').append(tdNew)
        ++couts
        $('#countShopping').html(couts)
        $('#countShoppingnew').html(couts)
    })
    $('#cout7').click(function (e) { 
        e.preventDefault()
        let tdNew = '<tr><td>'+(++i)+'</td><td>'+Products[6].name+'</td><td>'+Products[6].price+'</td></tr>'
        console.log('New row:', tdNew)
        $('#DSShopping').append(tdNew)
        ++couts
        $('#countShopping').html(couts)
        $('#countShoppingnew').html(couts)
    })
    $('#cout8').click(function (e) { 
        e.preventDefault()
        let tdNew = '<tr><td>'+(++i)+'</td><td>'+Products[7].name+'</td><td>'+Products[7].price+'</td></tr>'
        console.log('New row:', tdNew)
        $('#DSShopping').append(tdNew)
        ++couts
        $('#countShopping').html(couts)
        $('#countShoppingnew').html(couts)
    })
    $('#cout9').click(function (e) { 
        e.preventDefault()
        let tdNew = '<tr><td>'+(++i)+'</td><td>'+Products[8].name+'</td><td>'+Products[8].price+'</td></tr>'
        console.log('New row:', tdNew)
        $('#DSShopping').append(tdNew)
        ++couts
        $('#countShopping').html(couts)
        $('#countShoppingnew').html(couts)
    })
    $('#cout10').click(function (e) { 
        e.preventDefault()
        let tdNew = '<tr><td>'+(++i)+'</td><td>'+Products[9].name+'</td><td>'+Products[9].price+'</td></tr>'
        console.log('New row:', tdNew)
        $('#DSShopping').append(tdNew)
        ++couts
        $('#countShopping').html(couts)
        $('#countShoppingnew').html(couts)
    })
    $('#cout11').click(function (e) { 
        e.preventDefault()
        let tdNew = '<tr><td>'+(++i)+'</td><td>'+Products[10].name+'</td><td>'+Products[10].price+'</td></tr>'
        console.log('New row:', tdNew)
        $('#DSShopping').append(tdNew)
        ++couts
        $('#countShopping').html(couts)
        $('#countShoppingnew').html(couts)
    })
    $('#cout12').click(function (e) { 
        e.preventDefault()
        let tdNew = '<tr><td>'+(++i)+'</td><td>'+Products[11].name+'</td><td>'+Products[11].price+'</td></tr>'
        console.log('New row:', tdNew)
        $('#DSShopping').append(tdNew)
        ++couts
        $('#countShopping').html(couts)
        $('#countShoppingnew').html(couts)
    })
    $('#cout13').click(function (e) { 
        e.preventDefault()
        let tdNew = '<tr><td>'+(++i)+'</td><td>'+Products[12].name+'</td><td>'+Products[12].price+'</td></tr>'
        console.log('New row:', tdNew)
        $('#DSShopping').append(tdNew)
        ++couts
        $('#countShopping').html(couts)
        $('#countShoppingnew').html(couts)
    })
    $('#cout14').click(function (e) { 
        e.preventDefault()
        let tdNew = '<tr><td>'+(++i)+'</td><td>'+Products[13].name+'</td><td>'+Products[13].price+'</td></tr>'
        console.log('New row:', tdNew)
        $('#DSShopping').append(tdNew)
        ++couts
        $('#countShopping').html(couts)
        $('#countShoppingnew').html(couts)
    })
    $('#cout15').click(function (e) { 
        e.preventDefault()
        let tdNew = '<tr><td>'+(++i)+'</td><td>'+Products[14].name+'</td><td>'+Products[14].price+'</td></tr>'
        console.log('New row:', tdNew)
        $('#DSShopping').append(tdNew)
        ++couts
        $('#countShopping').html(couts)
        $('#countShoppingnew').html(couts)
    })
    $('#cout16').click(function (e) { 
        e.preventDefault()
        let tdNew = '<tr><td>'+(++i)+'</td><td>'+Products[15].name+'</td><td>'+Products[15].price+'</td></tr>'
        console.log('New row:', tdNew)
        $('#DSShopping').append(tdNew)
        ++couts
        $('#countShopping').html(couts)
        $('#countShoppingnew').html(couts)
    })
    $('#cout17').click(function (e) { 
        e.preventDefault()
        let tdNew = '<tr><td>'+(++i)+'</td><td>'+Products[16].name+'</td><td>'+Products[16].price+'</td></tr>'
        console.log('New row:', tdNew)
        $('#DSShopping').append(tdNew)
        ++couts
        $('#countShopping').html(couts)
        $('#countShoppingnew').html(couts)
    })
    $('#cout18').click(function (e) { 
        e.preventDefault()
        let tdNew = '<tr><td>'+(++i)+'</td><td>'+Products[17].name+'</td><td>'+Products[17].price+'</td></tr>'
        console.log('New row:', tdNew)
        $('#DSShopping').append(tdNew)
        ++couts
        $('#countShopping').html(couts)
        $('#countShoppingnew').html(couts)
    })
    $('#cout19').click(function (e) { 
        e.preventDefault()
        let tdNew = '<tr><td>'+(++i)+'</td><td>'+Products[18].name+'</td><td>'+Products[18].price+'</td></tr>'
        console.log('New row:', tdNew)
        $('#DSShopping').append(tdNew)
        ++couts
        $('#countShopping').html(couts)
        $('#countShoppingnew').html(couts)
    })
    $('#cout20').click(function (e) { 
        e.preventDefault()
        let tdNew = '<tr><td>'+(++i)+'</td><td>'+Products[19].name+'</td><td>'+Products[19].price+'</td></tr>'
        console.log('New row:', tdNew)
        $('#DSShopping').append(tdNew)
        ++couts
        $('#countShopping').html(couts)
        $('#countShoppingnew').html(couts)
    })
    $('#cout21').click(function (e) { 
        e.preventDefault()
        let tdNew = '<tr><td>'+(++i)+'</td><td>'+Products[20].name+'</td><td>'+Products[20].price+'</td></tr>'
        console.log('New row:', tdNew)
        $('#DSShopping').append(tdNew)
        ++couts
        $('#countShopping').html(couts)
        $('#countShoppingnew').html(couts)
    })
    $('#cout22').click(function (e) { 
        e.preventDefault()
        let tdNew = '<tr><td>'+(++i)+'</td><td>'+Products[21].name+'</td><td>'+Products[21].price+'</td></tr>'
        console.log('New row:', tdNew)
        $('#DSShopping').append(tdNew)
        ++couts
        $('#countShopping').html(couts)
        $('#countShoppingnew').html(couts)
    })
    $('#cout23').click(function (e) { 
        e.preventDefault()
        let tdNew = '<tr><td>'+(++i)+'</td><td>'+Products[22].name+'</td><td>'+Products[22].price+'</td></tr>'
        console.log('New row:', tdNew)
        $('#DSShopping').append(tdNew)
        ++couts
        $('#countShopping').html(couts)
        $('#countShoppingnew').html(couts)
    })
    $('#cout24').click(function (e) { 
        e.preventDefault()
        let tdNew = '<tr><td>'+(++i)+'</td><td>'+Products[23].name+'</td><td>'+Products[23].price+'</td></tr>'
        console.log('New row:', tdNew)
        $('#DSShopping').append(tdNew)
        ++couts
        $('#countShopping').html(couts)
        $('#countShoppingnew').html(couts)
    })
    $('#cout25').click(function (e) { 
        e.preventDefault()
        let tdNew = '<tr><td>'+(++i)+'</td><td>'+Products[24].name+'</td><td>'+Products[24].price+'</td></tr>'
        console.log('New row:', tdNew)
        $('#DSShopping').append(tdNew)
        ++couts
        $('#countShopping').html(couts)
        $('#countShoppingnew').html(couts)
    })
    $('#cout26').click(function (e) { 
        e.preventDefault()
        let tdNew = '<tr><td>'+(++i)+'</td><td>'+Products[25].name+'</td><td>'+Products[25].price+'</td></tr>'
        console.log('New row:', tdNew)
        $('#DSShopping').append(tdNew)
        ++couts
        $('#countShopping').html(couts)
        $('#countShoppingnew').html(couts)
    })
    $('#cout27').click(function (e) { 
        e.preventDefault()
        let tdNew = '<tr><td>'+(++i)+'</td><td>'+Products[26].name+'</td><td>'+Products[26].price+'</td></tr>'
        console.log('New row:', tdNew)
        $('#DSShopping').append(tdNew)
        ++couts
        $('#countShopping').html(couts)
        $('#countShoppingnew').html(couts)
    })
    $('#cout28').click(function (e) { 
        e.preventDefault()
        let tdNew = '<tr><td>'+(++i)+'</td><td>'+Products[27].name+'</td><td>'+Products[27].price+'</td></tr>'
        console.log('New row:', tdNew)
        $('#DSShopping').append(tdNew)
        ++couts
        $('#countShopping').html(couts)
        $('#countShoppingnew').html(couts)
    })
    $('#cout29').click(function (e) { 
        e.preventDefault()
        let tdNew = '<tr><td>'+(++i)+'</td><td>'+Products[28].name+'</td><td>'+Products[28].price+'</td></tr>'
        console.log('New row:', tdNew)
        $('#DSShopping').append(tdNew)
        ++couts
        $('#countShopping').html(couts)
        $('#countShoppingnew').html(couts)
    })
    $('#cout30').click(function (e) { 
        e.preventDefault()
        let tdNew = '<tr><td>'+(++i)+'</td><td>'+Products[29].name+'</td><td>'+Products[29].price+'</td></tr>'
        console.log('New row:', tdNew)
        $('#DSShopping').append(tdNew)
        ++couts
        $('#countShopping').html(couts)
        $('#countShoppingnew').html(couts)
    })
    $('#cout31').click(function (e) { 
        e.preventDefault()
        let tdNew = '<tr><td>'+(++i)+'</td><td>'+Products[30].name+'</td><td>'+Products[30].price+'</td></tr>'
        console.log('New row:', tdNew)
        $('#DSShopping').append(tdNew)
        ++couts
        $('#countShopping').html(couts)
        $('#countShoppingnew').html(couts)
    })
    $('#cout32').click(function (e) { 
        e.preventDefault()
        let tdNew = '<tr><td>'+(++i)+'</td><td>'+Products[31].name+'</td><td>'+Products[31].price+'</td></tr>'
        console.log('New row:', tdNew)
        $('#DSShopping').append(tdNew)
        ++couts
        $('#countShopping').html(couts)
        $('#countShoppingnew').html(couts)
    })
    $('#cout33').click(function (e) { 
        e.preventDefault()
        let tdNew = '<tr><td>'+(++i)+'</td><td>'+Products[32].name+'</td><td>'+Products[32].price+'</td></tr>'
        console.log('New row:', tdNew)
        $('#DSShopping').append(tdNew)
        ++couts
        $('#countShopping').html(couts)
        $('#countShoppingnew').html(couts)
    })
    $('#cout34').click(function (e) { 
        e.preventDefault()
        let tdNew = '<tr><td>'+(++i)+'</td><td>'+Products[33].name+'</td><td>'+Products[33].price+'</td></tr>'
        console.log('New row:', tdNew)
        $('#DSShopping').append(tdNew)
        ++couts
        $('#countShopping').html(couts)
        $('#countShoppingnew').html(couts)
    })
    $('#cout35').click(function (e) { 
        e.preventDefault()
        let tdNew = '<tr><td>'+(++i)+'</td><td>'+Products[34].name+'</td><td>'+Products[34].price+'</td></tr>'
        console.log('New row:', tdNew)
        $('#DSShopping').append(tdNew)
        ++couts
        $('#countShopping').html(couts)
        $('#countShoppingnew').html(couts)
    })
    $('#cout36').click(function (e) { 
        e.preventDefault()
        let tdNew = '<tr><td>'+(++i)+'</td><td>'+Products[35].name+'</td><td>'+Products[35].price+'</td></tr>'
        console.log('New row:', tdNew)
        $('#DSShopping').append(tdNew)
        ++couts
        $('#countShopping').html(couts)
        $('#countShoppingnew').html(couts)
    })
    $('#cout37').click(function (e) { 
        e.preventDefault()
        let tdNew = '<tr><td>'+(++i)+'</td><td>'+Products[36].name+'</td><td>'+Products[36].price+'</td></tr>'
        console.log('New row:', tdNew)
        $('#DSShopping').append(tdNew)
        ++couts
        $('#countShopping').html(couts)
        $('#countShoppingnew').html(couts)
    })
    $('#cout38').click(function (e) { 
        e.preventDefault()
        let tdNew = '<tr><td>'+(++i)+'</td><td>'+Products[37].name+'</td><td>'+Products[37].price+'</td></tr>'
        console.log('New row:', tdNew)
        $('#DSShopping').append(tdNew)
        ++couts
        $('#countShopping').html(couts)
        $('#countShoppingnew').html(couts)
    })
    $('#cout39').click(function (e) { 
        e.preventDefault()
        let tdNew = '<tr><td>'+(++i)+'</td><td>'+Products[38].name+'</td><td>'+Products[38].price+'</td></tr>'
        console.log('New row:', tdNew)
        $('#DSShopping').append(tdNew)
        ++couts
        $('#countShopping').html(couts)
        $('#countShoppingnew').html(couts)
    })
    $('#cout40').click(function (e) { 
        e.preventDefault()
        let tdNew = '<tr><td>'+(++i)+'</td><td>'+Products[39].name+'</td><td>'+Products[39].price+'</td></tr>'
        console.log('New row:', tdNew)
        $('#DSShopping').append(tdNew)
        ++couts
        $('#countShopping').html(couts)
        $('#countShoppingnew').html(couts)
    })
    $('#cout41').click(function (e) { 
        e.preventDefault()
        let tdNew = '<tr><td>'+(++i)+'</td><td>'+Products[40].name+'</td><td>'+Products[40].price+'</td></tr>'
        console.log('New row:', tdNew)
        $('#DSShopping').append(tdNew)
        ++couts
        $('#countShopping').html(couts)
        $('#countShoppingnew').html(couts)
    })
    $('#cout42').click(function (e) { 
        e.preventDefault()
        let tdNew = '<tr><td>'+(++i)+'</td><td>'+Products[41].name+'</td><td>'+Products[41].price+'</td></tr>'
        console.log('New row:', tdNew)
        $('#DSShopping').append(tdNew)
        ++couts
        $('#countShopping').html(couts)
        $('#countShoppingnew').html(couts)
    })
    $('#cout43').click(function (e) { 
        e.preventDefault()
        let tdNew = '<tr><td>'+(++i)+'</td><td>'+Products[42].name+'</td><td>'+Products[42].price+'</td></tr>'
        console.log('New row:', tdNew)
        $('#DSShopping').append(tdNew)
        ++couts
        $('#countShopping').html(couts)
        $('#countShoppingnew').html(couts)
    })
    $('#cout44').click(function (e) { 
        e.preventDefault()
        let tdNew = '<tr><td>'+(++i)+'</td><td>'+Products[43].name+'</td><td>'+Products[43].price+'</td></tr>'
        console.log('New row:', tdNew)
        $('#DSShopping').append(tdNew)
        ++couts
        $('#countShopping').html(couts)
        $('#countShoppingnew').html(couts)
    })
    $('#cout45').click(function (e) { 
        e.preventDefault()
        let tdNew = '<tr><td>'+(++i)+'</td><td>'+Products[44].name+'</td><td>'+Products[44].price+'</td></tr>'
        console.log('New row:', tdNew)
        $('#DSShopping').append(tdNew)
        ++couts
        $('#countShopping').html(couts)
        $('#countShoppingnew').html(couts)
    })
    $('#cout46').click(function (e) { 
        e.preventDefault()
        let tdNew = '<tr><td>'+(++i)+'</td><td>'+Products[45].name+'</td><td>'+Products[45].price+'</td></tr>'
        console.log('New row:', tdNew)
        $('#DSShopping').append(tdNew)
        ++couts
        $('#countShopping').html(couts)
        $('#countShoppingnew').html(couts)
    })
    $('#cout47').click(function (e) { 
        e.preventDefault()
        let tdNew = '<tr><td>'+(++i)+'</td><td>'+Products[46].name+'</td><td>'+Products[46].price+'</td></tr>'
        console.log('New row:', tdNew)
        $('#DSShopping').append(tdNew)
        ++couts
        $('#countShopping').html(couts)
        $('#countShoppingnew').html(couts)
    })
    $('#cout48').click(function (e) { 
        e.preventDefault()
        let tdNew = '<tr><td>'+(++i)+'</td><td>'+Products[47].name+'</td><td>'+Products[47].price+'</td></tr>'
        console.log('New row:', tdNew)
        $('#DSShopping').append(tdNew)
        ++couts
        $('#countShopping').html(couts)
        $('#countShoppingnew').html(couts)
    })
    $('#cout49').click(function (e) { 
        e.preventDefault()
        let tdNew = '<tr><td>'+(++i)+'</td><td>'+Products[48].name+'</td><td>'+Products[48].price+'</td></tr>'
        console.log('New row:', tdNew)
        $('#DSShopping').append(tdNew)
        ++couts
        $('#countShopping').html(couts)
        $('#countShoppingnew').html(couts)
    })
    $('#cout50').click(function (e) { 
        e.preventDefault()
        let tdNew = '<tr><td>'+(++i)+'</td><td>'+Products[49].name+'</td><td>'+Products[49].price+'</td></tr>'
        console.log('New row:', tdNew)
        $('#DSShopping').append(tdNew)
        ++couts
        $('#countShopping').html(couts)
        $('#countShoppingnew').html(couts)
    })
    $('#cout51').click(function (e) { 
        e.preventDefault()
        let tdNew = '<tr><td>'+(++i)+'</td><td>'+Products[50].name+'</td><td>'+Products[50].price+'</td></tr>'
        console.log('New row:', tdNew)
        $('#DSShopping').append(tdNew)
        ++couts
        $('#countShopping').html(couts)
        $('#countShoppingnew').html(couts)
    })
    $('#cout52').click(function (e) { 
        e.preventDefault()
        let tdNew = '<tr><td>'+(++i)+'</td><td>'+Products[51].name+'</td><td>'+Products[51].price+'</td></tr>'
        console.log('New row:', tdNew)
        $('#DSShopping').append(tdNew)
        ++couts
        $('#countShopping').html(couts)
        $('#countShoppingnew').html(couts)
    })
    $('#cout53').click(function (e) { 
        e.preventDefault()
        let tdNew = '<tr><td>'+(++i)+'</td><td>'+Products[52].name+'</td><td>'+Products[52].price+'</td></tr>'
        console.log('New row:', tdNew)
        $('#DSShopping').append(tdNew)
        ++couts
        $('#countShopping').html(couts)
        $('#countShoppingnew').html(couts)
    })
    $('#cout54').click(function (e) { 
        e.preventDefault()
        let tdNew = '<tr><td>'+(++i)+'</td><td>'+Products[53].name+'</td><td>'+Products[53].price+'</td></tr>'
        console.log('New row:', tdNew)
        $('#DSShopping').append(tdNew)
        ++couts
        $('#countShopping').html(couts)
        $('#countShoppingnew').html(couts)
    })

    $('#searchInput').on('input', function () {
        var searchTerm = $(this).val().toLowerCase();
        var suggestions = [];

        // Lọc danh sách sản phẩm
        for (var i = 0; i < Products.length; i++) {
            if (products[i].toUpperCase().startsWith(searchTerm)) {
                suggestions.push(Products[i]);
            }
        }

        // Hiển thị gợi ý
        displaySuggestions(suggestions);
    });

    // Hiển thị danh sách gợi ý
    function displaySuggestions(suggestions) {
        var suggestionsList = $('#suggestions');
        suggestionsList.empty();

        for (var i = 0; i < suggestions.length; i++) {
            var listItem = $('<li>').addClass('list-group-item').text(suggestions[i]);
            suggestionsList.append(listItem);
        }
    }
})