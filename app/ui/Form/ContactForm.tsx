"use client";
import { useState } from 'react';


// This Function Return Form To Contact Page
export default function ContactForm({t , th}: {t:  any, th: any}) {


    const isArabic = !(t.about === 'Home');

    const lang = isArabic ? 'ar' : 'en'

    const [name, setName] = useState(''); // Name State

    const [email, setEmail] = useState(''); // Email State

    const [message, setMessage] = useState(''); // Message State

    // This Array Store The Errors State
    const [errors, setErrors] = useState<Record<string, string>>({});

    // This State Determain if The Info Sent or Not
    const [sent, setSent] = useState(false);

    // This Function Validate The Inputs And Return The Error if Found
    function validate() {
      const errs: Record<string, string> = {}; // Errors Record ex {'name': 'please Enter Your Name'}

      if (!name.trim()) errs.name = t.contactPage.form.nameError; // Chack Name Empty

      if (!email.trim()) errs.email = t.contactPage.form.emailError.empty; // Chack Email Empty

      else if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) errs.email = t.contactPage.form.emailError.anvalid; // Check Email Anvalid

      if (!message.trim()) errs.message = t.contactPage.form.messageError; // Check Message Empty

      return errs;
    }

    // This Function Handle Submition
    function handleSubmit(e: React.FormEvent) {
      e.preventDefault();

      const validationErrors = validate(); // Store The Errors That Returned From 'validate' Function4
    
      if (Object.keys(validationErrors).length > 0) { // Check if There is an Errors
        setErrors(validationErrors); // Store Error in Error State
        return; // Don't Do Any Thing
      }

      // If no Error Found
      handleSent()
    }

    // This Function Handle Sent 
    function handleSent() {
      const to = 'elhonsi99@gamil.com';
      const subject = encodeURIComponent(`${lang === 'ar' ? 'مرحبا أنا ': 'Hi, I\'m '} ${name}`);
      const body = encodeURIComponent(`${message}\n\n${t.contactPage.form.nameLabel}: ${name}\n${t.contactPage.form.emailLabel}: ${email}`);
      window.location.href = `mailto:${to}?subject=${subject}&body=${body}`;

      setSent(true);
      setName('');
      setEmail('');
      setMessage('');
      setErrors({});
    }

  return (
    // Start Form 
    <form 
      onSubmit={handleSubmit} 
      className="space-y-6 p-8 rounded-xl shadow-md"
      style={{
        background: th.background,
        border: `1px solid ${th.border}`
      }}
    >
      {/* This Div Will Display Just if The Info Submited  */}
      {sent && (
        // Ensure Message To Tell to user That Message opened in your mail client
        <div 
          className="p-3 rounded mb-3"
          style={{
            background: th.background,
            color: th.buttonSecondaryBackground // green 
          }}
        >
          {lang === 'ar' ? 'تم فتح بريد العميل.' : 'Message opened in your mail client.'}
        </div>
      )}

      {/* Start Name Input  */}
      <div>
        <label 
          className="block font-bold mb-3"
          style={{color: th.text}}
        >
          {t.contactPage.form.nameLabel}
        </label>

         {/* This Snack Will Display if Email Error Found  */}
        {errors.name && (
          <div 
            className="p-3 rounded mb-3"
            style={{
              background: th.background,
              color: th.color
            }}
          >
            <ul>
              <li>• {errors.name}</li>
            </ul>
          </div>
        )}

        {/* Name Input  */}
        <input 
          value={name}
          onChange={(e) => setName(e.target.value)}
          type="text"
          className="w-full rounded-lg px-4 py-3 focus:outline-none transition"
          style={{
            background: th.background,
            border: `2px solid ${th.border}`,
            color: th.text,
            caretColor: th.buttonPrimaryBackground
          }}
          placeholder={t.contactPage.form.namePlaceholder}
        />
      </div>
      {/* End Name Input  */}

      {/* Start Email Input  */}
      <div>
        <label 
          className="block font-bold mb-3"
          style={{color: th.text}}
        >
          {t.contactPage.form.emailLabel}
        </label>

        {/* This Snack Will Display if Email Error Found  */}
        {errors.email && (
          <div 
            className="p-3 rounded mb-3"
            style={{
              background: th.mode === 'dark' ? '#450A0A' : '#FEF2F2',
              color: th.mode === 'dark' ? '#FCA5A5' : '#991B1B'
            }}
          >
            <ul>
              <li>• {errors.email}</li>
            </ul>
          </div>
        )}

        {/* Email Input  */}
        <input 
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          className="w-full rounded-lg px-4 py-3 focus:outline-none transition"
          style={{
            background: th.background,
            border: `2px solid ${th.border}`,
            color: th.text,
            caretColor: th.buttonPrimaryBackground
          }}
          placeholder={t.contactPage.form.emailPlaceholder}
        />
      </div>
      {/* End Email Input  */}

      {/* Start Message Input  */}
      <div>
        
        <label 
          className="block font-bold mb-3"
          style={{color: th.text}}
        >
          {t.contactPage.form.messageLabel}
        </label>

         {/* This Snack Will Display if Message Error Found  */}
        {errors.message && (
          <div 
            className="p-3 rounded mb-3"
            style={{
              background: th.mode === 'dark' ? '#450A0A' : '#FEF2F2',
              color: th.mode === 'dark' ? '#FCA5A5' : '#991B1B'
            }}
          >
            <ul>
              <li>• {errors.message}</li>
            </ul>
          </div>
        )}

        {/* Message Input  */}
        <textarea 
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="w-full rounded-lg px-4 py-3 h-40 focus:outline-none transition resize-none"
          style={{
            background: th.background,
            border: `2px solid ${th.border}`,
            color: th.text,
            caretColor: th.buttonPrimaryBackground
          }}
          placeholder={t.contactPage.form.messagePlaceholder}
        />
      </div>
      {/* End Message Input  */}

      {/* Start Submit Button  */}
      <button 
        type="submit"
        className="w-full py-3 rounded-lg font-bold text-lg hover:shadow-lg hover:scale-105 transition transform"
        style={{
          background: th.buttonPrimaryBackground,
          color: th.buttonPrimaryText
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.opacity = '0.9';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.opacity = '1';
        }}
      >
        {t.contactPage.form.send}
      </button>
      {/* End Submit Button  */}
    </form>
    // End Form
  );
}
