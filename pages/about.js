import {Container,Row,Col,Button} from "react-bootstrap";
import Image from 'react-bootstrap/Image'
const about = () => {
    return (
        <>
        <div className="bg-gray-900">
        <div className="max-w-6 py-10 px-8 bg-white shadow-lg rounded-lg">
  <div class="flex justify-center md:justify-end -mt-16">
    <Image className="w-20 h-20 object-cover rounded-full border-2 border-indigo-500" src="assets/IMG_7529.jpg"/>
  </div>
  <div>
  <h2 className="text-xl text-dark">P R O F I L E</h2>
    <p className="mt-2 text-gray-600">I am a undergraduate at Sri Lanka Institute of Information Technology and interested in backend development
              web development, mobile application development and learning new technologies. Having
              And I am a mature team worker and adaptable to all challenging situations to working with
              a team and achieve goals, leadership skills and facing to the obstacles well</p>
  </div>
  <div clasName="flex justify-end mt-4">
    <a href="#" class="text-xl font-medium text-indigo-500">Thisara Hettikankanama</a>
  </div>
</div>
</div>
    </>

    );
}

export default about;