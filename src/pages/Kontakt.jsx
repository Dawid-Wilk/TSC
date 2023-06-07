import { useState } from 'react';

export const Kontakt = () => {
  const [formData, setFormData] = useState({
    name: '',
    surname: '',
    email: '',
    phone: '',
    message: '',
    privacyPolicy: false,
  });

  const [isSubmitClicked, setIsSubmitClicked] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const newValue = type === 'checkbox' ? checked : value;
    setFormData({ ...formData, [name]: newValue });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitClicked(true);

    const isEmailValid = validateEmail(formData.email);
    const isPhoneValid = validatePhone(formData.phone);

    if (isEmailValid && isPhoneValid && formData.privacyPolicy) {
      console.log(formData);
    }
  };

  const numberOfCharacters = formData.message.length;

  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const validatePhone = (phone) => {
    const regex = /^\d{6,15}$/;
    return regex.test(phone);
  };

  const isEmailValid = validateEmail(formData.email);
  const isPhoneValid = validatePhone(formData.phone);
  return(
    <div className="content">
        <div className="form-container">
          <form onSubmit={handleSubmit}>
            <div>
              <label htmlFor="name">Imię:</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                maxLength={32}
              />
            </div>
            <div>
              <label htmlFor="surname">Nazwisko:</label>
              <input
                type="text"
                id="surname"
                name="surname"
                value={formData.surname}
                onChange={handleChange}
                maxLength={48}
              />
            </div>
            <div>
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
              {isSubmitClicked && !isEmailValid && (
                <p style={{ color: 'red' }}>Wprowadź poprawny adres email</p>
              )}
            </div>
            <div>
              <label htmlFor="phone">Numer telefonu:</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                minLength={6}
                maxLength={15}
                required
              />
              {isSubmitClicked && !isPhoneValid && (
                <p style={{ color: 'red' }}>
                  Wprowadź poprawny numer telefonu (od 6 do 15 cyfr)
                </p>
              )}
            </div>
            <div>
              <label htmlFor="message">Wiadomość:</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                maxLength={250}
              />
              <p>Wykorzystano {numberOfCharacters}/250 znaków.</p>
            </div>
            <div className='privacy'>
              <label>
              <span>Akceptuję politykę prywatności</span>
              <input
                type="checkbox"
                name="privacyPolicy"
                checked={formData.privacyPolicy}
                onChange={handleChange}
                required
              />
              </label> 
            </div>
          <button type="submit">Wyślij</button>
        </form>
      </div>
    </div>
  )
}