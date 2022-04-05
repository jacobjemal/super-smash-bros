const FighterScreen = ({isVisible, setVisible, slectedCharacter}) => {
    return(
        <div onClick={() => {setVisible(false)}}
        className="fighter-screen" 
        style={{
            display: isVisible ? "block" : "none" }}>
        <h2>{slectedCharacter.name}</h2>
        <img width='100' height='100' src={`https://www.smashbros.com/assets_v2/img/fighter/${slectedCharacter.name.toLowerCase()}/main.png`} />         
        <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum accusantium delectus enim asperiores blanditiis magni numquam. Accusamus minus debitis ipsum ad quibusdam et odio voluptate culpa similique, esse iusto ut!
        </p>
    </div>
    )
}
export default FighterScreen