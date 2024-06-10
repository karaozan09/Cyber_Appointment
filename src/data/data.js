/* eslint-disable prettier/prettier */
const moment = require('moment');
const data = [
    {
      id: '1',
      name: 'Brandefenseio',
      hakkında:'Brandefense, eski adıyla Prisma, 2016 yılında kurulmuştur. Şirket, siber güvenlik alanında faaliyet gösteren bir yazılım şirketidir. ',
      hizmetler: [
        {
          id: '1',
          hizmetAdi: 'Sızma testi',
          icerik: 'Sızma testi, sistemin güvenliğini değerlendirmek üzere bir bilgisayar sistemi üzerinde gerçekleştirilen yetkilendirilmiş temsili bir siber saldırıdır.',
          fiyat: 2500,
          uygunlukTarihleri: [
            {
              id: '1',
              tarih: '22.11.2022',
              saatler: ['10:00', '11:00', '12:00']
            }
          ]
        },
        {
          id: '2',
          hizmetAdi: 'Veritabanı güvenliği',
          icerik: 'Veritabanı güvenliği, çok çeşitli bilgi güvenliği kontrollerinin kullanımı ile ilgilidir ve veri tabanlarınının gizliliğini, bütünlüğünü ve erişilebilirliğini saldırılara karşı korur.',
          fiyat: 3800,
          uygunlukTarihleri: [
            {
              id: '2',
              tarih: '23.11.2022',
              saatler: ['09:00', '10:00', '11:00']
            }
          ]
        },
        {
          id: '3',
          hizmetAdi: 'Web güvenliği',
          icerik: 'Internet güvenliği, yalnızca Internet, sıkça tarayıcı güvenliği ve World Wide Web ile ilgili değil, aynı zamanda Ağ Güvenliği, uygulama ve işletim sistemleri sistemleri ile bir bütün olarak ilgilidir. Amacı, internet üzerinden saldırılara karşı kullanılacak kurallar ve önlemler oluşturmaktır.',
          fiyat: 4000,
          uygunlukTarihleri: [
            {
              id: '3',
              tarih: '24.11.2022',
              saatler: ['10:00', '11:00', '12:00']
            }
          ]
        },
        {
          id: '4',
          hizmetAdi: 'Mobil güvenliği',
          icerik: 'Mobil güvenlik ya da mobil telefon güvenliği, mobil işlemenin öneminin ve kullanılan akıllı telefonların sayısının artması ile birlikte öne çıkmıştır. Genel olarak bakıldığında, mobil güvenlik, mobil cihazlarda saklanan bilgilerin ve servislerin koruma altına alınması olarak değerlendirilebilir.',
          fiyat: 3500,
          uygunlukTarihleri: [
            {
              id: '4',
              tarih: '25.11.2022',
              saatler: ['09:00', '10:00', '11:00']
            }
          ]
        },
        {
          id: '5',
          hizmetAdi: 'Sunucu güvenliği',
          icerik: 'Sunucu güvenliği, bir bilgisayar ağındaki sunucuların korunması ve güvence altına alınmasıyla ilgili bir disiplindir. Sunucular, genellikle ağdaki diğer cihazlara hizmet veren ve önemli verileri barındıran sistemlerdir, bu nedenle bunların güvenliği son derece önemlidir. İyi bir sunucu güvenliği stratejisi aşağıdaki unsurları içerebilir',
          fiyat: 5500,
          uygunlukTarihleri: [
            {
              id: '5',
              tarih: '26.11.2022',
              saatler: ['10:00', '11:00', '12:00']
            }
          ]
        }
      ]
    },
    {
      id: '2',
      name: 'Prodraft',
      hakkında: 'Prodaft öncü bir tehdit istihbarat şirketi olarak on yılı aşkın bir süredir siber tehditleri öngörme alanında uzmanlaşmaktadır. Kaynak eksikliği, özel ekiplerin bulunmaması, uygunsuz veya karmaşık çözümler, aşırı yoğunluk veya sadece farkındalık eksikliği nedeniyle siber risklere maruz kalan hem özel hem de kamu sektöründeki kuruluşları desteklemektedirler.',
      hizmetler: [
        {
          id: '1',
          hizmetAdi: 'Sızma testi',
          icerik: 'Sızma testi, sistemin güvenliğini değerlendirmek üzere bir bilgisayar sistemi üzerinde gerçekleştirilen yetkilendirilmiş temsili bir siber saldırıdır.',
          fiyat: 1000,
          uygunlukTarihleri: [
            {
              id: '1',
              tarih: '22.11.2022',
              saatler: ['10:00', '11:00', '12:00']
            }
          ]
        },
        {
          id: '2',
          hizmetAdi: 'Veritabanı güvenliği',
          icerik: 'Veritabanı güvenliği, çok çeşitli bilgi güvenliği kontrollerinin kullanımı ile ilgilidir ve veri tabanlarınının gizliliğini, bütünlüğünü ve erişilebilirliğini saldırılara karşı korur.',
          fiyat: 6100,
          uygunlukTarihleri: [
            {
              id: '2',
              tarih: '23.11.2022',
              saatler: ['09:00', '10:00', '11:00']
            }
          ]
        },
        {
          id: '3',
          hizmetAdi: 'Web güvenliği',
          icerik: 'Internet güvenliği, yalnızca Internet, sıkça tarayıcı güvenliği ve World Wide Web ile ilgili değil, aynı zamanda Ağ Güvenliği, uygulama ve işletim sistemleri sistemleri ile bir bütün olarak ilgilidir. Amacı, internet üzerinden saldırılara karşı kullanılacak kurallar ve önlemler oluşturmaktır.',
          fiyat: 4000,
          uygunlukTarihleri: [
            {
              id: '3',
              tarih: '24.11.2022',
              saatler: ['10:00', '11:00', '12:00']
            }
          ]
        },
        {
          id: '4',
          hizmetAdi: 'Mobil güvenliği',
          icerik: 'Mobil güvenlik ya da mobil telefon güvenliği, mobil işlemenin öneminin ve kullanılan akıllı telefonların sayısının artması ile birlikte öne çıkmıştır. Genel olarak bakıldığında, mobil güvenlik, mobil cihazlarda saklanan bilgilerin ve servislerin koruma altına alınması olarak değerlendirilebilir.',
          fiyat: 3500,
          uygunlukTarihleri: [
            {
              id: '4',
              tarih: '25.11.2022',
              saatler: ['09:00', '10:00', '11:00']
            }
          ]
        },
        {
          id: '5',
          hizmetAdi: 'Sunucu güvenliği',
          icerik: 'Sunucu güvenliği, bir bilgisayar ağındaki sunucuların korunması ve güvence altına alınmasıyla ilgili bir disiplindir. Sunucular, genellikle ağdaki diğer cihazlara hizmet veren ve önemli verileri barındıran sistemlerdir, bu nedenle bunların güvenliği son derece önemlidir. İyi bir sunucu güvenliği stratejisi aşağıdaki unsurları içerebilir',
          fiyat: 5000,
          uygunlukTarihleri: [
            {
              id: '5',
              tarih: '26.11.2022',
              saatler: ['10:00', '11:00', '12:00']
            }
          ]
        }
      ]
    },
    {
      id: '3',
      name: 'Barikat',
      hakkında: 'Barikat Siber Güvenlik şirketi, 2015 yılında kurulmuştur. Kurucuları arasında Murat Başaran, Mehmet Fatih Öztürk ve Uğur Çelebi yer almaktadır. Bir danışmanlık şirketi olup kullanıcılara çeşitli hizmetler, çözümler ve teknolojiler sunmaktadır',
      hizmetler: [
        {
          id: '1',
          hizmetAdi: 'Sızma testi',
          icerik: 'Sızma testi, sistemin güvenliğini değerlendirmek üzere bir bilgisayar sistemi üzerinde gerçekleştirilen yetkilendirilmiş temsili bir siber saldırıdır.',
          fiyat: 1200,
          uygunlukTarihleri: [
            {
              id: '1',
              tarih: '22.11.2022',
              saatler: ['10:00', '11:00', '12:00']
            }
          ]
        },
        {
          id: '2',
          hizmetAdi: 'Veritabanı güvenliği',
          icerik: 'Veritabanı güvenliği, çok çeşitli bilgi güvenliği kontrollerinin kullanımı ile ilgilidir ve veri tabanlarınının gizliliğini, bütünlüğünü ve erişilebilirliğini saldırılara karşı korur.',
          fiyat: 5600,
          uygunlukTarihleri: [
            {
              id: '2',
              tarih: '23.11.2022',
              saatler: ['09:00', '10:00', '11:00']
            }
          ]
        },
        {
          id: '3',
          hizmetAdi: 'Web güvenliği',
          icerik: 'Internet güvenliği, yalnızca Internet, sıkça tarayıcı güvenliği ve World Wide Web ile ilgili değil, aynı zamanda Ağ Güvenliği, uygulama ve işletim sistemleri sistemleri ile bir bütün olarak ilgilidir. Amacı, internet üzerinden saldırılara karşı kullanılacak kurallar ve önlemler oluşturmaktır.',
          fiyat: 4200,
          uygunlukTarihleri: [
            {
              id: '3',
              tarih: '24.11.2022',
              saatler: ['10:00', '11:00', '12:00']
            }
          ]
        },
        {
          id: '4',
          hizmetAdi: 'Mobil güvenliği',
          icerik: 'Mobil güvenlik ya da mobil telefon güvenliği, mobil işlemenin öneminin ve kullanılan akıllı telefonların sayısının artması ile birlikte öne çıkmıştır. Genel olarak bakıldığında, mobil güvenlik, mobil cihazlarda saklanan bilgilerin ve servislerin koruma altına alınması olarak değerlendirilebilir.',
          fiyat: 3200,
          uygunlukTarihleri: [
            {
              id: '4',
              tarih: '25.11.2022',
              saatler: ['09:00', '10:00', '11:00']
            }
          ]
        },
        {
          id: '5',
          hizmetAdi: 'Sunucu güvenliği',
          icerik: 'Sunucu güvenliği, bir bilgisayar ağındaki sunucuların korunması ve güvence altına alınmasıyla ilgili bir disiplindir. Sunucular, genellikle ağdaki diğer cihazlara hizmet veren ve önemli verileri barındıran sistemlerdir, bu nedenle bunların güvenliği son derece önemlidir. İyi bir sunucu güvenliği stratejisi aşağıdaki unsurları içerebilir',
          fiyat: 6000,
          uygunlukTarihleri: [
            {
              id: '5',
              tarih: '26.11.2022',
              saatler: ['10:00', '11:00', '12:00']
            }
          ]
        }
      ]
    },
    {
      id: '4',
      name: 'Comodo',
      hakkında: 'Comodo, bilgisayar güvenliği ve dijital sertifika sağlayıcısı olarak bilinen bir şirkettir. Şirket, kök sertifikaları, SSL sertifikaları, sızıntı önleme çözümleri, kötü amaçlı yazılım tespiti ve önleme yazılımları, güvenlik duvarları ve diğer güvenlik ürünleri sunar',
      hizmetler: [
        {
          id: '1',
          hizmetAdi: 'Sızma testi',
          icerik: 'Sızma testi, sistemin güvenliğini değerlendirmek üzere bir bilgisayar sistemi üzerinde gerçekleştirilen yetkilendirilmiş temsili bir siber saldırıdır',
          fiyat: 1700,
          uygunlukTarihleri: [
            {
              id: '1',
              tarih: '22.11.2022',
              saatler: ['10:00', '11:00', '12:00']
            }
          ]
        },
        {
          id: '2',
          hizmetAdi: 'Veritabanı güvenliği',
          icerik: 'Veritabanı güvenliği, çok çeşitli bilgi güvenliği kontrollerinin kullanımı ile ilgilidir ve veri tabanlarınının gizliliğini, bütünlüğünü ve erişilebilirliğini saldırılara karşı korur.',
          fiyat: 5800,
          uygunlukTarihleri: [
            {
              id: '2',
              tarih: '23.11.2022',
              saatler: ['09:00', '10:00', '11:00']
            }
          ]
        },
        {
          id: '3',
          hizmetAdi: 'Web güvenliği',
          icerik: 'Internet güvenliği, yalnızca Internet, sıkça tarayıcı güvenliği ve World Wide Web ile ilgili değil, aynı zamanda Ağ Güvenliği, uygulama ve işletim sistemleri sistemleri ile bir bütün olarak ilgilidir. Amacı, internet üzerinden saldırılara karşı kullanılacak kurallar ve önlemler oluşturmaktır.',
          fiyat: 4000,
          uygunlukTarihleri: [
            {
              id: '3',
              tarih: '24.11.2022',
              saatler: ['10:00', '11:00', '12:00']
            }
          ]
        },
        {
          id: '4',
          hizmetAdi: 'Mobil güvenliği',
          icerik: 'Mobil güvenlik ya da mobil telefon güvenliği, mobil işlemenin öneminin ve kullanılan akıllı telefonların sayısının artması ile birlikte öne çıkmıştır. Genel olarak bakıldığında, mobil güvenlik, mobil cihazlarda saklanan bilgilerin ve servislerin koruma altına alınması olarak değerlendirilebilir.',
          fiyat: 3700,
          uygunlukTarihleri: [
            {
              id: '4',
              tarih: '25.11.2022',
              saatler: ['09:00', '10:00', '11:00']
            }
          ]
        },
        {
          id: '5',
          hizmetAdi: 'Sunucu güvenliği',
          icerik: 'Sunucu güvenliği, bir bilgisayar ağındaki sunucuların korunması ve güvence altına alınmasıyla ilgili bir disiplindir. Sunucular, genellikle ağdaki diğer cihazlara hizmet veren ve önemli verileri barındıran sistemlerdir, bu nedenle bunların güvenliği son derece önemlidir. İyi bir sunucu güvenliği stratejisi aşağıdaki unsurları içerebilir',
          fiyat: 4900,
          uygunlukTarihleri: [
            {
              id: '5',
              tarih: '26.11.2022',
              saatler: ['10:00', '11:00', '12:00']
            }
          ]
        }
      ]
    },
    {
      id: '5',
      name: 'NetsParker',
      hakkında: 'Netsparker, 2009 yılında kurulmuştur. Kuruluşundan bu yana web uygulaması güvenliği alanında yazılım ve hizmetler sunmaktadır.Netsparker, bir ürün şirketidir',
      hizmetler: [
        {
          id: '1',
          hizmetAdi: 'Sızma testi',
          icerik: 'Sızma testi, sistemin güvenliğini değerlendirmek üzere bir bilgisayar sistemi üzerinde gerçekleştirilen yetkilendirilmiş temsili bir siber saldırıdır.',
          fiyat: 1500,
          uygunlukTarihleri: [
            {
              id: '1',
              tarih: '22.11.2022',
              saatler: ['10:00', '11:00', '12:00']
            }
          ]
        },
        {
          id: '2',
          hizmetAdi: 'Veritabanı güvenliği',
          icerik: 'Veritabanı güvenliği, çok çeşitli bilgi güvenliği kontrollerinin kullanımı ile ilgilidir ve veri tabanlarınının gizliliğini, bütünlüğünü ve erişilebilirliğini saldırılara karşı korur.',
          fiyat: 5000,
          uygunlukTarihleri: [
            {
              id: '2',
              tarih: '23.11.2022',
              saatler: ['09:00', '10:00', '11:00']
            }
          ]
        },
        {
          id: '3',
          hizmetAdi: 'Web güvenliği',
          icerik: 'Internet güvenliği, yalnızca Internet, sıkça tarayıcı güvenliği ve World Wide Web ile ilgili değil, aynı zamanda Ağ Güvenliği, uygulama ve işletim sistemleri sistemleri ile bir bütün olarak ilgilidir. Amacı, internet üzerinden saldırılara karşı kullanılacak kurallar ve önlemler oluşturmaktır.',
          fiyat: 4400,
          uygunlukTarihleri: [
            {
              id: '3',
              tarih: '24.11.2022',
              saatler: ['10:00', '11:00', '12:00']
            }
          ]
        },
        {
          id: '4',
          hizmetAdi: 'Mobil güvenliği',
          icerik: 'Mobil güvenlik ya da mobil telefon güvenliği, mobil işlemenin öneminin ve kullanılan akıllı telefonların sayısının artması ile birlikte öne çıkmıştır. Genel olarak bakıldığında, mobil güvenlik, mobil cihazlarda saklanan bilgilerin ve servislerin koruma altına alınması olarak değerlendirilebilir.',
          fiyat: 3200,
          uygunlukTarihleri: [
            {
              id: '4',
              tarih: '25.11.2022',
              saatler: ['09:00', '10:00', '11:00']
            }
          ]
        },
        {
          id: '5',
          hizmetAdi: 'Sunucu güvenliği',
          icerik: 'Sunucu güvenliği, bir bilgisayar ağındaki sunucuların korunması ve güvence altına alınmasıyla ilgili bir disiplindir. Sunucular, genellikle ağdaki diğer cihazlara hizmet veren ve önemli verileri barındıran sistemlerdir, bu nedenle bunların güvenliği son derece önemlidir. İyi bir sunucu güvenliği stratejisi aşağıdaki unsurları içerebilir',
          fiyat: 5300,
          uygunlukTarihleri: [
            {
              id: '5',
              tarih: '26.11.2022',
              saatler: ['10:00', '11:00', '12:00']
            }
          ]
        }
      ]
    },
    {
      id: '6',
      name: 'CyperWise',
      hakkında: 'Cyberwise; siber güvenlik alanında, danışmanlık, ürün satışı, teknik destek ve yönetilen hizmetlerden oluşan, uluslararası standartlarda “Tek Adres” iş modeliyle hizmet vermektedir. Türkiye’nin en büyük siber güvenlik çözüm sağlayıcısı olarak İstanbul ve Ankara’nın yanı sıra Dubai ve Hollanda ofisleri bulunan Cyberwise, 3 ülkede toplam 250 çalışanıyla 750’den fazla kurumsal müşteriye hizmet sağlıyor',
      hizmetler: [
        {
          id: '1',
          hizmetAdi: 'Sızma testi',
          icerik: 'Sızma testi, sistemin güvenliğini değerlendirmek üzere bir bilgisayar sistemi üzerinde gerçekleştirilen yetkilendirilmiş temsili bir siber saldırıdır.',
          fiyat: 1000,
          uygunlukTarihleri: [
            {
              id: '1',
              tarih: '22.11.2022',
              saatler: ['10:00', '11:00', '12:00']
            }
          ]
        },
        {
          id: '2',
          hizmetAdi: 'Veritabanı güvenliği',
          icerik: 'Veritabanı güvenliği, çok çeşitli bilgi güvenliği kontrollerinin kullanımı ile ilgilidir ve veri tabanlarınının gizliliğini, bütünlüğünü ve erişilebilirliğini saldırılara karşı korur.',
          fiyat: 6000,
          uygunlukTarihleri: [
            {
              id: '2',
              tarih: '23.11.2022',
              saatler: ['09:00', '10:00', '11:00']
            }
          ]
        },
        {
          id: '3',
          hizmetAdi: 'Web güvenliği',
          icerik: 'Internet güvenliği, yalnızca Internet, sıkça tarayıcı güvenliği ve World Wide Web ile ilgili değil, aynı zamanda Ağ Güvenliği, uygulama ve işletim sistemleri sistemleri ile bir bütün olarak ilgilidir. Amacı, internet üzerinden saldırılara karşı kullanılacak kurallar ve önlemler oluşturmaktır.',
          fiyat: 4500,
          uygunlukTarihleri: [
            {
              id: '3',
              tarih: '24.11.2022',
              saatler: ['10:00', '11:00', '12:00']
            }
          ]
        },
        {
          id: '4',
          hizmetAdi: 'Mobil güvenliği',
          icerik: 'Mobil güvenlik ya da mobil telefon güvenliği, mobil işlemenin öneminin ve kullanılan akıllı telefonların sayısının artması ile birlikte öne çıkmıştır. Genel olarak bakıldığında, mobil güvenlik, mobil cihazlarda saklanan bilgilerin ve servislerin koruma altına alınması olarak değerlendirilebilir.',
          fiyat: 3000,
          uygunlukTarihleri: [
            {
              id: '4',
              tarih: '25.11.2022',
              saatler: ['09:00', '10:00', '11:00']
            }
          ]
        },
        {
          id: '5',
          hizmetAdi: 'Sunucu güvenliği',
          icerik: 'Sunucu güvenliği, bir bilgisayar ağındaki sunucuların korunması ve güvence altına alınmasıyla ilgili bir disiplindir. Sunucular, genellikle ağdaki diğer cihazlara hizmet veren ve önemli verileri barındıran sistemlerdir, bu nedenle bunların güvenliği son derece önemlidir. İyi bir sunucu güvenliği stratejisi aşağıdaki unsurları içerebilir',
          fiyat: 5700,
          uygunlukTarihleri: [
            {
              id: '5',
              tarih: '26.11.2022',
              saatler: ['10:00', '11:00', '12:00']
            }
          ]
        }
      ]
    }
  ];
  

// Rastgele bir tarih oluşturmak için fonksiyon
const getRandomDate = () => {
  const startDate = moment(); // Şu anki tarih
  const endDate = moment().add(30, 'days'); // Şu anki tarihten itibaren 30 gün sonrası

  const randomDate = moment(startDate + Math.random() * (endDate - startDate));
  return randomDate.format('DD.MM.YYYY');
};

// Rastgele bir saat oluşturmak için fonksiyon
const getRandomHour = () => {
  const hours = ['09:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00']; // Uygun saat aralığı
  return hours[Math.floor(Math.random() * hours.length)];
};

// Randevu verisi
const randevuData = [];

// Her bir hizmet için rastgele randevu oluştur
data.forEach(hizmet => {
  const randomDate = getRandomDate();
  const randomHour = getRandomHour();
  randevuData.push({
    id: randevuData.length + 1,
    hizmet: hizmet.hizmetAdi,
    tarih: randomDate,
    saat: randomHour,
    icerik: hizmet.icerik,
    fiyat: hizmet.fiyat
  });
});


console.log('Randevu Verisi:', randevuData);

export  {data,randevuData};
