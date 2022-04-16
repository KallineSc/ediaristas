import { useState } from 'react';

export default function useIndex() {
  const [cep, setCep] = useState(''),
    [erro, setErro] = useState(''),
    [buscaFeita, setBuscaFeita] = useState(false),
    [carregando, setCarregando] = useState(false),
    [diarista, setDiarista] = useState([]);

  return {
    cep,
    setCep,
  };
}
