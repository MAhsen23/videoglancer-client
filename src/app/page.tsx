"use client";
import React, { useState } from "react";
import { ApiService } from "../services/ApiService";
import ActivityIndicator from "../components/activityIndicator/ActivityIndicator";
import { CommonService } from "../services/CommonService";
import Head from "next/head";
import { MdClose } from "react-icons/md";
import InstructionComponent from "@/components/instructionComponent/InstructionComponent";

const Home = () => {
  const [videoLink, setVideoLink] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const showMessage = (message: string) => {
    setMessage(message);
    setTimeout(() => {
      setMessage("");
    }, 3000);
  };
  const fetchPdf = async (event: any) => {
    event.preventDefault();

    if (!videoLink) {
      showMessage("Please enter a youtube video link");
      return;
    }

    const youtubeRegex = /^(https?:\/\/)?(www\.)?(youtube\.com|youtu\.be)\/.+/;
    if (!youtubeRegex.test(videoLink)) {
      showMessage("Please enter a valid youtube video link");
      return;
    }

    setLoading(true);

    try {
      const response = await ApiService.fetchPdf(videoLink);
      const result = await response.json();
      if (result.warning) {
        showMessage(result.warning);
      } else if (result.pdf) {
        const link = document.createElement("a");
        link.href = `data:application/pdf;base64,${result.pdf}`;
        link.download = `${CommonService.getTimestamp()}.pdf`;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        showMessage("Pdf file downloaded successfully.");
      } else {
        showMessage(
          "Unable to generate PDF. Please check the video link and try again."
        );
      }
    } catch (error) {
      console.log("error during fetching pdf", error);
      showMessage(
        "An error occurred while generating the PDF. Please try again."
      );
    } finally {
      setLoading(false);
      setVideoLink("");
    }
  };
  const clearInput = () => {
    setVideoLink("");
    setLoading(false);
  };

  return (
    <>
      <Head>
        <title>Videoglancer - Convert YouTube Videos to PDFs</title>
        <meta
          name="description"
          content="Simplify your note-taking process with Videoglancer. Convert YouTube videos into PDFs for easy studying. Try it now!"
        />
        <meta
          name="robots"
          content="index, follow, max-snippet:-1, max-video-preview:-1, max-image-preview:large"
        />
        <link rel="canonical" href="https://videoglancer.top/" />
      </Head>

      <div className="mt-4 flex  flex-col items-center justify-center h-100 bg-white">
        <div className="rounded-md w-[90%] max-w-[920px] lg:w-[70%] mt-16 bg-gradient-to-r from-purple-500 to-pink-600 p-8 text-center text-white">
          <h1 className="text-4xl font-bold">Convert YouTube Videos to PDF</h1>
          <p className="mt-4 text-lg">
            Easily convert any YouTube video into a PDF document
          </p>
          <form className="mt-16" onSubmit={fetchPdf}>
            <div className="flex justify-center items-center w-[100%]">
              <div className="relative w-[80%]">
                <input
                  type="text"
                  className="w-full text-stone-800 p-4 pr-12 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter YouTube video link"
                  value={videoLink}
                  onChange={(e) => setVideoLink(e.target.value)}
                />
                {videoLink && (
                  <MdClose
                    onClick={clearInput}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 cursor-pointer text-gray-500"
                    size={20}
                  />
                )}
              </div>
            </div>
            {message ? (
              <div className="w-[100%] mt-4">
                <p className="text-red-200 text-center">{message}</p>
              </div>
            ) : (
              <div className="w-[100%] mt-4 opacity-0">...</div>
            )}
            <button
              disabled={loading}
              type="submit"
              className="w-[60%] mt-4 p-4 mb-10 bg-red-500 text-white font-semibold rounded-md hover:bg-red-600"
            >
              {loading && videoLink ? (
                <ActivityIndicator title={"Converting your video"} />
              ) : (
                "Convert to PDF"
              )}
            </button>
          </form>
        </div>
        <div className="w-[90%] max-w-[920px] lg:w-[70%] mt-16">
          <p className="text-md">
            The digital age, learning through online videos has become a popular
            way to acquire knowledge. However, retaining the information from
            these videos can be challenging. To address this issue, we introduce
            VideoGlancer – a revolutionary tool designed to convert YouTube
            videos into easily accessible PDF notes. This single-page website
            empowers users to effortlessly transform their favorite video
            content into comprehensive, portable, and visually appealing PDF
            documents, ensuring a seamless learning experience.
          </p>
        </div>
        <div className="w-[90%] max-w-[920px] lg:w-[70%] my-8">
          <InstructionComponent
            heading={"How to Use VideoGlancer:"}
            description={
              "Using VideoGlancer is a straightforward process that anyone, regardless of technical expertise, can follow:"
            }
            points={[
              {
                step: "Access the Website: ",
                desc: "Open your web browser and navigate to videoglancer.online.",
              },
              {
                step: "Enter the YouTube Video Link: ",
                desc: "After entering the YouTube video link, click the “Convert” button. VideoGlancer will process the video content and extract key information, creating an organized set of notes.",
              },
              {
                step: "Generate PDF Notes: ",
                desc: "Open your web browser and navigate to videoglancer.online.",
              },
              {
                step: "Preview and Customize: ",
                desc: "Once the PDF notes are generated, you can preview them to ensure accuracy. VideoGlancer allows you to customize the notes by highlighting important points, adding annotations, and adjusting formatting.",
              },
              {
                step: "Download and Save: ",
                desc: "Satisfied with the PDF notes? Download the PDF file to your device. You now have a comprehensive summary of the video’s content, making it convenient to revisit and study.",
              },
            ]}
          />
        </div>
        <div className="w-[90%] max-w-[920px] lg:w-[70%] my-8">
          <InstructionComponent
            heading={"Features of VideoGlancer:"}
            description={
              "VideoGlancer stands out with a range of features tailored to enhance the learning experience:"
            }
            points={[
              {
                step: "Automated Summarization: ",
                desc: "VideoGlancer’s advanced algorithms analyze the video’s audio and visual components to extract key concepts, ensuring that the generated PDF notes are comprehensive and accurate.",
              },
              {
                step: "Customization Options: ",
                desc: "Users can personalize the PDF notes by highlighting important points, adding notes, and adjusting the formatting to suit their learning style.",
              },
              {
                step: "Time-Stamped Notes: ",
                desc: "VideoGlancer embeds time stamps within the notes, enabling users to easily navigate to specific points in the video directly from the PDF.",
              },
              {
                step: "Offline Learning: ",
                desc: "With the downloadable PDF notes, users can access the summarized content offline, eliminating the need for a constant internet connection.",
              },
              {
                step: "Cross-Device Compatibility: ",
                desc: "VideoGlancer is designed to work seamlessly on various devices, including laptops, tablets, and smartphones, providing flexibility for on-the-go learning.",
              },
              {
                step: "Cloud Storage Integration: ",
                desc: "Users can opt to save their PDF notes to popular cloud storage platforms, ensuring easy access from anywhere and preventing data loss.",
              },
            ]}
          />
        </div>
        <div className="w-[90%] max-w-[920px] lg:w-[70%] my-8">
          <InstructionComponent
            separateLine={true}
            heading={"Frequently Asked Questions:"}
            description={""}
            points={[
              {
                step: "Is VideoGlancer free to use?",
                desc: "Yes, VideoGlancer offers a basic version with free access to its core features. For enhanced functionalities, premium subscription plans are available.",
              },
              {
                step: "What quality of PDF notes can I expect?",
                desc: "VideoGlancer’s algorithms strive to capture the essence of the video accurately. While minor adjustments might be needed, the generated PDF notes offer a comprehensive summary.",
              },
              {
                step: "Can I convert videos from sources other than YouTube?",
                desc: "Currently, VideoGlancer supports YouTube videos exclusively. However, we are actively exploring options to expand compatibility.",
              },
              {
                step: "Are my converted videos and notes private?",
                desc: "Yes, VideoGlancer respects user privacy. Your converted videos and notes are securely processed and not shared with any third parties.",
              },
              {
                step: "Can I edit the notes after conversion?",
                desc: "Absolutely. VideoGlancer provides editing features that allow you to add annotations, highlights, and make adjustments to the generated notes.",
              },
            ]}
          />
        </div>
        <div className="w-[90%] max-w-[920px] lg:w-[70%] mt-8">
          <h2 className="text-2xl font-bold text-black mb-4">Conclusion</h2>
          <p>
            VideoGlancer revolutionizes the way we consume online video content
            by offering a seamless and efficient solution for converting YouTube
            videos into comprehensive PDF notes. With its user-friendly
            interface, customization options, and innovative features,
            VideoGlancer empowers learners to retain information effectively.
            Whether you’re a student, a professional, or a lifelong learner,
            VideoGlancer makes it easier than ever to capture the essence of
            your favorite YouTube videos and access them whenever and wherever
            you want. Embrace the future of learning with VideoGlancer and
            elevate your educational journey.
          </p>
        </div>
      </div>
    </>
  );
};

export default Home;
