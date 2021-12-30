import Header from "../../components/Header";
import Artpiece from "../../components/Artpiece";
import FeedbackForm from "../../components/FeedbackForm";

const Artworks = () => {
  return(
    <div id="works">
      <Header title="Feed" />
      <Artpiece />
      <FeedbackForm />
    </div>
  )
}

export default Artworks;