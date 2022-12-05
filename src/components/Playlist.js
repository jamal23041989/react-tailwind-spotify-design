import { useState, useLayoutEffect } from 'react';
import useEvent from '../hooks/useEvent';
import useMenu from '../hooks/useContextMenu';
import useModal from '../hooks/useModal';
import PlaylistCover from './PlaylistCover';
import PlaylistButtonPlay from './PlaylistButtonPlay';
import PlaylistTitle from './PlaylistTitle';
import PlaylistDescription from './PlaylistDescription';
import PlaylistContextMenu from './PlaylistContextMenu';
import TheModalEmbedPlaylist from './TheModalEmbedPlaylist';
import TheModalRecommendations from './TheModalRecommendations';

function Playlist({
  classes,
  coverUrl,
  title,
  description,
  showToast,
  toggleScrolling,
}) {
  function generateMenuItems(isAlternate = false) {
    return [
      {
        label: 'Add to Your Library',
        action: () => {
          menu.close();
          document.querySelector('nav a:nth-child(4)').click();
        },
      },
      {
        label: 'Share',
        submenuItems: [
          {
            label: isAlternate ? 'Copy Spotify URI' : 'Copy link to playlist',
            classes: 'min-w-[150px]',
            action: () => {
              navigator.clipboard.writeText(title).then(() => {
                menu.close();
                showToast('Link copied to clipboard');
              });
            },
          },
          {
            label: 'Embed playlist',
            action: () => {
              menu.close();
              embedPlaylistModal.open();
            },
          },
        ],
      },
      {
        label: 'About recommendations',
        action: () => {
          menu.close();
          recommendationsModal.open();
        },
      },
      {
        label: 'Open in Desktop app',
      },
    ];
  }

  const [menuItems, setMenuItems] = useState(generateMenuItems);
  const menu = useMenu(menuItems);
  const embedPlaylistModal = useModal();
  const recommendationsModal = useModal();

  useLayoutEffect(() => toggleScrolling(!menu.isOpen));

  useEvent('keydown', handleAltKeydown, menu.isOpen);
  useEvent('keyup', handleAltKeyup, menu.isOpen);

  function handleAltKeydown({ key }) {
    if (key === 'Alt') setMenuItems(generateMenuItems(true));
  }

  function handleAltKeyup({ key }) {
    if (key === 'Alt') setMenuItems(generateMenuItems());
  }

  const bgClasses = menu.isOpen
    ? 'bg-[#272727]'
    : 'bg-[#181818] hover:bg-[#272727]';

  return (
    <a
      href="/"
      className={`relative p-4 rounded-md duration-200 group ${classes} ${bgClasses}`}
      onClick={(event) => event.preventDefault()}
      onContextMenu={menu.open}
    >
      <div className="relative">
        <PlaylistCover url={coverUrl} />
        <PlaylistButtonPlay />
      </div>
      <PlaylistTitle title={title} />
      <PlaylistDescription description={description} />
      {menu.isOpen && (
        <PlaylistContextMenu
          ref={menu.ref}
          menuItems={menu.items}
          classes="fixed divide-y divide-[#3e3e3e]"
        />
      )}
      {recommendationsModal.isOpen && (
        <TheModalRecommendations onClose={recommendationsModal.close} />
      )}
      {embedPlaylistModal.isOpen && (
        <TheModalEmbedPlaylist onClose={embedPlaylistModal.close} />
      )}
    </a>
  );
}

export default Playlist;
