import { useState } from "react";
import "./App.css";

type Pet = {
  id: number;
  breeds: string;
  gender: string;
  age: string;
  image: string;
  description: string;
  showMore: boolean
};

function App() {
  const [pets, setPets] = useState([
    {
      id: 1,
      breeds: "Golden Retriever",
      gender: "Female",
      age: "1 Year",
      image:
        "https://i.pinimg.com/originals/10/8f/9d/108f9dba3ee7e121d7501e0e7e42c164.jpg",
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae maxime, sint laboriosam quo odit deleniti voluptas laudantium fugit quis sequi sit cum? At fugit totam repellendus itaque ab animi laborum.",
    },
    {
      id: 2,
      breeds: "Husky",
      gender: "Male",
      age: "5 Months",
      image:
        "https://i.pinimg.com/736x/02/dc/28/02dc289f12113fc8ab7eeef78b353d42.jpg",
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae maxime, sint laboriosam quo odit deleniti voluptas laudantium fugit quis sequi sit cum? At fugit totam repellendus itaque ab animi laborum.",
    },
    {
      id: 3,
      breeds: "Dalmat",
      gender: "Female",
      age: "3 Months",
      image:
        "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F47%2F2021%2F03%2F22%2Fdalmatian-teal-blanket-1305759922.jpg",
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae maxime, sint laboriosam quo odit deleniti voluptas laudantium fugit quis sequi sit cum? At fugit totam repellendus itaque ab animi laborum.",
    },
    {
      id: 4,
      breeds: "British Shorthair",
      gender: "Female",
      age: "3 Months",
      image:
        "https://www.natureplprints.com/p/729/blue-british-shorthair-kitten-standing-18252061.jpg",
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae maxime, sint laboriosam quo odit deleniti voluptas laudantium fugit quis sequi sit cum? At fugit totam repellendus itaque ab animi laborum.",
    },
    {
      id: 5,
      breeds: "Siberian",
      gender: "Male",
      age: "4 Months",
      image:
        "https://www.tica.org/media/com_jomclassifieds/items/136/classified_ad_478_gallery.jpg",
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae maxime, sint laboriosam quo odit deleniti voluptas laudantium fugit quis sequi sit cum? At fugit totam repellendus itaque ab animi laborum.",
    },
  ]);

  const [showMore, setShowMore] = useState(false);

  return (
    <div className="App">
      <header>
        <h1>Pet Shop</h1>
      </header>

      <ul className="pet-list">
        {pets.map((pet) => (
          <li>
            <img src={pet.image} alt="" width={300} />
            <h3>{pet.breeds}</h3>
            <p>{pet.gender}</p>
            <p>{pet.age}</p>            
              {showMore ? pet : `${pet.description}`}
              <button onClick={() => setShowMore(!showMore)}>
                {showMore ? 'Show Less' : 'Show More'}
              </button>
            
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
