import { FaFacebook,FaInstagram,FaPinterest,FaTwitter,FaYoutube } from "react-icons/fa";
export default function Footer() {
  return (
    <div>
      <div className="bg-black">
        <div className="p-8 ms-auto">
            <div className="grid grid-cols-4 gap-4 text-white">
                <div className="">
                    <div className="font-bold text-2xl mb-3">Contact the divublisher</div>
                    <div className="mb-3"><a href="mailto:mike@runo.com">mike@runo.com</a></div>
                    <div className="mb-2">+944 450 904 505</div>
                </div>
                <div className="">
                    <div className="font-bold text-2xl mb-3">Explorate</div>
                    <div className="mb-3 text-gray-300 ">
                        <ul>
                            <li className="mb-2 hover:text-white"><a href="#">About</a></li>
                            <li className="mb-2 hover:text-white"><a href="#">Partners</a></li>
                            <li className="mb-2 hover:text-white"><a href="#">Job Opportunities</a></li>
                            <li className="mb-2 hover:text-white"><a href="#">Advertise</a></li>
                            <li className="mb-2 hover:text-white"><a href="#">Membership</a></li>
                        </ul>
                    </div>
                </div>
                <div className="">
                    <div className="font-bold text-2xl mb-3">Explorate</div>
                    <address>191 Middleville Road,<br/> NY 1001, Sydney<br/> Australia</address>
                </div>
                <div className="">
                <div className="font-bold text-2xl mb-3">Connections</div>
                <ul className="flex gap-2">
                            <li className="ml-2"><a href="#"><FaFacebook /></a></li>
                            <li className="ml-2"><a href="#"><FaTwitter /></a></li>
                            <li className="ml-2"><a href="#"><FaYoutube/></a></li>
                            <li className="ml-2"><a href="#"><FaPinterest /></a></li>
                            <li className="ml-2"><a href="#"><FaInstagram /></a></li>
                        </ul>
                </div>
            </div>
        </div>
        <div className="bg-[#343A40]">
            <div className="flex justify-between p-4 text-white">
            <div className="font-bold text-xl">2021 | RUNO Publisher Studio</div>
            <div className="font-bold text-xl">Subscribe Now</div>

            </div>
        </div>
      </div>
    </div>
  );
}