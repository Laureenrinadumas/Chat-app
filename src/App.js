import React from 'react';

import './App.css';
import Contact from './Components/Contact';

function App() {
  return (
      <div className="App">
        <Contact
            name="Laureen Dumas"
            avatar="http://golem13.fr/wp-content/uploads/2019/01/Avatar2-et-3-termines.jpg"
            online={true}
        />
        <Contact
            name="Marine Incera"
            avatar="https://www.premiere.fr/sites/default/files/styles/scale_crop_1280x720/public/2018-04/sigourney_weaver_avatar.jpeg"
            online={false}
        />
        <Contact
            name="Thomas Degrelle"
            avatar="https://cdn-media.rtl.fr/cache/2PpqxPwR6N73Rre1l6OYkA/880v587-0/online/image/2015/0115/7776220912_avatar-2-a-ete-repousse-a-2017.jpg"
            online={true}
        />
      </div>
  );
}

export default App;
