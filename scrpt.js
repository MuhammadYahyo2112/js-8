// Foydalanuvchidan so'zlar ro'yxatini olish
let sozlar = prompt("So'zlarni vergul bilan ajratib kiriting:").split(',');

// 'n' harfi ishtirok etgan so'zlar
let nBilan = sozlar.filter(soz => soz.toLowerCase().includes('n'));

// 'n' harfi ishtirok etmagan so'zlar
let nSiz = sozlar.filter(soz => !soz.toLowerCase().includes('n'));

// Natijani alert orqali chiqarish
alert("'n' harfi ishtirok etgan so'zlar: " + nBilan.join(', '));
alert("'n' harfi ishtirok etmagan so'zlar: " + nSiz.join(', '));
