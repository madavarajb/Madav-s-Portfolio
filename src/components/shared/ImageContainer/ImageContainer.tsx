
import DefaultProfile from "../../../assets/ProfilePlaceHolder.jpg";

const ImageContainer = () => {
  return (
    <div className="bg-amber-500 w-[350px] h-[350px] rounded-2xl shadow-[5px_5px_0_0_#3a3f47] ">
      <img src={DefaultProfile} className="w-full h-full object-cover rounded-2xl"></img>
    </div>
  );
};

export default ImageContainer;
