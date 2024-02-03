import { useRouter } from 'next/router';

const SocialMediaShareButtons = () => {
  const router = useRouter();
  const currentUrl = process.env.NEXT_PUBLIC_BASE_URL + router.asPath;

  const shareOnWhatsApp = () => {
    const whatsappShareUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent(currentUrl)}`;
    window.open(whatsappShareUrl, '_blank', 'width=600,height=400');
  };

  const shareOnTwitter = () => {
    const twitterShareUrl = `https://twitter.com/intent/tweet?url=${encodeURIComponent(currentUrl)}`;
    window.open(twitterShareUrl, '_blank', 'width=600,height=400');
  };

  const shareOnFacebook = () => {
    const facebookShareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(currentUrl)}`;
    window.open(facebookShareUrl, '_blank', 'width=600,height=400');
  };

  const shareOnInstagram = () => {
    // You can provide the Instagram share link, but note that Instagram sharing is limited and mostly works on mobile devices.
    // For example, you can use `https://www.instagram.com/share?url=${encodeURIComponent(currentUrl)}`;
    console.log('Instagram sharing is limited.');
  };

  return (
    <div>
      <button onClick={shareOnWhatsApp}>
        Share on WhatsApp
      </button>
      <button onClick={shareOnTwitter}>
        Share on Twitter
      </button>
      <button onClick={shareOnFacebook}>
        Share on Facebook
      </button>
      <button onClick={shareOnInstagram}>
        Share on Instagram
      </button>
    </div>
  );
};

export default SocialMediaShareButtons;
