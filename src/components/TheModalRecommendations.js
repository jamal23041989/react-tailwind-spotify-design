import BaseModal from './BaseModal';

function TheModalRecommendations({ onClose: handleClose }) {
  return (
    <BaseModal classes="h-80 w-[480px] bg-[#333]" onClose={handleClose}>
      <h1 className="text-3xl pt-8 pb-3 px-8 font-bold leading-relaxed border-b border-neutral-600">
        About recommanedations
      </h1>
      <div className="py-6 px-8 overflow-y-auto">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus quis
        impedit cum quo provident alias commodi expedita accusantium sit natus
        autem voluptates possimus ducimus necessitatibus numquam eum, nostrum
        saepe quidem. Aspernatur, aperiam! Labore est maxime velit doloremque
        saepe eos placeat blanditiis, consequatur, voluptatem obcaecati dolorem
        et quas quaerat neque odio, dicta tempora architecto optio voluptatum
        dolorum officia aliquam voluptates accusantium quis! Illum eaque
        quibusdam sit et. Enim excepturi cum numquam deserunt facere sit
        provident debitis tenetur voluptatem quidem. Fuga dolores animi aliquam
        accusantium molestiae iure molestias, harum voluptatibus sunt ratione,
        sapiente hic architecto ipsum quasi enim? Quasi perspiciatis nam nihil!
      </div>
    </BaseModal>
  );
}

export default TheModalRecommendations;
