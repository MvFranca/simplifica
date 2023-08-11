import { useNavigate, useParams } from "react-router-dom";
import Pergunta from "../../components/pergunta/Pergunta";
import { useEffect, useState } from "react";
import { dados } from "../../types/dados";

const Jogar = () => {
  const [assunto, setAssunto] = useState<Array<dados>>([]);

  const { id } = useParams();
  const navigate = useNavigate()

  async function conteudos() {
    const api = await fetch(`http://127.0.0.1:5173/trilha/${id}.json`);
    const data= await api.json();
    setAssunto(data);
  }


  useEffect(() => {
    conteudos()
    if(assunto[0].pergunta == '') {navigate('/')}
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])



  return (
    <div>
      <Pergunta
        assunto={assunto}
        totalQuestions = {assunto.length}
      />
    </div>
  );
};

export default Jogar;
