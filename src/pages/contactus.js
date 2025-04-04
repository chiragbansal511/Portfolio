export default function Contactus()
{
    return (
        <div id="contactus" className=" w-full h-64 bg-black">
            <div className=" w-full h-3/4 flex justify-evenly items-center px-10">
              <div className=" w-1/6 h-full">
              <div className=" mt-5 font-montserrat text-white font-semibold text-xl text-center">Chirag Bansal</div>
              <div className=" font-inter text-white font-normal text-sm text-justify p-6">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus illo numquam praesentium vero, laudantium recusandae!</div>
              </div>

              <div className=" w-1/6 h-full">
              <div className=" mt-5 font-montserrat text-white font-semibold text-xl text-center">Sent Mail</div>
              <div className=" font-inter text-white font-normal text-sm text-center p-6">chirageng.stu22@gmail.com <br />chiragbansal112004@gmail.com </div>

              </div>
              <div className=" w-1/6 h-full ">
              <div className=" mt-5 font-montserrat text-white font-semibold text-xl text-center">Make Call</div>
              <div className=" font-inter text-white font-normal text-sm text-center p-6">77174-65592 <br />82645-48620 </div>
              </div>
              <div className=" w-1/6 h-full ">
              <div className=" mt-5 font-montserrat text-white font-semibold text-xl text-center">Get in touch</div>
              <div className=" font-inter text-white font-normal text-sm text-center p-6">40 Tara Estate<br /> Abohar</div>
              </div>
            </div>
            <div className=" w-full h-1/4  flex justify-between items-center">
            <div className=" w-1/4 h-full flex justify-end items-center font-inter font-normal text-lg text-white">All Right Reserved</div>
            <div className=" w-1/4 h-full  flex justify-start items-center">
            <img src="https://img.icons8.com/color/480/linkedin.png" className=" w-10 h-10  mr-3"/>
            <img src="https://img.icons8.com/color/144/gmail-new.png" className=" w-10 h-10  mr-3"/>
            <img src="https://img.icons8.com/color/480/apple-phone.png" className=" w-10 h-10  mr-3"/>
            </div>
            </div>
        </div>
    );
}