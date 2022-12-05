import BaseButton from './BaseButton';
import BaseCheckbox from './BaseCheckbox';
import BaseModal from './BaseModal';

function TheModalEmbedPlaylist({ onClose: handleClose }) {
  return (
    <BaseModal classes="w-[660px] bg-neutral-900" onClose={handleClose}>
      <h1 className="text-3xl pt-8 pb-3 px-8 font-bold leading-relaxed">
        Embed Playlist
      </h1>
      <div className="py-6 px-8 text-neutral-500 text-[13px]">
        Lorem ipsum dolor sit amet{' '}
        <a href="/" className="text-white font-bold hover:underline">
          consectetur adipisicing elit
        </a>
        . Aliquam sit perferendis soluta architecto? Adipisci, atque.
      </div>
      <div className="flex justify-end items-center gap-4 pb-6 px-8">
        <BaseCheckbox>Show code</BaseCheckbox>
        <BaseButton accent>Copy</BaseButton>
      </div>
    </BaseModal>
  );
}

export default TheModalEmbedPlaylist;
