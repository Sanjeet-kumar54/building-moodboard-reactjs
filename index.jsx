export function MoodBoardItem({color, image, description}){
  return <div style={{backgroundColor:color}} className="mood-board-item">
        <img className="mood-board-image" src={image}/>
        <h3 className="mood-board-text">{description}</h3>
    </div>
}

export function MoodBoard(){
    
    return <div>
        <h1 className="mood-board-heading">Destination Mood Board</h1>
        <div className="mood-board">
          <MoodBoardItem
            color= "white"
            image="https://cdn.freecodecamp.org/curriculum/labs/pathway.jpg"
            description= "Pathway"
            />
          <MoodBoardItem
            color= "blue"
            image="https://cdn.freecodecamp.org/curriculum/labs/shore.jpg"
            description= "Shore"
            />

            <MoodBoardItem
            color= "purple"
            image="https://cdn.freecodecamp.org/curriculum/labs/grass.jpg"
            description= "Grass"
            />
        </div>
      </div>
}
