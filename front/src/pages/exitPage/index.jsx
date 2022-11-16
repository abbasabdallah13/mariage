import DDay from '../../components/DDAY';
import Message from '../../components/message';
import flowers from '../../assets/flowers.png';
import './index.scss';

const ExitPage = () => {
  return (
    <div className='exitPage'>
      <div className='exitPage_Description'>
        <h1>Thank you for answer the questions</h1>
        <p>
          Maëva & Julien sont impatients de célébrer leurs mariage à vos côtés
          le samedi 20 mai 2023. En attendant de pouvoir communiquer tous les
          détails, nous vous invitons à répondre au préalable à quelques
          questions.
        </p>
      </div>

      <div className='exitPage_DDay'>
        <div className='exitPage_DDay_content'>
          <h2>Maëva & Julien</h2>
          <DDay />
          <h3>Le samedi 20 mai 2023</h3>
        </div>
        <div className='exitPage_img'>
          <img src={flowers} alt='flower' />
        </div>
      </div>

      <div className='exitPage_Message'>
        <Message />
      </div>
    </div>
  );
};

export default ExitPage;
