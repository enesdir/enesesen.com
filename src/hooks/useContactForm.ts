/* eslint-disable no-underscore-dangle */
import { useRouter } from 'next/router';
import { ChangeEvent, FormEvent, useEffect, useState } from 'react';

import type { FormFields } from '@/interfaces/contactFormFields';

const FORMSPREE_URL = process.env.NEXT_PUBLIC_FORMSPREE_URL;

export function useContactForm() {
  const [fields, setFields] = useState<FormFields>({
    name: '',
    email: '',
    message: '',
    _gotcha: '',
  });
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const router = useRouter();

  useEffect(() => {
    if (isSubmitting) {
      if (errorMessage) setErrorMessage(null);

      const form = new FormData();
      form.append('name', fields.name);
      form.append('email', fields.email);
      form.append('message', fields.message);
      form.append('_gotcha', fields._gotcha);

      const xhr = new XMLHttpRequest();
      xhr.open('POST', `https://formspree.io/f/${FORMSPREE_URL}`);
      xhr.setRequestHeader('Accept', 'application/json');

      xhr.onreadystatechange = () => {
        if (xhr.readyState !== XMLHttpRequest.DONE) return;
        if (xhr.status === 200) {
          router.push('/contact/success');
        } else {
          setErrorMessage('Form was unsuccessfully submitted. Please try again later.');
          setIsSubmitting(false);
        }
      };

      xhr.send(form);
    }
  }, [isSubmitting]);

  function _onInputChange(ev: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>) {
    setFields({ ...fields, [ev.target.name]: ev.target.value });
  }

  function _onSubmit(ev: FormEvent) {
    ev.preventDefault();

    const { name, email, message } = fields;
    const emailRegex = /^\S+@\S+\.\S+$/g;

    if (name.trim() === '' || email.trim() === '' || message.trim() === '') {
      setErrorMessage('Please fill all fields before submitting the form.');
      return;
    }
    if (!emailRegex.test(email)) {
      setErrorMessage('Please enter a valid email address before submitting the form.');
      return;
    }
    setIsSubmitting(true);
  }

  return {
    fields,
    errorMessage,
    isSubmitting,
    onInputChange: _onInputChange,
    onSubmit: _onSubmit,
  };
}
