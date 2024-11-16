"use client";
import { useState } from 'react';

export default function SendData() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await fetch('https://script.google.com/macros/s/AKfycbxW1j6tNkfn-fZN_F9h9eKuN_t3b-dLWG82h-gHhSBNLCo8AaJWv3O2uMxzU8Ecwlsp9w/exec', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        mode: 'no-cors', // 不透明レスポンスになる
        body: JSON.stringify(formData),
      });
      // レスポンスの確認はできないので、成功したと仮定
      alert('メッセージを送信しました！');
    } catch (error) {
      console.error('エラーが発生しました:', error);
      alert('送信に失敗しました。');
    }
    // const response = await fetch('https://script.google.com/macros/s/AKfycbxW1j6tNkfn-fZN_F9h9eKuN_t3b-dLWG82h-gHhSBNLCo8AaJWv3O2uMxzU8Ecwlsp9w/exec', { // GAS の URL
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    //   mode: 'no-cors',
    //   body: JSON.stringify(formData),
    // });
    
    // const result = await response.json();
    // if (result.status === 'success') {
    //   alert('データを送信しました！');
    // } else {
    //   alert('エラーが発生しました: ' + result.message);
    // }
  };
  
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="name" placeholder="名前" onChange={handleChange} required />
      <input type="email" name="email" placeholder="メール" onChange={handleChange} required />
      <textarea name="message" placeholder="メッセージ" onChange={handleChange} required />
      <button type="submit">送信</button>
    </form>
  );
}
