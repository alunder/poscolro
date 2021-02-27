import React from 'react';
import { storiesOf } from '@storybook/react';
import Layout from './Layout';

storiesOf('Layout', module)
  .add('with content', () => (
    <div style={{ margin: -20 }}>
      <Layout>Hello Layout</Layout>
    </div>
  ))
  .add('with long content', () => (
    <div style={{ margin: -20 }}>
      <Layout>
        <h2>Hello Layout</h2>
        <p>
          Bacon ipsum dolor amet cupidatat occaecat pork magna pastrami dolor irure labore non jowl, spare ribs pariatur
          brisket pig. Jerky anim id sint, shankle bresaola officia tempor eiusmod dolore pig. Ut leberkas sausage, pork
          chop tenderloin ham hock burgdoggen reprehenderit. Andouille ut cupidatat tail ut. Ham hock biltong boudin,
          laborum commodo picanha pancetta pig venison tail ut ut cow ribeye pastrami. Pariatur sint shank, landjaeger
          sunt buffalo beef ribs pastrami irure laborum qui culpa pork belly. Meatloaf sint pork belly fugiat laborum.
        </p>
        <p>
          Sirloin ribeye et in, labore nostrud velit eiusmod venison sunt sausage turkey turducken ut. Minim beef ea
          tri-tip ut et aliqua est. Tri-tip ribeye sint, cillum do exercitation nisi short ribs incididunt shank shankle
          venison strip steak aute alcatra. Tempor cow pork loin aliquip irure enim picanha excepteur porchetta. Pig
          voluptate shankle nulla ut tri-tip pork loin pork belly. Swine mollit dolore, drumstick in qui pork brisket
          pork loin kielbasa leberkas labore jowl velit. Leberkas cillum spare ribs lorem eu short ribs consequat
          shoulder sed aliqua dolor fatback labore chicken hamburger.
        </p>
        <p>
          Pig tongue frankfurter irure ut pork belly. Turkey quis sint short loin nisi adipisicing dolor swine. Swine
          venison turducken, pork belly jerky in lorem. Corned beef sausage porchetta hamburger, pork chop lorem cillum
          frankfurter exercitation turkey esse labore. Beef flank ex bresaola tempor, exercitation velit strip steak
          cillum. Consectetur beef ribs salami andouille, excepteur pancetta cupidatat culpa dolor sirloin burgdoggen.
        </p>
        <p>
          Pastrami officia doner buffalo kielbasa. Aliquip bresaola turducken culpa ut dolore salami labore elit swine
          jerky beef venison tenderloin tail. Aliquip quis elit chicken salami meatball bresaola enim eiusmod filet
          mignon anim pork t-bone. Occaecat cillum do pancetta ipsum. Adipisicing elit excepteur, ut doner veniam do id
          hamburger laboris porchetta brisket.
        </p>
        <p>
          Proident jowl short ribs pork. Aliqua meatball cupidatat id flank jowl pork belly turkey dolore incididunt
          short ribs jerky ground round. Short ribs sunt aliqua tongue ham shoulder dolore buffalo. Excepteur chuck jowl
          pastrami. Shankle labore consequat ground round picanha, andouille meatloaf proident porchetta mollit tempor
          occaecat. Turkey commodo pancetta lorem. In in est qui, reprehenderit meatloaf capicola jowl ut commodo nisi
          in shoulder pork belly ribeye.
        </p>
      </Layout>
    </div>
  ));
