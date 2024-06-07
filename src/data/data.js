/* eslint-disable prettier/prettier */
const moment = require('moment');
const data = [
    {
      id: '1',
      name: 'Brandefenseio',
      hakkında: '1995 yılında kuruldu, Yazılım şirketidir.',
      hizmetler: [
        {
          id: '1',
          hizmetAdi: 'Sızma testi',
          icerik: 'Zumra Ewl',
          fiyat: 100,
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
          icerik: 'Zumra Ewl',
          fiyat: 120,
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
          icerik: 'Zumra Ewl',
          fiyat: 90,
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
          icerik: 'Zumra Ewl',
          fiyat: 110,
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
          icerik: 'Zumra Ewl',
          fiyat: 130,
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
      hakkında: '1995 yılında kuruldu, Yazılım şirketidir.',
      hizmetler: [
        {
          id: '1',
          hizmetAdi: 'Sızma testi',
          icerik: 'Zumra Ewl',
          fiyat: 100,
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
          icerik: 'Zumra Ewl',
          fiyat: 120,
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
          icerik: 'Zumra Ewl',
          fiyat: 90,
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
          icerik: 'Zumra Ewl',
          fiyat: 110,
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
          icerik: 'Zumra Ewl',
          fiyat: 130,
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
      hakkında: '1995 yılında kuruldu, Yazılım şirketidir.',
      hizmetler: [
        {
          id: '1',
          hizmetAdi: 'Sızma testi',
          icerik: 'Zumra Ewl',
          fiyat: 100,
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
          icerik: 'Zumra Ewl',
          fiyat: 120,
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
          icerik: 'Zumra Ewl',
          fiyat: 90,
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
          icerik: 'Zumra Ewl',
          fiyat: 110,
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
          icerik: 'Zumra Ewl',
          fiyat: 130,
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
      hakkında: '1995 yılında kuruldu, Yazılım şirketidir.',
      hizmetler: [
        {
          id: '1',
          hizmetAdi: 'Sızma testi',
          icerik: 'Zumra Ewl',
          fiyat: 100,
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
          icerik: 'Zumra Ewl',
          fiyat: 120,
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
          icerik: 'Zumra Ewl',
          fiyat: 90,
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
          icerik: 'Zumra Ewl',
          fiyat: 110,
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
          icerik: 'Zumra Ewl',
          fiyat: 130,
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
      hakkında: '1995 yılında kuruldu, Yazılım şirketidir.',
      hizmetler: [
        {
          id: '1',
          hizmetAdi: 'Sızma testi',
          icerik: 'Zumra Ewl',
          fiyat: 100,
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
          icerik: 'Zumra Ewl',
          fiyat: 120,
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
          icerik: 'Zumra Ewl',
          fiyat: 90,
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
          icerik: 'Zumra Ewl',
          fiyat: 110,
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
          icerik: 'Zumra Ewl',
          fiyat: 130,
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
      hakkında: '1995 yılında kuruldu, Yazılım şirketidir.',
      hizmetler: [
        {
          id: '1',
          hizmetAdi: 'Sızma testi',
          icerik: 'Zumra Ewl',
          fiyat: 100,
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
          icerik: 'Zumra Ewl',
          fiyat: 120,
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
          icerik: 'Zumra Ewl',
          fiyat: 90,
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
          icerik: 'Zumra Ewl',
          fiyat: 110,
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
          icerik: 'Zumra Ewl',
          fiyat: 130,
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
