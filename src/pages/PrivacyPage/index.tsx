import privacyImage from "./privacy.png";

const PrivacyPage = () => (
  <div className="content-container mx-auto px-8 mt-8">
    <h1 className="text-3xl font-bold mb-4">Privacy</h1>
    <hr />
    <img src={privacyImage} alt=""/>
    <hr className="mb-4"/>
  </div>
);

export default PrivacyPage;
