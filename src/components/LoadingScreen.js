const LoadingScreen = ({ selectedCharacter, loadingScreenVisible }) => {
    return(
      <div style={{ display: loadingScreenVisible ? "block" : "none", backgroundImage: 'https://www.youtube.com/clip/UgkxB2knFegIi3MTCoP_pJzjWV6lTuBmkPZ5' }} className="loading-screen">
          <iframe width="1440" height="900" src="https://www.youtube.com/embed/ijp5FeOE_Yw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </div>
    )
  }
  
  export default LoadingScreen;


{/* <iframe width="1440" height="900" src="https://www.youtube.com/embed/ijp5FeOE_Yw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> */}