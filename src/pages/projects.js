import Projectcard from "../components/projectcard";

export default function Projects() {


    return (
        <div className=" z-30 flex flex-col w-full h-screen">
            <div className="w-full h-16 flex justify-center items-center">
                <div className="w-40 text-[#754ef9] rounded-3xl text-lg max-[1300px]:text-base flex justify-center items-center font-normal bg-[#f1edfe] py-2 mb-5 font-inter px-2">
                    PROJECTS
                </div>
            </div>

            <div className="w-full h-full flex justify-center items-center gap-2 z-20">
                <div className=" w-2/5 h-4/5 flex flex-col justify-center gap-y-2">

                    <div className=" w-full  h-3/6 hover:h-5/6 transition-all duration-500"><Projectcard name="ProfileGPT" about="A web app that creates personalized AI chatbots from resume data using Flask, React, and FastAPI. It automates the chatbot creation process and supports sharing via unique URLs."></Projectcard></div>
                    <div className=" w-full  h-3/6 hover:h-5/6 transition-all duration-500"><Projectcard name="QuickCrave" about="A contactless food ordering platform built with Node.js and React. It features real-time order updates, a smart scheduling system, and a dashboard for live sales and order tracking."></Projectcard></div>

                </div>
                <div className=" w-2/5 h-4/5 flex flex-col justify-center gap-y-2">

                    <div className=" w-full  h-3/6 hover:h-5/6 transition-all duration-500"><Projectcard name="Biometrics Detection from Speech" about="A speaker recognition system using a pre-trained ECAPA-TDNN model to identify individuals from short audio clips. Built with PyTorch and torchaudio for biometric embedding extraction."></Projectcard></div>
                    <div className=" w-full  h-3/6 hover:h-5/6 transition-all duration-500"><Projectcard name="Disease Detection Model" about="A tomato leaf disease classification model using transfer learning with MobileNetV2 in TensorFlow/Keras. Achieved 88.28% accuracy on an 11-class dataset.

"></Projectcard></div>

                </div>
            </div>
        </div>
    );
}