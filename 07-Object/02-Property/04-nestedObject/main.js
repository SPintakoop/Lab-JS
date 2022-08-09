const product1 = {
    name: 'Food',
    distributor: {
      name: 'Hogwart company',
      address: {
        street: 'Rangsit',
        subdistrict: 'Klong 6',
        district: 'Klong luang',
        province: 'Pathumthani'
      }
    }
  };

  const product2 = {}

  console.log(product2.distributor?.address?.province) 