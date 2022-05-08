import React from 'react';
import { Chrono } from 'react-chrono';
import './timeline.css';
import { Image } from '@chakra-ui/react';
import myimage from './images/painting.png';

export default function Timeline({ props }) {
  const items1 = [
    {
      title: 'May 1940',
      cardTitle: 'dura europos',
      url: 'http://www.history.com',
      cardSubtitle:
        'Lorem ipsum dolor sit amet. Vel voluptas soluta et neque velit et debitis numquam est harum minus quo nisi autem non iste quam. Ut autem debitis et mollitia galisum est rerum vero aut dolores maxime non illum nihil. Est nostrum quidem nam commodi iste vel voluptatem voluptatibus qui excepturi quae qui cupiditate dolorem et quaerat soluta. Ea similique tenetur sit esse consequuntur eos deleniti ducimus nemo consequatur est amet reprehenderit ut error veritatis. Qui quaerat iure est ullam illo vel autem sunt aut porro laboriosam et distinctio beatae. A vero ipsa rem doloribus voluptatem et labore vitae. Qui illo temporibus id dolores architecto sit fugiat porro 33 omnis explicabo ut itaque aperiam a voluptas voluptate aut tenetur minima. Est dolorem quia in officiis laborum et molestiae laborum et doloremque voluptatum est aspernatur ipsum sed fugit veniam?',
      cardDetailedText:
        'Lorem ipsum dolor sit amet. Vel voluptas soluta et neque velit et debitis numquam est harum minus quo nisi autem non iste quam. Ut autem debitis et mollitia galisum est rerum vero aut dolores maxime non illum nihil. Est nostrum quidem nam commodi iste vel voluptatem voluptatibus qui excepturi quae qui cupiditate dolorem et quaerat soluta. Ea similique tenetur sit esse consequuntur eos deleniti ducimus nemo consequatur est amet reprehenderit ut error veritatis.Qui quaerat iure est ullam illo vel autem sunt aut porro laboriosam et distinctio beatae. A vero ipsa rem doloribus voluptatem et labore vitae. Qui illo temporibus id dolores architecto sit fugiat porro 33 omnis explicabo ut itaque aperiam a voluptas voluptate aut tenetur minima. Est dolorem quia in officiis laborum et molestiae laborum et doloremque voluptatum est aspernatur ipsum sed fugit veniam?',
      media: {
        name: 'dura',
        type: 'IMAGE',
        source: {
          url: 'https://bit.ly/dan-abramov',
        },
      },
    },
    {
      title: 'May 1940',
      cardTitle: '2',
      url: 'http://www.history.com',
      cardSubtitle: 'dura europos',
      cardDetailedText: 'issues of interpretation',
      media: {
        type: 'IMAGE',
        source: {
          url: 'https://upload.wikimedia.org/wikipedia/commons/3/32/DuraEuropos-TempleOfBel.jpg',
        },
      },
    },
    {
      title: 'May 1940',
      cardTitle: '3',
      url: 'http://www.history.com',
      cardSubtitle: 'dura europos',
      cardDetailedText: 'issues of interpretation',
      media: {
        type: 'IMAGE',
        source: {
          url: 'https://upload.wikimedia.org/wikipedia/commons/3/32/DuraEuropos-TempleOfBel.jpg',
        },
      },
    },
    {
      title: 'May 1940',
      cardTitle: '4',
      url: 'http://www.history.com',
      cardSubtitle: 'dura europos',
      cardDetailedText: 'issues of interpretation',
      media: {
        type: 'IMAGE',
        source: {
          url: 'https://upload.wikimedia.org/wikipedia/commons/3/32/DuraEuropos-TempleOfBel.jpg',
        },
      },
    },
    {
      title: 'May 1940',
      cardTitle: '5',
      url: 'http://www.history.com',
      cardSubtitle: 'dura europos',
      cardDetailedText: 'issues of interpretation',
      media: {
        type: 'IMAGE',
        source: {
          url: 'https://upload.wikimedia.org/wikipedia/commons/3/32/DuraEuropos-TempleOfBel.jpg',
        },
      },
    },
    {
      title: 'May 1940',
      cardTitle: '6',
      url: 'http://www.history.com',
      cardSubtitle: 'dura europos',
      cardDetailedText: 'issues of interpretation',
      media: {
        type: 'IMAGE',
        source: {
          url: 'https://upload.wikimedia.org/wikipedia/commons/3/32/DuraEuropos-TempleOfBel.jpg',
        },
      },
    },

    {
      title: 'May 1940',
      cardTitle: '7',
      url: 'http://www.history.com',
      cardSubtitle: 'dura europos',
      cardDetailedText: 'issues of interpretation',
      media: {
        type: 'IMAGE',
        source: {
          url: 'https://upload.wikimedia.org/wikipedia/commons/3/32/DuraEuropos-TempleOfBel.jpg',
        },
      },
    },

    {
      title: 'May 1940',
      cardTitle: '8',
      url: 'http://www.history.com',
      cardSubtitle: 'dura europos',
      cardDetailedText: 'issues of interpretation',
      media: {
        type: 'IMAGE',
        source: {
          url: 'https://upload.wikimedia.org/wikipedia/commons/3/32/DuraEuropos-TempleOfBel.jpg',
        },
      },
    },

    {
      title: 'May 1940',
      cardTitle: '9',
      url: 'http://www.history.com',
      cardSubtitle: 'dura europos',
      cardDetailedText: 'issues of interpretation',
      media: {
        type: 'IMAGE',
        source: {
          url: 'https://upload.wikimedia.org/wikipedia/commons/3/32/DuraEuropos-TempleOfBel.jpg',
        },
      },
    },

    {
      title: 'May 1940',
      cardTitle: '10',
      url: 'http://www.history.com',
      cardSubtitle: 'dura europos',
      cardDetailedText: 'issues of interpretation',
      media: {
        type: 'IMAGE',
        source: {
          url: 'https://upload.wikimedia.org/wikipedia/commons/3/32/DuraEuropos-TempleOfBel.jpg',
        },
      },
    },

    {
      title: 'May 1940',
      cardTitle: '11',
      url: 'http://www.history.com',
      cardSubtitle: 'dura europos',
      cardDetailedText: 'issues of interpretation',
      media: {
        type: 'IMAGE',
        source: {
          url: 'https://upload.wikimedia.org/wikipedia/commons/3/32/DuraEuropos-TempleOfBel.jpg',
        },
      },
    },

    {
      title: 'May 1940',
      cardTitle: '12',
      url: 'http://www.history.com',
      cardSubtitle: 'dura europos',
      cardDetailedText: 'issues of interpretation',
      media: {
        type: 'IMAGE',
        source: {
          url: 'https://upload.wikimedia.org/wikipedia/commons/3/32/DuraEuropos-TempleOfBel.jpg',
        },
      },
    },

    {
      title: 'May 1940',
      cardTitle: '13',
      url: 'http://www.history.com',
      cardSubtitle: 'dura europos',
      cardDetailedText: 'issues of interpretation',
      media: {
        type: 'IMAGE',
        source: {
          url: 'https://upload.wikimedia.org/wikipedia/commons/3/32/DuraEuropos-TempleOfBel.jpg',
        },
      },
    },
    {
      title: 'May 1940',
      cardTitle: '14',
      url: 'http://www.history.com',
      cardSubtitle: 'dura europos',
      cardDetailedText: 'issues of interpretation',
      media: {
        type: 'IMAGE',
        source: {
          url: 'https://upload.wikimedia.org/wikipedia/commons/3/32/DuraEuropos-TempleOfBel.jpg',
        },
      },
    },
  ];
  const items2 = [
    {
      title: '',
      cardTitle: '',
      cardSubtitle: '',
      cardDetailedText: '',
    },
  ];
  return (
    <>
      <div style={{ width: '1450px', height: '900px', marginTop: '100px' }}>
        <Chrono
          align={'center'}
          justify={'center'}
          items={items1}
          theme={{
            primary: 'black',
            secondary: '#d5f4e6',
            cardBgColor: '#80ced6',
            cardForeColor: '#80ced6',
            titleColor: '#618685',
          }}
          margin="50px"
          mode="HORIZONTAL"
        >
			<div>
				<Image src={myimage}></Image>
			</div>
			<div>
				<Image src={myimage}></Image>
			</div>
		</Chrono>
      </div>
    </>
  );
}
