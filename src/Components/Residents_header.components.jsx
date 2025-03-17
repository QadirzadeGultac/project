import React, { useState } from 'react';
import { Modal } from 'antd';
import './Residents_header.css';

const ResidentsHeader = ({ setFilters, setFilteredProducts, handleAddProduct, handleSearch, products }) => {
  const [visible, setVisible] = useState(false);

  // Yeni məlumat əlavə etmək üçün state-lər
  const [name, setName] = useState('');
  const [apartment, setApartment] = useState('');
  const [garageSpace, setGarageSpace] = useState('');
  const [carNumber, setCarNumber] = useState('');
  const [time, setTime] = useState('');
  const [amount, setAmount] = useState('');

  // Axtarış inputları üçün state-lər
  const [selectedChoice, setSelectedChoice] = useState('');
  const [selectedChoice1, setSelectedChoice1] = useState('');
  const [selectedChoice2, setSelectedChoice2] = useState('');
  const [selectedChoice3, setSelectedChoice3] = useState('');
  const [selectedChoice4, setSelectedChoice4] = useState('');
  const [selectedChoice5, setSelectedChoice5] = useState('');

  // Axtarış inputlarını sıfırlamaq üçün funksiya
  const clearButton = () => {
    setSelectedChoice('');
    setSelectedChoice1('');
    setSelectedChoice2('');
    setSelectedChoice3('');
    setSelectedChoice4('');
    setSelectedChoice5('');
    setFilters({
      selectedChoice: '',
      selectedChoice1: '',
      selectedChoice2: '',
      selectedChoice3: '',
      selectedChoice4: '',
      selectedChoice5: '',
    });
  };

  // Yeni məlumat əlavə etmə funksiyası
  const handleAddProductClick = () => {
    if (!name || !apartment || !garageSpace || !carNumber || !time || !amount) {
      alert("Bütün məlumatları doldurun!");
      return;
    }

    const newProduct = {
      id: products.length + 1, // Unikal ID üçün `products.length` istifadə edirik
      name,
      apartment,
      garageSpace,
      carNumber,
      time,
      amount,
    };

    handleAddProduct(newProduct);
    setVisible(false); // Modalı bağlayırıq
    setName('');
    setApartment('');
    setGarageSpace('');
    setCarNumber('');
    setTime('');
    setAmount('');
  };

  // Axtarış funksiyası
  const handleSearchClick = () => {
    setFilters({
      selectedChoice,
      selectedChoice1,
      selectedChoice2,
      selectedChoice3,
      selectedChoice4,
      selectedChoice5,
    });

    // Bütün inputlar boşdursa, bütün məhsulları göstər
    if (
      !selectedChoice &&
      !selectedChoice1 &&
      !selectedChoice2 &&
      !selectedChoice3 &&
      !selectedChoice4 &&
      !selectedChoice5
    ) {
      // Bütün məhsulları göstəririk
      setFilteredProducts(products);
    } else {
      handleSearch(); // Axtarışın nəticələrini filtrləyirik
    }
  };
  

  return (
    <div className="residents-header">
      {/* Yeni məhsul əlavə etmə düyməsi */}
      <button className="new-goods" onClick={() => setVisible(true)}>Yeni Sakin</button>

      {/* Axtarış inputları */}
      <input className='input-group' value={selectedChoice} onChange={(e) => setSelectedChoice(e.target.value)} placeholder="Ad" type="text" />
      <input className='input-group' value={selectedChoice1} onChange={(e) => setSelectedChoice1(e.target.value)} placeholder="Mənzil" type="text" />
      <input className='input-group' value={selectedChoice2} onChange={(e) => setSelectedChoice2(e.target.value)} placeholder="Qaraj Yeri" type="text" />
      <input className='input-group' value={selectedChoice3} onChange={(e) => setSelectedChoice3(e.target.value)} placeholder="Maşın nömrəsi" type="text" />
      <input className='input-group' value={selectedChoice4} onChange={(e) => setSelectedChoice4(e.target.value)} placeholder="Vaxt" type="date"/>
      <input className='input-group' value={selectedChoice5} onChange={(e) => setSelectedChoice5(e.target.value)} placeholder="Məbləğ" type="text" />

      {/* Axtarış və sıfırlama düymələri */}
      <button onClick={handleSearchClick} className="search-button">Axtar</button>
      <button onClick={clearButton} className="clear-button">Təmizlə</button>

      {/* Yeni məlumat əlavə etmək üçün modal */}
      <Modal
        title="Yeni Sakin"
        open={visible}
        onCancel={() => setVisible(false)}
        footer={null}
        width={900}
        className="custom-modal"
      >
        <div className='modal-content'>
          <input className='input-group one' type="text" placeholder="Ad" value={name} onChange={(e) => setName(e.target.value)} />
          <input className='input-group group-one' type="text" placeholder="Mənzil" value={apartment} onChange={(e) => setApartment(e.target.value)} />
          <input className='input-group group-two' type="text" placeholder="Qaraj yeri" value={garageSpace} onChange={(e) => setGarageSpace(e.target.value)} />
          <input className='input-group group-three' type="text" placeholder="Maşın nömrəsi" value={carNumber} onChange={(e) => setCarNumber(e.target.value)} />
          <input className='input-group group-four' type="date" placeholder="Vaxt" value={time} onChange={(e) => setTime(e.target.value)} />
          <input className='input-group group-five' type="text" placeholder="Məbləğ" value={amount} onChange={(e) => setAmount(e.target.value)} />
          <button className='add' onClick={handleAddProductClick}>Əlavə Et</button>
        </div>
      </Modal>
    </div>
  );
};

export default ResidentsHeader;
