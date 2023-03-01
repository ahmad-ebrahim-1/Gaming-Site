import './App.css';
import { useState } from 'react';

function App() {

  const [isShow, setIsShow] = useState(false);
  const [title, setTitle] = useState("");
  const [plot, setPlot] = useState("");
  const [size, setSize] = useState("");
  const [year, setYear] = useState("");
  const [photoIndex, setPhotoIndex] = useState(0);

  const data = [
    {
      heading: "Assassin's Creed 1",
      story: "Altaïr is first shown attempting to retrieve one of a series of artifacts known as the 'Pieces of Eden' from Solomon's Temple with the help of Malik Al-Sayf, and his brother Kadar, but they are stopped by Robert de Sablé, Grand Master of the Knights Templar and sworn enemy of the Assassins.",
      size: "7 GB",
      year: "2007"
    },
    {
      heading: "Ezio Collection",
      story: "Ezio Auditore da Firenze (1459 – 1524) was a Florentine nobleman during the Renaissance, and, unbeknownst to most historians and philosophers, a Master Assassin and the Mentor of the Italian Brotherhood of Assassins, a title which he held from 1503 to 1513. He is also an ancestor of William and Desmond Miles, as well as Clay Kaczmarek.",
      size: "28 GB",
      year: "2009"
    },
    {
      heading: "Assassin's Creed 3",
      story: "Assassin's Creed III is a 2012 sandbox style action-adventure video game that is developed by Ubisoft Montreal and published by Ubisoft. It is the fifth main title in the Assassin's Creed series, and is a direct sequel to Assassin's Creed: Revelations. The game tells the stories of Haytham Kenway and Ratonhnhaké:ton, set in the American Northeast from 1754 - 1783, during the Seven Years' War and American Revolutionary Wars.",
      size: "16 GB",
      year: "2012"
    },
    {
      heading: " Assassin's Creed 4 Black Flag",
      story: "Assassin's Creed IV: Black Flag is a 2013 action-adventure game, and the sixth main installment in the Assassin's Creed series. A sequel to 2012's Assassin's Creed III, the game has the player take on the role of an Abstergo Entertainment research analyst as they explore the story of Edward Kenway—father to Haytham Kenway, grandfather to Ratonhnhaké:ton, and an ancestor of Desmond Miles.",
      size: "30 GB",
      year: "2013"
    },
    {
      heading: "Assassin's Creed Rogue",
      story: "Story Assassin's Creed Rogue tells the story of Shay Patrick Cormac, a former Assassin now marked for death. Desperate to survive, he becomes a Templar and begins hunting down his brothers.",
      size: "12 GB",
      year: "2014"
    },
    {
      heading: "Assassin's Creed Unity",
      story: "Assassin's Creed: Unity is a 2014 sandbox action adventure game, and a sequel to 2013's Assassin's Creed IV: Black Flag, the game has the player take on the role of an Initiate as they explore the story of Arno Dorian, who joins the Assassins to investigate the murder of his adoptive father on behalf of his adoptive sister Élise de la Serre, a member of the Templars.",
      size: "50 GB",
      year: "2014"
    },
    {
      heading: "Assassin's Creed Syndicate",
      story: "Assassin's Creed Syndicate is an open-world action/adventure game developed and published by Ubisoft. The game centers on Jacob and Evie Frye, a pair of twins who journey to London in 1868 and join the Assassin Order in order to fight the encroaching corruption of industrialism.",
      size: "40 GB",
      year: "2015"
    },
    {
      heading: "Assassin's Creed Origins",
      story: "Bayek of Siwa is the main protagonist of Assassin’s Creed Origins. A medjay of Egypt, he is tasked with protecting his people, helping them overcome whatever trials and tribulations should arise during their lives. However, after failing to defend his son against the dark forces that work in his nation’s shadows, Bayek is set on a different path.",
      size: "42 GB",
      year: "2016"
    },
    {
      heading: "Assassin's Creed Odyssey",
      story: "Assassin’s Creed Odyssey Story Summary Expanding to the Rest of Greece Upon arriving at Megaris, Kassandra catches a glimpse of Nikolaos, and is quickly greeted by Stentor, his adopted son. She volunteers to fight for Sparta in the upcoming conquest battle, and helps to weaken Athens’ hold on the region before then.",
      size: "46 GB",
      year: "2018"
    },
    {
      heading: "Assassin's Creed Valhalla",
      story: "Unlike some of the previous Assassin's Creed titles, Valhalla has a much more centralized story following Evior's journey from Norway to England, and seeking to build out a new home for their viking clan by forming alliances to take over the four kingdoms around you.",
      size: "47 GB",
      year: "2020"
    },
  ];

  function renderContent(index, photoIndex) {
    setIsShow(true);
    setPhotoIndex(photoIndex);
    setTitle(data[index].heading);
    setPlot(data[index].story);
    setSize(data[index].size);
    setYear(data[index].year);
  }

  function handleMouseLeave() {
    setIsShow(false);
    setPhotoIndex(0);
  }

  return (
    <div className="App">
      <div className={`bg ${"image-" + photoIndex}`}></div>
      <div className='wrapper'>
        <div className="list">
          <div className="image-1" onMouseEnter={() => renderContent(0, 1)}
            onMouseLeave={() => handleMouseLeave()}>
          </div>
          <div className="image-2" onMouseEnter={() => renderContent(1, 2)}
            onMouseLeave={() => handleMouseLeave()}>
          </div>
          <div className="image-3" onMouseEnter={() => renderContent(2, 3)}
            onMouseLeave={() => handleMouseLeave()}>
          </div>
          <div className="image-4" onMouseEnter={() => renderContent(3, 4)}
            onMouseLeave={() => handleMouseLeave()}>
          </div>
          <div className="image-5" onMouseEnter={() => renderContent(4, 5)}
            onMouseLeave={() => handleMouseLeave()}>
          </div>
          <div className="image-6" onMouseEnter={() => renderContent(5, 6)}
            onMouseLeave={() => handleMouseLeave()}>
          </div>
          <div className="image-7" onMouseEnter={() => renderContent(6, 7)}
            onMouseLeave={() => handleMouseLeave()}>
          </div>
          <div className="image-8" onMouseEnter={() => renderContent(7, 8)}
            onMouseLeave={() => handleMouseLeave()}>
          </div>
          <div className="image-9" onMouseEnter={() => renderContent(8, 9)}
            onMouseLeave={() => handleMouseLeave()}>
          </div>
          <div className="image-10" onMouseEnter={() => renderContent(9, 10)}
            onMouseLeave={() => handleMouseLeave()}>
          </div>
        </div>
        <div className="content">
          <h1 className={`heading ${isShow ? "show" : "heading"}`}>{title}</h1>
          <p className={`plot ${isShow ? "show" : "plot"}`}>{plot}</p>
          <p className={`info ${isShow ? "show" : "info"}`}>{`size: ${size} | year: ${year}`}</p>
        </div>
      </div>
    </div>
  );
}

export default App;
