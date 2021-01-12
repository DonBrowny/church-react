import React from 'react';
import './Footer.css';

const Footer = () => {
  const mapiFrame = `<iframe width="300" height="250" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" id="gmap_canvas" src="https://maps.google.com/maps?width=300&amp;height=250&amp;hl=en&amp;q=No.1,%20Dobikana%20Street,%20Chamundeshwari%20Nagar,%20Anakaputhur,%20Chennai,%20Tamil%20Nadu%20600070%20Chennai+(Jesus%20Lives%20AG%20Church)&amp;t=&amp;z=13&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe><script type='text/javascript' src='https://embedmaps.com/google-maps-authorization/script.js?id=b70dceb777ecd5428276904f9030405c0f0566fa'></script>`;

  const iframe = () => {
    return {
      __html: mapiFrame,
    };
  };

  return (
    <footer id="footer">
      <div dangerouslySetInnerHTML={iframe()} />
    </footer>
  );
};

export default Footer;
