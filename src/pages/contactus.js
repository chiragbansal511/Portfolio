export default function Contactus()
{
    return (
        <div id="contactus" className=" w-full h-72 max-[1300px]:h-96 bg-black">
            <div className=" w-full h-3/4  flex max-[1300px]:flex-col justify-evenly items-center px-10">
              <div className=" w-1/6 h-full max-[1300px]:w-full max-[1300px]:h-1/6">
              <div className=" mt-5 max-[1300px]:mt-0 font-montserrat text-white font-semibold text-xl max-[1300px]:text-base text-center">Chirag Bansal</div>
              <div className=" font-inter text-white font-normal text-sm max-[1300px]:text-xs text-justify p-6 max-[1300px]:p-0">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus illo numquam praesentium vero, laudantium recusandae!</div>
              </div>

              <div className=" w-1/6 h-full max-[1300px]:w-full max-[1300px]:h-1/6">
              <div className=" mt-5 max-[1300px]:mt-2 font-montserrat text-white font-semibold text-xl max-[1300px]:text-base text-center">Sent Mail</div>
              <div className=" font-inter text-white font-normal text-sm max-[1300px]:text-xs text-center p-6 max-[1300px]:p-0">chirageng.stu22@gmail.com <br />chiragbansal112004@gmail.com </div>

              </div>
              <div className=" w-1/6 h-full  max-[1300px]:w-full max-[1300px]:h-1/6">
              <div className=" mt-5 max-[1300px]:mt-2 font-montserrat text-white font-semibold text-xl max-[1300px]:text-base text-center">Make Call</div>
              <div className=" font-inter text-white font-normal text-sm max-[1300px]:text-xs text-center p-6 max-[1300px]:p-0 max-[1300px]:flex max-[1300px]:justify-center max-[1300px]:space-x-1"><div>77174-65592</div><div>82645-48620</div> </div>
              </div>
              <div className=" w-1/6 h-full  max-[1300px]:w-full max-[1300px]:h-1/6">
              <div className=" mt-5 max-[1300px]:mt-2 font-montserrat text-white font-semibold text-xl max-[1300px]:text-base text-center">Get in touch</div>
              <div className=" font-inter text-white font-normal text-sm max-[1300px]:text-xs text-center p-6 max-[1300px]:p-0 max-[1300px]:flex max-[1300px]:justify-center max-[1300px]:space-x-1"><div>40 Tara Estate</div> <div>, Abohar</div></div>
              </div>
            </div>
            <div className=" w-full h-1/4  flex justify-between items-center border-y border-[#a3a2a5]">
            <div className=" w-1/4 h-full max-[1300px]:w-2/5 flex justify-end items-center font-inter font-normal text-lg max-[1300px]:text-base text-white">All Right Reserved</div>
            <div className=" w-1/4 h-full  flex justify-start items-center">
            <img src="https://img.icons8.com/color/480/linkedin.png" className=" w-10 h-10 max-[1300px]:w-5 max-[1300px]:h-5  mr-3"/>
            <img src="https://img.icons8.com/color/144/gmail-new.png" className=" w-10 h-10 max-[1300px]:w-5 max-[1300px]:h-5  mr-3"/>
            <img src="https://img.icons8.com/color/480/apple-phone.png" className=" w-10 h-10 max-[1300px]:w-5 max-[1300px]:h-5  mr-3"/>
            </div>
            </div>
        </div>
    );
}